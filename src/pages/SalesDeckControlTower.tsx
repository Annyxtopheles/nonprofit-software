import { SlidePresentation, SlideTitle, SlideSubtitle, SlideCard, Slide } from "@/components/sales/SlidePresentation";

const accent = "hsl(113, 100%, 33%)";

const slides: Slide[] = [
  // SLIDE 1 — HERO
  {
    content: (
      <div className="text-center">
        <div className="inline-block text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-6" style={{ borderColor: accent, color: accent }}>
          Product Overview
        </div>
        <SlideTitle>
          Nonprofit Control Tower
        </SlideTitle>
        <p className="text-xl md:text-2xl font-light mt-4 mb-2" style={{ color: accent }}>
          The Operational Intelligence Layer for Modern Nonprofits
        </p>
        <SlideSubtitle>
          One platform that connects your CRM, finance, and event systems — surfacing insights, automating busywork, and giving every role a purpose-built dashboard.
        </SlideSubtitle>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/40">
          <span>16 AI Agents</span>
          <span>·</span>
          <span>8 Feature Modules</span>
          <span>·</span>
          <span>4 Role Dashboards</span>
          <span>·</span>
          <span>Open Source</span>
        </div>
      </div>
    ),
  },
  // SLIDE 2 — THE PROBLEM
  {
    content: (
      <div>
        <SlideTitle>What's Holding Nonprofits Back?</SlideTitle>
        <SlideSubtitle>These aren't edge cases — they're the daily reality.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 gap-4">
          <SlideCard emoji="🗂️" title="Tool Sprawl" desc="Donor data in Salesforce, finances in QuickBooks, events in Eventbrite, grants in spreadsheets. Your team wastes hours switching." accent={accent} />
          <SlideCard emoji="🔧" title="Data Quality Decay" desc="Duplicates, incomplete profiles, and stale records silently erode fundraising effectiveness." accent={accent} />
          <SlideCard emoji="😤" title="Manual Busywork" desc="Writing thank-you letters, reconciling transactions, preparing board reports — your talent is buried under repetitive tasks." accent={accent} />
          <SlideCard emoji="📵" title="No Single Source of Truth" desc="The ED asks 'how are we doing?' and gets five different answers from five different systems." accent={accent} />
        </div>
        <p className="text-center text-sm mt-6" style={{ color: accent }}>Your team is drowning in data — but starving for insight.</p>
      </div>
    ),
  },
  // SLIDE 3 — THE SOLUTION
  {
    content: (
      <div>
        <SlideTitle>Control Tower Solves All of It</SlideTitle>
        <SlideSubtitle>One platform with 16 AI agents and 8 modular features — working 24/7.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <SlideCard emoji="🤖" title="AI Agents" desc="16 specialized agents across 4 teams: Donor Intelligence, Meeting AI, Strategy, and Project." accent={accent} />
          <SlideCard emoji="📊" title="Role Dashboards" desc="Purpose-built views for ED, Development Director, Finance Manager, and Operations." accent={accent} />
          <SlideCard emoji="🔗" title="CRM Amplifier" desc="Sits on top of Salesforce, Bloomerang, Blackbaud — no migration required." accent={accent} />
          <SlideCard emoji="📦" title="Modular Design" desc="Toggle features on/off. Start with Data Health, add Grants and Events later." accent={accent} />
        </div>
      </div>
    ),
  },
  // SLIDE 4 — DONOR PIPELINE
  {
    content: (
      <div>
        <SlideTitle>Donor Pipeline & AI Letters</SlideTitle>
        <SlideSubtitle>From identification to upgrade — visual Kanban tracking for every donor relationship.</SlideSubtitle>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-3" style={{ color: accent }}>What It Solves</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>• Donors fall through the cracks after events</li>
              <li>• Mid-level donors never get upgraded</li>
              <li>• Thank-you letters take days, not minutes</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3" style={{ color: accent }}>What It Does</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>• 5-stage pipeline: Identified → Upgraded</li>
              <li>• AI acknowledgment letters in 30 seconds</li>
              <li>• Engagement scoring & upgrade readiness</li>
              <li>• One-click outreach scheduling</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs mt-6 text-white/30">AI reads donor name, gift amount, fund, giving history, and drafts a personalized letter in the ED's voice.</p>
      </div>
    ),
  },
  // SLIDE 5 — DATA HEALTH
  {
    content: (
      <div>
        <SlideTitle>Data Health Intelligence</SlideTitle>
        <SlideSubtitle>Your CRM is only as good as the data inside it.</SlideSubtitle>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-bold text-sm mb-3" style={{ color: accent }}>What It Solves</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>• Duplicate contacts nobody catches until audit</li>
              <li>• Missing emails, addresses, and giving history</li>
              <li>• Stale records not contacted in 12+ months</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-sm mb-3" style={{ color: accent }}>What It Does</h3>
            <ul className="space-y-2 text-sm text-white/60">
              <li>• Overall CRM health score (e.g., 82%)</li>
              <li>• Probability-scored duplicate detection</li>
              <li>• Side-by-side merge workflows</li>
              <li>• AI-identified upgrade opportunities</li>
              <li>• Profile completion tracking</li>
            </ul>
          </div>
        </div>
        <p className="text-center text-xs mt-6 text-white/30">Maintain 90%+ data health with automated fix-it workflows.</p>
      </div>
    ),
  },
  // SLIDE 6 — GRANTS & RECONCILIATION
  {
    content: (
      <div>
        <SlideTitle>Grants & Financial Reconciliation</SlideTitle>
        <SlideSubtitle>Every dollar accounted for. Every deadline tracked.</SlideSubtitle>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="font-bold text-sm mb-3" style={{ color: accent }}>Grants Management</h3>
            <ul className="space-y-2 text-xs text-white/50">
              <li>• Active grants dashboard with status indicators</li>
              <li>• Upcoming deadline alerts with countdown timers</li>
              <li>• Fund utilization progress bars</li>
              <li>• One-click compliance summary generation</li>
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5">
            <h3 className="font-bold text-sm mb-3" style={{ color: accent }}>Reconciliation</h3>
            <ul className="space-y-2 text-xs text-white/50">
              <li>• Match Stripe/PayPal to CRM records</li>
              <li>• Fee variance alerts</li>
              <li>• Restricted fund mismatch detection</li>
              <li>• Monthly reconciliation summary & export</li>
            </ul>
          </div>
        </div>
      </div>
    ),
  },
  // SLIDE 7 — 16 AI AGENTS
  {
    content: (
      <div>
        <SlideTitle>16 AI Agents, Four Specialized Teams</SlideTitle>
        <SlideSubtitle>Purpose-built agents trained on nonprofit operations — not generic chatbots.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { team: "Donor Intelligence", agents: ["Deal Coach", "Daily Briefing", "Quick Email", "Deal AI Chat"] },
            { team: "Meeting AI", agents: ["Meeting Summarizer", "Action Extractor", "Efficiency Analyzer", "Client Call Analyzer"] },
            { team: "Strategy AI", agents: ["EOS Coach", "Pattern Detective", "Pod Health", "Quarterly Digest"] },
            { team: "Project AI", agents: ["Project Analyst", "Bug & Feature Planner", "Technical Planner", "Code Reviewer"] },
          ].map((t) => (
            <div key={t.team} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-bold text-sm mb-2" style={{ color: accent }}>{t.team}</h3>
              <ul className="space-y-1">
                {t.agents.map((a) => (
                  <li key={a} className="text-xs text-white/50">▸ {a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // SLIDE 8 — INTEGRATIONS
  {
    content: (
      <div>
        <SlideTitle>Works With Your Existing Stack</SlideTitle>
        <SlideSubtitle>No migration. No schema redesign. Connect in minutes.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { cat: "CRM", items: ["Salesforce NPSP", "Blackbaud RE NXT", "Bloomerang", "Neon CRM", "Virtuous", "DonorPerfect", "HubSpot", "Kindful"] },
            { cat: "Finance", items: ["Stripe", "PayPal", "QuickBooks Online"] },
            { cat: "Events", items: ["Eventbrite", "Givebutter", "OneCause"] },
            { cat: "Communication", items: ["Google Workspace", "Microsoft 365", "Zoom", "Mailchimp"] },
          ].map((c) => (
            <div key={c.cat} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-bold text-xs uppercase tracking-widest mb-3" style={{ color: accent }}>{c.cat}</h3>
              <ul className="space-y-1">
                {c.items.map((i) => (
                  <li key={i} className="text-xs text-white/50">• {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // SLIDE 9 — ROLE DASHBOARDS
  {
    content: (
      <div>
        <SlideTitle>Full Visibility Across Every Role</SlideTitle>
        <SlideSubtitle>Four purpose-built dashboards — not a generic overview.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { role: "Executive Director", items: ["KPI summary & board readiness score", "Grant pipeline overview", "Data health dashboard", "AI-generated board reports"] },
            { role: "Development Director", items: ["Donor pipeline Kanban", "Event follow-up queue", "Mid-donor upgrade opportunities", "AI acknowledgment letters"] },
            { role: "Finance Manager", items: ["Reconciliation dashboard", "Fund utilization tracking", "Unmatched transaction alerts", "Grant spending monitor"] },
            { role: "Operations Manager", items: ["Data health score & trends", "Integration status monitor", "AI agent activity feed", "Duplicate management"] },
          ].map((r) => (
            <div key={r.role} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-bold text-sm mb-2" style={{ color: accent }}>{r.role}</h3>
              <ul className="space-y-1">
                {r.items.map((i) => (
                  <li key={i} className="text-xs text-white/50">✓ {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // SLIDE 10 — CTA
  {
    content: (
      <div className="text-center">
        <SlideTitle>Let's Build This for Your Organization</SlideTitle>
        <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
          Connect your systems. Surface your insights. Amplify your mission.
        </p>
        <div className="flex flex-wrap justify-center gap-8 mb-10 text-sm text-white/40">
          <span>20+ Years Experience</span>
          <span>·</span>
          <span>100+ Team Members</span>
          <span>·</span>
          <span>80+ Businesses Served</span>
          <span>·</span>
          <span>NYC-Based</span>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">✅</div>
            <h3 className="font-bold text-sm mb-1" style={{ color: accent }}>Free Discovery</h3>
            <p className="text-xs text-white/40">30-minute strategy session</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-bold text-sm mb-1" style={{ color: accent }}>Custom Demo</h3>
            <p className="text-xs text-white/40">See it with your data</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-bold text-sm mb-1" style={{ color: accent }}>Onboard in 2 Weeks</h3>
            <p className="text-xs text-white/40">From setup to live</p>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/30">
          collabai.software/contact · demo.nonprofitai.software
        </p>
      </div>
    ),
  },
];

export default function SalesDeckControlTower() {
  return (
    <SlidePresentation
      slides={slides}
      productName="Nonprofit Control Tower"
      accentColor={accent}
    />
  );
}
