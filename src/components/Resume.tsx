import { motion } from "framer-motion";
import { Download, Eye, Printer, FileText, CheckCircle2 } from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

export default function Resume() {
  const handlePrint = () => window.print();

  return (
    <SectionWrapper id="resume">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Resume"
          subtitle="Download, view, or print my complete engineering resume"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Resume preview card */}
          <div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] overflow-hidden shadow-xl">
            {/* Top strip */}
            <div className="h-1.5 bg-gradient-to-r from-[var(--color-accent-blue)] via-[var(--color-accent-purple)] to-[var(--color-accent-cyan)]" />

            <div className="p-6 sm:p-8">
              {/* Preview header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--color-accent-blue)]/20 to-[var(--color-accent-purple)]/20 text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/30">
                  <FileText size={28} />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-text-primary)] text-lg">
                    {profile.name}
                  </h3>
                  <p className="text-sm text-[var(--color-text-secondary)]">{profile.headline}</p>
                </div>
              </div>

              {/* Info rows */}
              <div className="grid grid-cols-2 gap-3 mb-8 text-sm">
                <div className="rounded-xl bg-[var(--color-bg-elevated)] p-3 border border-[var(--color-border-subtle)]">
                  <p className="text-[var(--color-text-muted)] text-xs mb-0.5">Format</p>
                  <p className="text-[var(--color-text-primary)] font-medium">Verified PDF</p>
                </div>
                <div className="rounded-xl bg-[var(--color-bg-elevated)] p-3 border border-[var(--color-border-subtle)]">
                  <p className="text-[var(--color-text-muted)] text-xs mb-0.5">Status</p>
                  <p className="text-[var(--color-accent-green)] font-medium flex items-center gap-1">
                    <CheckCircle2 size={13} /> Active & Verified
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href={profile.resumePath}
                  download="Rajratna_Salve_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-medium text-sm shadow-lg hover:shadow-[var(--color-accent-blue)]/25 hover:scale-[1.02] transition-all duration-200"
                >
                  <Download size={16} />
                  Download Resume
                </a>

                <a
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-primary)] font-medium text-sm hover:bg-[var(--color-bg-card-hover)] transition-colors"
                >
                  <Eye size={16} />
                  View in Browser
                </a>

                <button
                  onClick={handlePrint}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-[var(--color-border-medium)] text-[var(--color-text-primary)] font-medium text-sm hover:bg-[var(--color-bg-card-hover)] transition-colors"
                >
                  <Printer size={16} />
                  Print
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
