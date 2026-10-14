import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, type LucideIcon } from "lucide-react";

export type HowItWorksSlide = {
  icon: LucideIcon;
  headline: string;
  body: string;
};

type Palette = {
  bg: string;
  surface: string;
  headline: string;
  body: string;
  accent: string;
  accentLight: string;
  border: string;
};

const defaultPalette: Palette = {
  bg: "hsl(var(--card))",
  surface: "hsl(var(--muted))",
  headline: "hsl(var(--foreground))",
  body: "hsl(var(--muted-foreground))",
  accent: "hsl(var(--primary))",
  accentLight: "hsl(var(--secondary))",
  border: "hsl(var(--border))",
};

type Props = {
  title: string;
  subtitle?: string;
  slides: HowItWorksSlide[];
  colors?: Partial<Palette>;
  autoAdvanceMs?: number;
  className?: string;
};

export function HowItWorksSlides({
  title,
  subtitle,
  slides,
  colors,
  autoAdvanceMs = 6000,
  className = "",
}: Props) {
  const c: Palette = { ...defaultPalette, ...colors };
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number) => setIndex(((next % slides.length) + slides.length) % slides.length),
    [slides.length],
  );

  useEffect(() => {
    if (paused || slides.length < 2 || autoAdvanceMs <= 0) return;
    const id = window.setInterval(() => setIndex((i) => (i + 1) % slides.length), autoAdvanceMs);
    return () => window.clearInterval(id);
  }, [paused, slides.length, autoAdvanceMs]);

  if (slides.length === 0) return null;

  const active = slides[index];
  const ActiveIcon = active.icon;

  return (
    <section className={`py-12 md:py-16 px-6 lg:px-12 ${className}`}>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: c.headline }}>
            {title}
          </h2>
          {subtitle && (
            <p className="text-lg max-w-2xl mx-auto" style={{ color: c.body }}>
              {subtitle}
            </p>
          )}
        </div>

        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ backgroundColor: c.bg, border: `1px solid ${c.border}` }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget as Node)) setPaused(false);
          }}
        >
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((slide, i) => {
                const Icon = slide.icon;
                return (
                  <div
                    key={slide.headline}
                    className="w-full shrink-0 px-6 py-12 md:px-16 md:py-16 text-center"
                    aria-hidden={i !== index}
                  >
                    <div
                      className="w-16 h-16 rounded-full mx-auto mb-6 flex items-center justify-center"
                      style={{ backgroundColor: c.accentLight }}
                    >
                      <Icon className="w-8 h-8" style={{ color: c.accent }} strokeWidth={1.5} />
                    </div>
                    <span
                      className="text-xs font-bold uppercase tracking-[0.18em]"
                      style={{ color: c.accent }}
                    >
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-xl md:text-2xl font-bold mt-3 mb-3"
                      style={{ color: c.headline }}
                    >
                      {slide.headline}
                    </h3>
                    <p
                      className="text-base md:text-lg leading-relaxed max-w-xl mx-auto"
                      style={{ color: c.body }}
                    >
                      {slide.body}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous step"
            onClick={() => goTo(index - 1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: c.surface, border: `1px solid ${c.border}`, color: c.headline }}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            type="button"
            aria-label="Next step"
            onClick={() => goTo(index + 1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full flex items-center justify-center transition-colors"
            style={{ backgroundColor: c.surface, border: `1px solid ${c.border}`, color: c.headline }}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 mt-6" role="tablist" aria-label={title}>
          {slides.map((slide, i) => {
            const isActive = i === index;
            return (
              <button
                key={slide.headline}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show step ${i + 1}`}
                onClick={() => goTo(i)}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: isActive ? 24 : 8,
                  backgroundColor: isActive ? c.accent : c.border,
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
