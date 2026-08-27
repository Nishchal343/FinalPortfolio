import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/layout/Navbar';
import AnimeCursor from './components/ui/AnimeCursor';
import ParticleCanvas from './components/effects/ParticleCanvas';
import AmbientGradient from './components/effects/AmbientGradient';
import IntroSplash from './components/sections/IntroSplash';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactSection from './components/sections/ContactSection';
import Footer from './components/sections/Footer';
import InkDivider from './components/ui/InkDivider';
import SpeedLines from './components/ui/SpeedLines';

/**
 * Root App — orchestrates the intro splash, global effects, and all sections.
 */
export default function App() {
  const { theme, toggleTheme, isDark } = useTheme();
  const [showIntro, setShowIntro] = useState(true);
  const [appReady, setAppReady] = useState(false);

  // Skip intro with any key/click
  useEffect(() => {
    if (!showIntro) return;
    const timer = setTimeout(() => {
      setShowIntro(false);
      setAppReady(true);
    }, 3500);

    const skip = () => {
      clearTimeout(timer);
      setShowIntro(false);
      setAppReady(true);
    };

    window.addEventListener('click', skip);
    window.addEventListener('keydown', skip);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('click', skip);
      window.removeEventListener('keydown', skip);
    };
  }, [showIntro]);

  return (
    <>
      <AnimeCursor />

      {/* Intro Splash Screen */}
      <AnimatePresence>
        {showIntro && <IntroSplash onComplete={() => { setShowIntro(false); setAppReady(true); }} />}
      </AnimatePresence>

      {/* Main Site */}
      {appReady && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Navbar isDark={isDark} onToggleTheme={toggleTheme} />

          {/* Global ambient effects */}
          <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
            <AmbientGradient />
            <ParticleCanvas />
          </div>

          <main style={{ position: 'relative', zIndex: 1 }}>
            <HeroSection />
            <InkDivider />
            <AboutSection />
            <SpeedLines color="#00f5d4" />
            <SkillsSection />
            <InkDivider />
            <ProjectsSection />
            <ContactSection />
          </main>

          <Footer />
        </motion.div>
      )}
    </>
  );
}
