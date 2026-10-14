import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";
import { ghlUpsertContact } from "../_shared/ghl.ts";

const BodySchema = z.object({
  email: z.string().trim().email("Please enter a valid email address").max(255),
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[0-9+()\-.\s]{7,30}$/, "Please enter a valid phone number")
    .optional()
    .nullable()
    .or(z.literal("")),
  company: z.string().trim().max(150).optional().nullable(),
  source: z.string().trim().max(50).optional(),
  // Honeypot: must stay empty.
  website: z.string().max(0).optional().nullable(),
});

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const raw = await req.json().catch(() => null);
    const parsed = BodySchema.safeParse(raw);
    if (!parsed.success) {
      return json({ error: parsed.error.flatten().fieldErrors }, 400);
    }

    const { email: rawEmail, firstName, lastName, source } = parsed.data;
    const phone = parsed.data.phone ? String(parsed.data.phone) : null;
    const company = parsed.data.company || null;
    const email = rawEmail.toLowerCase();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: existing, error: selectError } = await supabase
      .from("newsletter_subscribers")
      .select("id, unsubscribe_token, ghl_contact_id")
      .eq("email", email)
      .maybeSingle();

    if (selectError) {
      console.error("newsletter-subscribe select failed:", selectError.message);
      return json({ error: "Could not save your subscription. Please try again." }, 500);
    }

    let row = existing;

    if (existing) {
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .update({
          status: "subscribed",
          first_name: firstName || undefined,
          last_name: lastName || undefined,
          phone: phone ?? undefined,
          company: company ?? undefined,
          source: source ?? "site",
        })
        .eq("id", existing.id)
        .select("id, unsubscribe_token, ghl_contact_id")
        .single();
      if (error) {
        console.error("newsletter-subscribe update failed:", error.message);
        return json({ error: "Could not save your subscription. Please try again." }, 500);
      }
      row = data;
    } else {
      const { data, error } = await supabase
        .from("newsletter_subscribers")
        .insert({
          email,
          first_name: firstName || null,
          last_name: lastName || null,
          phone,
          company,
          source: source ?? "site",
        })
        .select("id, unsubscribe_token, ghl_contact_id")
        .single();
      if (error) {
        console.error("newsletter-subscribe insert failed:", error.message);
        return json({ error: "Could not save your subscription. Please try again." }, 500);
      }
      row = data;
    }

    const ghl = await ghlUpsertContact({
      email,
      firstName,
      lastName,
      phone,
      company,
      source: source ?? "site",
    });

    if (ghl.status === "ok") {
      const { error } = await supabase
        .from("newsletter_subscribers")
        .update({ ghl_contact_id: ghl.contactId, ghl_synced_at: new Date().toISOString() })
        .eq("id", row!.id);
      if (error) console.error("newsletter-subscribe ghl sync write failed:", error.message);
    }

    return json({
      success: true,
      crm: ghl.status,
      unsubscribeToken: row!.unsubscribe_token,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("newsletter-subscribe unexpected error:", message);
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
});