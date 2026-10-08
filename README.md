# 🚀 Frontend Developer Portfolio

A premium, modern, responsive frontend developer portfolio built with **React.js + Vite**.

## ✨ Features

- **Violet & White** brand identity — clean, professional, recruiter-friendly
- **Aurora/Mesh Gradient Hero** — animated canvas glow reacting to mouse movement
- **Sticky Navbar** — glass blur effect on scroll, active section tracking, mobile hamburger menu
- **Interactive Skills Grid** — tabbed categories with SVG icons and hover glow
- **Vertical Timeline** — for Work Experience
- **Internship Cards** — with violet accent hover
- **Projects Grid** — 3-col → 2-col → 1-col responsive, with category filters and image zoom overlay
- **Certifications Grid** — clean cards with award icon
- **Resume CTA** — full-width violet section with glow
- **Contact Form** — client-side validation, accessible, with success state
- **Cursor Glow** — subtle desktop-only violet radial glow following mouse
- **Back to Top** — floating button appears on scroll
- **Fully accessible** — semantic HTML, ARIA labels, focus states, reduced-motion support
- **SEO ready** — title, meta description, Open Graph tags

---

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Experience.jsx
│   ├── Internship.jsx
│   ├── Projects.jsx
│   ├── Certifications.jsx
│   ├── ResumeCTA.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── SectionTitle.jsx
│   └── CursorGlow.jsx
├── data/
│   └── portfolioData.js     ← 📝 EDIT THIS FILE to update all content
├── styles/
│   ├── global.css           ← Design tokens & base styles
│   ├── navbar.css
│   ├── hero.css
│   └── sections.css
├── App.jsx
└── main.jsx
```

---

## 📝 How to Personalize

**All content lives in one file: `src/data/portfolioData.js`**

Open it and replace the `[PLACEHOLDER]` values:

### Personal Info
```js
export const personalInfo = {
  name: "Your Name",
  email: "you@email.com",
  phone: "+91 00000 00000",
  location: "City, Country",
  linkedin: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  resume: "/your-resume.pdf",  // Place PDF in /public folder
  photo: "/your-photo.jpg",    // Place image in /public folder
};
```

### Add Your Photo
1. Place your photo in the `public/` folder (e.g., `public/photo.jpg`)
2. Set `photo: "/photo.jpg"` in `personalInfo`

### Add Your Resume
1. Place your resume PDF in `public/` (e.g., `public/resume.pdf`)
2. Set `resume: "/resume.pdf"` in `personalInfo`

### Add Projects
```js
export const projects = [
  {
    id: 1,
    name: "My Project",
    description: "A short description.",
    image: "/images/project1.png",  // Place in public/images/
    category: "React",              // "All" | "HTML/CSS" | "JavaScript" | "React"
    technologies: ["React", "CSS"],
    features: ["Feature 1", "Feature 2"],
    github: "https://github.com/you/repo",
    live: "https://yourproject.com",
  },
];
```

### Add Certifications
```js
export const certifications = [
  {
    id: 1,
    name: "Certificate Name",
    issuer: "Organization",
    date: "Jan 2024",
    credentialId: "ABC123",
    link: "https://verify.link",
  },
];
```

---

## 🔌 Enable Real Email in Contact Form

The contact form does client-side validation only. To send real emails, integrate one of:

- **[EmailJS](https://www.emailjs.com/)** — free tier available
- **[Formspree](https://formspree.io/)** — form backend
- **[Web3Forms](https://web3forms.com/)** — simple, free

Then update the `handleSubmit` function in `src/components/Contact.jsx`.

---

## 🛠️ Commands

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

---

## 🎨 Design Tokens

Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --color-primary: #7C3AED;       /* Violet */
  --color-primary-dark: #5B21B6;  /* Dark Violet */
  --color-primary-light: #A78BFA; /* Light Violet */
  --color-text: #111827;          /* Dark Charcoal */
  --color-bg: #F8FAFC;            /* Background */
}
```
