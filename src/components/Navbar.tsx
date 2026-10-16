import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Sun,
  Moon,
  Home,
  User,
  Code2,
  FolderKanban,
  Briefcase,
  GraduationCap,
  Award,
  FileText,
  Mail,
  MapPin,
  BookOpen,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";
import { useScrollProgress } from "../hooks/useScrollProgress";

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: User },
  { label: "Journey", href: "#journey", icon: MapPin },
  { label: "Learning", href: "#learning", icon: BookOpen },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Experience", href: "#experience", icon: Briefcase },
  { label: "Education", href: "#education", icon: GraduationCap },
  { label: "Certifications", href: "#certifications", icon: Award },
  { label: "Resume", href: "#resume", icon: FileText },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const progress = useScrollProgress();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );

    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
        <motion.div
          className="h-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-[2px] left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass-strong shadow-lg" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick("#home")}
              className="flex items-center gap-2 group"
              aria-label="Go to home"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] font-bold text-white text-sm transition-transform duration-200 group-hover:scale-105">
                R
              </div>
              <span className="hidden sm:block font-semibold text-[var(--color-text-primary)] tracking-tight">
                Rajratna
              </span>
            </button>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {navLinks.map(({ label, href }) => {
                const isActive = activeSection === href.slice(1);
                return (
                  <button
                    key={href}
                    onClick={() => handleNavClick(href)}
                    className={`relative px-2.5 py-1.5 text-xs rounded-lg transition-colors duration-200 ${
                      isActive
                        ? "text-[var(--color-accent-blue)]"
                        : "text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)]"
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-5 rounded-full bg-[var(--color-accent-blue)]"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card)] transition-colors"
                aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              >
                {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
              </button>
              <button
                onClick={() => setMobileOpen(true)}
                className="flex h-9 w-9 items-center justify-center rounded-lg text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] lg:hidden"
                aria-label="Open menu"
              >
                <Menu size={20} />
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[70] bg-black/60 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed right-0 top-0 bottom-0 z-[80] w-72 bg-[var(--color-bg-secondary)] border-l border-[var(--color-border-subtle)] shadow-2xl"
            >
              <div className="flex items-center justify-between p-5 border-b border-[var(--color-border-subtle)]">
                <span className="font-semibold text-[var(--color-text-primary)]">Navigation</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-[var(--color-bg-card)]"
                  aria-label="Close menu"
                >
                  <X size={18} />
                </button>
              </div>
              <nav className="p-4 space-y-1" role="navigation" aria-label="Mobile navigation">
                {navLinks.map(({ label, href, icon: Icon }) => {
                  const isActive = activeSection === href.slice(1);
                  return (
                    <button
                      key={href}
                      onClick={() => handleNavClick(href)}
                      className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                        isActive
                          ? "bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg-card)] hover:text-[var(--color-text-primary)]"
                      }`}
                    >
                      <Icon size={18} />
                      {label}
                    </button>
                  );
                })}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
