import Image from "next/image";
import {
  personalInfo,
  experience,
  education,
  certifications,
  featuredProjects,
  skills,
  heroMetrics,
  deskSubjects,
} from "./lib/content";
import { TimeGreeting } from "./components/TimeGreeting";
import { GitHubProjects } from "./components/GitHubProjects";
import { ContactForm } from "./components/ContactForm";

export default function Home() {
  return (
    <>
      <section id="top" className="relative px-4 pb-14 sm:px-6 md:pt-32 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.15fr,0.85fr] lg:gap-10 items-start">
            <div>
              {/* <div className="section-index">Arrival</div> */}

              <div className="mt-6 flex flex-wrap items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] text-ink-muted">
                <TimeGreeting />
                {/* <span aria-hidden="true">/</span> */}
                {/* <span>{personalInfo.location}</span>
                <span aria-hidden="true">/</span>
                <span>The Night Desk</span> */}
              </div>

              <h1 className="mt-5 font-serif text-5xl leading-[0.95] tracking-tight text-ink sm:text-7xl lg:text-[5.4rem]">
                {personalInfo.name}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-accent sm:text-xl">
                {personalInfo.role}
              </p>

              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink sm:text-[1.35rem] sm:leading-relaxed">
                {personalInfo.heroLead}
              </p>

              {/* <p className="mt-4 max-w-2xl text-base leading-relaxed text-ink-muted sm:text-lg">
                {personalInfo.heroSublead}
              </p> */}

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={personalInfo.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full bg-accent px-5 py-3 text-sm font-medium text-[#140f0b] transition-colors hover:bg-accent-hover"
                >
                  Resume
                </a>
                <a
                  href={personalInfo.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-edge bg-surface px-5 py-3 text-sm text-ink transition-colors hover:border-accent/40 hover:text-accent"
                >
                  GitHub
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-edge bg-transparent px-5 py-3 text-sm text-ink-muted transition-colors hover:border-accent/40 hover:text-accent"
                >
                  Let&apos;s talk
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <div key={metric.label} className="metric-card rounded-2xl p-4">
                    <div className="font-serif text-3xl text-ink">{metric.value}</div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-muted">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-4 lg:pt-10">
              <div className="frame rounded-[1.75rem] p-4 sm:p-5">
                <div className="flex items-center justify-between text-[0.68rem] uppercase tracking-[0.22em] text-ink-muted">
                  <span>Desk Note</span>
                  <span>01</span>
                </div>

                <div className="mt-4 grid gap-4 sm:grid-cols-[148px,1fr] sm:items-start">
                  <div className="relative h-48 overflow-hidden rounded-[1.4rem] border border-edge bg-surface-strong sm:h-56">
                    <Image
                      src="/images/sabahat.png"
                      alt="Portrait of Mohd Sabahat"
                      fill
                      className="object-cover"
                      style={{ objectPosition: "65% 38%" }}
                      sizes="(max-width: 640px) 100vw, 148px"
                      priority
                    />
                  </div>

                  <div>
                    <p className="font-serif text-2xl leading-tight text-ink">
                      A calm exterior, a romantic core.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink-muted">
                      {personalInfo.deskNote}
                    </p>
                    <p className="mt-4 font-serif text-lg italic leading-relaxed text-accent">
                      &ldquo;{personalInfo.tagline}&rdquo;
                    </p>
                  </div>
                </div>
              </div>

              <div className="paper-note rounded-3xl p-4 sm:p-5">
                <p className="text-[0.68rem] uppercase tracking-[0.22em] text-ink-muted">
                  Filed under
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {deskSubjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full border border-edge px-3 py-1.5 text-xs uppercase tracking-[0.12em] text-ink"
                    >
                      {subject}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>

        <div
          className="scroll-hint absolute bottom-8 left-1/2 text-ink-muted"
          aria-hidden="true"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </section>

      {/* ===== About ===== */}
      <section id="about" className="section px-4 sm:px-6">
        <div className="max-w-6xl mx-auto section-grid">
          <div className="section-rail">
            <div className="section-index">01</div>
            <h2 className="section-heading text-ink">About</h2>
          </div>

          <div className="frame rounded-4xl p-6 sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-[1.3fr,0.7fr] lg:gap-10">
              <div className="space-y-5">
                <p className="text-base leading-relaxed text-ink sm:text-lg">
                  {personalInfo.about}
                </p>
                <p className="text-base leading-relaxed text-ink-muted sm:text-lg">
                  {personalInfo.aboutPersonal}
                </p>
              </div>

              <div className="space-y-4">
                <div className="paper-note rounded-3xl p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-ink-muted">
                    Working mode
                  </p>
                  <p className="mt-3 font-serif text-2xl leading-tight text-ink">
                    Quietly intimate.
                    <br />
                    Technically sharp.
                  </p>
                </div>

                <div className="rounded-3xl border border-edge bg-surface/70 p-5">
                  <p className="text-[0.68rem] uppercase tracking-[0.22em] text-ink-muted">
                    Based in
                  </p>
                  <p className="mt-3 text-base text-ink">{personalInfo.location}</p>
                  <a
                    href={personalInfo.resumeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
                  >
                    Download resume
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="section px-4 sm:px-6">
        <div className="max-w-6xl mx-auto section-grid">
          <div className="section-rail">
            <div className="section-index">02</div>
            <h2 className="section-heading text-ink">Experience</h2>
          </div>

          <div className="frame rounded-4xl p-6 sm:p-8 lg:p-10">
            <div>
              {experience.map((job) => (
                <div key={job.title} className="timeline-entry">
                  <p className="text-sm text-accent font-serif italic">
                    {job.period}
                  </p>
                  <h3 className="mt-1 text-lg font-medium text-ink">
                    {job.title}
                  </h3>
                  <p className="text-sm text-ink-muted">{job.company}</p>
                  <ul className="mt-3 space-y-2">
                    {job.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="relative pl-4 text-sm leading-relaxed text-ink-muted before:absolute before:left-0 before:font-bold before:text-accent before:content-['·']"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="mt-14">
              <h3 className="mb-6 font-serif text-xl text-ink sm:text-2xl">
                Education
              </h3>
              {education.map((edu) => (
                <div key={edu.degree} className="timeline-entry">
                  <p className="text-sm text-accent font-serif italic">
                    {edu.period}
                  </p>
                  <h4 className="mt-1 text-base font-medium text-ink">
                    {edu.degree}
                  </h4>
                  <p className="text-sm text-ink-muted">{edu.institution}</p>
                  <p className="mt-1 text-sm text-ink-muted">{edu.detail}</p>
                </div>
              ))}
            </div>

            {certifications.length > 0 && (
              <div className="mt-10">
                <h3 className="mb-4 font-serif text-xl text-ink sm:text-2xl">
                  Certifications
                </h3>
                <ul className="space-y-1">
                  {certifications.map((cert) => (
                    <li key={cert} className="text-sm text-ink-muted">
                      {cert}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      <section id="work" className="section px-4 sm:px-6">
        <div className="max-w-6xl mx-auto section-grid">
          <div className="section-rail">
            <div className="section-index">03</div>
            <h2 className="section-heading text-ink">Work</h2>
          </div>

          <div className="space-y-8">
            <div className="frame rounded-4xl p-6 sm:p-8 lg:p-10">
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-ink-muted">
                Featured projects
              </p>
              <div className="mt-6 space-y-6">
                {featuredProjects.map((project) => (
                  <article
                    key={project.name}
                    className="group rounded-3xl border border-edge bg-surface-dim p-5 transition-colors hover:border-accent/30 sm:p-6"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <h3 className="font-serif text-xl text-ink">
                        {project.name}
                      </h3>
                      {project.corporate && (
                        <span className="shrink-0 rounded-full border border-edge px-2.5 py-0.5 text-xs text-ink-muted">
                          Corporate
                        </span>
                      )}
                    </div>

                    <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                      {project.description}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded px-2 py-0.5 text-xs text-accent bg-accent-dim"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {(project.liveUrl || project.githubUrl) && (
                      <div className="mt-4 flex gap-4">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-ink-muted transition-colors hover:text-accent"
                          >
                            GitHub &rarr;
                          </a>
                        )}
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-ink-muted transition-colors hover:text-accent"
                          >
                            Live Demo &rarr;
                          </a>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>

            <div className="frame rounded-4xl p-6 sm:p-8 lg:p-10">
              <p className="text-[0.72rem] uppercase tracking-[0.22em] text-ink-muted">
                Other repositories
              </p>
              <div className="mt-6">
                <GitHubProjects />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="section px-4 sm:px-6">
        <div className="max-w-6xl mx-auto section-grid">
          <div className="section-rail">
            <div className="section-index">04</div>
            <h2 className="section-heading text-ink">Skills</h2>
          </div>

          <div className="frame rounded-4xl p-6 sm:p-8 lg:p-10">
            <div className="space-y-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h3 className="mb-3 text-xs font-medium uppercase tracking-widest text-ink-muted">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-edge bg-surface-dim px-3 py-2 text-sm text-ink transition-colors hover:border-accent/40"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="section px-4 sm:px-6">
        <div className="max-w-6xl mx-auto section-grid">
          <div className="section-rail">
            <div className="section-index">05</div>
            <h2 className="section-heading text-ink">Contact</h2>
          </div>

          <div className="frame rounded-4xl p-6 sm:p-8 lg:p-10">
            <div className="grid gap-10 md:grid-cols-[1fr,1.35fr] md:gap-12">
              <div className="space-y-4">
                <p className="leading-relaxed text-ink-muted">
                  Whether it&apos;s about a project, an opportunity, or just a
                  conversation that matters &mdash; I&apos;d love to hear from
                  you.
                </p>

                <div className="space-y-3 pt-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      aria-hidden="true"
                    >
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                    {personalInfo.email}
                  </a>

                  <a
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>

                  <a
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    LinkedIn
                  </a>

                  <p className="pt-1 text-sm text-ink-muted">
                    {personalInfo.location}
                  </p>
                </div>
              </div>

              <ContactForm />
            </div>

            <div className="mt-16 border-t border-edge pt-8">
              <p className="text-center font-serif text-sm italic text-ink-muted">
                If you&apos;ve read this far, we probably have something
                interesting to talk about.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-edge px-4 py-8 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} Mohd Sabahat</span>
          {/* <span>Built with Next.js &middot; Deployed on Vercel</span> */}
        </div>
      </footer>
    </>
  );
}
