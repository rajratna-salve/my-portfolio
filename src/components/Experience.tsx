import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience"
          subtitle="Professional exposure and practical industry experience"
        />

        <div className="relative max-w-3xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[var(--color-accent-blue)]/40 via-[var(--color-accent-purple)]/20 to-transparent" />

          {profile.experience.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative pl-12 md:pl-16 pb-12 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-2.5 md:left-4.5 top-1 flex h-3 w-3 items-center justify-center">
                <div className="h-3 w-3 rounded-full bg-[var(--color-accent-blue)] ring-4 ring-[var(--color-bg-primary)]" />
              </div>

              <div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-5 sm:p-6 hover:border-[var(--color-border-accent)] transition-all duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]">
                    <Briefcase size={20} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-[var(--color-text-primary)]">{exp.company}</h3>
                    <p className="text-sm text-[var(--color-accent-blue)]">{exp.role}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-3 text-xs text-[var(--color-text-muted)]">
                  <span className="inline-flex items-center gap-1">
                    <Calendar size={12} />
                    {exp.duration}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} />
                    {exp.area}
                  </span>
                </div>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                  {exp.description}
                </p>

                <ul className="space-y-2">
                  {exp.highlights.map((h, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-purple)] shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
