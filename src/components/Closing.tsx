"use client";

import { motion, useReducedMotion } from "motion/react";
import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

const EASE = [0.16, 1, 0.3, 1] as const;
const EMAIL = "mh.mahmud006@gmail.com";
const GITHUB_URL = "https://github.com/mahmudul006";
const LINKEDIN_URL = "https://www.linkedin.com/in/mahmudul-hasan-ba6654164/";

const links = [
  { href: `mailto:${EMAIL}`, label: EMAIL, Icon: EnvelopeSimple },
  { href: GITHUB_URL, label: "GitHub", Icon: GithubLogo },
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: LinkedinLogo },
];

export default function Closing() {
  const reduce = useReducedMotion();

  return (
    <section id="now" className="relative flex min-h-[100dvh] items-center py-24">
      <div className="mx-auto w-full max-w-[1400px] px-4 md:px-8">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5, ease: EASE }}
          className="max-w-2xl"
        >
          <p className="font-mono text-xs uppercase tracking-[0.18em] text-text-dim">Now</p>

          <h2 className="mt-6 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-text sm:text-5xl lg:text-6xl">
            Still building.
          </h2>

          <p className="mt-6 max-w-[52ch] text-base leading-relaxed text-text-dim md:text-lg">
            Still at SELISE, migrating enterprise Angular systems to React and exploring
            AI-assisted engineering workflows. Always glad to talk shop.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {links.map(({ href, label, Icon }) => (
              <a
                key={href}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noreferrer" : undefined}
                className="clip-notch-sm flex items-center gap-2 border border-border px-4 py-2.5 font-mono text-sm text-text transition-colors duration-150 hover:border-accent hover:text-accent"
              >
                <Icon size={16} weight="bold" />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <p className="mt-24 font-mono text-[11px] uppercase tracking-[0.18em] text-text-dim">
          Mahmudul Hasan / Dhaka, Bangladesh
        </p>
      </div>
    </section>
  );
}
