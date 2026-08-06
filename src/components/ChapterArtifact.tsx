import type { ChapterArtifact as ChapterArtifactData } from "@/lib/chapters";

export default function ChapterArtifact({
  artifact,
  className = "",
}: {
  artifact: ChapterArtifactData;
  className?: string;
}) {
  return (
    <div className={`clip-notch border border-border-strong bg-bg-elevated ${className}`}>
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 font-mono text-[10px] uppercase tracking-[0.12em] text-text-dim">
        <span className="h-1.5 w-1.5 bg-border-strong" />
        {artifact.title}
      </div>
      <div className="px-4 py-4 font-mono text-[13px] leading-[1.9]">
        {artifact.lines.map((line, i) => {
          if (line.text === "") {
            return <div key={i}>&nbsp;</div>;
          }
          switch (line.kind) {
            case "prompt":
              return (
                <div key={i} className="text-text-dim">
                  $ {line.text}
                </div>
              );
            case "success":
              return (
                <div key={i} className="text-success">
                  {line.text}
                </div>
              );
            case "out":
              return (
                <div key={i} className="text-text-dim">
                  {line.text}
                </div>
              );
            case "code":
              return (
                <div key={i} className="text-text-dim">
                  {line.text}
                </div>
              );
            case "rm":
              return (
                <div key={i} className="text-text-dim/60 line-through decoration-border-strong">
                  - {line.text}
                </div>
              );
            case "add":
              return (
                <div key={i} className="border-l-2 border-accent pl-3 text-text">
                  {line.text}
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </div>
  );
}
