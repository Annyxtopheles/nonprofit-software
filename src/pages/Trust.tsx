import { SiteLayout } from "@/components/layout/SiteLayout";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Database,
  KeyRound,
  Unlock,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const CONTACT_HREF = "https://collabai.software/contact";

const dedicatedPoints = [
  {
    icon: Database,
    title: "Your database, not ours.",
    detail:
      "Your donor and financial data is never commingled with any other organization's data.",
  },
  {
    icon: KeyRound,
    title: "You hold the keys.",
    detail:
      "SJ Innovation operates and maintains your deployment, but the account — and everything in it — belongs to you.",
  },
  {
    icon: Unlock,
    title: "No lock-in.",
    detail:
      "If you ever choose to leave, you take the complete system and all your data with you.",
  },
];

const securityLayers = [
  { layer: "Database access", detail: "Row-Level Security enforced on every query" },
  { layer: "Data at rest", detail: "Encrypted (PostgreSQL native encryption)" },
  { layer: "Data in transit", detail: "TLS 1.3" },
  {
    layer: "Authentication",
    detail: "OAuth 2.0 SSO via Google Workspace and Microsoft Azure AD",
  },
  {
    layer: "Access control",
    detail: "Role-based permissions, module-level, admin-approved",
  },
  { layer: "Activity", detail: "Full audit trails on every action" },
];

const compliancePack = [
  "Supabase Team plan (SOC 2 Type 2, ISO 27001 attestation)",
  "Immutable audit trail with SIEM export",
  "Quarterly access reviews",
  "DPA and BAA execution",
  "Annual penetration test coordination",
];

const vendors = [
  {
    name: "Supabase",
    role: "Database, auth, backend hosting",
    posture: "SOC 2 Type 2 + ISO 27001 available on Team plan",
  },
  {
    name: "Lovable",
    role: "Application hosting and deployment",
    posture: "[pending]",
  },
  {
    name: "Anthropic / Claude",
    role: "AI agent processing",
    posture: "[pending]",
  },
];

const accessPoints = [
  "Admin approval required for every new user",
  "Granular role-based permissions per dashboard role (Executive Director, Development, Finance, Operations)",
  "Exportable audit logs for board and funder reviews",
  "Data export and deletion available on request",
];

const slas = [
  { tier: "Essential", support: "Email support", response: "2-day response" },
  { tier: "Professional", support: "Priority support", response: "1-day response" },
  { tier: "Impact", support: "Named CSM", response: "4-hour SLA" },
  { tier: "Enterprise", support: "Dedicated support", response: "Custom SLA" },
];

const faqs = [
  {
    q: "Is our data shared with other organizations?",
    a: "No. Your deployment runs on your own dedicated Supabase and Lovable accounts. Nothing is pooled or shared.",
  },
  {
    q: "What happens if we stop paying the subscription?",
    a: "You keep the system. Management & Support keeps it maintained and supported, but the deployment and your data are yours regardless.",
  },
  {
    q: "Are you SOC 2 certified?",
    a: "Our infrastructure runs on SOC 2 Type 2 certified providers. A formal SOC 2 attestation for your specific deployment is available through our Enterprise Compliance Pack.",
  },
  {
    q: "Can SJ Innovation see our donor data?",
    a: "[answer pending legal/product review]",
  },
  {
    q: "Where is our data hosted?",
    a: "[answer pending — depends on Supabase region configuration]",
  },
];

const Trust = () => {
  return (
    <SiteLayout>
      {/* Hero */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium bg-secondary text-primary px-4 py-2 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4" />
            Trust &amp; Security
          </div>
          <h1 className="mb-6">Your Donor Data. Your Infrastructure. Your Control.</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Nonprofit Control Tower runs on infrastructure you own, not a shared multi-tenant
            system. Here's exactly how it's built to protect your organization's most sensitive
            data.
          </p>
        </div>
      </section>

      {/* Dedicated system */}
      <section className="section px-6 lg:px-12 pt-0">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center mb-8">A Dedicated System, Not a Shared One</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {dedicatedPoints.map((point) => (
              <div key={point.title} className="document-card text-left">
                <point.icon className="w-5 h-5 text-primary mb-3" />
                <h3 className="font-bold mb-2">{point.title}</h3>
                <p className="text-sm text-muted-foreground">{point.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security at every layer */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Security at Every Layer</h2>
          <div className="document-card p-0 overflow-hidden">
            <table className="w-full text-left text-sm">
              <tbody>
                {securityLayers.map((row, i) => (
                  <tr key={row.layer} className={i > 0 ? "border-t border-border" : ""}>
                    <th
                      scope="row"
                      className="align-top font-bold p-4 w-1/3 whitespace-nowrap"
                    >
                      {row.layer}
                    </th>
                    <td className="p-4 text-muted-foreground">{row.detail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SOC 2 / ISO */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-4">Where We Stand on SOC 2 and ISO 27001</h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-8">
            We believe in being precise here rather than vague, because your funders and auditors
            will check.
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="document-card text-left">
              <h3 className="font-bold mb-3">What's true today</h3>
              <p className="text-sm text-muted-foreground">
                Our infrastructure runs on SOC 2 Type 2 certified providers.
              </p>
            </div>
            <div className="document-card text-left">
              <h3 className="font-bold mb-1">What requires our Compliance Pack</h3>
              <p className="text-xs text-muted-foreground mb-4">Enterprise add-on</p>
              <ul className="space-y-3">
                {compliancePack.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Vendors */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Full Vendor Transparency</h2>
          <div className="document-card p-0 overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[560px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-bold">Vendor</th>
                  <th className="p-4 font-bold">Role</th>
                  <th className="p-4 font-bold">Security posture</th>
                </tr>
              </thead>
              <tbody>
                {vendors.map((vendor, i) => (
                  <tr key={vendor.name} className={i > 0 ? "border-t border-border" : ""}>
                    <td className="p-4 font-bold align-top">{vendor.name}</td>
                    <td className="p-4 text-muted-foreground align-top">{vendor.role}</td>
                    <td className="p-4 text-muted-foreground align-top">{vendor.posture}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Access control */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8">You Control Who Sees What</h2>
          <ul className="space-y-4">
            {accessPoints.map((point) => (
              <li key={point} className="document-card flex items-start gap-3 text-left">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SLAs */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center mb-8">Real Humans, Real SLAs</h2>
          <div className="document-card p-0 overflow-x-auto">
            <table className="w-full text-left text-sm min-w-[480px]">
              <thead>
                <tr className="border-b border-border">
                  <th className="p-4 font-bold">Tier</th>
                  <th className="p-4 font-bold">Support</th>
                  <th className="p-4 font-bold">Response time</th>
                </tr>
              </thead>
              <tbody>
                {slas.map((row, i) => (
                  <tr key={row.tier} className={i > 0 ? "border-t border-border" : ""}>
                    <td className="p-4 font-bold">{row.tier}</td>
                    <td className="p-4 text-muted-foreground">{row.support}</td>
                    <td className="p-4 text-muted-foreground">{row.response}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-center mb-8">Questions We Get Asked</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="document-card text-left">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild>
              <a href={CONTACT_HREF} target="_blank" rel="noopener noreferrer">
                Talk to Our Team <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default Trust;
