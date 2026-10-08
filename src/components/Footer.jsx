import { useState, useEffect } from 'react';

// React Icons
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
  FaChevronUp,
} from 'react-icons/fa6';

export default function Footer({ personalInfo }) {
  const [showBackTop, setShowBackTop] = useState(false);
  const year = new Date().getFullYear();

  useEffect(() => {
    const onScroll = () => setShowBackTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const cleanPhone = (personalInfo.phone || '').replace(/[^0-9]/g, '');
  const waUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Thanesh, I saw your portfolio and would like to connect!")}`;

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Internship', href: '#internship' },
    { label: 'Projects', href: '#projects' },
    { label: 'Education', href: '#education' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <footer className="footer" role="contentinfo">
        {/* Top gradient glow line */}
        <div className="footer__glow-bar" aria-hidden="true" />

        <div className="container footer__container">
          <div className="footer__main">
            {/* Column 1: Brand & Availability */}
            <div className="footer__brand-col">
              <a href="#home" className="footer__logo">
                {personalInfo.name.split(' ')[0]}
                <span> {personalInfo.name.split(' ').slice(1).join(' ')}</span>
              </a>
              <p className="footer__role-tag">{personalInfo.title}</p>
              <p className="footer__bio">
                Building responsive, accessible, and high-performance web applications with React, Next.js, and modern UI practices.
              </p>

              <div className="footer__status-badge">
                <span className="footer__status-pulse" aria-hidden="true" />
                <span>Available for Full-time Roles & Projects</span>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="footer__nav-col">
              <h4 className="footer__col-heading">Navigation</h4>
              <ul className="footer__nav-list" role="list">
                {navLinks.map(link => (
                  <li key={link.href}>
                    <a href={link.href} className="footer__nav-link">
                      <span className="footer__nav-arrow">›</span> {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Contact Info */}
            <div className="footer__contact-col">
              <h4 className="footer__col-heading">Get in Touch</h4>
              <ul className="footer__contact-list">
                <li>
                  <a href={`mailto:${personalInfo.email}`} className="footer__contact-link">
                    <span className="footer__contact-icon">
                      <FaEnvelope size={15} color="var(--color-primary-light)" />
                    </span>
                    <span>{personalInfo.email}</span>
                  </a>
                </li>
                <li>
                  <a href={waUrl} target="_blank" rel="noopener noreferrer" className="footer__contact-link">
                    <span className="footer__contact-icon">
                      <FaWhatsapp size={16} color="#25D366" />
                    </span>
                    <span>{personalInfo.phone} (WhatsApp)</span>
                  </a>
                </li>
                <li>
                  <span className="footer__contact-link" style={{ cursor: 'default' }}>
                    <span className="footer__contact-icon">
                      <FaLocationDot size={15} color="var(--color-primary-light)" />
                    </span>
                    <span>{personalInfo.location}</span>
                  </span>
                </li>
              </ul>

              {/* Social Icon Pills */}
              <div className="footer__social-row">
                {personalInfo.github && (
                  <a
                    href={personalInfo.github}
                    className="footer__social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    title="GitHub"
                  >
                    <FaGithub size={17} />
                  </a>
                )}
                {personalInfo.linkedin && (
                  <a
                    href={personalInfo.linkedin}
                    className="footer__social-btn"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    title="LinkedIn"
                  >
                    <FaLinkedinIn size={17} />
                  </a>
                )}
                <a
                  href={waUrl}
                  className="footer__social-btn footer__social-btn--wa"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={17} />
                </a>
                {personalInfo.email && (
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="footer__social-btn"
                    aria-label="Send Email"
                    title="Email"
                  >
                    <FaEnvelope size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer__bottom">
            <p className="footer__copyright">
              &copy; {year} <strong style={{ color: 'var(--color-white)' }}>{personalInfo.name}</strong>. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* Floating Back to Top Button */}
      <button
        className={`footer__back-top${showBackTop ? ' footer__back-top--visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
        title="Scroll to top"
      >
        <FaChevronUp size={18} />
      </button>
    </>
  );
}
