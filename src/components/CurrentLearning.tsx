import { motion } from "framer-motion";
import { BookOpen, Sparkles, Terminal, Code2, Cpu, CheckCircle } from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const statusBadgeStyles: Record<string, { bg: string; text: string; border: string }> = {
  "CURRENT FOCUS": {
    bg: "bg-[var(--color-accent-blue)]/12",
    text: "text-[var(--color-accent-blue)]",
    border: "border-[var(--color-accent-blue)]/30",
  },
  PRACTICING: {
    bg: "bg-[var(--color-accent-green)]/12",
    text: "text-[var(--color-accent-green)]",
    border: "border-[var(--color-accent-green)]/30",
  },
  "BUILDING FOUNDATIONS": {
    bg: "bg-[var(--color-accent-purple)]/12",
    text: "text-[var(--color-accent-purple)]",
    border: "border-[var(--color-accent-purple)]/30",
  },
};

export default function CurrentLearning() {
  return (
    <SectionWrapper id="learning">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Currently Learning & Training"
          subtitle="CDAC Professional Training Dashboard — Core Computer Science & Systems Engineering"
        />

        {/* Notice banner clarifying training status */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[var(--color-accent-blue)]/10 via-[var(--color-accent-purple)]/10 to-transparent border border-[var(--color-accent-blue)]/20 flex items-start sm:items-center gap-3.5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-blue)]/20 text-[var(--color-accent-blue)]">
            <BookOpen size={20} />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">
              CDAC Professional Training in Progress
            </p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
              These competencies represent my current active coursework and daily problem-solving regimen. I am strengthening foundational rigor in systems languages and algorithmic thinking.
            </p>
          </div>
        </motion.div>

        {/* Learning Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {profile.currentLearning.map((item, i) => {
            const badge = statusBadgeStyles[item.statusLabel] ?? statusBadgeStyles["CURRENT FOCUS"];

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)] p-5 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Status header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider border ${badge.bg} ${badge.text} ${badge.border}`}
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-current animate-pulse" />
                      {item.statusLabel}
                    </span>
                    <Terminal size={14} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-blue)] transition-colors" />
                  </div>

                  <h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-blue)] transition-colors mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                {/* Sub-topics / tags */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[var(--color-border-subtle)]">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[var(--color-bg-elevated)] text-[10px] font-medium text-[var(--color-text-muted)] group-hover:text-[var(--color-text-secondary)] transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
