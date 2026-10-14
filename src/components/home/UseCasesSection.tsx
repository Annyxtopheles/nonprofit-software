import { Sparkles, Building2, Users, Palette } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const stories = [
  {
    icon: Building2,
    type: "Small Community Foundation",
    members: "5-10 board members",
    challenge:
      "Executive Director was spending 10 hours/month on meeting prep and minutes.",
    result:
      "AI Summarizer Agent reduced this to 2 hours. Knowledge Agent answers policy questions instantly. Board engagement increased significantly in first quarter.",
    metric: "80% time saved",
  },
  {
    icon: Users,
    type: "Regional YMCA",
    members: "15 board members, 5 committees",
    challenge:
      "Board members missed votes frequently due to busy schedules and lack of reminders.",
    result:
      "Reminder Agent sends personalized notifications. Voting participation improved significantly. Insights Agent detected early warning signs of declining committee attendance.",
    metric: "Higher engagement",
  },
  {
    icon: Palette,
    type: "Arts Nonprofit",
    members: "New Executive Director",
    challenge:
      "New Executive Director needed to quickly understand 5 years of board history.",
    result:
      'Knowledge Agent provided instant answers to questions like "What fundraising strategies worked best?" and "Who are our top donor prospects?"',
    metric: "Instant onboarding",
  },
  {
    icon: Users,
    type: "Multi-Committee Organization",
    members: "25+ board members across 5 committees",
    challenge:
      "Executive Director struggled to coordinate multiple groups with overlapping responsibilities and missed handoffs between committees.",
    result:
      "Committee Management provides dedicated roles (Chair, Vice Chair, Secretary), separate meeting schedules, and clear accountability chains. Board-wide visibility maintained while respecting committee autonomy.",
    metric: "Multi-Committee Ready",
  },
];

export function UseCasesSection() {
  return (
    <section id="stories" className="section section-surface px-6 lg:px-12 relative">
      <div className="section-divider absolute top-0 left-0 right-0" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-secondary text-primary border-0">
            <Sparkles className="w-3 h-3 mr-1" />
            Real Stories
          </Badge>
          <h2 className="mb-4">Built for Nonprofits Like Yours</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how organizations are transforming their board governance.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {stories.map((story) => (
            <div
              key={story.type}
              className="document-card text-center relative"
            >
              <Badge className="absolute top-4 right-4 bg-secondary text-primary border-0 font-bold text-xs">
                {story.metric}
              </Badge>

              <story.icon className="w-7 h-7 text-primary mx-auto mb-3" strokeWidth={1.5} />
              <h3 className="text-[15px] font-medium mb-1">{story.type}</h3>
              <span className="inline-block text-xs font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full mb-4">
                {story.members}
              </span>

              <div className="space-y-4 text-left">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-destructive/70 mb-1">
                    Challenge
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{story.challenge}</p>
                </div>

                <div className="pt-4 border-t border-border">
                  <p className="text-xs font-bold uppercase tracking-wider text-primary mb-1">
                    Result
                  </p>
                  <p className="text-sm text-foreground leading-relaxed">{story.result}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
