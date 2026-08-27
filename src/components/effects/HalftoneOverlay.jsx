/**
 * CSS-based halftone dot texture overlay.
 * Adds a subtle manga-print texture to sections.
 */
export default function HalftoneOverlay({ opacity = 0.03 }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        opacity,
        backgroundImage: 'radial-gradient(circle, var(--text-primary) 1px, transparent 1px)',
        backgroundSize: '8px 8px',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />
  );
}
