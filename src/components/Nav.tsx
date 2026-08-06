"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/lib/chapters";

const shortLabels: Record<string, string> = {
  origin: "Origin",
  internship: "Intern",
  rag: "RAG",
  railway: "Railway",
  recycling: "Recycling",
  healthcare: "Healthcare",
};

const navLinks = [
  ...chapters.map((c) => ({ id: c.id, label: shortLabels[c.id] ?? c.title })),
  { id: "now", label: "Now" },
];

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

        <nav className="hidden min-w-0 items-center gap-5 overflow-x-auto font-mono text-xs uppercase tracking-[0.1em] md:flex">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`shrink-0 whitespace-nowrap transition-colors duration-150 ${
                active === link.id ? "text-accent" : "text-text-dim hover:text-text"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.1em]">
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
