"use client";

import { motion } from "framer-motion";
import { Phone, ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Header } from "./header";

const features = [
  "Professional workmanship",
  "Reliable service",
  "Residential & commercial projects",
  "Quality materials",
  "Clean modern finishes",
  "Responsive customer support",
];

const stats = [
  { value: "Quality", label: "Workmanship you can trust" },
  { value: "Modern", label: "Clean and stylish finishes" },
  { value: "Reliable", label: "Service that values your time" },
  { value: "Strong", label: "Built for long-term use" },
];

const gallery = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80",
];

export function HeroSection() {
  return (
    <section id="home" className="relative isolate">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(14,165,233,0.18),transparent_28%),radial-gradient(circle_at_left,rgba(56,189,248,0.12),transparent_32%),linear-gradient(to_bottom,#f0f9ff,white_45%)]" />
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-sky-400/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />

        <div className="grid items-center gap-14 py-10 md:py-16 lg:grid-cols-2 lg:py-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-4 py-2 text-sm font-medium text-sky-700 shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4" />
              Professional • Clean • Reliable
            </div>

            <h1 className="mt-6 text-4xl font-black leading-tight tracking-tight text-slate-900 sm:text-2xl lg:text-3xl xl:text-4xl text-balance">
              We build stylish, durable glass and aluminium spaces.
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              SD GLASS AND ALUMINIUM helps homes, offices, and shops with modern
              windows, doors, shopfronts, glass fitting, and repairs. The focus
              is simple: neat workmanship, strong materials, and a professional
              finish.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="tel:0681791378"
                className="inline-flex items-center justify-center gap-2 rounded bg-sky-600 px-6 py-4 text-base font-semibold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-700"
              >
                <Phone className="h-5 w-5" />
                Call: 068 179 1378
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded border border-slate-200 bg-white px-6 py-4 text-base font-semibold text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-700"
              >
                Get a Quote
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: 0.15 + index * 0.08 }}
                  className="flex items-center gap-3 rounded border border-white/70 bg-white/90 px-4 py-3 shadow-sm"
                >
                  <CheckCircle2 className="h-5 w-5 text-sky-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-3 rounded bg-gradient-to-br from-sky-300/30 to-sky-100/40 blur-2xl" />
            <div className="relative grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden rounded border border-white/60 bg-white shadow-2xl sm:translate-y-8">
                <img
                  src={gallery[0]}
                  alt="Modern glass installation"
                  className="h-72 w-full object-cover sm:h-[28rem]"
                />
              </div>
              <div className="grid gap-4">
                <div className="overflow-hidden rounded border border-white/60 bg-white shadow-xl">
                  <img
                    src={gallery[1]}
                    alt="Aluminium window design"
                    className="h-40 w-full object-cover sm:h-48"
                  />
                </div>
                <div className="rounded bg-slate-900 p-6 text-white shadow-xl">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300">
                    Why clients choose us
                  </p>
                  <h3 className="mt-3 text-2xl font-bold">
                    Built for quality and a neat finish.
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    We focus on strong materials, clean lines, and customer
                    satisfaction from start to finish.
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sky-300">
                    <ShieldCheck className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      Trusted workmanship
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-4 border-t border-slate-200 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[1.6rem] border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="text-2xl font-black text-sky-700">{item.value}</p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
