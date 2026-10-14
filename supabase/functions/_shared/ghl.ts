// Shared GoHighLevel (GHL) client.
// Safe to call before credentials exist: every helper reports `skipped`
// when the secrets are missing, so sign-ups still succeed and can be
// backfilled later with the newsletter-sync-ghl function.

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_API_VERSION = "2021-07-28";

export type GhlResult =
  | { status: "skipped"; reason: string }
  | { status: "ok"; contactId: string | null }
  | { status: "error"; httpStatus: number; details: string };

export function ghlConfig() {
  const apiKey = Deno.env.get("GHL_API_KEY");
  const locationId = Deno.env.get("GHL_LOCATION_ID");
  const tag = Deno.env.get("GHL_NEWSLETTER_TAG") ?? "newsletter";
  if (!apiKey || !locationId) return null;
  return { apiKey, locationId, tag };
}

function headers(apiKey: string) {
  return {
    Authorization: `Bearer ${apiKey}`,
    Version: GHL_API_VERSION,
    "Content-Type": "application/json",
    Accept: "application/json",
  };
}

export async function ghlUpsertContact(input: {
  email: string;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  company?: string | null;
  source?: string | null;
}): Promise<GhlResult> {
  const cfg = ghlConfig();
  if (!cfg) return { status: "skipped", reason: "GHL credentials not configured" };

  const tags = [cfg.tag];
  if (input.source) tags.push(`source:${input.source}`);

  try {
    const res = await fetch(`${GHL_BASE}/contacts/upsert`, {
      method: "POST",
      headers: headers(cfg.apiKey),
      body: JSON.stringify({
        locationId: cfg.locationId,
        email: input.email,
        firstName: input.firstName ?? undefined,
        lastName: input.lastName ?? undefined,
        phone: input.phone ?? undefined,
        companyName: input.company ?? undefined,
        tags,
        source: "nonprofitai.software newsletter",
      }),
    });

    if (!res.ok) {
      const details = await res.text();
      console.error(`GHL upsert failed [${res.status}]: ${details}`);
      return { status: "error", httpStatus: res.status, details };
    }

    const body = await res.json().catch(() => ({}));
    const contactId = body?.contact?.id ?? body?.id ?? null;
    return { status: "ok", contactId };
  } catch (err) {
    const details = err instanceof Error ? err.message : String(err);
    console.error(`GHL upsert threw: ${details}`);
    return { status: "error", httpStatus: 0, details };
  }
}

export async function ghlUnsubscribeContact(contactId: string | null, email: string): Promise<GhlResult> {
  const cfg = ghlConfig();
  if (!cfg) return { status: "skipped", reason: "GHL credentials not configured" };

  try {
    let id = contactId;

    if (!id) {
      const lookup = await fetch(
        `${GHL_BASE}/contacts/?locationId=${encodeURIComponent(cfg.locationId)}&query=${encodeURIComponent(email)}`,
        { headers: headers(cfg.apiKey) },
      );
      if (!lookup.ok) {
        const details = await lookup.text();
        console.error(`GHL lookup failed [${lookup.status}]: ${details}`);
        return { status: "error", httpStatus: lookup.status, details };
      }
      const found = await lookup.json().catch(() => ({}));
      id = found?.contacts?.[0]?.id ?? null;
    }

    if (!id) return { status: "ok", contactId: null };

    // Remove the newsletter tag (best effort) and set DND so no further email is sent.
    const untag = await fetch(`${GHL_BASE}/contacts/${id}/tags`, {
      method: "DELETE",
      headers: headers(cfg.apiKey),
      body: JSON.stringify({ tags: [cfg.tag] }),
    });
    if (!untag.ok) {
      console.error(`GHL untag failed [${untag.status}]: ${await untag.text()}`);
    }

    const dnd = await fetch(`${GHL_BASE}/contacts/${id}`, {
      method: "PUT",
      headers: headers(cfg.apiKey),
      body: JSON.stringify({ dnd: true, tags: [] }),
    });
    if (!dnd.ok) {
      const details = await dnd.text();
      console.error(`GHL dnd update failed [${dnd.status}]: ${details}`);
      return { status: "error", httpStatus: dnd.status, details };
    }

    return { status: "ok", contactId: id };
  } catch (err) {
    const details = err instanceof Error ? err.message : String(err);
    console.error(`GHL unsubscribe threw: ${details}`);
    return { status: "error", httpStatus: 0, details };
  }
}