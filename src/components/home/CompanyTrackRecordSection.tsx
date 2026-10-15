import React from "react";
import sjLogo from "@/assets/logos/sj-innovation-logo.svg";
import iso27001Logo from "@/assets/logos/iso-27001-certified.svg";
import clutchLogo from "@/assets/logos/clutch-logo.png";
import nycMbeLogo from "@/assets/logos/nyc-mbe-logo.png";

export const CompanyTrackRecordSection: React.FC = () => {
  return (
    <section id="track-record" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header with SJ Innovation Logo on the Left */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 max-w-4xl mx-auto mb-10 md:mb-12">
          <div className="shrink-0 flex items-center justify-center pt-1">
            <img
              src={sjLogo}
              alt="SJ Innovation"
              className="h-16 sm:h-20 w-auto object-contain"
            />
          </div>
          <div className="text-center md:text-left">
            <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-bold tracking-tight text-[#0c180a] text-balance mb-2 leading-tight">
              22+ Years Behind the Technology.
            </h2>
            <p className="text-base sm:text-lg leading-relaxed text-slate-600 text-pretty">
              The Nonprofit AI Control Tower is built and supported by SJ Innovation, a New York technology company founded in 2004
            </p>
          </div>
        </div>

        {/* 4 Track Record Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Card 1: 500+ Companies */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0c180a] mb-1">
                500+
              </div>
              <div className="text-base font-semibold text-[#108a00] tracking-tight mb-2">
                Companies
              </div>
              <p className="text-sm leading-relaxed text-slate-600 text-pretty">
                Organizations served worldwide.
              </p>
            </div>
          </div>

          {/* Card 2: 1,000+ Projects */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <div className="text-3xl sm:text-4xl font-semibold tracking-tight text-[#0c180a] mb-1">
                1,000+
              </div>
              <div className="text-base font-semibold text-[#108a00] tracking-tight mb-2">
                Projects
              </div>
              <p className="text-sm leading-relaxed text-slate-600 text-pretty">
                Delivered across software, mobile, cloud, automation, and AI
              </p>
            </div>
          </div>

          {/* Card 3: ISO/IEC 27001:2022 */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <div className="flex items-center justify-between mb-4">
                <img
                  src={iso27001Logo}
                  alt="ISO/IEC 27001 Certified"
                  className="h-8 w-auto object-contain opacity-90 transition-opacity group-hover:opacity-100"
                />
              </div>
              <div className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a] mb-1">
                ISO/IEC 27001:2022
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-[#108a00] mb-2">
                Certified Security
              </div>
              <p className="text-sm leading-relaxed text-slate-600 text-pretty">
                Certified information security management
              </p>
            </div>
          </div>

          {/* Card 4: Recognition */}
          <div className="group flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-[#fbfdfa] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00]/40 hover:bg-white hover:shadow-lg">
            <div>
              <div className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#0c180a] mb-3">
                Recognition
              </div>
              {/* Visual Brand Badges for ISO, Clutch, and NYC MBE */}
              <div className="flex flex-wrap items-center gap-2.5 my-3">
                <div className="flex h-10 items-center justify-center rounded-xl bg-white border border-slate-200/90 px-2.5 py-1 shadow-2xs">
                  <img
                    src={iso27001Logo}
                    alt="ISO Certified"
                    className="h-6 w-auto object-contain"
                  />
                </div>
                <div className="flex h-10 items-center justify-center rounded-xl bg-white border border-slate-200/90 px-2.5 py-1 shadow-2xs">
                  <img
                    src={clutchLogo}
                    alt="Clutch Recognized"
                    className="h-5 w-auto object-contain"
                  />
                </div>
                <div className="flex h-10 items-center justify-center rounded-xl bg-white border border-slate-200/90 px-2.5 py-1 shadow-2xs">
                  <img
                    src={nycMbeLogo}
                    alt="Certified NYC MBE"
                    className="h-6 w-auto object-contain"
                  />
                </div>
              </div>
              <p className="text-xs text-slate-500 font-medium">
                ISO Certified · Clutch Recognized · Certified NYC MBE
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyTrackRecordSection;
