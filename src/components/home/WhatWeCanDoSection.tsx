import React from "react";

export const WhatWeCanDoSection: React.FC = () => {
  return (
    <section id="what-we-can-do" className="py-16 md:py-24 px-6 lg:px-12 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-extrabold tracking-tight text-[#0c180a] mb-3">
            WHAT WE CAN DO
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 text-pretty">
            Less Chasing. More Control Over the Work That Matters.
          </p>
        </div>

        {/* Bento Grid: 4 Alternating Asymmetric Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-7">
          {/* ========================================================
              ROW 1 - CARD 1 (Wide / 7 cols): Leadership & Program Dashboard
          ======================================================== */}
          <div className="lg:col-span-7 group relative flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden rounded-3xl border border-[#14a800]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a] leading-tight">
                Leadership &amp;
                <br />
                Program Dashboard
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                See donors, grants, programs, and pending work at a glance.
              </p>
            </div>

            {/* Infographic: Dashboard Window + Charts + Person Pointing */}
            <div
              aria-hidden="true"
              className="relative w-[170px] sm:w-[210px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 210 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="105" cy="150" rx="80" ry="7" fill="#e7f5e3" />

                {/* Dashboard Window Frame */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="24" y="24" width="130" height="110" rx="10" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />

                  {/* Top Header Bar with 3 Dots */}
                  <rect x="24" y="24" width="130" height="18" rx="10" fill="#f4fbf1" />
                  <rect x="24" y="34" width="130" height="8" fill="#f4fbf1" />
                  <line x1="24" y1="42" x2="154" y2="42" stroke="#1c3422" strokeWidth="1.6" />
                  <circle cx="34" cy="33" r="2" fill="#1c3422" />
                  <circle cx="40" cy="33" r="2" fill="#1c3422" />
                  <circle cx="46" cy="33" r="2" fill="#1c3422" />

                  {/* Shaded Area Under Line Chart */}
                  <polygon points="38,82 58,62 82,72 108,48 132,56 132,82 38,82" fill="#e7f5e3" fillOpacity="0.8" />
                  {/* Line Chart */}
                  <path d="M 38 82 L 58 62 L 82 72 L 108 48 L 132 56" stroke="#4a8b5e" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="108" cy="48" r="3.5" fill="#14a800" stroke="#1c3422" strokeWidth="1.4" />

                  {/* Mini 3-Bar Chart */}
                  <line x1="38" y1="120" x2="78" y2="120" stroke="#1c3422" strokeWidth="1.4" strokeLinecap="round" />
                  <rect x="42" y="96" width="7" height="24" rx="2" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.4" />
                  <rect x="53" y="88" width="7" height="32" rx="2" fill="#14a800" stroke="#1c3422" strokeWidth="1.4" />
                  <rect x="64" y="92" width="7" height="28" rx="2" fill="#52b86a" stroke="#1c3422" strokeWidth="1.4" />

                  {/* Donut Chart */}
                  <circle cx="105" cy="104" r="14" fill="#e7f5e3" stroke="#1c3422" strokeWidth="1.8" />
                  <path d="M 105 104 L 105 90 A 14 14 0 0 1 119 104 Z" fill="#4a8b5e" stroke="#1c3422" strokeWidth="1.4" />
                  <circle cx="105" cy="104" r="6" fill="#ffffff" stroke="#1c3422" strokeWidth="1.4" />

                  {/* Horizontal Metric Lines */}
                  <line x1="124" y1="94" x2="144" y2="94" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="124" y1="102" x2="138" y2="102" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                  <line x1="124" y1="110" x2="142" y2="110" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Person Pointing at the Dashboard (Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 origin-bottom">
                  {/* Body / Torso */}
                  <path d="M 142 152 C 142 122, 154 112, 172 112 C 190 112, 202 122, 202 152 Z" fill="#4a8b5e" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
                  <path d="M 166 112 C 168 116, 176 116, 178 112" stroke="#1c3422" strokeWidth="1.8" fill="none" />

                  {/* Pointing Arm & Hand */}
                  <path d="M 152 122 L 130 94 L 126 97 L 146 128 Z" fill="#fde6d2" stroke="#1c3422" strokeWidth="2" strokeLinejoin="round" />
                  {/* Extended Pointing Finger */}
                  <path d="M 127 95 L 118 84 C 117 83, 119 81, 121 82 L 129 91 Z" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.8" strokeLinejoin="round" />

                  {/* Head & Neck */}
                  <rect x="166" y="94" width="10" height="10" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.6" />
                  <ellipse cx="171" cy="85" rx="13" ry="14" fill="#fde6d2" stroke="#1c3422" strokeWidth="2.2" />

                  {/* Dark Stylized Hair */}
                  <path d="M 160 84 C 158 70, 170 66, 180 68 C 188 70, 188 80, 184 90 C 182 82, 174 80, 170 82 C 164 85, 160 87, 160 84 Z" fill="#1c3422" stroke="#1c3422" strokeWidth="1.2" />
                  <circle cx="178" cy="86" r="3.2" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.4" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="16" y1="46" x2="8" y2="40" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="20" y1="58" x2="10" y2="58" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="16" y1="70" x2="8" y2="76" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="188" y1="36" x2="198" y2="30" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="190" y1="48" x2="200" y2="48" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              ROW 1 - CARD 2 (Narrow / 5 cols): Donor Management & Retention
          ======================================================== */}
          <div className="lg:col-span-5 group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#14a800]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Donor Management &amp; Retention
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Track giving, engagement, and relationships that need attention.
              </p>
            </div>

            {/* Infographic: Directory List + Donor Avatars + Active Status */}
            <div
              aria-hidden="true"
              className="relative w-[150px] sm:w-[170px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 170 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="85" cy="148" rx="65" ry="6" fill="#e7f5e3" />

                {/* Directory Sheet */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="24" y="32" width="102" height="104" rx="10" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />

                  {/* List Row 1 */}
                  <circle cx="40" cy="52" r="8" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.6" />
                  <circle cx="40" cy="49" r="3.5" fill="#fde6d2" />
                  <path d="M 35 56 C 35 53, 45 53, 45 56" fill="#1c3422" />
                  <line x1="54" y1="50" x2="98" y2="50" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="54" y1="56" x2="82" y2="56" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />

                  {/* List Row 2 */}
                  <circle cx="40" cy="76" r="8" fill="#e7f5e3" stroke="#1c3422" strokeWidth="1.6" />
                  <circle cx="40" cy="73" r="3.5" fill="#fde6d2" />
                  <path d="M 35 80 C 35 77, 45 77, 45 80" fill="#1c3422" />
                  <line x1="54" y1="74" x2="104" y2="74" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="54" y1="80" x2="86" y2="80" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />

                  {/* List Row 3 */}
                  <circle cx="40" cy="100" r="8" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.6" />
                  <circle cx="40" cy="97" r="3.5" fill="#fde6d2" />
                  <path d="M 35 104 C 35 101, 45 101, 45 104" fill="#1c3422" />
                  <line x1="54" y1="98" x2="94" y2="98" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="54" y1="104" x2="76" y2="104" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />

                  {/* Bottom subtle line */}
                  <line x1="54" y1="120" x2="90" y2="120" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />
                </g>

                {/* Featured Top-Right Relationship Avatar */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-110 origin-[124px_48px]">
                  <circle cx="124" cy="48" r="22" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" />
                  <circle cx="124" cy="48" r="17" fill="#ffffff" />
                  <circle cx="124" cy="44" r="8.5" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.4" />
                  <path d="M 116 43 C 116 36, 132 36, 132 43 C 132 46, 116 46, 116 43 Z" fill="#1c3422" />
                  <path d="M 112 62 C 112 55, 136 55, 136 62 Z" fill="#4a8b5e" stroke="#1c3422" strokeWidth="1.4" />
                </g>

                {/* Active Engagement Dot Badge */}
                <circle cx="144" cy="82" r="11" fill="#367a4e" stroke="#1c3422" strokeWidth="2" />
                <circle cx="144" cy="82" r="4.5" fill="#c8f0be" stroke="#ffffff" strokeWidth="1.5" />

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="14" y1="52" x2="6" y2="46" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="16" y1="64" x2="6" y2="64" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="14" y1="76" x2="6" y2="82" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="150" y1="36" x2="158" y2="30" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="152" y1="48" x2="162" y2="48" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              ROW 2 - CARD 3 (Narrow / 5 cols): Fundraising & Donations
          ======================================================== */}
          <div className="lg:col-span-5 group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#14a800]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Fundraising &amp; Donations
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Follow campaigns and donor progress from first gift onward.
              </p>
            </div>

            {/* Infographic: Donation Box + Hand Dropping Gold Coin */}
            <div
              aria-hidden="true"
              className="relative w-[150px] sm:w-[170px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 170 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="85" cy="148" rx="60" ry="7" fill="#e7f5e3" />

                {/* 3D Green Donation Box */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px] origin-center">
                  {/* Top Lid */}
                  <polygon points="40,86 64,66 142,66 118,86" fill="#5ea872" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
                  {/* Front Face */}
                  <rect x="40" y="86" width="78" height="52" rx="4" fill="#4a8b5e" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
                  {/* Right Face */}
                  <polygon points="118,86 142,66 142,118 118,138" fill="#326c46" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
                  {/* Drop Slot on Top Lid */}
                  <line x1="72" y1="76" x2="110" y2="76" stroke="#1c3422" strokeWidth="3.2" strokeLinecap="round" />
                </g>

                {/* Hand and Coin Falling into the Box */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-y-1 origin-center">
                  {/* Sleeve */}
                  <polygon points="126,16 144,30 132,46 114,32" fill="#4a8b5e" stroke="#1c3422" strokeWidth="2" strokeLinejoin="round" />
                  {/* Hand */}
                  <path d="M 116 34 L 98 48 C 93 52, 97 58, 105 54 L 118 42 Z" fill="#fde6d2" stroke="#1c3422" strokeWidth="2" strokeLinejoin="round" />
                  <path d="M 103 48 C 103 44, 98 42, 95 46" stroke="#1c3422" strokeWidth="2" fill="none" strokeLinecap="round" />

                  {/* Gold Coin with $ symbol */}
                  <circle cx="86" cy="62" r="14" fill="#ffd166" stroke="#1c3422" strokeWidth="2.2" />
                  <circle cx="86" cy="62" r="10.5" fill="#ffd166" stroke="#e0a526" strokeWidth="1.2" />
                  <text x="86" y="67" textAnchor="middle" fill="#1c3422" fontSize="13" fontWeight="900" fontFamily="sans-serif">$</text>
                </g>

                {/* Action Rays around Coin */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="68" y1="46" x2="60" y2="40" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="64" y1="56" x2="54" y2="56" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="68" y1="66" x2="60" y2="72" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              ROW 2 - CARD 4 (Wide / 7 cols): Grant Management
          ======================================================== */}
          <div className="lg:col-span-7 group relative flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden rounded-3xl border border-[#14a800]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Grant Management
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Manage deadlines, applications, and reports. Draft using your own information.
              </p>
            </div>

            {/* Infographic: Official Grant Document + Checkmark Seal */}
            <div
              aria-hidden="true"
              className="relative w-[170px] sm:w-[210px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 210 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="115" cy="148" rx="75" ry="8" fill="#e7f5e3" />

                {/* Back Folder Leaf (Mint) */}
                <g className="transition-transform duration-500 ease-out group-hover:rotate-3 origin-center">
                  <rect x="74" y="24" width="88" height="110" rx="10" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" transform="rotate(-6 118 79)" />
                </g>

                {/* Main Grant Document Sheet */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="85" y="26" width="88" height="112" rx="10" fill="#ffffff" stroke="#1c3422" strokeWidth="2.4" />

                  {/* Typeset Title "Grant" */}
                  <text x="129" y="54" textAnchor="middle" fill="#1c3422" fontSize="19" fontWeight="800" fontFamily="sans-serif">
                    Grant
                  </text>
                  <line x1="98" y1="64" x2="160" y2="64" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Content Rows */}
                  <line x1="98" y1="76" x2="155" y2="76" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="98" y1="86" x2="148" y2="86" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="98" y1="96" x2="138" y2="96" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="98" y1="106" x2="130" y2="106" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Green Checkmark Approval Stamp (Bottom Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-115 origin-[162px_116px]">
                  <circle cx="162" cy="116" r="22" fill="#52b86a" stroke="#1c3422" strokeWidth="2.4" />
                  <circle cx="162" cy="116" r="18" fill="#52b86a" stroke="#ffffff" strokeWidth="1.2" strokeDasharray="3 3" />
                  <path d="M 152 116 L 159 123 L 173 108" stroke="#ffffff" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>

                {/* Action Rays on Left */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="62" y1="44" x2="52" y2="38" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="60" y1="56" x2="48" y2="56" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="62" y1="68" x2="52" y2="74" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              ROW 3 - CARD 5 (Wide / 7 cols): Event Management
          ======================================================== */}
          <div className="lg:col-span-7 group relative flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden rounded-3xl border border-[#14a800]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Event Management
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Publish event pages. Track registrations, attendance, and follow-up.
              </p>
            </div>

            {/* Infographic: Calendar + Attendee Avatars */}
            <div
              aria-hidden="true"
              className="relative w-[170px] sm:w-[210px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 210 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="110" cy="148" rx="75" ry="8" fill="#e7f5e3" />

                {/* Calendar Body */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="68" y="28" width="98" height="104" rx="10" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />

                  {/* Top Bar with Spiral Loops */}
                  <rect x="68" y="28" width="98" height="22" rx="10" fill="#4a8b5e" />
                  <rect x="68" y="38" width="98" height="12" fill="#4a8b5e" />
                  <line x1="68" y1="50" x2="166" y2="50" stroke="#1c3422" strokeWidth="1.8" />

                  {/* Spiral Binder Rings */}
                  <rect x="86" y="20" width="6" height="14" rx="3" fill="#1c3422" />
                  <rect x="114" y="20" width="6" height="14" rx="3" fill="#1c3422" />
                  <rect x="142" y="20" width="6" height="14" rx="3" fill="#1c3422" />

                  {/* Calendar Dates Grid */}
                  <rect x="78" y="60" width="11" height="11" rx="2" fill="#52b86a" />
                  <rect x="94" y="60" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="110" y="60" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="126" y="60" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="142" y="60" width="11" height="11" rx="2" fill="#e7f5e3" />

                  <rect x="78" y="78" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="94" y="78" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="110" y="78" width="11" height="11" rx="2" fill="#52b86a" />
                  <rect x="126" y="78" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="142" y="78" width="11" height="11" rx="2" fill="#e7f5e3" />

                  <rect x="78" y="96" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="94" y="96" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="110" y="96" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="126" y="96" width="11" height="11" rx="2" fill="#52b86a" />
                  <rect x="142" y="96" width="11" height="11" rx="2" fill="#e7f5e3" />

                  <rect x="78" y="114" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="94" y="114" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="110" y="114" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="126" y="114" width="11" height="11" rx="2" fill="#e7f5e3" />
                  <rect x="142" y="114" width="11" height="11" rx="2" fill="#e7f5e3" />
                </g>

                {/* Attendee Bubble 1 (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-110 origin-[164px_74px]">
                  <circle cx="164" cy="74" r="18" fill="#c8f0be" stroke="#1c3422" strokeWidth="2" />
                  <circle cx="164" cy="70" r="7.5" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.4" />
                  <path d="M 158 68 C 158 64, 170 64, 170 68" stroke="#1c3422" strokeWidth="1.8" fill="#1c3422" />
                  <path d="M 152 86 C 152 80, 176 80, 176 86 Z" fill="#14a800" stroke="#1c3422" strokeWidth="1.4" />
                </g>

                {/* Attendee Bubble 2 (Bottom Left) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-110 origin-[72px_122px]">
                  <circle cx="72" cy="122" r="18" fill="#c8f0be" stroke="#1c3422" strokeWidth="2" />
                  <circle cx="72" cy="118" r="7.5" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.4" />
                  <path d="M 66 116 C 66 112, 78 112, 78 116" stroke="#1c3422" strokeWidth="1.8" fill="#1c3422" />
                  <path d="M 60 134 C 60 128, 84 128, 84 134 Z" fill="#4d9b67" stroke="#1c3422" strokeWidth="1.4" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="52" y1="40" x2="42" y2="34" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="54" y1="52" x2="44" y2="52" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="52" y1="64" x2="42" y2="70" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              ROW 3 - CARD 6 (Narrow / 5 cols): Volunteer Management & Training
          ======================================================== */}
          <div className="lg:col-span-5 group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#14a800]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Volunteer Management &amp; Training
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Manage volunteers, schedules, training, and updates in one place.
              </p>
            </div>

            {/* Infographic: Volunteer Team with Heart + Training Gear Badge */}
            <div
              aria-hidden="true"
              className="relative w-[150px] sm:w-[170px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 170 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="85" cy="148" rx="60" ry="7" fill="#e7f5e3" />

                {/* Team Group */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-bottom">
                  {/* Left Volunteer */}
                  <g>
                    <circle cx="48" cy="84" r="11" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.8" />
                    <path d="M 40 80 C 40 70, 56 70, 56 80 Z" fill="#1c3422" />
                    <path d="M 32 138 C 32 110, 64 110, 64 138 Z" fill="#4a8b5e" stroke="#1c3422" strokeWidth="2" />
                  </g>

                  {/* Right Volunteer */}
                  <g>
                    <circle cx="122" cy="84" r="11" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.8" />
                    <path d="M 114 80 C 114 70, 130 70, 130 80 Z" fill="#1c3422" />
                    <path d="M 106 138 C 106 110, 138 110, 138 138 Z" fill="#69b885" stroke="#1c3422" strokeWidth="2" />
                  </g>

                  {/* Center Key Volunteer with Heart Emblem */}
                  <g>
                    <circle cx="85" cy="74" r="14" fill="#fde6d2" stroke="#1c3422" strokeWidth="2.2" />
                    {/* Expressive Facial Details */}
                    <path d="M 80 73 C 81 75, 83 75, 84 73" stroke="#1c3422" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    <path d="M 86 73 C 87 75, 89 75, 90 73" stroke="#1c3422" strokeWidth="1.4" fill="none" strokeLinecap="round" />
                    <path d="M 82 78 C 83.5 81, 86.5 81, 88 78" stroke="#1c3422" strokeWidth="1.4" fill="none" strokeLinecap="round" />

                    <path d="M 73 70 C 73 57, 97 57, 97 70 Z" fill="#1c3422" />
                    <path d="M 64 142 C 64 106, 106 106, 106 142 Z" fill="#367a4e" stroke="#1c3422" strokeWidth="2.2" />
                    {/* White Heart on Shirt */}
                    <path d="M 85 125 C 85 125, 76 119, 76 113 C 76 109, 80 107, 83 109 C 85 111, 85 111, 85 111 C 85 111, 85 111, 87 109 C 90 107, 94 109, 94 113 C 94 119, 85 125, 85 125 Z" fill="#ffffff" />
                  </g>
                </g>

                {/* Training Gear Settings Badge (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:rotate-45 origin-[140px_46px]">
                  <circle cx="140" cy="46" r="15" fill="#4a8b5e" stroke="#1c3422" strokeWidth="2" />
                  {/* Gear Wheel */}
                  <circle cx="140" cy="46" r="5" fill="#4a8b5e" stroke="#ffffff" strokeWidth="2" />
                  <path d="M 140 36 L 140 39 M 140 53 L 140 56 M 130 46 L 133 46 M 147 46 L 150 46 M 133 39 L 135 41 M 145 51 L 147 53 M 133 53 L 135 51 M 145 41 L 147 39" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Action Rays on Left */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="64" y1="42" x2="56" y2="36" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="68" y1="52" x2="58" y2="50" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              ROW 4 - CARD 7 (Narrow / 5 cols): Board Governance & Meetings
          ======================================================== */}
          <div className="lg:col-span-5 group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#14a800]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Board Governance &amp; Meetings
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Keep documents, decisions, meetings, and action items visible.
              </p>
            </div>

            {/* Infographic: Board Meeting Window + Attendees + Gavel Stamp */}
            <div
              aria-hidden="true"
              className="relative w-[150px] sm:w-[170px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 170 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="85" cy="148" rx="60" ry="6" fill="#e7f5e3" />

                {/* Board Meeting Window */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="28" y="34" width="94" height="96" rx="9" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
                  <rect x="28" y="34" width="94" height="16" rx="9" fill="#f4fbf1" />
                  <rect x="28" y="42" width="94" height="8" fill="#f4fbf1" />
                  <line x1="28" y1="50" x2="122" y2="50" stroke="#1c3422" strokeWidth="1.6" />
                  <circle cx="36" cy="42" r="1.8" fill="#1c3422" />
                  <circle cx="41" cy="42" r="1.8" fill="#1c3422" />
                  <circle cx="46" cy="42" r="1.8" fill="#1c3422" />

                  {/* Agenda Lines */}
                  <line x1="38" y1="62" x2="80" y2="62" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="38" y1="72" x2="70" y2="72" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" opacity="0.6" />

                  {/* Seated Board Member Silhouettes */}
                  <g>
                    <line x1="34" y1="126" x2="116" y2="126" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                    {/* Left Member */}
                    <circle cx="50" cy="102" r="7" fill="#4a8b5e" />
                    <path d="M 40 126 C 40 114, 60 114, 60 126 Z" fill="#4a8b5e" />

                    {/* Right Member */}
                    <circle cx="98" cy="102" r="7" fill="#4a8b5e" />
                    <path d="M 88 126 C 88 114, 108 114, 108 126 Z" fill="#4a8b5e" />

                    {/* Center Leader Member */}
                    <circle cx="74" cy="96" r="8.5" fill="#2d6842" />
                    <path d="M 61 126 C 61 108, 87 108, 87 126 Z" fill="#2d6842" />
                  </g>
                </g>

                {/* Floating Gavel Stamp (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 origin-[122px_44px]">
                  <circle cx="122" cy="44" r="21" fill="#4a8b5e" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Wooden Gavel Icon */}
                  <rect x="110" y="34" width="16" height="8" rx="2.5" fill="#ffffff" stroke="#1c3422" strokeWidth="1.6" transform="rotate(-35 118 38)" />
                  <line x1="118" y1="38" x2="132" y2="52" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="84" y1="18" x2="80" y2="10" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="96" y1="18" x2="100" y2="10" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              ROW 4 - CARD 8 (Wide / 7 cols): Donor Call Notes Analysis
          ======================================================== */}
          <div className="lg:col-span-7 group relative flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden rounded-3xl border border-[#14a800]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Donor Call Notes Analysis
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Turn call notes into personalized follow-ups and donor interest signals.
              </p>
            </div>

            {/* Infographic: Call Notes Notepad + Audio Mic + Interest Signal Bars */}
            <div
              aria-hidden="true"
              className="relative w-[170px] sm:w-[210px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 210 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="115" cy="148" rx="80" ry="7" fill="#e7f5e3" />

                {/* Call Notes Document Sheet */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="76" y="26" width="98" height="106" rx="10" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />

                  {/* Speech / Transcript Lines */}
                  <line x1="126" y1="42" x2="162" y2="42" stroke="#4a8b5e" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="126" y1="52" x2="156" y2="52" stroke="#4a8b5e" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="126" y1="62" x2="160" y2="62" stroke="#4a8b5e" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Key Insights Notes Rows */}
                  <line x1="92" y1="84" x2="162" y2="84" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="92" y1="94" x2="150" y2="94" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                </g>

                {/* Audio Microphone Badge (Left) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-110 origin-[104px_74px]">
                  <circle cx="104" cy="74" r="23" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" />
                  <circle cx="104" cy="74" r="18" fill="#ffffff" />
                  {/* Studio Microphone Icon */}
                  <rect x="100" y="62" width="8" height="15" rx="4" fill="#4a8b5e" stroke="#1c3422" strokeWidth="1.8" />
                  <path d="M 96 69 C 96 76, 112 76, 112 69" fill="none" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="104" y1="76" x2="104" y2="84" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="99" y1="84" x2="109" y2="84" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>

                {/* Donor Interest Signal Bars (Bottom Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px] origin-bottom">
                  <rect x="138" y="118" width="7" height="14" rx="2" fill="#88c99e" stroke="#1c3422" strokeWidth="1.4" />
                  <rect x="148" y="108" width="7" height="24" rx="2" fill="#52a670" stroke="#1c3422" strokeWidth="1.4" />
                  <rect x="158" y="96" width="7" height="36" rx="2" fill="#2d6842" stroke="#1c3422" strokeWidth="1.4" />
                </g>

                {/* Action Rays on Top */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="78" y1="20" x2="72" y2="12" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="88" y1="20" x2="90" y2="10" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeCanDoSection;
