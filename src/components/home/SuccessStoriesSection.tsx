import { Users, Calendar, Check } from "lucide-react";
import iaaboImg from "@/assets/screenshots/success-story-iaabo.png";
import optimistsImg from "@/assets/screenshots/success-story-optimists.png";
import meetingsImg from "@/assets/screenshots/meetings-view.png";
import reportsImg from "@/assets/screenshots/reports-analytics.png";

interface Story {
  org: string;
  headline: string;
  tags: string[];
  challenge?: string;
  whatWeDelivered: string;
  deliverablesList?: string[];
  proof?: string;
  stat1: {
    value: string;
    label: string;
  };
  stat2: {
    value: string;
    label: string;
  };
  image: string;
  imageAlt: string;
  isMockupWithTape?: boolean;
}

const stories: Story[] = [
  {
    org: "IAABO",
    headline: "One Learning Platform for a 16,000+\u00A0Member\u00A0Organization",
    tags: ["LEARNING PLATFORM", "MEMBER ORGANIZATION"],
    challenge:
      "IAABO needed one place to train, test, and certify officials while giving local leaders visibility into progress.",
    whatWeDelivered:
      "A role-based learning academy with course and exam management, certificates, training rules, and question-level analytics.",
    proof:
      "Built around a member roster of 16,000+ and taken into production ahead of the September 2026 seminar.",
    stat1: {
      value: "16,000+",
      label: "MEMBERS",
    },
    stat2: {
      value: "SEPTEMBER 2026",
      label: "LAUNCH",
    },
    image: iaaboImg,
    imageAlt: "IAABO Learning Platform Training Dashboard",
    isMockupWithTape: true,
  },
  {
    org: "Queens Chamber of Commerce",
    headline: "AI Infrastructure for a Business\u00A0Community",
    tags: ["AI INFRASTRUCTURE", "COMMUNITY & CHAMBER"],
    challenge:
      "Staff, board members, and committees needed a better way to work across meetings, documents, outreach, and member activity.",
    whatWeDelivered:
      "A Control Tower with board and committee tools, meeting management, document Q&A, lead follow-up, and CRM-connected member onboarding.",
    proof:
      "Prepared for live use with real Chamber data and member onboarding.",
    stat1: {
      value: "1,400+",
      label: "CHAMBER MEMBERS",
    },
    stat2: {
      value: "CONTROL TOWER",
      label: "LIVE SYSTEM",
    },
    image: meetingsImg,
    imageAlt: "Queens Chamber of Commerce Control Tower Management",
    isMockupWithTape: false,
  },
  {
    org: "The Optimists",
    headline: "Modernizing an Aging Nonprofit\u00A0Platform",
    tags: ["MODERNIZATION", "DONATION PLATFORM"],
    challenge:
      "An outdated website and admin system were making everyday management harder.",
    whatWeDelivered:
      "Migrated hosting, modernized the admin platform, upgraded the website environment, and added online donation forms.",
    proof:
      "The migration is complete and the donation experience has been built.",
    stat1: {
      value: "100%",
      label: "MIGRATED",
    },
    stat2: {
      value: "ACTIVE",
      label: "DONATION ENGINE",
    },
    image: optimistsImg,
    imageAlt: "The Optimists Modernized Platform",
    isMockupWithTape: true,
  },
  {
    org: "YMCA Jamaica / NYC",
    headline: "Bringing Nonprofit Operations Into One\u00A0Control\u00A0Tower",
    tags: ["OPERATIONS CONTROL TOWER", "COMMUNITY LEADERSHIP"],
    whatWeDelivered: "Centralized key nonprofit operations, including:",
    deliverablesList: [
      "Board voting",
      "Board management",
      "Events",
      "Grants",
      "Meetings to actions to tasks",
      "Volunteer management",
    ],
    stat1: {
      value: "6 OPERATIONS",
      label: "CENTRALIZED",
    },
    stat2: {
      value: "ONE PLATFORM",
      label: "CONTROL TOWER",
    },
    image: reportsImg,
    imageAlt: "YMCA Operations Control Tower Analytics",
    isMockupWithTape: false,
  },
];

export function SuccessStoriesSection() {
  return (
    <section
      id="success-stories"
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100"
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #FAFCF9 15%, #F4F8F3 45%, #EEF6EB 75%, #EBF4E8 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 md:mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
            SUCCESS STORIES
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-foreground text-balance">
            Built Around How Real Organizations Work.
          </h2>
        </div>

        {/* Stories */}
        <div className="space-y-12 md:space-y-16">
          {stories.map((story, index) => {
            const isImageRight = index % 2 === 0;

            const textContent = (
              <div className="flex flex-col justify-center">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-3">
                  {story.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center text-[11px] font-semibold tracking-wider uppercase px-3.5 py-1 rounded-full border border-primary/20 bg-secondary/60 text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Organization & Headline */}
                <h3 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-2">
                  {story.org}
                </h3>
                <h4 className="text-xl md:text-2xl font-semibold text-primary mb-6 leading-snug text-pretty">
                  {story.headline}
                </h4>

                {/* Challenge / Delivered / Proof Rows */}
                <div className="divide-y divide-border border-y border-border">
                  {story.challenge && (
                    <div className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                      <span className="sm:col-span-4 font-semibold text-foreground text-sm">
                        Challenge
                      </span>
                      <p className="sm:col-span-8 text-sm text-muted-foreground leading-relaxed">
                        {story.challenge}
                      </p>
                    </div>
                  )}

                  {story.deliverablesList ? (
                    <div className="py-3.5 space-y-2 text-left">
                      <span className="font-semibold text-foreground text-sm block">
                        What We Delivered
                      </span>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {story.whatWeDelivered}
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-2.5 pt-1 text-left">
                        {story.deliverablesList.map((item) => (
                          <div
                            key={item}
                            className="inline-flex items-center gap-2 text-sm font-medium text-foreground"
                          >
                            <Check className="w-4 h-4 text-primary shrink-0" strokeWidth={2.5} />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                      <span className="sm:col-span-4 font-semibold text-foreground text-sm">
                        What We Delivered
                      </span>
                      <p className="sm:col-span-8 text-sm text-muted-foreground leading-relaxed">
                        {story.whatWeDelivered}
                      </p>
                    </div>
                  )}

                  {story.proof && (
                    <div className="py-3.5 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-4 items-baseline">
                      <span className="sm:col-span-4 font-semibold text-foreground text-sm">
                        Proof
                      </span>
                      <p className="sm:col-span-8 text-sm text-muted-foreground leading-relaxed">
                        {story.proof}
                      </p>
                    </div>
                  )}
                </div>

                {/* Stat Badges */}
                <div className="flex items-center gap-6 sm:gap-10 mt-6 pt-2">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-primary shrink-0 opacity-80" strokeWidth={1.5} />
                    <div>
                      <div className="text-base sm:text-lg font-medium text-foreground leading-tight">
                        {story.stat1.value}
                      </div>
                      <div className="text-[11px] font-medium text-muted-foreground uppercase mt-0.5 tracking-wider">
                        {story.stat1.label}
                      </div>
                    </div>
                  </div>

                  <div className="h-8 w-px bg-border shrink-0" />

                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-primary shrink-0 opacity-80" strokeWidth={1.5} />
                    <div>
                      <div className="text-base sm:text-lg font-medium text-foreground leading-tight">
                        {story.stat2.value}
                      </div>
                      <div className="text-[11px] font-medium text-muted-foreground uppercase mt-0.5 tracking-wider">
                        {story.stat2.label}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );

            const imageContent = (
              <div className="flex items-center justify-center">
                <div className="relative group w-full max-w-[480px]">
                  {story.isMockupWithTape ? (
                    <img
                      src={story.image}
                      alt={story.imageAlt}
                      loading="lazy"
                      className="w-full h-auto object-contain rounded-lg transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none motion-reduce:hover:scale-100"
                    />
                  ) : (
                    <div className="rounded-xl overflow-hidden border border-border shadow-md bg-card p-1">
                      <img
                        src={story.image}
                        alt={story.imageAlt}
                        loading="lazy"
                        className="w-full h-auto object-cover rounded-lg transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none"
                      />
                    </div>
                  )}
                </div>
              </div>
            );

            return (
              <div
                key={story.org}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
              >
                {isImageRight ? (
                  <>
                    <div className="order-2 lg:order-1">{textContent}</div>
                    <div className="order-1 lg:order-2">{imageContent}</div>
                  </>
                ) : (
                  <>
                    <div className="order-1 lg:order-1">{imageContent}</div>
                    <div className="order-2 lg:order-2">{textContent}</div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
