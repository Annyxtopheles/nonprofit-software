import React, { useState } from "react";

interface NodeData {
  id: string;
  titleLines: string[];
  color: string;
  iconBg: string;
  rectX: number;
  rectY: number;
  width: number;
  height: number;
  iconCx: number;
  iconCy: number;
  textX: number;
  lineY1: number;
  lineY2?: number;
  curvePath: string;
  floatClass: string;
  dur: string;
  delay?: string;
  iconType: "database" | "payments" | "email" | "events" | "accounting" | "grants" | "volunteers";
}

const NODES: NodeData[] = [
  // 1. CRM / Donor Database (Top Center)
  {
    id: "crm",
    titleLines: ["CRM / Donor", "Database"],
    color: "#2563eb",
    iconBg: "#eff6ff",
    rectX: 255,
    rectY: 28,
    width: 190,
    height: 64,
    iconCx: 284,
    iconCy: 60,
    textX: 312,
    lineY1: 54,
    lineY2: 70,
    curvePath: "M 350 245 Q 366 168 350 92",
    floatClass: "animate-float-pill-a",
    dur: "6.2s",
    iconType: "database",
  },
  // 2. Payments & Donations (Top Right)
  {
    id: "payments",
    titleLines: ["Payments & Donations"],
    color: "#108a00",
    iconBg: "#e7f5e3",
    rectX: 446,
    rectY: 116,
    width: 200,
    height: 56,
    iconCx: 476,
    iconCy: 144,
    textX: 504,
    lineY1: 148,
    curvePath: "M 396 264 Q 442 228 456 172",
    floatClass: "animate-float-pill-b",
    dur: "6.8s",
    delay: "0.8s",
    iconType: "payments",
  },
  // 3. Email & Communications (Middle Right)
  {
    id: "email",
    titleLines: ["Email &", "Communications"],
    color: "#ea580c",
    iconBg: "#fff7ed",
    rectX: 476,
    rectY: 292,
    width: 192,
    height: 64,
    iconCx: 505,
    iconCy: 324,
    textX: 532,
    lineY1: 318,
    lineY2: 334,
    curvePath: "M 415 310 Q 448 290 476 324",
    floatClass: "animate-float-pill-c",
    dur: "5.8s",
    delay: "1.5s",
    iconType: "email",
  },
  // 4. Events & Registration (Bottom Right)
  {
    id: "events",
    titleLines: ["Events & Registration"],
    color: "#9333ea",
    iconBg: "#faf5ff",
    rectX: 374,
    rectY: 486,
    width: 200,
    height: 56,
    iconCx: 404,
    iconCy: 514,
    textX: 432,
    lineY1: 518,
    curvePath: "M 390 355 Q 436 414 445 486",
    floatClass: "animate-float-pill-a",
    dur: "7.2s",
    delay: "2.1s",
    iconType: "events",
  },
  // 5. Accounting & Finance (Bottom Left)
  {
    id: "accounting",
    titleLines: ["Accounting & Finance"],
    color: "#0891b2",
    iconBg: "#ecfeff",
    rectX: 126,
    rectY: 486,
    width: 196,
    height: 56,
    iconCx: 156,
    iconCy: 514,
    textX: 184,
    lineY1: 518,
    curvePath: "M 310 355 Q 264 414 255 486",
    floatClass: "animate-float-pill-b",
    dur: "7.6s",
    delay: "0.5s",
    iconType: "accounting",
  },
  // 6. Grant Portals (Middle Left)
  {
    id: "grants",
    titleLines: ["Grant Portals"],
    color: "#e11d48",
    iconBg: "#fff1f2",
    rectX: 32,
    rectY: 296,
    width: 180,
    height: 56,
    iconCx: 62,
    iconCy: 324,
    textX: 90,
    lineY1: 328,
    curvePath: "M 285 310 Q 252 290 212 324",
    floatClass: "animate-float-pill-c",
    dur: "6.0s",
    delay: "1.8s",
    iconType: "grants",
  },
  // 7. Volunteer Management (Top Left)
  {
    id: "volunteers",
    titleLines: ["Volunteer", "Management"],
    color: "#d97706",
    iconBg: "#fffbeb",
    rectX: 52,
    rectY: 116,
    width: 190,
    height: 64,
    iconCx: 82,
    iconCy: 148,
    textX: 110,
    lineY1: 142,
    lineY2: 158,
    curvePath: "M 304 264 Q 258 228 242 174",
    floatClass: "animate-float-pill-b",
    dur: "6.5s",
    delay: "1.1s",
    iconType: "volunteers",
  },
];

export const ControlTowerHubGraphic: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const renderIcon = (type: NodeData["iconType"], cx: number, cy: number, color: string) => {
    switch (type) {
      case "database":
        return (
          <g transform={`translate(${cx - 9.5}, ${cy - 9.5})`} stroke={color} strokeWidth="1.7" fill="none">
            <ellipse cx="9.5" cy="4.5" rx="7.5" ry="3" />
            <path d="M2 4.5v5c0 1.6 3.4 3 7.5 3s7.5-1.4 7.5-3v-5" />
            <path d="M2 9.5v5c0 1.6 3.4 3 7.5 3s7.5-1.4 7.5-3v-5" />
          </g>
        );
      case "payments":
        return (
          <g transform={`translate(${cx - 9.5}, ${cy - 9.5})`} stroke={color} strokeWidth="1.7" fill="none">
            <circle cx="9.5" cy="9.5" r="8" />
            <path d="M9.5 5v9M11.8 7.2H8.2a1.7 1.7 0 0 0 0 3.4h2.6a1.7 1.7 0 0 1 0 3.4H7.2" strokeLinecap="round" />
          </g>
        );
      case "email":
        return (
          <g transform={`translate(${cx - 9.5}, ${cy - 9.5})`} stroke={color} strokeWidth="1.7" fill="none">
            <rect x="2" y="4" width="15" height="11" rx="2" />
            <path d="M2 6l7.5 5.2 7.5-5.2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        );
      case "events":
        return (
          <g transform={`translate(${cx - 9.5}, ${cy - 9.5})`} stroke={color} strokeWidth="1.7" fill="none">
            <rect x="2" y="4" width="15" height="12" rx="2" />
            <line x1="6" y1="2" x2="6" y2="5" strokeLinecap="round" />
            <line x1="13" y1="2" x2="13" y2="5" strokeLinecap="round" />
            <line x1="2" y1="8" x2="17" y2="8" />
            <circle cx="6" cy="11.5" r="0.9" fill={color} />
            <circle cx="9.5" cy="11.5" r="0.9" fill={color} />
            <circle cx="13" cy="11.5" r="0.9" fill={color} />
          </g>
        );
      case "accounting":
        return (
          <g transform={`translate(${cx - 9.5}, ${cy - 9.5})`} stroke={color} strokeWidth="1.7" fill="none">
            <rect x="2.5" y="2" width="14" height="15" rx="2" />
            <rect x="4.5" y="4.5" width="10" height="3" rx="0.5" fill={color} fillOpacity="0.25" />
            <circle cx="6.5" cy="10.5" r="0.9" fill={color} />
            <circle cx="9.5" cy="10.5" r="0.9" fill={color} />
            <circle cx="12.5" cy="10.5" r="0.9" fill={color} />
            <circle cx="6.5" cy="13.5" r="0.9" fill={color} />
            <circle cx="9.5" cy="13.5" r="0.9" fill={color} />
            <circle cx="12.5" cy="13.5" r="0.9" fill={color} />
          </g>
        );
      case "grants":
        return (
          <g transform={`translate(${cx - 9.5}, ${cy - 9.5})`} stroke={color} strokeWidth="1.7" fill="none">
            <path d="M4.5 2.5h6.5l4.5 4.5v9a1.8 1.8 0 0 1-1.8 1.8H4.5A1.8 1.8 0 0 1 2.7 16V4.3A1.8 1.8 0 0 1 4.5 2.5z" />
            <path d="M11 2.5v4.5h4.5" />
            <line x1="6" y1="10" x2="13" y2="10" strokeLinecap="round" />
            <line x1="6" y1="13.5" x2="10.5" y2="13.5" strokeLinecap="round" />
          </g>
        );
      case "volunteers":
        return (
          <g transform={`translate(${cx - 9.5}, ${cy - 9.5})`} stroke={color} strokeWidth="1.7" fill="none">
            <path d="M2.5 13c1.2-1.2 3.5-2.2 7-2.2s5.8 1 7 2.2" strokeLinecap="round" />
            <path d="M9.5 3a2.8 2.8 0 0 0-2.8 2.8c0 2.2 2.8 4 2.8 4s2.8-1.8 2.8-4A2.8 2.8 0 0 0 9.5 3z" fill={color} fillOpacity="0.25" />
          </g>
        );
    }
  };

  return (
    <div className="relative w-full max-w-[660px] mx-auto select-none">
      <svg
        viewBox="0 0 700 580"
        className="w-full h-auto overflow-visible drop-shadow-[0_8px_30px_rgba(16,138,0,0.06)]"
      >
        <defs>
          {/* Soft Card Drop Shadow */}
          <filter id="hubCardShadow" x="-15%" y="-20%" width="130%" height="150%">
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000000" floodOpacity="0.06" />
            <feDropShadow dx="0" dy="1" stdDeviation="3" floodColor="#000000" floodOpacity="0.04" />
          </filter>

          {/* Central Hub Prominent Glow Shadow */}
          <filter id="hubCenterShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="0" dy="6" stdDeviation="14" floodColor="#108a00" floodOpacity="0.16" />
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="#000000" floodOpacity="0.05" />
          </filter>

          {/* Glowing particle glow filter */}
          <filter id="pulseGlow" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>

          {/* Central Hub subtle inner gradient */}
          <linearGradient id="hubCenterGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#f8fcf7" />
            <stop offset="100%" stopColor="#ffffff" />
          </linearGradient>
        </defs>

        {/* 1. Concentric Background Radar Wave Pulses from Center (350, 310) */}
        <g>
          {/* Expanding gentle radar wave pulses (very soft and subtle) */}
          <circle cx="350" cy="310" r="65" fill="#108a00" opacity="0">
            <animate attributeName="r" values="62;150" dur="5.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.08;0" dur="5.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="310" r="65" fill="#108a00" opacity="0">
            <animate attributeName="r" values="62;150" dur="5.2s" begin="1.7s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.08;0" dur="5.2s" begin="1.7s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="310" r="65" fill="#108a00" opacity="0">
            <animate attributeName="r" values="62;150" dur="5.2s" begin="3.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.08;0" dur="5.2s" begin="3.4s" repeatCount="indefinite" />
          </circle>

          {/* Soft neutral aura rings around central hub */}
          <circle
            cx="350"
            cy="310"
            r="94"
            fill="#f8faf6"
            fillOpacity="0.75"
            stroke="#e2ebe0"
            strokeWidth="1.4"
          />
          <circle
            cx="350"
            cy="310"
            r="78"
            fill="#edf5ec"
            fillOpacity="0.8"
            stroke="#d4e6d0"
            strokeWidth="1.4"
          />
        </g>

        {/* 2. Outer Orbital Dashed Guide Circle */}
        <circle
          cx="350"
          cy="310"
          r="215"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1.6"
          strokeDasharray="5 7"
          opacity="0.85"
        />

        {/* 3. Connecting Organic Spoke Curves & Slow Animated Data Particles */}
        {NODES.map((node) => {
          const isHovered = hoveredNode === node.id;
          const pathId = `spoke-path-${node.id}`;

          return (
            <g key={node.id}>
              {/* Invisible path for animateMotion */}
              <path
                id={pathId}
                d={node.curvePath}
                fill="none"
              />

              {/* Faint static organic guide trace */}
              <path
                d={node.curvePath}
                fill="none"
                stroke={node.color}
                strokeWidth="1.5"
                strokeOpacity={isHovered ? 0.35 : 0.18}
                className="transition-all duration-300"
              />

              {/* Animated Dashed Stream Line following the organic curve */}
              <path
                d={node.curvePath}
                fill="none"
                stroke={node.color}
                strokeWidth={isHovered ? 2.8 : 2.0}
                strokeDasharray="6 6"
                strokeLinecap="round"
                opacity={isHovered ? 1 : 0.82}
                className="transition-all duration-300"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-24"
                  dur="3.6s"
                  repeatCount="indefinite"
                />
              </path>

              {/* Glowing Data Flow Packet Particle traveling gracefully and slowly */}
              <circle r={isHovered ? 6 : 5} fill={node.color} filter="url(#pulseGlow)">
                <animateMotion
                  dur={node.dur}
                  repeatCount="indefinite"
                  keyPoints="0;1;0"
                  keyTimes="0;0.5;1"
                  calcMode="spline"
                  keySplines="0.4 0 0.2 1; 0.4 0 0.2 1"
                >
                  <mpath href={`#${pathId}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}

        {/* 4. Prominent Central Control Tower Hub Badge (Polished Architectural Tower & Beacon) */}
        <g className="cursor-default select-none">
          {/* Large Core White Badge Circle: radius 65 (diameter 130px) */}
          <circle
            cx="350"
            cy="310"
            r="65"
            fill="url(#hubCenterGradient)"
            stroke="#108a00"
            strokeWidth="3.2"
            filter="url(#hubCenterShadow)"
          />

          {/* Inner subtle concentric ring accent */}
          <circle
            cx="350"
            cy="310"
            r="57"
            fill="none"
            stroke="#dcf0d9"
            strokeWidth="1.2"
          />

          {/* Refined Architectural Control Tower Vector Icon */}
          <g>
            {/* Pulsing Beacon Light & Signal Waves at the Mast Top */}
            <circle cx="350" cy="256" r="4.5" fill="#108a00" opacity="0.25">
              <animate attributeName="r" values="3;6.5;3" dur="2.4s" repeatCount="indefinite" />
              <animate attributeName="opacity" values="0.5;0;0.5" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle cx="350" cy="256" r="2.5" fill="#108a00" />

            {/* Left & Right Radiating Broadcast Waves */}
            <path
              d="M 342 254 A 8 8 0 0 0 342 264"
              stroke="#108a00"
              strokeWidth="1.7"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M 338 251 A 13 13 0 0 0 338 267"
              stroke="#108a00"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />
            <path
              d="M 358 254 A 8 8 0 0 1 358 264"
              stroke="#108a00"
              strokeWidth="1.7"
              strokeLinecap="round"
              fill="none"
              opacity="0.85"
            />
            <path
              d="M 362 251 A 13 13 0 0 1 362 267"
              stroke="#108a00"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
              opacity="0.5"
            />

            {/* Antenna Mast */}
            <line x1="350" y1="257" x2="350" y2="265" stroke="#108a00" strokeWidth="2.2" strokeLinecap="round" />

            {/* Panoramic Glass Observation Room / Control Cab */}
            <path
              d="M 336 266 L 333 276 L 367 276 L 364 266 Z"
              fill="#eaf7e9"
              stroke="#108a00"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Cab Roof Cap */}
            <line x1="334" y1="266" x2="366" y2="266" stroke="#108a00" strokeWidth="2.4" strokeLinecap="round" />
            {/* Window Mullions */}
            <line x1="344.5" y1="266" x2="343.5" y2="276" stroke="#108a00" strokeWidth="1.4" />
            <line x1="350" y1="266" x2="350" y2="276" stroke="#108a00" strokeWidth="1.4" />
            <line x1="355.5" y1="266" x2="356.5" y2="276" stroke="#108a00" strokeWidth="1.4" />

            {/* Catwalk Gallery Deck */}
            <line x1="330" y1="276" x2="370" y2="276" stroke="#108a00" strokeWidth="2.2" strokeLinecap="round" />

            {/* Tapered Tower Shaft with Tech Blades */}
            <path
              d="M 338 276 L 336 296 L 364 296 L 362 276 Z"
              fill="#f7fbf6"
              stroke="#108a00"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            {/* Horizontal Server Rails & Core Indicators */}
            <line x1="340" y1="282" x2="360" y2="282" stroke="#108a00" strokeWidth="1.4" strokeDasharray="2.5 2.5" />
            <line x1="339" y1="288" x2="361" y2="288" stroke="#108a00" strokeWidth="1.4" strokeDasharray="2.5 2.5" />
            <circle cx="350" cy="282" r="1.3" fill="#108a00" />
            <circle cx="350" cy="288" r="1.3" fill="#108a00" />

            {/* Stable Foundation Plinth */}
            <rect x="331" y="296" width="38" height="6" rx="2" fill="#108a00" />
          </g>

          {/* Central Label matching software reference */}
          <text
            x="350"
            y="323"
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#001E00"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="-0.2"
          >
            Control Tower
          </text>

          {/* Live System Pulsing Status Badge */}
          <g transform="translate(350, 336)">
            <rect
              x="-36"
              y="-7"
              width="72"
              height="14"
              rx="7"
              fill="#e7f5e3"
              stroke="#bce5b5"
              strokeWidth="0.8"
            />
            <circle cx="-25" cy="0" r="2.2" fill="#108a00">
              <animate attributeName="opacity" values="1;0.35;1" dur="2s" repeatCount="indefinite" />
            </circle>
            <text
              x="-18"
              y="2.8"
              fontSize="7.5"
              fontWeight="700"
              fill="#108a00"
              fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              letterSpacing="0.5"
            >
              NONPROFIT AI
            </text>
          </g>
        </g>

        {/* 5. The 7 Satellite Module Cards with Natural Floating Animation */}
        {NODES.map((node) => {
          const isHovered = hoveredNode === node.id;

          return (
            <g
              key={node.id}
              className={`cursor-pointer ${node.floatClass}`}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              <g
                className="transition-transform duration-300"
                transform={isHovered ? "scale(1.025)" : undefined}
                style={{ transformOrigin: `${node.rectX + node.width / 2}px ${node.rectY + node.height / 2}px` }}
              >
                {/* Card Capsule Rect with ample width and height */}
                <rect
                  x={node.rectX}
                  y={node.rectY}
                  width={node.width}
                  height={node.height}
                  rx="18"
                  fill="#ffffff"
                  stroke={isHovered ? node.color : "#e2e8f0"}
                  strokeWidth={isHovered ? 2 : 1.2}
                  filter="url(#hubCardShadow)"
                  className="transition-all duration-200"
                />

                {/* Left Circular Icon Background */}
                <circle
                  cx={node.iconCx}
                  cy={node.iconCy}
                  r="17"
                  fill={node.iconBg}
                />

                {/* Render Vector Icon inside circular badge */}
                {renderIcon(node.iconType, node.iconCx, node.iconCy, node.color)}

                {/* Title Text (1 or 2 lines centered comfortably) */}
                <text
                  x={node.textX}
                  y={node.lineY1}
                  fontSize="13"
                  fontWeight="600"
                  fill="#0c180a"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  letterSpacing="-0.2"
                >
                  {node.titleLines[0]}
                </text>
                {node.titleLines[1] && (
                  <text
                    x={node.textX}
                    y={node.lineY2}
                    fontSize="13"
                    fontWeight="600"
                    fill="#0c180a"
                    fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                    letterSpacing="-0.2"
                  >
                    {node.titleLines[1]}
                  </text>
                )}
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
