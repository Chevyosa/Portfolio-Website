"use client";

import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] as const },
  viewport: { once: true, amount: 0.2 },
};

export function Footer() {
  return (
    <motion.footer
      className="border-t border-zinc-200/70 py-8 sm:py-10 mt-12"
      {...fadeUp}
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-10">
        <div className="text-sm text-zinc-500">
          © 2026 Riyanda Azis Febrian. All rights reserved.
        </div>
      </div>
    </motion.footer>
  );
}
