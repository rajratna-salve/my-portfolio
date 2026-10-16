import { type ReactNode, type HTMLAttributes } from "react";
import { motion } from "framer-motion";
import { useInView } from "../hooks/useInView";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode;
  id: string;
  className?: string;
  delay?: number;
}

export default function SectionWrapper({
  children,
  id,
  className = "",
  delay = 0,
  ...rest
}: SectionWrapperProps) {
  const [ref, inView] = useInView(0.08);

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={`relative py-20 md:py-28 ${className}`}
      {...rest}
    >
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </section>
  );
}

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-14 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-3xl md:text-4xl font-bold tracking-tight"
      >
        <span className="text-gradient">{title}</span>
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-[var(--color-text-secondary)] text-base md:text-lg max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto mt-5 h-0.5 w-20 rounded-full bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)]"
      />
    </div>
  );
}
