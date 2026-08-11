import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import AnimatedLines from "@/components/animated-lines";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://febriyann.my.id"),
  title: "Riyanda Azis Febrian — Full-Stack Developer",
  description:
    "Portfolio of Riyanda Azis Febrian, a Full-Stack Developer & Mobile Engineer specializing in modern web and mobile applications.",
  keywords: [
    "Riyanda Azis Febrian",
    "Full Stack Developer",
    "Mobile Developer",
    "Next.js",
    "Flutter",
    "React",
    "Portfolio",
    "Full Stack Developer Batam"
  ],
  authors: [{ name: "Riyanda Azis Febrian" }],
  creator: "Riyanda Azis Febrian",
  openGraph: {
    title: "Riyanda Azis Febrian",
    description:
      "Apple-style personal portfolio showcasing projects, skills, and experience.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased scroll-smooth snap-y snap-mandatory`}
      >
        <div className="relative min-h-screen">
          <AnimatedLines />
          <div className="relative z-10">{children}</div>
        </div>
      </body>
    </html>
  );
}
