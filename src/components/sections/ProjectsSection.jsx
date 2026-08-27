import SectionReveal from '../ui/SectionReveal';
import FeaturedCard from '../ui/FeaturedCard';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '../../utils/constants';

/**
 * Projects section — featured cards (top 3) + grid of remaining projects.
 * Anime poster / trading card design with hover animations.
 */
export default function ProjectsSection() {
  const featured = projects.filter(p => p.featured);
  const regular = projects.filter(p => !p.featured);

  return (
    <section
      id="projects"
      style={{
        padding: 'var(--spacing-section) 1.5rem',
        position: 'relative',
      }}
    >
      <div className="section-container" style={{ maxWidth: '1200px' }}>
        {/* Section header */}
        <SectionReveal>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="section-subtitle" style={{ color: '#a855f7' }}>
              Works Collection
            </span>
            <h2 className="section-title anime-gradient-text" style={{ marginTop: '0.5rem' }}>
              Featured Projects
            </h2>
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              maxWidth: '550px',
              margin: '1rem auto 0',
              lineHeight: 1.7,
            }}>
              Each project is a new chapter in my development journey. Here are some of the stories I'm most proud of.
            </p>
          </div>
        </SectionReveal>

        {/* Featured projects — larger cards */}
        <div
          className="featured-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          {featured.map((project, i) => (
            <FeaturedCard key={project.id} project={project} index={i} />
          ))}
        </div>

        {/* Section sub-header for regular projects */}
        <SectionReveal delay={0.1}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem',
          }}>
            <div style={{
              height: '1px',
              flex: 1,
              background: 'linear-gradient(90deg, transparent, var(--border-subtle))',
            }} />
            <span style={{
              fontFamily: "'Outfit', sans-serif",
              fontWeight: 600,
              fontSize: '0.85rem',
              color: 'var(--text-dim)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}>
              More Projects
            </span>
            <div style={{
              height: '1px',
              flex: 1,
              background: 'linear-gradient(90deg, var(--border-subtle), transparent)',
            }} />
          </div>
        </SectionReveal>

        {/* Regular project grid */}
        <div
          className="project-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.25rem',
          }}
        >
          {regular.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Responsive refinements */}
      <style>{`
        @media (max-width: 640px) {
          .featured-grid {
            grid-template-columns: 1fr !important;
          }
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
