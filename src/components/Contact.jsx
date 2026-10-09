import { useState } from 'react';
import SectionTitle from './SectionTitle';

// React Icons
import {
  FaWhatsapp,
  FaLinkedinIn,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaLocationDot,
} from 'react-icons/fa6';

import { LuLoader } from 'react-icons/lu';

function ContactInfo({ personalInfo }) {
  const cleanPhone = (personalInfo.phone || '').replace(/[^0-9]/g, '');
  const waDirectUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent("Hi Thanesh! I saw your portfolio and would like to connect.")}`;

  const items = [
    {
      icon: <FaWhatsapp size={22} />,
      label: 'WhatsApp',
      value: personalInfo.phone,
      href: waDirectUrl,
      highlight: true,
    },
    {
      icon: <FaEnvelope size={20} />,
      label: 'Email',
      value: personalInfo.email,
      href: personalInfo.email !== '[YOUR EMAIL]' ? `mailto:${personalInfo.email}` : null,
    },
    {
      icon: <FaPhone size={19} />,
      label: 'Phone',
      value: personalInfo.phone,
      href: personalInfo.phone !== '[YOUR PHONE]' ? `tel:${personalInfo.phone}` : null,
    },
    {
      icon: <FaLocationDot size={20} />,
      label: 'Location',
      value: personalInfo.location,
      href: null,
    },
    {
      icon: <FaLinkedinIn size={20} />,
      label: 'LinkedIn',
      value: personalInfo.linkedin !== '[YOUR LINKEDIN URL]' ? 'LinkedIn Profile' : personalInfo.linkedin,
      href: personalInfo.linkedin !== '[YOUR LINKEDIN URL]' ? personalInfo.linkedin : null,
    },
    {
      icon: <FaGithub size={20} />,
      label: 'GitHub',
      value: personalInfo.github !== '[YOUR GITHUB URL]' ? 'GitHub Profile' : personalInfo.github,
      href: personalInfo.github !== '[YOUR GITHUB URL]' ? personalInfo.github : null,
    },
  ];

  return (
    <div className="reveal-left">
      <h2 className="contact__left-heading">Let&apos;s Connect</h2>
      <p className="contact__left-desc">
        Whether you have a project in mind, an internship or job opportunity, or just want to connect — reach out directly on WhatsApp or drop a message!
      </p>

      {/* Quick WhatsApp Action Button */}
      <a
        href={waDirectUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-quick-btn"
        aria-label="Direct chat on WhatsApp"
      >
        <FaWhatsapp size={20} />
        <span>Chat on WhatsApp Directly</span>
      </a>

      <div className="contact__info-list">
        {items.map(item => (
          <div key={item.label} className={`contact__info-item${item.highlight ? ' contact__info-item--highlight' : ''}`}>
            <div className={`contact__info-icon${item.highlight ? ' contact__info-icon--whatsapp' : ''}`} aria-hidden="true">
              {item.icon}
            </div>
            <div>
              <div className="contact__info-label">{item.label}</div>
              {item.href ? (
                <a
                  href={item.href}
                  className="contact__info-value"
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                >
                  {item.value}
                </a>
              ) : (
                <span className="contact__info-value">{item.value}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ContactForm({ personalInfo }) {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [lastWaUrl, setLastWaUrl] = useState('');

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) {
      errs.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    else if (form.message.trim().length < 5) errs.message = 'Message must be at least 5 characters.';
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setLoading(true);

    // Clean phone number (e.g. "+91 93453 95315" -> "919345395315")
    const cleanPhone = (personalInfo.phone || '919345395315').replace(/[^0-9]/g, '');

    // Construct formatted WhatsApp message
    const formattedText = `👋 *New Message from Portfolio Website*\n\n👤 *Name:* ${form.name.trim()}\n📧 *Email:* ${form.email.trim()}\n📌 *Subject:* ${form.subject.trim()}\n\n💬 *Message:*\n${form.message.trim()}`;

    const waUrl = `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(formattedText)}`;
    setLastWaUrl(waUrl);

    // Brief UI feedback before launching WhatsApp
    await new Promise(r => setTimeout(r, 600));
    setLoading(false);
    setSubmitted(true);

    // Open WhatsApp in a new tab/window
    window.open(waUrl, '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  if (submitted) {
    return (
      <div className="contact__form-wrap">
        <div className="whatsapp-success-card">
          <div className="whatsapp-success-icon" aria-hidden="true">
            <FaWhatsapp size={32} />
          </div>
          <h4 className="whatsapp-success-title">Message Prepared for WhatsApp!</h4>
          <p className="whatsapp-success-desc">
            WhatsApp has been opened in a new tab with your pre-filled message for <strong>Thanesh</strong>.
          </p>
          <div className="whatsapp-success-actions">
            {lastWaUrl && (
              <a
                href={lastWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp btn--sm"
              >
                <FaWhatsapp size={16} /> Re-open WhatsApp
              </a>
            )}
            <button
              type="button"
              onClick={handleReset}
              className="btn btn--ghost btn--sm"
            >
              Send Another Message
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="contact__form-wrap reveal-right">
      <div className="contact__form-header">
        <h3 className="contact__form-title">Send a Message</h3>
        <span className="whatsapp-form-badge">
          <FaWhatsapp size={14} /> Receives on WhatsApp
        </span>
      </div>

      <form className="contact__form" onSubmit={handleSubmit} noValidate aria-label="Contact form to WhatsApp">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contact-name" className="form-label">Name *</label>
            <input
              type="text"
              id="contact-name"
              name="name"
              className={`form-input${errors.name ? ' form-input--error' : ''}`}
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              autoComplete="name"
              aria-required="true"
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && <span id="name-error" className="form-error" role="alert">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label htmlFor="contact-email" className="form-label">Email *</label>
            <input
              type="email"
              id="contact-email"
              name="email"
              className={`form-input${errors.email ? ' form-input--error' : ''}`}
              placeholder="your@email.com"
              value={form.email}
              onChange={handleChange}
              autoComplete="email"
              aria-required="true"
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && <span id="email-error" className="form-error" role="alert">{errors.email}</span>}
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="contact-subject" className="form-label">Subject *</label>
          <input
            type="text"
            id="contact-subject"
            name="subject"
            className={`form-input${errors.subject ? ' form-input--error' : ''}`}
            placeholder="e.g. Frontend Developer Role / Project Inquiry"
            value={form.subject}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          />
          {errors.subject && <span id="subject-error" className="form-error" role="alert">{errors.subject}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="contact-message" className="form-label">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            className={`form-input form-textarea${errors.message ? ' form-input--error' : ''}`}
            placeholder="Tell me about your opportunity or project requirements..."
            value={form.message}
            onChange={handleChange}
            aria-required="true"
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && <span id="message-error" className="form-error" role="alert">{errors.message}</span>}
        </div>

        <button type="submit" className="btn btn--primary btn--lg contact__submit-btn" disabled={loading} aria-label="Send message to WhatsApp">
          {loading ? (
            <>
              <LuLoader size={18} style={{ animation: 'spin 1s linear infinite' }} />
              Opening WhatsApp…
            </>
          ) : (
            <>
              <FaWhatsapp size={18} />
              Send via WhatsApp
            </>
          )}
        </button>

        <p className="form-notice">
          ⚡ Submitting will instantly format and transfer your message directly to Thanesh&apos;s WhatsApp (+91 93453 95315).
        </p>
      </form>
    </div>
  );
}

export default function Contact({ personalInfo }) {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <SectionTitle
          label="Contact"
          heading="Get In Touch"
          subtext="Have an opportunity, a project, or want to connect? Send a message directly to my WhatsApp."
        />

        <div className="contact__grid">
          <ContactInfo personalInfo={personalInfo} />
          <ContactForm personalInfo={personalInfo} />
        </div>
      </div>
    </section>
  );
}
