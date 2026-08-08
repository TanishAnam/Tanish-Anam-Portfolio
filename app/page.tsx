"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const projects = [
  { number: "01", title: "Open Set Logo Detection", type: "Computer Vision", description: "Two-stage detection and blurring pipeline using YOLOv5 and CSPResNeXt-50. Built to identify unauthorised logos in real-world media.", metric: "0.81 mAP50", tags: ["YOLOv5", "OpenCV", "Deep Learning"] },
  { number: "02", title: "Apple Stock Price Predictor", type: "Quantitative Research", description: "Time-series forecasting system combining Prophet trend modeling with GARCH volatility analysis and MAPE validation.", metric: "Prophet + GARCH", tags: ["Python", "Yfinance", "Statistics"] },
  { number: "03", title: "Car Care", type: "Cloud Application", description: "Cloud-hosted automotive workflow system with dual inventory operations, secure image handling and Azure SQL persistence.", metric: ".NET 8 + Azure", tags: ["Razor Pages", "EF Core", "Azure"] },
  { number: "04", title: "Choose The Right Option", type: "Financial Modeling", description: "Excel-based derivatives pricing analysis for Asian Paints and ICICI Bank, calculating Greeks and volatility-led directional insights.", metric: "5 Option Greeks", tags: ["Black-Scholes", "Excel", "Risk Analysis"] },
];

const skills = ["Python", "C++", "SQL", "C#", "Machine Learning", "Deep Learning", "TensorFlow", "QuantLib", "Power BI", "Azure", "DBMS", "Financial Modeling"];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const onScroll = () => document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => {
      if (el.getBoundingClientRect().top < window.innerHeight * 0.86) el.classList.add("visible");
    });
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main>
      <header className="nav">
        <a className="logo" href="#top" aria-label="Tanish Anam home">TA<span>.</span></a>
        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen}>Menu <span>{menuOpen ? "−" : "+"}</span></button>
        <nav className={menuOpen ? "open" : ""}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="grid-glow" />
        <p className="eyebrow reveal">Mumbai, India <span>•</span> Available for select opportunities</p>
        <h1 className="reveal">Turning careful<br /><em>ideas</em> into impact.</h1>
        <div className="hero-bottom reveal">
          <p>Computer Science graduate building at the intersection of machine learning, quantitative finance, and software engineering.</p>
          <div className="hero-meta" aria-label="Core focus areas"><span>Machine Learning</span><span>Software Systems</span><span>Quant Finance</span></div>
          <a className="round-link" href="#work" aria-label="View selected work">↓</a>
        </div>
      </section>

      <section id="about" className="about section">
        <p className="section-label reveal">(01) ABOUT</p>
        <div className="about-layout">
          <div className="portrait-wrap reveal"><Image src="/tanish-anam.jpg" alt="Tanish Anam" fill sizes="(max-width: 760px) 88vw, 35vw" priority /></div>
          <div className="about-copy reveal">
            <p className="large-copy">I turn curiosity into systems: from models that see and forecast, to applications people can trust.</p>
            <p className="muted">B.Tech in Computer Science & Business Systems graduate from Mukesh Patel School of Technology. My work blends practical software delivery with analytical depth in machine learning and equity markets.</p>
            <div className="about-links"><a href="/Tanish-Anam-Resume.pdf" download>Download resume <span>↗</span></a><a href="mailto:tanuanam@gmail.com">Email me <span>↗</span></a></div>
          </div>
        </div>
      </section>

      <section id="work" className="work section">
        <p className="section-label reveal">(02) SELECTED WORK</p>
        <div className="project-list">
          {projects.map((project, index) => <button className={`project reveal ${activeProject === index ? "active" : ""}`} onClick={() => setActiveProject(index)} key={project.number}>
            <span className="project-number">{project.number}</span>
            <span className="project-title"><small>{project.type}</small>{project.title}</span>
            <span className="project-metric">{project.metric}</span>
            <span className="project-arrow">↗</span>
            <span className="project-detail"><span>{project.description}</span><i>{project.tags.join(" · ")}</i></span>
          </button>)}
        </div>
      </section>

      <section className="experience section">
        <p className="section-label reveal">(03) EXPERIENCE + RESEARCH</p>
        <div className="experience-grid reveal">
          <article><p className="year">MAY - JUL 2024</p><h3>Mondelez International</h3><p className="role">Digital Workplace Print Services Intern</p><p>Coordinated printer refresh initiatives across Australia, Bahrain and Nigeria; analysed weekly incidents in Power BI and resolved SMTP scanning issues across 25 Indian sites.</p></article>
          <article><p className="year">2023 - 2025</p><h3>ICAML 2025</h3><p className="role">Research Presenter</p><p>Presented research on open-set logo detection and blurring using YOLOv5 and CSPResNeXt-50 at the International Conference on Advances in Machine Learning.</p></article>
        </div>
      </section>

      <section className="skills section">
        <p className="section-label reveal">(04) TOOLKIT</p>
        <div className="skill-cloud reveal">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
      </section>

      <section id="contact" className="contact section">
        <p className="section-label reveal">(05) LET&apos;S CONNECT</p>
        <div className="contact-body reveal">
          <h2>Have a thoughtful<br /><em>brief?</em></h2>
          <div><p>Looking for roles where technical thinking and ownership matter.</p><a className="email" href="mailto:tanuanam@gmail.com">tanuanam@gmail.com <span>↗</span></a></div>
        </div>
        <footer><span>© 2026 TANISH ANAM</span><span>MUMBAI, INDIA</span><span><a href="https://in.linkedin.com/in/tanish-anam-348278236" target="_blank" rel="noreferrer">LINKEDIN</a> / <a href="https://github.com/TanishAnam" target="_blank" rel="noreferrer">GITHUB</a></span></footer>
      </section>
    </main>
  );
}
