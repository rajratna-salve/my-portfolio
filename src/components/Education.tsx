import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Education"
          subtitle="Academic foundation and learning journey"
        />

        <div className="max-w-3xl mx-auto space-y-5">
          {profile.education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`rounded-2xl border p-5 sm:p-6 transition-all duration-300 ${
                edu.isPrimary
                  ? "bg-[var(--color-bg-card)] border-[var(--color-border-accent)] glow-blue"
                  : "bg-[var(--color-bg-card)] border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)]"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${
                    edu.isPrimary
                      ? "bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white"
                      : "bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)]"
                  }`}
                >
                  <GraduationCap size={22} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3
                    className={`font-bold ${
                      edu.isPrimary ? "text-lg text-[var(--color-text-primary)]" : "text-base text-[var(--color-text-primary)]"
                    }`}
                  >
                    {edu.degree}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)] mt-0.5">{edu.institution}</p>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="text-xs text-[var(--color-text-muted)]">{edu.duration}</span>
                    {edu.grade && (
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--color-accent-blue)]/15 text-[var(--color-accent-blue)]">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
