import { motion } from 'framer-motion';

/**
 * Anime title-card styled intro splash screen.
 * Shows a dramatic title reveal, then fades out.
 * Skippable via click or keypress (handled by parent).
 */
export default function IntroSplash({ onComplete }) {
  return (
    <motion.div
      key="intro-splash"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#080810',
        overflow: 'hidden',
      }}
    >
      {/* Speed lines background */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        {Array.from({ length: 30 }).map((_, i) => {
          const angle = (i / 30) * 360;
          const delay = i * 0.05;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.15, 0], scale: [0, 3, 5] }}
              transition={{ duration: 2.5, delay, ease: 'easeOut' }}
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                width: '2px',
                height: '200px',
                background: `linear-gradient(to bottom, transparent, ${i % 3 === 0 ? '#ff6b9d' : i % 3 === 1 ? '#00f5d4' : '#a855f7'}, transparent)`,
                transformOrigin: 'top center',
                transform: `rotate(${angle}deg)`,
              }}
            />
          );
        })}
      </div>

      {/* Central glow */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.5, 1], opacity: [0, 0.5, 0.2] }}
        transition={{ duration: 2, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 107, 157, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.5, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontWeight: 900,
          fontSize: 'clamp(2.5rem, 8vw, 5rem)',
          background: 'linear-gradient(135deg, #ff6b9d, #a855f7, #00f5d4)',
          backgroundSize: '200% 200%',
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          animation: 'gradient-shift 3s ease infinite',
          textAlign: 'center',
          zIndex: 1,
          lineHeight: 1.1,
        }}
      >
        MY DIGITAL SPACE
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 0.5, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        style={{
          fontFamily: "'Outfit', sans-serif",
          fontSize: 'clamp(0.7rem, 2vw, 0.85rem)',
          color: '#8888aa',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          marginTop: '0.75rem',
          zIndex: 1,
        }}
      >
        Loading Digital Experience...
      </motion.p>

      {/* Skip hint */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 2, duration: 0.5 }}
        style={{
          position: 'absolute',
          bottom: '2rem',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem',
          color: '#555570',
          letterSpacing: '0.1em',
          zIndex: 1,
        }}
      >
        Click anywhere or press any key to skip
      </motion.p>

      {/* Decorative corners */}
      <svg style={{ position: 'absolute', top: '2rem', left: '2rem', zIndex: 1 }} width="40" height="40" viewBox="0 0 40 40">
        <path d="M0 20 L0 0 L20 0" fill="none" stroke="#ff6b9d" strokeWidth="1.5" opacity="0.3" />
      </svg>
      <svg style={{ position: 'absolute', top: '2rem', right: '2rem', zIndex: 1 }} width="40" height="40" viewBox="0 0 40 40">
        <path d="M40 20 L40 0 L20 0" fill="none" stroke="#ff6b9d" strokeWidth="1.5" opacity="0.3" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '4rem', left: '2rem', zIndex: 1 }} width="40" height="40" viewBox="0 0 40 40">
        <path d="M0 20 L0 40 L20 40" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.3" />
      </svg>
      <svg style={{ position: 'absolute', bottom: '4rem', right: '2rem', zIndex: 1 }} width="40" height="40" viewBox="0 0 40 40">
        <path d="M40 20 L40 40 L20 40" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.3" />
      </svg>
    </motion.div>
  );
}
