// ============================================================
// PORTFOLIO DATA — Thanesh | Frontend Developer
// ============================================================

export const personalInfo = {
  name: "Thanesh",
  title: "Frontend Developer",
  tagline: "Hi, I'm Thanesh",
  description:
    "I build responsive, modern and user-friendly web experiences using HTML, CSS, JavaScript and React.",
  email: "sthanesh2003@gmail.com",
  phone: "+91 93453 95315",
  location: "Nagercoil, Kanyakumari District, Tamil Nadu",
  linkedin: "https://www.linkedin.com/in/thanesh-profile/",
  github: "https://github.com/Thanesh93",
  resume: "/Thanesh_S_Resume.pdf",
  photo: "/images/thanesh.jpg",
};

export const aboutContent = {
  heading: "About Me",
  paragraphs: [
    "I'm a B.Sc. Computer Science graduate with practical experience in frontend development and building responsive, user-friendly web applications. I enjoy crafting modern and intuitive digital experiences with a strong focus on responsive design, usability, and performance.",
    "My core stack includes React.js, Next.js, JavaScript, HTML5, and CSS3. I'm skilled in Tailwind CSS and Bootstrap for styling, and I have hands-on experience working with REST APIs, Git, GitHub, and modern AI-assisted development workflows.",
    "I've worked on real-world frontend projects during my internships and built production-ready web interfaces. I'm a quick learner with strong problem-solving, communication, and teamwork skills — always eager to grow as a Frontend Developer.",
  ],
  highlights: [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Responsive Design",
    "Git & GitHub",
    "REST API Basics",
  ],
};

export const skills = {
  Frontend: [
    { name: "HTML5", icon: "html5" },
    { name: "CSS3", icon: "css3" },
    { name: "JavaScript", icon: "javascript" },
    { name: "React.js", icon: "react" },
    { name: "Next.js", icon: "nextjs" },
    { name: "Responsive Web Design", icon: "responsive" },
    { name: "REST API Basics", icon: "api" },
  ],
  "UI & Styling": [
    { name: "Tailwind CSS", icon: "tailwind" },
    { name: "Bootstrap", icon: "bootstrap" },
    { name: "UI Development", icon: "ui" },
  ],
  Tools: [
    { name: "Antigravity", icon: "antigravity" },
    { name: "Git", icon: "git" },
    { name: "GitHub", icon: "github" },
    { name: "VS Code", icon: "vscode" },
    { name: "Browser DevTools", icon: "devtools" },
    { name: "MS Office", icon: "office" },
  ],
  Additional: [
    { name: "Prompt Engineering", icon: "prompt" },
    { name: "AI-Assisted Dev", icon: "ai" },
    { name: "Problem Solving", icon: "problem" },
    { name: "Debugging", icon: "debug" },
  ],
};

export const experience = [];
// No full-time experience listed — add when you have one:
// {
//   id: 1,
//   company: "Company Name",
//   role: "Frontend Developer",
//   duration: "Jan 2024 – Present",
//   type: "Full-time",
//   responsibilities: ["...", "...", "..."],
//   technologies: ["React", "JavaScript"],
// }

export const internships = [
  {
    id: 1,
    company: "Networkz Systems",
    location: "Nagercoil",
    role: "Web Development Intern",
    duration: "Sep 2024 – Dec 2024 (120 Hrs)",
    technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    responsibilities: [
      "Completed 120 hours of comprehensive training in Web Development (Basics + Advanced).",
      "Built modern responsive web layouts and gained practical exposure to frontend workflows.",
    ],
  },
  {
    id: 2,
    company: "Prodigy InfoTech",
    location: "Virtual",
    role: "Web Development Intern",
    duration: "Jul 2024 – Jul 2024 (1 Month)",
    technologies: ["HTML5", "CSS3", "JavaScript", "Web Development"],
    responsibilities: [
      "Completed a 1-month intensive web development internship with outstanding remarks.",
      "Developed interactive web pages and strengthened core frontend development skills.",
    ],
  },
  {
    id: 3,
    company: "CODSOFT",
    location: "Virtual",
    role: "Web Development Intern",
    duration: "Jul 2024 – Aug 2024 (4 Weeks)",
    technologies: ["HTML5", "CSS3", "JavaScript", "UI Design"],
    responsibilities: [
      "Successfully completed a 4-week virtual internship program in Web Development.",
      "Delivered assigned web tasks and projects showcasing strong frontend problem solving.",
    ],
  },
  {
    id: 4,
    company: "Zetamind Technology",
    location: "Nagercoil",
    role: "React Development Intern",
    duration: "2024 (Duration Unspecified)",
    technologies: ["React.js", "JavaScript", "CSS3", "Component Architecture"],
    responsibilities: [
      "Gained practical experience in React.js development and component-based architecture.",
      "Developed reusable UI components and strengthened knowledge of modern frontend application development.",
    ],
  },
];

export const projects = [
  {
    id: 1,
    name: "Royal Uzhavan Web Application",
    description:
      "A live production web application developed as a Frontend Developer. Built responsive, user-friendly web interfaces with a focus on performance and modern UI.",
    image: "/images/royal-uzhavan.png",
    category: "React",
    technologies: ["Next.js", "React.js", "JavaScript", "Tailwind CSS"],
    features: [
      "Responsive and user-friendly web interfaces",
      "Reusable UI components with component-based architecture",
      "Modern frontend practices with Next.js and Tailwind CSS",
    ],
    github: "https://github.com/Ajay176854/Royal-Uzhavan",
    live: "https://www.royaluzhavan.in/",
  },
  // Add more projects as they are developed
];

export const certifications = [
  {
    id: 1,
    name: "Diploma in Software Engineering",
    issuer: "Networkz Systems, Nagercoil",
    date: "Dec 2024 (Issued Feb 2025)",
    duration: "120 Hrs",
    credentialId: "NSNCV0824064",
    skills: "Web Development - Basics + Advanced",
    image: "/certificates/networkz-diploma.jpg",
    link: "https://www.networkzsystems.com",
  },
  {
    id: 2,
    name: "Certificate of Completion – Web Development",
    issuer: "Prodigy InfoTech",
    date: "July 2024 (Issued Aug 2024)",
    duration: "1 Month Internship",
    credentialId: "PIT/JUL24/11441",
    skills: "Web Development (Outstanding remarks)",
    image: "/certificates/prodigy-infotech.jpg",
    link: "https://prodigyinfotech.dev",
  },
  {
    id: 3,
    name: "Certificate of Completion – Web Development",
    issuer: "CODSOFT",
    date: "Aug 2024 (Issued Aug 2024)",
    duration: "4 Weeks Virtual Internship",
    credentialId: "390f7d8",
    skills: "Web Development",
    image: "/certificates/codsoft.jpg",
    link: "https://www.codsoft.in",
  },
];

export const education = {
  degree: "Bachelor of Science (B.Sc.) – Computer Science",
  institution: "Pioneer Kumaraswamy College, Nagercoil",
  duration: "2021 – 2024",
  cgpa: "7.12 / 10",
};
