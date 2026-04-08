"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Clock3, ShieldCheck, Star } from "lucide-react";
import { SectionTitle } from "./section-title";

const reasons = [
  {
    icon: BadgeCheck,
    title: "Neat workmanship",
    text: "Careful fitting and clean finishing that improves the look of the space.",
  },
  {
    icon: Clock3,
    title: "Reliable service",
    text: "A business that values communication, timing, and customer satisfaction.",
  },
  {
    icon: ShieldCheck,
    title: "Durable materials",
    text: "Quality-focused glass and aluminium work designed for everyday use.",
  },
  {
    icon: Star,
    title: "Professional presentation",
    text: "Modern styling that suits homes, offices, and commercial spaces.",
  },
];

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-slate-900 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Why Choose Us"
          title="Built on trust and quality"
          description="We deliver professional glass and aluminium solutions with attention to detail, reliable service, and results that last."
          dark
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded border border-white/10 bg-white/5 p-6 shadow-lg backdrop-blur-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded bg-sky-500/15 text-sky-300">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
