import React from "react";

const PulsingShape = ({ size = 220 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 220 220"
    style={{ display: "block" }}
  >
    <defs>
      <radialGradient id="pulse-gradient" cx="50%" cy="50%" r="60%">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.7" />
      </radialGradient>
      <filter id="pulse-glow" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="12" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <g>
      <circle
        cx="110"
        cy="110"
        r="70"
        fill="url(#pulse-gradient)"
        filter="url(#pulse-glow)"
        style={{
          transformOrigin: "110px 110px",
          animation: "pulse-shape 2.2s ease-in-out infinite"
        }}
      />
      <style>{`
        @keyframes pulse-shape {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.13); opacity: 0.82; }
        }
      `}</style>
    </g>
  </svg>
);

export default PulsingShape; 