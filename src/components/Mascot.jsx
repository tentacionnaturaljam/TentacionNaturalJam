import React from 'react';

const Mascot = ({ size = 180 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 220"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Ground shadow */}
    <ellipse cx="100" cy="210" rx="55" ry="10" fill="#C8703040" />

    {/* Body — borojó dark brown fruit */}
    <circle cx="100" cy="130" r="70" fill="#5C2E0E" />
    <circle cx="100" cy="130" r="70" fill="url(#bodyGrad)" />

    {/* Sheen */}
    <ellipse cx="78" cy="100" rx="18" ry="12" fill="white" opacity="0.18" transform="rotate(-20 78 100)" />

    {/* Stem */}
    <rect x="96" y="42" width="8" height="22" rx="4" fill="#7A4A1E" />

    {/* Leaves */}
    <ellipse cx="80" cy="44" rx="20" ry="9" fill="#3A8A2E" transform="rotate(-30 80 44)" />
    <ellipse cx="120" cy="44" rx="20" ry="9" fill="#4CAF50" transform="rotate(30 120 44)" />
    <ellipse cx="100" cy="36" rx="16" ry="8" fill="#56C244" transform="rotate(0 100 36)" />
    <ellipse cx="62" cy="52" rx="14" ry="7" fill="#3A8A2E" transform="rotate(-50 62 52)" />
    <ellipse cx="138" cy="52" rx="14" ry="7" fill="#4CAF50" transform="rotate(50 138 52)" />

    {/* Eyes whites */}
    <ellipse cx="80" cy="120" rx="18" ry="20" fill="white" />
    <ellipse cx="120" cy="120" rx="18" ry="20" fill="white" />

    {/* Eyes iris — green */}
    <circle cx="82" cy="122" r="12" fill="#3BAA2A" />
    <circle cx="118" cy="122" r="12" fill="#3BAA2A" />

    {/* Eyes pupils */}
    <circle cx="84" cy="122" r="7" fill="#1A1A1A" />
    <circle cx="120" cy="122" r="7" fill="#1A1A1A" />

    {/* Eye shine */}
    <circle cx="87" cy="118" r="3" fill="white" />
    <circle cx="123" cy="118" r="3" fill="white" />

    {/* Rosy cheeks */}
    <ellipse cx="68" cy="142" rx="12" ry="8" fill="#FF7070" opacity="0.5" />
    <ellipse cx="132" cy="142" rx="12" ry="8" fill="#FF7070" opacity="0.5" />

    {/* Smile */}
    <path d="M 80 152 Q 100 170 120 152" stroke="#4A1A0A" strokeWidth="4" strokeLinecap="round" fill="none" />

    {/* Tongue */}
    <ellipse cx="100" cy="163" rx="10" ry="8" fill="#FF6B6B" />

    {/* Left arm (leg-like stub) */}
    <ellipse cx="52" cy="175" rx="14" ry="10" fill="#5C2E0E" transform="rotate(-30 52 175)" />
    {/* Right arm with thumbs up */}
    <path d="M 148 155 Q 165 140 170 125 Q 175 110 165 108 Q 158 106 155 115 Q 162 100 155 96 Q 148 93 145 103 Q 150 90 143 88 Q 136 87 135 98 Q 138 85 132 84 Q 126 84 127 96 L 126 115 Q 118 125 120 145 Z" fill="#5C2E0E" />
    {/* Thumb */}
    <ellipse cx="140" cy="83" rx="8" ry="10" fill="#5C2E0E" transform="rotate(15 140 83)" />

    {/* Left foot */}
    <ellipse cx="72" cy="198" rx="16" ry="10" fill="#5C2E0E" />
    {/* Right foot */}
    <ellipse cx="128" cy="198" rx="16" ry="10" fill="#5C2E0E" />

    {/* Water droplets */}
    <circle cx="38" cy="95" r="4" fill="#7BC8F0" opacity="0.8" />
    <circle cx="165" cy="80" r="3" fill="#7BC8F0" opacity="0.8" />
    <circle cx="45" cy="115" r="2.5" fill="#7BC8F0" opacity="0.6" />

    {/* Small borojó slices beside */}
    <circle cx="24" cy="170" r="20" fill="#8B4513" />
    <circle cx="24" cy="170" r="18" fill="#6B3410" />
    {/* Slice segments */}
    <line x1="24" y1="152" x2="24" y2="188" stroke="#A0522D" strokeWidth="1.5" />
    <line x1="6" y1="170" x2="42" y2="170" stroke="#A0522D" strokeWidth="1.5" />
    <line x1="11" y1="157" x2="37" y2="183" stroke="#A0522D" strokeWidth="1.5" />
    <line x1="37" y1="157" x2="11" y2="183" stroke="#A0522D" strokeWidth="1.5" />

    <circle cx="176" cy="170" r="20" fill="#8B4513" />
    <circle cx="176" cy="170" r="18" fill="#6B3410" />
    <line x1="176" y1="152" x2="176" y2="188" stroke="#A0522D" strokeWidth="1.5" />
    <line x1="158" y1="170" x2="194" y2="170" stroke="#A0522D" strokeWidth="1.5" />
    <line x1="163" y1="157" x2="189" y2="183" stroke="#A0522D" strokeWidth="1.5" />
    <line x1="189" y1="157" x2="163" y2="183" stroke="#A0522D" strokeWidth="1.5" />

    {/* Small flower */}
    <circle cx="55" cy="203" r="5" fill="#FFFDE7" />
    <circle cx="55" cy="196" r="3" fill="#FFFDE7" />
    <circle cx="62" cy="200" r="3" fill="#FFFDE7" />
    <circle cx="62" cy="207" r="3" fill="#FFFDE7" />
    <circle cx="55" cy="210" r="3" fill="#FFFDE7" />
    <circle cx="48" cy="207" r="3" fill="#FFFDE7" />
    <circle cx="48" cy="200" r="3" fill="#FFFDE7" />
    <circle cx="55" cy="203" r="4" fill="#FFD700" />

    <defs>
      <radialGradient id="bodyGrad" cx="35%" cy="35%" r="65%">
        <stop offset="0%" stopColor="#8B5030" />
        <stop offset="60%" stopColor="#5C2E0E" />
        <stop offset="100%" stopColor="#3A1A06" />
      </radialGradient>
    </defs>
  </svg>
);

export default Mascot;
