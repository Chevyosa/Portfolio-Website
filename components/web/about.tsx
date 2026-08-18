"use client";

import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { SkillIcon } from "@/components/web/skill-icon";
import { Skill } from "@/lib/skills";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.3 },
};

function MarqueeRow({
  items,
  direction,
}: {
  items: Skill[];
  direction: "right" | "left";
}) {
  const duplicated = [...items, ...items];
  const x = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-3"
        animate={{ x }}
        transition={{
          duration: items.length * 2.5,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((skill, i) => (
          <div
            key={`${skill.id}-${i}`}
            className="flex shrink-0 items-center gap-2 rounded-xl border border-zinc-200/70 bg-white/70 px-3 py-2"
          >
            <SkillIcon name={skill.name} icon={skill.icon} />
            <span className="whitespace-nowrap text-xs font-medium text-zinc-600">
              {skill.name}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function About({ skills }: { skills: Skill[] }) {
  const half = Math.floor(skills.length / 2);
  const row2 = [...skills.slice(half), ...skills.slice(0, half)];
  return (
    <motion.section
      id="about"
      className="snap-start py-20 sm:py-28"
      aria-labelledby="about-title"
      {...fadeUp}
    >
      <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              About
            </p>
            <h2
              id="about-title"
              className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl"
            >
              Building calm, premium digital products with precision.
            </h2>
          </div>
          <Separator className="max-w-lg" />
          <p className="max-w-2xl text-base leading-relaxed text-zinc-600 sm:text-lg">
            I craft end-to-end experiences across web and mobile, blending
            product thinking with solid engineering. My focus is clarity,
            performance, and delightful interactions that feel effortless.
          </p>
        </div>
        <Card className="rounded-3xl border-zinc-200/70 bg-white/80 shadow-sm max-w-lg">
          <CardHeader className="gap-3">
            <CardTitle className="text-xl font-semibold text-zinc-900">
              Core Stack
            </CardTitle>
            <p className="text-sm text-zinc-500">
              Focused tools for premium, high-performance builds.
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            {skills.length > 0 ? (
              <>
                <MarqueeRow items={skills} direction="right" />
                <MarqueeRow items={row2} direction="left" />
              </>
            ) : (
              <p className="text-sm text-zinc-500">No skills yet.</p>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
}
