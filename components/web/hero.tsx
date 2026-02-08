"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import HeroImage from "@/assets/images/hero-profile.png";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.4 },
};

const specialties = [
  {
    title: "Mobile Development",
    description: "Flutter, Jetpack Compose, and iOS native experiences",
  },
  {
    title: "Web Development",
    description: "Modern frontend and backend solutions",
  },
  {
    title: "AI Integration",
    description: "Machine learning models in production",
  },
  {
    title: "UI/UX Design",
    description: "Thoughtful interfaces and interactions",
  },
];

export function Hero() {
  return (
    <motion.section
      id="hero"
      className="min-h-screen snap-start flex flex-col justify-center py-12 lg:py-0"
      {...fadeUp}
    >
      {/* Main Content */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12 items-center">
        {/* Left: Image */}
        <div className="flex justify-center lg:justify-center order-2 lg:order-1">
          <div className="relative w-80 h-96">
            <Image
              src={HeroImage}
              alt="Profile"
              fill
              className="object-contain rounded-2xl"
              priority
            />
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-zinc-900 rounded-full" />
          </div>
        </div>

        {/* Right: Content */}
        <div className="flex flex-col gap-6 order-1 lg:order-2">
          <div className="flex flex-col gap-3">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
              RIYANDA AZIS FEBRIAN
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 sm:text-4xl">
              Full-Stack Engineer & Mobile App Developer
            </h1>
          </div>

          <Separator className="max-w-lg" />

          <p className="max-w-2xl text-base leading-relaxed text-zinc-600">
            Experienced in building high-performance applications across web and
            mobile platforms. Specialized in Flutter, Android (Jetpack Compose),
            and modern backend systems with Laravel and Express.
          </p>

          <Card className="rounded-2xl border-zinc-200/70 bg-white/80 shadow-sm">
            <CardHeader className="gap-2">
              <CardTitle className="text-lg font-semibold text-zinc-900">
                Current Focus
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm leading-relaxed text-zinc-600">
                Building clean, scalable solutions with a focus on user
                experience and code quality. Passionate about solving real-world
                problems and integrating emerging technologies into production
                systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Specialties Section */}
      <div className="mt-16 flex flex-col gap-4">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500">
          Specialties
        </p>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-4">
          {specialties.map((specialty) => (
            <div
              key={specialty.title}
              className="rounded-2xl border border-zinc-200/70 bg-white/50 p-4 transition-all duration-300 hover:bg-white/80 hover:shadow-sm"
            >
              <h3 className="font-semibold text-zinc-900 text-sm">
                {specialty.title}
              </h3>
              <p className="text-xs text-zinc-500 mt-1">
                {specialty.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
