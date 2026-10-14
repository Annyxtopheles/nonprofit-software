import { useEffect, useRef } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import {
  Bot,
  CalendarCheck,
  Check,
  Clock,
  FileStack,
  FileText,
  Shield,
  Zap,
} from "lucide-react";

const checklistItems = [
  {
    icon: Bot,
    title: "Eliminate busywork with AI",
    description: "The 3 pre-meeting tasks AI can eliminate entirely",
  },
  {
    icon: CalendarCheck,
    title: "5-minute agenda framework",
    description: "Copy-paste agenda template included",
  },
  {
    icon: Zap,
    title: "Automated follow-ups",
    description: "A follow-up system that gets 90% response rates",
  },
  {
    icon: FileStack,
    title: "Document organization",
    description: "A method that saves 2+ hours per meeting",
  },
  {
    icon: Shield,
    title: "Stay audit-ready",
    description: "Compliance checklist to keep your board prepared",
  },
];

const trustStats = [
  { icon: FileText, label: "15-step system" },
  { icon: Clock, label: "45 min prep time" },
  { icon: Shield, label: "Audit-ready checklist" },
];

const FORM_SCRIPT_SRC = "https://connect.leadslift.io/js/form_embed.js";
const FORM_IFRAME_ID = "inline-YfgWpMjRPyTMRlePvEdA";
const FORM_INITIAL_HEIGHT = 600;

const colors = {
  bg: "#FFFFFF",
  headline: "#001E00",
  body: "#5E6D55",
  accent: "#14A800",
  accentLight: "#E7F5E3",
  border: "#E0E0E0",
  divider: "#D5E0D5",
};

const LeadMagnet = () => {
  const formRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existing = document.querySelector(`script[src="${FORM_SCRIPT_SRC}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = FORM_SCRIPT_SRC;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    const formEl = formRef.current;
    const cardEl = cardRef.current;
    if (!formEl || !cardEl) return;

    const syncHeights = () => {
      if (window.innerWidth < 1024) {
        cardEl.style.height = "";
        return;
      }

      cardEl.style.height = "auto";

      const formHeight = Math.ceil(formEl.getBoundingClientRect().height);
      if (formHeight <= 0) return;

      cardEl.style.height = `${formHeight}px`;
    };

    const observer = new ResizeObserver(syncHeights);
    observer.observe(formEl);
    observer.observe(cardEl);

    const iframe = document.getElementById(FORM_IFRAME_ID);
    if (iframe) observer.observe(iframe);

    const mutationObserver = new MutationObserver(syncHeights);
    mutationObserver.observe(formEl, { childList: true, subtree: true, attributes: true });

    window.addEventListener("resize", syncHeights);
    syncHeights();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("resize", syncHeights);
    };
  }, []);

  return (
    <SiteLayout>
      <section className="py-16 md:py-24 px-6 lg:px-12" style={{ backgroundColor: colors.bg }}>
        <div className="max-w-6xl mx-auto">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto mb-14 md:mb-20">
            <p
              className="text-sm font-semibold mb-4 tracking-wide"
              style={{ color: colors.accent }}
            >
              Free Resource
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-bold leading-tight mb-6"
              style={{ color: colors.headline }}
            >
              Get Your Free Board Meeting Automation Checklist
            </h1>
            <p
              className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto"
              style={{ color: colors.body }}
            >
              Discover the exact 15-step system nonprofit leaders use to slash meeting
              prep from 8 hours to 45 minutes — without sacrificing quality.
            </p>

            {/* Trust bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-0 mt-10">
              {trustStats.map((stat, index) => (
                <div key={stat.label} className="flex items-center">
                  {index > 0 && (
                    <div
                      className="hidden md:block w-px h-5 mx-8"
                      style={{ backgroundColor: colors.divider }}
                    />
                  )}
                  <div className="flex items-center gap-2">
                    <stat.icon className="w-4 h-4" style={{ color: colors.body }} />
                    <span className="text-sm font-medium" style={{ color: colors.body }}>
                      {stat.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-start">
            {/* What's Inside */}
            <div
              ref={cardRef}
              className="flex flex-col rounded-2xl border overflow-hidden shadow-sm"
              style={{ backgroundColor: colors.bg, borderColor: colors.border }}
            >
              <div
                className="px-6 md:px-8 py-5"
                style={{ backgroundColor: colors.accentLight }}
              >
                <p
                  className="text-xs font-semibold uppercase tracking-[0.12em] mb-2"
                  style={{ color: colors.accent }}
                >
                  Included free
                </p>
                <h2
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: colors.headline }}
                >
                  What&apos;s Inside
                </h2>
                <p className="text-base leading-relaxed" style={{ color: colors.body }}>
                  Everything you need to cut board meeting prep from hours to minutes.
                </p>
              </div>

              <ul className="flex flex-1 min-h-0 flex-col justify-between p-3 md:p-4">
                {checklistItems.map((item, index) => (
                  <li
                    key={item.title}
                    className="group flex items-start gap-3 rounded-xl px-4 py-2.5 transition-colors"
                    style={{
                      backgroundColor: index % 2 === 0 ? "#FAFCFA" : colors.bg,
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: colors.accentLight }}
                    >
                      <item.icon
                        className="w-5 h-5"
                        style={{ color: colors.accent }}
                        strokeWidth={2.25}
                      />
                    </div>

                    <div className="flex-1 min-w-0 pt-0.5">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <p
                            className="text-base md:text-lg font-semibold leading-snug mb-1"
                            style={{ color: colors.headline }}
                          >
                            {item.title}
                          </p>
                          <p
                            className="text-sm md:text-base leading-relaxed"
                            style={{ color: colors.body }}
                          >
                            {item.description}
                          </p>
                        </div>
                        <div
                          className="w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 mt-1"
                          style={{ borderColor: colors.accent }}
                        >
                          <Check
                            className="w-3.5 h-3.5"
                            style={{ color: colors.accent }}
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <div
                className="mt-auto shrink-0 px-6 md:px-8 py-3 border-t flex items-center gap-2"
                style={{ borderColor: colors.border, backgroundColor: "#FAFCFA" }}
              >
                <Check className="w-4 h-4 shrink-0" style={{ color: colors.accent }} />
                <p className="text-sm font-medium" style={{ color: colors.body }}>
                  Instant access · Free bonus AI Board Assistant setup guide
                </p>
              </div>
            </div>

            {/* Form */}
            <div ref={formRef} className="h-fit leading-[0]">
              <iframe
                src="https://connect.leadslift.io/widget/form/YfgWpMjRPyTMRlePvEdA"
                className="block w-full border-0 rounded-2xl"
                style={{ height: FORM_INITIAL_HEIGHT }}
                id={FORM_IFRAME_ID}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Non-profit Lead Magnet Form"
                data-height={String(FORM_INITIAL_HEIGHT)}
                data-layout-iframe-id={FORM_IFRAME_ID}
                data-form-id="YfgWpMjRPyTMRlePvEdA"
                title="Non-profit Lead Magnet Form"
              />
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
};

export default LeadMagnet;
