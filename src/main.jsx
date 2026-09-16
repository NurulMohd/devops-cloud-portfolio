import React, { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const projects = [
  { number: '01', type: 'Delivery systems', title: 'Release confidence for a growing product team', description: 'Created a GitHub Actions delivery workflow with quality gates, preview environments, and safe rollback paths.', result: '40% faster releases' },
  { number: '02', type: 'Cloud foundation', title: 'A repeatable platform for three environments', description: 'Defined secure AWS networking, access, and compute with Terraform so new environments can be provisioned in minutes.', result: 'Minutes, not days' },
  { number: '03', type: 'Observability', title: 'Turning noisy alerts into useful signals', description: 'Introduced service dashboards, actionable alerts, and runbooks that help teams find the right problem faster.', result: '25% fewer incidents' },
];

const skills = [
  ['Cloud & infrastructure', 'AWS · Terraform · Linux · Networking'],
  ['Automation & delivery', 'GitHub Actions · Bash · Git · Release strategy'],
  ['Reliability & insight', 'Prometheus · Grafana · CloudWatch · Runbooks'],
];

function getRoute() {
  return window.location.hash.replace('#', '') || '/';
}

function App() {
  const [route, setRoute] = useState(getRoute);

  useEffect(() => {
    const handleHashChange = () => setRoute(getRoute());
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [route]);

  const isProjects = route === '/projects';
  const isContact = route === '/contact';

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#/" aria-label="Nurul Mohammad home">NM<span>.</span></a>
        <nav className="site-nav" aria-label="Main navigation">
          <a className={route === '/' ? 'active' : ''} href="#/">Home</a>
          <a className={isProjects ? 'active' : ''} href="#/projects">Projects</a>
          <a className={isContact ? 'active' : ''} href="#/contact">Contact</a>
        </nav>
        <a className="availability" href="#/contact"><i /> Available for work</a>
      </header>

      <main>
        {route === '/' && <Home />}
        {isProjects && <Projects />}
        {isContact && <Contact />}
        {!['/', '/projects', '/contact'].includes(route) && <NotFound />}
      </main>

      <footer className="site-footer">
        <span>© 2024 Nurul Mohammad</span>
        <span>Built for reliable delivery.</span>
      </footer>
    </div>
  );
}

function Home() {
  return (
    <>
      <section className="hero page-width">
        <div className="hero-copy">
          <p className="kicker">DEVOPS ENGINEER · KUALA LUMPUR</p>
          <h1>Make it reliable.<br /><em>Make it repeatable.</em></h1>
          <p className="hero-intro">I help teams move from “it works on my machine” to dependable, observable software delivery.</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#/projects">Explore my work <span>↗</span></a>
            <a className="text-link" href="mailto:nurul@example.com">Let's talk <span>↗</span></a>
          </div>
        </div>
        <div className="hero-note"><div className="scribble">✳</div><p>Infrastructure should<br /><strong>feel invisible.</strong></p></div>
      </section>

      <section className="signal-strip">
        <div className="page-width signal-grid">
          <div><strong>4+</strong><span>Years building<br />delivery systems</span></div>
          <div><strong>99.9%</strong><span>Target uptime for<br />managed services</span></div>
          <div><strong>∞</strong><span>Curiosity for<br />better workflows</span></div>
        </div>
      </section>

      <section className="page-width content-section">
        <div className="section-label">01 — What I bring</div>
        <div className="two-column">
          <h2>Good infrastructure<br /><em>gives teams room to think.</em></h2>
          <div>
            <p className="body-copy">I design the systems between code and customers: automated pipelines, cloud foundations, and feedback loops that let teams ship with clarity.</p>
            <div className="skill-list">{skills.map(([title, items]) => <div className="skill-row" key={title}><span>{title}</span><strong>{items}</strong></div>)}</div>
          </div>
        </div>
      </section>

      <section className="work-preview">
        <div className="page-width">
          <div className="section-heading"><div className="section-label">02 — Selected work</div><a className="text-link" href="#/projects">View all projects <span>↗</span></a></div>
          <ProjectCards limit={2} />
        </div>
      </section>
    </>
  );
}

function Projects() {
  return (
    <section className="page-width inner-page">
      <p className="kicker">SELECTED WORK</p>
      <h1 className="page-title">Systems that make<br /><em>good work easier.</em></h1>
      <p className="hero-intro narrow">A few ways I have helped teams improve the path from a commit to a confident release.</p>
      <ProjectCards />
    </section>
  );
}

function ProjectCards({ limit }) {
  return <div className="project-list">{projects.slice(0, limit).map((project) => <article className="project-row" key={project.number}><span className="project-number">{project.number}</span><div className="project-details"><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.description}</p></div><strong className="project-result">{project.result}</strong></article>)}</div>;
}

function Contact() {
  return (
    <section className="page-width contact-page inner-page">
      <p className="kicker">LET'S CONNECT</p>
      <h1 className="page-title">Have a system<br /><em>worth improving?</em></h1>
      <p className="hero-intro narrow">Tell me what you are building, where it hurts, and where you want to go next.</p>
      <a className="contact-email" href="mailto:nurul@example.com">nurul@example.com <span>↗</span></a>
      <div className="contact-links"><a href="https://github.com/" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
    </section>
  );
}

function NotFound() {
  return <section className="page-width inner-page"><p className="kicker">404</p><h1 className="page-title">Page not found.</h1><a className="text-link" href="#/">Back home ↗</a></section>;
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>);
