import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Github, CheckCircle2, AlertCircle, Workflow } from "lucide-react";
import type { Project } from "../data/profile";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Close on Escape key
  useEffect(() => {
    if (!project) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [project, onClose]);

  if (!project) return null;

  // A "real repo" URL contains the project path, not just the profile root
  const isRealRepo = (url: string) =>
    url.startsWith("https://github.com/") &&
    url.replace("https://github.com/", "").includes("/");

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-4 sm:inset-8 md:inset-x-auto md:inset-y-12 md:max-w-3xl md:mx-auto z-[100] flex flex-col rounded-2xl bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] shadow-2xl overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-label={`Project details: ${project.title}`}
          >
            {/* Header */}
            <div className="flex items-start justify-between p-5 sm:p-6 border-b border-[var(--color-border-subtle)]">
              <div className="flex-1 min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text-primary)] mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-[var(--color-accent-blue)]">{project.tagline}</p>
              </div>
              <button
                onClick={onClose}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg hover:bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] transition-colors ml-3"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-6 hide-scrollbar">
              {/* Status */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-xs font-medium">
                {project.status.toLowerCase().includes("live") || project.status.toLowerCase().includes("completed") ? (
                  <CheckCircle2 size={14} className="text-[var(--color-accent-green)]" />
                ) : (
                  <AlertCircle size={14} className="text-[var(--color-accent-orange)]" />
                )}
                <span className="text-[var(--color-text-secondary)]">{project.status}</span>
              </div>

              {/* Overview */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-2">
                  Overview
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Problem */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-2">
                  Problem Statement
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {project.problemStatement}
                </p>
              </div>

              {/* Approach */}
              {project.approach && (
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-2">
                    Approach
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {project.approach}
                  </p>
                </div>
              )}

              {/* Technical Pipeline */}
              {project.pipeline && project.pipeline.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
                    Technical Pipeline
                  </h4>
                  <div className="flex flex-wrap items-center gap-1.5 p-3 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] font-mono text-[11px]">
                    <Workflow size={13} className="text-[var(--color-accent-blue)] shrink-0 mr-1" />
                    {project.pipeline.map((step, idx) => (
                      <span key={step} className="inline-flex items-center gap-1">
                        <span className="px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-text-primary)] border border-[var(--color-border-subtle)]">
                          {step}
                        </span>
                        {idx < project.pipeline.length - 1 && (
                          <span className="text-[var(--color-text-muted)]">→</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Features */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
                  Key Features
                </h4>
                <ul className="space-y-2">
                  {project.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[var(--color-accent-blue)] shrink-0" />
                      {f.text}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-3">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)] text-xs font-medium border border-[var(--color-accent-blue)]/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contribution */}
              <div>
                <h4 className="text-sm font-semibold text-[var(--color-text-primary)] uppercase tracking-wider mb-2">
                  My Contribution
                </h4>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {project.contribution}
                </p>
              </div>
            </div>

            {/* Footer — only show real destination buttons */}
            <div className="flex items-center gap-3 p-5 sm:p-6 border-t border-[var(--color-border-subtle)] flex-wrap">
              {/* GitHub — only for actual repo URLs (not just profile link) */}
              {project.githubUrl && isRealRepo(project.githubUrl) && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-primary)] text-sm font-medium hover:bg-[var(--color-bg-card)] hover:border-[var(--color-border-accent)] transition-all duration-200"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <Github size={16} />
                  View on GitHub
                </a>
              )}

              {/* GitHub profile link — shown when no specific repo yet */}
              {project.githubUrl && !isRealRepo(project.githubUrl) && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] text-sm font-medium hover:bg-[var(--color-bg-card)] transition-all duration-200"
                  aria-label="View GitHub profile"
                >
                  <Github size={16} />
                  GitHub Profile
                </a>
              )}

              {/* Live demo — only if real URL */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white text-sm font-medium hover:opacity-90 transition-opacity"
                  aria-label={`Open live demo for ${project.title}`}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              )}

              <button
                onClick={onClose}
                className="ml-auto inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] text-sm font-medium hover:bg-[var(--color-bg-card)] transition-all duration-200"
              >
                <X size={14} />
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
