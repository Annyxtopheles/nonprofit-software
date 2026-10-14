// One-shot backfill: pushes every not-yet-synced subscriber into GHL.
// Run this once after the GHL sub-location credentials are added.
import { createClient } from "npm:@supabase/supabase-js@2";
import { corsHeaders } from "npm:@supabase/supabase-js@2/cors";
import { ghlConfig, ghlUpsertContact, ghlUnsubscribeContact } from "../_shared/ghl.ts";

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    if (!ghlConfig()) {
      return json(
        { error: "GHL is not connected yet. Add GHL_API_KEY and GHL_LOCATION_ID first." },
        400,
      );
    }

    const adminSecret = Deno.env.get("NEWSLETTER_ADMIN_SECRET");
    if (adminSecret) {
      const provided = req.headers.get("x-admin-secret");
      if (provided !== adminSecret) return json({ error: "Unauthorized" }, 401);
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    const { data: rows, error } = await supabase
      .from("newsletter_subscribers")
      .select("id, email, first_name, last_name, phone, company, source, status, ghl_contact_id")
      .is("ghl_synced_at", null)
      .limit(500);

    if (error) {
      console.error("newsletter-sync-ghl select failed:", error.message);
      return json({ error: "Could not read subscribers." }, 500);
    }

    let synced = 0;
    const failures: Array<{ email: string; details: string }> = [];

    for (const row of rows ?? []) {
      const result =
        row.status === "unsubscribed"
          ? await ghlUnsubscribeContact(row.ghl_contact_id, row.email)
          : await ghlUpsertContact({
              email: row.email,
              firstName: row.first_name,
              lastName: row.last_name,
              phone: row.phone,
              company: row.company,
              source: row.source,
            });

      if (result.status === "error") {
        failures.push({ email: row.email, details: result.details });
        continue;
      }

      const contactId = result.status === "ok" ? result.contactId : null;
      const { error: writeError } = await supabase
        .from("newsletter_subscribers")
        .update({ ghl_contact_id: contactId, ghl_synced_at: new Date().toISOString() })
        .eq("id", row.id);

      if (writeError) {
        failures.push({ email: row.email, details: writeError.message });
        continue;
      }
      synced += 1;
    }

    return json({ success: true, processed: rows?.length ?? 0, synced, failures });
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    console.error("newsletter-sync-ghl unexpected error:", message);
    return json({ error: "Something went wrong." }, 500);
  }
});