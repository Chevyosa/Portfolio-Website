"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CaseStudy } from "@/lib/projects-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.3 },
};

interface CaseStudyDetailProps {
  caseStudy: CaseStudy;
}

export function CaseStudyDetail({ caseStudy }: CaseStudyDetailProps) {
  return (
    <article className="w-full">
      {/* Hero Section */}
      <motion.section
        className="relative w-full h-96 sm:h-[500px] mb-12 sm:mb-16 overflow-hidden rounded-3xl"
        {...fadeUp}
      >
        <Image
          src={caseStudy.images.hero}
          alt={caseStudy.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </motion.section>

      {/* Header */}
      <motion.div className="flex flex-col gap-4 mb-12" {...fadeUp}>
        <div className="flex flex-wrap gap-2">
          {caseStudy.tags.map((tag) => (
            <Badge key={tag} variant="outline" className="text-zinc-600">
              {tag}
            </Badge>
          ))}
        </div>
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
          {caseStudy.title}
        </h1>
        <p className="text-xl text-zinc-600 max-w-2xl">{caseStudy.subtitle}</p>
      </motion.div>

      <Separator className="mb-12" />

      {/* Main Content Grid */}
      <div className="grid gap-12 lg:grid-cols-3">
        {/* Left Column - Main Content */}
        <motion.div className="lg:col-span-2 flex flex-col gap-12" {...fadeUp}>
          {/* Challenge Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Challenge
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              {caseStudy.challenge}
            </p>
          </div>

          {/* Solution Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Solution
            </h2>
            <p className="text-base leading-relaxed text-zinc-600">
              {caseStudy.solution}
            </p>
          </div>

          {/* Results Section */}
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
              Results
            </h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {caseStudy.results.map((result, idx) => (
                <Card
                  key={idx}
                  className="rounded-2xl border-zinc-200/70 bg-white/50"
                >
                  <CardContent className="pt-6">
                    <p className="text-sm leading-relaxed text-zinc-600">
                      {result}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Gallery Section */}
          {caseStudy.images.gallery.length > 0 && (
            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
                Gallery
              </h2>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                {caseStudy.images.gallery.map((image, idx) => (
                  <motion.div
                    key={idx}
                    className="relative h-64 sm:h-80 overflow-hidden rounded-2xl"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src={image}
                      alt={`Gallery ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        {/* Right Column - Info Cards */}
        <motion.div className="flex flex-col gap-6" {...fadeUp}>
          {/* Project Info */}
          <Card className="rounded-2xl border-zinc-200/70 bg-white/80">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Project Details
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-500">
                  Completed
                </p>
                <p className="text-sm font-medium text-zinc-900 mt-1">
                  {caseStudy.year}
                </p>
              </div>
              <Separator />
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-500">
                  Description
                </p>
                <p className="text-sm text-zinc-600 mt-2">
                  {caseStudy.description}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Technologies */}
          <Card className="rounded-2xl border-zinc-200/70 bg-white/80">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">
                Technologies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {caseStudy.technologies.map((tech) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="text-zinc-600 text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Project Link */}
          {caseStudy.link && (
            <Card className="rounded-2xl border-zinc-200/70 bg-white/80">
              <CardContent className="pt-6">
                <a
                  href={caseStudy.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-medium text-zinc-900 border border-zinc-200/70 rounded-lg hover:bg-zinc-50 transition-colors"
                >
                  Visit Project →
                </a>
              </CardContent>
            </Card>
          )}
        </motion.div>
      </div>
    </article>
  );
}
