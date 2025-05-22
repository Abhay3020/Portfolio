import React from 'react';

export const FullStackIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="fullstack-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ff6b6b" />
        <stop offset="100%" stopColor="#6b66ff" />
      </linearGradient>
      <linearGradient id="fullstack-shine" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
      <filter id="glow1" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="3" result="blur" />
        <feComposite in="blur" operator="over" in2="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#glow1)" transform="rotate(15, 50, 50)">
      <polygon points="50,10 90,30 90,70 50,90 10,70 10,30" fill="url(#fullstack-gradient)" />
      <polygon points="50,20 80,35 80,65 50,80 20,65 20,35" fill="rgba(255,255,255,0.1)" />
      <polygon points="50,15 85,32 85,68 50,85 15,68 15,32" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <polygon points="30,30 70,30 70,70 30,70" fill="url(#fullstack-shine)" opacity="0.2" />
    </g>
  </svg>
);

export const DataIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="data-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#00c9ff" />
        <stop offset="100%" stopColor="#92fe9d" />
      </linearGradient>
      <radialGradient id="data-shine" cx="40%" cy="40%" r="60%" fx="40%" fy="40%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </radialGradient>
      <filter id="glow2" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="blur" operator="over" in2="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#glow2)" transform="rotate(15, 50, 50)">
      <circle cx="50" cy="50" r="40" fill="url(#data-gradient)" />
      <circle cx="50" cy="50" r="30" fill="rgba(0,0,0,0.2)" />
      <circle cx="50" cy="50" r="20" fill="rgba(255,255,255,0.2)" />
      <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="0.5" />
      <circle cx="42" cy="42" r="5" fill="rgba(255,255,255,0.5)" />
      <ellipse cx="50" cy="50" rx="25" ry="15" fill="url(#data-shine)" opacity="0.3" transform="rotate(-30, 50, 50)" />
    </g>
  </svg>
);

export const CloudIcon = () => (
  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cloud-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#da4453" />
        <stop offset="100%" stopColor="#89216b" />
      </linearGradient>
      <linearGradient id="cloud-shine" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
        <stop offset="100%" stopColor="rgba(255,255,255,0)" />
      </linearGradient>
      <filter id="glow3" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2.5" result="blur" />
        <feComposite in="blur" operator="over" in2="SourceGraphic" />
      </filter>
    </defs>
    <g filter="url(#glow3)" transform="rotate(15, 50, 50)">
      <path d="M30,30 L70,30 L90,50 L70,70 L30,70 L10,50 Z" fill="url(#cloud-gradient)" />
      <path d="M35,35 L65,35 L80,50 L65,65 L35,65 L20,50 Z" fill="rgba(255,255,255,0.1)" />
      <path d="M32,32 L68,32 L85,50 L68,68 L32,68 L15,50 Z" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
      <rect x="25" y="40" width="50" height="10" fill="url(#cloud-shine)" opacity="0.3" transform="rotate(15, 50, 50)" />
    </g>
  </svg>
); 