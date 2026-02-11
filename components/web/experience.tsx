"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.3 },
};

const experiences = [
  {
    role: "Technical Mobile Mentor",
    company: "Infinite Learning",
    period: "October 2025 — Present",
    impact:
      "Mentoring on mobile app architecture, guiding 60+ mentees through Flutter projects.",
  },
  {
    role: "Technical Web Mentor",
    company: "Infinite Learning",
    period: "August 2025 - September 2025",
    impact:
      "Conducted technical workshops on modern web development, helping teams improve code quality and delivery speed.",
  },
  {
    role: "Mobile Developer Intern",
    company: "Infinite Learning",
    period: "September 2024 — December 2024",
    impact:
      "Built responsive mobile applications with Jetpack Compose, delivering features used by 20+ users on Android devices.",
  },
];

export function Experience() {
  return (
    <motion.section
      id="experience"
      className="py-20 sm:py-28"
      aria-labelledby="experience-title"
      {...fadeUp}
    >
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-3">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
            Experience
          </p>
          <h2
            id="experience-title"
            className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
          >
            A calm timeline focused on impact.
          </h2>
        </div>
        <div className="space-y-8 border-l border-zinc-200 pl-6">
          {experiences.map((item) => (
            <div key={item.company} className="relative">
              <div className="absolute -left-2.75 top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-900" />
              <div className="flex flex-col gap-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold text-zinc-900">
                    {item.role}
                  </h3>
                  <span className="text-sm text-zinc-500">{item.company}</span>
                  <span className="text-sm text-zinc-400">{item.period}</span>
                </div>
                <p className="max-w-2xl text-sm leading-relaxed text-zinc-600">
                  {item.impact}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
