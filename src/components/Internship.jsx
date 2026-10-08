import SectionTitle from './SectionTitle';
import { LuCalendar } from 'react-icons/lu';

function InternshipCard({ item, index = 0 }) {
  const delayClass = `delay-${((index % 4) + 1) * 100}`;
  return (
    <div className={`internship-card reveal-up ${delayClass} hover-float`}>
      <div className="internship-card__header">
        <div className="internship-card__company">{item.company}</div>
        <div className="internship-card__role">{item.role}</div>
        <div className="internship-card__duration">
          <LuCalendar size={13} style={{ display: 'inline', marginRight: '4px' }} aria-hidden="true" />
          {item.duration}
        </div>
      </div>

      <div className="timeline-item__divider" aria-hidden="true" />

      <div className="internship-card__section-label">Technologies</div>
      <div className="internship-card__tech">
        {item.technologies.map(tech => (
          <span key={tech} className="tag">{tech}</span>
        ))}
      </div>

      <div className="internship-card__section-label">Responsibilities</div>
      <ul className="internship-card__responsibilities" aria-label="Internship responsibilities">
        {item.responsibilities.map((r, i) => (
          <li key={i}>{r}</li>
        ))}
      </ul>
    </div>
  );
}

export default function Internship({ internships }) {
  return (
    <section id="internship" className="section internship">
      <div className="container">
        <SectionTitle
          label="Internship"
          heading="Internship Experience"
          subtext="Hands-on industry experience that shaped my practical skills."
        />

        {internships.length > 0 ? (
          <div className="internship__grid">
            {internships.map((item, idx) => (
              <InternshipCard key={item.id} item={item} index={idx} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px', color: 'var(--color-text-muted)' }}>
            <p>Add your internship in <code>src/data/portfolioData.js</code></p>
          </div>
        )}
      </div>
    </section>
  );
}
