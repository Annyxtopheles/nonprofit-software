import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import { Layers, CheckCircle, ArrowRight, Receipt, ShieldCheck } from "lucide-react";

const CONTACT_HREF = "https://collabai.software/contact";
const GITHUB_HREF = CONTACT_HREF; // TODO: replace with public repo URL once provided

type Tier = {
  name: string;
  setup: string;
  setupLabel: string;
  subscription: string;
  subscriptionLabel: string;
  description: string;
  infra?: string;
  features: string[];
  cta: string;
  ctaHref: string;
  popular?: boolean;
};

const tiers: Tier[] = [
  {
    name: "Community",
    setup: "$0",
    setupLabel: "setup",
    subscription: "$0",
    subscriptionLabel: "/year",
    description: "Self-serve. Deploy it yourself with our docs.",
    features: [
      "GitHub source + Lovable remix",
      "Documentation only",
      "No SJ support",
    ],
    cta: "Get It Free on GitHub",
    ctaHref: GITHUB_HREF,
  },
  {
    name: "Essential",
    setup: "$2,500",
    setupLabel: "one-time setup",
    subscription: "$2,990",
    subscriptionLabel: "/year",
    description: "We provision, deploy, and support your first rollout.",
    infra: "Client's own infra (Supabase + Lovable + Claude, paid directly, zero SJ markup): ~$130/month",
    features: [
      "Provisioning + deployment",
      "1 CRM integration",
      "Branding",
      "2 training sessions",
      "30-day hypercare",
      "Email support (2-day response)",
      "Staff sign-in via your own Google/Azure AD at no extra cost",
    ],
    cta: "Schedule a Call",
    ctaHref: CONTACT_HREF,
  },
  {
    name: "Professional",
    setup: "$6,000",
    setupLabel: "one-time setup",
    subscription: "$6,990",
    subscriptionLabel: "/year",
    description: "Everything in Essential, plus deeper integration and tuning.",
    popular: true,
    infra: "Client's own infra: ~$150/month",
    features: [
      "3 integrations",
      "CRM data migration",
      "Agent tuning",
      "4 training sessions",
      "60-day hypercare",
      "Priority support (1-day response)",
      "Quarterly business review",
    ],
    cta: "Schedule a Call",
    ctaHref: CONTACT_HREF,
  },
  {
    name: "Impact",
    setup: "$12,000",
    setupLabel: "one-time setup",
    subscription: "$13,990",
    subscriptionLabel: "/year",
    description: "Everything in Professional, plus SSO, custom agents, and a named CSM.",
    infra: "Client's own infra: ~$250/month",
    features: [
      "Unlimited integrations",
      "Staff SSO setup",
      "Audit trail export",
      "1 custom agent",
      "Admin enablement",
      "Named CSM with 4-hour SLA",
      "Continuous agent tuning",
    ],
    cta: "Schedule a Call",
    ctaHref: CONTACT_HREF,
  },
  {
    name: "Enterprise",
    setup: "from $25,000",
    setupLabel: "one-time setup",
    subscription: "from $30,000",
    subscriptionLabel: "/year",
    description: "Everything in Impact, for organizations with strict deployment requirements.",
    features: [
      "Private / air-gapped deployment",
      "Custom agents",
      "DPA / BAA",
      "Dedicated support + SLA",
      "Optional Compliance Pack (see below)",
    ],
    cta: "Talk to Sales",
    ctaHref: CONTACT_HREF,
  },
];

const costLines = [
  {
    title: "Setup fee (one-time)",
    detail:
      "SJ configures deployment, migrates data, connects integrations, and trains the team.",
  },
  {
    title: "Management & Support subscription (annual)",
    detail:
      "SJ operates, monitors, and supports the deployment — priced by your annual operating budget, never per seat.",
  },
  {
    title: "AI & infrastructure (your own accounts, Essential and above)",
    detail:
      "You pay Lovable, Supabase, and Anthropic directly at list price. SJ adds zero markup.",
  },
];

const whyItWorks = [
  {
    q: "Free to start",
    a: "Self-serve Community tier on GitHub and Lovable — no cost, no catch.",
  },
  {
    q: "No per-seat penalty on paid tiers",
    a: "Priced by budget, not headcount.",
  },
  {
    q: "You own the infrastructure",
    a: "Your own Lovable, Supabase, and Anthropic accounts. Your data, your keys.",
  },
  {
    q: "Zero AI markup",
    a: "You see your own AI bill. SJ doesn't profit from usage.",
  },
];

const compliance = [
  {
    title: "Supabase Team plan",
    note: "SOC 2 Type 2, ISO 27001 attestation — paid directly by client",
    price: "$599/month",
  },
  { title: "SJ Compliance Management", note: "Ongoing compliance operations", price: "$750/month" },
  { title: "Compliance onboarding", note: "One-time", price: "$7,500" },
];

const ControlTowerPricing = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium bg-secondary text-primary px-4 py-2 rounded-full mb-6">
            <Layers className="w-4 h-4" />
            Control Tower Pricing
          </div>
          <h1 className="mb-6">Transparent Pricing. No Hidden Costs.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Start free and self-hosted, or have our team run it for you. Priced by your operating
            budget — never per seat.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section px-6 lg:px-12 pt-0">
        <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`document-card flex flex-col text-left ${
                tier.popular ? "ring-2 ring-primary/25 border-primary" : ""
              }`}
            >
              {tier.popular && (
                <span className="text-xs font-bold text-primary bg-secondary px-3 py-1 rounded-full self-start mb-4">
                  Most Popular
                </span>
              )}
              <h3 className="text-xl font-bold mb-3">{tier.name}</h3>

              <div className="mb-1">
                <span className="text-2xl font-bold">{tier.setup}</span>{" "}
                <span className="text-muted-foreground text-sm">{tier.setupLabel}</span>
              </div>
              <div className="mb-4">
                <span className="text-lg font-bold text-primary">{tier.subscription}</span>
                <span className="text-muted-foreground text-sm">{tier.subscriptionLabel}</span>
                <span className="block text-xs text-muted-foreground">
                  Management &amp; Support subscription
                </span>
              </div>

              <p className="text-sm text-muted-foreground mb-5">{tier.description}</p>

              <ul className="space-y-3 mb-6 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {tier.infra && (
                <p className="text-xs text-muted-foreground border-t border-border pt-3 mb-4">
                  {tier.infra}
                </p>
              )}

              <Button className="w-full" variant={tier.popular ? "default" : "outline"} asChild>
                <a href={tier.ctaHref} target="_blank" rel="noopener noreferrer">
                  {tier.cta} <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Three cost lines */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Three Cost Lines. Total Transparency.</h2>
          <div className="space-y-4">
            {costLines.map((line) => (
              <div key={line.title} className="document-card flex items-start gap-4 text-left">
                <Receipt className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold mb-1">{line.title}</h3>
                  <p className="text-sm text-muted-foreground">{line.detail}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground text-center mt-6">
            Setup fees can be spread over 12 months on request.
          </p>
        </div>
      </section>

      {/* Compliance Pack */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-4xl mx-auto document-card p-8">
          <div className="inline-flex items-center gap-2 text-xs font-bold text-primary bg-secondary px-3 py-1 rounded-full mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            Enterprise only
          </div>
          <h2 className="text-2xl font-bold mb-3">
            SOC 2 &amp; ISO 27001 — When You Need It, Priced Separately
          </h2>
          <p className="text-muted-foreground mb-6">
            Our infrastructure runs on SOC 2 Type 2 certified providers.
          </p>
          <ul className="space-y-4 mb-6">
            {compliance.map((item) => (
              <li
                key={item.title}
                className="flex items-start justify-between gap-4 border-t border-border pt-4"
              >
                <div>
                  <p className="font-bold text-sm">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.note}</p>
                </div>
                <p className="font-bold text-sm whitespace-nowrap">{item.price}</p>
              </li>
            ))}
          </ul>
          <Button variant="outline" asChild>
            <a href={CONTACT_HREF} target="_blank" rel="noopener noreferrer">
              Talk About Compliance
            </a>
          </Button>
        </div>
      </section>

      {/* Why this pricing works */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8">Why This Pricing Works</h2>
          <div className="space-y-4">
            {whyItWorks.map((item) => (
              <div key={item.q} className="document-card text-center">
                <h3 className="font-bold mb-1">{item.q}</h3>
                <p className="text-sm text-muted-foreground">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default ControlTowerPricing;
