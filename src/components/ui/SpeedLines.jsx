import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Animated SVG energy-burst section divider.
 * Creates a layered, dynamic transition between sections.
 */
export default function SpeedLines({ color = '#ff6b9d', className = '' }) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ height: '80px' }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Deterministic rays radiating from both sides of the center */}
        {Array.from({ length: 28 }).map((_, i) => {
          const angle = (i / 28) * Math.PI;
          const x1 = 720 + Math.cos(angle) * 50;
          const y1 = 40 + Math.sin(angle) * 10;
          const x2 = 720 + Math.cos(angle) * 980;
          const y2 = 40 + Math.sin(angle) * 230;
          const opacity = 0.08 + (i % 4) * 0.04;
          const strokeWidth = 0.7 + (i % 3) * 0.35;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={color}
              strokeWidth={strokeWidth}
              opacity={opacity}
              strokeLinecap="round"
              style={prefersReduced ? {} : {
                strokeDasharray: '800',
                strokeDashoffset: '800',
                animation: `speed-dash 2.4s ease-in-out ${i * 0.06}s infinite alternate`,
              }}
            />
          );
        })}
        {/* Central energy node and expanding pulse rings */}
        <circle className="speed-pulse speed-pulse-wide" cx="720" cy="40" r="15" fill="none" stroke={color} strokeWidth="1" opacity="0.25" />
        <circle className="speed-pulse speed-pulse-mid" cx="720" cy="40" r="9" fill="none" stroke={color} strokeWidth="1.5" opacity="0.35" />
        <circle cx="720" cy="40" r="5" fill={color} opacity="0.85" />
        <circle cx="720" cy="40" r="12" fill={color} opacity="0.12" />
      </svg>
    </div>
  );
}
