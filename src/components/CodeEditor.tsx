import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { indent: 0, tokens: [{ text: "const ", color: "keyword" }, { text: "engineer", color: "var" }, { text: " = {", color: "bracket" }] },
  { indent: 1, tokens: [{ text: "name", color: "prop" }, { text: ": ", color: "bracket" }, { text: '"Rajratna Salve"', color: "string" }, { text: ",", color: "bracket" }] },
  { indent: 1, tokens: [{ text: "degree", color: "prop" }, { text: ": ", color: "bracket" }, { text: '"B.Tech in AI & Data Science"', color: "string" }, { text: ",", color: "bracket" }] },
  { indent: 1, tokens: [{ text: "cdac", color: "prop" }, { text: ": ", color: "bracket" }, { text: '"Currently Pursuing"', color: "accent" }, { text: ",", color: "bracket" }] },
  { indent: 1, tokens: [{ text: "skills", color: "prop" }, { text: ": [", color: "bracket" }] },
  { indent: 2, tokens: [{ text: '"Python"', color: "string" }, { text: ", ", color: "bracket" }, { text: '"SQL"', color: "string" }, { text: ", ", color: "bracket" }, { text: '"TensorFlow"', color: "string" }, { text: ",", color: "bracket" }] },
  { indent: 2, tokens: [{ text: '"C++"', color: "string" }, { text: ", ", color: "bracket" }, { text: '"Java"', color: "string" }, { text: ", ", color: "bracket" }, { text: '"DSA & OOP"', color: "string" }, { text: ",", color: "bracket" }] },
  { indent: 2, tokens: [{ text: '"GenAI (RAG)"', color: "string" }, { text: ", ", color: "bracket" }, { text: '"Computer Vision"', color: "string" }] },
  { indent: 1, tokens: [{ text: "],", color: "bracket" }] },
  { indent: 1, tokens: [{ text: "internship", color: "prop" }, { text: ": ", color: "bracket" }, { text: '"Metalman Auto Pvt. Ltd."', color: "string" }, { text: ",", color: "bracket" }] },
  { indent: 1, tokens: [{ text: "certifications", color: "prop" }, { text: ": ", color: "bracket" }, { text: '"Azure AI & Oracle Cloud"', color: "string" }, { text: ",", color: "bracket" }] },
  { indent: 1, tokens: [{ text: "location", color: "prop" }, { text: ": ", color: "bracket" }, { text: '"Pune, India"', color: "string" }] },
  { indent: 0, tokens: [{ text: "};", color: "bracket" }] },
  { indent: 0, tokens: [] },
  { indent: 0, tokens: [{ text: "// Applied AI, Data Science & Industrial Automation", color: "comment" }] },
];

const colorMap: Record<string, string> = {
  keyword: "text-[var(--color-accent-purple)]",
  var: "text-[var(--color-accent-cyan)]",
  prop: "text-[var(--color-accent-blue)]",
  string: "text-[var(--color-accent-green)]",
  bracket: "text-[var(--color-text-secondary)]",
  comment: "text-[var(--color-text-muted)] italic",
  accent: "text-[var(--color-accent-orange)]",
};

export default function CodeEditor() {
  const [visibleLines, setVisibleLines] = useState(0);

  useEffect(() => {
    if (visibleLines >= codeLines.length) return;
    const timer = setTimeout(() => setVisibleLines((v) => v + 1), 90);
    return () => clearTimeout(timer);
  }, [visibleLines]);

  return (
    <div className="rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] shadow-2xl">
      {/* Title bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[var(--color-bg-card)] border-b border-[var(--color-border-subtle)]">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57] hover:brightness-90 transition-all cursor-default" title="Close" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e] hover:brightness-90 transition-all cursor-default" title="Minimize" />
          <span className="h-3 w-3 rounded-full bg-[#28c840] hover:brightness-90 transition-all cursor-default" title="Maximize" />
        </div>

        {/* Tab */}
        <div className="flex items-center">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)]">
            <span className="text-[var(--color-accent-cyan)] text-[10px]">TS</span>
            <span className="text-xs text-[var(--color-text-muted)] font-mono">engineer.ts</span>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[var(--color-text-muted)] font-mono opacity-60">UTF-8</span>
        </div>
      </div>

      {/* Code area */}
      <div className="p-4 sm:p-5 font-mono text-[11px] sm:text-xs leading-[1.75] min-h-[310px] relative">
        {/* Line gutter */}
        {codeLines.map((line, i) => {
          if (i >= visibleLines) return null;

          const indent = "  ".repeat(line.indent);

          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.15 }}
              className="flex group hover:bg-[var(--color-accent-blue)]/4 rounded px-1 -mx-1"
            >
              <span className="text-[var(--color-text-muted)] select-none w-5 sm:w-7 text-right mr-4 shrink-0 opacity-40 group-hover:opacity-60 transition-opacity">
                {i + 1}
              </span>

              <span>
                <span className="text-[var(--color-text-muted)] opacity-30">{indent}</span>
                {line.tokens.map((token, j) => (
                  <span key={j} className={colorMap[token.color] ?? "text-[var(--color-text-secondary)]"}>
                    {token.text}
                  </span>
                ))}
              </span>
            </motion.div>
          );
        })}

        {/* Cursor blink */}
        {visibleLines >= codeLines.length && (
          <div className="flex mt-0.5 px-1">
            <span className="text-[var(--color-text-muted)] select-none w-5 sm:w-7 text-right mr-4 shrink-0 opacity-40">
              {codeLines.length + 1}
            </span>
            <span className="inline-block w-[7px] h-[14px] bg-[var(--color-accent-blue)] animate-typing rounded-[2px] opacity-90" />
          </div>
        )}
      </div>

      {/* Status bar */}
      <div className="flex items-center justify-between px-4 py-1.5 bg-[var(--color-accent-blue)] text-white text-[9px] font-mono">
        <div className="flex items-center gap-3 opacity-90">
          <span>TypeScript</span>
          <span>•</span>
          <span>UTF-8</span>
        </div>
        <div className="flex items-center gap-3 opacity-90">
          <span>Ln {Math.min(visibleLines, codeLines.length)}, Col 1</span>
          <span>•</span>
          <span>Spaces: 2</span>
        </div>
      </div>
    </div>
  );
}
