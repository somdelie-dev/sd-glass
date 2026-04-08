"use client";

import { motion } from "framer-motion";

const gallery = [
  "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1200&q=80",
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center rounded-full border border-sky-200 bg-sky-50 px-4 py-1 text-sm font-medium text-sky-700">
              About Us
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl text-balance">
              Professional service with a modern touch.
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              SD GLASS AND ALUMINIUM is focused on delivering clean, practical,
              and attractive glass and aluminium work. Whether it is a
              residential upgrade, a business shopfront, or repairs on existing
              installations, the goal is to deliver strong results that look
              professional and last.
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              We serve homes, offices, and commercial spaces with the same
              attention to detail and commitment to quality, making it easy for
              clients to get the results they need.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {["Homes", "Shops", "Offices", "Custom projects"].map((item) => (
                <div
                  key={item}
                  className="rounded border border-slate-200 bg-white px-5 py-4 font-medium text-slate-700 shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            <div className="overflow-hidden rounded shadow-lg">
              <img
                src={gallery[0]}
                alt="Glass and aluminium interior work"
                className="h-80 w-full object-cover"
              />
            </div>
            <div className="overflow-hidden rounded shadow-lg sm:mt-10">
              <img
                src={gallery[1]}
                alt="Modern door and window finishes"
                className="h-80 w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
