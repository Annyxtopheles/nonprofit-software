import React from "react";
import { Cloud, Server } from "lucide-react";

export const HowItComesTogetherSection: React.FC = () => {
  return (
    <section id="how-it-comes-together" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#108a00] mb-3">
            HOW IT COMES TOGETHER
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-[#0c180a] text-balance mb-3 leading-tight">
            From Scattered Information to
            <span className="block">One Clear View.</span>
          </h2>
        </div>

        {/* 3 Green Cards matching Figma Screenshot */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* ========================================================
              Card 1: Connect
          ======================================================== */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0a5200] p-7 sm:p-8 min-h-[300px] text-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0a5200]/30">
            {/* Top Text Content */}
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                Connect
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85 text-pretty max-w-[85%]">
                Connect the systems, documents, data, and workflows your organization already uses.
              </p>
            </div>

            {/* Bottom-Right Infographic: Multi-System Integration Conduits Converging into Central Target Hub */}
            <div
              aria-hidden="true"
              className="absolute right-0 bottom-0 w-[190px] h-[190px] pointer-events-none select-none opacity-55 group-hover:opacity-85 transition-opacity duration-300"
            >
              <svg viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                <defs>
                  <filter id="connect-pulse-glow" x="-200%" y="-200%" width="500%" height="500%">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                {/* 3 Source Integration Modules */}
                <g className="transition-all duration-500">
                  {/* Module 1: Documents & Drive (Upper Left) */}
                  <rect x="24" y="82" width="46" height="24" rx="6" fill="#52d039" fillOpacity="0.18" stroke="#52d039" strokeWidth="1.0" />
                  <circle cx="34" cy="94" r="2.2" fill="#ffffff" stroke="#52d039" strokeWidth="0.8" />
                  <line x1="42" y1="91" x2="62" y2="91" stroke="#52d039" strokeWidth="1.0" strokeLinecap="round" />
                  <line x1="42" y1="97" x2="54" y2="97" stroke="#52d039" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />

                  {/* Module 2: CRM & Member Database (Bottom Left) */}
                  <rect x="18" y="128" width="52" height="26" rx="6" fill="#52d039" fillOpacity="0.18" stroke="#52d039" strokeWidth="1.0" />
                  <circle cx="30" cy="141" r="2.2" fill="#ffffff" stroke="#52d039" strokeWidth="0.8" />
                  <line x1="38" y1="138" x2="62" y2="138" stroke="#52d039" strokeWidth="1.0" strokeLinecap="round" />
                  <line x1="38" y1="144" x2="52" y2="144" stroke="#52d039" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />

                  {/* Module 3: Financial & Workflow Data (Bottom Center) */}
                  <rect x="78" y="150" width="50" height="24" rx="6" fill="#52d039" fillOpacity="0.18" stroke="#52d039" strokeWidth="1.0" />
                  <circle cx="88" cy="162" r="2.2" fill="#ffffff" stroke="#52d039" strokeWidth="0.8" />
                  <line x1="96" y1="159" x2="120" y2="159" stroke="#52d039" strokeWidth="1.0" strokeLinecap="round" />
                  <line x1="96" y1="165" x2="110" y2="165" stroke="#52d039" strokeWidth="0.9" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Curved Data Conduits Converging to Central Target Node - Sleek Line Weight */}
                <g className="transition-all duration-500">
                  {/* Conduit from Module 1 */}
                  <path
                    d="M 70 94 C 98 94, 115 68, 133 55"
                    stroke="#52d039"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Data packet pulse 1: small glowing pinpoint */}
                  <g className="transition-transform duration-300 group-hover:translate-x-2">
                    <circle cx="104" cy="80" r="2.5" fill="#52d039" opacity="0.75" filter="url(#connect-pulse-glow)" />
                    <circle cx="104" cy="80" r="1.2" fill="#ffffff" />
                  </g>

                  {/* Conduit from Module 2 */}
                  <path
                    d="M 70 141 C 108 141, 122 92, 137 63"
                    stroke="#52d039"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Data packet pulse 2: small glowing pinpoint */}
                  <g className="transition-transform duration-300 group-hover:translate-y-[-4px]">
                    <circle cx="112" cy="112" r="2.5" fill="#52d039" opacity="0.75" filter="url(#connect-pulse-glow)" />
                    <circle cx="112" cy="112" r="1.2" fill="#ffffff" />
                  </g>

                  {/* Conduit from Module 3 */}
                  <path
                    d="M 103 150 C 122 150, 135 102, 142 68"
                    stroke="#52d039"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Data packet pulse 3: small glowing pinpoint */}
                  <g className="transition-transform duration-300 group-hover:translate-y-[-3px]">
                    <circle cx="130" cy="118" r="2.5" fill="#52d039" opacity="0.75" filter="url(#connect-pulse-glow)" />
                    <circle cx="130" cy="118" r="1.2" fill="#ffffff" />
                  </g>
                </g>

                {/* Central Connected Target Reticle Hub */}
                <g className="transition-transform duration-700 ease-out group-hover:scale-110 origin-[145px_50px]">
                  <circle cx="145" cy="50" r="18" stroke="#52d039" strokeWidth="1.0" strokeDasharray="3 3" />
                  <circle cx="145" cy="50" r="10" fill="#52d039" fillOpacity="0.25" stroke="#52d039" strokeWidth="1.2" />
                  <circle cx="145" cy="50" r="2.2" fill="#ffffff" />

                  {/* Crosshairs */}
                  <line x1="145" y1="28" x2="145" y2="72" stroke="#52d039" strokeWidth="1.2" strokeLinecap="round" />
                  <line x1="123" y1="50" x2="167" y2="50" stroke="#52d039" strokeWidth="1.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              Card 2: Configure
          ======================================================== */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0a5200] p-7 sm:p-8 min-h-[300px] text-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0a5200]/30">
            {/* Top Text Content */}
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                Configure
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85 text-pretty max-w-[85%]">
                Set up dashboards, permissions, workflows, and AI capabilities around how your nonprofit operates.
              </p>
            </div>

            {/* Bottom-Right Infographic: Sliders, Modules & Target Settings Node */}
            <div
              aria-hidden="true"
              className="absolute right-0 bottom-0 w-[190px] h-[190px] pointer-events-none select-none opacity-55 group-hover:opacity-85 transition-opacity duration-300"
            >
              <svg viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Horizontal Slider Tracks */}
                <g className="transition-all duration-500">
                  {/* Track 1 */}
                  <rect x="50" y="145" width="105" height="7" rx="3.5" fill="#52d039" fillOpacity="0.25" />
                  <rect x="50" y="145" width="65" height="7" rx="3.5" fill="#52d039" fillOpacity="0.6" />
                  <circle cx="115" cy="148.5" r="7.5" fill="#ffffff" stroke="#52d039" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-2" />

                  {/* Track 2 */}
                  <rect x="70" y="120" width="85" height="7" rx="3.5" fill="#52d039" fillOpacity="0.25" />
                  <rect x="70" y="120" width="45" height="7" rx="3.5" fill="#52d039" fillOpacity="0.6" />
                  <circle cx="115" cy="123.5" r="7.5" fill="#ffffff" stroke="#52d039" strokeWidth="2" className="transition-transform duration-300 group-hover:-translate-x-2" />

                  {/* Track 3 */}
                  <rect x="85" y="95" width="70" height="7" rx="3.5" fill="#52d039" fillOpacity="0.25" />
                  <rect x="85" y="95" width="50" height="7" rx="3.5" fill="#52d039" fillOpacity="0.6" />
                  <circle cx="135" cy="98.5" r="7.5" fill="#ffffff" stroke="#52d039" strokeWidth="2" className="transition-transform duration-300 group-hover:translate-x-1" />
                </g>

                {/* Target Focus Node with Crosshairs (Top Right) */}
                <g className="transition-transform duration-700 ease-out group-hover:scale-110 origin-[145px_50px]">
                  <circle cx="145" cy="50" r="20" stroke="#52d039" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="145" cy="50" r="12" fill="#52d039" fillOpacity="0.3" stroke="#52d039" strokeWidth="2" />
                  <circle cx="145" cy="50" r="5" fill="#ffffff" />

                  {/* Crosshairs */}
                  <line x1="145" y1="26" x2="145" y2="74" stroke="#52d039" strokeWidth="2" strokeLinecap="round" />
                  <line x1="121" y1="50" x2="169" y2="50" stroke="#52d039" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              Card 3: Use (Matching Figma Screenshot Exactly)
          ======================================================== */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#0a5200] p-7 sm:p-8 min-h-[300px] text-white shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#0a5200]/30">
            {/* Top Text Content */}
            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mb-3">
                Use
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85 text-pretty max-w-[85%]">
                Give leadership, staff, and board members clearer information and faster access to the work that needs attention.
              </p>
            </div>

            {/* Bottom-Right Infographic: Priority Work Dossier & Interactive Action Execution */}
            <div
              aria-hidden="true"
              className="absolute right-0 bottom-0 w-[190px] h-[190px] pointer-events-none select-none opacity-55 group-hover:opacity-85 transition-opacity duration-300"
            >
              <svg viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Action Dossier Window (Leadership / Staff / Board Work Panel) */}
                <g className="transition-all duration-500 ease-out">
                  {/* Panel Container */}
                  <rect x="28" y="74" width="104" height="98" rx="8" fill="#52d039" fillOpacity="0.18" stroke="#52d039" strokeWidth="1.6" />

                  {/* Panel Header */}
                  <rect x="28" y="74" width="104" height="18" rx="8" fill="#52d039" fillOpacity="0.32" />
                  <rect x="28" y="84" width="104" height="8" fill="#52d039" fillOpacity="0.32" />
                  <line x1="28" y1="92" x2="132" y2="92" stroke="#52d039" strokeWidth="1.2" />
                  {/* Window Dots */}
                  <circle cx="37" cy="83" r="2" fill="#ffffff" opacity="0.8" />
                  <circle cx="43" cy="83" r="2" fill="#52d039" />
                  <circle cx="49" cy="83" r="2" fill="#52d039" />
                  {/* Priority Tag in Header */}
                  <rect x="84" y="79" width="40" height="8" rx="3" fill="#ffffff" fillOpacity="0.22" />

                  {/* Work Item 1 (Completed / Resolved Task) */}
                  <circle cx="42" cy="106" r="6" fill="#52d039" stroke="#ffffff" strokeWidth="1.2" />
                  <path d="M 39.5 106 L 41.5 108 L 45 104.5" stroke="#0a5200" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <line x1="53" y1="106" x2="118" y2="106" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" opacity="0.9" />

                  {/* Work Item 2 (Active Work Needing Attention) */}
                  <circle cx="42" cy="124" r="6" fill="#ffffff" stroke="#52d039" strokeWidth="1.5" />
                  <circle cx="42" cy="124" r="2.5" fill="#52d039" />
                  <line x1="53" y1="124" x2="108" y2="124" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />

                  {/* Work Item 3 (Quick Action Button) */}
                  <rect
                    x="38"
                    y="140"
                    width="70"
                    height="20"
                    rx="5"
                    fill="#52d039"
                    stroke="#ffffff"
                    strokeWidth="1.4"
                    className="transition-all duration-300 group-hover:fill-white"
                  />
                  <line x1="48" y1="150" x2="88" y2="150" stroke="#0a5200" strokeWidth="2.4" strokeLinecap="round" />
                  <circle cx="96" cy="150" r="2.5" fill="#0a5200" />
                </g>

                {/* Interactive Pointer Cursor Clicking the Action Button */}
                <g className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:translate-y-[-1px]">
                  <path
                    d="M 102 146 L 114 158 L 108 159 L 111 166 L 107 167 L 104 160 L 99 163 Z"
                    fill="#ffffff"
                    stroke="#0a5200"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Target Focus Node with Crosshairs (Top Right, at 145, 50 - Matching Connect & Configure) */}
                <g className="transition-transform duration-700 ease-out group-hover:scale-110 origin-[145px_50px]">
                  <circle cx="145" cy="50" r="20" stroke="#52d039" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="145" cy="50" r="12" fill="#52d039" fillOpacity="0.3" stroke="#52d039" strokeWidth="2" />
                  <circle cx="145" cy="50" r="5" fill="#ffffff" />

                  {/* Crosshairs */}
                  <line x1="145" y1="26" x2="145" y2="74" stroke="#52d039" strokeWidth="2" strokeLinecap="round" />
                  <line x1="121" y1="50" x2="169" y2="50" stroke="#52d039" strokeWidth="2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>

        {/* ========================================================
            Implementation Details: Two Ways to Deploy
            Kept underneath the three steps per user instruction
        ======================================================== */}
        <div className="mt-20 md:mt-24 pt-14 border-t border-slate-200/80">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10 text-center">
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0c180a] mb-3">
                Two Ways to Deploy
              </h3>
              <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
                Choose managed cloud or full self-hosted control.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {/* Lovable Cloud */}
              <div className="relative rounded-3xl border-2 border-[#108a00] bg-white p-7 text-center shadow-xs transition-shadow duration-200 hover:shadow-xl">
                <span className="absolute top-5 right-5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#e7f5e3] text-[#108a00]">
                  Recommended
                </span>
                <Cloud className="w-8 h-8 mb-4 mx-auto text-[#108a00]" strokeWidth={1.75} />
                <h4 className="text-lg font-bold text-[#0c180a] mb-4">
                  Managed Cloud
                </h4>
                <ul className="space-y-2.5 text-left inline-block w-full">
                  {[
                    "10-minute setup, no CLI or server management needed",
                    "AI features included — zero API key setup required",
                    "One-click publish, isolated database, and automatic updates",
                    "Fully managed infrastructure, compliance monitoring, and daily backups",
                  ].map((b) => (
                    <li key={b} className="text-sm flex items-start gap-2.5 text-slate-600">
                      <span className="mt-0.5 text-[#108a00] font-bold">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Self-Hosted */}
              <div className="relative rounded-3xl border border-slate-200/90 bg-white p-7 text-center shadow-xs transition-shadow duration-200 hover:shadow-xl">
                <span className="absolute top-5 right-5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                  Full Control
                </span>
                <Server className="w-8 h-8 mb-4 mx-auto text-slate-700" strokeWidth={1.75} />
                <h4 className="text-lg font-bold text-[#0c180a] mb-4">
                  Self-Hosted
                </h4>
                <ul className="space-y-2.5 text-left inline-block w-full">
                  {[
                    "Full code ownership and complete data sovereignty",
                    "Use your own AI API keys (OpenAI, Anthropic, Google, Azure)",
                    "Deploy anywhere — AWS, GCP, Azure, or on-premise servers",
                    "Complete customization, white-labeling, and custom integrations",
                  ].map((b) => (
                    <li key={b} className="text-sm flex items-start gap-2.5 text-slate-600">
                      <span className="mt-0.5 text-[#108a00] font-bold">✓</span> {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItComesTogetherSection;

