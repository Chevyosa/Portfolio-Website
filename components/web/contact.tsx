"use client"

import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.3 },
}

export function Contact() {
  return (
    <motion.section
      id="contact"
      className="py-20 sm:py-28"
      aria-labelledby="contact-title"
      {...fadeUp}
    >
      <Card className="rounded-3xl border-zinc-200/70 bg-white/90 p-8 shadow-sm sm:p-12">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Contact
            </p>
            <h2
              id="contact-title"
              className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Let’s build something meaningful.
            </h2>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Reach out for collaborations, product design, or engineering work.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="mailto:riyanda@example.com">Email Me</a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost">
              <a href="https://github.com" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </Button>
          </div>
        </div>
      </Card>
    </motion.section>
  )
}
