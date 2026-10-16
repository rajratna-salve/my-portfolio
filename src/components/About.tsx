import { motion } from "framer-motion";
import { Target, BookOpen, MapPin, GraduationCap, Award, FileText, Globe } from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const highlights = [
  { icon: Target, label: "Core Domain", value: "AI, Data Science & Industrial Automation", color: "blue" },
  { icon: BookOpen, label: "CDAC (Pursuing)", value: "C++, Java, DSA & OOP", color: "purple" },
  { icon: FileText, label: "Publications", value: "2 Papers: CCTV Harassment Detection & Fake News", color: "cyan" },
];

const stats = [
  { label: "B.Tech CGPA", value: "7.63", icon: GraduationCap },
  { label: "Diploma Score", value: "84.00%", icon: Award },
  { label: "Location", value: "Pune, India", icon: MapPin },
];

const colorStyles: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: "bg-[var(--color-accent-blue)]/10",
    text: "text-[var(--color-accent-blue)]",
    border: "border-[var(--color-accent-blue)]/20",
  },
  purple: {
    bg: "bg-[var(--color-accent-purple)]/10",
    text: "text-[var(--color-accent-purple)]",
    border: "border-[var(--color-accent-purple)]/20",
  },
  cyan: {
    bg: "bg-[var(--color-accent-cyan)]/10",
    text: "text-[var(--color-accent-cyan)]",
    border: "border-[var(--color-accent-cyan)]/20",
  },
};

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title="About Me" subtitle="Academic background, technical focus, and engineering journey" />

        {/* Verified Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-14"
        >
          {stats.map(({ label, value, icon: Icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-1.5 p-4 rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)] transition-all duration-300 group"
            >
              <Icon size={18} className="text-[var(--color-accent-blue)] mb-1" />
              <span className="text-2xl font-extrabold text-gradient">{value}</span>
              <span className="text-xs text-[var(--color-text-muted)] text-center">{label}</span>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Text paragraphs */}
          <div className="lg:col-span-3 space-y-5">
            {profile.aboutParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="text-[var(--color-text-secondary)] leading-relaxed text-[15px]"
              >
                {p}
              </motion.p>
            ))}

            {/* Languages Known (from resume) */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.35 }}
              className="pt-2 flex items-center gap-2"
            >
              <span className="text-xs text-[var(--color-text-muted)] font-semibold flex items-center gap-1.5">
                <Globe size={14} className="text-[var(--color-accent-blue)]" />
                Languages Known:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {profile.languages.map((lang) => (
                  <span
                    key={lang}
                    className="px-2.5 py-0.5 rounded-full bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] text-xs font-medium border border-[var(--color-accent-blue)]/20"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Core Tech badges */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-2 pt-1"
            >
              {[
                "Python",
                "SQL",
                "HTML/CSS",
                "TensorFlow",
                "Pandas",
                "NumPy",
                "C++",
                "Java",
                "DSA",
                "OOP",
                "Git",
                "PowerBI",
                "Tableau",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] text-xs font-medium hover:border-[var(--color-border-accent)] hover:text-[var(--color-accent-blue)] transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Highlights sidebar */}
          <div className="lg:col-span-2 space-y-4">
            {highlights.map(({ icon: Icon, label, value, color }, i) => {
              const styles = colorStyles[color];
              return (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className={`group rounded-xl p-4 bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:${styles.border} hover:glow-blue transition-all duration-300`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${styles.bg} ${styles.text} transition-all duration-300`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-muted)] mb-1">
                        {label}
                      </p>
                      <p className={`text-sm font-medium ${styles.text}`}>{value}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
