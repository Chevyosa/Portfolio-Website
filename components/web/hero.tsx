"use client";

import { motion } from "framer-motion";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.4 },
};

export function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen snap-start justify-center  flex flex-col gap-8"
      {...fadeUp}
    >
      <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          <Badge
            variant="outline"
            className="w-fit border-zinc-200 text-zinc-600"
          >
            Portfolio Website of
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 sm:text-5xl lg:text-6xl">
            Riyanda Azis Febrian
          </h1>
          <p className="max-w-2xl text-lg leading-relaxed text-zinc-600 sm:text-xl">
            Full-Stack Developer & Mobile Engineer
          </p>
        </div>
        <Separator className="max-w-2xl" />
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href="#projects">View Projects</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#contact">Let’s Connect</a>
          </Button>
        </div>
      </div>
    </motion.section>
  );
}
