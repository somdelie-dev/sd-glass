"use client";

import { motion } from "framer-motion";
import { SectionTitle } from "./section-title";

const processSteps = [
  {
    title: "Consultation",
    description:
      "Tell us what you need and we help you choose the right glass and aluminium solution.",
  },
  {
    title: "Measurement & Planning",
    description:
      "We assess the space properly so the final installation is neat, accurate, and professional.",
  },
  {
    title: "Installation",
    description:
      "Our team completes the work with attention to detail, clean finishing, and durable fitting.",
  },
  {
    title: "Final Handover",
    description:
      "We make sure the job is complete, functional, and ready for everyday use.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="How We Work"
          title="Simple, professional process"
          description="From first contact to final installation, we keep things clear and straightforward."
        />

        <div className="grid gap-6 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded bg-sky-600 text-lg font-black text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
