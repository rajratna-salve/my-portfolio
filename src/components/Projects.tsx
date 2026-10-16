import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Eye, Cpu, BarChart3, ChevronRight, Workflow } from "lucide-react";
import profile from "../data/profile";
import type { Project } from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";
import ProjectModal from "./ProjectModal";

const projectVisuals: Record<string, { gradient: string; icon: React.FC<{ size?: number; className?: string }>; accentColor: string }> = {
  "safe-eyes": {
    gradient: "from-[var(--color-accent-purple)]/25 via-[var(--color-accent-blue)]/15 to-transparent",
    icon: Cpu,
    accentColor: "var(--color-accent-purple)",
  },
  "house-price-prediction": {
    gradient: "from-[var(--color-accent-blue)]/25 via-[var(--color-accent-cyan)]/15 to-transparent",
    icon: BarChart3,
    accentColor: "var(--color-accent-blue)",
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <SectionWrapper id="projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world implementations in computer vision, multimodal surveillance, and predictive data modeling"
        />

        <div className="grid md:grid-cols-2 max-w-5xl mx-auto gap-8">
          {profile.projects.map((project, i) => {
            const visual = projectVisuals[project.id] ?? {
              gradient: "from-[var(--color-accent-blue)]/20 to-transparent",
              icon: Cpu,
              accentColor: "var(--color-accent-blue)",
            };
            const ProjectIcon = visual.icon;

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className="group relative flex flex-col rounded-3xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)] overflow-hidden transition-all duration-300 shadow-xl cursor-pointer"
                onClick={() => setSelectedProject(project)}
                tabIndex={0}
                role="button"
                aria-label={`View full details for ${project.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setSelectedProject(project);
                  }
                }}
              >
                {/* Header with Project Icon & Hover Overlay */}
                <div className={`relative h-48 bg-gradient-to-br ${visual.gradient} flex items-center justify-center overflow-hidden border-b border-[var(--color-border-subtle)]`}>
                  <div className="absolute inset-0 bg-grid opacity-40 pointer-events-none" />

                  {/* Large Icon */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="relative z-10"
                  >
                    <ProjectIcon
                      size={64}
                      className="text-[var(--color-accent-blue)]/40 group-hover:text-[var(--color-accent-blue)]/80 transition-colors duration-300"
                    />
                  </motion.div>

                  {/* GitHub button top right */}
                  <div className="absolute top-3.5 right-3.5 z-20">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex h-9 w-9 items-center justify-center rounded-xl bg-black/40 backdrop-blur-md border border-white/10 text-white/80 hover:text-white hover:bg-black/70 transition-all duration-200"
                      aria-label="GitHub Profile"
                    >
                      <Github size={16} />
                    </a>
                  </div>

                  {/* Click overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/40 transition-colors duration-300 z-10">
                    <span className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/20 text-white text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                      <Eye size={14} />
                      View Architecture & Details
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
                  <div>
                    {/* Status badge */}
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--color-accent-blue)] font-bold">
                        {project.id === "safe-eyes" ? "Multimodal AI System" : "Predictive Analytics"}
                      </span>
                      <span className="text-[10px] font-medium text-[var(--color-accent-green)] bg-[var(--color-accent-green)]/10 px-2 py-0.5 rounded-full border border-[var(--color-accent-green)]/20">
                        {project.status.includes("Publication") ? "Academic & Publication" : "Completed"}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-accent-blue)] transition-colors mb-2 leading-snug">
                      {project.title}
                    </h3>

                    <p className="text-xs text-[var(--color-accent-purple)] font-mono font-medium mb-3">
                      {project.tagline}
                    </p>

                    <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed mb-5 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Visual Technical Workflow Pipeline preview */}
                    {project.pipeline && (
                      <div className="mb-5 p-3 rounded-xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)]">
                        <div className="flex items-center gap-1.5 text-[10px] font-mono text-[var(--color-text-muted)] uppercase tracking-wider mb-2">
                          <Workflow size={12} className="text-[var(--color-accent-blue)]" />
                          <span>Technical Pipeline</span>
                        </div>
                        <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono">
                          {project.pipeline.map((step, idx) => (
                            <span key={step} className="inline-flex items-center gap-1">
                              <span className="px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] text-[10px]">
                                {step}
                              </span>
                              {idx < project.pipeline.length - 1 && (
                                <span className="text-[var(--color-text-muted)] text-[10px]">→</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Bottom: Technologies & Action */}
                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-0.5 rounded-md bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] text-[11px] font-medium text-[var(--color-text-secondary)]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-3 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-xs">
                      <span className="text-[var(--color-text-muted)]">Click for full breakdown</span>
                      <span className="font-semibold text-[var(--color-accent-blue)] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                        Explore Architecture <ChevronRight size={14} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </SectionWrapper>
  );
}
