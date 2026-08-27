/**
 * Animated wave section divider.
 * Uses layered SVG waves for a subtle, continuously moving transition.
 */
export default function InkDivider({ className = '' }) {
  return (
    <div className={`relative ${className}`} style={{ height: '60px', overflow: 'hidden' }} aria-hidden="true">
      <svg
        viewBox="0 0 1440 60"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        <g className="wave-layer wave-layer-back">
          <path className="wave-path" d="M-1440 32 Q-1080 4 -720 32 T0 32 T720 32 T1440 32 T2160 32" fill="none" stroke="#a855f7" strokeWidth="2" opacity="0.18" />
        </g>
        <g className="wave-layer wave-layer-main">
          <path className="wave-path" d="M-1440 30 Q-1080 58 -720 30 T0 30 T720 30 T1440 30 T2160 30" fill="none" stroke="var(--text-muted)" strokeWidth="2" opacity="0.28" />
        </g>
        <g className="wave-layer wave-layer-front">
          <path className="wave-path" d="M-1440 34 Q-1080 16 -720 34 T0 34 T720 34 T1440 34 T2160 34" fill="none" stroke="#ff6b9d" strokeWidth="1" opacity="0.2" />
        </g>
      </svg>
    </div>
  );
}
