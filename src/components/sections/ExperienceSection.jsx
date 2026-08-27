import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import SectionReveal from '../ui/SectionReveal';
import { experience } from '../../utils/constants';

/**
 * Experience/Education timeline — story chapter timeline style.
 * Each entry is styled as an anime episode card / manga chapter.
 */
export default function ExperienceSection() {
  return (
    <section
      id="experience"
      style={{
        padding: 'var(--spacing-section) 1.5rem',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ maxWidth: '800px' }}>
        {/* Section header */}
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-subtitle" style={{ color: '#ffd700' }}>
              Story Arc
            </span>
            <h2 className="section-title anime-gradient-text" style={{ marginTop: '0.5rem' }}>
              Experience & Education
            </h2>
          </div>
        </SectionReveal>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
          {/* Vertical timeline line */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: '14px',
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(180deg, #ff6b9d, #a855f7, #00f5d4, transparent)',
          }} />

          {experience.map((item, i) => (
            <TimelineItem key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const accentColors = ['#ff6b9d', '#00f5d4', '#a855f7', '#ffd700'];
  const accent = accentColors[index % accentColors.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        position: 'relative',
        marginBottom: '2rem',
      }}
    >
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={isInView ? { scale: 1 } : {}}
        transition={{ delay: index * 0.15 + 0.2, type: 'spring', stiffness: 400 }}
        style={{
          position: 'absolute',
          left: '-2.5rem',
          top: '1.5rem',
          width: '14px',
          height: '14px',
          borderRadius: '50%',
          background: accent,
          boxShadow: `0 0 15px ${accent}50`,
          border: '3px solid var(--bg-deep)',
          transform: 'translateX(-5px)',
          zIndex: 2,
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{
          y: -3,
          boxShadow: `0 8px 30px ${accent}15`,
          borderColor: `${accent}40`,
        }}
        className="glass-panel"
        style={{
          padding: '1.5rem',
          borderRadius: '1rem',
          position: 'relative',
          overflow: 'hidden',
          transition: 'border-color 0.3s ease',
        }}
      >
        {/* Chapter number */}
        <div style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 800,
          fontSize: '2.5rem',
          color: 'var(--text-primary)',
          opacity: 0.04,
          lineHeight: 1,
        }}>
          {item.chapter}
        </div>

        {/* Period badge */}
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          padding: '0.2rem 0.7rem',
          borderRadius: '9999px',
          background: `${accent}15`,
          border: `1px solid ${accent}30`,
          color: accent,
          fontSize: '0.7rem',
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 600,
          marginBottom: '0.75rem',
        }}>
          <span style={{ fontSize: '0.6rem' }}>📅</span>
          {item.period} {/* TODO: Replace dates */}
        </div>

        {/* Role */}
        <h3 style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '1.2rem',
          fontWeight: 700,
          color: 'var(--text-primary)',
          marginBottom: '0.2rem',
        }}>
          {item.role} {/* TODO: Replace role */}
        </h3>

        {/* Company */}
        <div style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: '0.85rem',
          fontWeight: 500,
          color: accent,
          marginBottom: '0.6rem',
        }}>
          {item.company} {/* TODO: Replace company */}
        </div>

        {/* Description */}
        <p style={{
          fontSize: '0.88rem',
          color: 'var(--text-muted)',
          lineHeight: 1.6,
          marginBottom: '1rem',
        }}>
          {item.description} {/* TODO: Replace description */}
        </p>

        {/* Tech tags */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
          {item.techUsed.map((tech) => (
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

        {/* Left accent stripe */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '3px', height: '100%',
          background: `linear-gradient(180deg, ${accent}, transparent)`,
          opacity: 0.5,
        }} />
      </motion.div>
    </motion.div>
  );
}
