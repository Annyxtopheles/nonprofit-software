import { SiteLayout } from "@/components/layout/SiteLayout";
import { 
  Calendar, CheckCircle, FileText, BarChart3, MessageSquare, 
  TrendingUp, Shield, Globe, Bell, Users, RefreshCw, DollarSign, 
  CalendarDays, UserCheck, Palette
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  { icon: Calendar, title: "Meeting Management", description: "Schedule meetings, track attendance, manage voting, and generate minutes automatically. Set recurring meetings and send invites with one click." },
  { icon: CheckCircle, title: "Task Tracking", description: "Assign tasks to board members, set deadlines, and get AI-powered reminders. Track completion rates and identify bottlenecks." },
  { icon: FileText, title: "Knowledge Base", description: "Centralize all documents with AI-powered document Q&A. Upload bylaws, policies, meeting notes, and find anything instantly." },
  { icon: BarChart3, title: "Board Assessments", description: "Annual self-assessments with AI-generated insights. Benchmark against best practices and track improvement over time." },
  { icon: MessageSquare, title: "Team Communication", description: "Secure messaging with automatic archiving. Keep all board discussions organized and searchable in your knowledge base." },
  { icon: TrendingUp, title: "Reports & Analytics", description: "Track attendance, engagement, task completion, and governance health. Generate reports for funders and stakeholders." },
  { icon: Shield, title: "Compliance Ready", description: "Built-in audit logs, vote tracking, and document version control. Stay compliant with nonprofit governance requirements." },
  { icon: Globe, title: "Lead Follow-Up CRM", description: "Track donor prospects, partnerships, and board cultivation. Manage relationships and follow-ups in one place." },
  { icon: Bell, title: "Smart Notifications", description: "Personalized alerts for votes, tasks, and meetings. AI prioritizes what's urgent so board members stay engaged." },
  { icon: Users, title: "Committee Management", description: "Structure your board into Executive, Standing, and Ad Hoc committees with role-based permissions for Chairs, Vice Chairs, and Secretaries." },
  { icon: RefreshCw, title: "Board Cycle Timeline", description: "Never miss a governance deadline. Visual calendar showing quarterly activities, key dates, and year-over-year progress." },
  { icon: DollarSign, title: "Contribution Tracking", description: "Track board giving with pledge management, payment tracking, and fulfillment rates organized by fiscal year." },
  { icon: CalendarDays, title: "Event Management", description: "Schedule board events and fundraisers with RSVP tracking and post-event feedback collection from attendees." },
  { icon: UserCheck, title: "Access Control", description: "Maintain portal security with admin approval workflows for new members and role-based permissions." },
  { icon: Palette, title: "White-Label Branding", description: "Your organization's identity—customizable logo, colors, and theme to match your brand." },
];

const BoardGovernanceFeatures = () => (
  <SiteLayout>
    <section className="section px-6 lg:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-sm font-semibold text-primary mb-3">Board Governance Features</p>
        <h1 className="mb-6">21 Features Your Board Needs</h1>
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          A complete governance toolkit designed specifically for nonprofit boards, powered by AI.
        </p>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 text-center">
          {features.map((f) => (
            <div key={f.title} className="document-card">
              <f.icon className="w-7 h-7 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-[15px] font-medium mb-1.5">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-12">
          <Button size="lg" asChild>
            <a href="https://demo.nonprofitai.software/login" target="_blank" rel="noopener noreferrer">
              Start Free Demo
            </a>
          </Button>
        </div>
      </div>
    </section>
  </SiteLayout>
);

export default BoardGovernanceFeatures;
