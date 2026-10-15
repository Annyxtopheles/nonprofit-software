import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import previewIllustration from "@/assets/screenshots/control-tower-preview-illustration.png";

export function ControlTowerPreviewCTA() {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-12 bg-white border-t border-[#14A800]/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-7 xl:col-span-6">
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold tracking-tight text-foreground leading-[1.25] mb-6 text-balance">
              See What the Control Tower Could Look Like for Your Nonprofit.
            </h2>

            <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-3 mb-8 max-w-lg">
              <p>
                Walk us through how you manage donors, grants, programs, events, volunteers, or your board.
              </p>
              <p>
                We&apos;ll show you where the{" "}
                <strong className="font-semibold text-foreground">
                  Nonprofit AI
                </strong>
                <br className="hidden sm:inline" />{" "}
                <strong className="font-semibold text-foreground">
                  Control Tower
                </strong>{" "}
                can bring the work together.
              </p>
            </div>

            <div>
              <Button
                size="lg"
                className="font-bold text-white bg-[#14A800] hover:bg-[#129200] rounded-lg px-6 py-3.5 shadow-sm transition-all"
                asChild
              >
                <a
                  href="https://collabai.software/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Free Demo <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Illustration Placeholder / Preview */}
          <div className="lg:col-span-5 xl:col-span-6 flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-[480px] lg:max-w-[520px] relative">
              <img
                src={previewIllustration}
                alt="Nonprofit AI Control Tower Dashboard Overview"
                loading="lazy"
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-[1.02] motion-reduce:transition-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
