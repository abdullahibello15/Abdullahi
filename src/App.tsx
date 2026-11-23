import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, ArrowUpRight, Award, Briefcase, Code2, GraduationCap, Languages, Linkedin, Mail, MapPin, Maximize2, Phone, X } from 'lucide-react'
import Header from './components/Header'
import { Chip, Reveal, Section, Text, card, isPlaceholder } from './components/ui'
import { about, certifications, education, experience, languages, process, profile, projects, skills, type Project } from './data'

const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-xl bg-navy-900 px-6 py-3.5 font-medium text-gold-300 shadow-lg shadow-navy-900/20 transition hover:-translate-y-0.5 hover:bg-navy-800 dark:bg-gold-400 dark:text-navy-950 dark:shadow-gold-400/10 dark:hover:bg-gold-300'
const btnGhost =
  'inline-flex items-center justify-center gap-2 rounded-xl border border-navy-200 px-6 py-3.5 font-medium transition hover:-translate-y-0.5 hover:border-navy-400 dark:border-navy-700 dark:hover:border-gold-400/60'

function Hero() {
  const [first, last] = profile.name.split(' ')
  return (
    <section id="top" className="relative overflow-hidden px-4 pb-20 pt-32 sm:px-6 md:pb-28 md:pt-40">
      {/* soft background grid + glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgb(15_26_51/0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgb(15_26_51/0.05)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)] dark:bg-[linear-gradient(to_right,rgb(255_255_255/0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.04)_1px,transparent_1px)]" />
      <div aria-hidden className="pointer-events-none absolute -top-40 right-[-10%] h-[28rem] w-[28rem] rounded-full bg-gold-300/30 blur-3xl dark:bg-gold-500/10" />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
        <div>
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-navy-200 bg-white/70 px-3.5 py-1.5 text-sm text-navy-600 dark:border-navy-700 dark:bg-navy-900/70 dark:text-navy-200">
            <MapPin size={14} className="text-gold-600 dark:text-gold-400" /> {profile.location}
          </motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            {first} <span className="text-gold-600 dark:text-gold-400">{last}</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-lg font-medium text-navy-700 sm:text-xl dark:text-navy-200">
            {profile.title}
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-4 max-w-xl text-lg leading-relaxed text-navy-600 dark:text-navy-300">
            {profile.pitch}
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#contact" className={btnPrimary}>Contact me <ArrowRight size={18} /></a>
            <a href="#projects" className={btnGhost}>View projects</a>
          </motion.div>
        </div>

        {/* How I work: the delivery path from the CV */}
        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className={`${card} relative`}>
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-navy-500 dark:text-navy-300">How I take a product live</p>
          <ol className="relative space-y-4 before:absolute before:bottom-3 before:left-[15px] before:top-3 before:w-px before:bg-gradient-to-b before:from-gold-400 before:to-navy-300 dark:before:to-navy-700">
            {process.map((step, i) => (
              <motion.li key={step} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.12 }}
                className="relative flex items-center gap-4">
                <span className="z-10 grid h-8 w-8 shrink-0 place-items-center rounded-full border-2 border-gold-400 bg-white text-xs font-semibold text-navy-900 dark:bg-navy-900 dark:text-gold-300">
                  {i + 1}
                </span>
                <span className="font-medium">{step}</span>
              </motion.li>
            ))}
          </ol>
        </motion.div>
      </div>
    </section>
  )
}

function About() {
  return (
    <Section id="about" eyebrow="About" title="A bit about me">
      <div className="grid gap-10 md:grid-cols-[1fr_2fr]">
        <Reveal>
          <div className="relative mx-auto max-w-xs md:mx-0">
            <div aria-hidden className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-gold-400" />
            <img
              src="/abdullahi-bello.jpg"
              alt="Portrait of Abdullahi Bello"
              width={768}
              height={1024}
              loading="lazy"
              className="relative aspect-[3/4] w-full rounded-2xl object-cover shadow-xl shadow-navy-900/20"
            />
          </div>
        </Reveal>
        <div className="space-y-5 text-lg leading-relaxed text-navy-700 dark:text-navy-200">
          {about.map((p, i) => (
            <Reveal key={i} delay={i * 0.08}><p>{p}</p></Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="What I work with" className="bg-white/60 dark:bg-navy-900/30">
      <div className="grid gap-5 sm:grid-cols-2">
        {skills.map((g, i) => (
          <Reveal key={g.name} delay={i * 0.08} className={card}>
            <h3 className="mb-4 flex items-center gap-2 font-display text-xl font-semibold">
              <span className="h-2 w-2 rounded-full bg-gold-500" /> {g.name}
            </h3>
            <div className="flex flex-wrap gap-2">
              {g.items.map((s) => <Chip key={s}>{s}</Chip>)}
            </div>
            {g.note && <p className="mt-4 text-sm leading-relaxed text-navy-500 dark:text-navy-300">{g.note}</p>}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

// Projects with screenshots first, then the rest in CV order
const orderedProjects = [...projects.filter((p) => p.image), ...projects.filter((p) => !p.image)]

function Lightbox({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project?.image && (
        <motion.div
          role="dialog" aria-modal="true" aria-label={`${project.name} screenshot`}
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[70] grid place-items-center bg-navy-950/90 p-4 backdrop-blur-sm"
        >
          <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-lg bg-navy-800 text-gold-300 hover:bg-navy-700">
            <X size={20} />
          </button>
          <motion.figure initial={{ scale: 0.95, y: 10 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.95 }} className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
            <img src={project.image} alt={`${project.name} screenshot`} className="w-full rounded-xl shadow-2xl" />
            <figcaption className="mt-3 text-center text-sm text-navy-200">{project.name}</figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Projects() {
  const [open, setOpen] = useState<Project | null>(null)
  const close = useCallback(() => setOpen(null), [])
  return (
    <Section id="projects" eyebrow="Projects" title="Things I've built">
      <Lightbox project={open} onClose={close} />
      <div className="grid gap-5 md:grid-cols-2">
        {orderedProjects.map((p, i) => (
          <Reveal key={p.name} delay={(i % 2) * 0.08}>
            <motion.article whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className={`${card} flex h-full flex-col transition-colors hover:border-gold-400/70`}>
              {p.image && (
                <button
                  onClick={() => setOpen(p)}
                  aria-label={`View larger screenshot of ${p.name}`}
                  className="group relative -mx-6 -mt-6 mb-6 block overflow-hidden rounded-t-2xl border-b border-navy-100 dark:border-navy-800"
                >
                  <img
                    src={p.image} alt={`${p.name} screenshot`} width={1600} height={904} loading="lazy"
                    className="aspect-[16/9] w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full bg-navy-950/80 px-3 py-1 text-xs font-medium text-gold-300 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                    <Maximize2 size={12} /> Enlarge
                  </span>
                </button>
              )}
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-semibold">{p.name}</h3>
                  {(p.role || p.year) && (
                    <p className="mt-1 text-sm font-medium text-gold-700 dark:text-gold-400">{[p.role, p.year].filter(Boolean).join(' · ')}</p>
                  )}
                </div>
                <Code2 className="mt-1 shrink-0 text-navy-300 dark:text-navy-600" size={22} />
              </div>
              <p className="leading-relaxed text-navy-700 dark:text-navy-200">{p.what}</p>
              <dl className="mt-5 space-y-4 text-sm">
                {p.helps && (
                  <div>
                    <dt className="mb-1 font-semibold uppercase tracking-wider text-navy-400 dark:text-navy-400">Who it helps</dt>
                    <dd>{p.helps}</dd>
                  </div>
                )}
                {p.tech.length > 0 && (
                  <div>
                    <dt className="mb-2 font-semibold uppercase tracking-wider text-navy-400 dark:text-navy-400">Tech</dt>
                    <dd className="flex flex-wrap gap-2">{p.tech.map((t) => <Chip key={t}>{t}</Chip>)}</dd>
                  </div>
                )}
              </dl>
              {p.link && (
                <div className="mt-auto pt-6 text-sm">
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-medium text-navy-900 underline decoration-gold-400 underline-offset-4 dark:text-gold-300">
                      View project <ArrowUpRight size={16} />
                    </a>
                </div>
              )}
            </motion.article>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked" className="bg-white/60 dark:bg-navy-900/30">
      <ol className="relative space-y-10 border-l border-navy-200 pl-8 dark:border-navy-700">
        {experience.map((job, i) => (
          <Reveal key={job.org + job.role} delay={0.04 * i}>
            <li className="relative">
              <span className="absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border-2 border-gold-400 bg-cream dark:bg-navy-950">
                <span className="h-1.5 w-1.5 rounded-full bg-gold-500" />
              </span>
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-xl font-semibold">
                  {job.role}, <span className="text-gold-700 dark:text-gold-400">{job.org}</span>
                </h3>
                <span className="text-sm font-medium text-navy-500 dark:text-navy-300">{job.period}</span>
              </div>
              <ul className="mt-3 space-y-2 text-navy-700 dark:text-navy-200">
                {job.points.map((pt) => (
                  <li key={pt} className="flex gap-3 leading-relaxed">
                    <Briefcase size={14} className="mt-1.5 shrink-0 text-navy-300 dark:text-navy-600" /> {pt}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>
    </Section>
  )
}

function Education() {
  return (
    <Section id="education" eyebrow="Education" title="Learning and credentials">
      <div className="grid gap-5 md:grid-cols-3">
        <Reveal className={card}>
          <GraduationCap className="mb-4 text-gold-600 dark:text-gold-400" />
          <h3 className="font-display text-xl font-semibold">{education.degree}</h3>
          <p className="mt-1 text-navy-600 dark:text-navy-300">{education.school}</p>
          <p className="mt-3 text-sm font-medium text-gold-700 dark:text-gold-400">{education.status}</p>
        </Reveal>
        <Reveal className={card} delay={0.08}>
          <Award className="mb-4 text-gold-600 dark:text-gold-400" />
          <h3 className="font-display text-xl font-semibold">Certifications</h3>
          <ul className="mt-2 space-y-1 text-navy-600 dark:text-navy-300">
            {certifications.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </Reveal>
        <Reveal className={card} delay={0.16}>
          <Languages className="mb-4 text-gold-600 dark:text-gold-400" />
          <h3 className="font-display text-xl font-semibold">Languages</h3>
          <ul className="mt-2 space-y-1">
            {languages.map((l) => (
              <li key={l.name} className="flex justify-between text-navy-600 dark:text-navy-300">
                <span>{l.name}</span><span className="font-medium text-navy-900 dark:text-navy-50">{l.level}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

function Contact() {
  const rows = [
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: 'Phone', value: profile.phone, href: profile.phoneHref },
    { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinLabel, href: profile.linkedin },
    { icon: MapPin, label: 'Location', value: profile.location },
  ]
  return (
    <Section id="contact" eyebrow="Contact" title="Let's work together" className="bg-navy-900 text-navy-50 dark:bg-navy-900/60">
      <div className="grid gap-12 lg:grid-cols-2">
        <Reveal>
          <p className="max-w-md text-lg leading-relaxed text-navy-200">
            Hiring a full-stack developer, or have a web product that needs taking from requirements to a live deployment? Send me a message.
          </p>
          <a href={`mailto:${profile.email}`} className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gold-400 px-6 py-3.5 font-medium text-navy-950 transition hover:-translate-y-0.5 hover:bg-gold-300">
            <Mail size={18} /> Email me
          </a>
          <p className="mt-4 text-sm text-navy-300">References available on request.</p>
        </Reveal>
        <Reveal delay={0.1}>
          <ul className="divide-y divide-navy-700 rounded-2xl border border-navy-700">
            {rows.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-center gap-4 p-4 sm:p-5">
                <Icon size={20} className="shrink-0 text-gold-400" />
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-navy-300">{label}</p>
                  {href && !isPlaceholder(href) ? (
                    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noreferrer" className="break-words font-medium hover:text-gold-300">{value}</a>
                  ) : (
                    <p className="break-words font-medium"><Text>{value}</Text></p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

export default function App() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-gold-400 focus:px-4 focus:py-2 focus:text-navy-950">Skip to content</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <footer className="bg-navy-950 px-4 py-8 text-center text-sm text-navy-300 sm:px-6">
        © {new Date().getFullYear()} {profile.name} · {profile.location}
      </footer>
    </>
  )
}
