import { Metadata } from "next";
import Link from "next/link";

import { ClientNavbar } from "@/components/web/client-navbar";
import { Footer } from "@/components/web/footer";
import { ProjectCard } from "@/components/web/project-card";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { caseStudies } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Projects - Case Studies",
  description:
    "Explore my recent projects and case studies showcasing web development, mobile apps, and digital solutions.",
  keywords: ["projects", "case studies", "portfolio", "web development"],
  openGraph: {
    title: "Projects - Case Studies",
    description:
      "Explore my recent projects and case studies showcasing web development, mobile apps, and digital solutions.",
    url: "/projects",
    type: "website",
  },
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 flex flex-col">
      <ClientNavbar />
      <main className="flex-1 mx-auto w-full max-w-6xl px-6 py-12 sm:px-10 sm:py-16 lg:py-20">
        {/* Header Section */}
        <section className="mb-16 flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              Portfolio
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Recent Projects & Case Studies
            </h1>
            <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              A curated selection of projects I&apos;ve worked on, showcasing
              various technologies and design approaches. Each case study
              includes challenges, solutions, and measurable results.
            </p>
          </div>
          <Separator className="mt-4 max-w-lg" />
          <div className="flex flex-col gap-3 sm:flex-row pt-2">
            <Button asChild size="lg">
              <Link href="/#projects">Back to Overview</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#contact">Start a Project</Link>
            </Button>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="flex flex-col gap-12">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Statistics Section */}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            <Card className="rounded-2xl border-zinc-200/70 bg-white/50">
              <CardContent className=" text-center">
                <div className="text-3xl font-semibold text-zinc-900">
                  {caseStudies.length}
                </div>
                <p className="text-sm text-zinc-600 mt-2">Completed Projects</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-zinc-200/70 bg-white/50">
              <CardContent className=" text-center">
                <div className="text-3xl font-semibold text-zinc-900">
                  {new Set(caseStudies.flatMap((p) => p.technologies)).size}+
                </div>
                <p className="text-sm text-zinc-600 mt-2">Technologies Used</p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border-zinc-200/70 bg-white/50">
              <CardContent className=" text-center">
                <div className="text-3xl font-semibold text-zinc-900">
                  {Math.max(...caseStudies.map((p) => p.year))}
                </div>
                <p className="text-sm text-zinc-600 mt-2">Latest Year</p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <Card className="rounded-3xl border-zinc-200/70 bg-gradient-to-br from-white/80 to-zinc-50/80 p-8 sm:p-12">
            <div className="flex flex-col gap-6 items-start sm:items-center sm:text-center">
              <div className="flex flex-col gap-3">
                <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-950">
                  Ready to Start Your Project?
                </h2>
                <p className="text-base text-zinc-600 max-w-2xl">
                  Let&apos;s discuss your ideas and create something amazing
                  together. I&apos;m always open to new opportunities and
                  challenges.
                </p>
              </div>
              <Button asChild size="lg">
                <Link href="/#contact">Get In Touch</Link>
              </Button>
            </div>
          </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
}
