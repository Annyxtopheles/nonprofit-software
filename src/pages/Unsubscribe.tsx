import { FormEvent, useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Loader2, MailX, Check, AlertCircle } from "lucide-react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type State = "idle" | "loading" | "done" | "error";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [state, setState] = useState<State>(token ? "loading" : "idle");
  const [message, setMessage] = useState<string>("");
  const [email, setEmail] = useState("");
  const attempted = useRef(false);

  async function unsubscribe(payload: { token?: string; email?: string }) {
    setState("loading");
    try {
      const { data, error } = await supabase.functions.invoke("newsletter-unsubscribe", {
        body: payload,
      });
      if (error) throw error;
      if (data?.error) throw new Error("We couldn't process that unsubscribe request.");
      setState("done");
      setMessage(
        data?.email
          ? `${data.email} has been removed from our newsletter.`
          : "That address is no longer on our newsletter list.",
      );
    } catch (err) {
      const detail = err instanceof Error ? err.message : String(err);
      console.error("Unsubscribe failed:", detail);
      setState("error");
      setMessage("We couldn't process your request. Please try again or contact us.");
    }
  }

  useEffect(() => {
    if (token && !attempted.current) {
      attempted.current = true;
      void unsubscribe({ token });
    }
  }, [token]);

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const trimmed = email.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmed)) {
      setState("error");
      setMessage("Please enter a valid email address.");
      return;
    }
    void unsubscribe({ email: trimmed });
  }

  return (
    <SiteLayout>
      <section className="px-6 lg:px-12 py-20">
        <div className="max-w-xl mx-auto text-center">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
            {state === "done" ? (
              <Check className="w-6 h-6 text-primary" />
            ) : state === "error" ? (
              <AlertCircle className="w-6 h-6 text-destructive" />
            ) : (
              <MailX className="w-6 h-6 text-primary" />
            )}
          </div>

          <h1 className="text-3xl font-bold text-foreground mb-3">
            {state === "done" ? "You've been unsubscribed" : "Unsubscribe"}
          </h1>

          {state === "loading" && (
            <p className="text-muted-foreground flex items-center justify-center gap-2">
              <Loader2 className="w-4 h-4 animate-spin" /> Processing your request…
            </p>
          )}

          {state === "done" && (
            <p className="text-muted-foreground">
              {message} You can re-subscribe at any time from our homepage.
            </p>
          )}

          {state !== "loading" && state !== "done" && (
            <>
              <p className="text-muted-foreground mb-6">
                Enter the email address you'd like removed from the NonProfitAI newsletter.
              </p>
              {state === "error" && message && (
                <p className="text-sm text-destructive mb-4">{message}</p>
              )}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 text-left">
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@yournonprofit.org"
                  maxLength={255}
                  aria-label="Email address"
                  className="flex-1"
                />
                <Button type="submit">Unsubscribe</Button>
              </form>
            </>
          )}
        </div>
      </section>
    </SiteLayout>
  );
};

export default Unsubscribe;