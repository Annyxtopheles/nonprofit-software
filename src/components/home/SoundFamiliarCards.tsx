import React from "react";

export const SoundFamiliarCards: React.FC = () => {
  return (
    <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
      {/* ========================================================
          Card 1: Tool Sprawl
      ======================================================== */}
      <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#14a800]/30 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/20">
        <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
            Tool Sprawl
          </h3>
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
            Donor data in Salesforce, finances in QuickBooks, events in Eventbrite,
            grants in spreadsheets. Your team wastes hours switching between
            systems.
          </p>
        </div>

        {/* Infographic: Tool Sprawl - Disconnected App Silos, Cut Link & Switching Friction */}
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

            {/* Severed / Broken Connection Links */}
            <g opacity="0.65">
              <line x1="50" y1="46" x2="140" y2="46" stroke="#1c3422" strokeWidth="1.8" strokeDasharray="3 4" />
              <line x1="50" y1="116" x2="140" y2="116" stroke="#1c3422" strokeWidth="1.8" strokeDasharray="3 4" />
              <line x1="50" y1="46" x2="50" y2="116" stroke="#1c3422" strokeWidth="1.8" strokeDasharray="3 4" />
              <line x1="140" y1="46" x2="140" y2="116" stroke="#1c3422" strokeWidth="1.8" strokeDasharray="3 4" />
            </g>

            {/* Central Broken Link / Severed Friction Badge */}
            <g className="transition-transform duration-500 ease-out group-hover:scale-110 origin-center">
              <circle cx="95" cy="80" r="15" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
              <path d="M 88 73 L 102 87 M 102 73 L 88 87" stroke="#dc2626" strokeWidth="2.4" strokeLinecap="round" />
            </g>

            {/* Top-Left Island: CRM Cloud */}
            <g className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-translate-y-2 origin-center">
              <rect x="22" y="24" width="50" height="42" rx="8" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
              <text x="47" y="36" fill="#0c180a" fontSize="7.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">CRM</text>
              {/* Cloud Symbol */}
              <path
                d="M 36 52 A 5 5 0 0 1 43 47 A 7 7 0 0 1 54 48 A 5 5 0 0 1 56 53 A 4 4 0 0 1 53 58 L 35 58 A 4 4 0 0 1 36 52 Z"
                fill="#c8f0be"
                stroke="#1c3422"
                strokeWidth="1.6"
              />
            </g>

            {/* Top-Right Island: Spreadsheet */}
            <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-translate-y-2 origin-center">
              <rect x="118" y="22" width="50" height="44" rx="8" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" />
              <rect x="123" y="27" width="40" height="10" rx="3" fill="#14a800" />
              <text x="143" y="34.5" fill="#ffffff" fontSize="6.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">SHEET</text>
              <line x1="123" y1="45" x2="163" y2="45" stroke="#1c3422" strokeWidth="1.6" />
              <line x1="123" y1="54" x2="163" y2="54" stroke="#1c3422" strokeWidth="1.6" />
              <line x1="136" y1="37" x2="136" y2="62" stroke="#1c3422" strokeWidth="1.6" />
              <line x1="150" y1="37" x2="150" y2="62" stroke="#1c3422" strokeWidth="1.6" />
            </g>

            {/* Bottom-Left Island: Finance / QuickBooks Ledger */}
            <g className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:translate-y-2 origin-center">
              <rect x="22" y="94" width="52" height="44" rx="8" fill="#14a800" stroke="#1c3422" strokeWidth="2.2" />
              <rect x="27" y="99" width="42" height="34" rx="5" fill="#ffffff" stroke="#1c3422" strokeWidth="1.6" />
              <text x="37" y="120" fill="#14a800" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">$</text>
              <line x1="46" y1="109" x2="63" y2="109" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="46" y1="116" x2="60" y2="116" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="46" y1="123" x2="62" y2="123" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" />
            </g>

            {/* Bottom-Right Island: Eventbrite Ticket Stub */}
            <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:translate-y-2 origin-center">
              <path
                d="M 118 98 Q 118 94 122 94 L 162 94 Q 166 94 166 98 L 166 110 A 5 5 0 0 0 166 120 L 166 132 Q 166 136 162 136 L 122 136 Q 118 136 118 132 L 118 120 A 5 5 0 0 0 118 110 Z"
                fill="#ffffff"
                stroke="#1c3422"
                strokeWidth="2.2"
              />
              <line x1="140" y1="96" x2="140" y2="134" stroke="#1c3422" strokeWidth="1.6" strokeDasharray="3 3" />
              <circle cx="129" cy="115" r="5" fill="#14a800" />
              <line x1="146" y1="108" x2="159" y2="108" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="146" y1="115" x2="156" y2="115" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" />
              <line x1="146" y1="122" x2="158" y2="122" stroke="#1c3422" strokeWidth="1.8" strokeLinecap="round" />
            </g>

            {/* Action Rays */}
            <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
              <line x1="42" y1="16" x2="36" y2="10" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="168" y1="16" x2="174" y2="10" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="172" y1="142" x2="180" y2="148" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="16" y1="142" x2="10" y2="148" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>

      {/* ========================================================
          Card 2: Data Quality Decay
      ======================================================== */}
      <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#14a800]/30 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/20">
        <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
            Data Quality Decay
          </h3>
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
            Duplicates, incomplete profiles, and stale records silently erode your
            fundraising effectiveness — and nobody catches it until audit season.
          </p>
        </div>

        {/* Infographic: Data Decay - Crumbling Profile, Missing Fields, Duplicate Collisions & Audit Gauge */}
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

            {/* Back Stale Duplicate Card Peeking Out */}
            <g className="transition-transform duration-500 ease-out group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:rotate-6 origin-center">
              <rect
                x="88"
                y="24"
                width="68"
                height="82"
                rx="9"
                fill="#c8f0be"
                stroke="#1c3422"
                strokeWidth="2.2"
                transform="rotate(8 122 65)"
              />
              <g transform="rotate(8 122 65)">
                <circle cx="106" cy="42" r="8" fill="#14a800" opacity="0.4" />
                <line x1="120" y1="40" x2="144" y2="40" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                <line x1="98" y1="60" x2="146" y2="60" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
                <line x1="98" y1="72" x2="134" y2="72" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" opacity="0.4" />
              </g>
            </g>

            {/* Foreground Main Donor Profile Card */}
            <g className="transition-transform duration-500 ease-out group-hover:-translate-x-1.5 origin-center">
              <rect
                x="28"
                y="30"
                width="88"
                height="106"
                rx="10"
                fill="#ffffff"
                stroke="#1c3422"
                strokeWidth="2.4"
              />
              {/* Header Bar */}
              <rect x="28" y="30" width="88" height="20" rx="10" fill="#f4fbf1" />
              <rect x="28" y="40" width="88" height="10" fill="#f4fbf1" />
              <line x1="28" y1="50" x2="116" y2="50" stroke="#1c3422" strokeWidth="1.8" />
              <circle cx="38" cy="40" r="2.5" fill="#ef4444" />
              <circle cx="45" cy="40" r="2.5" fill="#f59e0b" />
              <text x="76" y="43" fill="#1c3422" fontSize="6.5" fontWeight="700" fontFamily="sans-serif">DONOR PROFILE</text>

              {/* Missing Photo Slot (Dashed red outline with ?) */}
              <circle cx="48" cy="70" r="11" fill="#fef2f2" stroke="#ef4444" strokeWidth="1.8" strokeDasharray="3 3" />
              <text x="48" y="74.5" fill="#ef4444" fontSize="11" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">?</text>

              {/* Field 1: Name line with 2x Duplicate pill tag */}
              <line x1="66" y1="65" x2="108" y2="65" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
              <rect x="66" y="71" width="42" height="12" rx="4" fill="#fee2e2" stroke="#ef4444" strokeWidth="1.2" />
              <text x="87" y="79.5" fill="#dc2626" fontSize="6" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">2× DUPLICATE</text>

              {/* Field 2: Missing email slot */}
              <rect x="36" y="89" width="72" height="14" rx="4" fill="#f8fafc" stroke="#dc2626" strokeWidth="1.4" strokeDasharray="3 3" />
              <text x="42" y="99" fill="#dc2626" fontSize="6" fontWeight="800" fontFamily="sans-serif">[MISSING EMAIL]</text>

              {/* Field 3: Stale Address Dotted Line */}
              <line x1="36" y1="114" x2="88" y2="114" stroke="#94a3b8" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 3" />
              <circle cx="102" cy="114" r="3" fill="#f59e0b" />
            </g>

            {/* Floating Audit Alert Badge (Bottom Right) */}
            <g className="transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-6 origin-[140px_108px]">
              <circle cx="140" cy="106" r="22" fill="#14a800" stroke="#1c3422" strokeWidth="2.4" />
              <circle cx="140" cy="106" r="17" fill="#ffffff" />
              {/* Warning Triangle */}
              <polygon points="140,94 150,111 130,111" fill="#ef4444" stroke="#1c3422" strokeWidth="1.5" strokeLinejoin="round" />
              <line x1="140" y1="100" x2="140" y2="105" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="140" cy="108" r="0.9" fill="#ffffff" />
              {/* Audit Alert Tag */}
              <rect x="118" y="120" width="44" height="12" rx="4" fill="#1c3422" />
              <text x="140" y="128.5" fill="#ffffff" fontSize="5.8" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">AUDIT ALERT</text>
            </g>

            {/* Action Rays */}
            <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
              <line x1="22" y1="28" x2="16" y2="22" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="168" y1="56" x2="176" y2="52" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>

      {/* ========================================================
          Card 3: Manual Busywork
      ======================================================== */}
      <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#14a800]/30 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/20">
        <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
            Manual Busywork
          </h3>
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
            Writing thank-you letters, reconciling transactions, preparing board
            reports. Your team&apos;s talent is buried under repetitive tasks.
          </p>
        </div>

        {/* Infographic: Manual Busywork - Overflowing Task Stack, Ticking Clock & Endless Repetition Loop */}
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

            {/* Back Stack Layer 1 (Tilted Soft Green) */}
            <rect
              x="28"
              y="54"
              width="60"
              height="72"
              rx="6"
              fill="#c8f0be"
              stroke="#1c3422"
              strokeWidth="2.2"
              transform="rotate(-9 58 90)"
            />

            {/* Back Stack Layer 2 (Tilted Darker Green) */}
            <rect
              x="36"
              y="48"
              width="60"
              height="72"
              rx="6"
              fill="#14a800"
              stroke="#1c3422"
              strokeWidth="2.2"
              transform="rotate(6 66 84)"
            />

            {/* Front Paper: Manual Thank-You Letter / Task Sheet */}
            <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5 origin-center">
              <rect
                x="32"
                y="42"
                width="64"
                height="82"
                rx="7"
                fill="#ffffff"
                stroke="#1c3422"
                strokeWidth="2.4"
              />
              {/* Thank You Header Stamp with Heart */}
              <rect x="40" y="50" width="13" height="13" rx="3" fill="#e7f5e3" stroke="#14a800" strokeWidth="1.4" />
              <path
                d="M 43.5 56.5 C 43.5 54.8 45.5 53.5 46.5 55 C 47.5 53.5 49.5 54.8 49.5 56.5 C 49.5 58.5 46.5 60.5 46.5 60.5 C 46.5 60.5 43.5 58.5 43.5 56.5 Z"
                fill="#14a800"
              />
              <line x1="58" y1="54" x2="88" y2="54" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
              <line x1="58" y1="60" x2="82" y2="60" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />

              {/* Repetitive manual lines */}
              <line x1="40" y1="72" x2="88" y2="72" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
              <line x1="40" y1="80" x2="86" y2="80" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
              <line x1="40" y1="88" x2="82" y2="88" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
              <line x1="40" y1="96" x2="76" y2="96" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
              <line x1="40" y1="104" x2="68" y2="104" stroke="#14a800" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
            </g>

            {/* Tilted Pen / Stylus */}
            <g className="transition-transform duration-500 ease-out group-hover:translate-x-1.5 group-hover:-translate-y-2 group-hover:rotate-12 origin-[82px_104px]">
              <rect x="76" y="74" width="7" height="38" rx="2.5" fill="#14a800" stroke="#1c3422" strokeWidth="1.8" transform="rotate(26 79 93)" />
              <polygon points="72,112 75,117 80,113" fill="#1c3422" />
            </g>

            {/* Right: Ticking Clock */}
            <g className="transition-transform duration-500 ease-out group-hover:rotate-12 origin-[140px_72px]">
              <circle cx="140" cy="72" r="27" fill="#ffffff" stroke="#1c3422" strokeWidth="2.6" />
              <circle cx="140" cy="72" r="22" fill="#f4fbf1" />
              {/* Top Stopwatch Knob */}
              <rect x="137" y="40" width="6" height="5" rx="1.5" fill="#1c3422" />
              <line x1="134" y1="40" x2="146" y2="40" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
              {/* Clock Dial Marks */}
              <circle cx="140" cy="55" r="1.5" fill="#1c3422" />
              <circle cx="157" cy="72" r="1.5" fill="#1c3422" />
              <circle cx="140" cy="89" r="1.5" fill="#1c3422" />
              <circle cx="123" cy="72" r="1.5" fill="#1c3422" />
              {/* Hands showing time pressure */}
              <line x1="140" y1="72" x2="140" y2="58" stroke="#1c3422" strokeWidth="2.4" strokeLinecap="round" />
              <line x1="140" y1="72" x2="152" y2="68" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
              <circle cx="140" cy="72" r="3" fill="#1c3422" />
              {/* Ticking Rays */}
              <line x1="166" y1="56" x2="173" y2="50" stroke="#14a800" strokeWidth="2" strokeLinecap="round" />
              <line x1="170" y1="66" x2="178" y2="64" stroke="#14a800" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Endless Loop Arrow Badge (Bottom Right) */}
            <g className="transition-transform duration-500 ease-out group-hover:rotate-45 origin-[140px_120px]">
              <circle cx="140" cy="120" r="15" fill="#14a800" stroke="#1c3422" strokeWidth="2.2" />
              <path d="M 133 120 A 7 7 0 1 1 147 120" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              <polygon points="146,114 151,120 144,122" fill="#ffffff" />
              <path d="M 147 120 A 7 7 0 1 1 133 120" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
              <polygon points="134,126 129,120 136,118" fill="#ffffff" />
            </g>

            {/* Action Rays */}
            <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
              <line x1="20" y1="46" x2="14" y2="40" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="26" y1="36" x2="22" y2="28" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>

      {/* ========================================================
          Card 4: No Single Source of Truth
      ======================================================== */}
      <div className="group relative flex flex-col sm:flex-row items-center justify-between gap-5 overflow-hidden rounded-3xl border border-[#14a800]/30 bg-white p-6 sm:p-7 md:p-8 min-h-[220px] shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#14a800] hover:shadow-lg hover:shadow-[#14a800]/20">
        <div className="relative z-10 flex-1 max-w-full sm:max-w-[56%] md:max-w-[58%] text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-[#0c180a]">
            No Single Source of Truth
          </h3>
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-600 text-pretty">
            The ED asks &ldquo;how are we doing?&rdquo; and gets five different
            answers from five different systems.
          </p>
        </div>

        {/* Infographic: No Single Truth - Conflicting Directional Signposts with Contradictory Metric Numbers */}
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

            {/* Central Vertical Signpost */}
            <rect x="91" y="36" width="8" height="110" rx="3" fill="#1c3422" />
            <ellipse cx="95" cy="144" rx="22" ry="6" fill="#c8f0be" stroke="#1c3422" strokeWidth="2" />

            {/* Top Thought Bubble: Puzzled Questions "? ? ?" */}
            <g className="transition-transform duration-500 ease-out group-hover:-translate-y-1.5 origin-center">
              <rect x="68" y="14" width="54" height="24" rx="12" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" />
              <text x="95" y="30.5" fill="#14a800" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">? ? ?</text>
            </g>

            {/* Sign 1: CRM says "$62,000" (Pointing Left, Green) */}
            <g className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:-rotate-3 origin-[95px_54px]">
              <path d="M 28 54 L 42 42 L 95 42 L 95 66 L 42 66 Z" fill="#14a800" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
              <text x="64" y="58" fill="#ffffff" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">$62,000</text>
              <path d="M 38 56 L 41 52 L 44 56" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

            {/* Sign 2: QuickBooks says "$45,000" (Pointing Right, White) */}
            <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:rotate-3 origin-[95px_78px]">
              <path d="M 162 78 L 148 66 L 95 66 L 95 90 L 148 90 Z" fill="#ffffff" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
              <text x="126" y="82" fill="#1c3422" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">$45,000</text>
              <line x1="150" y1="78" x2="156" y2="78" stroke="#1c3422" strokeWidth="2" strokeLinecap="round" />
            </g>

            {/* Sign 3: Spreadsheet says "$38,500" (Pointing Left, Mint) */}
            <g className="transition-transform duration-500 ease-out group-hover:-translate-x-2 group-hover:rotate-2 origin-[95px_102px]">
              <path d="M 32 102 L 46 90 L 95 90 L 95 114 L 46 114 Z" fill="#c8f0be" stroke="#1c3422" strokeWidth="2.2" strokeLinejoin="round" />
              <text x="66" y="106" fill="#0c180a" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">$38,500</text>
              <path d="M 40 100 L 40 104 M 37 102 L 40 105 L 43 102" stroke="#dc2626" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            </g>

            {/* Sign 4: Portal says "$51,200" (Pointing Right, White) */}
            <g className="transition-transform duration-500 ease-out group-hover:translate-x-2 group-hover:-rotate-2 origin-[95px_122px]">
              <path d="M 156 122 L 144 112 L 95 112 L 95 132 L 144 132 Z" fill="#ffffff" stroke="#1c3422" strokeWidth="2" strokeLinejoin="round" />
              <text x="123" y="125.5" fill="#1c3422" fontSize="9" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">$51,200</text>
            </g>

            {/* Discrepancy Indicator Badge "≠" (Not Equal) */}
            <g className="transition-transform duration-500 ease-out group-hover:scale-110 origin-[162px_42px]">
              <circle cx="162" cy="40" r="14" fill="#fee2e2" stroke="#ef4444" strokeWidth="2.2" />
              <text x="162" y="46" fill="#dc2626" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">≠</text>
            </g>

            {/* Action Rays */}
            <g className="transition-transform duration-300 ease-out group-hover:scale-110 origin-center">
              <line x1="44" y1="36" x2="38" y2="30" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="52" y1="28" x2="50" y2="20" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
              <line x1="168" y1="140" x2="176" y2="144" stroke="#1c3422" strokeWidth="2.2" strokeLinecap="round" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SoundFamiliarCards;

