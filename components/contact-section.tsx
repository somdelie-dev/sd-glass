"use client";

import { Phone, MessageCircle, MapPin, Send } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="pb-20 sm:pb-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded bg-gradient-to-r from-sky-600 via-sky-500 to-sky-700 p-8 text-white shadow-2xl sm:p-12 lg:p-14">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-100">
                Contact Us
              </p>
              <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl text-balance">
                Ready to start your glass or aluminium project?
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-sky-50/90">
                Get in touch today for a consultation. We&apos;re here to help
                with windows, doors, shopfronts, repairs, and custom projects.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-sky-100">Phone</p>
                      <a
                        href="tel:0681791378"
                        className="text-lg font-bold hover:underline"
                      >
                        068 179 1378
                      </a>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-sky-100">Fast Enquiries</p>
                      <p className="text-lg font-bold">Call or WhatsApp</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-[1.5rem] bg-white/10 p-5 backdrop-blur-sm sm:col-span-2">
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5" />
                    <div>
                      <p className="text-sm text-sky-100">Business</p>
                      <p className="text-lg font-bold">
                        SD GLASS AND ALUMINIUM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded bg-white p-6 text-slate-900 shadow-2xl sm:p-8">
              <div className="mb-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-700">
                  Quick Enquiry
                </p>
                <h3 className="mt-2 text-2xl font-black">
                  Request a call back
                </h3>
              </div>

              <form className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="h-12 rounded border border-slate-200 px-4 outline-none transition focus:border-sky-500"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="h-12 rounded border border-slate-200 px-4 outline-none transition focus:border-sky-500"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Service needed"
                  className="h-12 w-full rounded border border-slate-200 px-4 outline-none transition focus:border-sky-500"
                />
                <textarea
                  placeholder="Tell us about your project"
                  className="min-h-[140px] w-full rounded border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500"
                />
                <button
                  type="button"
                  className="inline-flex w-full items-center justify-center gap-2 rounded bg-sky-600 px-5 py-4 text-base font-semibold text-white transition hover:bg-sky-700"
                >
                  Send Enquiry
                  <Send className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
