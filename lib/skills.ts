export interface Skill {
  id: string;
  name: string;
  icon?: string | null;
}

export function skillIconSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\.js$/i, "dotjs")
    .replace(/\s+/g, "")
    .replace(/[^a-z0-9]/g, "");
}

export function skillIconSrc(name: string, icon?: string | null): string {
  const slug = icon || skillIconSlug(name);
  return `https://cdn.simpleicons.org/${slug}/111111`;
}

