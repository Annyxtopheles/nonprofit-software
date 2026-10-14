import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import type { LucideIcon } from "lucide-react";

export type StackCardItem = {
  icon: LucideIcon;
  title: string;
  desc: string;
};

type Colors = {
  bg: string;
  headline: string;
  body: string;
  accent: string;
  border: string;
};

type CardStackProps = {
  items: StackCardItem[];
  colors: Colors;
  tileCardStyle: CSSProperties;
  ariaLabel?: string;
  /** Shorter cards (e.g. value props with brief copy) */
  compact?: boolean;
};

const AUTO_ADVANCE_MS = 3800;
const EXIT_MS = 480;
const VISIBLE_DEPTH = 3;

export function CardStack({
  items,
  colors,
  tileCardStyle,
  ariaLabel = "Cards",
  compact = false,
}: CardStackProps) {
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

  const finishExit = useCallback((nextIndex: number) => {
    clearExitTimer();
    exitTimerRef.current = window.setTimeout(() => {
      setActiveIndex(nextIndex);
      setExiting(false);
      exitingRef.current = false;
      exitTimerRef.current = null;
    }, EXIT_MS);
  }, [clearExitTimer]);

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

  const stackHeight = compact ? "h-[240px] sm:h-[220px]" : "h-[320px] sm:h-[300px]";
  const cardMinHeight = compact ? "min-h-[160px]" : "min-h-[220px]";

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
      <div className={`relative w-full max-w-md ${stackHeight} [perspective:1200px]`}>
        {items.map((item, index) => {
          const offset = (index - activeIndex + items.length) % items.length;
          const isFront = offset === 0;
          const isHidden = offset >= VISIBLE_DEPTH;
          const stackIndex = Math.min(offset, VISIBLE_DEPTH - 1);

          const translateY = exiting && isFront ? -28 : stackIndex * 14;
          const translateX = exiting && isFront ? 110 : stackIndex * 6;
          const rotate = exiting && isFront ? 8 : stackIndex * -1.5;
          const scale = exiting && isFront ? 0.96 : 1 - stackIndex * 0.05;
          const opacity = isHidden ? 0 : exiting && isFront ? 0 : 1 - stackIndex * 0.12;

          return (
            <button
              key={item.title}
              type="button"
              aria-label={`${item.title}. ${offset === 0 ? "Click for next" : "Show this card"}`}
              onClick={() => (isFront ? advance() : goTo(index))}
              className={`absolute inset-x-0 top-0 mx-auto w-full max-w-md ${cardMinHeight} p-6 md:p-7 text-left cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
              style={{
                ...tileCardStyle,
                zIndex: items.length - offset,
                transform: `translateY(${translateY}px) translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`,
                opacity,
                pointerEvents: isHidden ? "none" : "auto",
                transition: `transform ${EXIT_MS}ms cubic-bezier(0.22, 1, 0.36, 1), opacity ${EXIT_MS}ms ease`,
                transformOrigin: "center bottom",
                willChange: "transform, opacity",
                boxShadow: isFront
                  ? "0 8px 28px rgba(0, 0, 0, 0.1), 0 2px 8px rgba(0, 0, 0, 0.06)"
                  : "0 1px 3px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.04)",
                ["--tw-ring-color" as string]: colors.accent,
              }}
            >
              <item.icon
                className="w-7 h-7 mb-3"
                style={{ color: colors.accent }}
                strokeWidth={1.5}
              />
              <h3 className="text-[15px] font-medium mb-1.5" style={{ color: colors.headline }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: colors.body }}>
                {item.desc}
              </p>
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-2 mt-6" role="tablist" aria-label={ariaLabel}>
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
              className="h-2 rounded-full transition-all duration-300"
              style={{
                width: isActive ? 22 : 8,
                backgroundColor: isActive ? colors.accent : colors.border,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
