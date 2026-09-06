import { useState } from 'react';
import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import SkillBar from '../ui/SkillBar';
import { skillArchive } from '../../utils/constants';

/**
 * Skills / Tech Stack section — Naruto-inspired shinobi skill scroll.
 */
export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState('languages');

  const tabs = [
    { id: 'languages', label: 'Languages', icon: '✦', color: '#ff6b9d' },
    { id: 'tools', label: 'Developer Tools', icon: '◆', color: '#00f5d4' },
    { id: 'frameworks', label: 'Frameworks & Libraries', icon: '▣', color: '#a855f7' },
    { id: 'databases', label: 'Databases', icon: '◈', color: '#ffd700' },
    { id: 'testing', label: 'Testing', icon: '✓', color: '#ff8ab5' },
    { id: 'interests', label: 'Areas of Interest', icon: '✹', color: '#ff6b9d' },
  ];

  const barColors = {
    languages: '#ff6b9d',
    frameworks: '#00f5d4',
    tools: '#00f5d4',
    databases: '#ffd700',
    testing: '#ff8ab5',
    interests: '#ff6b9d',
  };

  return (
    <section
      id="skills"
      style={{
        padding: 'var(--spacing-section) 1.5rem',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ maxWidth: '800px' }}>
        {/* Section header */}
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-subtitle" style={{ color: '#00f5d4' }}>
              Abilities
            </span>
            <h2 className="section-title anime-gradient-text" style={{ marginTop: '0.5rem' }}>
              Skills & Tech Stack
            </h2>
          </div>
        </SectionReveal>

        {/* Category tabs */}
        <SectionReveal delay={0.1}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.5rem',
            marginBottom: '2.5rem',
            flexWrap: 'wrap',
          }}>
            {tabs.map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  padding: '0.6rem 1.25rem',
                  borderRadius: '0.75rem',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  fontSize: '0.85rem',
                  color: activeTab === tab.id ? '#fff' : 'var(--text-muted)',
                  background: activeTab === tab.id
                    ? `linear-gradient(135deg, ${tab.color}, ${tab.color}cc)`
                    : 'var(--bg-panel)',
                  border: activeTab === tab.id
                    ? `1px solid ${tab.color}60`
                    : '1px solid var(--border-subtle)',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.4rem',
                  transition: 'all 0.3s ease',
                  boxShadow: activeTab === tab.id
                    ? `0 4px 20px ${tab.color}30`
                    : 'none',
                }}
              >
                <span>{tab.icon}</span>
                <span>{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </SectionReveal>

        {/* Skill bars */}
        <SectionReveal delay={0.2}>
          <div
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Shinobi scroll header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              flexWrap: 'wrap',
              marginBottom: '1.5rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid var(--border-subtle)',
            }}>
              <div style={{
                fontFamily: "'Outfit', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                color: barColors[activeTab],
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}>
                <span>{tabs.find(t => t.id === activeTab)?.icon}</span>
                {activeTab === 'interests' ? 'INTERESTS' : 'TECHNICAL SKILLS'}
              </div>
              <div style={{
                fontFamily: "'Zen Kaku Gothic New', sans-serif",
                fontSize: '0.65rem',
                color: 'var(--text-dim)',
                letterSpacing: '0.1em',
              }}>
                PROFESSIONAL TOOLKIT
              </div>
            </div>

            {/* Animated skill bars */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {skillArchive[activeTab]?.map((skill, i) => (
                <SkillBar
                  key={skill}
                  name={skill}
                  icon={tabs.find(t => t.id === activeTab)?.icon}
                  index={i}
                  color={barColors[activeTab]}
                />
              ))}
            </motion.div>

            {/* Corner decorations */}
            <svg style={{ position: 'absolute', top: '10px', right: '10px' }} width="20" height="20" viewBox="0 0 20 20">
              <path d="M20 8 L20 0 L12 0" fill="none" stroke={barColors[activeTab]} strokeWidth="1.5" opacity="0.25" />
            </svg>
            <svg style={{ position: 'absolute', bottom: '10px', left: '10px' }} width="20" height="20" viewBox="0 0 20 20">
              <path d="M0 12 L0 20 L8 20" fill="none" stroke={barColors[activeTab]} strokeWidth="1.5" opacity="0.25" />
            </svg>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
