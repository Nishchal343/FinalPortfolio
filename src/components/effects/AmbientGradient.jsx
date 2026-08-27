import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Continuously drifting gradient background effect.
 * Uses CSS animation for GPU-friendly rendering.
 */
export default function AmbientGradient({ className = '' }) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 0,
      }}
    >
      {/* Primary gradient orb */}
      <div
        style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '60%',
          height: '60%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 157, 0.08) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: prefersReduced ? 'none' : 'float-slow 20s ease-in-out infinite',
        }}
      />
      {/* Secondary gradient orb */}
      <div
        style={{
          position: 'absolute',
          bottom: '-15%',
          left: '-15%',
          width: '50%',
          height: '50%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 245, 212, 0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          animation: prefersReduced ? 'none' : 'float-slow 25s ease-in-out infinite reverse',
        }}
      />
      {/* Tertiary accent */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          left: '30%',
          width: '30%',
          height: '30%',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: prefersReduced ? 'none' : 'float-slow 18s ease-in-out infinite 5s',
        }}
      />
    </div>
  );
}
