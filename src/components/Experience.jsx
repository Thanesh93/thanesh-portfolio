import SectionTitle from './SectionTitle';

function TimelineItem({ item }) {
  return (
    <div className="timeline-item">
      <div className="timeline-item__dot" aria-hidden="true" />
      <div className="timeline-item__card">
        <div className="timeline-item__header">
          <div>
            <div className="timeline-item__company">{item.company}</div>
            <div className="timeline-item__role">{item.role}</div>
          </div>
          <div className="timeline-item__meta">
            <span className="timeline-item__duration">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
              </svg>
              {item.duration}
            </span>
            {item.type && (
              <span className="timeline-item__type-badge">{item.type}</span>
            )}
          </div>
        </div>

        <div className="timeline-item__divider" aria-hidden="true" />

        <ul className="timeline-item__responsibilities" aria-label="Responsibilities">
          {item.responsibilities.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        <div className="timeline-item__tech-label">Technologies Used</div>
        <div className="timeline-item__tech-tags">
          {item.technologies.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience({ experience }) {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <SectionTitle
          label="Experience"
          heading="Work Experience"
          subtext="My professional journey and the roles I've taken on."
        />

        {experience.length > 0 ? (
          <div className="timeline" role="list" aria-label="Work experience timeline">
            {experience.map(item => (
              <div key={item.id} role="listitem">
                <TimelineItem item={item} />
              </div>
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px', color: 'var(--color-text-muted)' }}>
            <p>Add your experience in <code>src/data/portfolioData.js</code></p>
          </div>
        )}
      </div>
    </section>
  );
}
