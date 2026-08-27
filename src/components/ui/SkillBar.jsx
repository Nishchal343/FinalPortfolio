import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/**
 * Animated shinobi technique row without levels or percentages.
 */
export default function SkillBar({ name, icon, index = 0, color = '#ff6b9d' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -18 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -18 }}
      transition={{ delay: index * 0.08, duration: 0.45 }}
      whileHover={{ x: 6 }}
      style={{
        marginBottom: '0.75rem',
        padding: '0.8rem 1rem',
        border: `1px solid ${color}35`,
        borderLeft: `4px solid ${color}`,
        borderRadius: '0.35rem',
        background: 'rgba(35, 23, 20, 0.45)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        boxShadow: `inset 0 0 18px ${color}08`,
      }}
    >
      <span style={{ color, fontSize: '1.1rem' }}>{icon}</span>
      <span style={{
        fontFamily: "'Outfit', sans-serif",
        fontWeight: 600,
        fontSize: '0.9rem',
        color: '#eadbbd',
      }}>
        {name}
      </span>
      <span style={{ marginLeft: 'auto', color, fontSize: '0.75rem', opacity: 0.8 }}>◈</span>
    </motion.div>
  );
}
