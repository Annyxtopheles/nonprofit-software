import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import sjLogo from "@/assets/logos/sj-innovation-logo.svg";

export const BringYourNonprofitSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 border-t border-slate-100 bg-[#fbfdfa]">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-[32px] border border-[#108a00]/25 bg-white p-8 sm:p-12 md:p-16 text-center shadow-[0_12px_40px_rgba(28,52,34,0.05)] relative overflow-hidden">
          {/* Subtle Soft Mint Aura in Background */}
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-[#e7f5e3]/60 blur-3xl pointer-events-none"
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold tracking-tight text-[#0c180a] leading-tight text-balance mb-4">
              Bring Your Nonprofit Into One Clear View.
            </h2>

            {/* Sub-line / Areas Covered */}
            <p className="text-base sm:text-lg font-semibold text-[#108a00] tracking-tight mb-4">
              Donors. Grants. Programs. Events. Volunteers. Board operations.
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 mb-8 text-pretty">
              See how the Nonprofit AI Control Tower could bring the work together around the systems your organization already uses.
            </p>

            {/* CTA Button */}
            <div className="flex justify-center mb-6">
              <Button
                size="lg"
                className="font-bold text-white bg-[#108a00] hover:bg-[#0e7700] rounded-xl px-8 py-4 text-base shadow-sm hover:shadow-md transition-all duration-200"
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

            {/* Trust Proof */}
            <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-500 font-medium">
              <img
                src={sjLogo}
                alt="SJ Innovation"
                className="h-4 w-auto object-contain opacity-75"
              />
              <span>Built by SJ Innovation - 22+ years of technology delivery.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BringYourNonprofitSection;
