import React from "react";

export const WhatWeCanDoSection: React.FC = () => {
  return (
    <section id="what-we-can-do" className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight leading-tight text-[#0c180a] mb-3">
            What We Can Do
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-slate-600 text-pretty">
            Less Chasing. More Control Over the Work That Matters.
          </p>
        </div>

        {/* Bento Grid: 4 Alternating Asymmetric Rows */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
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
                  {/* Top Lid with proper perspective */}
                  <polygon points="38,84 62,64 142,64 118,84" fill="#5ea872" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
                  {/* Front Face */}
                  <rect x="38" y="84" width="80" height="54" rx="4" fill="#4a8b5e" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
                  {/* Right Face */}
                  <polygon points="118,84 142,64 142,118 118,138" fill="#326c46" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
                  {/* Isometric Drop Slot on Top Lid */}
                  <ellipse cx="90" cy="74" rx="20" ry="3.5" fill="#1c3422" />
                  {/* Heart / Gift Emblem on Front */}
                  <circle cx="78" cy="111" r="13" fill="#326c46" stroke="#1c3422" strokeWidth="1.2" />
                  <path d="M 78 117 C 78 117, 70 111, 70 106.5 C 70 103, 73.5 101.5, 76 103.5 C 78 105, 78 105, 78 105 C 78 105, 78 105, 80 103.5 C 82.5 101.5, 86 103, 86 106.5 C 86 111, 78 117, 78 117 Z" fill="#ffffff" />
                </g>

                {/* Floating Gold Contribution Coins Falling Smoothly into Slot */}
                <g className="transition-transform duration-500 ease-out group-hover:translate-y-1 origin-center">
                  {/* Left Small Floating Coin */}
                  <g>
                    <ellipse cx="64" cy="40" rx="9" ry="8.5" fill="#ffd166" stroke="#1c3422" strokeWidth="1.8" />
                    <ellipse cx="64" cy="40" rx="6.5" ry="6" fill="#ffd166" stroke="#e5ad2a" strokeWidth="1" />
                    <text x="64" y="43.5" textAnchor="middle" fill="#1c3422" fontSize="9" fontWeight="800" fontFamily="sans-serif">$</text>
                  </g>

                  {/* Right Small Floating Coin */}
                  <g>
                    <ellipse cx="120" cy="38" rx="10" ry="9.5" fill="#ffd166" stroke="#1c3422" strokeWidth="1.8" />
                    <ellipse cx="120" cy="38" rx="7.5" ry="7" fill="#ffd166" stroke="#e5ad2a" strokeWidth="1" />
                    <text x="120" y="42" textAnchor="middle" fill="#1c3422" fontSize="10" fontWeight="800" fontFamily="sans-serif">$</text>
                  </g>

                  {/* Main Primary Gold Coin poised entering the slot */}
                  <g>
                    <ellipse cx="90" cy="52" rx="15" ry="14" fill="#ffd166" stroke="#1c3422" strokeWidth="2.2" />
                    <ellipse cx="90" cy="52" rx="11.5" ry="10.5" fill="#ffd166" stroke="#e5ad2a" strokeWidth="1.2" />
                    <text x="90" y="57.5" textAnchor="middle" fill="#1c3422" fontSize="14" fontWeight="900" fontFamily="sans-serif">$</text>
                  </g>
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

                {/* Team Group of Volunteers */}
                <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1 origin-bottom">
                  {/* Left Volunteer */}
                  <g>
                    <rect x="45" y="82" width="6" height="10" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.5" />
                    <circle cx="48" cy="74" r="10.5" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.8" />
                    <path d="M 38 72 C 38 62, 58 62, 58 72 C 54 68, 42 68, 38 72 Z" fill="#1c3422" />
                    <path d="M 28 138 L 28 102 C 28 92, 40 90, 48 90 C 56 90, 68 92, 68 102 L 68 138 Z" fill="#4a8b5e" stroke="#1c3422" strokeWidth="2" />
                    <path d="M 44 90 L 48 96 L 52 90" stroke="#1c3422" strokeWidth="1.5" fill="none" />
                  </g>

                  {/* Right Volunteer */}
                  <g>
                    <rect x="119" y="82" width="6" height="10" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.5" />
                    <circle cx="122" cy="74" r="10.5" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.8" />
                    <path d="M 112 72 C 112 62, 132 62, 132 72 C 128 68, 116 68, 112 72 Z" fill="#1c3422" />
                    <path d="M 102 138 L 102 102 C 102 92, 114 90, 122 90 C 130 90, 142 92, 142 102 L 142 138 Z" fill="#52b86a" stroke="#1c3422" strokeWidth="2" />
                    <path d="M 118 90 L 122 96 L 126 90" stroke="#1c3422" strokeWidth="1.5" fill="none" />
                  </g>

                  {/* Center Key Volunteer with Heart Emblem */}
                  <g>
                    <rect x="80.5" y="75" width="9" height="11" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.8" />
                    <circle cx="85" cy="65" r="13" fill="#fde6d2" stroke="#1c3422" strokeWidth="2.2" />
                    {/* Modern Hair & Face */}
                    <path d="M 72 63 C 72 49, 98 49, 98 63 C 93 58, 77 58, 72 63 Z" fill="#1c3422" />
                    <circle cx="80.5" cy="65" r="1.3" fill="#1c3422" />
                    <circle cx="89.5" cy="65" r="1.3" fill="#1c3422" />
                    <path d="M 81.5 71 C 83.5 73, 86.5 73, 88.5 71" stroke="#1c3422" strokeWidth="1.5" fill="none" strokeLinecap="round" />

                    {/* Torso & Uniform */}
                    <path d="M 60 142 L 60 100 C 60 86, 76 84, 85 84 C 94 84, 110 86, 110 100 L 110 142 Z" fill="#108a00" stroke="#1c3422" strokeWidth="2.2" />
                    <path d="M 79 84 L 85 94 L 91 84" stroke="#1c3422" strokeWidth="1.8" fill="none" />
                    {/* White Heart on Shirt */}
                    <path d="M 85 116 C 85 116, 76 110, 76 104 C 76 100, 80 98, 83 100 C 85 101.5, 85 101.5, 85 101.5 C 85 101.5, 85 101.5, 87 100 C 90 98, 94 100, 94 104 C 94 110, 85 116, 85 116 Z" fill="#ffffff" />
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

                  {/* Seated Board Members naturally seated behind Conference Table */}
                  <g>
                    {/* Seated Members (Layered behind table) */}
                    {/* Left Member */}
                    <g>
                      <rect x="44" y="93" width="4" height="8" fill="#fde6d2" />
                      <circle cx="46" cy="87" r="6.5" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.4" />
                      <path d="M 40 85 C 40 78, 52 78, 52 85 Z" fill="#1c3422" />
                      <path d="M 34 120 C 34 100, 58 100, 58 120 Z" fill="#4a8b5e" stroke="#1c3422" strokeWidth="1.5" />
                    </g>

                    {/* Right Member */}
                    <g>
                      <rect x="102" y="93" width="4" height="8" fill="#fde6d2" />
                      <circle cx="104" cy="87" r="6.5" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.4" />
                      <path d="M 98 85 C 98 78, 110 78, 110 85 Z" fill="#1c3422" />
                      <path d="M 92 120 C 92 100, 116 100, 116 120 Z" fill="#4a8b5e" stroke="#1c3422" strokeWidth="1.5" />
                    </g>

                    {/* Center Board Chair */}
                    <g>
                      <rect x="72.5" y="87" width="5" height="9" fill="#fde6d2" />
                      <circle cx="75" cy="80" r="8" fill="#fde6d2" stroke="#1c3422" strokeWidth="1.6" />
                      <path d="M 67 78 C 67 69, 83 69, 83 78 Z" fill="#1c3422" />
                      <path d="M 60 120 C 60 96, 90 96, 90 120 Z" fill="#108a00" stroke="#1c3422" strokeWidth="1.8" />
                      <path d="M 72 98 L 75 104 L 78 98" stroke="#ffffff" strokeWidth="1.2" fill="none" />
                    </g>

                    {/* Conference Table in front of members */}
                    <rect x="26" y="106" width="98" height="20" rx="8" fill="#f0f7ee" stroke="#1c3422" strokeWidth="1.8" />
                    <line x1="32" y1="110" x2="118" y2="110" stroke="#108a00" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
                    {/* Tablet/agenda notes on table */}
                    <rect x="69" y="111" width="12" height="7" rx="1.5" fill="#108a00" stroke="#1c3422" strokeWidth="1" />
                    <rect x="40" y="112" width="9" height="5" rx="1" fill="#ffffff" stroke="#1c3422" strokeWidth="0.9" />
                    <rect x="101" y="112" width="9" height="5" rx="1" fill="#ffffff" stroke="#1c3422" strokeWidth="0.9" />
                  </g>
                </g>

                {/* Floating Gavel Authority Stamp (Top Right) */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-6 origin-[124px_44px]">
                  <circle cx="124" cy="44" r="22" fill="#108a00" stroke="#1c3422" strokeWidth="2.2" />
                  {/* Executive Gavel & Sound Block */}
                  <g transform="translate(124, 42) rotate(-28) translate(-124, -42)">
                    {/* Gavel Head */}
                    <rect x="112" y="28" width="24" height="11" rx="3" fill="#ffffff" stroke="#1c3422" strokeWidth="1.6" />
                    {/* Golden brass ring in center */}
                    <rect x="122" y="28" width="4" height="11" fill="#ffd166" />
                    {/* Gavel Handle */}
                    <line x1="124" y1="39" x2="124" y2="57" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" />
                    <circle cx="124" cy="57" r="2" fill="#ffd166" stroke="#1c3422" strokeWidth="0.8" />
                  </g>
                  {/* Round Sound Block underneath */}
                  <ellipse cx="124" cy="56" rx="11" ry="3.5" fill="#ffffff" stroke="#1c3422" strokeWidth="1.4" />
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
                  <rect x="62" y="92" width="116" height="34" rx="6" fill="#f8faf7" stroke="#1c3422" strokeWidth="1.3" />
                  <circle cx="73" cy="104" r="5" fill="#108a00" />
                  <path d="M 71 104 L 72.5 105.5 L 75.5 102.5" stroke="#ffffff" strokeWidth="1.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <line x1="83" y1="104" x2="168" y2="104" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
                  <line x1="83" y1="113" x2="146" y2="113" stroke="#1c3422" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
                </g>

                {/* Left Floating Call Phone Handset Badge */}
                <g className="transition-transform duration-500 ease-out group-hover:scale-105 origin-[46px_80px]">
                  <circle cx="46" cy="80" r="23" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
                  <circle cx="46" cy="80" r="18.5" fill="#108a00" />
                  {/* Flawless Telephone Handset Vector */}
                  <g transform="translate(35.2, 69.2) scale(0.9)">
                    <path
                      d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
                      fill="#ffffff"
                      stroke="#ffffff"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  {/* Voice Broadcast Waves */}
                  <path d="M 72 74 C 75 77, 75 83, 72 86" stroke="#108a00" strokeWidth="1.8" fill="none" strokeLinecap="round" />
                  <path d="M 77 70 C 81 75, 81 85, 77 90" stroke="#108a00" strokeWidth="1.8" fill="none" strokeLinecap="round" opacity="0.6" />
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

