"use client";

import { motion } from "framer-motion";
import {
  Home,
  Sparkles,
  Layers3,
  Building2,
  Wrench,
  Hammer,
} from "lucide-react";
import { SectionTitle } from "./section-title";

const services = [
  {
    title: "Aluminium Windows",
    description:
      "Modern, durable, and neatly finished aluminium window installations for residential and commercial spaces.",
    icon: Home,
  },
  {
    title: "Glass Installations",
    description:
      "Professional glass fitting for homes, offices, shops, and custom projects with clean workmanship.",
    icon: Sparkles,
  },
  {
    title: "Sliding Doors",
    description:
      "Elegant sliding door systems that improve movement, natural light, and the overall look of the space.",
    icon: Layers3,
  },
  {
    title: "Shopfronts",
    description:
      "Clean and professional glass and aluminium shopfront solutions made to create a strong first impression.",
    icon: Building2,
  },
  {
    title: "Repairs & Maintenance",
    description:
      "Fast help with damaged glass, faulty frames, stuck sliding systems, and general aluminium repairs.",
    icon: Wrench,
  },
  {
    title: "Custom Projects",
    description:
      "Tailored work for homes, offices, and special spaces where a standard solution is not enough.",
    icon: Hammer,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Our Services"
          title="Complete glass and aluminium solutions"
          description="From windows and doors to shopfronts and custom projects, we deliver quality installations and repairs for every space."
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group rounded border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded bg-sky-50 text-sky-600 transition group-hover:bg-sky-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
