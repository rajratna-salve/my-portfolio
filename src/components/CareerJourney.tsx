import { motion } from "framer-motion";
import { ArrowRight, Wrench, Factory, Brain, Code2, GraduationCap } from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const stageIcons = [Wrench, Factory, Brain, Code2, GraduationCap];

export default function CareerJourney() {
  return (
    <SectionWrapper id="journey" className="bg-[var(--color-bg-secondary)]/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Engineering Journey"
          subtitle="From Mechatronics and Industrial Robotics to AI & Software Development"
        />

        {/* Journey visual progress ribbon */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connecting line on mobile, decorative gradient behind steps */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 w-0.5 -translate-x-1/2 bg-gradient-to-b from-[var(--color-accent-blue)] via-[var(--color-accent-purple)] to-[var(--color-accent-cyan)] opacity-30 hidden md:block" />

          <div className="space-y-8 md:space-y-12">
            {profile.careerJourney.map((step, i) => {
              const Icon = stageIcons[i % stageIcons.length] ?? Code2;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={step.stage}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  className={`relative flex flex-col md:flex-row items-center gap-6 md:gap-10 ${
                    isEven ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content card */}
                  <div className="w-full md:w-1/2">
                    <motion.div
                      whileHover={{ y: -3 }}
                      className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)] p-6 shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                    >
                      {/* Top accent gradient line */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] opacity-70 group-hover:opacity-100 transition-opacity" />

                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="text-xs font-mono font-bold tracking-wider text-[var(--color-accent-blue)]">
                          {step.stage}
                        </span>
                        <span className="text-xs font-medium text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-2.5 py-0.5 rounded-full border border-[var(--color-border-subtle)]">
                          {step.period}
                        </span>
                      </div>

                      <h3 className="text-lg font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-blue)] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-xs font-semibold text-[var(--color-text-secondary)] mt-0.5 mb-3">
                        {step.place}
                      </p>

                      <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-4">
                        {step.description}
                      </p>

                      {/* Focus chips */}
                      <div className="flex flex-wrap gap-1.5">
                        {step.focusTags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-0.5 rounded-md bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[11px] font-medium text-[var(--color-text-secondary)] group-hover:border-[var(--color-border-accent)] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>

                  {/* Center Node Icon */}
                  <div className="hidden md:flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white shadow-lg shadow-[var(--color-accent-blue)]/20 z-10 border-2 border-[var(--color-bg-primary)]">
                    <Icon size={20} />
                  </div>

                  {/* Empty spacer for alignment */}
                  <div className="hidden md:block w-1/2" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
