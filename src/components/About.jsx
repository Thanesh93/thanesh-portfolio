import SectionTitle from './SectionTitle';
import { LuUser, LuSparkles } from 'react-icons/lu';

export default function About({ aboutContent, personalInfo }) {
  return (
    <section id="about" className="section about">
      <div className="container">
        <SectionTitle
          label="About Me"
          heading="Who Am I?"
          subtext="A bit about my background and what drives me as a developer."
        />

        <div className="about__grid">
          {/* Left: Photo */}
          <div className="about__photo-wrap reveal-left">
            <div className="about__photo-glow" aria-hidden="true" />
            <div className="about__photo-bg" aria-hidden="true" />
            <div className="about__photo-frame">
              {personalInfo.photo ? (
                <img
                  src={personalInfo.photo}
                  alt={`Portrait of ${personalInfo.name}`}
                  loading="lazy"
                />
              ) : (
                <div className="about__photo-placeholder" role="img" aria-label="Profile photo placeholder">
                  <LuUser size={72} color="var(--color-primary-light)" />
                  <p>Add your photo in<br />src/data/portfolioData.js</p>
                </div>
              )}
            </div>
          </div>

          {/* Right: Content */}
          <div className="about__content reveal-right">
            <h2 className="about__heading">{aboutContent.heading}</h2>
            <span className="about__heading-line" aria-hidden="true" />

            <div className="about__paragraphs">
              {aboutContent.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Skill Highlights */}
            <div className="about__highlights" role="list" aria-label="Core skills">
              {aboutContent.highlights.map((item) => (
                <span key={item} className="about__highlight-tag" role="listitem">
                  {item}
                </span>
              ))}
            </div>

            <a href="#skills" className="btn btn--primary">
              <LuSparkles size={16} />
              Explore My Skills
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
