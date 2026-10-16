import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";
import profile from "../data/profile";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border-subtle)] bg-[var(--color-bg-secondary)] relative overflow-hidden">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--color-accent-blue)]/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1.5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] font-bold text-white text-xs">
                R
              </div>
              <span className="font-semibold text-[var(--color-text-primary)]">{profile.name}</span>
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">{profile.headline}</p>
          </div>

          {/* Built with */}
          <div className="flex items-center gap-1.5 text-sm text-[var(--color-text-muted)]">
            <span>Built with</span>
            <Heart size={13} className="text-[var(--color-accent-pink)]" />
            <span>&</span>
            <Code2 size={13} className="text-[var(--color-accent-blue)]" />
            <span>in Pune, India</span>
          </div>

          {/* Social + copyright */}
          <div className="flex flex-col items-center md:items-end gap-3">
            <div className="flex items-center gap-2">
              {profile.socialLinks.map((link) => {
                const icons: Record<string, React.FC<{ size?: number }>> = { Github, Linkedin, Mail };
                const Icon = icons[link.icon] ?? Mail;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--color-border-subtle)] text-[var(--color-text-muted)] hover:text-[var(--color-accent-blue)] hover:border-[var(--color-border-accent)] hover:bg-[var(--color-bg-card)] hover:scale-110 transition-all duration-200"
                    aria-label={link.platform}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
            <p className="text-xs text-[var(--color-text-muted)]">
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
