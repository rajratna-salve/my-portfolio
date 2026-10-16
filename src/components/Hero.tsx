import { motion } from "framer-motion";
import { ArrowDown, ChevronRight, Download, Circle, Github, Linkedin, Mail, Sparkles, BookOpen } from "lucide-react";
import profile from "../data/profile";
import CodeEditor from "./CodeEditor";
import ProfilePhoto from "./ProfilePhoto";

export default function Hero() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16"
    >
      {/* Background aesthetic layers */}
      <div className="absolute inset-0 bg-gradient-radial pointer-events-none" />
      <div className="absolute inset-0 bg-grid opacity-50 pointer-events-none" />

      {/* Floating ambient glow orbs */}
      <motion.div
        animate={{ x: [0, 20, 0], y: [0, -15, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute top-1/4 -left-32 w-[420px] h-[420px] rounded-full bg-[var(--color-accent-blue)]/8 blur-[130px] pointer-events-none"
      />
      <motion.div
        animate={{ x: [0, -20, 0], y: [0, 20, 0] }}
        transition={{ repeat: Infinity, duration: 16, ease: "easeInOut" }}
        className="absolute bottom-1/4 -right-32 w-[420px] h-[420px] rounded-full bg-[var(--color-accent-purple)]/8 blur-[130px] pointer-events-none"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column — Text & Narrative (7 cols) */}
          <div className="lg:col-span-7">
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass border border-[var(--color-accent-green)]/25 text-xs sm:text-sm text-[var(--color-accent-green)] mb-6 shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent-green)] opacity-75" />
                <Circle size={8} fill="currentColor" className="relative inline-flex rounded-full" />
              </span>
              <span>Open to AI & Software Opportunities</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-2"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-[var(--color-text-muted)] font-mono font-semibold mb-2">
                Developer & Engineer
              </p>
              <h1 className="text-4xl sm:text-6xl lg:text-6xl font-extrabold tracking-tight leading-[1.05]">
                <span className="text-gradient">RAJRATNA SALVE</span>
              </h1>
            </motion.div>

            {/* Role & Positioning */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="text-lg sm:text-xl text-[var(--color-accent-blue)] font-semibold mb-4 tracking-wide"
            >
              {profile.positioning}
            </motion.p>

            {/* Human Introduction / Story */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="text-[var(--color-text-secondary)] text-sm sm:text-base leading-relaxed max-w-xl mb-6"
            >
              From building mechanical-electronic foundations in Mechatronics and operating industrial robotic workcells at Metalman Auto, to developing real-time CCTV AI surveillance systems in B.Tech. Now actively expanding software rigor through CDAC training.
            </motion.p>

            {/* Currently Learning Banner */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="inline-flex flex-wrap items-center gap-2 p-2.5 px-3.5 rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-xs mb-8"
            >
              <div className="flex items-center gap-1.5 text-[var(--color-accent-purple)] font-semibold font-mono">
                <BookOpen size={14} />
                <span>Currently Learning:</span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 text-[var(--color-text-secondary)] font-medium">
                <span className="px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-accent-blue)] font-mono text-[11px]">C++</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-accent-blue)] font-mono text-[11px]">Java</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-accent-blue)] font-mono text-[11px]">DSA</span>
                <span>•</span>
                <span className="px-2 py-0.5 rounded bg-[var(--color-bg-elevated)] text-[var(--color-accent-blue)] font-mono text-[11px]">OOP</span>
              </div>
            </motion.div>

            {/* CTA action buttons */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex flex-wrap items-center gap-3 mb-8"
            >
              <button
                onClick={() => scrollTo("#projects")}
                className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-semibold text-sm shadow-lg shadow-[var(--color-accent-blue)]/20 hover:shadow-[var(--color-accent-blue)]/40 hover:scale-[1.02] transition-all duration-200"
              >
                View Projects
                <ChevronRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </button>

              <a
                href={profile.resumePath}
                download="Rajratna_Salve_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-primary)] font-semibold text-sm hover:bg-[var(--color-bg-card)] hover:border-[var(--color-accent-blue)]/40 transition-all duration-200"
              >
                <Download size={15} />
                Download Resume
              </a>

              <a
                href="https://github.com/rajratna-salve"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-white hover:border-[var(--color-border-accent)] text-sm font-medium transition-all duration-200"
                aria-label="GitHub Profile"
              >
                <Github size={16} />
                <span>GitHub</span>
              </a>

              <a
                href="https://linkedin.com/in/rajratna-salve-0a704a203"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg-card)] text-[var(--color-text-secondary)] hover:text-[#0077b5] hover:border-[#0077b5]/40 text-sm font-medium transition-all duration-200"
                aria-label="LinkedIn Profile"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
            </motion.div>
          </div>

          {/* Right Column — Profile Photo & Code Workbench (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end gap-6">
            {/* Dedicated Professional Photo Frame */}
            <div className="w-full flex justify-center lg:justify-end">
              <ProfilePhoto size="lg" />
            </div>

            {/* Code Editor below Photo */}
            <div className="w-full max-w-md">
              <CodeEditor />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-14 hidden md:flex flex-col items-center gap-2 text-[var(--color-text-muted)] cursor-pointer"
          onClick={() => scrollTo("#journey")}
        >
          <span className="text-[10px] tracking-[0.2em] uppercase font-mono">Explore Journey</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          >
            <ArrowDown size={14} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
