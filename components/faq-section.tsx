"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionTitle } from "./section-title";

const faqs = [
  {
    question: "Do you work on both homes and business properties?",
    answer:
      "Yes. SD GLASS AND ALUMINIUM can handle residential and commercial projects including homes, offices, and shops.",
  },
  {
    question: "Can I contact you for repairs as well as new installations?",
    answer:
      "Yes. Repairs and maintenance are part of the service, including damaged glass, sliding door issues, and aluminium frame problems.",
  },
  {
    question: "Do you offer custom solutions?",
    answer:
      "Yes. Custom work can be planned based on the type of space and the look or function you need.",
  },
  {
    question: "How do I get started?",
    answer:
      "The quickest option is to call or WhatsApp 068 179 1378 to discuss your project and next steps.",
  },
];

function FAQItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <span className="text-base font-bold text-slate-900 sm:text-lg">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-500 transition ${open ? "rotate-180" : "rotate-0"}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ${open ? "grid-rows-[1fr] pt-4" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden text-sm leading-7 text-slate-600">
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FAQSection() {
  return (
    <section id="faq" className="py-20 sm:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          eyebrow="FAQ"
          title="Answers to common questions"
          description="Find quick answers to frequently asked questions about our services."
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
