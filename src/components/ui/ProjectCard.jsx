import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Regular project card — anime trading card style.
 * Compact grid card with hover lift, border glow, and tilt.
 */
export default function ProjectCard({ project, index = 0 }) {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const accentColors = ['#ff6b9d', '#00f5d4', '#a855f7', '#ffd700', '#ff2e63', '#00c9a7'];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={{
        y: -8,
        boxShadow: `0 10px 40px ${accent}20, 0 0 0 1px ${accent}40`,
        transition: { duration: 0.3 },
      }}
      style={{
        position: 'relative',
        borderRadius: '1rem',
        overflow: 'hidden',
        background: 'var(--bg-panel)',
        border: '1px solid var(--border-subtle)',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image area */}
      <div style={{
        position: 'relative',
        height: '160px',
        background: `linear-gradient(135deg, ${accent}10, var(--bg-elevated))`,
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
            gap: '0.4rem',
            color: 'var(--text-dim)',
          }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="1.5" opacity="0.5">
              <rect x="2" y="2" width="20" height="20" rx="3" />
              <circle cx="8" cy="8" r="2" />
              <path d="M2 16l5-5 4 4 3-3 8 8" />
            </svg>
            <span style={{ fontSize: '0.65rem', fontFamily: "'Outfit', sans-serif" }}>
              Project Image
            </span>
          </div>
        )}

        {/* Category badge */}
        <div style={{
          position: 'absolute',
          top: '0.75rem',
          right: '0.75rem',
          padding: '0.2rem 0.6rem',
          borderRadius: '9999px',
          background: 'var(--bg-glass)',
          backdropFilter: 'blur(8px)',
          border: '1px solid var(--border-subtle)',
          color: 'var(--text-muted)',
          fontSize: '0.65rem',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 500,
        }}>
          {project.category}
        </div>

        {/* Gradient fade at bottom */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '60px',
          background: 'linear-gradient(transparent, var(--bg-panel))',
          pointerEvents: 'none',
        }} />
      </div>

      {/* Content */}
      <div style={{ padding: '1rem 1.25rem 1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '1.1rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.4rem',
        }}>
          {project.title}
        </h3>

        <p style={{
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          lineHeight: 1.5,
          marginBottom: '0.75rem',
          flex: 1,
        }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem', marginBottom: '1rem' }}>
          {project.techStack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              style={{
                padding: '0.15rem 0.5rem',
                borderRadius: '4px',
                fontSize: '0.68rem',
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 500,
                color: 'var(--text-muted)',
                background: 'var(--bg-elevated)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          {project.liveUrl && <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.75rem',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              color: accent,
              textDecoration: 'none',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
            </svg>
            Demo
          </a>}
          <a
            href={project.githubUrl}  /* TODO: Add your GitHub URL */
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.75rem',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              color: 'var(--text-muted)',
              textDecoration: 'none',
            }}
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
        </div>
      </div>

      {/* Left accent stripe */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '3px',
        height: '100%',
        background: `linear-gradient(180deg, ${accent}, transparent)`,
        opacity: 0.6,
      }} />
    </motion.div>
  );
}
