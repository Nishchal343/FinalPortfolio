import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useMouseParallax } from '../../hooks/useMouseParallax';
import GlowButton from '../ui/GlowButton';
import { personalInfo } from '../../utils/constants';

/**
 * Hero section — large anime character portrait card with animated name reveal,
 * tagline, social links, and a resume download CTA.
 */
export default function HeroSection() {
  const heroRef = useRef(null);
  const photoRef = useRef(null);
  const { x, y } = useMouseParallax(photoRef, { intensity: 12 });

  const nameChars = personalInfo.name.split('');

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '6rem 1.5rem 4rem',
      }}
    >
      <div className="section-container" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '2.5rem',
        maxWidth: '900px',
        width: '100%',
      }}>
        {/* Profile Photo Card */}
        <motion.div
          ref={photoRef}
          initial={{ opacity: 0, scale: 0.8, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            position: 'relative',
            width: 'clamp(180px, 30vw, 240px)',
            height: 'clamp(220px, 36vw, 300px)',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            border: '2px solid rgba(255, 107, 157, 0.3)',
            background: 'var(--bg-panel)',
            boxShadow: '0 0 40px rgba(255, 107, 157, 0.15), 0 20px 60px rgba(0, 0, 0, 0.3)',
            transform: `perspective(800px) rotateY(${x * 0.3}deg) rotateX(${-y * 0.3}deg)`,
            transition: 'transform 0.1s ease-out',
          }}
        >
          {/* Animated glow border */}
          <div style={{
            position: 'absolute',
            inset: '-2px',
            borderRadius: '1.35rem',
            background: 'linear-gradient(135deg, #ff6b9d, #a855f7, #00f5d4, #ff6b9d)',
            backgroundSize: '300% 300%',
            animation: 'gradient-shift 4s ease infinite',
            zIndex: 0,
          }} />
          <div style={{
            position: 'absolute',
            inset: '2px',
            borderRadius: '1.15rem',
            background: 'var(--bg-panel)',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
          }}>
            {/* TODO: Replace with your photo — use an <img> tag here */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--text-dim)',
            }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff6b9d" strokeWidth="1.5" opacity="0.4">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 4-7 8-7s8 3 8 7" />
              </svg>
              <span style={{ fontSize: '0.65rem', fontFamily: "'Outfit', sans-serif", opacity: 0.5 }}>
                Your Photo
              </span>
            </div>
            {/* Halftone overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              opacity: 0.04,
              backgroundImage: 'radial-gradient(circle, var(--text-primary) 1px, transparent 1px)',
              backgroundSize: '6px 6px',
              pointerEvents: 'none',
            }} />
          </div>

          {/* Manga panel corner accents */}
          <svg style={{ position: 'absolute', top: '6px', left: '6px', zIndex: 2 }} width="24" height="24" viewBox="0 0 24 24">
            <path d="M0 12 L0 0 L12 0" fill="none" stroke="#ff6b9d" strokeWidth="2" opacity="0.5" />
          </svg>
          <svg style={{ position: 'absolute', bottom: '6px', right: '6px', zIndex: 2 }} width="24" height="24" viewBox="0 0 24 24">
            <path d="M24 12 L24 24 L12 24" fill="none" stroke="#00f5d4" strokeWidth="2" opacity="0.5" />
          </svg>
        </motion.div>

        {/* Name with animated character reveal */}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 900,
            fontSize: 'clamp(2.2rem, 7vw, 4.5rem)',
            lineHeight: 1.05,
            marginBottom: '0.75rem',
          }}>
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 30, rotate: -10 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.8 + i * 0.06,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                style={{
                  display: 'inline-block',
                  background: 'linear-gradient(135deg, #ff6b9d, #a855f7, #00f5d4)',
                  backgroundSize: '200% 200%',
                  WebkitBackgroundClip: 'text',
                  backgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  animation: 'gradient-shift 4s ease infinite',
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          {/* Tagline with typewriter cursor */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: 'clamp(1rem, 2.5vw, 1.3rem)',
              fontWeight: 400,
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.3rem',
            }}
          >
            {/* TODO: Update tagline */}
            {personalInfo.tagline}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1.2em',
              background: '#ff6b9d',
              animation: 'typewriter-blink 1s step-end infinite',
              marginLeft: '2px',
            }} />
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '3.5rem' }}
        >
          <GlowButton href="#projects" variant="primary" size="lg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" />
              <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" />
            </svg>
            View Projects
          </GlowButton>
          <GlowButton
            href={personalInfo.resumeUrl}  /* TODO: Add your resume URL */
            variant="outline"
            size="lg"
            download
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download Resume
          </GlowButton>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '1rem',
            left: '50vw',
            transform: 'translateX(-50%)',
            width: 'max-content',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.4rem',
            pointerEvents: 'none',
          }}
        >
          <span style={{
            fontSize: '0.65rem',
            fontFamily: "'Outfit', sans-serif",
            color: 'var(--text-dim)',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
          }}>
            Scroll Down
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ff6b9d" strokeWidth="2" opacity="0.5">
              <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
