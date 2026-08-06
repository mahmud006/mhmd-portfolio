"use client";

import { motion, useReducedMotion } from "motion/react";
import { chapters } from "@/lib/chapters";
import HeroTerminal from "@/components/HeroTerminal";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();
  const first = chapters[0];

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center overflow-hidden border-b border-border pt-16"
    >
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 gap-10 px-4 md:grid-cols-5 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="md:col-span-3"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-dim">
            Mahmudul Hasan - Software Engineer
          </p>

          <h1 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Follow my
            <br />
            engineering journey.
          </h1>

          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-text-dim md:text-lg">
            Every chapter below is a real project. The problem, the decisions, and what I
            learned along the way.
          </p>

          <a
            href={`#${first.id}`}
            className="clip-notch-sm mt-9 inline-flex items-center gap-2 border border-accent px-5 py-3 font-mono text-sm uppercase tracking-[0.1em] text-text transition-colors duration-150 hover:bg-accent hover:text-accent-ink active:translate-y-[1px]"
          >
            Start - Origin, 2018
          </a>
        </motion.div>

        <div className="hidden md:col-span-2 md:flex md:items-center md:justify-end">
          <HeroTerminal />
        </div>
      </div>

      <a
        href={`#${first.id}`}
        className="absolute bottom-8 right-4 font-mono text-xs uppercase tracking-[0.1em] text-text-dim transition-colors duration-150 hover:text-accent md:right-8"
      >
        Ch.{first.index} {first.title} ▸
      </a>
    </section>
  );
}
