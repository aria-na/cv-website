"use client"

import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Alex Chen
        </Link>
        <nav className="flex items-center gap-6">
          <Link
            href="#about"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#experience"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Experience
          </Link>
          <Link
            href="#projects"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Projects
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
