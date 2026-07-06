import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MessageCircle,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { profile } from "../data";
import contactBgImage from "../assets/contact-page-bg.webm";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: "blur(8px)" },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: i * 0.08, duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  }),
};

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    accent: "hover:border-orange-500/40 hover:shadow-[0_12px_40px_-16px_rgba(255,140,0,0.45)]",
  },
  {
    icon: Phone,
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    accent: "hover:border-orange-500/40 hover:shadow-[0_12px_40px_-16px_rgba(255,140,0,0.45)]",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with me instantly",
    href: `https://wa.me/${profile.whatsapp}`,
    external: true,
    accent:
      "border-emerald-500/25 bg-emerald-500/5 hover:border-emerald-400/40 hover:shadow-[0_12px_40px_-16px_rgba(52,211,153,0.35)]",
  },
  {
    icon: MapPin,
    label: "Location",
    value: profile.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(profile.location)}`,
    external: true,
    accent: "hover:border-orange-500/40 hover:shadow-[0_12px_40px_-16px_rgba(255,140,0,0.45)]",
  },
];

const socialLinks = [
  { label: "GitHub", href: profile.github },
  { label: "LinkedIn", href: profile.linkedin },
  { label: "WhatsApp", href: `https://wa.me/${profile.whatsapp}` },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const year = new Date().getFullYear();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = `Hi Mohankumar! I'm ${form.name} (${form.email}).%0A%0A${form.message}`;
    window.open(`https://wa.me/${profile.whatsapp}?text=${text}`, "_blank");
    setSent(true);
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-zinc-950 h-fit py-10 md:py-10"
    >
      {/* Vertical landscape background (horizontal image rotated for tall section) */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          src={contactBgImage}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover opacity-[0.22]"
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,140,0,0.1),transparent_55%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/55 via-zinc-950/88 to-zinc-950" />
        <div
          className={cn(
            "absolute inset-0",
            "bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)]",
            "bg-[size:32px_32px]",
            "[mask-image:radial-gradient(ellipse_at_center,#09090b_20%,transparent)]"
          )}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mb-14 max-w-2xl space-y-5 text-center md:mb-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <div className="mx-auto flex w-fit items-center gap-1 rounded-full border-4 border-orange-500/30 bg-orange-600 py-0.5 pl-0.5 pr-3 text-xs">
              <div className="rounded-full bg-[#fcfdff] px-2 py-1 text-xs font-medium text-black">
                Get In Touch
              </div>
              <p className="inline-block text-xs text-white sm:text-sm">
                Let&apos;s build something great together
              </p>
            </div>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="text-4xl leading-[100%] text-white sm:text-5xl xl:text-6xl whitespace-nowrap"
          >
            <span className="text-white">Start Your </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-semibold text-transparent">
              Next Project
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto max-w-xl text-sm text-zinc-400 sm:text-lg"
          >
            Have an idea, timeline, or budget in mind? Send a message — I usually
            reply within a few hours.
          </motion.p>
        </motion.div>

        {/* Contact body */}
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-10">
          {/* Contact methods */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="space-y-3"
          >
            {contactMethods.map((method, index) => {
              const Icon = method.icon;
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.external ? "_blank" : undefined}
                  rel={method.external ? "noreferrer" : undefined}
                  variants={fadeUp}
                  custom={index + 3}
                  className={cn(
                    "group flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm transition-all duration-300",
                    method.accent
                  )}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-orange-500/20 bg-orange-500/10 text-orange-400 transition-colors group-hover:bg-orange-500/20">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <small className="mb-0.5 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-zinc-500">
                      {method.label}
                    </small>
                    <span className="block truncate text-sm font-medium text-zinc-100 sm:text-base">
                      {method.value}
                    </span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 shrink-0 text-zinc-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-400" />
                </motion.a>
              );
            })}

            <motion.div
              variants={fadeUp}
              custom={7}
              className="mt-6 rounded-xl border border-white/10 bg-white/[0.02] p-5 backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-500">
                Response time
              </p>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">
                Most messages get a reply the same day. For urgent work, WhatsApp
                is the fastest way to reach me.
              </p>
            </motion.div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            onSubmit={handleSubmit}
            className="rounded-xl border border-white/10 bg-zinc-950/70 p-6 shadow-[0_24px_80px_-32px_rgba(255,140,0,0.25)] backdrop-blur-md sm:p-8"
          >
            <motion.div variants={fadeUp} custom={3} className="space-y-1">
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                Send a message
              </h3>
              <p className="text-sm text-zinc-400">
                Fill in the details — submitting opens WhatsApp with your message
                pre-filled.
              </p>
            </motion.div>

            <div className="mt-6 space-y-4">
              <motion.div variants={fadeUp} custom={4} className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-zinc-200"
                >
                  Your name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={5} className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-zinc-200"
                >
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={6} className="space-y-2">
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-zinc-200"
                >
                  Project details
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell me about your project, timeline and budget..."
                  value={form.message}
                  onChange={handleChange}
                  className="w-full resize-y rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-500 focus:border-orange-500/50 focus:ring-2 focus:ring-orange-500/20"
                />
              </motion.div>

              <motion.div variants={fadeUp} custom={7}>
                <Button type="submit" size="lg" className="mt-2 w-full gap-2">
                  {sent ? (
                    <>Opening WhatsApp...</>
                  ) : (
                    <>
                      Send message
                      <Send className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </Button>
                <p className="mt-3 text-center text-xs text-zinc-500">
                  No backend yet — your message opens in WhatsApp for a quick reply.
                </p>
              </motion.div>
            </div>
          </motion.form>
        </div>

        {/* Integrated footer */}
        <motion.footer
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          custom={8}
          className="mt-16 border-t border-white/10 pt-8 md:mt-20"
        >
          <div className="flex flex-col items-center justify-between gap-6 text-center sm:flex-row sm:text-left">
            <a
              href="#home"
              className="font-[family-name:var(--heading)] text-xl font-bold text-white transition-colors hover:text-orange-400"
            >
              {/* {profile.firstName} */}
              {/* <span className="text-orange-400">.</span> */}
            </a>

            <p className="text-sm text-zinc-500">
              © {year} {profile.name}. Built with React &amp; lots of coffee.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 sm:justify-end">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.03] px-3.5 py-2 text-sm font-medium text-zinc-300 transition-all hover:border-orange-500/30 hover:bg-orange-500/10 hover:text-orange-400"
                >
                  {label}
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
