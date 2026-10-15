import React from "react";
import blackbaudLogo from "@/assets/logos/blackbaud-re-nxt.png";
import salesforceLogo from "@/assets/logos/sfdc_nonprofits_logo_rgb_v1.webp";
import bloomerangLogo from "@/assets/logos/bloomerang-logo.webp";
import donorPerfectLogo from "@/assets/logos/donorperfect-logo.png";
import donorboxLogo from "@/assets/logos/donorbox-logo.svg";
import givebutterLogo from "@/assets/logos/givebutter-logo.png";
import quickbooksLogo from "@/assets/logos/quickbooks-logo.png";
import mailchimpLogo from "@/assets/logos/mailchimp-logo.svg";
import zoomLogo from "@/assets/logos/zoom-logo.svg";
import googleMeetLogo from "@/assets/logos/google-meet-logo.svg";

interface IntegrationItem {
  name: string;
  logo: string;
}

const integrations: IntegrationItem[] = [
  {
    name: "Blackbaud Raiser’s Edge NXT",
    logo: blackbaudLogo,
  },
  {
    name: "Salesforce Nonprofit Cloud",
    logo: salesforceLogo,
  },
  {
    name: "Bloomerang",
    logo: bloomerangLogo,
  },
  {
    name: "DonorPerfect",
    logo: donorPerfectLogo,
  },
  {
    name: "Donorbox",
    logo: donorboxLogo,
  },
  {
    name: "Givebutter",
    logo: givebutterLogo,
  },
  {
    name: "QuickBooks",
    logo: quickbooksLogo,
  },
  {
    name: "Mailchimp",
    logo: mailchimpLogo,
  },
  {
    name: "Zoom",
    logo: zoomLogo,
  },
  {
    name: "Google Meet",
    logo: googleMeetLogo,
  },
];

export const IntegrationsSection: React.FC = () => {
  return (
    <section id="integrations" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#108a00] mb-3">
            KEEP THE TOOLS YOUR TEAM ALREADY KNOWS
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0c180a] text-balance mb-3 leading-tight">
            Connect What You Already Use.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 text-pretty max-w-2xl mx-auto">
            The Nonprofit AI Control Tower is designed to bring information together without forcing your team to start over.
          </p>
        </div>

        {/* Integration Logo Grid */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 lg:gap-5 max-w-5xl mx-auto">
          {integrations.map((item) => (
            <div
              key={item.name}
              className="group flex flex-col items-center justify-center p-4 sm:p-5 h-24 sm:h-28 rounded-2xl border border-slate-200/90 bg-[#fbfdfa] transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00]/40 hover:bg-white hover:shadow-md w-[calc(50%-0.6rem)] sm:w-[calc(33.333%-0.8rem)] md:w-[calc(25%-0.85rem)] lg:w-[calc(16.666%-0.9rem)] min-w-[140px]"
            >
              <img
                src={item.logo}
                alt={`${item.name} logo`}
                title={item.name}
                loading="lazy"
                className="max-h-7 sm:max-h-8 w-auto max-w-[115px] sm:max-w-[125px] object-contain opacity-90 transition-opacity duration-200 group-hover:opacity-100"
              />
            </div>
          ))}

          {/* + More Card */}
          <div
            className="group flex flex-col items-center justify-center p-4 sm:p-5 h-24 sm:h-28 rounded-2xl border border-dashed border-slate-300 bg-[#fbfdfa] transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:bg-white hover:shadow-md w-[calc(50%-0.6rem)] sm:w-[calc(33.333%-0.8rem)] md:w-[calc(25%-0.85rem)] lg:w-[calc(16.666%-0.9rem)] min-w-[140px]"
          >
            <div className="flex items-center justify-center text-center">
              <span className="text-base sm:text-lg font-semibold text-[#0c180a] tracking-tight group-hover:text-[#108a00] transition-colors">
                + More
              </span>
            </div>
          </div>
        </div>

        {/* Supporting Copy */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto text-center">
          <p className="text-base sm:text-lg leading-relaxed text-slate-700 font-normal mb-1.5">
            Your fundraising, finance, communications, meetings, and operational tools can remain part of the workflow.
          </p>
          <p className="text-base sm:text-lg font-semibold text-[#0c180a]">
            The Control Tower gives your team a clearer layer across them.
          </p>
        </div>
      </div>
    </section>
  );
};
