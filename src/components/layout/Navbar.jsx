import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ui/ThemeToggle';
import { navLinks } from '../../utils/constants';

/**
 * Floating glassmorphism navigation bar with active section highlighting.
 * Collapses to hamburger on mobile.
 */
export default function Navbar({ isDark, onToggleTheme }) {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  // Track scroll position and active section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Determine active section
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileOpen(false);
  }, []);

  return (
    <>
      <motion.nav
        className="site-nav"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: 'calc(100% - 2rem)',
          maxWidth: '900px',
          padding: '0.6rem 1.25rem',
          borderRadius: '1rem',
          background: isScrolled ? 'var(--bg-glass)' : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          border: isScrolled ? '1px solid var(--border-subtle)' : '1px solid transparent',
          transition: 'background 0.3s ease, border 0.3s ease, backdrop-filter 0.3s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, '#hero')}
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 800,
            fontSize: '1.2rem',
            textDecoration: 'none',
            background: 'linear-gradient(135deg, #ff6b9d, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <span style={{ fontSize: '1.4rem' }}>⚡</span>
          <span className="nav-brand-subtitle" style={{ fontSize: '0.7rem', opacity: 0.6 }}>MY DIGITAL SPACE</span>
        </a>

        {/* Desktop nav links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.25rem',
        }}
        className="nav-desktop-links"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                style={{
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.8rem',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#ff6b9d' : 'var(--text-muted)',
                  background: isActive ? 'rgba(255, 107, 157, 0.1)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
              >
                {link.label}
              </a>
            );
          })}
          <div style={{ marginLeft: '0.5rem' }}>
            <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          </div>
        </div>

        {/* Mobile hamburger + theme toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="nav-mobile-controls">
          <ThemeToggle isDark={isDark} onToggle={onToggleTheme} />
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
              padding: '8px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <motion.span
              animate={isMobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              style={{ width: '20px', height: '2px', background: 'var(--text-primary)', display: 'block', borderRadius: '1px' }}
            />
            <motion.span
              animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
              style={{ width: '20px', height: '2px', background: 'var(--text-primary)', display: 'block', borderRadius: '1px' }}
            />
            <motion.span
              animate={isMobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              style={{ width: '20px', height: '2px', background: 'var(--text-primary)', display: 'block', borderRadius: '1px' }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="nav-mobile-menu"
            style={{
              position: 'fixed',
              top: '5rem',
              left: '1rem',
              right: '1rem',
              zIndex: 999,
              padding: '1rem',
              borderRadius: '1rem',
              background: 'var(--bg-glass)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid var(--border-subtle)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  style={{
                    padding: '0.75rem 1rem',
                    borderRadius: '0.5rem',
                    fontSize: '0.95rem',
                    fontFamily: "'Outfit', sans-serif",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? '#ff6b9d' : 'var(--text-primary)',
                    background: isActive ? 'rgba(255, 107, 157, 0.1)' : 'transparent',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Responsive CSS for nav */}
      <style>{`
        .nav-mobile-controls { display: none; }
        .nav-mobile-menu { display: none; }

        @media (max-width: 768px) {
          .nav-desktop-links { display: none !important; }
          .nav-mobile-controls { display: flex !important; }
          .nav-mobile-menu { display: flex !important; }
        }

        @media (max-width: 420px) {
          .site-nav {
            top: 0.5rem !important;
            width: calc(100% - 1rem) !important;
            padding: 0.45rem 0.7rem !important;
          }
          .nav-brand-subtitle { display: none; }
          .nav-mobile-menu {
            top: 4.25rem !important;
            left: 0.5rem !important;
            right: 0.5rem !important;
          }
        }
      `}</style>
    </>
  );
}
