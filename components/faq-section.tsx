"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: 1,
    question: "What products does Better Castings manufacture?",
    answer:
      "Better Castings manufactures industrial gaskets, stud bolts, nuts, hammer unions, valve seats, slip dies, needle valves, fittings, and other industrial components.",
  },
  {
    id: 2,
    question: "What industries use your sealing products?",
    answer:
      "Our sealing products are used in oil & gas, petrochemical, power generation, marine, refinery, and heavy engineering industries.",
  },
  {
    id: 3,
    question: "Do you provide customized gasket solutions?",
    answer:
      "Yes. We manufacture customized gasket solutions based on application specifications and industry standards.",
  },
  {
    id: 4,
    question: "What are B7 studs used for?",
    answer:
      "B7 studs are commonly used in high-pressure and high-temperature industrial applications requiring strong fastening performance.",
  },
  {
    id: 5,
    question: "What quality standards do your products follow?",
    answer:
      "Our products are manufactured according to recognized industry standards and API 6A for Ring gaskets.",
  },
  {
    id: 6,
    question: "Can you handle bulk industrial orders?",
    answer:
      "Yes. Our manufacturing facilities are equipped to handle both small and large-volume industrial requirements.",
  },
  {
    id: 7,
    question: "Why are RTJ gaskets preferred in critical applications?",
    answer:
      "RTJ gaskets provide excellent sealing performance under extreme pressure and temperature conditions.",
  },
  {
    id: 8,
    question: "How can customers request a quotation?",
    answer:
      "Customers can contact our team with their specifications, quantities, and application requirements for a customized quotation.",
  },
];

function FAQItem({ item, isOpen, onToggle, filteredIndex }: { item: FAQItem; isOpen: boolean; onToggle: () => void; filteredIndex: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.3, delay: filteredIndex * 0.05 }}
      className="border border-slate-200 rounded-lg overflow-hidden bg-white hover:shadow-md transition-shadow"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-50 transition-colors group"
      >
        <h3 className="text-lg font-semibold text-slate-900 pr-4">{item.question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDown className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-t border-slate-200 bg-slate-50/50"
          >
            <p className="px-6 py-4 text-slate-700 leading-relaxed">{item.answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function FAQSection() {
  const [expandedId, setExpandedId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = useMemo(() => {
    return faqData.filter(
      (item) =>
        item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-slate-600">
            Find answers to common questions about our products and services
          </p>
        </motion.div>

        {/* Search Box */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-3 rounded-full border border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00AADF] focus:border-transparent transition-all shadow-sm"
            />
            <svg
              className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((item, index) => (
              <FAQItem
                key={item.id}
                item={item}
                isOpen={expandedId === item.id}
                onToggle={() => setExpandedId(expandedId === item.id ? null : item.id)}
                filteredIndex={index}
              />
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-slate-600 text-lg">No results found for "{searchTerm}"</p>
            </motion.div>
          )}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 mb-4">Didn't find your answer?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#00AADF] text-white font-semibold rounded-lg hover:bg-[#0078C8] transition-colors shadow-lg hover:shadow-xl"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
