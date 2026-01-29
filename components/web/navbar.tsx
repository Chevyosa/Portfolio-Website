"use client";

import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 sm:px-10">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.16em] text-zinc-900"
        >
          RY
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-zinc-600 transition-colors hover:text-zinc-900"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-44">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
