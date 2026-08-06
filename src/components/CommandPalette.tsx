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
} from "@phosphor-icons/react";
import { chapters } from "@/lib/chapters";

const EMAIL = "mh.mahmud006@gmail.com";
const GITHUB_URL = "https://github.com/mahmudul006";
const LINKEDIN_URL = "https://www.linkedin.com/in/mahmudul-hasan-ba6654164/";

export default function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [copied, setCopied] = useState(false);

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

  return (
    <Command.Dialog
      open={open}
      onOpenChange={onOpenChange}
      label="Command palette"
      overlayClassName="fixed inset-0 z-[100] bg-bg/80 backdrop-blur-sm"
      contentClassName="fixed left-1/2 top-28 z-[101] w-[92vw] max-w-lg -translate-x-1/2 border border-border-strong bg-bg-elevated shadow-none"
      shouldFilter
      loop
    >
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="font-mono text-xs text-text-dim">⌘K</span>
        <Command.Input
          autoFocus
          placeholder="Jump to a chapter or reach out..."
          className="w-full bg-transparent font-mono text-sm text-text placeholder:text-text-dim focus:outline-none"
        />
      </div>

      <Command.List className="max-h-[60vh] overflow-y-auto p-2">
        <Command.Empty className="px-3 py-6 text-center font-mono text-xs uppercase tracking-[0.1em] text-text-dim">
          No matches
        </Command.Empty>

        <Command.Group
          heading="Chapters"
          className="px-2 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim [&_[cmdk-group-heading]]:mb-2"
        >
          <Command.Item
            onSelect={() => jump("hero")}
            className="flex cursor-pointer items-center justify-between gap-3 px-3 py-2.5 font-mono text-sm text-text data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
          >
            Start
            <ArrowRight size={14} weight="bold" />
          </Command.Item>
          {chapters.map((c) => (
            <Command.Item
              key={c.id}
              onSelect={() => jump(c.id)}
              className="flex cursor-pointer items-center justify-between gap-3 px-3 py-2.5 font-mono text-sm text-text data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
            >
              <span>
                {c.index} / {c.title}
              </span>
              <ArrowRight size={14} weight="bold" />
            </Command.Item>
          ))}
          <Command.Item
            onSelect={() => jump("now")}
            className="flex cursor-pointer items-center justify-between gap-3 px-3 py-2.5 font-mono text-sm text-text data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
          >
            Now
            <ArrowRight size={14} weight="bold" />
          </Command.Item>
        </Command.Group>

        <Command.Separator className="my-2 h-px bg-border" />

        <Command.Group
          heading="Contact"
          className="px-2 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim [&_[cmdk-group-heading]]:mb-2"
        >
          <Command.Item
            onSelect={copyEmail}
            className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-mono text-sm text-text data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
          >
            {copied ? <Check size={14} weight="bold" /> : <EnvelopeSimple size={14} weight="bold" />}
            {copied ? "Copied" : "Copy email"}
          </Command.Item>
          <Command.Item
            onSelect={() => window.open(GITHUB_URL, "_blank")}
            className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-mono text-sm text-text data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
          >
            <GithubLogo size={14} weight="bold" />
            Open GitHub
          </Command.Item>
          <Command.Item
            onSelect={() => window.open(LINKEDIN_URL, "_blank")}
            className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-mono text-sm text-text data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
          >
            <LinkedinLogo size={14} weight="bold" />
            Open LinkedIn
          </Command.Item>
          <Command.Item
            onSelect={() => {
              onOpenChange(false);
              window.open("/resume.pdf", "_blank");
            }}
            className="flex cursor-pointer items-center gap-3 px-3 py-2.5 font-mono text-sm text-text data-[selected=true]:bg-accent data-[selected=true]:text-accent-ink"
          >
            <DownloadSimple size={14} weight="bold" />
            Download resume
          </Command.Item>
        </Command.Group>
      </Command.List>
    </Command.Dialog>
  );
}
