export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  images: {
    hero: string;
    gallery: string[];
  };
  link?: string;
  repository?: string;
  confidential?: boolean;
  year: number;
}
