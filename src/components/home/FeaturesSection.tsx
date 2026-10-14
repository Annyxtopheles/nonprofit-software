import {
  Calendar,
  CheckCircle,
  FileText,
  BarChart3,
  MessageSquare,
  TrendingUp,
  Shield,
  Globe,
  Bell,
  Users,
  RefreshCw,
  DollarSign,
  CalendarDays,
  UserCheck,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Meeting Management",
    description: "Schedule, track attendance, manage voting, and generate minutes automatically.",
  },
  {
    icon: CheckCircle,
    title: "Task Tracking",
    description: "Assign tasks, set deadlines, and get AI reminders when things are due.",
  },
  {
    icon: FileText,
    title: "Knowledge Base",
    description: "Centralize all documents with AI-powered document Q&A — find anything instantly.",
  },
  {
    icon: BarChart3,
    title: "Board Assessments",
    description: "Annual self-assessments with AI-generated insights and benchmarking.",
  },
  {
    icon: MessageSquare,
    title: "Team Communication",
    description: "Secure messaging with automatic archiving to your knowledge base.",
  },
  {
    icon: TrendingUp,
    title: "Reports & Analytics",
    description: "Track attendance, engagement, task completion, and governance health.",
  },
  {
    icon: Shield,
    title: "Compliance Ready",
    description: "Built-in audit logs, vote tracking, and document version control.",
  },
  {
    icon: Globe,
    title: "Lead Follow-Up CRM",
    description: "Track donor prospects, partnerships, and board cultivation efforts.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description: "Never miss important updates — get notified about votes, tasks, and meetings.",
  },
  {
    icon: Users,
    title: "Committee Management",
    description: "Structure your board into Executive, Standing, and Ad Hoc committees with role-based permissions.",
  },
  {
    icon: RefreshCw,
    title: "Board Cycle Timeline",
    description: "Never miss a governance deadline. Visual calendar showing quarterly activities and key dates.",
  },
  {
    icon: DollarSign,
    title: "Contribution Tracking",
    description: "Track board giving with pledge management, payment tracking, and fulfillment rates.",
  },
  {
    icon: CalendarDays,
    title: "Event Management",
    description: "Schedule board events and fundraisers with RSVP tracking and post-event feedback.",
  },
  {
    icon: UserCheck,
    title: "Access Control",
    description: "Maintain portal security with admin approval workflows and role-based permissions.",
  },
  {
    icon: Palette,
    title: "White-Label Branding",
    description: "Your organization's identity—customizable logo, colors, and theme to match your brand.",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="section section-dots px-6 lg:px-12 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">Platform Features</p>
          <h2 className="mb-4">21 Features Your Board Needs</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A complete governance toolkit designed specifically for nonprofit boards.
          </p>
        </div>

        <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4 text-left">
              <div className="w-11 h-11 rounded-full bg-secondary shrink-0 flex items-center justify-center">
                <feature.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <div className="min-w-0">
                <h3 className="text-[15px] font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
