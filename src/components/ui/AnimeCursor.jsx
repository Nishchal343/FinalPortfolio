import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Custom animated cursor — glowing dot that follows mouse movement.
 * Only renders on devices with a fine pointer (desktop).
 */
export default function AnimeCursor() {
  const cursorRef = useRef(null);
  const trailRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const prefersReduced = useReducedMotion();
  const posRef = useRef({ x: 0, y: 0 });
  const trailPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (prefersReduced) return;

    // Check for fine pointer
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) return;

    document.body.classList.add('custom-cursor-active');
    let rafId;

    const onMouseMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a, button, [role="button"], input, textarea, select, label')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    const animate = () => {
      rafId = requestAnimationFrame(animate);

      // Cursor follows mouse directly
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
      }

      // Trail follows with lag
      trailPosRef.current.x += (posRef.current.x - trailPosRef.current.x) * 0.15;
      trailPosRef.current.y += (posRef.current.y - trailPosRef.current.y) * 0.15;

      if (trailRef.current) {
        trailRef.current.style.transform = `translate(${trailPosRef.current.x}px, ${trailPosRef.current.y}px)`;
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.body.classList.remove('custom-cursor-active');
      cancelAnimationFrame(rafId);
    };
  }, [prefersReduced, isVisible]);

  if (prefersReduced) return null;

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isHovering ? '40px' : '12px',
          height: isHovering ? '40px' : '12px',
          marginLeft: isHovering ? '-20px' : '-6px',
          marginTop: isHovering ? '-20px' : '-6px',
          borderRadius: '50%',
          background: isHovering
            ? 'transparent'
            : 'linear-gradient(135deg, #ff6b9d, #a855f7)',
          border: isHovering ? '2px solid rgba(255, 107, 157, 0.6)' : 'none',
          pointerEvents: 'none',
          zIndex: 99999,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease, background 0.2s ease, border 0.2s ease, opacity 0.3s ease',
          mixBlendMode: 'screen',
        }}
      />
      {/* Trailing glow */}
      <div
        ref={trailRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '30px',
          height: '30px',
          marginLeft: '-15px',
          marginTop: '-15px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 157, 0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 99998,
          opacity: isVisible ? 0.6 : 0,
          transition: 'opacity 0.3s ease',
        }}
      />
    </>
  );
}
