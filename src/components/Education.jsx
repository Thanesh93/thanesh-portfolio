import SectionTitle from './SectionTitle';
import { LuGraduationCap, LuCalendar } from 'react-icons/lu';

export default function Education({ education }) {
  if (!education) return null;
  const eduList = Array.isArray(education) ? education : [education];

  return (
    <section id="education" className="section education">
      <div className="container">
        <SectionTitle
          label="Education"
          heading="Academic Background"
          subtext="My formal education and foundational computer science studies."
        />

        <div className="education__grid">
          {eduList.map((item, idx) => (
            <div key={idx} className="education-card reveal-up delay-100 hover-float">
              <div className="education-card__icon" aria-hidden="true">
                <LuGraduationCap size={26} />
              </div>
              <div className="education-card__body">
                <div className="education-card__header">
                  <div>
                    <h3 className="education-card__degree">{item.degree}</h3>
                    <div className="education-card__institution">{item.institution}</div>
                  </div>
                  <div className="education-card__duration">
                    <LuCalendar size={13} style={{ display: 'inline', marginRight: '4px' }} aria-hidden="true" />
                    {item.duration}
                  </div>
                </div>

                {item.cgpa && (
                  <div className="education-card__badge">
                    <span>CGPA: </span><strong>{item.cgpa}</strong>
                  </div>
                )}
                {item.score && (
                  <div className="education-card__badge">
                    <span>Score: </span><strong>{item.score}</strong>
                  </div>
                )}
                {item.details && (
                  <p className="education-card__details">{item.details}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
