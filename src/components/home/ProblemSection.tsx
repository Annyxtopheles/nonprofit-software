import { Clock, FileSearch, TrendingDown } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Time-Consuming",
    description:
      "Staff spend 15+ hours per month on meeting prep, minutes, follow-ups, and chasing board members for responses.",
  },
  {
    icon: FileSearch,
    title: "Information Chaos",
    description:
      "Important documents lost in email threads. Board members can't find last quarter's assessment or policy updates.",
  },
  {
    icon: TrendingDown,
    title: "Low Engagement",
    description:
      "Board members are busy volunteers. Without proactive reminders and easy access, engagement drops.",
  },
];

export function ProblemSection() {
  return (
    <section id="problem" className="section px-6 lg:px-12 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-bold text-primary uppercase tracking-wider mb-3">The Challenge</p>
          <h2 className="mb-4">Board Management Shouldn&apos;t Be This Hard</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Nonprofit leaders spend countless hours on administrative tasks that
            pull them away from their mission.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {problems.map((problem) => (
            <div key={problem.title} className="text-center">
              <div className="w-14 h-14 rounded-full bg-secondary mx-auto mb-3 flex items-center justify-center">
                <problem.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-[15px] font-medium mb-1.5">{problem.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
