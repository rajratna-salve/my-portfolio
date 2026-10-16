import { useState } from "react";
import { motion } from "framer-motion";
import { User, Sparkles } from "lucide-react";
import profile from "../data/profile";

interface ProfilePhotoProps {
  size?: "md" | "lg";
  className?: string;
}

export default function ProfilePhoto({ size = "lg", className = "" }: ProfilePhotoProps) {
  const [imageError, setImageError] = useState(false);

  const dimensionClasses =
    size === "lg"
      ? "w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72"
      : "w-40 h-40 sm:w-48 sm:h-48";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={`relative group inline-block ${className}`}
    >
      {/* Ambient background glow */}
      <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[var(--color-accent-blue)]/25 via-[var(--color-accent-purple)]/20 to-[var(--color-accent-cyan)]/20 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Frame wrapper */}
      <div
        className={`relative ${dimensionClasses} rounded-3xl p-1 bg-gradient-to-b from-white/15 via-white/5 to-white/0 border border-white/15 shadow-2xl backdrop-blur-sm overflow-hidden flex items-center justify-center`}
      >
        {/* Inner container */}
        <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[var(--color-bg-secondary)] flex items-center justify-center">
          {!imageError ? (
            <img
              src={profile.photoPath}
              alt="Rajratna Salve"
              onError={() => setImageError(true)}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              loading="eager"
            />
          ) : (
            /* Elegant developer monogram fallback until rajratna-profile.jpg is placed in public/profile/ */
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[var(--color-bg-card)] via-[var(--color-bg-elevated)] to-[var(--color-bg-secondary)] p-6 text-center select-none">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-tr from-[var(--color-accent-blue)]/20 to-[var(--color-accent-purple)]/20 text-[var(--color-accent-blue)] border border-[var(--color-accent-blue)]/30 mb-3 shadow-inner">
                <User size={38} />
              </div>
              <span className="font-extrabold text-base tracking-wide text-[var(--color-text-primary)]">
                {profile.name}
              </span>
              <span className="text-[11px] text-[var(--color-accent-blue)] font-medium mt-0.5">
                AI & Data Science
              </span>
              <div className="mt-3 inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-[10px] text-[var(--color-text-muted)]">
                <Sparkles size={11} className="text-[var(--color-accent-purple)]" />
                <span>public/profile/rajratna-profile.jpg</span>
              </div>
            </div>
          )}

          {/* Subtle gradient overlay at bottom for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>
      </div>
    </motion.div>
  );
}
