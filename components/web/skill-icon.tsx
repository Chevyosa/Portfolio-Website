"use client";

import { useState } from "react";
import Image from "next/image";
import { skillIconSrc } from "@/lib/skills";

function hashColor(name: string): string {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) | 0;
  }
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 50%, 45%)`;
}

export function SkillIcon({ name, icon }: { name: string; icon?: string | null }) {
  const [errored, setErrored] = useState(false);

  if (errored) {
    return (
      <span
        className="flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold text-white"
        style={{ backgroundColor: hashColor(name) }}
      >
        {name.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <Image
      src={skillIconSrc(name, icon)}
      alt={name}
      width={28}
      height={28}
      className="h-7 w-7 object-contain"
      unoptimized
      onError={() => setErrored(true)}
    />
  );
}
