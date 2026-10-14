import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { z } from "npm:zod@3.23.8";
import { ghlUnsubscribeContact } from "../_shared/ghl.ts";

const BodySchema = z
  .object({
    token: z.string().trim().uuid().optional(),
    email: z.string().trim().email("Please enter a valid email address").max(255).optional(),
  })
  .refine((v) => Boolean(v.token || v.email), {
    message: "An unsubscribe link or email address is required",
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
      return json({ error: parsed.error.flatten() }, 400);
    }

    const token = parsed.data.token;
    const email = parsed.data.email?.toLowerCase();

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    let query = supabase
      .from("newsletter_subscribers")
      .select("id, email, ghl_contact_id, status");
    query = token ? query.eq("unsubscribe_token", token) : query.eq("email", email!);

    const { data: row, error: selectError } = await query.maybeSingle();

    if (selectError) {
      console.error("newsletter-unsubscribe select failed:", selectError.message);
      return json({ error: "Could not process your request. Please try again." }, 500);
    }

    if (!row) {
      // Do not leak whether an email exists on the list.
      return json({ success: true, alreadyRemoved: true });
    }

    const { error: updateError } = await supabase
      .from("newsletter_subscribers")
      .update({ status: "unsubscribed" })
      .eq("id", row.id);

    if (updateError) {
      console.error("newsletter-unsubscribe update failed:", updateError.message);
      return json({ error: "Could not process your request. Please try again." }, 500);
    }

    const ghl = await ghlUnsubscribeContact(row.ghl_contact_id, row.email);
    if (ghl.status === "error") {
      console.error("newsletter-unsubscribe CRM sync failed:", ghl.details);
    }

    return json({ success: true, crm: ghl.status, email: row.email });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("newsletter-unsubscribe unexpected error:", message);
    return json({ error: "Something went wrong. Please try again." }, 500);
  }
});