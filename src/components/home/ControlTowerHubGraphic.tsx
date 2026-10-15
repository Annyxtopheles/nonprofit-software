import React, { useState } from "react";

interface NodeData {
  id: string;
  title: string;
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
  textY1: number;
  textY2: number;
  dotX: number;
  dotY: number;
  statusTextX: number;
  lineX1: number;
  lineY1: number;
  lineX2: number;
  lineY2: number;
  dur: string;
  iconType: "database" | "payments" | "email" | "events" | "accounting" | "grants" | "volunteers";
}

const NODES: NodeData[] = [
  // 1. CRM / Donor Database (Top Center)
  {
    id: "crm",
    title: "CRM / Donor Database",
    status: "Connected",
    color: "#2563eb",
    iconBg: "#eff6ff",
    statusColor: "#2563eb",
    rectX: 240,
    rectY: 26,
    width: 180,
    height: 54,
    iconCx: 268,
    iconCy: 53,
    textX: 294,
    textY1: 47,
    textY2: 63,
    dotX: 298,
    dotY: 60,
    statusTextX: 307,
    lineX1: 330,
    lineY1: 236,
    lineX2: 330,
    lineY2: 80,
    dur: "2.4s",
    iconType: "database",
  },
  // 2. Payments & Donations (Top Right)
  {
    id: "payments",
    title: "Payments & Donations",
    status: "Connected",
    color: "#108a00",
    iconBg: "#e7f5e3",
    statusColor: "#108a00",
    rectX: 424,
    rectY: 96,
    width: 184,
    height: 54,
    iconCx: 452,
    iconCy: 123,
    textX: 478,
    textY1: 117,
    textY2: 133,
    dotX: 482,
    dotY: 130,
    statusTextX: 491,
    lineX1: 365,
    lineY1: 245,
    lineX2: 440,
    lineY2: 150,
    dur: "2.8s",
    iconType: "payments",
  },
  // 3. Email & Communications (Middle Right)
  {
    id: "email",
    title: "Email & Communications",
    status: "Connected",
    color: "#ea580c",
    iconBg: "#fff7ed",
    statusColor: "#ea580c",
    rectX: 448,
    rectY: 253,
    width: 196,
    height: 54,
    iconCx: 476,
    iconCy: 280,
    textX: 502,
    textY1: 274,
    textY2: 290,
    dotX: 506,
    dotY: 287,
    statusTextX: 515,
    lineX1: 374,
    lineY1: 280,
    lineX2: 448,
    lineY2: 280,
    dur: "2.3s",
    iconType: "email",
  },
  // 4. Events & Registration (Bottom Right)
  {
    id: "events",
    title: "Events & Registration",
    status: "Connected",
    color: "#9333ea",
    iconBg: "#faf5ff",
    statusColor: "#9333ea",
    rectX: 366,
    rectY: 424,
    width: 184,
    height: 54,
    iconCx: 394,
    iconCy: 451,
    textX: 420,
    textY1: 445,
    textY2: 461,
    dotX: 424,
    dotY: 458,
    statusTextX: 433,
    lineX1: 362,
    lineY1: 312,
    lineX2: 425,
    lineY2: 424,
    dur: "2.9s",
    iconType: "events",
  },
  // 5. Accounting & Finance (Bottom Left)
  {
    id: "accounting",
    title: "Accounting & Finance",
    status: "Available",
    color: "#0891b2",
    iconBg: "#ecfeff",
    statusColor: "#64748b",
    rectX: 110,
    rectY: 424,
    width: 184,
    height: 54,
    iconCx: 138,
    iconCy: 451,
    textX: 164,
    textY1: 445,
    textY2: 461,
    dotX: 168,
    dotY: 458,
    statusTextX: 177,
    lineX1: 298,
    lineY1: 312,
    lineX2: 235,
    lineY2: 424,
    dur: "3.2s",
    iconType: "accounting",
  },
  // 6. Grant Portals (Middle Left)
  {
    id: "grants",
    title: "Grant Portals",
    status: "Available",
    color: "#e11d48",
    iconBg: "#fff1f2",
    statusColor: "#64748b",
    rectX: 16,
    rectY: 253,
    width: 174,
    height: 54,
    iconCx: 44,
    iconCy: 280,
    textX: 70,
    textY1: 274,
    textY2: 290,
    dotX: 74,
    dotY: 287,
    statusTextX: 83,
    lineX1: 286,
    lineY1: 280,
    lineX2: 190,
    lineY2: 280,
    dur: "2.5s",
    iconType: "grants",
  },
  // 7. Volunteer Management (Top Left)
  {
    id: "volunteers",
    title: "Volunteer Management",
    status: "Connected",
    color: "#d97706",
    iconBg: "#fffbeb",
    statusColor: "#d97706",
    rectX: 50,
    rectY: 96,
    width: 184,
    height: 54,
    iconCx: 78,
    iconCy: 123,
    textX: 104,
    textY1: 117,
    textY2: 133,
    dotX: 108,
    dotY: 130,
    statusTextX: 117,
    lineX1: 295,
    lineY1: 245,
    lineX2: 220,
    lineY2: 150,
    dur: "2.7s",
    iconType: "volunteers",
  },
];

export const ControlTowerHubGraphic: React.FC = () => {
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  const renderIcon = (type: NodeData["iconType"], cx: number, cy: number, color: string) => {
    switch (type) {
      case "database":
        return (
          <g transform={`translate(${cx - 8.5}, ${cy - 8.5})`} stroke={color} strokeWidth="1.6" fill="none">
            <ellipse cx="8.5" cy="4" rx="6.5" ry="2.5" />
            <path d="M2 4v4c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V4" />
            <path d="M2 8v4c0 1.4 2.9 2.5 6.5 2.5s6.5-1.1 6.5-2.5V8" />
          </g>
        );
      case "payments":
        return (
          <g transform={`translate(${cx - 8.5}, ${cy - 8.5})`} stroke={color} strokeWidth="1.6" fill="none">
            <circle cx="8.5" cy="8.5" r="7" />
            <path d="M8.5 4.5v8M10.5 6.5H7.5a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3H6.5" strokeLinecap="round" />
          </g>
        );
      case "email":
        return (
          <g transform={`translate(${cx - 8.5}, ${cy - 8.5})`} stroke={color} strokeWidth="1.6" fill="none">
            <rect x="2" y="3.5" width="13" height="10" rx="1.5" />
            <path d="M2 5.5l6.5 4.5 6.5-4.5" strokeLinecap="round" />
          </g>
        );
      case "events":
        return (
          <g transform={`translate(${cx - 8.5}, ${cy - 8.5})`} stroke={color} strokeWidth="1.6" fill="none">
            <rect x="2" y="3.5" width="13" height="11" rx="1.5" />
            <line x1="5.5" y1="1.5" x2="5.5" y2="4.5" strokeLinecap="round" />
            <line x1="11.5" y1="1.5" x2="11.5" y2="4.5" strokeLinecap="round" />
            <line x1="2" y1="7" x2="15" y2="7" />
            <circle cx="5.5" cy="10" r="0.75" fill={color} />
            <circle cx="8.5" cy="10" r="0.75" fill={color} />
            <circle cx="11.5" cy="10" r="0.75" fill={color} />
          </g>
        );
      case "accounting":
        return (
          <g transform={`translate(${cx - 8.5}, ${cy - 8.5})`} stroke={color} strokeWidth="1.6" fill="none">
            <rect x="2.5" y="2" width="12" height="13" rx="1.5" />
            <rect x="4.5" y="4" width="8" height="2.5" fill={color} fillOpacity="0.3" />
            <circle cx="5.5" cy="9" r="0.8" fill={color} />
            <circle cx="8.5" cy="9" r="0.8" fill={color} />
            <circle cx="11.5" cy="9" r="0.8" fill={color} />
            <circle cx="5.5" cy="12" r="0.8" fill={color} />
            <circle cx="8.5" cy="12" r="0.8" fill={color} />
            <circle cx="11.5" cy="12" r="0.8" fill={color} />
          </g>
        );
      case "grants":
        return (
          <g transform={`translate(${cx - 8.5}, ${cy - 8.5})`} stroke={color} strokeWidth="1.6" fill="none">
            <path d="M4 2.5h6l4 4v7a1.5 1.5 0 0 1-1.5 1.5h-8.5A1.5 1.5 0 0 1 2.5 13.5v-9.5A1.5 1.5 0 0 1 4 2.5z" />
            <path d="M10 2.5v4h4" />
            <line x1="5.5" y1="9" x2="11.5" y2="9" strokeLinecap="round" />
            <line x1="5.5" y1="12" x2="9.5" y2="12" strokeLinecap="round" />
          </g>
        );
      case "volunteers":
        return (
          <g transform={`translate(${cx - 8.5}, ${cy - 8.5})`} stroke={color} strokeWidth="1.6" fill="none">
            <path d="M2.5 11.5c1-1 3-2 6-2s5 1 6 2" strokeLinecap="round" />
            <path d="M8.5 2.5a2.5 2.5 0 0 0-2.5 2.5c0 2 2.5 3.5 2.5 3.5s2.5-1.5 2.5-3.5a2.5 2.5 0 0 0-2.5-2.5z" fill={color} fillOpacity="0.25" />
          </g>
        );
    }
  };

  return (
    <div className="relative w-full max-w-[620px] mx-auto select-none">
      <svg
        viewBox="0 0 660 540"
        className="w-full h-auto overflow-visible drop-shadow-[0_8px_30px_rgba(16,138,0,0.06)]"
      >
        <defs>
          {/* Subtle Card Drop Shadow */}
          <filter id="hubCardShadow" x="-15%" y="-20%" width="130%" height="150%">
            <feDropShadow dx="0" dy="4" stdDeviation="7" floodColor="#000000" floodOpacity="0.06" />
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#000000" floodOpacity="0.04" />
          </filter>

          {/* Central Hub Shadow */}
          <filter id="hubCenterShadow" x="-25%" y="-25%" width="150%" height="150%">
            <feDropShadow dx="0" dy="6" stdDeviation="10" floodColor="#108a00" floodOpacity="0.14" />
          </filter>

          {/* Glowing particle glow */}
          <filter id="pulseGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* 1. Concentric Background Radar Wave Pulses from Center (330, 280) */}
        <g>
          <circle cx="330" cy="280" r="50" fill="#108a00" opacity="0">
            <animate attributeName="r" values="46;115" dur="3.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.32;0" dur="3.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="330" cy="280" r="50" fill="#108a00" opacity="0">
            <animate attributeName="r" values="46;115" dur="3.6s" begin="1.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.32;0" dur="3.6s" begin="1.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="330" cy="280" r="50" fill="#108a00" opacity="0">
            <animate attributeName="r" values="46;115" dur="3.6s" begin="2.4s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.32;0" dur="3.6s" begin="2.4s" repeatCount="indefinite" />
          </circle>

          {/* Outer static aura rings */}
          <circle cx="330" cy="280" r="74" fill="#eef8eb" fillOpacity="0.8" stroke="#c8ecc0" strokeWidth="1.4" />
          <circle cx="330" cy="280" r="55" fill="#e2f5dc" fillOpacity="0.9" stroke="#a3e698" strokeWidth="1.4" />
        </g>

        {/* 2. Outer Orbital Dashed Guide Circle passing through all rays */}
        <circle
          cx="330"
          cy="280"
          r="188"
          fill="none"
          stroke="#e2e8f0"
          strokeWidth="1.5"
          strokeDasharray="5 6"
          opacity="0.8"
        />

        {/* 3. Connecting Spoke Lines & Animated Data Particles */}
        {NODES.map((node) => {
          const isHovered = hoveredNode === node.id;
          const pathId = `spoke-path-${node.id}`;

          return (
            <g key={node.id}>
              {/* Invisible path for animateMotion */}
              <path
                id={pathId}
                d={`M ${node.lineX1} ${node.lineY1} L ${node.lineX2} ${node.lineY2}`}
                fill="none"
              />

              {/* Animated Dashed Ray Line with marching dash animation */}
              <line
                x1={node.lineX1}
                y1={node.lineY1}
                x2={node.lineX2}
                y2={node.lineY2}
                stroke={node.color}
                strokeWidth={isHovered ? 2.8 : 1.8}
                strokeDasharray="5 5"
                opacity={isHovered ? 1 : 0.75}
                className="transition-all duration-300"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  values="0;-20"
                  dur="1.6s"
                  repeatCount="indefinite"
                />
              </line>

              {/* Glowing Data Flow Packet Particle traveling along the ray */}
              <circle r={isHovered ? 5.5 : 4.5} fill={node.color} filter="url(#pulseGlow)">
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

        {/* 4. Central Control Tower Hub Badge */}
        <g className="cursor-default select-none">
          {/* Core White Badge Circle */}
          <circle
            cx="330"
            cy="280"
            r="42"
            fill="#ffffff"
            stroke="#108a00"
            strokeWidth="2.5"
            filter="url(#hubCenterShadow)"
          />

          {/* Control Tower Building Outline Icon */}
          <g transform="translate(317, 252)">
            <rect
              x="5"
              y="4"
              width="16"
              height="22"
              rx="3"
              fill="none"
              stroke="#108a00"
              strokeWidth="2"
            />
            <line x1="9" y1="9" x2="17" y2="9" stroke="#108a00" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="9" y1="14" x2="17" y2="14" stroke="#108a00" strokeWidth="1.8" strokeLinecap="round" />
            <line x1="9" y1="19" x2="17" y2="19" stroke="#108a00" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="2" cy="7" r="1.5" fill="#108a00" />
            <circle cx="24" cy="7" r="1.5" fill="#108a00" />
            <path
              d="M 1 4 C 1 10, 4 12, 5 12"
              stroke="#108a00"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
            <path
              d="M 25 4 C 25 10, 22 12, 21 12"
              stroke="#108a00"
              strokeWidth="1.5"
              strokeLinecap="round"
              fill="none"
            />
          </g>

          {/* Central Label */}
          <text
            x="330"
            y="294"
            textAnchor="middle"
            fontSize="10.5"
            fontWeight="700"
            fill="#0c180a"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="-0.2"
          >
            Control Tower
          </text>
        </g>

        {/* 5. The 7 Satellite Module Cards */}
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
              {/* Card Rect */}
              <rect
                x={node.rectX}
                y={node.rectY}
                width={node.width}
                height={node.height}
                rx="16"
                fill="#ffffff"
                stroke={isHovered ? node.color : "#e2e8f0"}
                strokeWidth={isHovered ? 1.8 : 1.2}
                filter="url(#hubCardShadow)"
                className="transition-all duration-200"
              />

              {/* Left Circular Icon Background */}
              <circle
                cx={node.iconCx}
                cy={node.iconCy}
                r="15"
                fill={node.iconBg}
              />

              {/* Render Vector Icon */}
              {renderIcon(node.iconType, node.iconCx, node.iconCy, node.color)}

              {/* Title Text */}
              <text
                x={node.textX}
                y={node.textY1}
                fontSize="12.5"
                fontWeight="600"
                fill="#0c180a"
                fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
                letterSpacing="-0.2"
              >
                {node.title}
              </text>

              {/* Live Status Indicator Dot with subtle pulse */}
              <circle
                cx={node.dotX}
                cy={node.dotY}
                r="3"
                fill={node.statusColor}
              >
                <animate
                  attributeName="opacity"
                  values="1;0.4;1"
                  dur="1.8s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Status Text */}
              <text
                x={node.statusTextX}
                y={node.textY2}
                fontSize="11"
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
