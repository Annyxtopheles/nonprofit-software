import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Mail, Check } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface NewsletterSignupProps {
  /** "section" = full homepage block, "compact" = footer/inline */
  variant?: "section" | "compact";
  source?: string;
}

export function NewsletterSignup({ variant = "section", source }: NewsletterSignupProps) {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState(""); // honeypot
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const compact = variant === "compact";

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (loading) return;

    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      toast({
        title: "Check your email address",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    if (!firstName.trim() || !lastName.trim()) {
      toast({
        title: "Name required",
        description: "Please enter both your first and last name.",
        variant: "destructive",
      });
      return;
    }

    const trimmedPhone = phone.trim();
    if (trimmedPhone && !/^[0-9+()\-.\s]{7,30}$/.test(trimmedPhone)) {
      toast({
        title: "Check your phone number",
        description: "Please enter a valid phone number, or leave it blank.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("newsletter-subscribe", {
        body: {
          email: trimmed,
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          phone: trimmedPhone || null,
          company: company.trim() || null,
          source: source ?? (compact ? "site_footer" : "home_section"),
          website,
        },
      });

      if (error) throw error;
      if (data?.error) throw new Error(typeof data.error === "string" ? data.error : "Subscription failed");

      setDone(true);
      setEmail("");
      setFirstName("");
      setLastName("");
      setPhone("");
      setCompany("");
      toast({
        title: "You're subscribed",
        description: "Thanks! Nonprofit AI insights are on the way.",
      });
    } catch (err) {
      const message = err instanceof Error ? err.message : "Please try again in a moment.";
      console.error("Newsletter subscribe failed:", message);
      toast({
        title: "Subscription failed",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  const form = (
    <form onSubmit={handleSubmit} className={compact ? "space-y-2" : "space-y-3"}>
      <div className={compact ? "grid grid-cols-1 gap-2" : "grid grid-cols-1 sm:grid-cols-2 gap-3"}>
        <Input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          maxLength={100}
          autoComplete="given-name"
          aria-label="First name"
        />
        <Input
          type="text"
          required
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last name"
          maxLength={100}
          autoComplete="family-name"
          aria-label="Last name"
        />
      </div>

      <Input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@yournonprofit.org"
        maxLength={255}
        autoComplete="email"
        aria-label="Email address"
      />

      {!compact && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone (optional)"
            maxLength={30}
            autoComplete="tel"
            aria-label="Phone number (optional)"
          />
          <Input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Organization (optional)"
            maxLength={150}
            autoComplete="organization"
            aria-label="Organization (optional)"
          />
        </div>
      )}

      <Button type="submit" disabled={loading} className={compact ? "w-full" : "w-full sm:w-auto"}>
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Subscribing…
          </>
        ) : (
          "Subscribe"
        )}
      </Button>

      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        name="website"
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <p className={`text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>
        No spam. Unsubscribe anytime. See our{" "}
        <Link to="/privacy" className="text-primary hover:underline">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );

  const success = (
    <div className={`flex items-start gap-3 ${compact ? "text-sm" : ""}`}>
      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
        <Check className="w-4 h-4 text-primary" />
      </div>
      <div>
        <p className="font-semibold text-foreground">You&apos;re on the list.</p>
        <p className="text-muted-foreground">
          Check your inbox — you can unsubscribe from any email or on our{" "}
          <Link to="/unsubscribe" className="text-primary hover:underline">
            unsubscribe page
          </Link>
          .
        </p>
      </div>
    </div>
  );

  if (compact) {
    return (
      <div>
        <h4 className="text-sm font-bold text-foreground mb-2">Newsletter</h4>
        {done ? success : form}
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12 md:py-16 bg-[#e7f5e3]/30 border-t border-border">
      <div className="max-w-3xl mx-auto text-center">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
          <Mail className="w-6 h-6 text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
          Nonprofit AI insights, once a month
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Practical ways nonprofits are using AI to cut admin work, strengthen governance, and
          grow donor relationships — plus product updates from Nonprofit Control Tower.
        </p>
        <div className="max-w-xl mx-auto text-left">{done ? success : form}</div>
      </div>
    </section>
  );
}