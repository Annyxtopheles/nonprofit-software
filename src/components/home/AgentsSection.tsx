import { FileText, Brain, Bell, TrendingUp, Sparkles, ListChecks, BookOpen, Mail, Search, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const coreAgents = [
  {
    icon: FileText,
    name: "The Summarizer",
    tagline: "Generates meeting summaries and action items automatically",
    features: [
      "Extracts key decisions instantly",
      "Auto-assigns action items",
      "Up to 5 hours saved per meeting",
    ],
  },
  {
    icon: Brain,
    name: "The Knowledge Agent",
    tagline: "Answers questions about policies, bylaws, and organizational history",
    features: [
      "AI-powered document Q&A",
      "Instant answers with citations",
      "Available 24/7 for board members",
    ],
  },
  {
    icon: Bell,
    name: "The Reminder Agent",
    tagline: "Keeps everyone on track with smart reminders",
    features: [
      "Personalized notifications",
      "Priority-based scheduling",
      "Drives higher engagement rates",
    ],
  },
  {
    icon: TrendingUp,
    name: "The Insights Agent",
    tagline: "Detects trends and alerts you to issues early",
    features: [
      "Monitors attendance patterns",
      "Early warning detection",
      "Monthly health reports",
    ],
  },
  {
    icon: ListChecks,
    name: "The Task Extractor",
    tagline: "Automatically extracts action items from meeting discussions",
    features: [
      "Identifies tasks from meeting context",
      "Matches assignees to board members",
      "Infers deadlines intelligently",
    ],
  },
  {
    icon: BookOpen,
    name: "The Meeting Prep Agent",
    tagline: "Prepares pre-meeting briefings so members arrive informed",
    features: [
      "Summarizes agenda items",
      "Highlights pending decisions",
      "Lists required pre-reads",
    ],
  },
];

const crmAgents = [
  {
    icon: Mail,
    name: "AI Email Composer",
    tagline: "Drafts personalized outreach in your organization's voice",
    features: [
      "Context-aware personalization",
      "Professional nonprofit tone",
      "One-click ready to send",
    ],
  },
  {
    icon: Search,
    name: "AI Research Assistant",
    tagline: "Instant background on contacts and organizations",
    features: [
      "Company and contact summaries",
      "Relationship history",
      "Suggested talking points",
    ],
  },
  {
    icon: TrendingUp,
    name: "AI Engagement Analyzer",
    tagline: "Scores relationship health and flags risks early",
    features: [
      "Engagement scoring (1-10)",
      "Risk factor identification",
      "Opportunity detection",
    ],
  },
  {
    icon: Target,
    name: "AI Next Action Suggester",
    tagline: "Recommends prioritized follow-up actions",
    features: [
      "Priority-ranked suggestions",
      "Timing recommendations",
      "Context-aware reasoning",
    ],
  },
];

function AgentCard({ agent, index }: { agent: typeof coreAgents[0]; index: number }) {
  return (
    <div className="document-card text-center group relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <span className="text-4xl font-bold text-primary/10 group-hover:text-primary/20 transition-colors">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <agent.icon className="w-7 h-7 text-primary mx-auto mb-3" strokeWidth={1.5} />
      <h3 className="text-[15px] font-medium mb-1">{agent.name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{agent.tagline}</p>
      <ul className="space-y-2 inline-block text-left">
        {agent.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2 text-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
            <span className="text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function AgentsSection() {
  return (
    <section id="agents" className="section section-glow px-6 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-[1]">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-secondary text-primary border-0">
            <Sparkles className="w-3 h-3 mr-1" />
            AI-Powered Team
          </Badge>
          <h2 className="mb-4">10 AI Agents Working 24/7</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Unlike simple chatbots, our agentic AI systems work autonomously.
            They don&apos;t just respond—they <span className="text-foreground font-bold">proactively help your board succeed.</span>
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6 text-center">Core Agents</h3>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {coreAgents.map((agent, index) => (
              <AgentCard key={agent.name} agent={agent} index={index} />
            ))}
          </div>
        </div>

        <div>
          <div className="text-center mb-6">
            <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-2">CRM Intelligence Suite</h3>
            <p className="text-sm text-muted-foreground max-w-xl mx-auto">
              Power your donor cultivation and stakeholder relationships with AI-driven insights.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {crmAgents.map((agent, index) => (
              <AgentCard key={agent.name} agent={agent} index={coreAgents.length + index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
