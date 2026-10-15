import React from "react";

export const WhatWeCanDoSection: React.FC = () => {
  return (
    <section id="what-we-can-do" className="py-16 md:py-24 px-6 lg:px-12 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-[#0c180a] mb-3">
            What We Can Do
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
          <div className="lg:col-span-7 group relative flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden rounded-3xl border border-[#108a00]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a] leading-tight">
                Leadership &amp;
                <br />
                Program Dashboard
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                See donors, grants, programs, and pending work at a glance.
              </p>
            </div>

            {/* Infographic: Executive Leadership & Program KPI Dashboard Window */}
            <div
              aria-hidden="true"
              className="relative w-[180px] sm:w-[220px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="110" cy="150" rx="95" ry="7" fill="#e7f5e3" />

                {/* Dashboard Window Frame */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="18" y="20" width="184" height="120" rx="12" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />

                  {/* Top Header Bar with 3 Window Dots & Title Line */}
                  <rect x="18" y="20" width="184" height="20" rx="12" fill="#f4fbf1" />
                  <rect x="18" y="30" width="184" height="10" fill="#f4fbf1" />
                  <line x1="18" y1="40" x2="202" y2="40" stroke="#1c3422" strokeWidth="1.6" />
                  <circle cx="30" cy="30" r="2.2" fill="#1c3422" />
                  <circle cx="37" cy="30" r="2.2" fill="#1c3422" />
                  <circle cx="44" cy="30" r="2.2" fill="#1c3422" />
                  <line x1="60" y1="30" x2="110" y2="30" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" opacity="0.4" />

                  {/* 3 Executive Metric KPI Summary Mini Cards */}
                  {/* KPI Card 1: Donors */}
                  <rect x="28" y="48" width="48" height="26" rx="6" fill="#f4fbf1" stroke="#1c3422" strokeWidth="1.4" />
                  <line x1="34" y1="56" x2="56" y2="56" stroke="#1c3422" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <text x="34" y="68" fill="#108a00" fontSize="9" fontWeight="800" fontFamily="sans-serif">+24%</text>

                  {/* KPI Card 2: Grants */}
                  <rect x="86" y="48" width="48" height="26" rx="6" fill="#f4fbf1" stroke="#1c3422" strokeWidth="1.4" />
                  <line x1="92" y1="56" x2="116" y2="56" stroke="#1c3422" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <text x="92" y="68" fill="#1c3422" fontSize="9" fontWeight="800" fontFamily="sans-serif">92%</text>

                  {/* KPI Card 3: Programs */}
                  <rect x="144" y="48" width="48" height="26" rx="6" fill="#f4fbf1" stroke="#1c3422" strokeWidth="1.4" />
                  <line x1="150" y1="56" x2="174" y2="56" stroke="#1c3422" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
                  <text x="150" y="68" fill="#2d6842" fontSize="9" fontWeight="800" fontFamily="sans-serif">Active</text>

                  {/* Left Main Chart: Program Growth Area & Trend Line */}
                  <rect x="28" y="82" width="106" height="48" rx="6" fill="#fafdfa" stroke="#1c3422" strokeWidth="1.4" />
                  <polygon points="34,122 52,106 72,112 94,94 116,98 128,90 128,122 34,122" fill="#e7f5e3" fillOpacity="0.8" />
                  <path d="M 34 122 L 52 106 L 72 112 L 94 94 L 116 98 L 128 90" stroke="#367a4e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <circle cx="94" cy="94" r="3" fill="#108a00" stroke="#1c3422" strokeWidth="1.4" />
                  <circle cx="128" cy="90" r="3" fill="#108a00" stroke="#1c3422" strokeWidth="1.4" />

                  {/* Right Widget: Bar Chart / Allocation */}
                  <rect x="144" y="82" width="48" height="48" rx="6" fill="#fafdfa" stroke="#1c3422" strokeWidth="1.4" />
                  <line x1="152" y1="122" x2="184" y2="122" stroke="#1c3422" strokeWidth="1.4" strokeLinecap="round" />
                  <rect x="152" y="104" width="7" height="18" rx="2" fill="#c8f0be" stroke="#1c3422" strokeWidth="1.2" />
                  <rect x="163" y="94" width="7" height="28" rx="2" fill="#108a00" stroke="#1c3422" strokeWidth="1.2" />
                  <rect x="174" y="100" width="7" height="22" rx="2" fill="#52b86a" stroke="#1c3422" strokeWidth="1.2" />
                </g>

                {/* Action Rays */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="10" y1="46" x2="4" y2="40" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="12" y1="58" x2="4" y2="58" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="208" y1="36" x2="216" y2="30" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="210" y1="48" x2="218" y2="48" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              ROW 1 - CARD 2 (Narrow / 5 cols): Donor Management & Retention
          ======================================================== */}
          <div className="lg:col-span-5 group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#108a00]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
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

                  {/* List Row 1: Donor Item */}
                  <circle cx="42" cy="52" r="9" fill="#e7f5e3" stroke="#1c3422" strokeWidth="1.5" />
                  <circle cx="42" cy="49" r="3.5" fill="#108a00" />
                  <path d="M 36 57 C 36 53, 48 53, 48 57 Z" fill="#108a00" />
                  <line x1="57" y1="50" x2="102" y2="50" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="57" y1="56" x2="86" y2="56" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />

                  {/* List Row 2: Donor Item */}
                  <circle cx="42" cy="76" r="9" fill="#e7f5e3" stroke="#1c3422" strokeWidth="1.5" />
                  <circle cx="42" cy="73" r="3.5" fill="#2d6842" />
                  <path d="M 36 81 C 36 77, 48 77, 48 81 Z" fill="#2d6842" />
                  <line x1="57" y1="74" x2="108" y2="74" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="57" y1="80" x2="90" y2="80" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />

                  {/* List Row 3: Donor Item */}
                  <circle cx="42" cy="100" r="9" fill="#e7f5e3" stroke="#1c3422" strokeWidth="1.5" />
                  <circle cx="42" cy="97" r="3.5" fill="#108a00" />
                  <path d="M 36 105 C 36 101, 48 101, 48 105 Z" fill="#108a00" />
                  <line x1="57" y1="98" x2="98" y2="98" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="57" y1="104" x2="80" y2="104" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.45" />

                  {/* Bottom subtle progress line */}
                  <line x1="57" y1="120" x2="94" y2="120" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" opacity="0.3" />
                </g>

                {/* Refined Modern Featured Donor Avatar Badge (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 origin-[126px_50px]">
                  <circle cx="126" cy="50" r="23" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
                  <circle cx="126" cy="50" r="19" fill="#e7f5e3" />
                  {/* Clean Vector Profile Silhouette */}
                  <circle cx="126" cy="44" r="7" fill="#108a00" />
                  <path d="M 113 62 C 113 54, 139 54, 139 62 Z" fill="#108a00" />
                  {/* VIP / Retained Star Badge */}
                  <circle cx="143" cy="34" r="7.5" fill="#ffd166" stroke="#1c3422" strokeWidth="1.4" />
                  <path d="M 143 30.5 L 144.2 33.2 L 147 33.5 L 144.9 35.3 L 145.5 38 L 143 36.6 L 140.5 38 L 141.1 35.3 L 139 33.5 L 141.8 33.2 Z" fill="#1c3422" />
                </g>

                {/* Active Engagement Dot Badge */}
                <circle cx="144" cy="84" r="11" fill="#108a00" stroke="#1c3422" strokeWidth="2" />
                <circle cx="144" cy="84" r="4.5" fill="#ffffff" />

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
          <div className="lg:col-span-5 group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#108a00]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
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
                  {/* Heart / Gift Emblem on Front */}
                  <circle cx="79" cy="112" r="12" fill="#326c46" />
                  <path d="M 79 117 C 79 117, 72 112, 72 108 C 72 105, 75 103, 77 105 C 79 107, 79 107, 79 107 C 79 107, 79 107, 81 105 C 83 103, 86 105, 86 108 C 86 112, 79 117, 79 117 Z" fill="#ffffff" />
                </g>

                {/* Floating Gold Contribution Coins Falling into Slot */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-y-1 origin-center">
                  {/* Secondary Left Small Coin */}
                  <circle cx="68" cy="42" r="9" fill="#ffd166" stroke="#1c3422" strokeWidth="1.8" />
                  <circle cx="68" cy="42" r="6.5" fill="#ffd166" stroke="#e0a526" strokeWidth="1" />
                  <text x="68" y="45.5" textAnchor="middle" fill="#1c3422" fontSize="9" fontWeight="800" fontFamily="sans-serif">$</text>

                  {/* Secondary Right Small Coin */}
                  <circle cx="114" cy="36" r="10" fill="#ffd166" stroke="#1c3422" strokeWidth="1.8" />
                  <circle cx="114" cy="36" r="7.5" fill="#ffd166" stroke="#e0a526" strokeWidth="1" />
                  <text x="114" y="40" textAnchor="middle" fill="#1c3422" fontSize="10" fontWeight="800" fontFamily="sans-serif">$</text>

                  {/* Main Primary Gold Coin with $ symbol */}
                  <circle cx="91" cy="54" r="15" fill="#ffd166" stroke="#1c3422" strokeWidth="2.2" />
                  <circle cx="91" cy="54" r="11.5" fill="#ffd166" stroke="#e0a526" strokeWidth="1.2" />
                  <text x="91" y="60" textAnchor="middle" fill="#1c3422" fontSize="14" fontWeight="900" fontFamily="sans-serif">$</text>

                  {/* Downward Motion Trail Lines */}
                  <line x1="91" y1="26" x2="91" y2="34" stroke="#108a00" strokeWidth="2" strokeLinecap="round" strokeDasharray="2 3" />
                </g>

                {/* Action Rays around Main Coin */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="68" y1="52" x2="60" y2="52" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="114" y1="52" x2="122" y2="52" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="102" y1="36" x2="108" y2="30" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                </g>
              </svg>
            </div>
          </div>

          {/* ========================================================
              ROW 2 - CARD 4 (Wide / 7 cols): Grant Management
          ======================================================== */}
          <div className="lg:col-span-7 group relative flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden rounded-3xl border border-[#108a00]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
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
          <div className="lg:col-span-7 group relative flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden rounded-3xl border border-[#108a00]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
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
                  <path d="M 152 86 C 152 80, 176 80, 176 86 Z" fill="#108a00" stroke="#1c3422" strokeWidth="1.4" />
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
          <div className="lg:col-span-5 group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#108a00]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
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
          <div className="lg:col-span-5 group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#108a00]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
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
                  {/* Outer Window Frame matching width perfectly */}
                  <rect x="24" y="32" width="102" height="98" rx="10" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Top Window Bar */}
                  <rect x="24" y="32" width="102" height="18" rx="10" fill="#f4fbf1" />
                  <rect x="24" y="40" width="102" height="10" fill="#f4fbf1" />
                  <line x1="24" y1="50" x2="126" y2="50" stroke="#1c3422" strokeWidth="1.6" />
                  <circle cx="34" cy="41" r="2" fill="#1c3422" />
                  <circle cx="40" cy="41" r="2" fill="#1c3422" />
                  <circle cx="46" cy="41" r="2" fill="#1c3422" />

                  {/* Agenda Lines */}
                  <line x1="36" y1="64" x2="84" y2="64" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="36" y1="74" x2="72" y2="74" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

                  {/* Seated Board Member Silhouettes inside matched frame */}
                  <g>
                    {/* Conference Table Boundary Line matching exactly inside window */}
                    <line x1="24" y1="116" x2="126" y2="116" stroke="#1c3422" strokeWidth="1.8" />
                    {/* Left Member */}
                    <circle cx="46" cy="98" r="6.5" fill="#4a8b5e" stroke="#1c3422" strokeWidth="1.4" />
                    <path d="M 36 116 C 36 107, 56 107, 56 116 Z" fill="#4a8b5e" stroke="#1c3422" strokeWidth="1.4" />

                    {/* Right Member */}
                    <circle cx="104" cy="98" r="6.5" fill="#4a8b5e" stroke="#1c3422" strokeWidth="1.4" />
                    <path d="M 94 116 C 94 107, 114 107, 114 116 Z" fill="#4a8b5e" stroke="#1c3422" strokeWidth="1.4" />

                    {/* Center Leader Member */}
                    <circle cx="75" cy="92" r="8" fill="#108a00" stroke="#1c3422" strokeWidth="1.5" />
                    <path d="M 62 116 C 62 103, 88 103, 88 116 Z" fill="#108a00" stroke="#1c3422" strokeWidth="1.5" />
                  </g>
                </g>

                {/* Floating Gavel Authority Stamp (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-6 origin-[124px_44px]">
                  <circle cx="124" cy="44" r="22" fill="#108a00" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Detailed Gavel Icon: Head, Rings & Handle */}
                  <g transform="translate(124, 44) rotate(-32) translate(-124, -44)">
                    {/* Gavel Mallet Head */}
                    <rect x="115" y="32" width="18" height="10" rx="2.5" fill="#ffffff" stroke="#1c3422" strokeWidth="1.6" />
                    {/* Golden decorative accent band on mallet */}
                    <rect x="122" y="32" width="4" height="10" fill="#ffd166" />
                    {/* Gavel Handle */}
                    <line x1="124" y1="42" x2="124" y2="58" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="124" cy="58" r="2" fill="#ffd166" />
                  </g>
                  {/* Sound Block / Base plate underneath */}
                  <rect x="114" y="56" width="20" height="4" rx="2" fill="#ffffff" stroke="#1c3422" strokeWidth="1.2" />
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
          <div className="lg:col-span-7 group relative flex flex-col sm:flex-row items-center justify-between gap-6 overflow-hidden rounded-3xl border border-[#108a00]/40 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#108a00] hover:shadow-lg hover:shadow-[#108a00]/15">
            <div className="relative z-10 flex-1 max-w-full sm:max-w-[55%] text-left">
              <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-[#0c180a]">
                Donor Call Notes Analysis
              </h3>
              <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
                Turn call notes into personalized follow-ups and donor interest signals.
              </p>
            </div>

            {/* Infographic: AI Donor Call Intelligence & Follow-up Analysis */}
            <div
              aria-hidden="true"
              className="relative w-[180px] sm:w-[220px] h-[145px] sm:h-[160px] shrink-0 flex items-center justify-center select-none"
            >
              <svg viewBox="0 0 220 160" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full overflow-visible">
                {/* Soft Base Shadow */}
                <ellipse cx="110" cy="150" rx="95" ry="7" fill="#e7f5e3" />

                {/* Call Notes Structured Dossier Sheet */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-center">
                  <rect x="52" y="22" width="136" height="116" rx="12" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />

                  {/* Header: Call Summary Tag & Duration */}
                  <rect x="62" y="32" width="60" height="14" rx="4" fill="#e7f5e3" />
                  <text x="92" y="42" textAnchor="middle" fill="#108a00" fontSize="8.5" fontWeight="800" fontFamily="sans-serif">CALL RECAP</text>
                  <text x="174" y="42" textAnchor="end" fill="#64748b" fontSize="8" fontWeight="600" fontFamily="sans-serif">14:22</text>
                  <line x1="62" y1="52" x2="176" y2="52" stroke="#1c3422" strokeWidth="1.2" opacity="0.3" />

                  {/* Speech Audio Waveform Bars */}
                  <g transform="translate(64, 60)">
                    <rect x="0" y="8" width="3" height="8" rx="1.5" fill="#108a00" />
                    <rect x="6" y="4" width="3" height="16" rx="1.5" fill="#108a00" />
                    <rect x="12" y="1" width="3" height="22" rx="1.5" fill="#108a00" />
                    <rect x="18" y="6" width="3" height="12" rx="1.5" fill="#108a00" />
                    <rect x="24" y="2" width="3" height="20" rx="1.5" fill="#108a00" />
                    <rect x="30" y="7" width="3" height="10" rx="1.5" fill="#108a00" />
                    <rect x="36" y="3" width="3" height="18" rx="1.5" fill="#108a00" />
                    <rect x="42" y="9" width="3" height="6" rx="1.5" fill="#108a00" />
                  </g>

                  {/* Donor Interest Signal Gauge (Right of waveform) */}
                  <g transform="translate(122, 60)">
                    <rect x="0" y="0" width="54" height="24" rx="5" fill="#f4fbf1" stroke="#1c3422" strokeWidth="1.2" />
                    <text x="6" y="10" fill="#64748b" fontSize="7" fontWeight="600" fontFamily="sans-serif">INTEREST</text>
                    {/* 4 Green Signal Level Bars */}
                    <rect x="6" y="14" width="8" height="6" rx="1.5" fill="#108a00" />
                    <rect x="17" y="14" width="8" height="6" rx="1.5" fill="#108a00" />
                    <rect x="28" y="14" width="8" height="6" rx="1.5" fill="#108a00" />
                    <rect x="39" y="14" width="8" height="6" rx="1.5" fill="#c8f0be" />
                  </g>

                  {/* AI Generated Follow-Up Action Item Box */}
                  <rect x="62" y="92" width="114" height="34" rx="6" fill="#f8faf7" stroke="#1c3422" strokeWidth="1.3" />
                  <circle cx="73" cy="104" r="4.5" fill="#108a00" />
                  <path d="M 71 104 L 72.5 105.5 L 75.5 102.5" stroke="#ffffff" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="82" y1="104" x2="166" y2="104" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="82" y1="113" x2="148" y2="113" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
                </g>

                {/* Left Floating Call Phone Headset Badge */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 origin-[46px_80px]">
                  <circle cx="46" cy="80" r="24" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
                  <circle cx="46" cy="80" r="19" fill="#108a00" />
                  {/* Phone Handset Vector */}
                  <path
                    d="M 40 73 C 39 74.5, 41 78, 44 81 C 47 84, 50.5 86, 52 85 L 54.5 82.5 C 55 82, 56 82, 56.5 82.5 L 59 85 C 59.5 85.5, 59.5 86.5, 59 87 L 57.5 88.5 C 56.5 89.5, 54.5 89.5, 51 86 C 47.5 82.5, 47.5 80.5, 48.5 79.5 L 50 78 C 50.5 77.5, 51.5 77.5, 52 78 L 44 70 Z"
                    fill="#ffffff"
                    stroke="#ffffff"
                    strokeWidth="1.2"
                    strokeLinejoin="round"
                  />
                  {/* Speech Ripple Rays */}
                  <path d="M 59 72 C 61 74, 61 78, 59 80" stroke="#ffffff" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                </g>

                {/* Action Rays on Top Right */}
                <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
                  <line x1="184" y1="20" x2="190" y2="12" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="194" y1="26" x2="202" y2="20" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
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

