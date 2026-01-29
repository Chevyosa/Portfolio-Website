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
    role: "Senior Frontend Engineer",
    company: "Lumina Labs",
    period: "2024 — Present",
    impact:
      "Led the redesign of the flagship web app, improving conversion by 28%.",
  },
  {
    role: "Mobile Engineer",
    company: "Helios Studio",
    period: "2022 — 2024",
    impact: "Built cross-platform experiences with a 4.8★ app rating.",
  },
  {
    role: "Product Designer",
    company: "Solace Ventures",
    period: "2020 — 2022",
    impact: "Shipped a design system adopted across five product teams.",
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
              <div className="absolute -left-[11px] top-1.5 h-2.5 w-2.5 rounded-full bg-zinc-900" />
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
