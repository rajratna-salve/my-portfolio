import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Cpu,
  Globe,
  Brain,
  Wrench,
} from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const iconMap: Record<string, React.FC<{ size?: number; className?: string }>> = {
  Code2,
  Cpu,
  Globe,
  Brain,
  Wrench,
};

const tabColors = [
  { active: "text-[var(--color-accent-blue)] bg-[var(--color-accent-blue)]/12 border-[var(--color-accent-blue)]/30", dot: "bg-[var(--color-accent-blue)]" },
  { active: "text-[var(--color-accent-purple)] bg-[var(--color-accent-purple)]/12 border-[var(--color-accent-purple)]/30", dot: "bg-[var(--color-accent-purple)]" },
  { active: "text-[var(--color-accent-cyan)] bg-[var(--color-accent-cyan)]/12 border-[var(--color-accent-cyan)]/30", dot: "bg-[var(--color-accent-cyan)]" },
  { active: "text-[var(--color-accent-green)] bg-[var(--color-accent-green)]/12 border-[var(--color-accent-green)]/30", dot: "bg-[var(--color-accent-green)]" },
  { active: "text-[var(--color-accent-orange)] bg-[var(--color-accent-orange)]/12 border-[var(--color-accent-orange)]/30", dot: "bg-[var(--color-accent-orange)]" },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const activeColors = tabColors[activeGroup] ?? tabColors[0];

  return (
    <SectionWrapper id="skills" className="bg-[var(--color-bg-secondary)]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="Technologies and concepts I work with regularly"
        />

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {profile.skillGroups.map((group, i) => {
            const Icon = iconMap[group.icon] ?? Code2;
            const isActive = i === activeGroup;
            const colors = tabColors[i] ?? tabColors[0];
            return (
              <motion.button
                key={group.title}
                onClick={() => setActiveGroup(i)}
                whileTap={{ scale: 0.96 }}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium border transition-all duration-200 ${
                  isActive
                    ? colors.active
                    : "text-[var(--color-text-secondary)] border-[var(--color-border-subtle)] hover:border-[var(--color-border-medium)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg-card)]"
                }`}
              >
                <Icon size={15} />
                {group.title}
              </motion.button>
            );
          })}
        </div>

        {/* Skill cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeGroup}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {profile.skillGroups[activeGroup].skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
                className="group relative rounded-xl p-5 bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] hover:border-[var(--color-border-accent)] hover:bg-[var(--color-bg-card-hover)] transition-all duration-300 cursor-default overflow-hidden"
              >
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shimmer rounded-xl pointer-events-none" />

                <div className="flex items-center gap-3 mb-2 relative z-10">
                  <div className={`h-2.5 w-2.5 rounded-full ${activeColors.dot} transition-all duration-300 group-hover:scale-110 group-hover:shadow-sm`} />
                  <h3 className="font-semibold text-[var(--color-text-primary)] text-sm">
                    {skill.name}
                  </h3>
                </div>

                <AnimatePresence>
                  {hoveredSkill === skill.name && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-xs text-[var(--color-text-secondary)] leading-relaxed overflow-hidden pl-5 relative z-10"
                    >
                      {skill.description}
                    </motion.p>
                  )}
                </AnimatePresence>

                {/* Gradient overlay */}
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-[var(--color-accent-blue)]/6 to-transparent" />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Count badge */}
        <motion.p
          key={activeGroup}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-6 text-xs text-[var(--color-text-muted)]"
        >
          {profile.skillGroups[activeGroup].skills.length} skills in{" "}
          <span className="text-[var(--color-text-secondary)] font-medium">
            {profile.skillGroups[activeGroup].title}
          </span>
        </motion.p>
      </div>
    </SectionWrapper>
  );
}
