"use client";

import { useEffect, useState } from "react";
import { Command } from "cmdk";
import {
  ArrowRight,
  Check,
  DownloadSimple,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
  MagnifyingGlass,
} from "@phosphor-icons/react";
import { chapters } from "@/lib/chapters";
import { chapterIcons } from "@/lib/chapter-icons";

const EMAIL = "mh.mahmud006@gmail.com";
const GITHUB_PRIMARY = "https://github.com/mahmudul006";
const GITHUB_SECONDARY = "https://github.com/mahmud006";
const LINKEDIN_URL = "https://www.linkedin.com/in/mahmudul-hasan-ba6654164/";

const techTagsMap: Record<string, string[]> = {
  origin: ["C++", "Algorithms", "Codeforces", "LeetCode", "Data Structures"],
  internship: ["Angular", "WebdriverIO", "TypeScript", "E2E Testing", "RxJS"],
  rag: ["FastAPI", "LangChain", "Qdrant", "Azure OpenAI", "AWS Bedrock", "WebSockets"],
  railway: ["React", "Redux", "TanStack Query", "React Hook Form", "CanvasJS", "PDF Export"],
  recycling: ["React", "Material UI", "Zustand", "TanStack Query", "React Hook Form"],
  healthcare: ["Angular", "React", "TypeScript", "RxJS", "Angular Material"],
};

export default function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [copied, setCopied] = useState(false);
  const [activeId, setActiveId] = useState<string>("origin");

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, onOpenChange]);

  function jump(id: string) {
    onOpenChange(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  }

  async function copyEmail() {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  }

  const selectedChapter = chapters.find((c) => c.id === activeId);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command palette"
      overlayClassName="fixed inset-0 z-[100] bg-bg/85 backdrop-blur-md"
      contentClassName="clip-notch fixed left-1/2 top-20 z-[101] w-[94vw] max-w-4xl -translate-x-1/2 border border-border-strong bg-bg-elevated shadow-2xl overflow-hidden"
      shouldFilter
      loop
    >
      <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
        <MagnifyingGlass size={18} weight="bold" className="shrink-0 text-text-dim" />
        <Command.Input
          autoFocus
          placeholder="Type to search chapters, technologies, or actions..."
          className="w-full bg-transparent font-mono text-sm text-text placeholder:text-text-dim focus:outline-none"
        />
        <span className="hidden font-mono text-xs text-accent uppercase tracking-widest sm:inline-block">⌘K</span>
      </div>

      <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-border">
        {/* Left Search List */}
        <Command.List className="w-full md:w-7/12 max-h-[55vh] overflow-y-auto p-2">
          <Command.Empty className="px-3 py-10 text-center font-mono text-xs uppercase tracking-[0.15em] text-text-dim">
            {"// No matching results found"}
          </Command.Empty>

          <Command.Group
            heading="// JOURNEY INDEX"
            className="px-2 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:text-accent"
          >
            <Command.Item
              value="start hero origin 00 intro mahmudul"
              onSelect={() => jump("hero")}
              onFocus={() => setActiveId("hero")}
              onMouseEnter={() => setActiveId("hero")}
              className="group flex cursor-pointer items-center justify-between gap-3 px-3 py-2.5 font-mono text-xs text-text transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
            >
              <span className="flex items-center gap-3">
                <span className="font-bold text-accent group-data-[selected=true]:text-accent-ink">00</span>
                START / HERO
              </span>
              <ArrowRight size={14} weight="bold" />
            </Command.Item>

            {chapters.map((c) => {
              const ChapterIcon = chapterIcons[c.id];
              const tags = techTagsMap[c.id]?.join(" ") || "";
              const searchValue = `${c.index} ${c.title} ${c.org} ${c.context} ${c.engineered} ${tags}`.toLowerCase();

              return (
                <Command.Item
                  key={c.id}
                  value={searchValue}
                  onSelect={() => jump(c.id)}
                  onFocus={() => setActiveId(c.id)}
                  onMouseEnter={() => setActiveId(c.id)}
                  className="group flex cursor-pointer items-center justify-between gap-3 px-3 py-2.5 font-mono text-xs text-text transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
                >
                  <span className="flex items-center gap-3 truncate">
                    <span className="font-bold text-accent group-data-[selected=true]:text-accent-ink shrink-0">
                      {c.index}
                    </span>
                    <ChapterIcon size={14} weight="bold" className="shrink-0" />
                    <span className="truncate uppercase font-medium">{c.title}</span>
                  </span>
                  <ArrowRight size={14} weight="bold" />
                </Command.Item>
              );
            })}

            <Command.Item
              value="now contact 06 closing current role selise"
              onSelect={() => jump("now")}
              onFocus={() => setActiveId("now")}
              onMouseEnter={() => setActiveId("now")}
              className="group flex cursor-pointer items-center justify-between gap-3 px-3 py-2.5 font-mono text-xs text-text transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
            >
              <span className="flex items-center gap-3">
                <span className="font-bold text-accent group-data-[selected=true]:text-accent-ink">06</span>
                NOW / CONTACT
              </span>
              <ArrowRight size={14} weight="bold" />
            </Command.Item>
          </Command.Group>

          <Command.Separator className="my-2 h-px bg-border" />

          <Command.Group
            heading="// ACTIONS & CONTACT"
            className="px-2 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim [&_[cmdk-group-heading]]:mb-2 [&_[cmdk-group-heading]]:text-accent"
          >
            <Command.Item
              value="copy email contact mail mh.mahmud006@gmail.com"
              onSelect={copyEmail}
              onFocus={() => setActiveId("action-email")}
              onMouseEnter={() => setActiveId("action-email")}
              className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-mono text-xs text-text transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
            >
              {copied ? <Check size={14} weight="bold" /> : <EnvelopeSimple size={14} weight="bold" />}
              {copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}
            </Command.Item>

            <Command.Item
              value="github profile code repositories mahmudul006"
              onSelect={() => window.open(GITHUB_PRIMARY, "_blank")}
              onFocus={() => setActiveId("action-github-primary")}
              onMouseEnter={() => setActiveId("action-github-primary")}
              className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-mono text-xs text-text transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
            >
              <GithubLogo size={14} weight="bold" />
              OPEN GITHUB (mahmudul006)
            </Command.Item>

            <Command.Item
              value="github profile code repositories mahmud006"
              onSelect={() => window.open(GITHUB_SECONDARY, "_blank")}
              onFocus={() => setActiveId("action-github-secondary")}
              onMouseEnter={() => setActiveId("action-github-secondary")}
              className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-mono text-xs text-text transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
            >
              <GithubLogo size={14} weight="bold" />
              OPEN GITHUB (mahmud006)
            </Command.Item>

            <Command.Item
              value="linkedin profile social career"
              onSelect={() => window.open(LINKEDIN_URL, "_blank")}
              onFocus={() => setActiveId("action-linkedin")}
              onMouseEnter={() => setActiveId("action-linkedin")}
              className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-mono text-xs text-text transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
            >
              <LinkedinLogo size={14} weight="bold" />
              OPEN LINKEDIN
            </Command.Item>

            <Command.Item
              value="download resume cv pdf"
              onSelect={() => {
                onOpenChange(false);
                const link = document.createElement("a");
                link.href = "/resume.pdf";
                link.download = "";
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              }}
              onFocus={() => setActiveId("action-resume")}
              onMouseEnter={() => setActiveId("action-resume")}
              className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-mono text-xs text-text transition-colors data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
            >
              <DownloadSimple size={14} weight="bold" />
              DOWNLOAD RESUME (PDF)
            </Command.Item>
          </Command.Group>
        </Command.List>

        {/* Right Detail Preview Inspector Pane (Desktop) */}
        <div className="hidden md:flex md:w-5/12 flex-col justify-between p-5 bg-bg/50 max-h-[55vh] overflow-y-auto">
          {selectedChapter ? (
            <div className="space-y-4">
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  CHAPTER {selectedChapter.index}
                </div>
                <h3 className="mt-1 font-display text-lg font-semibold uppercase leading-tight text-text">
                  {selectedChapter.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] text-text-dim">
                  {selectedChapter.org} • {selectedChapter.dateRange}
                </p>
              </div>

              {/* Tech Stack Pills */}
              {techTagsMap[selectedChapter.id] && (
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {techTagsMap[selectedChapter.id].map((tag) => (
                    <span
                      key={tag}
                      className="border border-border bg-bg-elevated px-2 py-0.5 font-mono text-[10px] text-text-dim"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Context Summary */}
              <div className="border-t border-border/60 pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-dim">
                  Context & Problem
                </div>
                <p className="mt-1 font-mono text-xs leading-relaxed text-text-dim">
                  {selectedChapter.context}
                </p>
              </div>

              {/* Engineered Summary */}
              <div className="border-t border-border/60 pt-3">
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-text-dim">
                  Engineered Solution
                </div>
                <p className="mt-1 font-mono text-xs leading-relaxed text-text-dim">
                  {selectedChapter.engineered}
                </p>
              </div>
            </div>
          ) : activeId === "action-email" ? (
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                ACTION / CONTACT
              </div>
              <h3 className="font-display text-lg font-semibold uppercase text-text">Copy Email</h3>
              <p className="font-mono text-xs text-text-dim">{EMAIL}</p>
              <p className="font-mono text-xs text-text-dim leading-relaxed">
                Click to copy email address directly to your clipboard.
              </p>
            </div>
          ) : activeId === "action-resume" ? (
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                ACTION / DOCUMENT
              </div>
              <h3 className="font-display text-lg font-semibold uppercase text-text">Download Resume</h3>
              <p className="font-mono text-xs text-text-dim leading-relaxed">
                Get Mahmudul Hasan&apos;s latest software engineering CV in PDF format.
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                NAVIGATION
              </div>
              <h3 className="font-display text-lg font-semibold uppercase text-text">Explore Portfolio</h3>
              <p className="font-mono text-xs text-text-dim leading-relaxed">
                Select a chapter from the list to preview its technical architecture and stack.
              </p>
            </div>
          )}

          {/* Action CTA Button */}
          {selectedChapter && (
            <button
              type="button"
              onClick={() => jump(selectedChapter.id)}
              className="mt-4 flex items-center justify-between w-full border border-border px-3 py-2 font-mono text-xs text-text hover:border-accent hover:text-accent transition-colors"
            >
              <span>JUMP TO CHAPTER {selectedChapter.index}</span>
              <ArrowRight size={14} weight="bold" />
            </button>
          )}
        </div>
      </div>
    </Command.Dialog>
  );
}
