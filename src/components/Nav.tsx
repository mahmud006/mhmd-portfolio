"use client";

import { useEffect, useState } from "react";
import { chapters } from "@/lib/chapters";
import { chapterIcons } from "@/lib/chapter-icons";
import ThemeToggle from "@/components/ThemeToggle";

type PopoverMeta = {
  title: string;
  org: string;
  date: string;
  stack: string[];
  summary: string;
};

const navPopovers: Record<string, PopoverMeta> = {
  origin: {
    title: "Origin & Computer Science",
    org: "IIUC",
    date: "2018 - 2022",
    stack: ["C++", "Algorithms", "Data Structures"],
    summary: "Foundational CSE degree and 700+ solved algorithmic problems.",
  },
  internship: {
    title: "First Internship",
    org: "SELISE",
    date: "Mar 2023 - Aug 2023",
    stack: ["Angular", "WebdriverIO", "React"],
    summary: "Shipping Angular UI features & automating React app with WebdriverIO.",
  },
  rag: {
    title: "RAG Chat Application",
    org: "SELISE",
    date: "Sep 2023 - Nov 2024",
    stack: ["FastAPI", "LangChain", "Qdrant", "Bedrock"],
    summary: "Vector search PDF Q&A engine streaming over WebSockets.",
  },
  railway: {
    title: "Railway Inspection Solution",
    org: "SELISE",
    date: "2024 - Present",
    stack: ["React", "Redux", "Hook Form", "CanvasJS"],
    summary: "Form-intensive inspection tool with live charts & PDF reports.",
  },
  recycling: {
    title: "Recycling Management Platform",
    org: "SELISE",
    date: "2024 - Present",
    stack: ["React", "MUI", "Zustand", "TanStack"],
    summary: "Multi-role administrative platform with fine-grained RBAC.",
  },
  healthcare: {
    title: "Healthcare Quality & Risk Platform",
    org: "SELISE",
    date: "Dec 2024 - Present",
    stack: ["Angular", "React", "TypeScript", "RxJS"],
    summary: "Enterprise quality & risk operations platform migrating to React.",
  },
};

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

export default function Nav() {
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
            const meta = navPopovers[link.id];
            const ChapterIcon = chapterIcons[link.id];

            return (
              <div key={link.id} className="group relative flex h-9 shrink-0 items-center">
                <a
                  href={`#${link.id}`}
                  aria-label={meta?.title ?? link.label}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 transition-colors duration-150 ${
                    isActive ? "text-accent" : "text-text-dim hover:text-text"
                  }`}
                >
                  {link.index === "00" ? (
                    <span>{link.label}</span>
                  ) : (
                    <ChapterIcon size={15} weight="bold" />
                  )}
                </a>

                {/* Rich Hover Popover Card */}
                {meta && (
                  <div className="pointer-events-none absolute top-full left-1/2 mt-2 w-72 -translate-x-1/2 opacity-0 transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100 z-50">
                    <div className="clip-notch border border-border-strong bg-bg-elevated p-3.5 shadow-2xl">
                      <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-accent font-bold">
                        <span>CH.{link.index}</span>
                        <span className="text-text-dim font-normal">{meta.org} • {meta.date}</span>
                      </div>
                      <div className="mt-1.5 font-display text-xs font-semibold uppercase text-text leading-tight">
                        {meta.title}
                      </div>
                      <p className="mt-1.5 font-mono text-[11px] leading-relaxed text-text-dim normal-case tracking-normal">
                        {meta.summary}
                      </p>
                      <div className="mt-2.5 flex flex-wrap gap-1 border-t border-border/60 pt-2">
                        {meta.stack.map((s) => (
                          <span
                            key={s}
                            className="border border-border bg-bg px-1.5 py-0.5 font-mono text-[9px] text-text-dim uppercase tracking-wide"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
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
          <a
            href="/resume.pdf"
            download
            className="border border-border px-2.5 py-1.5 text-text-dim transition-colors duration-150 hover:border-border-strong hover:text-text"
          >
            CV
          </a>
        </div>
      </div>
    </header>
  );
}
