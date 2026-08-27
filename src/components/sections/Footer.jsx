import { personalInfo } from '../../utils/constants';

/**
 * Footer — minimal, with social icons, anime signature mark, and credit line.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        padding: '1.5rem 1.5rem 0.75rem',
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
      }}
    >
      <div className="section-container" style={{
        maxWidth: '1000px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.75rem',
      }}>
        {/* Anime-styled logo mark */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <div style={{
            width: '24px',
            height: '24px',
            borderRadius: '8px',
            background: 'linear-gradient(135deg, #ff6b9d, #a855f7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.8rem',
          }}>
            ⚡
          </div>
          <span style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 700,
            fontSize: '0.85rem',
            background: 'linear-gradient(135deg, #ff6b9d, #a855f7)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}>
            {personalInfo.firstName || 'Portfolio'}
          </span>
          <span
            className="jp-text"
            style={{
              fontSize: '0.6rem',
              color: 'var(--text-dim)',
              opacity: 0.5,
            }}
          >
            MY DIGITAL SPACE
          </span>
        </div>

        {/* Decorative divider */}
        <svg width="90" height="3" viewBox="0 0 120 4" aria-hidden="true">
          <line x1="0" y1="2" x2="120" y2="2" stroke="url(#footer-grad)" strokeWidth="1" />
          <defs>
            <linearGradient id="footer-grad" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="30%" stopColor="#ff6b9d" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#a855f7" stopOpacity="0.5" />
              <stop offset="100%" stopColor="transparent" />
            </linearGradient>
          </defs>
        </svg>

        {/* Credit */}
        <div style={{
          fontSize: '0.72rem',
          color: 'var(--text-dim)',
          textAlign: 'center',
          lineHeight: 1.6,
          fontFamily: "'Inter', sans-serif",
        }}>
          <span>© {currentYear} {personalInfo.name}. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
