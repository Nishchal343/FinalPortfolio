import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import { testimonials } from '../../utils/constants';

/**
 * Testimonials section — anime-themed quote carousel.
 * Auto-rotating testimonial cards with navigation dots.
 */
export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  // Auto-rotate
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  const goTo = (index) => {
    setCurrent(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent(prev => (prev + 1) % testimonials.length);
    }, 5000);
  };

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{
        padding: 'var(--spacing-section) 1.5rem',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ maxWidth: '750px' }}>
        {/* Section header */}
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-subtitle" style={{ color: '#ff6b9d' }}>
              Recommendations
            </span>
            <h2 className="section-title anime-gradient-text" style={{ marginTop: '0.5rem' }}>
              Testimonials
            </h2>
          </div>
        </SectionReveal>

        {/* Testimonial card */}
        <SectionReveal delay={0.1}>
          <div
            className="glass-panel"
            style={{
              padding: '2.5rem 2rem',
              borderRadius: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
              minHeight: '250px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Large decorative quote mark */}
            <div style={{
              position: 'absolute',
              top: '1rem',
              left: '1.5rem',
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 900,
              fontSize: '5rem',
              color: '#ff6b9d',
              opacity: 0.08,
              lineHeight: 1,
              userSelect: 'none',
            }}>
              "
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                {/* Quote */}
                <p style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.95rem, 2.5vw, 1.1rem)',
                  color: 'var(--text-primary)',
                  lineHeight: 1.8,
                  fontStyle: 'italic',
                  maxWidth: '580px',
                }}>
                  "{t.quote}" {/* TODO: Replace testimonial quote */}
                </p>

                {/* Author info */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  {/* Avatar placeholder */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #ff6b9d, #a855f7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: 700,
                    fontSize: '1rem',
                    flexShrink: 0,
                  }}>
                    {t.name?.charAt(0) || '?'} {/* TODO: Replace with avatar image */}
                  </div>
                  <div style={{ textAlign: 'left' }}>
                    <div style={{
                      fontFamily: "'Outfit', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                    }}>
                      {t.name} {/* TODO: Replace name */}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}>
                      {t.role} @ {t.company} {/* TODO: Replace role/company */}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Corner decorations */}
            <svg style={{ position: 'absolute', top: '10px', right: '10px' }} width="20" height="20" viewBox="0 0 20 20">
              <path d="M20 8 L20 0 L12 0" fill="none" stroke="#ff6b9d" strokeWidth="1.5" opacity="0.25" />
            </svg>
            <svg style={{ position: 'absolute', bottom: '10px', left: '10px' }} width="20" height="20" viewBox="0 0 20 20">
              <path d="M0 12 L0 20 L8 20" fill="none" stroke="#a855f7" strokeWidth="1.5" opacity="0.25" />
            </svg>
          </div>
        </SectionReveal>

        {/* Navigation dots */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.5rem',
          marginTop: '1.5rem',
        }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              style={{
                width: i === current ? '32px' : '10px',
                height: '10px',
                borderRadius: '5px',
                background: i === current
                  ? 'linear-gradient(90deg, #ff6b9d, #a855f7)'
                  : 'var(--bg-elevated)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: i === current ? '0 0 12px rgba(255, 107, 157, 0.3)' : 'none',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
