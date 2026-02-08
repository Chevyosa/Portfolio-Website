"use client";

import Link from "next/link";
import Image from "next/image";
import { CaseStudy } from "@/lib/projects-data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  project: CaseStudy;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`} className="group">
      <Card className="rounded-3xl border-zinc-200/70 bg-white/90 shadow-sm transition-all duration-300 overflow-hidden h-full hover:-translate-y-1 hover:shadow-lg">
        {/* Project Image */}
        <div className="relative h-48 w-full overflow-hidden bg-zinc-100">
          <Image
            src={project.images.hero}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = "none";
            }}
          />
        </div>

        {/* Project Info */}
        <CardHeader className="gap-3">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <CardTitle className="text-xl font-semibold text-zinc-900">
                {project.title}
              </CardTitle>
              <p className="text-sm text-zinc-500 mt-1">{project.subtitle}</p>
            </div>
            <span className="text-xs font-medium text-zinc-500 whitespace-nowrap">
              {project.year}
            </span>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <p className="text-sm leading-relaxed text-zinc-600 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="text-xs text-zinc-600"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Results Preview */}
          <div className="pt-2 border-t border-zinc-100">
            <p className="text-xs font-medium uppercase tracking-[0.1em] text-zinc-500 mb-2">
              Key Results
            </p>
            <ul className="text-xs text-zinc-600 space-y-1">
              {project.results.slice(0, 2).map((result, i) => (
                <li key={i} className="flex gap-2">
                  <span className="text-zinc-400">•</span>
                  <span className="line-clamp-1">{result}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <Button
            variant="ghost"
            className="w-full justify-center gap-2 text-zinc-900 hover:bg-zinc-100 mt-2"
          >
            View Case Study →
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
