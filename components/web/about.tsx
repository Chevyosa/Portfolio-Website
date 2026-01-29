"use client"

import { motion } from "framer-motion"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.3 },
}

export function About() {
  return (
    <motion.section
      id="about"
      className="py-20 sm:py-28"
      aria-labelledby="about-title"
      {...fadeUp}
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>
            <h2
              id="about-title"
              className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Building calm, premium digital products with precision.
            </h2>
          </div>
          <Separator className="max-w-lg" />
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            I craft end-to-end experiences across web and mobile, blending
            product thinking with solid engineering. My focus is clarity,
            performance, and delightful interactions that feel effortless.
          </p>
        </div>
        <Card className="rounded-3xl border-zinc-200/70 bg-white/80 shadow-sm">
          <CardHeader className="gap-3">
            <CardTitle className="text-xl font-semibold text-zinc-900">
              Product Snapshot
            </CardTitle>
            <p className="text-sm text-zinc-500">
              A quick visual hint of the craft behind each project.
            </p>
          </CardHeader>
          <CardContent>
            <div className="aspect-[4/3] w-full rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-zinc-50 via-white to-zinc-100" />
          </CardContent>
        </Card>
      </div>
    </motion.section>
  )
}
