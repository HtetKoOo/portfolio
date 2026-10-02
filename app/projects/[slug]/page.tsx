import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects
    .filter((project) => project.caseStudy)
    .map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.caseStudy);

  if (!project) {
    return { title: "Project not found | Htet Ko Oo" };
  }

  return {
    title: `${project.title} case study | Htet Ko Oo`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug && item.caseStudy);

  if (!project || !project.caseStudy) {
    notFound();
  }

  const { caseStudy } = project;

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <header className="header">
        <div className="container header-inner">
          <Link className="brand" href="/">
            Htet Ko Oo<span className="dot">.</span>
          </Link>
          <Link className="back-link" href="/#projects">← All projects</Link>
        </div>
      </header>
      <main id="main" className="container case-study">
        <section className="case-hero" aria-labelledby="project-title">
          <p className="eyebrow">CASE STUDY · {project.kind.toUpperCase()} PROJECT</p>
          <h1 id="project-title">{project.title}</h1>
          <p className="case-intro">{project.description}</p>
          <div className="case-actions">
            {project.liveUrl ? (
              <a className="button primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Try the live demo <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            <a className="button" href={project.repository} target="_blank" rel="noopener noreferrer">
              View repository <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="case-summary" aria-label="Project summary">
          <div>
            <p className="case-label">ROLE</p>
            <p>{caseStudy.role}</p>
          </div>
          <div>
            <p className="case-label">STACK</p>
            <p>{project.stack.join(" · ")}</p>
          </div>
        </section>

        {caseStudy.screenshots?.length ? (
          <section className="case-section" aria-labelledby="preview-title">
            <div className="case-section-heading">
              <p className="eyebrow">PRODUCT PREVIEW</p>
              <h2 id="preview-title">A closer look at the interface.</h2>
              {caseStudy.previewNote ? <p className="case-preview-note">{caseStudy.previewNote}</p> : null}
            </div>
            <div className="case-screenshot-grid">
              {caseStudy.screenshots.map((screenshot) => (
                <figure className="case-screenshot" key={screenshot.src}>
                  <Image
                    src={screenshot.src}
                    alt={screenshot.alt}
                    width={1470}
                    height={829}
                    sizes="(max-width: 700px) 100vw, 50vw"
                  />
                </figure>
              ))}
            </div>
          </section>
        ) : null}

        <section className="case-section case-context" aria-labelledby="challenge-title">
          <div>
            <p className="eyebrow">CONTEXT</p>
            <h2 id="challenge-title">{caseStudy.contextHeading}</h2>
          </div>
          <div>
            <p><strong>The challenge.</strong> {caseStudy.challenge}</p>
            <p><strong>The approach.</strong> {caseStudy.approach}</p>
          </div>
        </section>

        {caseStudy.designApproach || caseStudy.futureDirection ? (
          <section className="case-section" aria-labelledby="direction-title">
            <div className="case-section-heading">
              <p className="eyebrow">PRODUCT DIRECTION</p>
              <h2 id="direction-title">Designed for the way it will be used.</h2>
            </div>
            <div className="decision-list">
              {caseStudy.designApproach ? (
                <article>
                  <h3>Design approach</h3>
                  <p>{caseStudy.designApproach}</p>
                </article>
              ) : null}
              {caseStudy.futureDirection ? (
                <article>
                  <h3>Future direction</h3>
                  <p>{caseStudy.futureDirection}</p>
                </article>
              ) : null}
            </div>
          </section>
        ) : null}

        <section className="case-section" aria-labelledby="features-title">
          <div className="case-section-heading">
            <p className="eyebrow">KEY FEATURES</p>
            <h2 id="features-title">What I built</h2>
          </div>
          <div className="case-grid">
            {caseStudy.highlights.map((highlight, index) => (
              <article className="case-card" key={highlight.title}>
                <span>0{index + 1}</span>
                <h3>{highlight.title}</h3>
                <p>{highlight.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-section" aria-labelledby="decisions-title">
          <div className="case-section-heading">
            <p className="eyebrow">IMPLEMENTATION</p>
            <h2 id="decisions-title">Technical decisions</h2>
          </div>
          <div className="decision-list">
            {caseStudy.technicalDecisions.map((decision) => (
              <article key={decision.title}>
                <h3>{decision.title}</h3>
                <p>{decision.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="case-cta" aria-labelledby="case-cta-title">
          <p className="eyebrow">EXPLORE THE PROJECT</p>
          <h2 id="case-cta-title">See the product in action.</h2>
          <p>
            {project.liveUrl
              ? "Use the public demo to explore the project workflow, then review the repository for its implementation details."
              : "This project is presented through a fictional preview and its repository, keeping private content out of the public portfolio."}
          </p>
          <div className="case-actions">
            {project.liveUrl ? (
              <a className="button primary" href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                Open demo <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            {!project.liveUrl ? (
              <a className="button primary" href={project.repository} target="_blank" rel="noopener noreferrer">
                View repository <span aria-hidden="true">↗</span>
              </a>
            ) : null}
            <Link className="text-link" href="/#projects">Back to portfolio</Link>
          </div>
        </section>
      </main>
      <footer className="container footer">
        <span>© {new Date().getFullYear()} Htet Ko Oo</span>
        <span>Built with Next.js &amp; TypeScript</span>
      </footer>
    </>
  );
}
