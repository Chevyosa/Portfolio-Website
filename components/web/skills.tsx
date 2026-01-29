"use client"

import { motion } from "framer-motion"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.3 },
}

const skills = [
  { name: "Next.js", focus: "App Router" },
  { name: "React", focus: "Design Systems" },
  { name: "TypeScript", focus: "Scalable Types" },
  { name: "Tailwind CSS", focus: "Minimal UI" },
  { name: "Framer Motion", focus: "Subtle Motion" },
  { name: "Node.js", focus: "APIs & Services" },
  { name: "React Native", focus: "Mobile Craft" },
  { name: "Figma", focus: "Product Design" },
]

export function Skills() {
  return (
    <motion.section
      id="skills"
      className="py-20 sm:py-28"
      aria-labelledby="skills-title"
      {...fadeUp}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Skills
          </p>
          <h2
            id="skills-title"
            className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
          >
            A focused stack for premium digital experiences.
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill) => (
            <Card
              key={skill.name}
              className="rounded-2xl border-zinc-200/70 bg-white/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            >
              <CardContent className="flex flex-col gap-3 p-6">
                <div className="text-base font-semibold text-zinc-900">
                  {skill.name}
                </div>
                <Badge variant="secondary" className="w-fit text-zinc-600">
                  {skill.focus}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
