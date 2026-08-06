"use client";

import { motion, useReducedMotion } from "motion/react";
import type { Chapter as ChapterData } from "@/lib/chapters";

const EASE = [0.16, 1, 0.3, 1] as const;

function Field({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
        <span aria-hidden className="h-3 w-[2px] bg-accent" />
        {label}
      </div>
      <p className="mt-2 max-w-[60ch] leading-relaxed text-text-dim">{text}</p>
    </div>
  );
}

function Meta({ chapter }: { chapter: ChapterData }) {
  return (
    <div className="font-mono text-xs uppercase tracking-[0.14em] text-text-dim">
      <span className="text-accent">{chapter.index}</span>
      <span className="mx-2 text-border-strong">/</span>
      {chapter.dateRange}
      <span className="mx-2 text-border-strong">/</span>
      {chapter.org}
    </div>
  );
}

function Fields({ chapter }: { chapter: ChapterData }) {
  return (
    <div className="mt-8 space-y-6">
      <Field label="Problem" text={chapter.problem} />
      <Field label="Challenge" text={chapter.challenge} />
      <Field label="Built" text={chapter.built} />
      <Field label="Lesson" text={chapter.lesson} />
    </div>
  );
}

export default function Chapter({
  chapter,
  next,
}: {
  chapter: ChapterData;
  next?: { id: string; label: string; index: string };
}) {
  const reduce = useReducedMotion();
  const reveal = {
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.5, ease: EASE },
  };

  return (
    <section
      id={chapter.id}
      className="relative border-b border-border py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        {chapter.layout === "split" ? (
          <div
            className={`flex flex-col gap-10 md:gap-16 ${
              chapter.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
            }`}
          >
            <motion.div {...reveal} className="md:w-3/5">
              <Meta chapter={chapter} />
              <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-none tracking-tight text-text md:text-4xl lg:text-5xl">
                {chapter.title}
              </h2>
              <Fields chapter={chapter} />
            </motion.div>

            <motion.div
              {...reveal}
              transition={{ ...reveal.transition, delay: reduce ? 0 : 0.1 }}
              className="md:w-2/5"
            >
              <div className="clip-notch flex aspect-[4/3] items-center justify-center border border-dashed border-border-strong bg-bg-elevated/40">
                <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-dim">
                  Artifact pending
                </span>
              </div>
            </motion.div>
          </div>
        ) : (
          <div className="relative">
            <span
              aria-hidden
              className="pointer-events-none absolute -right-2 -top-10 hidden select-none font-mono text-[11rem] font-bold leading-none text-text-ghost md:block lg:text-[15rem]"
            >
              {chapter.index}
            </span>
            <motion.div {...reveal} className="relative max-w-3xl">
              <Meta chapter={chapter} />
              <h2 className="mt-4 font-display text-3xl font-semibold uppercase leading-none tracking-tight text-text md:text-4xl lg:text-5xl">
                {chapter.title}
              </h2>
              <Fields chapter={chapter} />
            </motion.div>
          </div>
        )}

        {next && (
          <a
            href={`#${next.id}`}
            className="mt-16 flex items-center justify-end font-mono text-xs uppercase tracking-[0.1em] text-text-dim transition-colors duration-150 hover:text-accent"
          >
            Ch.{next.index} {next.label} ▸
          </a>
        )}
      </div>
    </section>
  );
}
