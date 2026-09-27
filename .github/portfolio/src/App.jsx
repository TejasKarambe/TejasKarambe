import React from "react";
import { Github, Linkedin, Mail, ArrowUpRight, MapPin } from "lucide-react";
import { Button } from "./components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "./components/ui/card";
import { Badge } from "./components/ui/badge";
import { Separator } from "./components/ui/separator";
import { profile, about, skills, experience, projects, education } from "./data";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  return (
    <header className="sticky top-4 z-50 mx-auto flex w-fit max-w-[92vw] items-center gap-1 rounded-full glass px-2 py-2">
      <span className="hidden sm:block px-3 font-display text-sm font-semibold text-ink">
        TK
      </span>
      <Separator orientation="vertical" className="hidden sm:block h-5" />
      <nav className="flex items-center gap-1">
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="rounded-full px-3 py-1.5 text-xs sm:text-sm text-muted transition-colors hover:text-ink hover:bg-white/[0.08]"
          >
            {link.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="mx-auto flex max-w-3xl flex-col items-center pt-20 pb-16 text-center sm:pt-28">
      <Badge className="mb-6">
        <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-cyan-glow" />
        Available for full-stack roles
      </Badge>
      <h1 className="font-display text-4xl font-semibold leading-tight text-ink sm:text-6xl">
        {profile.name}
      </h1>
      <p className="mt-3 font-display text-lg text-transparent bg-clip-text bg-gradient-to-r from-violet-glow to-cyan-glow sm:text-xl">
        {profile.title}
      </p>
      <p className="mt-5 max-w-md text-balance text-muted">{profile.tagline}</p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
        <Button as="a" href={`mailto:${profile.email}`}>
          <Mail className="h-4 w-4" />
          Get in touch
        </Button>
        <Button as="a" href={profile.github} target="_blank" rel="noreferrer" variant="glass">
          <Github className="h-4 w-4" />
          GitHub
        </Button>
        <Button as="a" href={profile.linkedin} target="_blank" rel="noreferrer" variant="glass">
          <Linkedin className="h-4 w-4" />
          LinkedIn
        </Button>
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
        <MapPin className="h-3.5 w-3.5" />
        {profile.location}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-14 scroll-mt-24">
      <h2 className="section-heading mb-5">About</h2>
      <Card>
        <CardContent className="text-base leading-relaxed text-ink/90">
          {about}
        </CardContent>
      </Card>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-3xl px-6 py-14 scroll-mt-24">
      <h2 className="section-heading mb-5">Skills</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {skills.map((group) => (
          <Card key={group.group}>
            <CardHeader>
              <CardTitle>{group.group}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-3xl px-6 py-14 scroll-mt-24">
      <h2 className="section-heading mb-5">Experience</h2>
      <div className="relative space-y-6 border-l border-white/[0.14] pl-6">
        {experience.map((job) => (
          <div key={job.role} className="relative">
            <span className="absolute -left-[27px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan-glow shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
            <Card>
              <CardHeader>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <CardTitle>{job.role}</CardTitle>
                  <span className="text-xs text-muted">{job.period}</span>
                </div>
                <p className="mt-1 text-sm text-muted">{job.org}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {job.points.map((point) => (
                    <li key={point} className="flex gap-2 text-ink/85">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-violet-glow" />
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-3xl px-6 py-14 scroll-mt-24">
      <h2 className="section-heading mb-5">Projects</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.name} className="flex flex-col justify-between">
            <div>
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle>{project.name}</CardTitle>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                      className="shrink-0 text-muted transition-colors hover:text-cyan-glow"
                      aria-label={`Open ${project.name} on GitHub`}
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">{project.description}</p>
              </CardContent>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <Badge key={tech} className="text-[11px]">{tech}</Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-14">
      <h2 className="section-heading mb-5">Education</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {education.map((edu) => (
          <Card key={edu.degree}>
            <CardHeader>
              <CardTitle className="text-base">{edu.degree}</CardTitle>
              <p className="mt-1 text-sm text-muted">{edu.school}</p>
            </CardHeader>
            <CardContent className="flex items-center justify-between text-xs">
              <span>{edu.period}</span>
              <span>{edu.detail}</span>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-2xl px-6 py-20 text-center scroll-mt-24">
      <Card className="p-10">
        <h2 className="font-display text-2xl font-semibold sm:text-3xl">
          Let's build something
        </h2>
        <p className="mx-auto mt-3 max-w-sm text-muted">
          Open to full-stack roles where I can own features from the browser down to the database.
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
          <Button as="a" href={`mailto:${profile.email}`}>
            <Mail className="h-4 w-4" />
            {profile.email}
          </Button>
        </div>
      </Card>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-6 pb-10 text-center text-xs text-muted">
      <Separator className="mb-6" />
      © {new Date().getFullYear()} {profile.name}. Built with React, Tailwind & a lot of coffee.
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
