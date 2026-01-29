import { About } from "@/components/web/about";
import { Contact } from "@/components/web/contact";
import { Experience } from "@/components/web/experience";
import { Footer } from "@/components/web/footer";
import { Hero } from "@/components/web/hero";
import { Projects } from "@/components/web/projects";
import { Skills } from "@/components/web/skills";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 sm:px-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
