"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionTitle } from "./section-title";

const testimonials = [
  {
    name: "Residential Client",
    text: "The finish was clean, modern, and professional. The windows and sliding door completely improved the look of the house.",
  },
  {
    name: "Business Owner",
    text: "Very reliable service. The shopfront looked sharp and professional, and the work was handled properly from start to finish.",
  },
  {
    name: "Property Manager",
    text: "Good workmanship and fast response when we needed repairs. Solid service and neat results.",
  },
];

export function TestimonialsSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="Client Feedback"
          title="What our clients say"
          description="Real feedback from homeowners, business owners, and property managers who trusted us with their projects."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded border border-slate-200 bg-white p-6 shadow-sm"
            >
              <Quote className="h-9 w-9 text-sky-600" />
              <p className="mt-5 text-sm leading-8 text-slate-600">
                {item.text}
              </p>
              <p className="mt-6 text-base font-bold text-slate-900">
                {item.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
