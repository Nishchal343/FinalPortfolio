import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { useMouseParallax } from '../../hooks/useMouseParallax';

/**
 * Featured project card — anime movie poster / key visual style.
 * Larger, more animated, with holographic shimmer and 3D tilt.
 */
export default function FeaturedCard({ project, index = 0 }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });
  const { x, y } = useMouseParallax(cardRef, { intensity: 8 });

  const accentColors = ['#ff6b9d', '#00f5d4', '#a855f7'];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'relative',
        borderRadius: '1.25rem',
        overflow: 'hidden',
        background: 'var(--bg-panel)',
        border: `1px solid ${accent}33`,
        transform: `perspective(800px) rotateY(${x * 0.5}deg) rotateX(${-y * 0.5}deg)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {/* Holographic shimmer overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `linear-gradient(
            105deg,
            transparent 30%,
            ${accent}12 40%,
            ${accent}08 50%,
            transparent 60%
          )`,
          backgroundSize: '200% 100%',
          animation: 'shimmer 6s ease-in-out infinite',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Image area */}
      <div style={{
        position: 'relative',
        height: '240px',
        background: `linear-gradient(135deg, ${accent}15, var(--bg-elevated))`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          /* TODO: Replace with your project image */
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'var(--text-dim)',
          }}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5">
              <rect x="2" y="2" width="20" height="20" rx="3" />
              <circle cx="8" cy="8" r="2" />
              <path d="M2 16l5-5 4 4 3-3 8 8" />
            </svg>
            <span style={{ fontSize: '0.75rem', fontFamily: "'Outfit', sans-serif" }}>
              {/* TODO: Add your project image */}
              Project Image
            </span>
          </div>
        )}

        {/* Category badge */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          padding: '0.3rem 0.8rem',
          borderRadius: '9999px',
          background: `${accent}22`,
          border: `1px solid ${accent}44`,
          color: accent,
          fontSize: '0.7rem',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          backdropFilter: 'blur(8px)',
          zIndex: 3,
        }}>
          ★ Featured
        </div>

        {/* Halftone overlay on image */}
        <div style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: 'radial-gradient(circle, var(--text-primary) 1px, transparent 1px)',
          backgroundSize: '6px 6px',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', position: 'relative', zIndex: 2 }}>
        {/* Project number accent */}
        <div style={{
          fontFamily: "'Zen Kaku Gothic New', sans-serif",
          fontSize: '0.7rem',
          color: accent,
          opacity: 0.6,
          marginBottom: '0.25rem',
          letterSpacing: '0.15em',
        }}>
          Project {String(index + 1).padStart(2, '0')}
        </div>

        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '1.5rem',
          fontWeight: 800,
          color: 'var(--text-primary)',
          marginBottom: '0.5rem',
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '0.9rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '1rem',
        }}>
          {project.description}
        </p>

        {/* Tech stack tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.25rem' }}>
          {project.techStack.map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.2rem 0.6rem',
                borderRadius: '6px',
                fontSize: '0.75rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                color: accent,
                background: `${accent}12`,
                border: `1px solid ${accent}25`,
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <motion.a
            href={project.liveUrl}  /* TODO: Add your live demo URL */
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, boxShadow: `0 0 20px ${accent}40` }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              color: '#fff',
              background: `linear-gradient(135deg, ${accent}, ${accent}cc)`,
              textDecoration: 'none',
              border: 'none',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            Live Demo
          </motion.a>
          <motion.a
            href={project.githubUrl}  /* TODO: Add your GitHub URL */
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              padding: '0.5rem 1rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              color: 'var(--text-primary)',
              background: 'var(--bg-elevated)',
              border: '1px solid var(--border-subtle)',
              textDecoration: 'none',
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </motion.a>
        </div>
      </div>

      {/* Bottom accent line */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '3px',
        background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
      }} />
    </motion.div>
  );
}
