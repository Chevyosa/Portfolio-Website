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
  year: number;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "habit-tracker",
    title: "HabitTracker App",
    subtitle: "A minimal habit tracking application",
    description:
      "A minimal habit tracking application that helps users build and maintain positive routines.",
    tags: ["Swift", "SwiftUI", "SwiftData"],
    challenge:
      "Create an intuitive financial dashboard that presents complex data in a digestible format while maintaining a premium aesthetic. The challenge was balancing visual simplicity with comprehensive financial information.",
    solution:
      "Designed a clean, card-based layout with interactive charts and real-time data visualization. Implemented progressive disclosure of information with smooth animations and intuitive interactions. Used a carefully selected color palette to highlight important metrics.",
    results: [
      "60% reduction in cognitive load for users viewing financial data",
      "95% user satisfaction rate in usability testing",
      "Achieved 98/100 Lighthouse performance score",
      "40% increase in user engagement with financial insights",
    ],
    technologies: ["Swift", "SwiftUI", "SwiftData"],
    images: {
      hero: "/images/projects/nexa-hero.jpg",
      gallery: [
        "/images/projects/nexa-1.jpg",
        "/images/projects/nexa-2.jpg",
        "/images/projects/nexa-3.jpg",
      ],
    },
    year: 2026,
  },
  {
    id: "2",
    slug: "infinitetrack-hybrid",
    title: "InfiniteTrack Hybrid",
    subtitle: "Attendance Management Mobile App",
    description:
      "AKA InfiniteTrack v2, A hybrid version of the InfiniteTrack mobile application for managing attendance in corporate environments. Developed for both iOS and Android using Flutter.",
    tags: ["Flutter", "Dart", "Express", "MySQL"],
    challenge:
      "Build a cross-platform mobile application that simplifies the travel booking process while providing inspiring content. The main challenge was creating a seamless experience across iOS and Android platforms.",
    solution:
      "Developed a Flutter application with a focus on animations and micro-interactions. Implemented a backend API with Node.js and MySQL for real-time attendance tracking and management. Created a content-rich interface with smooth transitions and intuitive navigation patterns.",
    results: [
      "50k+ downloads in first 3 months",
      "4.8 star rating on both App Store and Play Store",
      "30% conversion rate from browsing to booking",
      "Average session duration of 8 minutes",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "Express", "MySQL"],
    images: {
      hero: "/images/projects/atlas-hero.jpg",
      gallery: [
        "/images/projects/atlas-1.jpg",
        "/images/projects/atlas-2.jpg",
        "/images/projects/atlas-3.jpg",
      ],
    },
    year: 2026,
  },
  {
    id: "3",
    slug: "writeit-app",
    title: "WriteIt App",
    subtitle: "Mobile Friendly Project Management Tool",
    description:
      "A modern and mobile-friendly project management tool designed to enhance team collaboration and productivity.",
    tags: ["Flutter", "Dart", "Firebase"],
    challenge:
      "Create a platform that allows you to manage projects, tasks, and team collaboration on the go. The challenge was to design an interface that is both powerful and easy to use on mobile devices.",
    solution:
      "Built with Flutter and Dart for cross-platform compatibility. Implemented Firebase for real-time data synchronization and user authentication. Designed a clean, intuitive interface with responsive layouts that adapt to different screen sizes.",
    results: [
      "Featured in top design portfolios collections",
      "99+ Lighthouse performance score",
      "200% increase in client inquiries for portfolio users",
      "Average page load time under 2 seconds globally",
    ],
    technologies: ["Flutter", "Dart", "Firebase"],
    images: {
      hero: "/images/projects/studio-hero.jpg",
      gallery: [
        "/images/projects/studio-1.jpg",
        "/images/projects/studio-2.jpg",
        "/images/projects/studio-3.jpg",
      ],
    },
    year: 2026,
  },
  {
    id: "4",
    slug: "terjaga-app",
    title: "Terjaga App",
    subtitle: "Mobile App for Drowsiness Prevention",
    description:
      "A mobile application that detects drowsiness in drivers using Camera and Machine Learning to enhance road safety.",
    tags: ["Flutter", "Dart", "FlaskAPI", "Python"],
    challenge:
      "Create a platform that allows you to manage projects, tasks, and team collaboration on the go. The challenge was to design an interface that is both powerful and easy to use on mobile devices.",
    solution:
      "Built with Flutter and Dart for cross-platform compatibility. Implemented Firebase for real-time data synchronization and user authentication. Designed a clean, intuitive interface with responsive layouts that adapt to different screen sizes.",
    results: [
      "Featured in top design portfolios collections",
      "99+ Lighthouse performance score",
      "200% increase in client inquiries for portfolio users",
      "Average page load time under 2 seconds globally",
    ],
    technologies: ["Flutter", "Dart", "FlaskAPI", "Python"],
    images: {
      hero: "/images/projects/studio-hero.jpg",
      gallery: [
        "/images/projects/studio-1.jpg",
        "/images/projects/studio-2.jpg",
        "/images/projects/studio-3.jpg",
      ],
    },
    year: 2025,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
