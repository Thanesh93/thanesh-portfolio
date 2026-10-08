import { useState, useEffect } from 'react';
import '../styles/navbar.css';
import { FaWhatsapp, FaArrowRight } from 'react-icons/fa6';
import { LuMenu, LuX } from 'react-icons/lu';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#internship', label: 'Internship' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar({ name = 'Thanesh' }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState('#home');

  const nameParts = name.split(' ');
  const firstName = nameParts[0] || 'Thanesh';
  const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Intersection observer for active section
  useEffect(() => {
    const sections = NAV_LINKS.map(l => document.querySelector(l.href)).filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(`#${e.target.id}`);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sections.forEach(s => observer.observe(s));
    return () => sections.forEach(s => observer.unobserve(s));
  }, []);

  const handleNavClick = (href) => {
    setActive(href);
    setMobileOpen(false);
  };

  return (
    <header className={`navbar-wrapper${scrolled ? ' navbar-wrapper--scrolled' : ''}`}>
      <nav className="navbar" aria-label="Main navigation">
        <div className="navbar__inner">
          {/* Brand Logo */}
          <a href="#home" className="navbar__logo" onClick={() => handleNavClick('#home')} aria-label="Go to top">
            <div className="navbar__logo-badge" aria-hidden="true">
              <span>{firstName[0]}</span>
            </div>
            <div className="navbar__logo-text-wrap">
              <span className="navbar__logo-name">
                {firstName}{lastName ? <strong> {lastName}</strong> : ''}
              </span>
              <span className="navbar__logo-role">Frontend Dev</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(link => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`navbar__link${isActive ? ' navbar__link--active' : ''}`}
                    onClick={() => handleNavClick(link.href)}
                  >
                    {isActive && <span className="navbar__active-dot" aria-hidden="true" />}
                    <span>{link.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Desktop CTA */}
          <div className="navbar__actions">
            <a
              href="#contact"
              className="btn btn--primary btn--sm navbar__cta"
              onClick={() => handleNavClick('#contact')}
            >
              <span>Let&apos;s Talk</span>
              <FaArrowRight size={12} />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(prev => !prev)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? <LuX size={22} /> : <LuMenu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          id="mobile-menu"
          className={`navbar__mobile${mobileOpen ? ' navbar__mobile--open' : ''}`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="navbar__mobile-links">
            {NAV_LINKS.map(link => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`navbar__mobile-link${isActive ? ' navbar__mobile-link--active' : ''}`}
                  onClick={() => handleNavClick(link.href)}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="navbar__mobile-active-indicator" aria-hidden="true" />}
                </a>
              );
            })}
          </div>

          <div className="navbar__mobile-footer">
            <a
              href="#contact"
              className="btn btn--primary btn--sm navbar__mobile-cta"
              onClick={() => handleNavClick('#contact')}
            >
              <span>Let&apos;s Talk</span>
              <FaArrowRight size={12} />
            </a>
            <a
              href="https://wa.me/919345395315?text=Hi%20Thanesh,%20I%20saw%20your%20portfolio!"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--whatsapp btn--sm navbar__mobile-wa"
            >
              <FaWhatsapp size={15} /> WhatsApp
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
