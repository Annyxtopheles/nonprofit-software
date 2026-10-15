import React, { useState } from "react";

interface NodeData {
  id: string;
  titleLines: string[];
  status: "Connected" | "Available";
  color: string;
  iconBg: string;
  statusColor: string;
  rectX: number;
  rectY: number;
  width: number;
  height: number;
  iconCx: number;
  iconCy: number;
  textX: number;
  lineY1: number;
  lineY2?: number;
  dotX: number;
  dotY: number;
  statusTextX: number;
  statusTextY: number;
  spokeX1: number;
  spokeY1: number;
  spokeX2: number;
  spokeY2: number;
  dur: string;
  delay?: string;
  iconType: "database" | "payments" | "email" | "events" | "accounting" | "grants" | "volunteers";
}

const NODES: NodeData[] = [
  // 1. CRM / Donor Database (Top Center)
  {
    id: "crm",
    titleLines: ["CRM / Donor", "Database"],
    status: "Connected",
    color: "#2563eb",
    iconBg: "#eff6ff",
    statusColor: "#2563eb",
    rectX: 255,
    rectY: 28,
    width: 190,
    height: 68,
    iconCx: 284,
    iconCy: 62,
    textX: 312,
    lineY1: 52,
    lineY2: 67,
    dotX: 315,
    dotY: 81,
    statusTextX: 324,
    statusTextY: 84,
    spokeX1: 350,
    spokeY1: 245,
    spokeX2: 350,
    spokeY2: 96,
    dur: "6.2s",
    iconType: "database",
  },
  // 2. Payments & Donations (Top Right)
  {
    id: "payments",
    titleLines: ["Payments & Donations"],
    status: "Connected",
    color: "#108a00",
    iconBg: "#e7f5e3",
    statusColor: "#108a00",
    rectX: 446,
    rectY: 114,
    width: 200,
    height: 60,
    iconCx: 476,
    iconCy: 144,
    textX: 504,
    lineY1: 139,
    dotX: 507,
    dotY: 156,
    statusTextX: 516,
    statusTextY: 159,
    spokeX1: 396,
    spokeY1: 264,
    spokeX2: 456,
    spokeY2: 174,
    dur: "6.8s",
    delay: "0.8s",
    iconType: "payments",
  },
  // 3. Email & Communications (Middle Right)
  {
    id: "email",
    titleLines: ["Email &", "Communications"],
    status: "Connected",
    color: "#ea580c",
    iconBg: "#fff7ed",
    statusColor: "#ea580c",
    rectX: 476,
    rectY: 290,
    width: 192,
    height: 68,
    iconCx: 505,
    iconCy: 324,
    textX: 532,
    lineY1: 314,
    lineY2: 329,
    dotX: 535,
    dotY: 343,
    statusTextX: 544,
    statusTextY: 346,
    spokeX1: 415,
    spokeY1: 310,
    spokeX2: 476,
    spokeY2: 324,
    dur: "5.8s",
    delay: "1.5s",
    iconType: "email",
  },
  // 4. Events & Registration (Bottom Right)
  {
    id: "events",
    titleLines: ["Events & Registration"],
    status: "Connected",
    color: "#9333ea",
    iconBg: "#faf5ff",
    statusColor: "#9333ea",
    rectX: 374,
    rectY: 486,
    width: 200,
    height: 60,
    iconCx: 404,
    iconCy: 516,
    textX: 432,
    lineY1: 511,
    dotX: 435,
    dotY: 528,
    statusTextX: 444,
    statusTextY: 531,
    spokeX1: 390,
    spokeY1: 355,
    spokeX2: 445,
    spokeY2: 486,
    dur: "7.2s",
    delay: "2.1s",
    iconType: "events",
  },
  // 5. Accounting & Finance (Bottom Left)
  {
    id: "accounting",
    titleLines: ["Accounting & Finance"],
    status: "Available",
    color: "#0891b2",
    iconBg: "#ecfeff",
    statusColor: "#64748b",
    rectX: 126,
    rectY: 486,
    width: 196,
    height: 60,
    iconCx: 156,
    iconCy: 516,
    textX: 184,
    lineY1: 511,
    dotX: 187,
    dotY: 528,
    statusTextX: 196,
    statusTextY: 531,
    spokeX1: 310,
    spokeY1: 355,
    spokeX2: 255,
    spokeY2: 486,
    dur: "7.6s",
    delay: "0.5s",
    iconType: "accounting",
  },
  // 6. Grant Portals (Middle Left)
  {
    id: "grants",
    titleLines: ["Grant Portals"],
    status: "Available",
    color: "#e11d48",
    iconBg: "#fff1f2",
    statusColor: "#64748b",
    rectX: 32,
    rectY: 294,
    width: 180,
    height: 60,
    iconCx: 62,
    iconCy: 324,
    textX: 90,
    lineY1: 319,
    dotX: 93,
    dotY: 336,
    statusTextX: 102,
    statusTextY: 339,
    spokeX1: 285,
    spokeY1: 310,
    spokeX2: 212,
    spokeY2: 324,
    dur: "6.0s",
    delay: "1.8s",
    iconType: "grants",
  },
  // 7. Volunteer Management (Top Left)
  {
    id: "volunteers",
    titleLines: ["Volunteer", "Management"],
    status: "Connected",
    color: "#d97706",
    iconBg: "#fffbeb",
    statusColor: "#d97706",
    rectX: 52,
    rectY: 114,
    width: 190,
    height: 68,
    iconCx: 82,
    iconCy: 148,
    textX: 110,
    lineY1: 138,
    lineY2: 153,
    dotX: 113,
    dotY: 167,
    statusTextX: 122,
    statusTextY: 170,
    spokeX1: 304,
    spokeY1: 264,
    spokeX2: 242,
    spokeY2: 174,
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
        </defs>

        {/* 1. Concentric Background Radar Wave Pulses from Center (350, 310) */}
        <g>
          {/* Expanding gentle radar wave pulses */}
          <circle cx="350" cy="310" r="65" fill="#108a00" opacity="0">
            <animate attributeName="r" values="62;155" dur="4.8s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.26;0" dur="4.8s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="310" r="65" fill="#108a00" opacity="0">
            <animate attributeName="r" values="62;155" dur="4.8s" begin="1.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.26;0" dur="4.8s" begin="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="350" cy="310" r="65" fill="#108a00" opacity="0">
            <animate attributeName="r" values="62;155" dur="4.8s" begin="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.26;0" dur="4.8s" begin="3.2s" repeatCount="indefinite" />
          </circle>

          {/* Prominent Outer Aura Rings (scaled up to match software reference) */}
          <circle
            cx="350"
            cy="310"
            r="96"
            fill="#eef8eb"
            fillOpacity="0.85"
            stroke="#c8ecc0"
            strokeWidth="1.6"
          />
          <circle
            cx="350"
            cy="310"
            r="78"
            fill="#e2f5dc"
            fillOpacity="0.92"
            stroke="#a3e698"
            strokeWidth="1.6"
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

        {/* 3. Connecting Spoke Lines & Slow Animated Data Particles */}
        {NODES.map((node) => {
          const isHovered = hoveredNode === node.id;
          const pathId = `spoke-path-${node.id}`;

          return (
            <g key={node.id}>
              {/* Invisible path for animateMotion */}
              <path
                id={pathId}
                d={`M ${node.spokeX1} ${node.spokeY1} L ${node.spokeX2} ${node.spokeY2}`}
                fill="none"
              />

              {/* Animated Dashed Ray Line with calm, slow streaming animation */}
              <line
                x1={node.spokeX1}
                y1={node.spokeY1}
                x2={node.spokeX2}
                y2={node.spokeY2}
                stroke={node.color}
                strokeWidth={isHovered ? 3.0 : 2.0}
                strokeDasharray="6 6"
                opacity={isHovered ? 1 : 0.8}
                className="transition-all duration-300"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-24"
                  dur="3.6s"
                  repeatCount="indefinite"
                />
              </line>

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

        {/* 4. Prominent Central Control Tower Hub Badge (Exact size matching software screenshot) */}
        <g className="cursor-default select-none">
          {/* Large Core White Badge Circle: radius 65 (diameter 130px) */}
          <circle
            cx="350"
            cy="310"
            r="65"
            fill="#ffffff"
            stroke="#108a00"
            strokeWidth="3.2"
            filter="url(#hubCenterShadow)"
          />

          {/* Large Control Tower Building Icon */}
          <g transform="translate(337, 268)">
            {/* Main Tower structure */}
            <rect
              x="2"
              y="4"
              width="22"
              height="30"
              rx="4"
              fill="#eef8eb"
              stroke="#108a00"
              strokeWidth="2.4"
            />
            {/* Server blade lines */}
            <line x1="7" y1="11" x2="19" y2="11" stroke="#108a00" strokeWidth="2" strokeLinecap="round" />
            <line x1="7" y1="18" x2="19" y2="18" stroke="#108a00" strokeWidth="2" strokeLinecap="round" />
            <line x1="7" y1="25" x2="19" y2="25" stroke="#108a00" strokeWidth="2" strokeLinecap="round" />
            {/* Antenna nodes */}
            <circle cx="-1" cy="8" r="1.6" fill="#108a00" />
            <circle cx="27" cy="8" r="1.6" fill="#108a00" />
            <path
              d="M -2 4 C -2 10, 1 12, 2 12"
              stroke="#108a00"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 28 4 C 28 10, 25 12, 24 12"
              stroke="#108a00"
              strokeWidth="1.8"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Central Label matching software reference */}
          <text
            x="350"
            y="326"
            textAnchor="middle"
            fontSize="12.5"
            fontWeight="700"
            fill="#0c180a"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="-0.2"
          >
            Control Tower
          </text>
        </g>

        {/* 5. The 7 Satellite Module Cards with Ample Internal Spacing */}
        {NODES.map((node) => {
          const isHovered = hoveredNode === node.id;

          return (
            <g
              key={node.id}
              className="cursor-pointer transition-transform duration-300"
              transform={isHovered ? `translate(0, -3)` : undefined}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            >
              {/* Card Capsule Rect with ample width and height */}
              <rect
                x={node.rectX}
                y={node.rectY}
                width={node.width}
                height={node.height}
                rx="20"
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

              {/* Title Text (1 or 2 lines with comfortable line height) */}
              <text
                x={node.textX}
                y={node.lineY1}
                fontSize="12.5"
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
                  fontSize="12.5"
                  fontWeight="600"
                  fill="#0c180a"
                  fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                  letterSpacing="-0.2"
                >
                  {node.titleLines[1]}
                </text>
              )}

              {/* Live Status Indicator Dot with subtle pulse */}
              <circle
                cx={node.dotX}
                cy={node.dotY}
                r="3.2"
                fill={node.statusColor}
              >
                <animate
                  attributeName="opacity"
                  values="1;0.35;1"
                  dur="2.2s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Status Text (Connected / Available) */}
              <text
                x={node.statusTextX}
                y={node.statusTextY}
                fontSize="10.5"
                fontWeight="500"
                fill={node.statusColor}
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
              >
                {node.status}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};
