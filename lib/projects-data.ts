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

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "habit-tracker",
    title: "HabitTracker App",
    subtitle: "A minimal habit tracking application",
    description:
      "A minimal habit tracking application that helps users build and maintain positive routines.",
    tags: ["Swift", "SwiftUI", "SwiftData"],
    repository: "https://github.com/yourusername/habit-tracker",
    confidential: false,
    challenge:
      "Create an intuitive financial dashboard that presents complex data in a digestible format while maintaining a premium aesthetic. The challenge was balancing visual simplicity with comprehensive financial information.",
    solution:
      "Designed a clean, card-based layout with interactive charts and real-time data visualization. Implemented progressive disclosure of information with smooth animations and intuitive interactions. Used a carefully selected color palette to highlight important metrics.",
    results: [
      "Improved user productivity and habit formation",
      "Ease of use for tracking habits",
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
      "A.K.A InfiniteTrack v2, A hybrid version of the InfiniteTrack mobile application for managing attendance in Infinite Learning. Developed for both iOS and Android using Flutter.",
    tags: ["Flutter", "Dart", "Express", "MySQL"],
    repository: "https://github.com/yourusername/infinitetrack-hybrid",
    confidential: false,
    challenge:
      "Build a cross-platform mobile application that simplifies the travel booking process while providing inspiring content. The main challenge was creating a seamless experience across iOS and Android platforms.",
    solution:
      "Developed a Flutter application with a focus on animations and micro-interactions. Implemented a backend API with Node.js and MySQL for real-time attendance tracking and management. Created a content-rich interface with smooth transitions and intuitive navigation patterns.",
    results: [
      "Improved cross-platform user experience with consistent UI/UX",
      "Enhanced attendance management efficiency",
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
    repository: "https://github.com/yourusername/writeit-app",
    confidential: false,
    challenge:
      "Create a platform that allows you to manage projects, tasks, and team collaboration on the go. The challenge was to design an interface that is both powerful and easy to use on mobile devices.",
    solution:
      "Built with Flutter and Dart for cross-platform compatibility. Implemented Firebase for real-time data synchronization and user authentication. Designed a clean, intuitive interface with responsive layouts that adapt to different screen sizes.",
    results: [
      "Enhanced team collaboration with real-time updates",
      "Increased productivity with mobile access to project management tools",
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
    slug: "petrosafe-app",
    title: "Petrosafe App",
    subtitle: "Mobile App for Vehicle Safety Inspection in Elnusa Petrofin",
    description:
      "A mobile application for managing vehicle safety inspections in Elnusa Petrofin, ensuring compliance and operational efficiency.",
    tags: ["Flutter", "Dart", "Express", "Javascript", "MySQL"],
    confidential: true,
    challenge:
      "Create a platform that allows mechanics to manage vehicle safety inspections in Elnusa Petrofin.",
    solution:
      "Built with Flutter and Dart for cross-platform compatibility. Implemented Express.js and MySQL for backend functionality. Designed a clean, intuitive interface with responsive layouts that adapt to different screen sizes.",
    results: ["Enhanced inspection efficiency", "Improved compliance tracking"],
    technologies: ["Flutter", "Dart", "Express", "Javascript", "MySQL"],
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
  {
    id: "5",
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
      "Improved driver alertness and road safety",
      "Reduced incidents of drowsiness-related accidents",
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
  {
    id: "6",
    slug: "inspeksi-metro-dewata",
    title: "Inspeksi Metro Dewata",
    subtitle: "Mobile App for Vehicle Safety Inspection in Metro Dewata",
    description:
      "A mobile application for managing vehicle safety inspections in Metro Dewata, ensuring compliance and operational efficiency.",
    tags: ["Kodular", "Firebase"],
    challenge:
      "Create a platform that allows you to manage projects, tasks, and team collaboration on the go. The challenge was to design an interface that is both powerful and easy to use on mobile devices.",
    solution:
      "Built with Kodular and Firebase for Android devices. Implemented Firebase for real-time data synchronization and user authentication. Designed a clean, intuitive interface with responsive layouts that adapt to different screen sizes.",
    results: ["Enhanced inspection efficiency", "Improved compliance tracking"],
    technologies: ["Kodular", "Firebase"],
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
  {
    id: "7",
    slug: "pretrip-inspection-app",
    title: "Pretrip Inspection Pertamina",
    subtitle: "Mobile App for Vehicle Safety Inspection in Pertamina",
    description:
      "A mobile application for managing vehicle safety inspections in Pertamina, ensuring compliance and operational efficiency.",
    tags: ["Kodular", "Express", "MySQL", "Javascript"],
    challenge:
      "Create a platform that allows you to manage projects, tasks, and team collaboration on the go. The challenge was to design an interface that is both powerful and easy to use on mobile devices.",
    solution:
      "Built with Kodular and Express for Android devices. Implemented Express and MySQL for backend data management. Designed a clean, intuitive interface with responsive layouts that adapt to different screen sizes.",
    results: ["Enhanced inspection efficiency", "Improved compliance tracking"],
    technologies: ["Kodular", "Express", "MySQL", "Javascript"],
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
  {
    id: "8",
    slug: "asklaptop",
    title: "AskLaptop",
    subtitle:
      "Website for Laptop Recommendation Based on User Needs Using Natural Language Processing and Multi-Layer Perceptron",
    description:
      "A website for recommending laptops based on user needs using Natural Language Processing (NLP) and Multi-Layer Perceptron (MLP) algorithms.",
    tags: ["ReactJS", "Express", "MySQL", "Javascript", "Python", "FlaskAPI"],
    challenge:
      "Create a platform that allows users to get personalized laptop recommendations based on their needs and preferences.",
    solution:
      "Built with ReactJS and Express for web applications. Implemented Express and MySQL for backend data management. Designed a clean, intuitive interface with responsive layouts that adapt to different screen sizes.",
    results: [
      "Personalized laptop recommendations",
      "Improved user satisfaction",
    ],
    technologies: [
      "ReactJS",
      "Express",
      "MySQL",
      "Javascript",
      "Python",
      "FlaskAPI",
    ],
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
  {
    id: "9",
    slug: "infinitetrack",
    title: "InfiniteTrack",
    subtitle: "Mobile App for Attendance Management Using Geolocation",
    description:
      "A mobile application for managing attendance using geolocation tracking and real-time data synchronization.",
    tags: ["Kotlin", "Jetpack Compose", "Express", "MySQL", "Javascript"],
    challenge:
      "Create a platform that allows users to manage attendance using geolocation tracking.",
    solution:
      "Built with Kotlin and Jetpack Compose for Android devices. Implemented Express and MySQL for backend data management. Designed a clean, intuitive interface with responsive layouts that adapt to different screen sizes.",
    results: [
      "Improved attendance tracking accuracy",
      "Enhanced user experience with real-time updates",
    ],
    technologies: [
      "Kotlin",
      "Jetpack Compose",
      "Express",
      "MySQL",
      "Javascript",
    ],
    images: {
      hero: "/images/projects/studio-hero.jpg",
      gallery: [
        "/images/projects/studio-1.jpg",
        "/images/projects/studio-2.jpg",
        "/images/projects/studio-3.jpg",
      ],
    },
    year: 2024,
  },
  {
    id: "10",
    slug: "learnfinitee",
    title: "Learnfinitee",
    subtitle: "Website for Learning Management System in Infinite Learning",
    description:
      "A website for managing learning content and tracking student progress in an infinite learning environment.",
    tags: ["ReactJS", "Express", "MySQL", "Javascript"],
    challenge:
      "Create a platform that allows users to manage learning content and track student progress.",
    solution:
      "Built with ReactJS and Express for web applications. Implemented Express and MySQL for backend data management. Designed a clean, intuitive interface with responsive layouts that adapt to different screen sizes.",
    results: [
      "Improved learning content management",
      "Enhanced student progress tracking",
    ],
    technologies: ["ReactJS", "Express", "MySQL", "Javascript"],
    images: {
      hero: "/images/projects/studio-hero.jpg",
      gallery: [
        "/images/projects/studio-1.jpg",
        "/images/projects/studio-2.jpg",
        "/images/projects/studio-3.jpg",
      ],
    },
    year: 2024,
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getAllCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
