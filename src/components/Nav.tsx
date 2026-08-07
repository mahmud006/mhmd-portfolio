"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/lib/chapters";
import { chapterIcons } from "@/lib/chapter-icons";
import ThemeToggle from "@/components/ThemeToggle";

const shortLabels: Record<string, string> = {
  origin: "Origin",
  internship: "Intern",
  rag: "RAG",
  railway: "Railway",
  recycling: "Recycling",
  healthcare: "Healthcare",
};

const chapterLinks = chapters.map((c) => ({
  id: c.id,
  index: c.index,
  label: shortLabels[c.id] ?? c.title,
}));

const navLinks = [...chapterLinks.map((c) => ({ id: c.id, label: c.label })), { id: "now", label: "Now" }];

export default function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const [active, setActive] = useState<string>("hero");

  useEffect(() => {
    const sections = ["hero", ...navLinks.map((l) => l.id)]
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 border-b border-border bg-bg/90 backdrop-blur-sm">
      <div className="mx-auto flex h-full max-w-[1400px] items-center justify-between gap-4 px-4 md:px-8">
        <a
          href="#hero"
          aria-label="Back to top"
          className="clip-notch-sm flex h-9 w-9 shrink-0 items-center justify-center border border-border-strong font-display text-sm font-bold text-text"
        >
          MH
        </a>

        <nav className="hidden min-w-0 items-center gap-1 font-mono text-xs uppercase tracking-[0.1em] md:flex">
          {chapterLinks.map((link) => {
            const isActive = active === link.id;

            if (link.index === "00") {
              return (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  className={`shrink-0 whitespace-nowrap px-2 transition-colors duration-150 ${
                    isActive ? "text-accent" : "text-text-dim hover:text-text"
                  }`}
                >
                  {link.label}
                </a>
              );
            }

            const ChapterIcon = chapterIcons[link.id];

            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                aria-label={link.label}
                className="group relative flex h-9 shrink-0 items-center px-2"
              >
                <ChapterIcon
                  size={15}
                  weight="bold"
                  className={`transition-colors duration-150 ${
                    isActive ? "text-accent" : "text-text-dim group-hover:text-text"
                  }`}
                />
                <span
                  className={`pointer-events-none absolute top-full left-1/2 mt-1 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-[0.08em] opacity-0 transition-opacity duration-150 group-hover:opacity-100 ${
                    isActive ? "text-accent" : "text-text-dim"
                  }`}
                >
                  {link.label}
                </span>
              </a>
            );
          })}
          <span aria-hidden className="mx-2 h-3 w-px bg-border-strong" />
          <a
            href="#now"
            className={`shrink-0 whitespace-nowrap px-2 transition-colors duration-150 ${
              active === "now" ? "text-accent" : "text-text-dim hover:text-text"
            }`}
          >
            Now
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.1em]">
          <ThemeToggle />
          <button
            type="button"
            onClick={onOpenPalette}
            className="border border-border px-2.5 py-1.5 text-text-dim transition-colors duration-150 hover:border-border-strong hover:text-text"
            aria-label="Open command palette"
          >
            ⌘K
          </button>
          <a
            href="/resume.pdf"
            download
            className="hidden border border-border px-2.5 py-1.5 text-text-dim transition-colors duration-150 hover:border-border-strong hover:text-text sm:inline-block"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
