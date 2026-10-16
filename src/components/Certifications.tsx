import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck, FileText, Download } from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

export default function Certifications() {
  return (
    <SectionWrapper id="certifications" className="bg-[var(--color-bg-secondary)]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Certifications"
          subtitle="Official industry credentials and verified academic qualifications"
        />

        <div className="max-w-3xl mx-auto space-y-5">
          {profile.certifications.map((cert, i) => {
            const hasExternalUrl =
              cert.credentialUrl &&
              cert.credentialUrl !== "" &&
              !cert.credentialUrl.endsWith(".pdf");
            const hasPdf = !!cert.pdfUrl;
            const isMicrosoftLearn =
              cert.credentialUrl?.includes("microsoft.com") ?? false;

            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -2 }}
                className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)] p-5 sm:p-6 transition-all duration-300 hover:shadow-lg group overflow-hidden relative"
              >
                {/* Top colour streak on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${cert.badgeColor}80, transparent)`,
                  }}
                />

                <div className="flex items-start gap-4">
                  {/* Badge Icon */}
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${cert.badgeColor}25, ${cert.badgeColor}10)`,
                      border: `1px solid ${cert.badgeColor}35`,
                      boxShadow: `0 0 20px ${cert.badgeColor}15`,
                    }}
                  >
                    <ShieldCheck size={30} style={{ color: cert.badgeColor }} />
                  </motion.div>

                  <div className="flex-1 min-w-0">
                    {/* Title */}
                    <h3 className="font-bold text-[var(--color-text-primary)] text-base sm:text-lg group-hover:text-[var(--color-accent-blue)] transition-colors leading-snug mb-1">
                      {cert.title}
                    </h3>

                    {/* Issuer */}
                    <div className="flex items-center gap-2 mb-4">
                      <Award size={14} className="text-[var(--color-text-muted)] shrink-0" />
                      <span className="text-sm text-[var(--color-text-secondary)] font-medium">
                        {cert.issuer}
                      </span>
                    </div>

                    {/* Action buttons — only real destinations */}
                    <div className="flex flex-wrap gap-2">

                      {/* Microsoft Learn — external verify URL */}
                      {isMicrosoftLearn && hasExternalUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#0078d4] text-white hover:bg-[#006abe] text-xs font-semibold shadow-sm transition-all duration-200"
                          aria-label="Verify Azure certification on Microsoft Learn"
                        >
                          <ExternalLink size={13} />
                          Verify on Microsoft Learn
                        </a>
                      )}

                      {/* View PDF — opens in new tab */}
                      {hasPdf && (
                        <a
                          href={cert.pdfUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[var(--color-accent-blue)] text-white hover:bg-[var(--color-accent-blue)]/90 text-xs font-semibold shadow-sm transition-all duration-200"
                          aria-label={`View ${cert.title} certificate PDF`}
                        >
                          <FileText size={13} />
                          View Certificate
                        </a>
                      )}

                      {/* Download PDF */}
                      {hasPdf && cert.pdfUrl && (
                        <a
                          href={cert.pdfUrl}
                          download={cert.downloadName ?? `${cert.id}.pdf`}
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[var(--color-bg-elevated)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)] text-xs font-semibold text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-all duration-200"
                          aria-label={`Download ${cert.title} certificate PDF`}
                        >
                          <Download size={13} />
                          Download
                        </a>
                      )}

                      {/* Non-PDF external URL (non-Microsoft, no local PDF) */}
                      {hasExternalUrl && !isMicrosoftLearn && !hasPdf && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[var(--color-accent-blue)] text-white hover:bg-[var(--color-accent-blue)]/90 text-xs font-semibold shadow-sm transition-all duration-200"
                          aria-label={`Verify ${cert.title} credential`}
                        >
                          <ExternalLink size={13} />
                          Verify Credential
                        </a>
                      )}

                      {/* No URL and no PDF — Oracle case */}
                      {!hasExternalUrl && !hasPdf && (
                        <span className="inline-flex items-center gap-1.5 text-xs text-[var(--color-text-muted)] bg-[var(--color-bg-elevated)] px-2.5 py-1 rounded-full font-medium border border-[var(--color-border-subtle)]">
                          <ShieldCheck size={12} style={{ color: cert.badgeColor }} />
                          Verified — Digital Credential
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
}
