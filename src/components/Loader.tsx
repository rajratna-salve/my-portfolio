import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + Math.random() * 18;
      });
    }, 80);

    const timer = setTimeout(() => setLoading(false), 1400);
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[var(--color-bg-primary)]"
        >
          {/* Background orb */}
          <div className="absolute inset-0 bg-gradient-radial pointer-events-none opacity-80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[var(--color-accent-blue)]/5 blur-[100px] pointer-events-none" />

          <div className="flex flex-col items-center gap-5 relative z-10">
            {/* Animated logo */}
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 0px rgba(96,165,250,0)",
                  "0 0 40px rgba(96,165,250,0.4)",
                  "0 0 0px rgba(96,165,250,0)",
                ],
              }}
              transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
              className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] font-bold text-white text-2xl shadow-xl"
            >
              R
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <p className="text-[var(--color-text-primary)] font-semibold text-lg tracking-tight">
                Rajratna Salve
              </p>
              <p className="text-xs text-[var(--color-text-muted)] font-mono tracking-wider mt-0.5">
                AI & Data Science Engineer
              </p>
            </motion.div>

            {/* Progress bar */}
            <div className="w-48 h-0.5 bg-[var(--color-border-subtle)] rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] rounded-full"
                style={{ width: `${Math.min(progress, 100)}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
