import { LuDownload, LuSend } from 'react-icons/lu';

export default function ResumeCTA({ personalInfo }) {
  return (
    <section className="resume-cta" aria-label="Resume Call to Action">
      <div className="container">
        <div className="resume-cta__inner reveal-scale">
          <h2 className="resume-cta__heading">
            Let&apos;s Build Something Great Together
          </h2>
          <p className="resume-cta__sub">
            Open to new opportunities, freelance projects, and collaborations. Let&apos;s connect and create something meaningful.
          </p>
          <div className="resume-cta__actions">
            <a
              href={personalInfo.resume || '#'}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--white btn--lg"
              download="Thanesh_S_Resume.pdf"
              aria-label="Download Resume"
            >
              <LuDownload size={17} />
              Download Resume
            </a>
            <a href="#contact" className="btn btn--lg" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', border: '2px solid rgba(255,255,255,0.5)' }} aria-label="Go to Contact section">
              <LuSend size={16} />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
