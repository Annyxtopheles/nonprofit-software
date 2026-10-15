import React from "react";

export const HowItWorksCards: React.FC = () => {
  return (
    <section
      className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-100"
      style={{
        background: "linear-gradient(180deg, #F5F9F4 0%, #EFF6EE 50%, #E9F3E7 100%)",
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-8 md:mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-[#0c180a] mb-3">
            How It Actually Works
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 text-pretty">
            Five ways the Control Tower simplifies your operations without replacing your tools.
          </p>
        </div>

        {/* Responsive grid for the 5 cards - static, apparent layout (no sliding) */}
        <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* ========================================================
              Card 1: Your data already lives where it lives.
          ======================================================== */}
          <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#108a00]/30 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/20">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
                Your Data Already Lives Where It&nbsp;Lives.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Salesforce. Blackbaud. Bloomerang. QuickBooks. Stripe. Control
                Tower doesn&apos;t replace any of it — and doesn&apos;t ask you to move
                anything.
              </p>
            </div>

            {/* Illustration: Database Cylinders, Storage Layers & Cloud Node */}
            <div
              aria-hidden="true"
              className="relative w-[165px] sm:w-[185px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg
                viewBox="0 0 190 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Soft Mint Organic Background Aura Blob */}
                <path
                  d="M 38 78 C 30 38, 88 18, 134 26 C 176 34, 188 78, 172 118 C 154 154, 94 158, 54 138 C 34 122, 44 98, 38 78 Z"
                  fill="#e7f5e3"
                />

                {/* Database Tier Stack */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 origin-center">
                  {/* Database Cylinder 1 (Bottom) */}
                  <g className="transition-transform duration-500 ease-out group-hover:translate-y-1">
                    <path
                      d="M 64 102 C 64 96 82 92 104 92 C 126 92 144 96 144 102 V 116 C 144 122 126 126 104 126 C 82 126 64 122 64 116 Z"
                      fill="#108a00"
                      stroke="#1c3422"
                      strokeWidth="2.4"
                    />
                    <ellipse cx="104" cy="102" rx="40" ry="10" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.4" />
                    <circle cx="82" cy="113" r="2.5" fill="#ffffff" />
                    <circle cx="92" cy="113" r="2.5" fill="#ffffff" />
                  </g>

                  {/* Database Cylinder 2 (Middle) */}
                  <g className="transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
                    <path
                      d="M 64 72 C 64 66 82 62 104 62 C 126 62 144 66 144 72 V 86 C 144 92 126 96 104 96 C 82 96 64 92 64 86 Z"
                      fill="#ffffff"
                      stroke="#1c3422"
                      strokeWidth="2.4"
                    />
                    <ellipse cx="104" cy="72" rx="40" ry="10" fill="#e7f5e3" stroke="#1c3422" strokeWidth="2.4" />
                    <circle cx="82" cy="83" r="2.5" fill="#108a00" />
                    <circle cx="92" cy="83" r="2.5" fill="#108a00" />
                  </g>

                  {/* Database Cylinder 3 (Top) */}
                  <g className="transition-transform duration-500 ease-out group-hover:-translate-y-2">
                    <path
                      d="M 64 42 C 64 36 82 32 104 32 C 126 32 144 36 144 42 V 56 C 144 62 126 66 104 66 C 82 66 64 62 64 56 Z"
                      fill="#ffffff"
                      stroke="#1c3422"
                      strokeWidth="2.4"
                    />
                    <ellipse cx="104" cy="42" rx="40" ry="10" fill="#ffffff" stroke="#1c3422" strokeWidth="2.4" />
                    <circle cx="82" cy="53" r="2.5" fill="#108a00" />
                    <circle cx="92" cy="53" r="2.5" fill="#108a00" />
                  </g>
                </g>

                {/* Floating Safe Lock Badge */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-1.5 origin-center">
                  <circle cx="146" cy="44" r="14" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" />
                  <rect x="140" y="42" width="12" height="10" rx="2" fill="#1c3422" />
                  <path d="M 143 42 V 38 C 143 36 149 36 149 38 V 42" stroke="#1c3422" strokeWidth="2" fill="none" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="42" y1="36" x2="35" y2="28" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="52" y1="30" x2="52" y2="20" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="166" y1="126" x2="176" y2="128" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="164" y1="135" x2="173" y2="144" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              Card 2: It connects to what you already use.
          ======================================================== */}
          <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#108a00]/30 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/20">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
                It Connects to What You Already&nbsp;Use.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                No migration. No re-entering donor records. No new system for your
                team to learn from&nbsp;scratch.
              </p>
            </div>

            {/* Illustration: Seamless Plug Connectors & Bi-directional Sync Hub */}
            <div
              aria-hidden="true"
              className="relative w-[165px] sm:w-[185px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg
                viewBox="0 0 190 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Soft Mint Organic Background Aura Blob */}
                <path
                  d="M 36 82 C 26 42, 82 22, 130 28 C 172 34, 186 76, 174 116 C 158 152, 102 158, 56 142 C 38 126, 42 102, 36 82 Z"
                  fill="#e7f5e3"
                />

                {/* Left Connector Node */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1.5 origin-center">
                  <rect x="46" y="62" width="36" height="36" rx="8" fill="#ffffff" stroke="#1c3422" strokeWidth="2.4" />
                  <line x1="32" y1="80" x2="46" y2="80" stroke="#1c3422" strokeWidth="2.4" strokeLinecap="round" />
                  {/* Plug Prongs */}
                  <rect x="82" y="68" width="10" height="6" rx="1.5" fill="#108a00" stroke="#1c3422" strokeWidth="1.8" />
                  <rect x="82" y="86" width="10" height="6" rx="1.5" fill="#108a00" stroke="#1c3422" strokeWidth="1.8" />
                </g>

                {/* Right Connector Jack */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-1.5 origin-center">
                  <rect x="108" y="60" width="40" height="40" rx="8" fill="#108a00" stroke="#1c3422" strokeWidth="2.4" />
                  <line x1="148" y1="80" x2="162" y2="80" stroke="#1c3422" strokeWidth="2.4" strokeLinecap="round" />
                  {/* Jack Slots */}
                  <rect x="104" y="67" width="5" height="8" rx="1.5" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.6" />
                  <rect x="104" y="85" width="5" height="8" rx="1.5" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.6" />
                </g>

                {/* Top Floating App Card (CRM) */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-2 origin-center">
                  <rect x="82" y="24" width="34" height="26" rx="6" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" />
                  <line x1="88" y1="32" x2="110" y2="32" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="88" y1="39" x2="104" y2="39" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="99" y1="50" x2="99" y2="58" stroke="#108a00" strokeWidth="2" strokeDasharray="2 2" />
                </g>

                {/* Bottom Floating App Card (Finance) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-y-2 origin-center">
                  <rect x="78" y="112" width="38" height="26" rx="6" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
                  <circle cx="88" cy="125" r="4" fill="#108a00" />
                  <line x1="96" y1="125" x2="110" y2="125" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="97" y1="102" x2="97" y2="110" stroke="#108a00" strokeWidth="2" strokeDasharray="2 2" />
                </g>

                {/* Spark Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="90" y1="60" x2="96" y2="52" stroke="#108a00" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="102" y1="60" x2="98" y2="52" stroke="#108a00" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="96" y1="100" x2="96" y2="108" stroke="#108a00" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              Card 3: AI agents watch continuously, not once a quarter.
          ======================================================== */}
          <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#108a00]/30 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/20">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
                AI Agents Watch Continuously, Not Once a&nbsp;Quarter.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Duplicate donor records, unmatched transactions, a grant deadline
                in 10 days — agents catch it the day it&nbsp;happens.
              </p>
            </div>

            {/* Illustration: 24/7 AI Scanner Lens, Continuous Radar & Alert Tag */}
            <div
              aria-hidden="true"
              className="relative w-[165px] sm:w-[185px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg
                viewBox="0 0 190 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Soft Mint Organic Background Aura Blob */}
                <path
                  d="M 40 78 C 28 36, 86 16, 132 24 C 174 32, 188 74, 174 116 C 158 152, 98 158, 56 138 C 36 122, 46 98, 40 78 Z"
                  fill="#e7f5e3"
                />

                {/* Center Scanning Eye / Lens */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 origin-center">
                  {/* Outer Outer Radar Halo */}
                  <circle cx="95" cy="80" r="42" stroke="#108a00" strokeWidth="1.8" strokeDasharray="4 4" fill="none" opacity="0.6" />
                  
                  {/* Outer Eye Shell */}
                  <path
                    d="M 52 80 C 66 58, 124 58, 138 80 C 124 102, 66 102, 52 80 Z"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                  />

                  {/* Iris */}
                  <circle cx="95" cy="80" r="18" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" />

                  {/* Pupil with Natural Optical Glints (No harsh green cut line) */}
                  <circle cx="95" cy="80" r="9" fill="#108a00" />
                  <circle cx="91" cy="76" r="3" fill="#ffffff" />
                  <circle cx="97.5" cy="82.5" r="1.5" fill="#ffffff" opacity="0.85" />

                  {/* Subtle Smart Scanning Arc */}
                  <path
                    d="M 83 68 A 16 16 0 0 1 107 68"
                    stroke="#108a00"
                    strokeWidth="2"
                    strokeLinecap="round"
                    fill="none"
                    className="transition-all duration-700 group-hover:stroke-white"
                  />
                </g>

                {/* Floating Notification Badge: "10d Grant" Alert */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-1.5 origin-center">
                  <rect x="116" y="32" width="48" height="26" rx="7" fill="#108a00" stroke="#1c3422" strokeWidth="2.2" />
                  <path d="M 125 45 L 129 49 L 137 41" stroke="#ffffff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <rect x="142" y="42" width="14" height="6" rx="2" fill="#ffffff" />
                </g>

                {/* Floating Calendar Icon (Bottom Left, Crisp Top Corners) */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-1.5 group-hover:translate-y-1.5 origin-center">
                  <rect x="36" y="96" width="32" height="30" rx="6" fill="#ffffff" />
                  <rect x="36" y="96" width="32" height="10" rx="6" fill="#c8f0be" />
                  <rect x="36" y="101" width="32" height="5" fill="#c8f0be" />
                  <line x1="36" y1="106" x2="68" y2="106" stroke="#1c3422" strokeWidth="1.8" />
                  <circle cx="45" cy="115" r="2" fill="#1c3422" />
                  <circle cx="53" cy="115" r="2" fill="#1c3422" />
                  <circle cx="60" cy="115" r="2" fill="#108a00" />
                  {/* Outer crisp stroke drawn on top */}
                  <rect x="36" y="96" width="32" height="30" rx="6" fill="none" stroke="#1c3422" strokeWidth="2.2" />
                </g>

                {/* Action Rays on Left Only (Right line removed) */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="48" y1="46" x2="40" y2="40" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="56" y1="36" x2="52" y2="28" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              Card 4: Every role sees what matters to them.
          ======================================================== */}
          <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#108a00]/30 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/20">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
                Every Role Sees What Matters to&nbsp;Them.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                ED sees board readiness. Finance sees reconciliation. Development
                sees the donor pipeline. No digging through five&nbsp;systems.
              </p>
            </div>

            {/* Illustration: Segmented Role Views & Command Center Tabs */}
            <div
              aria-hidden="true"
              className="relative w-[165px] sm:w-[185px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg
                viewBox="0 0 190 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Soft Mint Organic Background Aura Blob */}
                <path
                  d="M 36 80 C 26 40, 84 20, 130 26 C 172 32, 186 74, 172 114 C 158 152, 100 158, 54 138 C 36 122, 44 98, 36 80 Z"
                  fill="#e7f5e3"
                />

                {/* Back Window - Finance View (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-1.5 origin-center">
                  <rect x="100" y="28" width="56" height="48" rx="8" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.4" />
                  <rect x="108" y="36" width="18" height="6" rx="2" fill="#1c3422" />
                  <line x1="108" y1="52" x2="148" y2="52" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="108" y1="60" x2="136" y2="60" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Back Window - Dev Pipeline (Bottom Left) */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:translate-y-1 origin-center">
                  <rect x="42" y="84" width="58" height="48" rx="8" fill="#108a00" stroke="#1c3422" strokeWidth="2.4" />
                  <rect x="50" y="92" width="20" height="6" rx="2" fill="#ffffff" />
                  <rect x="50" y="104" width="12" height="18" rx="2" fill="#ffffff" />
                  <rect x="66" y="108" width="12" height="14" rx="2" fill="#ffffff" />
                  <rect x="82" y="100" width="12" height="22" rx="2" fill="#ffffff" />
                </g>

                {/* Center Foreground Window - ED Command Center (Perfect top corners) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 origin-center">
                  <rect x="68" y="48" width="74" height="62" rx="10" fill="#ffffff" />
                  {/* Top Window Bar with 3 Dots */}
                  <rect x="68" y="48" width="74" height="15" rx="10" fill="#e7f5e3" />
                  <rect x="68" y="55" width="74" height="8" fill="#e7f5e3" />
                  <line x1="68" y1="63" x2="142" y2="63" stroke="#1c3422" strokeWidth="2" />
                  <circle cx="78" cy="56" r="2" fill="#1c3422" />
                  <circle cx="85" cy="56" r="2" fill="#1c3422" />
                  <circle cx="92" cy="56" r="2" fill="#1c3422" />

                  {/* 3 Role Tiles inside */}
                  <rect x="76" y="70" width="16" height="16" rx="3" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.6" />
                  <rect x="97" y="70" width="16" height="16" rx="3" fill="#ffffff" stroke="#1c3422" strokeWidth="1.6" />
                  <rect x="118" y="70" width="16" height="16" rx="3" fill="#108a00" stroke="#1c3422" strokeWidth="1.6" />

                  <line x1="76" y1="96" x2="134" y2="96" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="76" y1="103" x2="114" y2="103" stroke="#108a00" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Crisp outer window stroke drawn on top */}
                  <rect x="68" y="48" width="74" height="62" rx="10" fill="none" stroke="#1c3422" strokeWidth="2.4" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="46" y1="56" x2="38" y2="50" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="166" y1="84" x2="176" y2="84" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              Card 5: One click does the busywork.
          ======================================================== */}
          <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#108a00]/30 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/20 md:col-span-2 md:max-w-2xl md:mx-auto w-full">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
                One Click Does the&nbsp;Busywork.
              </h3>
              <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                The board report. The grant draft. The donor thank-you letter. A
                human reviews it before it goes&nbsp;out.
              </p>
            </div>

            {/* Illustration: Magic One-Click Button, Outgoing Document & Sparkles */}
            <div
              aria-hidden="true"
              className="relative w-[165px] sm:w-[185px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg
                viewBox="0 0 190 160"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full overflow-visible"
              >
                {/* Soft Mint Organic Background Aura Blob */}
                <path
                  d="M 38 78 C 30 38, 88 18, 134 26 C 176 34, 188 78, 172 118 C 154 154, 94 158, 54 138 C 34 122, 44 98, 38 78 Z"
                  fill="#e7f5e3"
                />

                {/* Back Document Generated (Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 origin-center">
                  <rect
                    x="104"
                    y="32"
                    width="54"
                    height="70"
                    rx="8"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    transform="rotate(6 131 67)"
                  />
                  {/* Verified Checkmark Ribbon Badge */}
                  <g transform="rotate(6 131 67)">
                    <circle cx="118" cy="46" r="6" fill="#108a00" />
                    <path d="M 115 46 L 117.5 48.5 L 122 44" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <line x1="114" y1="60" x2="148" y2="60" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="114" y1="70" x2="142" y2="70" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                    <line x1="114" y1="80" x2="134" y2="80" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  </g>
                </g>

                {/* Interactive Click Button (Left / Center) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 origin-[80px_90px]">
                  {/* Button Shadow Base */}
                  <rect x="48" y="78" width="68" height="42" rx="10" fill="#1c3422" />
                  {/* Raised Button Face */}
                  <rect
                    x="48"
                    y="74"
                    width="68"
                    height="40"
                    rx="10"
                    fill="#108a00"
                    stroke="#1c3422"
                    strokeWidth="2.4"
                    className="transition-transform duration-200 group-hover:translate-y-1"
                  />
                  {/* Button Label: "1-CLICK" */}
                  <text
                    x="82"
                    y="99"
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="13"
                    fontWeight="800"
                    fontFamily="sans-serif"
                    letterSpacing="1"
                    className="transition-transform duration-200 group-hover:translate-y-1"
                  >
                    1-CLICK
                  </text>
                </g>

                {/* Click Cursor Pointer */}
                <g className="transition-transform duration-300 ease-out group-hover:translate-x-1 group-hover:-translate-y-1">
                  <path
                    d="M 98 106 L 112 118 L 105 120 L 110 130 L 105 132 L 100 122 L 94 126 Z"
                    fill="#ffffff"
                    stroke="#1c3422"
                    strokeWidth="2.2"
                    strokeLinejoin="round"
                  />
                </g>

                {/* Magic Sparkles around button */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-115 origin-center">
                  {/* Sparkle 1 (Top Left) */}
                  <path d="M 44 46 L 46 40 L 48 46 L 54 48 L 48 50 L 46 56 L 44 50 L 38 48 Z" fill="#108a00" />
                  {/* Sparkle 2 (Top Right) */}
                  <path d="M 88 34 L 89.5 29 L 91 34 L 96 35.5 L 91 37 L 89.5 42 L 88 37 L 83 35.5 Z" fill="#108a00" />
                  {/* Sparkle 3 (Bottom Left) */}
                  <circle cx="36" cy="74" r="3" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.5" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksCards;

