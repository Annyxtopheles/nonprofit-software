import { useCallback, useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

export type SecurityStackItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type Colors = {
  bg: string;
  surface: string;
  headline: string;
  body: string;
  accent: string;
  accentLight: string;
  border: string;
};

type SecurityCardStackProps = {
  items: SecurityStackItem[];
  colors: Colors;
};

const AUTO_ADVANCE_MS = 4200;
const EXIT_MS = 560;
const VISIBLE_DEPTH = 4;

/**
 * Vertical peel stack — different from Sound Familiar's side-swipe deck.
 * Cards rise out upward; the deck is centered with scale depth.
 */
export function SecurityCardStack({ items, colors }: SecurityCardStackProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [paused, setPaused] = useState(false);
  const exitTimerRef = useRef<number | null>(null);
  const exitingRef = useRef(false);

  const clearExitTimer = useCallback(() => {
    if (exitTimerRef.current !== null) {
      window.clearTimeout(exitTimerRef.current);
      exitTimerRef.current = null;
    }
  }, []);

  const finishExit = useCallback(
    (nextIndex: number) => {
      clearExitTimer();
      exitTimerRef.current = window.setTimeout(() => {
        setActiveIndex(nextIndex);
        setExiting(false);
        exitingRef.current = false;
        exitTimerRef.current = null;
      }, EXIT_MS);
    },
    [clearExitTimer],
  );

  const advance = useCallback(() => {
    if (exitingRef.current || items.length < 2) return;
    exitingRef.current = true;
    setExiting(true);
    finishExit((activeIndex + 1) % items.length);
  }, [activeIndex, finishExit, items.length]);

  useEffect(() => {
    if (paused || items.length < 2) return;
    const id = window.setInterval(advance, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [advance, paused, items.length]);

  useEffect(() => () => clearExitTimer(), [clearExitTimer]);

  const goTo = (index: number) => {
    if (index === activeIndex || exitingRef.current) return;
    exitingRef.current = true;
    setExiting(true);
    finishExit(index);
  };

  return (
    <div
      className="flex flex-col items-center"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setPaused(false);
        }
      }}
    >
      <div className="relative w-full max-w-xl h-[340px] sm:h-[320px] [perspective:1400px]">
        {items.map((item, index) => {
          const offset = (index - activeIndex + items.length) % items.length;
          const isFront = offset === 0;
          const isHidden = offset >= VISIBLE_DEPTH;
          const stackIndex = Math.min(offset, VISIBLE_DEPTH - 1);

          // Vertical peel: front lifts up & fades; deck sits centered behind with scale
          const translateY = exiting && isFront ? -120 : stackIndex * 18;
          const translateZ = exiting && isFront ? 40 : -stackIndex * 28;
          const rotateX = exiting && isFront ? -12 : stackIndex * 2;
          const scale = exiting && isFront ? 1.04 : 1 - stackIndex * 0.06;
          const opacity = isHidden ? 0 : exiting && isFront ? 0 : 1 - stackIndex * 0.15;

          return (
            <button
              key={item.title}
              type="button"
              aria-label={`${item.title}. ${isFront ? "Click for next" : "Show this card"}`}
              onClick={() => (isFront ? advance() : goTo(index))}
              className="absolute inset-x-0 top-0 mx-auto w-full max-w-xl min-h-[240px] p-7 md:p-9 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-2xl"
              style={{
                zIndex: items.length - offset,
                transform: `translateY(${translateY}px) translateZ(${translateZ}px) rotateX(${rotateX}deg) scale(${scale})`,
                opacity,
                pointerEvents: isHidden ? "none" : "auto",
                transition: `transform ${EXIT_MS}ms cubic-bezier(0.33, 1, 0.68, 1), opacity ${EXIT_MS * 0.85}ms ease`,
                transformOrigin: "center top",
                willChange: "transform, opacity",
                backgroundColor: colors.bg,
                border: `1px solid ${colors.border}`,
                borderLeft: `4px solid ${colors.accent}`,
                boxShadow: isFront
                  ? "0 16px 40px rgba(0, 30, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.04)"
                  : "0 4px 16px rgba(0, 0, 0, 0.04)",
                ["--tw-ring-color" as string]: colors.accent,
              }}
            >
              <div className="flex items-start gap-5">
                <div
                  className="w-14 h-14 rounded-full shrink-0 flex items-center justify-center"
                  style={{ backgroundColor: colors.accentLight }}
                >
                  <item.icon
                    className="w-7 h-7"
                    style={{ color: colors.accent }}
                    strokeWidth={1.5}
                  />
                </div>
                <div className="min-w-0 pt-0.5">
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="text-xs font-bold uppercase tracking-wider"
                      style={{ color: colors.accent }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3
                      className="text-lg font-semibold"
                      style={{ color: colors.headline }}
                    >
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-[15px] leading-relaxed" style={{ color: colors.body }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3 mt-8">
        <span className="text-xs font-medium tabular-nums" style={{ color: colors.body }}>
          {activeIndex + 1} / {items.length}
        </span>
        <div className="flex items-center gap-1.5" role="tablist" aria-label="Security features">
          {items.map((item, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={item.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show ${item.title}`}
                onClick={() => goTo(index)}
                className="h-2 w-2 rounded-sm transition-all duration-300"
                style={{
                  backgroundColor: isActive ? colors.accent : colors.border,
                  transform: isActive ? "scale(1.35)" : "scale(1)",
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
