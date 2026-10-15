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
              <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
                Leadership &amp; Program Dashboard
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
                {/* Base Shadow */}
                <ellipse cx="105" cy="148" rx="85" ry="8" fill="#e7f5e3" />

                {/* Dashboard Window Frame */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="25" y="24" width="125" height="106" rx="9" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Top Header Bar */}
                  <rect x="25" y="24" width="125" height="18" rx="9" fill="#f4fbf1" />
                  <rect x="25" y="34" width="125" height="8" fill="#f4fbf1" />
                  <line x1="25" y1="42" x2="150" y2="42" stroke="#1c3422" strokeWidth="1.6" />
                  <circle cx="35" cy="33" r="2" fill="#1c3422" />
                  <circle cx="41" cy="33" r="2" fill="#1c3422" />
                  <circle cx="47" cy="33" r="2" fill="#1c3422" />

                  {/* Line Chart */}
                  <path d="M 40 78 L 62 62 L 80 72 L 105 52 L 125 58" fill="none" stroke="#52b86a" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="105" cy="52" r="3" fill="#14a800" stroke="#1c3422" strokeWidth="1.2" />

                  {/* Mini Bar Chart */}
                  <rect x="42" y="94" width="6" height="20" rx="1.5" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.2" />
                  <rect x="52" y="86" width="6" height="28" rx="1.5" fill="#14a800" stroke="#1c3422" strokeWidth="1.2" />
                  <rect x="62" y="90" width="6" height="24" rx="1.5" fill="#52b86a" stroke="#1c3422" strokeWidth="1.2" />

                  {/* Pie / Donut Chart */}
                  <circle cx="95" cy="98" r="14" fill="#e7f5e3" stroke="#1c3422" strokeWidth="1.6" />
                  <path d="M 95 98 L 95 84 A 14 14 0 0 1 109 98 Z" fill="#14a800" stroke="#1c3422" strokeWidth="1.2" />
                  <circle cx="95" cy="98" r="6" fill="#ffffff" stroke="#1c3422" strokeWidth="1.2" />

                  {/* Metric Status Lines */}
                  <line x1="118" y1="90" x2="140" y2="90" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="118" y1="98" x2="134" y2="98" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="118" y1="106" x2="138" y2="106" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Person Pointing at the Dashboard (Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-x-1 origin-bottom">
                  {/* Body / Torso */}
                  <path d="M 135 150 C 135 125, 145 110, 168 110 C 190 110, 198 125, 198 150 Z" fill="#4d9b67" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Pointing Arm & Hand */}
                  <path d="M 148 122 L 126 95 L 122 98 L 142 128 Z" fill="#fde6d2" stroke="#1c3422" strokeWidth="2" strokeLinejoin="round" />
                  <circle cx="122" cy="95" r="3.5" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.6" />

                  {/* Head & Neck */}
                  <rect x="160" y="92" width="10" height="12" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.6" />
                  <circle cx="165" cy="85" r="14" fill="#fde6d2" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Dark Hair */}
                  <path d="M 153 82 C 153 70, 162 68, 172 70 C 180 72, 182 82, 178 92 C 176 84, 168 84, 164 86 C 158 88, 154 90, 153 82 Z" fill="#1c3422" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="18" y1="40" x2="10" y2="34" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="22" y1="52" x2="12" y2="52" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="64" x2="10" y2="70" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="185" y1="36" x2="195" y2="30" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="188" y1="48" x2="198" y2="48" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
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
                {/* Base Shadow */}
                <ellipse cx="85" cy="148" rx="65" ry="6" fill="#e7f5e3" />

                {/* Directory Sheet */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="22" y="32" width="102" height="104" rx="10" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />

                  {/* List Row 1 */}
                  <circle cx="38" cy="50" r="7" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.5" />
                  <path d="M 34 56 C 34 52, 42 52, 42 56 Z" fill="#1c3422" />
                  <line x1="52" y1="48" x2="98" y2="48" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="52" y1="54" x2="82" y2="54" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />

                  {/* List Row 2 */}
                  <circle cx="38" cy="74" r="7" fill="#e7f5e3" stroke="#1c3422" strokeWidth="1.5" />
                  <path d="M 34 80 C 34 76, 42 76, 42 80 Z" fill="#1c3422" />
                  <line x1="52" y1="72" x2="104" y2="72" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="52" y1="78" x2="78" y2="78" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />

                  {/* List Row 3 */}
                  <circle cx="38" cy="98" r="7" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.5" />
                  <path d="M 34 104 C 34 100, 42 100, 42 104 Z" fill="#1c3422" />
                  <line x1="52" y1="96" x2="92" y2="96" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="52" y1="102" x2="74" y2="102" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.6" />

                  {/* List Row 4 */}
                  <circle cx="38" cy="122" r="7" fill="#e7f5e3" stroke="#1c3422" strokeWidth="1.5" />
                  <path d="M 34 128 C 34 124, 42 124, 42 128 Z" fill="#1c3422" />
                  <line x1="52" y1="120" x2="88" y2="120" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Featured Top-Right Relationship Avatar */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-110 origin-[118px_48px]">
                  <circle cx="118" cy="48" r="22" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" />
                  <circle cx="118" cy="44" r="9" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.8" />
                  <path d="M 112 42 C 112 36, 124 36, 124 42" stroke="#1c3422" strokeWidth="2" fill="#1c3422" />
                  <path d="M 104 64 C 104 56, 132 56, 132 64 Z" fill="#14a800" stroke="#1c3422" strokeWidth="1.8" />
                </g>

                {/* Active Engagement Dot */}
                <circle cx="142" cy="80" r="9" fill="#14a800" stroke="#1c3422" strokeWidth="2" />
                <circle cx="142" cy="80" r="3" fill="#ffffff" />

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="12" y1="46" x2="4" y2="44" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="56" x2="6" y2="58" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="14" y1="66" x2="6" y2="72" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="152" y1="36" x2="160" y2="30" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
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
                {/* Base Shadow */}
                <ellipse cx="85" cy="148" rx="60" ry="7" fill="#e7f5e3" />

                {/* 3D Green Donation Box */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px] origin-center">
                  {/* Front Face */}
                  <rect x="42" y="86" width="76" height="52" rx="6" fill="#3d8557" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Top Face / Lid */}
                  <polygon points="42,86 64,68 140,68 118,86" fill="#52a670" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
                  {/* Right Face */}
                  <polygon points="118,86 140,68 140,118 118,138" fill="#2d6842" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
                  {/* Drop Slot on Top Face */}
                  <line x1="72" y1="77" x2="108" y2="77" stroke="#1c3422" strokeWidth="3" strokeLinecap="round" />
                </g>

                {/* Hand and Coin Falling into the Box */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-y-1 origin-center">
                  {/* Cuff / Sleeve */}
                  <polygon points="125,18 142,32 130,46 114,32" fill="#4a8b5e" stroke="#1c3422" strokeWidth="2" strokeLinejoin="round" />
                  {/* Hand holding coin */}
                  <path d="M 116 34 L 98 48 C 94 52, 98 58, 106 54 L 118 42 Z" fill="#fde6d2" stroke="#1c3422" strokeWidth="2" strokeLinejoin="round" />

                  {/* Golden Coin with $ sign */}
                  <circle cx="88" cy="62" r="14" fill="#ffd166" stroke="#1c3422" strokeWidth="2.2" />
                  <text x="88" y="67" textAnchor="middle" fill="#1c3422" fontSize="13" fontWeight="900" fontFamily="sans-serif">$</text>
                </g>

                {/* Action Rays around the coin drop */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="68" y1="46" x2="60" y2="40" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="64" y1="56" x2="54" y2="56" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="68" y1="66" x2="60" y2="72" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
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
                {/* Base Shadow */}
                <ellipse cx="115" cy="148" rx="75" ry="8" fill="#e7f5e3" />

                {/* Back Folder Leaf (Mint) */}
                <g className="transition-transform duration-500 ease-out group-hover:rotate-3 origin-center">
                  <rect x="76" y="24" width="86" height="110" rx="9" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" transform="rotate(-6 119 79)" />
                </g>

                {/* Main Grant Document Sheet */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="85" y="26" width="88" height="112" rx="9" fill="#ffffff" stroke="#1c3422" strokeWidth="2.4" />

                  {/* Header Word "Grant" */}
                  <text x="129" y="52" textAnchor="middle" fill="#1c3422" fontSize="18" fontWeight="800" fontFamily="sans-serif">
                    Grant
                  </text>
                  <line x1="98" y1="62" x2="160" y2="62" stroke="#1c3422" strokeWidth="2.4" strokeLinecap="round" />

                  {/* Document Content Rows */}
                  <line x1="98" y1="74" x2="155" y2="74" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="98" y1="84" x2="148" y2="84" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="98" y1="94" x2="138" y2="94" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="98" y1="104" x2="132" y2="104" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Approved Checkmark Seal (Bottom Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-115 origin-[162px_116px]">
                  <circle cx="162" cy="116" r="22" fill="#52b86a" stroke="#1c3422" strokeWidth="2.4" />
                  <path d="M 152 116 L 159 123 L 173 109" stroke="#ffffff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="62" y1="44" x2="52" y2="38" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="60" y1="56" x2="48" y2="56" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="62" y1="68" x2="52" y2="74" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
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
                {/* Base Shadow */}
                <ellipse cx="110" cy="148" rx="75" ry="8" fill="#e7f5e3" />

                {/* Calendar Body */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="68" y="28" width="98" height="104" rx="10" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Top Bar with Spiral Hooks */}
                  <rect x="68" y="28" width="98" height="22" rx="10" fill="#52a670" />
                  <rect x="68" y="38" width="98" height="12" fill="#52a670" />
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
                  <line x1="52" y1="40" x2="42" y2="34" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="54" y1="52" x2="44" y2="52" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="52" y1="64" x2="42" y2="70" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
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
                {/* Base Shadow */}
                <ellipse cx="85" cy="148" rx="60" ry="7" fill="#e7f5e3" />

                {/* Team Group */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-bottom">
                  {/* Left Volunteer */}
                  <g>
                    <circle cx="48" cy="84" r="11" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.8" />
                    <path d="M 40 80 C 40 70, 56 70, 56 80 Z" fill="#1c3422" />
                    <path d="M 32 138 C 32 110, 64 110, 64 138 Z" fill="#4d9b67" stroke="#1c3422" strokeWidth="2" />
                  </g>

                  {/* Right Volunteer */}
                  <g>
                    <circle cx="122" cy="84" r="11" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.8" />
                    <path d="M 114 80 C 114 70, 130 70, 130 80 Z" fill="#1c3422" />
                    <path d="M 106 138 C 106 110, 138 110, 138 138 Z" fill="#88c99e" stroke="#1c3422" strokeWidth="2" />
                  </g>

                  {/* Center Key Volunteer with Heart Emblem */}
                  <g>
                    <circle cx="85" cy="74" r="14" fill="#fde6d2" stroke="#1c3422" strokeWidth="2.2" />
                    <path d="M 74 70 C 74 58, 96 58, 96 70 Z" fill="#1c3422" />
                    <path d="M 64 142 C 64 106, 106 106, 106 142 Z" fill="#52a670" stroke="#1c3422" strokeWidth="2.2" />
                    {/* White Heart on Shirt */}
                    <path d="M 85 125 C 85 125, 78 120, 78 115 C 78 112, 81 110, 83.5 112 C 85 113.5, 85 113.5, 85 113.5 C 85 113.5, 85 113.5, 86.5 112 C 89 110, 92 112, 92 115 C 92 120, 85 125, 85 125 Z" fill="#ffffff" />
                  </g>
                </g>

                {/* Training Gear Settings Badge (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:rotate-45 origin-[140px_46px]">
                  <circle cx="140" cy="46" r="14" fill="#52b86a" stroke="#1c3422" strokeWidth="2" />
                  {/* Gear Icon inside */}
                  <circle cx="140" cy="46" r="5" fill="#52b86a" stroke="#ffffff" strokeWidth="1.8" />
                  <path d="M 140 37 L 140 40 M 140 52 L 140 55 M 131 46 L 134 46 M 146 46 L 149 46" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="64" y1="42" x2="56" y2="36" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="68" y1="52" x2="58" y2="50" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
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
                {/* Base Shadow */}
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
                  <line x1="38" y1="72" x2="70" y2="72" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />

                  {/* 3 Board Member Silhouettes Seated */}
                  <g>
                    {/* Left Member */}
                    <circle cx="50" cy="104" r="7" fill="#4d9b67" />
                    <path d="M 40 130 C 40 116, 60 116, 60 130 Z" fill="#4d9b67" />

                    {/* Right Member */}
                    <circle cx="98" cy="104" r="7" fill="#4d9b67" />
                    <path d="M 88 130 C 88 116, 108 116, 108 130 Z" fill="#4d9b67" />

                    {/* Center Leader Member */}
                    <circle cx="74" cy="98" r="8" fill="#367a4e" />
                    <path d="M 62 130 C 62 112, 86 112, 86 130 Z" fill="#367a4e" />
                  </g>
                </g>

                {/* Floating Gavel / Governance Stamp (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 origin-[122px_44px]">
                  <circle cx="122" cy="44" r="20" fill="#52a670" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Wooden Gavel Icon */}
                  <rect x="110" y="34" width="16" height="8" rx="2" fill="#ffffff" stroke="#1c3422" strokeWidth="1.5" transform="rotate(-35 118 38)" />
                  <line x1="118" y1="38" x2="132" y2="52" stroke="#ffffff" strokeWidth="2.8" strokeLinecap="round" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="84" y1="18" x2="80" y2="10" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="96" y1="18" x2="100" y2="10" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
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
                {/* Base Shadow */}
                <ellipse cx="115" cy="148" rx="80" ry="7" fill="#e7f5e3" />

                {/* Call Notes Document Sheet */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="76" y="26" width="98" height="106" rx="9" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />

                  {/* Speech / Transcript Lines */}
                  <line x1="126" y1="42" x2="162" y2="42" stroke="#52a670" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="126" y1="52" x2="156" y2="52" stroke="#52a670" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="126" y1="62" x2="160" y2="62" stroke="#52a670" strokeWidth="2.5" strokeLinecap="round" />

                  {/* Key Insights Notes Rows */}
                  <line x1="92" y1="84" x2="162" y2="84" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="92" y1="94" x2="152" y2="94" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                </g>

                {/* Audio Microphone Badge (Left) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-110 origin-[104px_74px]">
                  <circle cx="104" cy="74" r="22" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Microphone Icon */}
                  <rect x="100" y="62" width="8" height="15" rx="4" fill="#52a670" stroke="#1c3422" strokeWidth="1.8" />
                  <path d="M 96 70 C 96 77, 112 77, 112 70" fill="none" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" />
                  <line x1="104" y1="77" x2="104" y2="84" stroke="#1c3422" strokeWidth="1.8" />
                  <line x1="99" y1="84" x2="109" y2="84" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" />
                </g>

                {/* Donor Interest Signal Bars (Bottom Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-y-[-2px] origin-bottom">
                  <rect x="138" y="118" width="7" height="14" rx="2" fill="#52a670" stroke="#1c3422" strokeWidth="1.4" />
                  <rect x="148" y="108" width="7" height="24" rx="2" fill="#52a670" stroke="#1c3422" strokeWidth="1.4" />
                  <rect x="158" y="96" width="7" height="36" rx="2" fill="#367a4e" stroke="#1c3422" strokeWidth="1.4" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="78" y1="20" x2="72" y2="12" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="88" y1="20" x2="90" y2="10" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
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
