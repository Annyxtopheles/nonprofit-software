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
          Board Governance by NonProfitAI
        </SlideTitle>
        <p className="text-xl md:text-2xl font-light mt-4 mb-2" style={{ color: accent }}>
          AI-Powered Board Management for Nonprofits
        </p>
        <SlideSubtitle>
          Transform your board meetings with 10 autonomous AI agents that summarize documents, answer questions, send reminders, and detect trends — completely free and open source.
        </SlideSubtitle>
        <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-white/40">
          <span>10 AI Agents</span>
          <span>·</span>
          <span>21 Features</span>
          <span>·</span>
          <span>100% Free</span>
          <span>·</span>
          <span>MIT License</span>
        </div>
      </div>
    ),
  },
  // SLIDE 2 — THE PROBLEM
  {
    content: (
      <div>
        <SlideTitle>Board Management Shouldn't Be This Hard</SlideTitle>
        <SlideSubtitle>Every nonprofit board faces these challenges — yours doesn't have to.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 gap-4">
          <SlideCard emoji="🗂️" title="Time-Consuming Prep" desc="Manual meeting prep, note-taking, and follow-up consume 15+ hours per month from your leadership team." accent={accent} />
          <SlideCard emoji="🔧" title="Information Chaos" desc="Documents scattered across emails, drives, and folders. Nobody can find last quarter's board resolution." accent={accent} />
          <SlideCard emoji="😤" title="Low Board Engagement" desc="Board members miss votes, forget deadlines, and arrive at meetings unprepared. Participation drops below 60%." accent={accent} />
          <SlideCard emoji="📵" title="No Governance Visibility" desc="Committee work happens in silos. The ED can't see task completion, attendance trends, or governance health." accent={accent} />
        </div>
        <p className="text-center text-sm mt-6" style={{ color: accent }}>Your board is ready to do more — they just need better tools.</p>
      </div>
    ),
  },
  // SLIDE 3 — THE SOLUTION
  {
    content: (
      <div>
        <SlideTitle>NonProfitAI Board Governance Solves All of It</SlideTitle>
        <SlideSubtitle>One platform with 10 AI agents working 24/7 for your board.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SlideCard emoji="🤖" title="The Summarizer" desc="Generates meeting summaries and action items automatically — saves 5+ hours per meeting." accent={accent} />
          <SlideCard emoji="📚" title="The Knowledge Agent" desc="Answers questions about policies, bylaws, and history — instant answers with citations, 24/7." accent={accent} />
          <SlideCard emoji="🔔" title="The Reminder Agent" desc="Smart, personalized notifications for votes, tasks, and meetings — drives higher engagement." accent={accent} />
          <SlideCard emoji="📈" title="The Insights Agent" desc="Detects attendance trends, early warnings, and governance health — monthly reports." accent={accent} />
          <SlideCard emoji="✅" title="The Task Extractor" desc="Automatically extracts action items from discussions, assigns them, and infers deadlines." accent={accent} />
          <SlideCard emoji="📋" title="The Meeting Prep Agent" desc="Prepares pre-meeting briefings so members arrive informed and ready to decide." accent={accent} />
        </div>
      </div>
    ),
  },
  // SLIDE 4 — CRM INTELLIGENCE SUITE
  {
    content: (
      <div>
        <SlideTitle>CRM Intelligence Suite</SlideTitle>
        <SlideSubtitle>Four additional AI agents that power donor cultivation and stakeholder relationships.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 gap-4">
          <SlideCard emoji="✉️" title="AI Email Composer" desc="Drafts personalized outreach in your organization's voice — context-aware, professional tone, one-click ready." accent={accent} />
          <SlideCard emoji="🔍" title="AI Research Assistant" desc="Instant background on contacts and organizations — relationship history, suggested talking points." accent={accent} />
          <SlideCard emoji="📊" title="AI Engagement Analyzer" desc="Scores relationship health (1-10), identifies risks early, and detects opportunities." accent={accent} />
          <SlideCard emoji="🎯" title="AI Next Action Suggester" desc="Priority-ranked follow-up actions with timing recommendations and context-aware reasoning." accent={accent} />
        </div>
      </div>
    ),
  },
  // SLIDE 5 — 21 FEATURES
  {
    content: (
      <div>
        <SlideTitle>21 Features Your Board Needs</SlideTitle>
        <SlideSubtitle>A complete governance toolkit designed specifically for nonprofit boards.</SlideSubtitle>
        <div className="grid sm:grid-cols-3 gap-3">
          {[
            "Meeting Management", "Task Tracking", "Knowledge Base",
            "Board Assessments", "Team Communication", "Reports & Analytics",
            "Compliance & Audit Logs", "Lead Follow-Up CRM", "Smart Notifications",
            "Committee Management", "Board Cycle Timeline", "Contribution Tracking",
            "Event Management", "Access Control", "White-Label Branding",
          ].map((f) => (
            <div key={f} className="bg-white/5 border border-white/10 rounded-lg px-4 py-3">
              <span className="text-xs text-white/60">{f}</span>
            </div>
          ))}
        </div>
        <p className="text-center text-xs mt-4 text-white/30">+ 6 more features including document Q&A, voting, and governance health scoring</p>
      </div>
    ),
  },
  // SLIDE 6 — BEFORE / AFTER
  {
    content: (
      <div>
        <SlideTitle>From Paperwork to Clarity</SlideTitle>
        <SlideSubtitle>The transformation your board will experience.</SlideSubtitle>
        <div className="space-y-3">
          {[
            { before: "15+ hours/month searching emails and folders", after: "AI summarizes key documents in minutes" },
            { before: "Days to find answers in scattered files", after: "Instant answers with source citations" },
            { before: "Action items lost in meeting notes", after: "Auto-extracted and assigned with reminders" },
            { before: "Votes missed due to busy schedules", after: "Smart reminders drive higher participation" },
            { before: "Issues discovered too late", after: "AI detects trends and alerts early" },
            { before: "Weeks to onboard new leaders", after: "Ask AI any question about your org" },
          ].map((row) => (
            <div key={row.before} className="grid grid-cols-2 gap-4">
              <div className="bg-red-500/10 border border-red-500/20 rounded-lg px-4 py-2.5">
                <span className="text-xs text-red-300/70">✗ {row.before}</span>
              </div>
              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-lg px-4 py-2.5">
                <span className="text-xs text-emerald-300/70">✓ {row.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  // SLIDE 7 — DEPLOYMENT
  {
    content: (
      <div>
        <SlideTitle>Up and Running in Minutes</SlideTitle>
        <SlideSubtitle>Two deployment paths — choose what fits your team.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="bg-white/5 border-2 rounded-xl p-6" style={{ borderColor: accent }}>
            <h3 className="font-bold mb-1" style={{ color: accent }}>Lovable Cloud</h3>
            <p className="text-xs text-white/40 mb-4">Recommended — Non-Technical</p>
            <ol className="space-y-2 text-sm text-white/60">
              <li>1. Click "Remix" to copy the project</li>
              <li>2. Connect your database</li>
              <li>3. Customize branding & invite members</li>
            </ol>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <h3 className="font-bold mb-1 text-white">Self-Hosted</h3>
            <p className="text-xs text-white/40 mb-4">Full Control — Technical Teams</p>
            <ol className="space-y-2 text-sm text-white/60">
              <li>1. Clone the GitHub repository</li>
              <li>2. Configure environment variables</li>
              <li>3. Deploy to your preferred hosting</li>
            </ol>
          </div>
        </div>
        <p className="text-center text-xs mt-6 text-white/30">100% free. MIT License. No credit card required.</p>
      </div>
    ),
  },
  // SLIDE 8 — USE CASES
  {
    content: (
      <div>
        <SlideTitle>Real-World Use Cases</SlideTitle>
        <SlideSubtitle>How nonprofit boards are using the platform today.</SlideSubtitle>
        <div className="grid sm:grid-cols-2 gap-4">
          <SlideCard emoji="🏥" title="Healthcare Foundations" desc="Board compliance tracking, HIPAA-friendly document storage, automated committee reporting." accent={accent} />
          <SlideCard emoji="🎓" title="Education Nonprofits" desc="Parent board engagement, school governance workflows, fundraising CRM integration." accent={accent} />
          <SlideCard emoji="🌍" title="International NGOs" desc="Multi-timezone meeting coordination, multilingual document Q&A, distributed board management." accent={accent} />
          <SlideCard emoji="🏛️" title="Community Foundations" desc="Grant committee governance, donor board cultivation, financial oversight dashboards." accent={accent} />
        </div>
      </div>
    ),
  },
  // SLIDE 9 — SECURITY & TRUST
  {
    content: (
      <div>
        <SlideTitle>Enterprise-Grade Security</SlideTitle>
        <SlideSubtitle>Built for organizations that take data privacy seriously.</SlideSubtitle>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { title: "Row-Level Security", desc: "Every query enforces user permissions" },
            { title: "SOC 2 Infrastructure", desc: "Enterprise-grade cloud hosting" },
            { title: "Encrypted Data", desc: "At rest (PostgreSQL) and in transit (TLS 1.3)" },
            { title: "OAuth 2.0 SSO", desc: "Google Workspace & Microsoft Azure AD" },
            { title: "Role-Based Access", desc: "Admin, Moderator, User with audit trails" },
            { title: "GDPR Ready", desc: "Data export and deletion workflows" },
          ].map((s) => (
            <div key={s.title} className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h3 className="font-bold text-xs mb-1" style={{ color: accent }}>{s.title}</h3>
              <p className="text-xs text-white/40">{s.desc}</p>
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
        <SlideTitle>Let's Transform Your Board</SlideTitle>
        <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
          Give your board members the tools to govern with clarity, accountability, and impact.
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
            <p className="text-xs text-white/40">See it with your board's data</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 text-center">
            <div className="text-2xl mb-2">🚀</div>
            <h3 className="font-bold text-sm mb-1" style={{ color: accent }}>Live in 1 Week</h3>
            <p className="text-xs text-white/40">2-minute setup to full adoption</p>
          </div>
        </div>
        <p className="mt-8 text-xs text-white/30">
          collabai.software/contact · boarddemo.nonprofitai.software
        </p>
      </div>
    ),
  },
];

export default function SalesDeckBoardGovernance() {
  return (
    <SlidePresentation
      slides={slides}
      productName="Board Governance"
      accentColor={accent}
    />
  );
}
