import {
  featuredProjects,
  moreProjects,
  type PortfolioProject,
} from "@/data/portfolio";
import { CopyEmail } from "@/components/copy-email";
import Image from "next/image";
import Link from "next/link";

const email = "htetkooo2532@gmail.com";
export default function Home() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="header">
        <div className="container header-inner">
          <a className="brand" href="#">
            Htet Ko Oo<span className="dot">.</span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>
      <main id="main" className="container">
        <section className="hero" aria-labelledby="intro-title">
          <p className="eyebrow">WEB DEVELOPER · BANGKOK, THAILAND</p>
          <h1 id="intro-title">
            Building practical
            <br />
            web experiences.
          </h1>
          <p className="intro">
            I’m Htet Ko Oo, a third-year Digital Technology Innovation student
            building with React, Next.js, and Laravel.
          </p>
          <p className="availability">
            <span aria-hidden="true" />
            Seeking a web development internship
          </p>
          <div className="actions">
            <a className="button primary" href="#projects">
              Explore featured work <span aria-hidden="true">↗</span>
            </a>
            <a className="button" href="https://github.com/HtetKoOo">
              GitHub
            </a>
            <a
              className="text-link"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              View resume (PDF) <span aria-hidden="true">↗</span>
              <span className="link-note">Opens in a new tab</span>
            </a>
          </div>
        </section>
        <section
          id="projects"
          className="section"
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">FEATURED WORK</p>
              <h2 id="projects-title">Projects built for real workflows</h2>
            </div>
            <p>Three projects that best show my full-stack and frontend work.</p>
          </div>
          <div className="project-grid featured-grid">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} featured />
            ))}
          </div>
        </section>
        <section className="section more-projects" aria-labelledby="more-projects-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow">MORE TO EXPLORE</p>
              <h2 id="more-projects-title">Additional projects</h2>
            </div>
            <p>Smaller case studies and applications that broaden my experience.</p>
          </div>
          <div className="more-project-grid">
            {moreProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>
        <section
          id="about"
          className="section about"
          aria-labelledby="about-title"
        >
          <div>
            <p className="eyebrow">A LITTLE CONTEXT</p>
            <h2 id="about-title">About my work</h2>
          </div>
          <div>
            <p>
              I study Digital Technology Innovation at Kasem Bundit University
              in Bangkok. I work on web applications through personal projects
              and contributions to One Project One Month.
            </p>
            <p>
              I’m looking for opportunities to contribute to a development team
              and improve through practical work and code review.
            </p>
            <dl className="skills">
              <div>
                <dt>Frontend</dt>
                <dd>JavaScript · React · Next.js · Tailwind CSS</dd>
              </div>
              <div>
                <dt>Backend</dt>
                <dd>PHP · Laravel · MySQL · PostgreSQL</dd>
              </div>
              <div>
                <dt>Workflow</dt>
                <dd>Git · GitHub · Postman</dd>
              </div>
            </dl>
          </div>
        </section>
        <section
          id="contact"
          className="section contact"
          aria-labelledby="contact-title"
        >
          <p className="eyebrow">LET’S CONNECT</p>
          <h2 id="contact-title">
            Have an opportunity
            <br />
            or a project in mind?
          </h2>
          <a className="email" href={`mailto:${email}`}>
            {email} <span aria-hidden="true">↗</span>
          </a>
          <div className="actions contact-actions">
            <a className="button primary" href={`mailto:${email}`}>
              Email me <span aria-hidden="true">↗</span>
            </a>
            <CopyEmail email={email} />
          </div>
          <div className="actions">
            <a
              className="text-link"
              href="https://www.linkedin.com/in/htet-ko-oo-602913315/"
            >
              LinkedIn ↗
            </a>
            <a className="text-link" href="https://github.com/HtetKoOo">
              GitHub ↗
            </a>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <span>© {new Date().getFullYear()} Htet Ko Oo</span>
        <span>Built with Next.js & TypeScript</span>
      </footer>
    </>
  );
}

function ProjectCard({
  project,
  index,
  featured = false,
}: {
  project: PortfolioProject;
  index?: number;
  featured?: boolean;
}) {
  return (
    <article className={`project ${featured ? "project-featured" : "project-compact"}`}>
      {project.image ? (
        <div className="project-image-wrap">
          <Image
            className="project-image"
            src={project.image.src}
            alt={project.image.alt}
            width={1200}
            height={675}
          />
        </div>
      ) : null}
      <div className="project-top">
        {featured ? <span className="project-number">0{(index ?? 0) + 1}</span> : null}
        <span className="project-type">
          {featured ? "Featured project" : "Additional project"}
        </span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <p className="contribution"><strong>My work:</strong> {project.contribution}</p>
      <ul className="tags" aria-label="Technologies">
        {project.stack.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      <div className="project-links">
        {project.caseStudy ? (
          <Link href={`/projects/${project.slug}`}>
            View case study <span aria-hidden="true">→</span>
          </Link>
        ) : null}
        {project.liveUrl ? (
          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
            Live app <span aria-hidden="true">↗</span>
          </a>
        ) : null}
        <a href={project.repository} target="_blank" rel="noopener noreferrer">
          Repository <span aria-hidden="true">↗</span>
        </a>
      </div>
    </article>
  );
}
