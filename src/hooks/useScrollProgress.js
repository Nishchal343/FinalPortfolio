import { useState, useEffect } from 'react';

/**
 * Hook that returns scroll progress as a 0-1 fraction.
 * Optionally scoped to a specific element via ref.
 */
export function useScrollProgress(ref = null) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref?.current) {
        const rect = ref.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const elementTop = rect.top;
        const elementHeight = rect.height;
        
        // 0 when element enters viewport, 1 when it leaves
        const rawProgress = (windowHeight - elementTop) / (windowHeight + elementHeight);
        setProgress(Math.max(0, Math.min(1, rawProgress)));
      } else {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY / scrollHeight;
        setProgress(Math.max(0, Math.min(1, scrolled)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return progress;
}
