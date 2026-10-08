import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { FaGithub } from 'react-icons/fa6';
import { LuExternalLink, LuImage } from 'react-icons/lu';

const FILTER_CATEGORIES = ['All', 'HTML/CSS', 'JavaScript', 'React'];

const ImagePlaceholder = () => (
  <div className="project-card__placeholder">
    <LuImage size={36} color="var(--color-primary-light)" />
    <p>Add project screenshot</p>
  </div>
);

function ProjectCard({ project }) {
  return (
    <article className="project-card hover-float" aria-label={`Project: ${project.name}`}>
      {/* Image */}
      <div className="project-card__image-wrap">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot of ${project.name}`}
            className="project-card__image"
            loading="lazy"
          />
        ) : (
          <ImagePlaceholder />
        )}
        {/* Hover overlay */}
        <div className="project-card__overlay" aria-hidden="true">
          {project.github && project.github !== '[GITHUB REPO LINK]' && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__overlay-btn">
              <FaGithub size={15} /> GitHub
            </a>
          )}
          {project.live && project.live !== '[LIVE DEMO LINK]' && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-card__overlay-btn">
              <LuExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="project-card__body">
        <span className="project-card__category-tag">{project.category}</span>
        <h3 className="project-card__name">{project.name}</h3>
        <p className="project-card__desc">{project.description}</p>

        {/* Key Features */}
        {project.features && project.features.length > 0 && (
          <div className="project-card__features">
            {project.features.slice(0, 3).map((f, i) => (
              <span key={i} className="project-card__feature">{f}</span>
            ))}
          </div>
        )}

        {/* Tech Tags */}
        <div className="project-card__tech">
          {project.technologies.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="project-card__footer">
        {project.github && project.github !== '[GITHUB REPO LINK]' ? (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn btn--ghost btn--sm" aria-label={`View ${project.name} source code on GitHub`}>
            <FaGithub size={14} /> Code
          </a>
        ) : (
          <span className="btn btn--ghost btn--sm" style={{ opacity: 0.4, cursor: 'default' }}>
            <FaGithub size={14} /> Code
          </span>
        )}
        {project.live && project.live !== '[LIVE DEMO LINK]' ? (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn--primary btn--sm" aria-label={`View live demo of ${project.name}`}>
            <LuExternalLink size={14} /> Live Demo
          </a>
        ) : (
          <span className="btn btn--outline btn--sm" style={{ opacity: 0.4, cursor: 'default' }}>
            <LuExternalLink size={14} /> Demo
          </span>
        )}
      </div>
    </article>
  );
}

export default function Projects({ projects }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter(p => {
        const cat = (p.category || '').toLowerCase();
        const filter = activeFilter.toLowerCase();
        const techs = (p.technologies || []).map(t => t.toLowerCase());

        if (filter === 'html/css') {
          return cat.includes('html') || cat.includes('css') || techs.some(t => /html|css|tailwind|bootstrap/i.test(t));
        }
        if (filter === 'javascript') {
          return cat.includes('javascript') || cat.includes('js') || techs.some(t => /javascript|react|next/i.test(t));
        }
        if (filter === 'react') {
          return cat.includes('react') || techs.some(t => /react|next/i.test(t));
        }
        return cat.includes(filter) || techs.some(t => t.includes(filter));
      });

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <SectionTitle
          label="Projects"
          heading="Featured Projects"
          subtext="A showcase of things I've built — from experiments to polished products."
        />

        {/* Filters */}
        <div className="projects__filters reveal-up delay-100" role="group" aria-label="Filter projects by category">
          {FILTER_CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`projects__filter${activeFilter === cat ? ' projects__filter--active' : ''}`}
              onClick={() => setActiveFilter(cat)}
              aria-pressed={activeFilter === cat}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="projects__grid">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '64px', color: 'var(--color-text-muted)' }}>
            <p>No projects in this category yet.</p>
          </div>
        )}
      </div>
    </section>
  );
}
