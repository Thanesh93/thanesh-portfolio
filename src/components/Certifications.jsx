import { useState } from 'react';
import SectionTitle from './SectionTitle';
import { LuAward, LuExternalLink, LuEye, LuCalendar, LuX } from 'react-icons/lu';

function CertCard({ cert, onPreview, index = 0 }) {
  const delayClass = `delay-${((index % 3) + 1) * 150}`;
  return (
    <div className={`cert-card reveal-up ${delayClass} hover-float`} aria-label={`Certification: ${cert.name}`}>
      {/* Certificate Image Preview */}
      {cert.image && (
        <div
          className="cert-card__preview"
          onClick={() => onPreview(cert)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === 'Enter' && onPreview(cert)}
          aria-label={`Enlarge ${cert.name}`}
        >
          <img src={cert.image} alt={cert.name} loading="lazy" />
          <div className="cert-card__preview-overlay">
            <span className="cert-card__preview-badge">
              <LuEye size={14} /> Click to View
            </span>
          </div>
        </div>
      )}

      <div className="cert-card__header">
        <div className="cert-card__icon">
          <LuAward size={22} />
        </div>
        <div>
          <div className="cert-card__issuer">{cert.issuer}</div>
          <div className="cert-card__date">
            <LuCalendar size={12} style={{ display: 'inline', marginRight: '4px' }} aria-hidden="true" />
            {cert.date}
          </div>
        </div>
      </div>

      <h3 className="cert-card__name">{cert.name}</h3>

      {cert.skills && (
        <div className="cert-card__skills-tag">{cert.skills}</div>
      )}

      {cert.credentialId && (
        <div className="cert-card__id">Credential ID: <code>{cert.credentialId}</code></div>
      )}

      <div className="cert-card__actions">
        {cert.image && (
          <button
            type="button"
            className="btn btn--primary btn--sm"
            onClick={() => onPreview(cert)}
            aria-label={`View certificate preview for ${cert.name}`}
          >
            <LuEye size={14} /> View Certificate
          </button>
        )}
        {cert.link && (
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--ghost btn--sm"
            aria-label={`Verify issuer for ${cert.name}`}
          >
            <LuExternalLink size={14} /> Verify
          </a>
        )}
      </div>
    </div>
  );
}

export default function Certifications({ certifications }) {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <SectionTitle
          label="Certifications"
          heading="Licenses & Certifications"
          subtext="Credentials and internship completions validating practical frontend skills."
        />

        {certifications && certifications.length > 0 ? (
          <div className="certifications__grid">
            {certifications.map((cert, idx) => (
              <CertCard key={cert.id} cert={cert} onPreview={setSelectedCert} index={idx} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '48px', color: 'var(--color-text-muted)' }}>
            <p>Add your certifications in <code>src/data/portfolioData.js</code></p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div className="cert-modal" role="dialog" aria-modal="true" onClick={() => setSelectedCert(null)}>
          <div className="cert-modal__content" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-modal__close"
              onClick={() => setSelectedCert(null)}
              aria-label="Close certificate preview"
            >
              <LuX size={18} />
            </button>
            <div className="cert-modal__header">
              <h3>{selectedCert.name}</h3>
              <p>{selectedCert.issuer} — {selectedCert.date}</p>
            </div>
            <div className="cert-modal__image-wrap">
              <img src={selectedCert.image} alt={selectedCert.name} />
            </div>
            <div className="cert-modal__footer">
              {selectedCert.credentialId && (
                <span className="cert-modal__id">Credential ID: <code>{selectedCert.credentialId}</code></span>
              )}
              {selectedCert.link && (
                <a
                  href={selectedCert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary btn--sm"
                >
                  <LuExternalLink size={14} /> Visit Issuer Website
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
