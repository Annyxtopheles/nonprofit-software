import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { Loader2, Check } from "lucide-react";
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
    <form onSubmit={handleSubmit} className={compact ? "space-y-2.5" : "space-y-3.5"}>
      <div className={compact ? "grid grid-cols-1 gap-2" : "grid grid-cols-1 sm:grid-cols-2 gap-3.5"}>
        <Input
          type="text"
          required
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First name"
          maxLength={100}
          autoComplete="given-name"
          aria-label="First name"
          className="h-11 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white text-sm"
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
          className="h-11 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white text-sm"
        />
      </div>

      <div className={compact ? "space-y-2" : "grid grid-cols-1 sm:grid-cols-2 gap-3.5"}>
        <Input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Work email"
          maxLength={255}
          autoComplete="email"
          aria-label="Work email"
          className="h-11 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white text-sm"
        />
        {!compact ? (
          <Input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder="Organization (optional)"
            maxLength={150}
            autoComplete="organization"
            aria-label="Organization (optional)"
            className="h-11 rounded-xl bg-slate-50/50 border-slate-200 focus:bg-white text-sm"
          />
        ) : null}
      </div>

      <Button
        type="submit"
        disabled={loading}
        className="w-full h-11 sm:h-12 bg-[#108a00] hover:bg-[#0e7700] text-white font-semibold text-sm sm:text-base rounded-xl shadow-xs transition-all cursor-pointer mt-1"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Subscribing…
          </>
        ) : (
          "Subscribe to Monthly Insights"
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

      <p className={`text-center text-[#5E6D55] ${compact ? "text-xs" : "text-xs sm:text-[13px]"} pt-1`}>
        No spam. 1 practical email per month. Unsubscribe anytime. See our{" "}
        <Link to="/privacy" className="text-[#108a00] hover:underline font-medium">
          Privacy Policy
        </Link>
        .
      </p>
    </form>
  );

  const success = (
    <div className={`flex items-start gap-3 p-4 rounded-xl bg-[#e7f5e3]/60 border border-[#108a00]/20 ${compact ? "text-sm" : ""}`}>
      <div className="w-8 h-8 rounded-full bg-[#108a00]/15 flex items-center justify-center shrink-0">
        <Check className="w-4 h-4 text-[#108a00]" strokeWidth={2.5} />
      </div>
      <div>
        <p className="font-semibold text-[#001E00]">You&apos;re on the list.</p>
        <p className="text-sm text-[#5E6D55] mt-0.5">
          Check your inbox — you can unsubscribe anytime directly or via our{" "}
          <Link to="/unsubscribe" className="text-[#108a00] hover:underline font-medium">
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
    <section className="px-4 sm:px-6 lg:px-8 py-16 md:py-20 bg-[#F9FBF8] border-t border-slate-100">
      <div className="max-w-2xl mx-auto">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-7 sm:p-10 shadow-[0_4px_24px_rgba(28,52,34,0.04)]">
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#001E00] leading-tight mb-2.5">
              Nonprofit AI insights, once a month
            </h2>
            <p className="text-sm sm:text-base text-[#5E6D55] max-w-lg mx-auto leading-relaxed">
              Practical ways nonprofits use AI to cut admin work, strengthen governance, and
              grow donor relationships — no fluff, just actionable playbooks.
            </p>
          </div>
          <div>{done ? success : form}</div>
        </div>
      </div>
    </section>
  );
}