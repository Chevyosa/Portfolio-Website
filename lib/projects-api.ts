import { CaseStudy } from "@/lib/projects-data";
import { Skill } from "@/lib/skills";

const API_BASE_URL = process.env.API_BASE_URL || "https://api.febriyann.my.id";

export async function getPublishedProjects(): Promise<CaseStudy[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/public/projects`, {
      next: { tags: ["projects"] },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch projects: ${res.status}`);
    }

    const json = await res.json();
    return (json.data ?? []) as CaseStudy[];
  } catch (error) {
    console.error("[projects-api] getPublishedProjects failed:", error);
    return [];
  }
}

export async function getPublishedProjectBySlug(
  slug: string
): Promise<CaseStudy | undefined> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/public/projects/${slug}`, {
      next: { tags: ["projects"] },
    });

    if (res.status === 404) {
      return undefined;
    }

    if (!res.ok) {
      throw new Error(`Failed to fetch project: ${res.status}`);
    }

    const json = await res.json();
    return json.data as CaseStudy;
  } catch (error) {
    console.error("[projects-api] getPublishedProjectBySlug failed:", error);
    return undefined;
  }
}

export async function getSkills(): Promise<Skill[]> {
  try {
    const res = await fetch(`${API_BASE_URL}/api/public/skills`, {
      next: { tags: ["skills"] },
    });

    if (!res.ok) {
      throw new Error(`Failed to fetch skills: ${res.status}`);
    }

    const json = await res.json();
    return (json.data ?? []) as Skill[];
  } catch (error) {
    console.error("[projects-api] getSkills failed:", error);
    return [];
  }
}
