import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

const PLACEHOLDER = /(\[ADD HERE[^\]]*\])/g

export const isPlaceholder = (s?: string) => !!s && s.includes('[ADD HERE')

/** Renders text, highlighting any [ADD HERE] markers so they're easy to find. */
export function Text({ children }: { children: string }) {
  return (
    <>
      {children.split(PLACEHOLDER).map((part, i) =>
        isPlaceholder(part) ? (
          <mark
            key={i}
            className="rounded border border-dashed border-gold-500 bg-gold-100/70 px-1.5 py-0.5 text-[0.85em] font-medium text-gold-800 dark:bg-gold-400/10 dark:text-gold-300"
          >
            {part}
          </mark>
        ) : (
          part
        ),
      )}
    </>
  )
}

export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function Section({
  id, eyebrow, title, children, className = '',
}: { id: string; eyebrow: string; title: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-600 dark:text-gold-400">{eyebrow}</p>
          <h2 className="mb-12 font-display text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
        </Reveal>
        {children}
      </div>
    </section>
  )
}

export function Chip({ children }: { children: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-navy-200 bg-white px-3 py-1 text-sm text-navy-700 dark:border-navy-700 dark:bg-navy-900 dark:text-navy-100">
      <Text>{children}</Text>
    </span>
  )
}

export const card =
  'rounded-2xl border border-navy-100 bg-white p-6 shadow-sm shadow-navy-900/5 dark:border-navy-800 dark:bg-navy-900/60 dark:shadow-none'
