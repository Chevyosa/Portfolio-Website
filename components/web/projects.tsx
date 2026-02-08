"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { caseStudies } from "@/lib/projects-data";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.3 },
};

export function Projects() {
  return (
    <motion.section
      id="projects"
      className="py-20 sm:py-28"
      aria-labelledby="projects-title"
      {...fadeUp}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Projects
          </p>
          <h2
            id="projects-title"
            className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
          >
            A curated selection of recent work.
          </h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {caseStudies.slice(0, 3).map((project) => (
            <Card
              key={project.id}
              className="group rounded-3xl border-zinc-200/70 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardHeader className="gap-3">
                <CardTitle className="text-xl font-semibold text-zinc-900">
                  {project.title}
                </CardTitle>
                <p className="text-sm text-zinc-500">{project.description}</p>
              </CardHeader>
              <CardContent className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline" className="text-zinc-600">
                    {tag}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="px-0 text-zinc-900">
                  <Link href={`/projects/${project.slug}`}>
                    View Case Study
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center">
          <Button asChild size="lg">
            <a href="/projects">View All Projects</a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
