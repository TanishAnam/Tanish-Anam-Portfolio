"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Open Set Logo Detection",
    type: "Computer Vision",
    description:
      "Two-stage detection and blurring pipeline using YOLOv5 and CSPResNeXt-50. Built to identify unauthorised logos in real-world media.",
    metric: "",
    tags: ["YOLOv5", "CSPResNeXt-50", "Computer Vision", "Object Detection"],
  },
  {
    number: "02",
    title: "Apple Stock Price Predictor",
    type: "Quantitative Research",
    description:
      "Time-series forecasting system combining Prophet trend modeling with GARCH volatility analysis and MAPE validation.",
    metric: "",
    tags: ["Prophet", "GARCH", "Time-Series Forecasting"],
  },
  {
    number: "03",
    title: "Car Care",
    type: "Cloud Application",
    description:
      "Cloud-hosted automotive workflow system with dual inventory operations, secure image handling and Azure SQL persistence.",
    metric: "",
    tags: [" .NET 8.0", "Azure SQL", "Azure Function App"],
  },
];

const experience = [
  {
    period: "JUL 2025 - PRESENT",
    title: "Capgemini Technology Services",
    role: "Software Engineer",
    description: [
      "Developed an AI powered Sentiment Analysis Platform for transport related social media monitoring.",
      "Built NLP pipelines for sentiment analysis, entity extraction and incident detection using VADER.",
      "Integrated Streamlit, Power BI and Ollama for analytics and AI insights.",
    ],
  },
  {
    period: "MAY - JUL 2024",
    title: "Mondelez International",
    role: "Technical Intern",
    description: [
      "Managed project schedules and reports for printer refresh projects across Australia, Bahrain and Nigeria.",
      "Prepared and analysed weekly incident reports using Power BI.",
      "Coordinated with network teams for IP address allocations and printer installations.",
      "Configured SMTP settings to resolve scanning issues at 25 Alliant sites in India.",
    ],
  },
];

const research = [
  {
    period: "2023 - 2025",
    title: "ICAML 2025",
    role: "Research Presenter",
    description:
      "Presented research on open-set logo detection and blurring using YOLOv5 and CSPResNeXt-50 at the International Conference on Advances in Machine Learning.",
  },
];

const skillGroups = [
  {
    title: "AI / ML",
    skills: ["Machine Learning", "Deep Learning", "TensorFlow", "NLP", "Computer Vision", "RAG Systems"],
  },
  {
    title: "Programming",
    skills: ["Python", "C++", "C#", "SQL", "DBMS", "Data Structures"],
  },
  {
    title: "Cloud & Analytics",
    skills: ["Azure", "Power BI", "Streamlit", "Ollama", "Azure SQL", "Azure Function App"],
  },
  {
    title: "Finance",
    skills: ["Financial Modeling", "QuantLib", "Black-Scholes", "Risk Analysis", "Time-Series Forecasting"],
  },
];

const navItems = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Selected Work", "projects"],
  ["Toolkit", "toolkit"],
  ["Research", "research"],
  ["Contact", "contact"],
] as const;

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.88) {
          el.classList.add("visible");
        }
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="site-shell">
      <header className="nav">
        <a className="logo" href="#about" aria-label="Tanish Anam home">
          Tanish Anam
        </a>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          Menu <span>{menuOpen ? "−" : "+"}</span>
        </button>

        <nav id="primary-navigation" className={menuOpen ? "open" : ""} aria-label="Primary">
          {navItems.map(([label, id]) => (
            <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="nav-meta" aria-label="Contact and social links">
          <div className="nav-contact">
            <a href="mailto:tanuanam@gmail.com">tanuanam@gmail.com</a>
            <a href="tel:+919819049575">+91 98190 49575</a>
          </div>
          <div className="nav-social">
            <a href="https://in.linkedin.com/in/tanish-anam-348278236" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/TanishAnam" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </header>

      <section id="about" className="section about">
        <p className="section-label reveal">(01) ABOUT</p>

        <div className="about-layout">
          <div className="portrait-wrap reveal">
            <Image
              src="/tanish-anam.jpg"
              alt="Tanish Anam"
              fill
              sizes="(max-width: 760px) 88vw, (max-width: 1200px) 38vw, 30vw"
              priority
            />
          </div>

          <div className="about-copy reveal">
            <p className="large-copy">
              I am a Computer Science graduate focused on machine learning, data, and production-minded software.
            </p>
            <p className="muted">
              B.Tech in Computer Science &amp; Business Systems graduate from Mukesh Patel School of Technology.
              My work blends practical software delivery with analytical depth in machine learning and equity markets.
            </p>

            <div className="about-tags" aria-label="Focus areas">
              <span>Agentic AI</span>
              <span>Generative AI</span>
              <span>RAG Systems</span>
              <span>Machine Learning</span>
              <span>Deep Learning</span>              
            </div>

            <div className="about-links">
              <a href="/Tanish-Anam-Resume.pdf" download>
                Download resume <span>↗</span>
              </a>
              <a href="https://in.linkedin.com/in/tanish-anam-348278236" target="_blank" rel="noreferrer">
                LinkedIn <span>↗</span>
              </a>
              <a href="https://github.com/TanishAnam" target="_blank" rel="noreferrer">
                GitHub <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section experience">
        <p className="section-label reveal">(02) EXPERIENCE</p>
        <div className="experience-grid reveal">
          {experience.map((item) => (
            <article key={item.title}>
              <p className="year">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="role">{item.role}</p>
              <ul className="bullet-list">
                {item.description.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="section projects">
        <p className="section-label reveal">(03) PROJECTS</p>
        <div className="project-list reveal">
          {projects.map((project, index) => {
            const open = activeProject === index;
            return (
              <button
                key={project.number}
                type="button"
                className={`project ${open ? "active" : ""}`}
                onClick={() => setActiveProject(open ? null : index)}
                aria-expanded={open}
              >
                <span className="project-head">
                  <span className="project-number">{project.number}</span>
                  <span className="project-title">
                    <small>{project.type}</small>
                    {project.title}
                  </span>
                  <span className="project-metric">{project.metric}</span>
                </span>
                <span className="project-arrow">{open ? "−" : "↗"}</span>
                <span className="project-detail">
                  <span>{project.description}</span>
                  <i>{project.tags.join(" · ")}</i>
                </span>
              </button>
            );
          })}
        </div>
      </section>

      <section id="toolkit" className="section toolkit">
        <p className="section-label reveal">(04) SKILLS</p>
        <div className="skill-groups reveal">
          {skillGroups.map((group) => (
            <article key={group.title} className="skill-group">
              <p className="skill-group-title">{group.title}</p>
              <div className="skill-cloud">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="research" className="section research">
        <p className="section-label reveal">(05) RESEARCH</p>
        <div className="research-list reveal">
          {research.map((item) => (
            <article key={item.title} className="research-card">
              <p className="year">{item.period}</p>
              <h3>{item.title}</h3>
              <p className="role">{item.role}</p>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section contact">
        <p className="section-label reveal">(06) CONTACT</p>
        <div className="contact-body reveal">
          <h2>Open to AI/ML Engineer roles.</h2>
          <p>
            Reach out using the contact details in the header above, or connect with me on LinkedIn and GitHub.
          </p>
          <div className="contact-links">
            <a href="https://in.linkedin.com/in/tanish-anam-348278236" target="_blank" rel="noreferrer">
              LinkedIn <span>↗</span>
            </a>
            <a href="https://github.com/TanishAnam" target="_blank" rel="noreferrer">
              GitHub <span>↗</span>
            </a>
          </div>
        </div>

        <footer>
          <span>© 2026 TANISH ANAM</span>
          <span>MUMBAI, INDIA</span>
        </footer>
      </section>
    </main>
  );
}
