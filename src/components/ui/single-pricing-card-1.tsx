import { Check, PlusIcon, ShieldCheckIcon } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "./badge";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import { BorderTrail } from "./border-trail";
import { pricing, profile } from "@/data";

const planBadges: Record<string, { label: string; variant: "default" | "secondary" | "outline" }> = {
  Basic: { label: "Starter", variant: "secondary" },
  Medium: { label: "Most Popular", variant: "default" },
  Premium: { label: "Full Stack", variant: "outline" },
};

function whatsappHref(planName: string, planPrice: string) {
  return `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
    `Hi Mohankumar! I'm interested in the ${planName} plan (${planPrice}).`
  )}`;
}

export function Pricing() {
  return (
    <section className="relative min-h-fit overflow-hidden bg-zinc-950 py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,140,0,0.08),transparent_55%)]" />

      <div id="pricing" className="relative mx-auto w-full max-w-6xl space-y-5 px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="mx-auto max-w-xl space-y-5"
        >
          <div className="flex justify-center">
            <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-1 font-mono text-sm text-orange-300">
              Simple Pricing
            </div>
          </div>
          <h2 className="mt-5 text-center text-2xl font-bold tracking-tighter text-white md:text-3xl lg:text-4xl whitespace-nowrap">
            <span className="text-white">Plans That </span>
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text font-semibold text-transparent">
              Fit Your Budget
            </span>
          </h2>
          <p className="mt-5 text-center text-sm text-zinc-400 md:text-base">
            Transparent starting prices for every stage of your project. Every
            plan is customisable — let&apos;s talk about exactly what you need.
          </p>
        </motion.div>

        <div className="relative">
          <div
            className={cn(
              "pointer-events-none absolute inset-0 z-0 size-full",
              "bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)]",
              "bg-[size:32px_32px]",
              "[mask-image:radial-gradient(ellipse_at_center,#09090b_10%,transparent)]"
            )}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="relative z-10 mx-auto w-full max-w-5xl space-y-4"
          >
            <div className="relative grid border border-white/10 bg-zinc-950 p-4 md:grid-cols-3">
              <PlusIcon className="absolute -top-3 -left-3 size-5 text-orange-400" />
              <PlusIcon className="absolute -top-3 -right-3 size-5 text-orange-400" />
              <PlusIcon className="absolute -bottom-3 -left-3 size-5 text-orange-400" />
              <PlusIcon className="absolute -right-3 -bottom-3 size-5 text-orange-400" />

              {pricing.map((plan, index) => {
                const badge = planBadges[plan.name];
                const isPopular = plan.popular;

                return (
                  <div
                    key={plan.name}
                    className={cn(
                      "relative w-full px-4 pt-5 pb-4",
                      index > 0 && "md:border-l md:border-white/10",
                      isPopular &&
                        "rounded-lg border border-orange-500/30 bg-white/[0.02] shadow-[0_20px_60px_-20px_rgba(255,140,0,0.25)]"
                    )}
                  >
                    {isPopular && (
                      <BorderTrail
                        className="bg-orange-400"
                        style={{
                          boxShadow:
                            "0px 0px 60px 30px rgb(255 140 0 / 35%), 0 0 100px 60px rgb(255 140 0 / 15%)",
                        }}
                        size={100}
                      />
                    )}

                    <div className="relative z-10 space-y-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-semibold leading-none text-white text-sm sm:text-base">
                          {plan.name}
                        </h3>
                        {badge && (
                          <Badge variant={badge.variant}>{badge.label}</Badge>
                        )}
                      </div>
                      <p className="text-sm text-zinc-400">{plan.description}</p>
                    </div>

                    <div className="relative z-10 mt-8 space-y-4">
                      <div className="flex flex-wrap items-end gap-1 text-zinc-400">
                        <span className="text-xl font-medium text-orange-400">
                          {plan.price}
                        </span>
                        <span className="pb-0.5 text-sm">/ {plan.period}</span>
                      </div>

                      <ul className="space-y-2 border-t border-white/10 pt-4">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-start gap-2 text-xs text-zinc-300 sm:text-sm"
                          >
                            <Check
                              className="mt-0.5 h-3.5 w-3.5 shrink-0 text-orange-400"
                              aria-hidden="true"
                            />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <Button
                        className="w-full"
                        variant={isPopular ? "default" : "outline"}
                        asChild
                      >
                        <a
                          href={whatsappHref(plan.name, plan.price)}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {plan.cta}
                        </a>
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-zinc-400">
              <ShieldCheckIcon className="size-4 shrink-0 text-orange-400" />
              <span>Transparent pricing with no hidden fees —</span>
              <a
                href="#contact"
                className="font-medium text-orange-400 underline-offset-4 hover:underline"
              >
                tell me about your project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
