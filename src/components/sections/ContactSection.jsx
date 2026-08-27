import { motion } from 'framer-motion';
import SectionReveal from '../ui/SectionReveal';
import GlowButton from '../ui/GlowButton';
import SocialIcon from '../ui/SocialIcon';
import { personalInfo } from '../../utils/constants';

/**
 * Contact section — minimal contact form placeholder + social links.
 */
export default function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name');
    const senderEmail = formData.get('email');
    const message = formData.get('message');
    const subject = `Portfolio enquiry from ${name}`;
    const body = `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`;
    const composeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(personalInfo.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.assign(composeUrl);
  };

  return (
    <section
      id="contact"
      style={{
        padding: 'var(--spacing-section) 1.5rem',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ maxWidth: '700px' }}>
        {/* Section header */}
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="section-subtitle" style={{ color: '#00f5d4' }}>
              Get In Touch
            </span>
            <h2 className="section-title anime-gradient-text" style={{ marginTop: '0.5rem' }}>
              Contact Me
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              maxWidth: '450px',
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}>
              Have a project in mind or just want to chat? Drop me a message and I'll get back to you.
            </p>
          </div>
        </SectionReveal>

        {/* Contact form */}
        <SectionReveal delay={0.15}>
          <form
            onSubmit={handleSubmit}
            className="glass-panel"
            style={{
              padding: '2rem',
              borderRadius: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Name input */}
            <div>
              <label
                htmlFor="contact-name"
                style={{
                  display: 'block',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.05em',
                }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(255, 107, 157, 0.5)';
                  e.target.style.boxShadow = '0 0 20px rgba(255, 107, 157, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-subtle)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Email input */}
            <div>
              <label
                htmlFor="contact-email"
                style={{
                  display: 'block',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.05em',
                }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  outline: 'none',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(0, 245, 212, 0.5)';
                  e.target.style.boxShadow = '0 0 20px rgba(0, 245, 212, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-subtle)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Message textarea */}
            <div>
              <label
                htmlFor="contact-message"
                style={{
                  display: 'block',
                  fontFamily: "'Outfit', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.8rem',
                  color: 'var(--text-muted)',
                  marginBottom: '0.4rem',
                  letterSpacing: '0.05em',
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me about your project..."
                rows={5}
                required
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.75rem',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-primary)',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.9rem',
                  outline: 'none',
                  resize: 'vertical',
                  minHeight: '120px',
                  transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = 'rgba(168, 85, 247, 0.5)';
                  e.target.style.boxShadow = '0 0 20px rgba(168, 85, 247, 0.1)';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = 'var(--border-subtle)';
                  e.target.style.boxShadow = 'none';
                }}
              />
            </div>

            {/* Submit */}
            <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
              <GlowButton variant="primary" size="lg" type="submit">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
                Send Message
              </GlowButton>
            </div>

            {/* Corner decorations */}
            <svg style={{ position: 'absolute', top: '10px', right: '10px' }} width="20" height="20" viewBox="0 0 20 20">
              <path d="M20 8 L20 0 L12 0" fill="none" stroke="#00f5d4" strokeWidth="1.5" opacity="0.25" />
            </svg>
            <svg style={{ position: 'absolute', bottom: '10px', left: '10px' }} width="20" height="20" viewBox="0 0 20 20">
              <path d="M0 12 L0 20 L8 20" fill="none" stroke="#ff6b9d" strokeWidth="1.5" opacity="0.25" />
            </svg>
          </form>
        </SectionReveal>

        {/* Social links repeat */}
        <SectionReveal delay={0.3}>
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginTop: '2rem',
          }}>
            <SocialIcon platform="github" href={personalInfo.social.github} label="GitHub" />
            <SocialIcon platform="linkedin" href={personalInfo.social.linkedin} label="LinkedIn" />
            {personalInfo.social.twitter && (
              <SocialIcon platform="twitter" href={personalInfo.social.twitter} label="Twitter" />
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
