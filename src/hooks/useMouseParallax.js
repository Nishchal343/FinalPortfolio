import { useState, useEffect, useCallback } from 'react';

/**
 * Hook that tracks mouse position relative to an element center,
 * returning normalized values (-1 to 1) for parallax/tilt effects.
 */
export function useMouseParallax(ref, { intensity = 15, enabled = true } = {}) {
  const [offset, setOffset] = useState({ x: 0, y: 0, percentX: 0, percentY: 0 });

  const handleMouseMove = useCallback((e) => {
    if (!ref.current || !enabled) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Normalized -1 to 1
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);

    setOffset({
      x: percentX * intensity,
      y: percentY * intensity,
      percentX: Math.max(-1, Math.min(1, percentX)),
      percentY: Math.max(-1, Math.min(1, percentY)),
    });
  }, [ref, intensity, enabled]);

  const handleMouseLeave = useCallback(() => {
    setOffset({ x: 0, y: 0, percentX: 0, percentY: 0 });
  }, []);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, handleMouseMove, handleMouseLeave, enabled]);

  return offset;
}
