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

        {/* 4. Prominent Central Control Tower Hub Badge with Official NonProfit AI Icon */}
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

          {/* Official NonProfit AI Vector Icon from NonProfit AI Logo July 2026 Icon.svg */}
          <g transform="translate(350, 280) scale(0.68) translate(-37, -32)">
            <path
              d="M70.4902 33.0898C76.7502 33.3798 71.6302 38.0398 70.4902 40.3498C63.9402 53.6498 52.7002 63.4098 37.3402 63.9698C27.6402 64.3198 19.7802 61.7298 11.2902 57.0798C7.95023 55.2498 3.78023 53.4198 -0.00976562 52.4398C2.37023 49.1398 7.09023 45.8098 10.5802 43.7598C21.9502 37.9498 27.7902 41.4898 39.4002 43.1698C40.7502 43.3598 42.7802 43.1698 44.3002 43.0198C45.2902 42.9298 47.9302 41.9698 48.8602 42.6398C51.3002 45.5998 48.2902 47.6798 46.2002 48.5198C40.4702 50.8198 34.8502 49.0798 29.1202 49.2398C45.4702 55.4898 54.4202 50.7298 65.6002 38.0098C66.8602 36.5698 68.8902 33.6898 70.4902 33.0898Z"
              fill="#108A00"
            />
            <path
              d="M35.291 0.0397669C37.361 -0.180233 38.281 0.459767 39.291 2.19977C39.441 4.58977 39.001 5.01977 37.251 6.49977C37.151 7.54977 37.211 9.24977 37.211 10.3698V17.3698L37.181 40.8898C36.781 40.8298 35.581 40.6898 35.401 40.4598C34.841 39.7498 35.061 36.0398 35.051 35.1098C35.031 31.4098 31.111 29.8398 28.691 27.3898C26.261 24.9298 26.531 23.5798 26.431 20.3098C26.271 19.6598 24.961 19.0798 24.551 18.2198C23.201 15.3898 25.491 12.6698 28.491 13.4298C29.381 13.6698 30.141 14.2498 30.601 15.0498C31.891 17.2898 30.241 18.9698 28.401 20.0298C28.501 21.2698 28.441 22.8998 28.851 24.0698C29.301 25.3498 33.781 28.9898 35.071 30.2398C35.271 24.7998 35.031 19.0598 35.141 13.5998C35.181 11.6198 35.021 8.26977 35.271 6.43977C34.211 5.76977 33.461 5.24977 33.061 4.00977C32.481 2.21977 33.601 0.579767 35.291 0.0397669ZM28.041 18.1798C30.031 17.1498 29.401 15.3798 27.291 15.0998C25.291 15.9898 25.581 18.0498 28.041 18.1798ZM36.461 4.59977C36.901 4.38977 37.191 4.23977 37.371 3.75977C37.511 3.38977 37.481 2.96977 37.291 2.61977C37.041 2.12977 36.361 1.66977 35.791 1.69977C33.971 2.72977 34.441 4.55977 36.451 4.60977L36.461 4.59977Z"
              fill="#108A00"
            />
            <path
              d="M24.5794 5.11976C26.4994 4.81976 32.2394 6.19976 32.0494 8.59976C31.2494 10.4798 29.1694 8.12976 27.8794 7.66976C21.8594 5.48976 14.2094 13.1098 19.7994 18.2498C20.3994 18.7998 21.3194 19.5698 20.9994 20.4498C19.7894 21.4598 18.2594 19.8098 17.4794 18.9698C16.6194 18.0398 16.1394 16.9098 15.8494 15.6898C14.9894 15.8398 14.2894 15.9498 13.4794 16.2898C11.3994 17.1498 9.75943 18.8098 8.92943 20.8998C7.93943 23.3198 8.21943 25.6898 9.19943 28.0398C11.6794 33.3298 16.8294 32.1998 18.2894 33.5498C18.4194 33.9798 18.4294 33.8098 18.2394 34.2198C17.9594 34.4398 17.6094 34.6298 17.2494 34.6798C12.0194 35.3898 7.58943 31.3898 6.50943 26.6098C5.86943 23.7498 6.39943 20.7598 7.96943 18.2998C10.0794 14.9898 12.3094 14.2198 15.8694 13.4398C16.6094 8.97976 20.1794 5.80976 24.5694 5.12976L24.5794 5.11976Z"
              fill="#108A00"
            />
            <path
              d="M46.751 3.37988C48.171 3.41988 49.401 3.70988 50.151 5.04988C50.561 5.78988 50.651 6.66988 50.411 7.47988C50.041 8.71988 49.291 9.29988 48.221 9.89988C48.221 12.2699 48.261 14.7099 48.171 17.0699C46.791 19.5299 44.261 21.0299 42.781 23.3399C42.061 24.4599 42.301 27.4499 42.301 28.8099L42.321 37.4799C42.321 38.3599 42.331 39.3299 42.301 40.2099C42.281 40.6099 42.181 40.6199 41.921 40.8099L40.331 40.8599C40.191 35.4599 40.251 29.5999 40.371 24.1899C40.431 21.5499 43.791 19.4899 45.291 17.6399C46.571 16.0699 46.341 11.5999 46.051 9.60988C45.921 9.53988 45.801 9.45988 45.671 9.38988C42.961 7.73988 43.621 4.09988 46.741 3.39988L46.751 3.37988ZM47.891 7.94988C48.591 7.63988 48.911 6.81988 48.611 6.11988C48.311 5.40988 47.511 5.06988 46.801 5.34988C46.321 5.53988 45.981 5.96988 45.921 6.46988C45.851 6.97988 46.061 7.47988 46.471 7.78988C46.881 8.09988 47.421 8.15988 47.891 7.94988Z"
              fill="#108A00"
            />
            <path
              d="M52.8004 9.04004C53.9004 9.06004 54.7904 9.36004 55.7304 9.94004C57.6404 11.14 58.9904 13.05 59.5004 15.24C59.9204 15.34 60.3304 15.47 60.7404 15.61C65.2804 17.21 67.4404 21.93 65.8104 26.45C64.9704 28.75 63.2404 30.62 61.0104 31.62C60.1904 32 56.3204 33.21 55.8904 32.06C55.7904 31.81 55.8004 31.53 55.9104 31.29C56.3104 30.37 58.6604 30.33 59.9104 29.83C60.1704 29.72 60.5104 29.52 60.7504 29.37C62.3504 28.42 63.5104 26.87 63.9604 25.06C64.3704 23.46 64.1204 21.77 63.2704 20.35C62.0404 18.32 60.7004 17.78 58.5904 17.27C55.9704 18.01 56.1804 18.86 54.2704 20.6C53.9704 20.87 53.7004 20.91 53.3304 20.87C51.8604 19.76 54.4604 17.24 55.3504 16.53C56.0404 15.98 56.6304 15.67 57.4304 15.35C56.4904 13.57 55.6404 12.13 53.7404 11.36C53.3304 11.19 52.5804 10.81 52.2604 10.51C52.1604 9.85004 52.4104 9.58004 52.8004 9.04004Z"
              fill="#108A00"
            />
            <path
              d="M18.1909 22.9805C21.3509 23.0805 22.4509 25.0005 21.6709 27.9605C23.9909 30.5105 26.9309 31.1705 27.0609 35.0805C27.1009 36.3205 27.2509 37.7405 27.3309 39.0005C26.5909 38.8305 26.0309 38.7505 25.2809 38.6505L25.1909 38.4405C25.1509 37.7905 25.1009 37.1305 25.0409 36.4805C24.6909 32.7905 22.9609 31.9305 20.2609 29.7005C19.0209 29.9905 18.0009 30.1405 16.8409 29.4605C16.0509 28.9805 15.4809 28.2105 15.2709 27.3105C14.7209 25.0505 16.0809 23.5005 18.2109 23.0005L18.1909 22.9805ZM19.1209 27.9905C19.6609 27.8105 20.0609 27.3505 20.1709 26.7905C20.2809 26.2305 20.0809 25.6605 19.6509 25.2905C19.2209 24.9205 18.6209 24.8105 18.0909 25.0005C17.2809 25.2905 16.8509 26.1905 17.1309 27.0105C17.4109 27.8305 18.3009 28.2605 19.1209 27.9905Z"
              fill="#108A00"
            />
            <path
              d="M51.8006 22.5795C54.3806 22.0695 56.2106 24.8095 55.3706 27.1695C55.0806 27.9795 54.4806 28.6495 53.7006 29.0195C52.4406 29.6195 51.4106 29.2995 50.1906 28.8695C46.0906 32.5695 47.7006 32.8695 47.1006 37.7395C46.6306 38.6395 45.7106 39.1995 44.8906 39.7795C45.1706 37.9295 45.2406 35.8695 45.1706 33.9995C45.0506 30.5895 46.6006 29.4995 48.8506 27.2595C48.5306 24.8095 49.1806 23.0895 51.7806 22.5695L51.8006 22.5795ZM52.8206 27.4295C53.3506 27.1895 53.7006 26.6795 53.7406 26.1095C53.7806 25.5295 53.5006 24.9795 53.0106 24.6795C52.5206 24.3695 51.9006 24.3595 51.4006 24.6495C50.6806 25.0695 50.4106 25.9795 50.7906 26.7195C51.1706 27.4595 52.0606 27.7795 52.8206 27.4295Z"
              fill="#108A00"
            />
            <path
              d="M60.5295 34.0098H60.7395L60.8295 34.1998C60.5895 34.8798 60.3395 35.5698 60.0895 36.2498C57.8695 42.2398 57.0995 44.9998 51.0195 47.7998C52.1895 45.7198 52.0695 45.3498 51.9095 42.9198C51.7995 42.1698 51.7095 41.4198 51.6495 40.6598C52.2295 39.7898 53.4195 38.7398 54.1995 38.0498C53.9595 39.4998 53.9595 42.1198 53.7995 43.7798C56.7695 41.2298 55.1695 36.7298 60.5295 34.0098Z"
              fill="#108A00"
            />
            <path
              d="M65.1404 33.0204C66.1704 32.9504 66.5604 32.9404 67.5904 33.0604C65.2204 35.5004 63.4804 38.7004 60.9604 40.9204C60.5004 41.4104 59.9004 41.9404 59.4004 42.4104C60.4404 39.7004 62.3104 34.3504 65.1304 33.0204H65.1404Z"
              fill="#108A00"
            />
          </g>

          {/* Nonprofit Control Tower Branding Name */}
          <text
            x="350"
            y="322"
            textAnchor="middle"
            fontSize="10.5"
            fontWeight="700"
            fill="#108a00"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="0.8"
          >
            NONPROFIT
          </text>
          <text
            x="350"
            y="339"
            textAnchor="middle"
            fontSize="13"
            fontWeight="800"
            fill="#001E00"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="-0.2"
          >
            Control Tower
          </text>

          {/* Pulsing Signal Dot */}
          <circle cx="350" cy="351" r="2.2" fill="#108a00">
            <animate attributeName="opacity" values="1;0.35;1" dur="2s" repeatCount="indefinite" />
          </circle>
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
