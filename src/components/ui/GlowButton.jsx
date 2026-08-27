import { motion } from 'framer-motion';

/**
 * Glowing neon-styled CTA button with anime energy.
 * Supports primary (sakura) and secondary (cyan) variants.
 */
export default function GlowButton({
  children,
  onClick,
  href,
  variant = 'primary', // 'primary', 'secondary', 'outline'
  size = 'md', // 'sm', 'md', 'lg'
  className = '',
  download,
  ...props
}) {
  const variants = {
    primary: {
      background: 'linear-gradient(135deg, #ff6b9d, #ff2e63)',
      boxShadow: '0 0 20px rgba(255, 107, 157, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      color: '#fff',
      hoverShadow: '0 0 35px rgba(255, 107, 157, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    },
    secondary: {
      background: 'linear-gradient(135deg, #00f5d4, #00c9a7)',
      boxShadow: '0 0 20px rgba(0, 245, 212, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.15)',
      color: '#0a0a14',
      hoverShadow: '0 0 35px rgba(0, 245, 212, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
    },
    outline: {
      background: 'transparent',
      boxShadow: 'inset 0 0 0 2px rgba(255, 107, 157, 0.4)',
      color: '#ff6b9d',
      hoverShadow: 'inset 0 0 0 2px rgba(255, 107, 157, 0.8), 0 0 25px rgba(255, 107, 157, 0.2)',
    },
  };

  const sizes = {
    sm: { padding: '0.5rem 1.25rem', fontSize: '0.85rem' },
    md: { padding: '0.75rem 2rem', fontSize: '1rem' },
    lg: { padding: '1rem 2.5rem', fontSize: '1.1rem' },
  };

  const style = variants[variant];
  const sizeStyle = sizes[size];

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: sizeStyle.padding,
    fontSize: sizeStyle.fontSize,
    fontFamily: "'Outfit', sans-serif",
    fontWeight: 600,
    color: style.color,
    background: style.background,
    border: 'none',
    borderRadius: '0.75rem',
    boxShadow: style.boxShadow,
    textDecoration: 'none',
    letterSpacing: '0.02em',
    position: 'relative',
    overflow: 'hidden',
  };

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      download={download}
      className={className}
      style={buttonStyle}
      whileHover={{
        scale: 1.05,
        boxShadow: style.hoverShadow,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      {...props}
    >
      {children}
    </Component>
  );
}
