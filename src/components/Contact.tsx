import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, Copy, Check, MapPin, Phone } from "lucide-react";
import profile from "../data/profile";
import SectionWrapper, { SectionHeading } from "./SectionWrapper";

const socialIcons: Record<string, React.FC<{ size?: number }>> = {
  Github,
  Linkedin,
  Mail,
};

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = "Invalid email address";
    if (!formData.message.trim()) errs.message = "Message is required";
    else if (formData.message.trim().length < 10) errs.message = "Message must be at least 10 characters";
    return errs;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const copyToClipboard = async (text: string, isPhone: boolean) => {
    try {
      await navigator.clipboard.writeText(text);
      if (isPhone) {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    } catch {
      const ta = document.createElement("textarea");
      ta.value = text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      if (isPhone) {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
    }
  };

  return (
    <SectionWrapper id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Feel free to reach out for software engineering or AI opportunities"
        />

        <div className="grid lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Left — info */}
          <div className="space-y-4">
            {/* Email card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-5"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-blue)]/10 text-[var(--color-accent-blue)]">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">Email</p>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-blue)] font-medium transition-colors"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(profile.email, false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check size={16} className="text-[var(--color-accent-green)]" /> : <Copy size={16} />}
                </button>
              </div>
            </motion.div>

            {/* Phone card */}
            {profile.phone && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 }}
                className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-5"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-green)]/10 text-[var(--color-accent-green)]">
                      <Phone size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">Phone</p>
                      <a
                        href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                        className="text-sm text-[var(--color-text-primary)] hover:text-[var(--color-accent-green)] font-medium transition-colors"
                      >
                        {profile.phone}
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => copyToClipboard(profile.phone, true)}
                    className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-[var(--color-bg-elevated)] text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] transition-colors"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check size={16} className="text-[var(--color-accent-green)]" /> : <Copy size={16} />}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] p-5"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--color-accent-purple)]/10 text-[var(--color-accent-purple)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider font-semibold">Location</p>
                  <p className="text-sm text-[var(--color-text-primary)] font-medium">{profile.location}</p>
                </div>
              </div>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="flex gap-3 pt-2"
            >
              {profile.socialLinks.map((link) => {
                const Icon = socialIcons[link.icon] ?? Mail;
                return (
                  <a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-bg-card)] border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-accent-blue)] hover:border-[var(--color-border-accent)] transition-all duration-200"
                    aria-label={link.platform}
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="rounded-2xl bg-[var(--color-bg-card)] border border-[var(--color-accent-green)]/30 p-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--color-accent-green)]/15 text-[var(--color-accent-green)] mx-auto mb-4">
                  <Check size={28} />
                </div>
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-2">Message Recorded</h3>
                <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                  Thank you! Your message has been recorded.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-sm text-[var(--color-accent-blue)] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full rounded-xl bg-[var(--color-bg-card)] border px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors ${
                      errors.name ? "border-red-500/60" : "border-[var(--color-border-subtle)]"
                    }`}
                    placeholder="Your name"
                  />
                  {errors.name && <p className="mt-1 text-xs text-red-400">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={`w-full rounded-xl bg-[var(--color-bg-card)] border px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors ${
                      errors.email ? "border-red-500/60" : "border-[var(--color-border-subtle)]"
                    }`}
                    placeholder="you@example.com"
                  />
                  {errors.email && <p className="mt-1 text-xs text-red-400">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-[var(--color-text-secondary)] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full rounded-xl bg-[var(--color-bg-card)] border px-4 py-3 text-sm text-[var(--color-text-primary)] placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-accent-blue)] focus:outline-none transition-colors resize-none ${
                      errors.message ? "border-red-500/60" : "border-[var(--color-border-subtle)]"
                    }`}
                    placeholder="Inquire about an opportunity or technical discussion..."
                  />
                  {errors.message && <p className="mt-1 text-xs text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--color-accent-blue)] to-[var(--color-accent-purple)] text-white font-medium text-sm shadow-lg hover:shadow-[var(--color-accent-blue)]/20 hover:scale-[1.02] transition-all duration-200 w-full justify-center"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
