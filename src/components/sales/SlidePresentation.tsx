import { useState, useEffect, useCallback, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import logo from "@/assets/nonprofit-ai-logo.svg";

export interface Slide {
  content: ReactNode;
}

interface SlidePresentationProps {
  slides: Slide[];
  productName: string;
  accentColor?: string;
}

export function SlidePresentation({ slides, productName, accentColor = "hsl(var(--accent))" }: SlidePresentationProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number, dir: "next" | "prev") => {
    if (isAnimating || index < 0 || index >= slides.length) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 50);
    }, 150);
  }, [isAnimating, slides.length]);

  const next = useCallback(() => goTo(current + 1, "next"), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1, "prev"), [current, goTo]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
      if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [next, prev]);

  return (
    <div className="fixed inset-0 bg-[#0B1120] text-white overflow-hidden flex flex-col" style={{ "--slide-accent": accentColor } as React.CSSProperties}>
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 bg-[#0B1120]/80 backdrop-blur-sm border-b border-white/5 z-10 flex-shrink-0">
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-lg p-1.5">
            <img src={logo} alt="NonProfitAI" className="h-6 w-auto" />
          </div>
          <span className="text-sm font-medium text-white/70">NonProfitAI.software</span>
        </div>
        <span className="text-sm font-bold" style={{ color: accentColor }}>{productName}</span>
      </div>

      {/* Slide Content */}
      <div className="flex-1 relative overflow-hidden">
        <div
          key={current}
          className="absolute inset-0 flex items-center justify-center px-6 md:px-16 py-8"
          style={{
            animation: "slideIn 300ms ease-out forwards",
          }}
        >
          <div className="w-full max-w-6xl mx-auto">
            {slides[current].content}
          </div>
        </div>

        {/* Nav Arrows */}
        {current > 0 && (
          <button onClick={prev} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}
        {current < slides.length - 1 && (
          <button onClick={next} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-2.5 bg-[#0B1120]/80 backdrop-blur-sm border-t border-white/5 flex-shrink-0">
        <span className="text-xs text-white/40">CollabAI Software</span>
        <span className="text-xs text-white/60 font-mono">{current + 1} / {slides.length}</span>
        <span className="text-xs text-white/40">nonprofitai.software</span>
      </div>

      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* Reusable slide layout helpers */
export function SlideTitle({ children, accent }: { children: ReactNode; accent?: string }) {
  return (
    <h1 className="text-3xl md:text-5xl font-bold mb-2 leading-tight">
      {children}
    </h1>
  );
}

export function SlideSubtitle({ children }: { children: ReactNode }) {
  return <p className="text-lg md:text-xl text-white/60 mb-8">{children}</p>;
}

export function SlideCard({ emoji, title, desc, accent }: { emoji?: string; title: string; desc: string; accent?: string }) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-5 backdrop-blur-sm hover:bg-white/[0.08] transition-colors">
      {emoji && <div className="text-2xl mb-2">{emoji}</div>}
      <h3 className="font-bold text-sm mb-1" style={{ color: accent }}>{title}</h3>
      <p className="text-xs text-white/50">{desc}</p>
    </div>
  );
}
