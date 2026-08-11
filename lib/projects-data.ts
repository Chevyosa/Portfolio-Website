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
    id: "11",
    slug: "infinite-learning-lms-v2",
    title: "Infinite Learning LMS v2",
    subtitle: "Modern Learning Management System for Infinite Learning",
    description:
      "A recreation of the original LMS to replace Moodle, improving mentor's ease in managing assessments, logbooks, and mentee attendances connected to transcripts and certificates.",
    tags: ["NextJS", "NestJS", "PostgreSQL", "Custom Design System"],
    confidential: true,
    challenge:
      "Recreate the previous Moodle-based LMS to streamline administrative tasks for mentors and improve the overall learning experience.",
    solution:
      "Developed a modern web application using NextJS for the frontend and NestJS with PostgreSQL for the backend. The system automates repetitive administrative tasks, such as assessment management, logbook tracking, and attendance monitoring, which are directly connected to transcripts and certificates.",
    results: [
      "Improved mentor efficiency in managing assessments and logbooks",
      "Automated mentee attendance tracking connected to transcripts and certificates",
      "Streamlined repetitive administrative tasks",
    ],
    technologies: ["NextJS", "NestJS", "PostgreSQL", "Typescript"],
    images: {
      hero: "/images/projects/thumbnail-lms.png",
      gallery: [
        "/images/projects/lms-1.png",
        "/images/projects/lms-2.png",
        "/images/projects/infinitelearninglms.png"
      ],
    },
    year: 2026,
  },
  {
    id: "1",
    slug: "habit-tracker",
    title: "HabitTracker App",
    subtitle: "A minimal habit tracking application",
    description:
      "A minimal habit tracking application that helps users build and maintain positive routines.",
    tags: ["Swift", "SwiftUI", "SwiftData"],
    repository: "https://github.com/Chevyosa/HabitTracker.git",
    confidential: false,
    challenge:
      "Design a mobile app that helps users build and maintain positive habits at scale. The main challenge was creating an engaging interface that encourages consistent habit tracking without overwhelming users with complexity.",
    solution:
      "Built a minimalist iOS app using SwiftUI with a focus on rapid interaction patterns. Implemented local data persistence with SwiftData for seamless offline sync. Designed motivational visual feedback with completion streaks and progress analytics to encourage habit formation.",
    results: [
      "Improved user productivity and habit formation",
      "Ease of use for tracking habits",
    ],
    technologies: ["Swift", "SwiftUI", "SwiftData"],
    images: {
      hero: "/images/projects/habit-tracker.png",
      gallery: [
        "/images/projects/habit-1.png",
        "/images/projects/habit-2.png",
        "/images/projects/habit-3.png",
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
    confidential: true,
    challenge:
      "Develop a hybrid attendance tracking system for Infinite Learning that works seamlessly across both iOS and Android. The challenge was integrating geolocation tracking with real-time synchronization while maintaining data accuracy and security.",
    solution:
      "Built a cross-platform Flutter app with geolocation services and offline-first architecture. Implemented secure Express.js backend with MySQL for attendance data management. Designed an intuitive interface allowing quick check-in/check-out with attendance verification and reporting features.",
    results: [
      "Improved cross-platform user experience with consistent UI/UX",
      "Enhanced attendance management efficiency",
    ],
    technologies: ["Flutter", "Dart", "Node.js", "Express", "MySQL"],
    images: {
      hero: "/images/projects/infinitetrack-hybrid.png",
      gallery: [
        "/images/projects/infinitetrackhybrid-1.png",
        "/images/projects/infinitetrackhybrid-2.png",
        "/images/projects/infinitetrackhybrid-3.png",
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
    repository: "https://github.com/Chevyosa/Writeit-App.git",
    confidential: false,
    challenge:
      "Create a lightweight project management solution that enables teams to collaborate effectively on mobile devices. The key challenge was balancing feature richness with mobile usability while ensuring real-time data consistency.",
    solution:
      "Developed a Flutter application with Firebase backend for instant synchronization across devices. Designed hierarchical task management with team permissions and real-time notifications. Implemented offline support with automatic sync to ensure uninterrupted productivity.",
    results: [
      "Enhanced team collaboration with real-time updates",
      "Increased productivity with mobile access to project management tools",
    ],
    technologies: ["Flutter", "Dart", "Firebase"],
    images: {
      hero: "/images/projects/writeit.png",
      gallery: [
        "/images/projects/writeit-1.png",
        "/images/projects/writeit-2.png",
        "/images/projects/writeit-3.png",
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
    confidential: false,
    repository: "https://github.com/Chevyosa/petrosafe_app.git",
    challenge:
      "Develop a comprehensive vehicle safety inspection system for Elnusa Petrofin that streamlines compliance checks and reduces manual paperwork. The challenge was creating a mobile-first solution that mechanics can use in the field with offline capability.",
    solution:
      "Built a Flutter app with offline-first architecture for field operations. Implemented Express.js backend with MySQL for inspection data management and compliance reporting. Designed intuitive checklists with photo documentation and digital signatures for complete inspection records.",
    results: ["Enhanced inspection efficiency", "Improved compliance tracking"],
    technologies: ["Flutter", "Dart", "Express", "Javascript", "MySQL"],
    images: {
      hero: "/images/projects/petrosafe.png",
      gallery: [
        "/images/projects/petrosafe-1.png",
        "/images/projects/petrosafe-2.png",
        "/images/projects/petrosafe-3.png",
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
    repository: "https://github.com/Chevyosa/sleepy_app.git",
    challenge:
      "Build a real-time driver monitoring system that detects drowsiness using camera-based ML models to prevent accidents and improve road safety. The challenge was implementing accurate facial landmark detection and drowsiness recognition with minimal latency.",
    solution:
      "Developed a Flutter app with integrated camera access and PyTorch-based ML model for real-time drowsiness detection. Built a Flask API backend that processes video frames and provides alerts. Implemented audio/haptic alerts and logging system to track driver safety metrics.",
    results: [
      "Improved driver alertness and road safety",
      "Reduced incidents of drowsiness-related accidents",
    ],
    technologies: ["Flutter", "Dart", "FlaskAPI", "Python"],
    images: {
      hero: "/images/projects/terjaga.png",
      gallery: [
        "/images/projects/terjaga-1.png",
        "/images/projects/terjaga-2.png",
        "/images/projects/terjaga-3.png",
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
      "Create an Android-based inspection system for Metro Dewata's vehicle safety compliance with rapid deployment. The challenge was building a no-code solution that operators could quickly adopt without IT overhead while maintaining data integrity.",
    solution:
      "Built with Kodular no-code platform for rapid development and Firebase for real-time data sync. Designed intuitive inspection checklists with photo capture and offline support. Implemented automated reporting and compliance tracking dashboards.",
    results: ["Enhanced inspection efficiency", "Improved compliance tracking"],
    technologies: ["Kodular", "Firebase"],
    images: {
      hero: "/images/projects/inspeksimetrodewata.png",
      gallery: [],
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
      "Develop a pre-trip vehicle inspection system for Pertamina that ensures all vehicles meet safety standards before operation. The challenge was creating a scalable Android app that integrates with existing backend systems for compliance auditing.",
    solution:
      "Built with Kodular for Android app development and Express.js backend for data management. Implemented MySQL database for inspection records and compliance history. Designed comprehensive checklists with digital sign-offs and automated compliance reporting.",
    results: ["Enhanced inspection efficiency", "Improved compliance tracking"],
    technologies: ["Kodular", "Express", "MySQL", "Javascript"],
    images: {
      hero: "/images/projects/pretrip.png",
      gallery: [],
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
    repository: "https://github.com/Chevyosa/web-asklaptop-vercel.git",
    challenge:
      "Build an intelligent laptop recommendation system that understands user needs through natural language input. The challenge was combining NLP to parse user requirements with ML algorithms to provide accurate, personalized laptop suggestions.",
    solution:
      "Developed a React frontend with conversational UI for natural language input. Implemented Flask backend with NLP (FastText) for requirement parsing and MLP neural network for recommendation logic. Built Express.js API with MySQL database storing laptop specifications for real-time matching.",
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
      hero: "/images/projects/asklaptop.png",
      gallery: [],
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
    confidential: true,
    challenge:
      "Create a geolocation-based attendance system for Infinite Learning that automatically records presence within designated areas. The challenge was ensuring GPS accuracy, handling privacy concerns, and syncing attendance data reliably in real-time.",
    solution:
      "Built with Kotlin and Jetpack Compose for modern Android development with real-time location services. Implemented secure Express.js backend with MySQL for attendance records. Designed geofencing logic with automatic check-in/check-out and historical attendance analytics.",
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
      hero: "/images/projects/infinitetrack.jpg",
      gallery: [],
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
    confidential: true,
    challenge:
      "Build a comprehensive Learning Management System for Infinite Learning that scales to support multiple courses, instructors, and thousands of students. The challenge was creating an intuitive platform that combines course management, progress tracking, and interactive learning features.",
    solution:
      "Developed a React-based frontend with modular course components and real-time progress dashboards. Built Express.js backend with MySQL for robust data management of courses, assignments, and student progress. Implemented role-based access control for students, instructors, and administrators.",
    results: [
      "Improved learning content management",
      "Enhanced student progress tracking",
    ],
    technologies: ["ReactJS", "Express", "MySQL", "Javascript"],
    images: {
      hero: "/images/projects/learnfinitee.jpg",
      gallery: [],
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
