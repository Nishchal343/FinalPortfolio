import { motion } from 'framer-motion';

/**
 * Dark/light theme toggle button.
 * Animated sun/moon icon transition.
 */
export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: '10px',
        background: 'var(--bg-panel)',
        border: '1px solid var(--border-subtle)',
        color: isDark ? '#ffd700' : '#ff6b9d',
        fontSize: '1.2rem',
        position: 'relative',
        overflow: 'hidden',
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: isDark
          ? '0 0 20px rgba(255, 215, 0, 0.3)'
          : '0 0 20px rgba(255, 107, 157, 0.3)',
      }}
      whileTap={{ scale: 0.9, rotate: 180 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
    >
      <motion.div
        key={isDark ? 'moon' : 'sun'}
        initial={{ y: -20, opacity: 0, rotate: -90 }}
        animate={{ y: 0, opacity: 1, rotate: 0 }}
        exit={{ y: 20, opacity: 0, rotate: 90 }}
        transition={{ duration: 0.3 }}
      >
        {isDark ? (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M21.64 13a1 1 0 00-1.05-.14 8.05 8.05 0 01-3.37.73 8.15 8.15 0 01-8.14-8.1 8.59 8.59 0 01.25-2A1 1 0 008 2.36a10.14 10.14 0 1014 11 1 1 0 00-.36-.36z"/>
          </svg>
        ) : (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <circle cx="12" cy="12" r="5"/>
            <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
          </svg>
        )}
      </motion.div>
    </motion.button>
  );
}
