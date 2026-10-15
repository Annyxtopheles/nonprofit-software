import React from "react";
import { Cloud, Server } from "lucide-react";

export const HowItComesTogetherSection: React.FC = () => {
  return (
    <section id="how-it-comes-together" className="py-16 md:py-24 px-6 lg:px-12 bg-[#F9FBF8] border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#14a800] mb-3">
            HOW IT COMES TOGETHER
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-[#0c180a] text-balance mb-4 leading-tight">
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
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                Connect
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85 text-pretty max-w-[85%]">
                Connect the systems, documents, data, and workflows your organization already uses.
              </p>
            </div>

            {/* Bottom-Right Infographic: Interconnected System Nodes & Beams */}
            <div
              aria-hidden="true"
              className="absolute right-0 bottom-0 w-[190px] h-[190px] pointer-events-none select-none opacity-40 group-hover:opacity-65 transition-opacity duration-300"
            >
              <svg viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Connecting Curved Beams */}
                <path
                  d="M 30 160 C 60 140, 90 120, 140 100"
                  stroke="#52d039"
                  strokeWidth="2.5"
                  strokeDasharray="4 4"
                  className="transition-all duration-700 group-hover:stroke-white"
                />
                <path
                  d="M 50 180 C 80 160, 110 130, 140 100"
                  stroke="#52d039"
                  strokeWidth="2"
                />
                <path
                  d="M 140 100 C 155 75, 160 50, 165 30"
                  stroke="#52d039"
                  strokeWidth="2.5"
                  strokeDasharray="3 3"
                />

                {/* Left Source Node 1 */}
                <g className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                  <circle cx="30" cy="160" r="14" fill="#14a800" stroke="#52d039" strokeWidth="2" />
                  <circle cx="30" cy="160" r="5" fill="#ffffff" />
                </g>

                {/* Left Source Node 2 */}
                <g className="transition-transform duration-500 group-hover:translate-x-1">
                  <circle cx="65" cy="170" r="10" fill="#14a800" stroke="#52d039" strokeWidth="1.8" />
                  <circle cx="65" cy="170" r="3.5" fill="#ffffff" />
                </g>

                {/* Central Target / Hub Node with Crosshairs */}
                <g className="transition-transform duration-700 ease-out group-hover:scale-110 origin-[140px_100px]">
                  {/* Concentric Halo */}
                  <circle cx="140" cy="100" r="22" stroke="#52d039" strokeWidth="1.5" strokeDasharray="3 3" />
                  <circle cx="140" cy="100" r="14" fill="#52d039" fillOpacity="0.3" stroke="#52d039" strokeWidth="2.2" />
                  <circle cx="140" cy="100" r="6" fill="#ffffff" />

                  {/* Crosshairs */}
                  <line x1="140" y1="72" x2="140" y2="128" stroke="#52d039" strokeWidth="2" strokeLinecap="round" />
                  <line x1="112" y1="100" x2="168" y2="100" stroke="#52d039" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Floating Top Node */}
                <g className="transition-transform duration-500 group-hover:-translate-y-1.5 origin-center">
                  <circle cx="165" cy="30" r="11" fill="#14a800" stroke="#52d039" strokeWidth="1.8" />
                  <circle cx="165" cy="30" r="4" fill="#ffffff" />
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
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                Configure
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85 text-pretty max-w-[85%]">
                Set up dashboards, permissions, workflows, and AI capabilities around how your nonprofit operates.
              </p>
            </div>

            {/* Bottom-Right Infographic: Sliders, Modules & Target Settings Node */}
            <div
              aria-hidden="true"
              className="absolute right-0 bottom-0 w-[190px] h-[190px] pointer-events-none select-none opacity-40 group-hover:opacity-65 transition-opacity duration-300"
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
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-3">
                Use
              </h3>
              <p className="text-sm sm:text-base leading-relaxed text-white/85 text-pretty max-w-[85%]">
                Give leadership, staff, and board members clearer information and faster access to the work that needs attention.
              </p>
            </div>

            {/* Bottom-Right Infographic: Ascending Bar Chart, Trendline & Target Crosshair Node */}
            <div
              aria-hidden="true"
              className="absolute right-0 bottom-0 w-[190px] h-[190px] pointer-events-none select-none opacity-40 group-hover:opacity-65 transition-opacity duration-300"
            >
              <svg viewBox="0 0 190 190" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* 4 Ascending Vertical Bar Pillars */}
                <g className="transition-all duration-500 ease-out">
                  {/* Bar 1 (Shortest) */}
                  <rect
                    x="56"
                    y="130"
                    width="17"
                    height="60"
                    rx="8.5"
                    fill="#14a800"
                    fillOpacity="0.45"
                    className="transition-all duration-500 group-hover:translate-y-[-2px]"
                  />

                  {/* Bar 2 */}
                  <rect
                    x="81"
                    y="105"
                    width="17"
                    height="85"
                    rx="8.5"
                    fill="#14a800"
                    fillOpacity="0.55"
                    className="transition-all duration-500 group-hover:translate-y-[-4px]"
                  />

                  {/* Bar 3 */}
                  <rect
                    x="106"
                    y="76"
                    width="17"
                    height="114"
                    rx="8.5"
                    fill="#14a800"
                    fillOpacity="0.65"
                    className="transition-all duration-500 group-hover:translate-y-[-6px]"
                  />

                  {/* Bar 4 (Tallest) */}
                  <rect
                    x="131"
                    y="46"
                    width="17"
                    height="144"
                    rx="8.5"
                    fill="#25b810"
                    fillOpacity="0.75"
                    className="transition-all duration-500 group-hover:translate-y-[-8px]"
                  />
                </g>

                {/* Angled Trendline Shooting Up to the Target Node */}
                <path
                  d="M 40 170 L 140 68"
                  stroke="#52d039"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="transition-all duration-500 group-hover:stroke-white"
                />

                {/* Target Crosshair Node (Circled in Figma Screenshot) */}
                <g className="transition-transform duration-700 ease-out group-hover:scale-115 origin-[140px_68px]">
                  {/* Glowing Node Body */}
                  <circle cx="140" cy="68" r="14" fill="#52d039" fillOpacity="0.3" stroke="#52d039" strokeWidth="2.2" />
                  <circle cx="140" cy="68" r="5" fill="#ffffff" />

                  {/* Crosshair Lines Radiating Out */}
                  <line x1="140" y1="46" x2="140" y2="90" stroke="#52d039" strokeWidth="2" strokeLinecap="round" />
                  <line x1="118" y1="68" x2="162" y2="68" stroke="#52d039" strokeWidth="2" strokeLinecap="round" />
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
              <div className="relative rounded-3xl border-2 border-[#14a800] bg-white p-7 text-center shadow-xs transition-shadow duration-200 hover:shadow-xl">
                <span className="absolute top-5 right-5 text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#e7f5e3] text-[#14a800]">
                  Recommended
                </span>
                <Cloud className="w-8 h-8 mb-4 mx-auto text-[#14a800]" strokeWidth={1.75} />
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
                      <span className="mt-0.5 text-[#14a800] font-bold">✓</span> {b}
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
                      <span className="mt-0.5 text-[#14a800] font-bold">✓</span> {b}
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
