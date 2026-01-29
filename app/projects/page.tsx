import Link from "next/link";

import { Navbar } from "@/components/web/navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 py-16 sm:px-10">
        <section className="flex flex-col gap-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Projects
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
            A curated selection of recent work.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            This page is a starting point. More detailed case studies and
            visuals will be added soon.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/#projects">Back to Overview</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/#contact">Start a Project</Link>
            </Button>
          </div>
        </section>
        <section className="grid gap-6 md:grid-cols-2">
          {["Nexa Finance", "Atlas Mobility"].map((title) => (
            <Card
              key={title}
              className="rounded-3xl border-zinc-200/70 bg-white/90 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex flex-col gap-4 p-8">
                <div className="text-lg font-semibold text-zinc-900">
                  {title}
                </div>
                <p className="text-sm text-zinc-600">
                  Detail view placeholder with Apple-style layout and gentle
                  hierarchy.
                </p>
                <Button variant="ghost" className="w-fit px-0 text-zinc-900">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </section>
      </main>
    </div>
  );
}
