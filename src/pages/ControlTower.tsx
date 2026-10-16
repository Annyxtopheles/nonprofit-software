import { SiteLayout } from "@/components/layout/SiteLayout";
import { NewsletterSignup } from "@/components/newsletter/NewsletterSignup";
import { SoundFamiliarCards } from "@/components/home/SoundFamiliarCards";
import { SecuritySection } from "@/components/home/SecuritySection";
import { HowItComesTogetherSection } from "@/components/home/HowItComesTogetherSection";
import { CompanyTrackRecordSection } from "@/components/home/CompanyTrackRecordSection";
import { WhatWeCanDoSection } from "@/components/home/WhatWeCanDoSection";
import { TrustedPartnersSection } from "@/components/home/TrustedPartnersSection";
import { SuccessStoriesSection } from "@/components/home/SuccessStoriesSection";
import { ControlTowerPreviewCTA } from "@/components/home/ControlTowerPreviewCTA";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { HowItWorksCards } from "@/components/home/HowItWorksCards";
import { IntegrationsSection } from "@/components/home/IntegrationsSection";
import { ControlTowerHubGraphic } from "@/components/home/ControlTowerHubGraphic";
import { BringYourNonprofitSection } from "@/components/home/BringYourNonprofitSection";

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Layers, Database, ArrowRight, Shield, BarChart3, Calendar,
  FileText, Lock, Eye, Users, Zap, RefreshCw, Phone,
  LayoutDashboard, Heart, Activity, BookOpen, Cloud, Server,
  Brain, MessageSquare, TrendingUp, Code, Search,
  Globe, ShieldCheck, Link2, ScanEye, Sparkles
} from "lucide-react";
import donorIntelligenceImg from "@/assets/screenshots/agent-donor-intelligence.png";
import heroBgNetwork from "@/assets/hero-bg-network.png";


import meetingsImg from "@/assets/screenshots/meetings-view.png";
import reportsImg from "@/assets/screenshots/reports-analytics.png";
import dashboardImg from "@/assets/screenshots/dashboard-setup.png";

import { OrbitImages } from "@/components/ui/OrbitImages";
import sfdcLogo from "@/assets/logos/sfdc_nonprofits_logo_rgb_v1.webp";
import blackbaudLogo from "@/assets/logos/blackbaud-re-nxt.png";
import bloomerangLogo from "@/assets/logos/bloomerang-logo.webp";
import donorPerfectLogo from "@/assets/logos/donorperfect-logo.png";
import givebutterLogo from "@/assets/logos/givebutter-logo.png";
import hubspotLogo from "@/assets/logos/hubspot-logo.png";
import neonCrmLogo from "@/assets/logos/neon-crm-logo.png";
import virtuousLogo from "@/assets/logos/virtuous-logo.png";
import donorboxLogo from "@/assets/logos/donorbox-logo.svg";
import quickbooksLogo from "@/assets/logos/quickbooks-logo.png";
import stripeLogo from "@/assets/logos/stripe-logo.png";
import mailchimpLogo from "@/assets/logos/mailchimp-logo.svg";

const colors = {
  bg: "#FFFFFF",
  surface: "#F9F9F9",
  headline: "#001E00",
  body: "#5E6D55",
  accent: "#108a00",
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



const crmOrbitLogos = [
  { src: sfdcLogo, alt: "Salesforce for Nonprofits" },
  { src: blackbaudLogo, alt: "Blackbaud Raiser's Edge" },
  { src: bloomerangLogo, alt: "Bloomerang" },
  { src: donorPerfectLogo, alt: "DonorPerfect" },
  { src: givebutterLogo, alt: "Givebutter" },
  { src: hubspotLogo, alt: "HubSpot" },
  { src: neonCrmLogo, alt: "Neon CRM" },
  { src: virtuousLogo, alt: "Virtuous CRM" },
  { src: donorboxLogo, alt: "Donorbox" },
  { src: quickbooksLogo, alt: "QuickBooks" },
  { src: stripeLogo, alt: "Stripe" },
  { src: mailchimpLogo, alt: "Mailchimp" },
];

const valueProps = [
  { icon: Zap, label: "Connect in Minutes", desc: "API-based, no CRM migration" },
  { icon: Brain, label: "16 AI Agents", desc: "Specialized for nonprofit ops" },
  { icon: LayoutDashboard, label: "Role-Based Views", desc: "Purpose-built for every role" },
  { icon: Lock, label: "Secure by Design", desc: "RLS, encryption, audit trails" },
];

const ControlTower = () => {
  return (
    <SiteLayout>
      <div style={{ backgroundColor: colors.bg, color: colors.headline }}>
        {/* Hero */}
        <section
          className="relative overflow-hidden py-12 md:py-16 px-4 sm:px-6 lg:px-8"
          style={{
            background: "linear-gradient(180deg, #EBF6E7 0%, #F5FAF3 50%, #FFFFFF 100%)",
          }}
        >
          {/* Subtle AI Network Background Overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none select-none z-0"
          >
            <img
              src={heroBgNetwork}
              alt=""
              className="w-full h-full object-cover object-top opacity-40 mix-blend-multiply"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/80" />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Left Column: Hero Content */}
              <div className="lg:col-span-7 xl:col-span-6 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full border border-[#108a00]/30 bg-[#108a00]/10 text-[#108a00] mb-6">
                  <Layers className="w-4 h-4" />
                  NONPROFIT AI CONTROL TOWER
                </div>
                <h1
                  className="text-4xl md:text-5xl lg:text-[52px] font-extrabold leading-tight mb-6"
                  style={{ color: colors.headline }}
                >
                  One place to run your nonprofit.
                </h1>
                <p
                  className="text-lg md:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4"
                  style={{ color: colors.body }}
                >
                  Bring your donors, grants, events, programs, volunteers, and board information into one clear view.
                </p>
                <p
                  className="text-base md:text-lg font-medium leading-relaxed max-w-lg mx-auto lg:mx-0 mb-8"
                  style={{ color: colors.headline }}
                >
                  See what needs attention while keeping the tools your team already uses.
                </p>
                <div className="flex justify-center lg:justify-start">
                  <Button
                    size="lg"
                    className="font-bold text-white hover:opacity-90 rounded-xl px-7 py-3.5 shadow-sm transition-all"
                    style={{ backgroundColor: colors.accent }}
                    asChild
                  >
                    <a href="https://collabai.software/contact" target="_blank" rel="noopener noreferrer">
                      Book Free Demo <ArrowRight className="w-4 h-4 ml-1.5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right Column: Control Tower Hub & Spoke Animated Graphic */}
              <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center relative">
                <div className="relative w-full max-w-[560px] sm:max-w-[620px] transition-transform duration-500">
                  <ControlTowerHubGraphic />
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustedPartnersSection colors={colors} />

        <SuccessStoriesSection />

        <ControlTowerPreviewCTA />

        <HowItWorksCards />

        {/* Problem Section */}
        <section
          className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100"
          style={{
            background: "linear-gradient(180deg, #E9F3E7 0%, #EEF6EB 50%, #F5F9F4 100%)",
          }}
        >
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 md:mb-10 text-center">
              <h2
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-3"
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
        {/* It Doesn't Replace Your CRM / Orbit Integration Section */}
        <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-[#F9FBF8] overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <div className="mb-6 md:mb-8 text-center">
              <h2
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-3"
                style={{ color: colors.headline }}
              >
                It Doesn&apos;t Replace Your CRM. It Makes It Brilliant.
              </h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
                Connect your existing systems in minutes. See insights in real time. No migration. No duplicate data entry. Ever.
              </p>
            </div>

            {/* Orbit Images Visualization */}
            <div className="relative py-4 md:py-6 flex items-center justify-center">
              <OrbitImages
                images={crmOrbitLogos}
                shape="ellipse"
                radiusX={440}
                radiusY={140}
                baseWidth={1050}
                itemSize={72}
                itemRadius={16}
                duration={35}
                showPath={true}
                pathColor="rgba(16, 138, 0, 0.16)"
                pathDash={4}
                depth={0.45}
                hoverScale={1.12}
                draggable={true}
                clickToFront={true}
                centerContent={
                  <div className="flex flex-col items-center justify-center p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-sm border border-[#108a00]/25 shadow-[0_12px_32px_rgba(16,138,0,0.12)] text-center max-w-[210px] pointer-events-auto transition-transform hover:scale-105 duration-300">
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#E7F5E3] flex items-center justify-center mb-2.5 shadow-sm border border-[#108a00]/15">
                      <img
                        src="/NonProfit AI Logo July 2026 Icon.svg"
                        alt="Nonprofit AI Control Tower"
                        className="w-10 h-10 sm:w-11 sm:h-11 object-contain"
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-bold text-[#001E00] tracking-tight">
                      Nonprofit AI
                    </span>
                    <span className="text-[11px] font-semibold text-[#108a00] uppercase tracking-wider">
                      Control Tower
                    </span>
                    <span className="text-[10px] text-[#5E6D55] mt-0.5 leading-tight">
                      Unified Nonprofit Intelligence
                    </span>
                  </div>
                }
                className="w-full max-w-5xl"
              />
            </div>

            {/* Core Value Props Cards */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {valueProps.map((item) => (
                <div
                  key={item.label}
                  className="p-5 md:p-6 text-center rounded-xl bg-white/70 border border-slate-200/60 shadow-sm transition-all hover:bg-white hover:shadow-md"
                >
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
                  <h3 className="text-base font-semibold mb-1" style={{ color: colors.headline }}>
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

        {/* What We Can Do */}
        <WhatWeCanDoSection />

        {/* AI Agents */}
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-[#F9FBF8]">
          <div className="max-w-6xl mx-auto relative z-[1]">
            <div className="mb-8 md:mb-10 text-center">
              <h2
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-3"
                style={{ color: colors.headline }}
              >
                16 AI Agents. Four Specialized Teams.
              </h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
                Not generic chatbots — purpose-built agents trained on nonprofit operations with access to your data.
              </p>
            </div>
            <div className="space-y-6">
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
                      <h3 className="text-base font-semibold mb-4" style={{ color: colors.headline }}>
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
        <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 md:mb-10 text-center">
              <h2
                className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight mb-3"
                style={{ color: colors.headline }}
              >
                Built for Every Role on Your Team
              </h2>
              <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: colors.body }}>
                Four purpose-built dashboards ensure every team member sees what matters to them — not a generic overview.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
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
        <IntegrationsSection />

        {/* Security & Data Control */}
        <SecuritySection />


        {/* How It Comes Together */}
        <HowItComesTogetherSection />

        {/* 22+ Years Behind the Technology */}
        <CompanyTrackRecordSection />


        <TestimonialsSection colors={colors} />



        {/* Bring Your Nonprofit Into One Clear View CTA */}
        <BringYourNonprofitSection />

        {/* Lite Version (Board Governance) Teaser Banner */}
        <NewsletterSignup source="home_section" />

        <section className="w-full py-14 md:py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-[#fbfdfa]">
          <div className="max-w-4xl mx-auto rounded-[32px] border border-slate-200/90 bg-white p-8 sm:p-12 text-center shadow-[0_4px_24px_rgba(28,52,34,0.03)] relative overflow-hidden">
            {/* Subtle soft mint decorative glow */}
            <div
              aria-hidden="true"
              className="absolute -top-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-[#e7f5e3]/50 blur-3xl pointer-events-none"
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-[#e7f5e3] border border-[#108a00]/20 flex items-center justify-center mx-auto mb-4 text-[#108a00]">
                <ShieldCheck className="w-7 h-7" strokeWidth={2} />
              </div>
              <span className="inline-block text-xs font-semibold tracking-wide px-3.5 py-1.5 rounded-full border border-[#108a00]/25 bg-[#e7f5e3]/60 text-[#108a00] mb-4">
                Free Trial
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0c180a] leading-tight mb-3">
                Board Meetings Shouldn&apos;t Be This Painful
              </h2>
              <p className="text-base md:text-lg text-slate-600 max-w-2xl mx-auto mb-6 text-pretty">
                From messy agendas to lost documents — our Board Governance module fixes it all. 10 AI agents, 21 features, zero cost.
              </p>
              <div className="flex flex-wrap justify-center gap-2.5 mb-8">
                {[
                  "10 AI Agents Working 24/7",
                  "21 Features for Board Management",
                  "Document Q&A & Meeting Automation",
                ].map((pill) => (
                  <span
                    key={pill}
                    className="text-sm font-medium px-4 py-2 rounded-full border border-slate-200/90 bg-[#fbfdfa] text-slate-700 shadow-xs"
                  >
                    {pill}
                  </span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3.5 justify-center items-center">
                <Button
                  size="lg"
                  className="font-bold text-white bg-[#108a00] hover:bg-[#0e7700] rounded-xl px-7 py-3.5 shadow-sm transition-all"
                  asChild
                >
                  <Link to="/board-governance">
                    Explore Board Governance <ArrowRight className="w-4 h-4 ml-1.5" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="font-bold bg-white hover:bg-slate-50 border-slate-200 text-[#0c180a] rounded-xl px-7 py-3.5"
                  asChild
                >
                  <a href="https://demo.nonprofitai.software/login" target="_blank" rel="noopener noreferrer">
                    Try Demo
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SiteLayout>
  );
};

export default ControlTower;
