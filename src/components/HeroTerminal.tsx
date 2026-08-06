"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

type Row = { type: "prompt" | "out"; text: string };

const SCRIPT: Row[] = [
  { type: "prompt", text: "whoami" },
  { type: "out", text: "mahmudul_hasan" },
  { type: "prompt", text: "cat role.txt" },
  { type: "out", text: "software engineer @ selise" },
  { type: "prompt", text: "echo $STATUS" },
  { type: "out", text: "building" },
];

export default function HeroTerminal() {
  const reduce = useReducedMotion();
  const [animatedRows, setAnimatedRows] = useState<Row[]>([]);
  const [typingText, setTypingText] = useState("");
  const [animatedDone, setAnimatedDone] = useState(false);

  const rendered = reduce ? SCRIPT : animatedRows;
  const done = reduce ? true : animatedDone;

  useEffect(() => {
    if (reduce) return;
    let cancelled = false;

    async function play() {
      for (const row of SCRIPT) {
        if (row.type === "prompt") {
          for (let c = 1; c <= row.text.length; c++) {
            if (cancelled) return;
            setTypingText(row.text.slice(0, c));
            await new Promise((r) => setTimeout(r, 26 + Math.random() * 24));
          }
          if (cancelled) return;
          setAnimatedRows((prev) => [...prev, row]);
          setTypingText("");
        } else {
          await new Promise((r) => setTimeout(r, 120));
          if (cancelled) return;
          setAnimatedRows((prev) => [...prev, row]);
        }
        if (cancelled) return;
        await new Promise((r) => setTimeout(r, 220));
      }
      if (!cancelled) setAnimatedDone(true);
    }

    play();
    return () => {
      cancelled = true;
    };
  }, [reduce]);

  return (
    <div
      aria-hidden
      className="clip-notch pointer-events-none w-72 border border-border-strong bg-bg-elevated lg:w-80"
    >
      <div className="flex items-center gap-2 border-b border-border px-3 py-2.5 font-mono text-[10px] uppercase tracking-[0.12em] text-text-dim">
        <span className="h-1.5 w-1.5 bg-border-strong" />
        whoami.sh
      </div>
      <div className="px-4 py-4 font-mono text-[13px] leading-[1.9] text-text-dim">
        {rendered.map((row, i) => (
          <div key={i}>
            {row.type === "prompt" ? (
              <span className="text-text-dim">$ {row.text}</span>
            ) : (
              <span>{row.text}</span>
            )}
          </div>
        ))}
        {typingText && (
          <div>
            <span className="text-text-dim">$ {typingText}</span>
          </div>
        )}
        {done && (
          <div>
            <span className="text-text-dim">$</span>{" "}
            <span className="animate-blink inline-block h-[14px] w-[7px] translate-y-[2px] bg-accent" />
          </div>
        )}
      </div>
    </div>
  );
}
