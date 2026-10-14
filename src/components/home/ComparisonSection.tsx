import { X, Check, ArrowRight } from "lucide-react";

const comparisons = [
  {
    category: "Meeting Prep",
    before: "15+ hours/month searching emails and folders",
    after: "AI summarizes key documents in minutes",
  },
  {
    category: "Board Questions",
    before: "Days to find answers in scattered files",
    after: "Instant answers with source citations",
  },
  {
    category: "Action Items",
    before: "Lost in meeting notes, manually tracked",
    after: "Auto-extracted and assigned with reminders",
  },
  {
    category: "Engagement",
    before: "Votes missed due to busy schedules",
    after: "Smart reminders drive significantly higher participation",
  },
  {
    category: "Governance Health",
    before: "Issues discovered too late",
    after: "AI detects trends and alerts early",
  },
  {
    category: "New Leader Onboarding",
    before: "Weeks to understand board history",
    after: "Ask AI any question about your organization",
  },
  {
    category: "Donor Outreach",
    before: "Hours drafting personalized emails",
    after: "AI composes tailored drafts in seconds",
  },
  {
    category: "Committee Coordination",
    before: "Scattered communications across groups",
    after: "Centralized with role-based permissions",
  },
];

export function ComparisonSection() {
  return (
    <section id="comparison" className="section px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">The Difference</p>
          <h2 className="mb-4">From Paperwork to Clarity</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how AI transforms every aspect of board governance.
          </p>
        </div>

        <div className="document-card overflow-hidden p-0 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border-b-2 border-border bg-muted">
            <div className="text-sm font-bold text-foreground">Area</div>
            <div className="hidden md:flex text-sm font-bold text-destructive items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center">
                <X className="w-4 h-4" />
              </div>
              Before
            </div>
            <div className="hidden md:flex text-sm font-bold text-primary items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
              After NonProfitAI
            </div>
          </div>

          {comparisons.map((row, index) => (
            <div
              key={row.category}
              className={`grid grid-cols-1 md:grid-cols-3 gap-4 p-4 hover:bg-muted/50 transition-colors ${
                index !== comparisons.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="text-sm font-bold text-foreground">{row.category}</div>

              <div className="md:hidden">
                <div className="flex items-start gap-2 mb-2">
                  <div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3 text-destructive" />
                  </div>
                  <span className="text-sm text-muted-foreground">{row.before}</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <span className="text-sm text-foreground font-medium">{row.after}</span>
                </div>
              </div>

              <div className="hidden md:block text-sm text-muted-foreground">{row.before}</div>
              <div className="hidden md:block text-sm text-foreground font-medium">{row.after}</div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-muted-foreground inline-flex items-center gap-2">
            Ready to make the switch?
            <a href="#download" className="text-primary font-bold hover:underline inline-flex items-center gap-1">
              Download Free <ArrowRight className="w-4 h-4" />
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
