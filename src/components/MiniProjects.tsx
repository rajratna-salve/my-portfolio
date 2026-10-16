import { motion } from "framer-motion";
import { Github, BookOpen, Hammer, ExternalLink } from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const statusConfig = {
  building: {
    label: "Building",
    dot: "bg-[var(--color-accent-orange)]",
    badge: "text-[var(--color-accent-orange)] bg-[var(--color-accent-orange)]/10 border-[var(--color-accent-orange)]/25",
  },
  complete: {
    label: "Complete",
    dot: "bg-[var(--color-accent-green)]",
    badge: "text-[var(--color-accent-green)] bg-[var(--color-accent-green)]/10 border-[var(--color-accent-green)]/25",
  },
} as const;

export default function MiniProjects() {
  return (
    <SectionWrapper id="mini-projects" className="bg-[var(--color-bg-secondary)]/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Learning Builds"
          subtitle="Real projects I am actively building while expanding my software engineering depth through CDAC training"
        />

        {/* Authenticity notice */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-[var(--color-accent-orange)]/8 via-[var(--color-accent-blue)]/8 to-transparent border border-[var(--color-accent-orange)]/20 flex items-start sm:items-center gap-3.5"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-orange)]/15 text-[var(--color-accent-orange)]">
            <Hammer size={20} />
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--color-text-primary)]">Work in Progress</p>
            <p className="text-xs text-[var(--color-text-secondary)] mt-0.5 leading-relaxed">
              These are genuine learning projects built during CDAC training. GitHub links will be added once repositories contain real, working code — not before.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
          {profile.miniProjects.map((project, i) => {
            const status = statusConfig[project.status];
            const hasRepo = !!project.githubUrl;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -3 }}
                className="group rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)] p-5 transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Status */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span
                      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider border ${status.badge}`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${status.dot} animate-pulse`} />
                      {status.label}
                    </span>
                    <BookOpen size={14} className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent-blue)] transition-colors" />
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-blue)] transition-colors text-base mb-2 leading-snug">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* What I learned */}
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed italic mb-4 line-clamp-2">
                    Learning: {project.whatILearned}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 rounded-md bg-[var(--color-bg-elevated)] text-[10px] font-medium text-[var(--color-text-muted)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Tech + Action */}
                <div>
                  <div className="flex flex-wrap gap-1 mb-3 pt-3 border-t border-[var(--color-border-subtle)]">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[10px] text-[var(--color-accent-blue)] font-medium font-mono border border-[var(--color-accent-blue)]/15"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {hasRepo ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--color-accent-blue)] hover:underline"
                      aria-label={`View ${project.title} source code on GitHub`}
                    >
                      <Github size={13} />
                      View on GitHub
                      <ExternalLink size={11} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] font-medium">
                      <Github size={13} />
                      Repository coming soon
                    </span>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
