import { SiteLayout } from "@/components/layout/SiteLayout";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { SoundFamiliarCards } from "@/components/home/SoundFamiliarCards";
import { SecuritySection } from "@/components/home/SecuritySection";
import { HowItComesTogetherSection } from "@/components/home/HowItComesTogetherSection";
import { TrustedPartnersSection } from "@/components/home/TrustedPartnersSection";
import { SuccessStoriesSection } from "@/components/home/SuccessStoriesSection";
import { ControlTowerPreviewCTA } from "@/components/home/ControlTowerPreviewCTA";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HowItWorksCards } from "@/components/home/HowItWorksCards";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Layers, Database, ArrowRight, Shield, BarChart3, Calendar,
  FileText, Lock, Eye, Users, Zap, RefreshCw, Phone,
  LayoutDashboard, Heart, Activity, BookOpen, Cloud, Server,
  Brain, MessageSquare, TrendingUp, Code, Search,
  Globe, ShieldCheck, Link2, ScanEye, Sparkles
} from "lucide-react";
import salesforceLogo from "@/assets/logos/sfdc_nonprofits_logo_rgb_v1.webp";
import blackbaudLogo from "@/assets/logos/blackbaud-re-nxt.png";
import bloomerangLogo from "@/assets/logos/bloomerang-logo.webp";
import neonCrmLogo from "@/assets/logos/neon-crm-logo.png";
import virtuousLogo from "@/assets/logos/virtuous-logo.png";
import donorPerfectLogo from "@/assets/logos/donorperfect-logo.png";
import hubspotLogo from "@/assets/logos/hubspot-logo.png";
import kindfulLogo from "@/assets/logos/kindful-logo.webp";
import stripeLogo from "@/assets/logos/stripe-logo.png";
import paypalLogo from "@/assets/logos/paypal-logo.png";
import quickbooksLogo from "@/assets/logos/quickbooks-logo.png";
import eventbriteLogo from "@/assets/logos/eventbrite-logo.png";
import givebutterLogo from "@/assets/logos/givebutter-logo.png";
import onecauseLogo from "@/assets/logos/onecause-logo.png";
import googleCalendarLogo from "@/assets/logos/google-calendar-logo.png";
import outlookLogo from "@/assets/logos/outlook-logo.png";
import googleDriveLogo from "@/assets/logos/google-drive-logo.png";
import sharepointLogo from "@/assets/logos/sharepoint-logo.png";
import googleWorkspaceLogo from "@/assets/logos/google-workspace-logo.svg";
import microsoft365Logo from "@/assets/logos/microsoft-365-logo.svg";
import zoomLogo from "@/assets/logos/zoom-logo.svg";
import mailchimpLogo from "@/assets/logos/mailchimp-logo.svg";
import donorIntelligenceImg from "@/assets/screenshots/agent-donor-intelligence.png";
import meetingsImg from "@/assets/screenshots/meetings-view.png";
import reportsImg from "@/assets/screenshots/reports-analytics.png";
import dashboardImg from "@/assets/screenshots/dashboard-setup.png";

const colors = {
  bg: "#FFFFFF",
  surface: "#F9F9F9",
  headline: "#001E00",
  body: "#5E6D55",
  accent: "#14A800",
  accentLight: "#E7F5E3",
  border: "#E4E4E4",
  divider: "#D5E0D5",
};

/** Upwork-style category tile: white, soft shadow, thin border */
const tileCardStyle = {
  backgroundColor: colors.bg,
  border: `1px solid ${colors.border}`,
  borderRadius: 12,
  boxShadow: "0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.04)",
};


const featureModules = [
  { icon: LayoutDashboard, title: "Dashboard", desc: "Role-specific command centers for ED, Development, Finance, and Operations" },
  { icon: Heart, title: "Donor Pipeline", desc: "Visual Kanban board tracking donor cultivation from identification to upgrade" },
  { icon: Activity, title: "Data Health", desc: "CRM quality scoring with duplicate detection, merge workflows, and fix-it actions" },
  { icon: FileText, title: "Grants Management", desc: "Lifecycle tracking with deadline alerts, fund utilization, and compliance summaries" },
  { icon: Calendar, title: "Events", desc: "Post-event engagement intelligence with Thank + Tag workflows and follow-up automation" },
  { icon: BarChart3, title: "Board Reports", desc: "Board-ready reports generated in one click with KPI summaries and financial snapshots" },
  { icon: RefreshCw, title: "Reconciliation", desc: "Match transactions across Stripe, PayPal, and QuickBooks — every dollar accounted for" },
  { icon: BookOpen, title: "Knowledge Base", desc: "Searchable articles, file uploads, and semantic search — your organization's second brain" },
];

const agentTeams = [
  {
    team: "Donor Intelligence",
    icon: Heart,
    image: donorIntelligenceImg,
    imageAlt: "Donor pipeline and cultivation dashboard",
    agents: [
      { name: "Deal Coach", desc: "Real-time coaching on donor cultivation strategies" },
      { name: "Daily Briefing", desc: "Morning digest of pipeline changes and recommended actions" },
      { name: "Quick Email", desc: "Draft personalized donor emails based on context and history" },
      { name: "Deal AI Chat", desc: "Conversational Q&A about your donor pipeline" },
    ],
  },
  {
    team: "Meeting AI",
    icon: MessageSquare,
    image: meetingsImg,
    imageAlt: "Events management and post-event intelligence view",
    agents: [
      { name: "Meeting Summarizer", desc: "Auto-generate summaries from meeting transcripts" },
      { name: "Action Extractor", desc: "Pull action items and assign to team members" },
      { name: "Efficiency Analyzer", desc: "Score meeting productivity and suggest improvements" },
      { name: "Client Call Analyzer", desc: "Analyze donor/funder calls for sentiment and decisions" },
    ],
  },
  {
    team: "Strategy AI",
    icon: TrendingUp,
    image: reportsImg,
    imageAlt: "Board reports and strategy dashboard",
    agents: [
      { name: "EOS Coach", desc: "Strategic planning guidance for organizational health" },
      { name: "Pattern Detective", desc: "Surface trends and patterns across organizational data" },
      { name: "Pod Health", desc: "Monitor team workload and collaboration health" },
      { name: "Quarterly Digest", desc: "Automated quarterly performance narrative from your data" },
    ],
  },
  {
    team: "Project AI",
    icon: Code,
    image: dashboardImg,
    imageAlt: "Program impact tracker and project dashboard",
    agents: [
      { name: "Project Analyst", desc: "Analyze project health, risks, and resource allocation" },
      { name: "Bug & Feature Planner", desc: "Plan and prioritize technical improvements" },
      { name: "Technical Planner", desc: "Generate technical implementation plans" },
      { name: "Code Reviewer", desc: "Automated code quality review and suggestions" },
    ],
  },
];

const roles = [
  {
    icon: Users,
    title: "Executive Director",
    benefits: ["KPIs, board readiness, and data health at a glance", "Generate board reports in one click", "Draft personalized acknowledgment letters in 30 seconds", "Monitor grant fund utilization and deadlines"],
  },
  {
    icon: Heart,
    title: "Development Director",
    benefits: ["Visual Kanban of donor cultivation progress", "AI-identified upgrade opportunities", "Turn event attendees into engaged supporters", "Reduce thank-you turnaround from days to minutes"],
  },
  {
    icon: BarChart3,
    title: "Finance Manager",
    benefits: ["Match Stripe/PayPal transactions to CRM records", "Ensure restricted gifts are posted correctly", "Monitor grant spending against budget", "Automated variance highlighting for board reports"],
  },
  {
    icon: Database,
    title: "Operations Manager",
    benefits: ["CRM quality score with actionable fix-it workflows", "See which integrations are connected and healthy", "Track AI agent recommendations and actions", "Reduce manual data cleanup by 80%"],
  },
];



const valueProps = [
  { icon: Zap, label: "Connect in Minutes", desc: "API-based, no CRM migration" },
  { icon: Brain, label: "16 AI Agents", desc: "Specialized for nonprofit ops" },
  { icon: LayoutDashboard, label: "Role-Based Views", desc: "Purpose-built for every role" },
  { icon: Lock, label: "Secure by Design", desc: "RLS, encryption, audit trails" },
];

const stackCategories = [
  {
    title: "CRM Partners",
    logos: [
      { name: "Salesforce NPSP", logo: salesforceLogo },
      { name: "Blackbaud RE NXT", logo: blackbaudLogo },
      { name: "Bloomerang", logo: bloomerangLogo },
      { name: "Neon CRM", logo: neonCrmLogo },
      { name: "Virtuous", logo: virtuousLogo },
      { name: "DonorPerfect", logo: donorPerfectLogo },
      { name: "HubSpot", logo: hubspotLogo },
      { name: "Kindful", logo: kindfulLogo },
    ],
  },
  {
    title: "Payment & Accounting",
    logos: [
      { name: "Stripe", logo: stripeLogo },
      { name: "PayPal", logo: paypalLogo },
      { name: "QuickBooks", logo: quickbooksLogo },
    ],
  },
  {
    title: "Events & Engagement",
    logos: [
      { name: "Eventbrite", logo: eventbriteLogo },
      { name: "Givebutter", logo: givebutterLogo },
      { name: "OneCause", logo: onecauseLogo },
    ],
  },
  {
    title: "Communication",
    logos: [
      { name: "Google Workspace", logo: googleWorkspaceLogo },
      { name: "Microsoft 365", logo: microsoft365Logo },
      { name: "Zoom", logo: zoomLogo },
      { name: "Mailchimp", logo: mailchimpLogo },
    ],
  },
  {
    title: "Productivity",
    logos: [
      { name: "Google Calendar", logo: googleCalendarLogo },
      { name: "Outlook", logo: outlookLogo },
      { name: "Google Drive", logo: googleDriveLogo },
      { name: "SharePoint", logo: sharepointLogo },
    ],
  },
];

const ControlTower = () => {
  return (
    <SiteLayout>
      <div style={{ backgroundColor: colors.bg, color: colors.headline }}>
        {/* Hero */}
        <section
          className="py-16 md:py-24 px-6 lg:px-12"
          style={{
            background: "linear-gradient(180deg, #EBF6E7 0%, #F5FAF3 50%, #FFFFFF 100%)",
          }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: colors.accentLight, color: colors.accent }}
            >
              <Layers className="w-4 h-4" />
              NONPROFIT AI CONTROL TOWER
            </div>
            <h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6"
              style={{ color: colors.headline }}
            >
              One place to run your nonprofit.
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mb-4"
              style={{ color: colors.body }}
            >
              Bring your donors, grants, events, programs, volunteers, and board information into one clear view.
            </p>
            <p
              className="text-base md:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-8"
              style={{ color: colors.headline }}
            >
              See what needs attention while keeping the tools your team already uses.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="font-bold text-white hover:opacity-90"
                style={{ backgroundColor: colors.accent }}
                asChild
              >
                <a href="https://collabai.software/contact" target="_blank" rel="noopener noreferrer">
                  Book Free Demo <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        <TrustedPartnersSection colors={colors} />

        <SuccessStoriesSection />

        <ControlTowerPreviewCTA />

        <HowItWorksCards />

        {/* Problem Section */}
        <section className="py-14 md:py-20 px-6 lg:px-12 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 md:mb-14 text-center">
              <h2
                className="text-3xl md:text-4xl lg:text-[2.6rem] font-bold mb-3 tracking-tight"
                style={{ color: colors.headline }}
              >
                Sound Familiar?
              </h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
                These aren&apos;t edge cases — they&apos;re the daily reality for most nonprofits.
              </p>
            </div>
            <SoundFamiliarCards />
          </div>
        </section>
        {/* Core Value Props */}
        <section className="section-tint py-12 md:py-16 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: colors.headline }}
              >
                It Doesn&apos;t Replace Your CRM. It Makes It Brilliant.
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
                Connect your existing systems in minutes. See insights in real time. No migration. No duplicate data entry. Ever.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {valueProps.map((item) => (
                <div key={item.label} className="p-5 md:p-6 text-center">
                  <div
                    className="w-14 h-14 rounded-full mx-auto mb-3 flex items-center justify-center"
                    style={{ backgroundColor: colors.accentLight }}
                  >
                    <item.icon
                      className="w-7 h-7"
                      style={{ color: colors.accent }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-[15px] font-medium mb-1" style={{ color: colors.headline }}>
                    {item.label}
                  </h3>
                  <p className="text-sm" style={{ color: colors.body }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Modules — screenshot-style category grid */}
        <section className="py-12 md:py-16 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: colors.headline }}
              >
                8 Modules. Use Only What You Need.
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
                Every feature module can be toggled on or off. Start small, grow as your team needs evolve.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {featureModules.map((mod) => (
                <div
                  key={mod.title}
                  className="p-5 md:p-6 text-center min-h-[120px] transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                  style={tileCardStyle}
                >
                  <mod.icon
                    className="w-7 h-7 mb-3 mx-auto"
                    style={{ color: colors.accent }}
                    strokeWidth={1.5}
                  />
                  <h3 className="text-[15px] font-medium leading-snug" style={{ color: colors.headline }}>
                    {mod.title}
                  </h3>
                  <p className="text-sm leading-relaxed mt-1.5" style={{ color: colors.body }}>
                    {mod.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Agents */}
        <section className="section-glow py-12 md:py-16 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto relative z-[1]">
            <div className="mb-10 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: colors.headline }}
              >
                16 AI Agents. Four Specialized Teams.
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
                Not generic chatbots — purpose-built agents trained on nonprofit operations with access to your data.
              </p>
            </div>
            <div className="space-y-5">
              {agentTeams.map((team) => (
                <div
                  key={team.team}
                  className="overflow-hidden transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                  style={tileCardStyle}
                >
                  <div className="grid md:grid-cols-2 items-stretch">
                    <div className="p-5 md:p-6 flex flex-col justify-center text-left">
                      <team.icon
                        className="w-7 h-7 mb-3"
                        style={{ color: colors.accent }}
                        strokeWidth={1.5}
                      />
                      <h3 className="text-[15px] font-medium mb-4" style={{ color: colors.headline }}>
                        {team.team}
                      </h3>
                      <div className="space-y-3">
                        {team.agents.map((agent) => (
                          <div key={agent.name} className="flex items-start gap-2">
                            <span className="mt-0.5 font-bold text-xs" style={{ color: colors.accent }}>
                              ▸
                            </span>
                            <div>
                              <span className="text-sm font-semibold" style={{ color: colors.headline }}>
                                {agent.name}
                              </span>
                              <span className="text-sm" style={{ color: colors.body }}>
                                {" "}— {agent.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div
                      className="relative min-h-[220px] md:min-h-[300px] border-t md:border-t-0 md:border-l flex items-center justify-center p-3 md:p-4"
                      style={{ borderColor: colors.border, backgroundColor: colors.surface }}
                    >
                      <img
                        src={team.image}
                        alt={team.imageAlt}
                        className="w-full h-full max-h-[280px] md:max-h-[320px] object-contain object-top rounded-md"
                        style={{
                          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.06), 0 4px 12px rgba(0, 0, 0, 0.06)",
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Role-Based Dashboards */}
        <section className="section-mesh py-12 md:py-16 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-10 text-center">
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: colors.headline }}
              >
                Built for Every Role on Your Team
              </h2>
              <p className="text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
                Four purpose-built dashboards ensure every team member sees what matters to them — not a generic overview.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
              {roles.map((role) => (
                <div key={role.title} className="flex gap-4 text-left">
                  <div
                    className="w-12 h-12 rounded-full shrink-0 flex items-center justify-center"
                    style={{ backgroundColor: colors.accentLight }}
                  >
                    <role.icon
                      className="w-6 h-6"
                      style={{ color: colors.accent }}
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="text-base font-semibold mb-3"
                      style={{ color: colors.headline }}
                    >
                      {role.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {role.benefits.map((b) => (
                        <li
                          key={b}
                          className="text-sm flex items-start gap-2 leading-relaxed"
                          style={{ color: colors.body }}
                        >
                          <span
                            className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                            style={{ backgroundColor: colors.accent }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-12 md:py-16 px-6 lg:px-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-10">
              <h2
                className="text-3xl md:text-4xl font-bold mb-3"
                style={{ color: colors.headline }}
              >
                Works With Your Existing Stack
              </h2>
              <p className="text-lg mb-1" style={{ color: colors.body }}>
                It doesn&apos;t replace your CRM. Control Tower connects to what you already use.
              </p>
              <p className="text-sm" style={{ color: colors.body }}>
                No migration. No schema redesign.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {stackCategories.map((category, index) => {
                const isCrm = index === 0;
                const isIconGrid =
                  category.title === "Communication" || category.title === "Productivity";

                return (
                  <div
                    key={category.title}
                    className={`flex flex-col items-center text-center p-6 transition-shadow duration-200 hover:shadow-[0_4px_16px_rgba(0,0,0,0.08)] ${
                      isCrm ? "sm:col-span-2 lg:col-span-4 sm:p-8" : "min-h-[160px]"
                    }`}
                    style={{
                      ...tileCardStyle,
                      ...(isCrm
                        ? {
                            background: `linear-gradient(180deg, ${colors.accentLight} 0%, ${colors.bg} 48%)`,
                            borderColor: colors.divider,
                          }
                        : {}),
                    }}
                  >
                    <p
                      className="text-xs font-semibold uppercase tracking-widest mb-5"
                      style={{ color: colors.accent }}
                    >
                      {category.title}
                    </p>

                    {isCrm ? (
                      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                        {category.logos.map((item) => (
                          <div
                            key={item.name}
                            className="flex items-center justify-center h-[72px] px-3 rounded-xl transition-shadow duration-200 hover:shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                            style={{
                              backgroundColor: colors.bg,
                              border: `1px solid ${colors.border}`,
                            }}
                          >
                            <img
                              src={item.logo}
                              alt={`${item.name} logo`}
                              className="h-8 sm:h-9 w-auto max-w-[110px] object-contain"
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    ) : isIconGrid ? (
                      <div className="w-full grid grid-cols-2 gap-3 mt-auto">
                        {category.logos.map((item) => (
                          <div
                            key={item.name}
                            className="flex flex-col items-center justify-center gap-2.5 py-3.5 px-2 rounded-xl transition-shadow duration-200 hover:shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
                            style={{
                              backgroundColor: colors.surface,
                              border: `1px solid ${colors.border}`,
                            }}
                          >
                            <div
                              className="w-11 h-11 rounded-full flex items-center justify-center"
                              style={{ backgroundColor: colors.accentLight }}
                            >
                              <img
                                src={item.logo}
                                alt=""
                                className="max-h-6 max-w-6 w-auto object-contain"
                                loading="lazy"
                              />
                            </div>
                            <span
                              className="text-[11px] font-medium leading-tight"
                              style={{ color: colors.headline }}
                            >
                              {item.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-4 mt-auto w-full">
                        {category.logos.map((item) => (
                          <img
                            key={item.name}
                            src={item.logo}
                            alt={`${item.name} logo`}
                            className="h-8 sm:h-9 w-auto max-w-[110px] object-contain opacity-90 transition-opacity duration-200 hover:opacity-100"
                            loading="lazy"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security & Data Control */}
        <SecuritySection />


        {/* How It Comes Together */}
        <HowItComesTogetherSection />


        <TestimonialsSection colors={colors} />



        {/* CTA */}
        <section className="section-cta-glow py-12 md:py-16 px-6 lg:px-12">
          <div
            className="max-w-3xl mx-auto text-center p-8 md:p-12 relative z-[1]"
            style={tileCardStyle}
          >
            <Layers className="w-10 h-10 mx-auto mb-4" style={{ color: colors.accent }} strokeWidth={1.5} />
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: colors.headline }}
            >
              Ready to See It in Action?
            </h2>
            <p className="text-lg mb-8" style={{ color: colors.body }}>
              Connect your systems. Surface your insights. Amplify your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="font-bold text-white hover:opacity-90"
                style={{ backgroundColor: colors.accent }}
                asChild
              >
                <a href="https://demo.nonprofitai.software/" target="_blank" rel="noopener noreferrer">
                  Try Live Demo <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-bold"
                style={{ borderColor: colors.border, color: colors.headline }}
                asChild
              >
                <a href="https://collabai.software/contact" target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-1" /> Schedule a Call
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Lite Version (Board Governance) Teaser Banner */}
        <NewsletterSignup source="home_section" />

        <section
          className="w-full py-16 px-6 lg:px-12"
          style={{ backgroundColor: colors.accentLight }}
        >
          <div className="max-w-5xl mx-auto text-center">
            <ShieldCheck
              className="w-12 h-12 mx-auto mb-5"
              style={{ color: colors.accent }}
              strokeWidth={1.75}
            />
            <span
              className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-5"
              style={{ backgroundColor: colors.bg, color: colors.accent }}
            >
              Free Trial
            </span>
            <h2
              className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4"
              style={{ color: colors.headline }}
            >
              Board Meetings Shouldn&apos;t Be This Painful
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8" style={{ color: colors.body }}>
              From messy agendas to lost documents — our Board Governance module fixes it all. 10 AI agents, 21 features, zero cost.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "10 AI Agents Working 24/7",
                "21 Features for Board Management",
                "Document Q&A & Meeting Automation",
              ].map((pill) => (
                <span
                  key={pill}
                  className="text-sm font-medium px-4 py-2 rounded-xl"
                  style={{
                    backgroundColor: colors.bg,
                    color: colors.headline,
                    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  }}
                >
                  {pill}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <Button
                size="lg"
                className="font-bold text-white hover:opacity-90"
                style={{ backgroundColor: colors.accent }}
                asChild
              >
                <Link to="/board-governance">
                  Explore Board Governance <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="font-bold bg-white"
                style={{ borderColor: colors.border, color: colors.headline }}
                asChild
              >
                <a href="https://demo.nonprofitai.software/login" target="_blank" rel="noopener noreferrer">
                  Try Demo
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
};

export default ControlTower;
