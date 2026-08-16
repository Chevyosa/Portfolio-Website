import { About } from "@/components/web/about";
import { Contact } from "@/components/web/contact";
import { Experience } from "@/components/web/experience";
import { Footer } from "@/components/web/footer";
import { Hero } from "@/components/web/hero";
import { ClientNavbar } from "@/components/web/client-navbar";
import { Projects } from "@/components/web/projects";
import { getPublishedProjects, getSkills } from "@/lib/projects-api";

export default async function Home() {
  const [projects, skills] = await Promise.all([
    getPublishedProjects(),
    getSkills(),
  ]);

  return (
    <div className="min-h-screen bg-transparent text-zinc-900">
      <ClientNavbar />
      <main className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 sm:px-10">
        <Hero />
        <About skills={skills} />
        <Projects projects={projects} />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
