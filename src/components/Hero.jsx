import { useEffect, useRef } from 'react';
import '../styles/hero.css';

// React Icons
import {
  FaGithub,
  FaLinkedinIn,
  FaWhatsapp,
  FaEnvelope,
  FaDownload,
  FaArrowRight,
  FaCss3Alt,
} from 'react-icons/fa6';

import {
  SiReact,
  SiJavascript,
} from 'react-icons/si';

const CODE_LINES = [
  { indent: 0, content: <><span className="c-keyword">import</span> <span className="c-component">React</span> <span className="c-keyword">from</span> <span className="c-string">'react'</span><span className="c-plain">;</span></> },
  { indent: 0, content: <><span className="c-comment">// Building experiences ✨</span></> },
  { indent: 0, content: <></> },
  { indent: 0, content: <><span className="c-keyword">const</span> <span className="c-component">Developer</span> <span className="c-plain">= () </span><span className="c-bracket">{'=> {'}</span></> },
  { indent: 1, content: <><span className="c-keyword">return</span> <span className="c-bracket">{'('}</span></> },
  { indent: 2, content: <><span className="c-bracket">{'<'}</span><span className="c-tag">Portfolio</span></> },
  { indent: 3, content: <><span className="c-attr">skills</span><span className="c-plain">=</span><span className="c-bracket">{'{'}</span><span className="c-string">skills</span><span className="c-bracket">{'}'}</span></> },
  { indent: 3, content: <><span className="c-attr">passion</span><span className="c-plain">=</span><span className="c-bracket">{'{'}</span><span className="c-string">true</span><span className="c-bracket">{'}'}</span></> },
  { indent: 2, content: <><span className="c-bracket">{'/>'}</span></> },
  { indent: 1, content: <><span className="c-bracket">{')'}</span><span className="c-plain">;</span></> },
  { indent: 0, content: <><span className="c-bracket">{'}'}</span><span className="c-plain">;</span></> },
];

export default function Hero({ personalInfo }) {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });
  const rafRef = useRef(null);

  // Aurora canvas effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let time = 0;

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    resize();
    window.addEventListener('resize', resize);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // Layer 1: Base violet glow
      const g1 = ctx.createRadialGradient(
        width * (0.5 + mx * 0.15),
        height * (0.5 + my * 0.15),
        0,
        width * 0.5, height * 0.5,
        width * 0.55
      );
      g1.addColorStop(0, `rgba(124,58,237,${0.12 + Math.sin(time * 0.5) * 0.03})`);
      g1.addColorStop(0.4, `rgba(167,139,250,${0.06 + Math.sin(time * 0.3) * 0.02})`);
      g1.addColorStop(1, 'rgba(248,250,252,0)');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, width, height);

      // Layer 2: Moving aurora blob
      const blobX = width * (0.3 + Math.sin(time * 0.4) * 0.2 + mx * 0.15);
      const blobY = height * (0.4 + Math.cos(time * 0.35) * 0.2 + my * 0.15);
      const g2 = ctx.createRadialGradient(blobX, blobY, 0, blobX, blobY, width * 0.4);
      g2.addColorStop(0, 'rgba(167,139,250,0.18)');
      g2.addColorStop(0.6, 'rgba(124,58,237,0.06)');
      g2.addColorStop(1, 'rgba(248,250,252,0)');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, width, height);

      // Layer 3: Subtle wave curves (shader-inspired)
      ctx.save();
      ctx.strokeStyle = 'rgba(124,58,237,0.05)';
      ctx.lineWidth = 1.5;
      for (let w = 0; w < 3; w++) {
        ctx.beginPath();
        const offset = (w * Math.PI) / 3;
        for (let x = 0; x <= width; x += 10) {
          const y =
            height * 0.5 +
            Math.sin(x * 0.008 + time * 0.5 + offset) * 35 +
            Math.cos(x * 0.004 + time * 0.3) * 20;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.restore();

      time += 0.012;
      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Track mouse over hero
  useEffect(() => {
    const hero = document.getElementById('home');
    if (!hero) return;
    const onMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width - 0.5,
        y: (e.clientY - rect.top) / rect.height - 0.5,
      };
    };
    hero.addEventListener('mousemove', onMove);
    return () => hero.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section id="home" className="hero" aria-label="Hero section">
      <div className="container">
        <div className="hero__grid">
          {/* Left: Content */}
          <div className="hero__content">
            <span className="hero__label" aria-label="Role">
              <span className="hero__label-dot" aria-hidden="true" />
              Frontend Developer
            </span>

            <h1 className="hero__heading">
              <span className="hero__heading-name">Hi, I&apos;m</span>
              <span className="hero__heading-name" style={{ color: 'var(--color-text)' }}>{personalInfo.name}</span>
              <span className="hero__heading-role shimmer-text">Frontend Developer</span>
            </h1>

            <p className="hero__description">
              {personalInfo.description}
            </p>

            <div className="hero__actions">
              <a href="#projects" className="btn btn--primary btn--lg">
                <FaArrowRight size={15} />
                View Projects
              </a>
              <a
                href={personalInfo.resume || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline btn--lg"
                download="Thanesh_S_Resume.pdf"
                aria-label="Download Resume"
              >
                <FaDownload size={15} />
                Download Resume
              </a>
            </div>

            {/* Social Links */}
            <div className="hero__socials">
              <span className="hero__socials-label">Find me on</span>
              {personalInfo.github && (
                <a href={personalInfo.github} className="hero__social-link" target="_blank" rel="noopener noreferrer" aria-label="GitHub profile">
                  <FaGithub size={17} />
                </a>
              )}
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} className="hero__social-link" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile">
                  <FaLinkedinIn size={17} />
                </a>
              )}
              {personalInfo.phone && (
                <a
                  href={`https://wa.me/${(personalInfo.phone || '').replace(/[^0-9]/g, '')}?text=${encodeURIComponent("Hi Thanesh, I saw your portfolio!")}`}
                  className="hero__social-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={17} />
                </a>
              )}
              {personalInfo.email && (
                <a href={`mailto:${personalInfo.email}`} className="hero__social-link" aria-label="Send email">
                  <FaEnvelope size={17} />
                </a>
              )}
            </div>
          </div>

          {/* Right: Aurora Visual */}
          <div className="hero__visual" aria-hidden="true">
            <div className="hero__aurora-container">
              {/* Aurora Canvas */}
              <canvas ref={canvasRef} className="hero__aurora-canvas" aria-hidden="true" />

              {/* Inner Code Window */}
              <div className="hero__aurora-inner">
                <div className="hero__code-window">
                  <div className="hero__code-topbar">
                    <span className="hero__code-dot hero__code-dot--red" />
                    <span className="hero__code-dot hero__code-dot--yellow" />
                    <span className="hero__code-dot hero__code-dot--green" />
                    <span className="hero__code-filename">Developer.jsx</span>
                  </div>
                  <div className="hero__code-body">
                    {CODE_LINES.map((line, i) => (
                      <code
                        key={i}
                        className="hero__code-line"
                        style={{
                          paddingLeft: `${line.indent * 16}px`,
                          animationDelay: `${i * 0.08}s`,
                        }}
                      >
                        {line.content || '\u00A0'}
                      </code>
                    ))}
                  </div>
                </div>
              </div>

              {/* Orbiting rings */}
              <div className="hero__ring" />
              <div className="hero__ring hero__ring-2" />

              {/* Floating Badges */}
              <div className="hero__badge hero__badge--top-left">
                <span className="hero__badge-icon">
                  <SiReact size={18} color="#61DAFB" />
                </span>
                React.js
              </div>
              <div className="hero__badge hero__badge--bottom-right">
                <span className="hero__badge-icon">
                  <FaCss3Alt size={18} color="#264de4" />
                </span>
                CSS3
              </div>
              <div className="hero__badge hero__badge--top-right">
                <span className="hero__badge-icon">
                  <SiJavascript size={18} color="#F7DF1E" />
                </span>
                JavaScript
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
