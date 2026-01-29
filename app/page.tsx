import { About } from "@/components/web/about";
import { Contact } from "@/components/web/contact";
import { Experience } from "@/components/web/experience";
import { Footer } from "@/components/web/footer";
import { Hero } from "@/components/web/hero";
import { Navbar } from "@/components/web/navbar";
import { Projects } from "@/components/web/projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <main className="mx-auto flex w-full max-w-6xl flex-col px-6 sm:px-10">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
