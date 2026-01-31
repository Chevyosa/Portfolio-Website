"use client";

export default function AnimatedLines() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.15]"
      viewBox="0 0 1000 600"
      preserveAspectRatio="none"
    >
      <line x1="100" y1="50" x2="300" y2="150" className="line" />
      <line x1="700" y1="80" x2="500" y2="200" className="line delay-1" />
      <line x1="200" y1="400" x2="400" y2="300" className="line delay-2" />
      <line x1="800" y1="350" x2="600" y2="450" className="line delay-3" />
    </svg>
  );
}
