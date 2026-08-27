import { useRef } from 'react';
import SectionReveal from '../ui/SectionReveal';
import { personalInfo } from '../../utils/constants';

/**
 * About section with bio text and personal details.
 */
export default function AboutSection() {
  const sectionRef = useRef(null);
  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        padding: 'var(--spacing-section) 1.5rem',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1000px' }}>
        {/* Section header */}
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <h2 className="section-title anime-gradient-text" style={{ marginTop: '0.5rem' }}>
              About Me
            </h2>
          </div>
        </SectionReveal>

        {/* Main content */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: '2.5rem',
        }}
        className="about-grid"
        >
          {/* Bio panel */}
          <SectionReveal delay={0.1} direction="left">
            <div
              className="glass-panel"
              style={{
                padding: '2rem',
                borderRadius: '0.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Bio text */}
              <p className="scroll-copy" style={{
                fontSize: '1rem',
                lineHeight: 1.8,
                color: '#d8d6e8',
                marginBottom: '1.5rem',
              }}>
                {/* TODO: Replace with your bio */}
                {personalInfo.bio}
              </p>

              {/* Location & Title */}
              <div className="scroll-details" style={{
                display: 'flex',
                gap: '1.5rem',
                flexWrap: 'wrap',
                fontSize: '0.85rem',
                color: '#aaa7c5',
              }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#ff6b9d" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {personalInfo.location} {/* TODO: Update location */}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#00f5d4" strokeWidth="2">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                  {personalInfo.title} {/* TODO: Update title */}
                </span>
              </div>

              {/* Halftone dot texture */}
              <div style={{
                position: 'absolute', inset: 0, opacity: 0.02,
                backgroundImage: 'radial-gradient(circle, var(--text-primary) 1px, transparent 1px)',
                backgroundSize: '8px 8px', pointerEvents: 'none',
              }} />

              {/* Corner decorations */}
              <svg style={{ position: 'absolute', top: '12px', right: '12px' }} width="20" height="20" viewBox="0 0 20 20">
                <path d="M20 8 L20 0 L12 0" fill="none" stroke="#ff6b9d" strokeWidth="1.5" opacity="0.3" />
              </svg>
              <svg style={{ position: 'absolute', bottom: '12px', left: '12px' }} width="20" height="20" viewBox="0 0 20 20">
                <path d="M0 12 L0 20 L8 20" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.3" />
              </svg>
            </div>
          </SectionReveal>

        </div>
      </div>

      {/* About section responsive CSS */}
      <style>{`
        @media (min-width: 768px) {
          .about-grid {
            gap: 2rem;
          }
        }
      `}</style>
    </section>
  );
}
