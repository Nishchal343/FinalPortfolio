import { useEffect, useRef, useCallback } from 'react';
import { useReducedMotion } from '../../hooks/useReducedMotion';

/**
 * Canvas-based particle system rendering sakura petals and glowing sparks.
 * GPU-friendly, runs at 30fps, pauses when off-screen.
 */
export default function ParticleCanvas({ className = '' }) {
  const canvasRef = useRef(null);
  const animationRef = useRef(null);
  const particlesRef = useRef([]);
  const lastFrameRef = useRef(0);
  const prefersReduced = useReducedMotion();

  const FPS = 30;
  const FRAME_INTERVAL = 1000 / FPS;

  const createPetal = useCallback((canvas) => {
    return {
      x: Math.random() * canvas.width,
      y: -20 - Math.random() * 100,
      size: 4 + Math.random() * 8,
      speedX: -0.3 + Math.random() * 0.6,
      speedY: 0.5 + Math.random() * 1.2,
      rotation: Math.random() * Math.PI * 2,
      rotationSpeed: -0.02 + Math.random() * 0.04,
      opacity: 0.15 + Math.random() * 0.35,
      type: Math.random() > 0.7 ? 'spark' : 'petal',
      life: 0,
      maxLife: 400 + Math.random() * 300,
      wobble: Math.random() * Math.PI * 2,
      wobbleSpeed: 0.01 + Math.random() * 0.02,
    };
  }, []);

  const drawPetal = useCallback((ctx, p) => {
    ctx.save();
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotation);
    ctx.globalAlpha = p.opacity * (1 - p.life / p.maxLife);

    if (p.type === 'spark') {
      // Glowing spark
      const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 0.6);
      gradient.addColorStop(0, 'rgba(0, 245, 212, 0.8)');
      gradient.addColorStop(0.5, 'rgba(168, 85, 247, 0.3)');
      gradient.addColorStop(1, 'transparent');
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
      ctx.fill();
    } else {
      // Sakura petal shape
      ctx.fillStyle = `rgba(255, 107, 157, ${0.6 + Math.random() * 0.2})`;
      ctx.beginPath();
      ctx.ellipse(0, 0, p.size, p.size * 0.5, 0, 0, Math.PI * 2);
      ctx.fill();
      // Inner highlight
      ctx.fillStyle = `rgba(255, 180, 200, 0.4)`;
      ctx.beginPath();
      ctx.ellipse(-p.size * 0.2, -p.size * 0.1, p.size * 0.4, p.size * 0.2, 0.3, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.restore();
  }, []);

  useEffect(() => {
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initialize particles
    const PARTICLE_COUNT = Math.min(35, Math.floor(window.innerWidth / 40));
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => {
      const p = createPetal(canvas);
      p.y = Math.random() * canvas.height; // Spread initially
      p.life = Math.random() * p.maxLife * 0.5;
      return p;
    });

    // IntersectionObserver to pause off-screen
    let isVisible = true;
    const observer = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting; },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    const animate = (timestamp) => {
      animationRef.current = requestAnimationFrame(animate);

      if (!isVisible) return;
      if (timestamp - lastFrameRef.current < FRAME_INTERVAL) return;
      lastFrameRef.current = timestamp;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((p, i) => {
        p.wobble += p.wobbleSpeed;
        p.x += p.speedX + Math.sin(p.wobble) * 0.5;
        p.y += p.speedY;
        p.rotation += p.rotationSpeed;
        p.life++;

        drawPetal(ctx, p);

        // Reset when dead or off-screen
        if (p.life >= p.maxLife || p.y > canvas.height + 20) {
          particlesRef.current[i] = createPetal(canvas);
        }
      });
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', resize);
      observer.disconnect();
    };
  }, [prefersReduced, createPetal, drawPetal]);

  if (prefersReduced) return null;

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
      aria-hidden="true"
    />
  );
}
