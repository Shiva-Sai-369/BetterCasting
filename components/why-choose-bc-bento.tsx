"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const benefits = [
  {
    title: "Certified Materials",
    description:
      "High‑grade, specification‑certified materials selected for durability and long‑term performance",
    tag: "MATERIALS",
  },
  {
    title: "Precision Manufacturing",
    description:
      "Precision‑controlled manufacturing processes ensuring dimensional accuracy and repeatability",
    tag: "PROCESS",
  },
  {
    title: "Custom Solutions",
    description:
      "Customized product solutions tailored to unique operational requirements",
    tag: "SOLUTIONS",
  },
  {
    title: "Quality Assurance",
    description:
      "Stringent quality assurance protocols aligned with industry and customer standards",
    tag: "QUALITY",
  },
  {
    title: "On-Schedule Delivery",
    description:
      "Reliable, on‑schedule delivery performance supported by disciplined production planning",
    tag: "DELIVERY",
  },
  {
    title: "Full Compliance",
    description:
      "Fully compliant manufacturing practices backed by certified systems",
    tag: "COMPLIANCE",
  },
  {
    title: "Technical Support",
    description:
      "Technical support from experienced professionals with deep application expertise",
    tag: "SUPPORT",
  },
  {
    title: "Supply Chain",
    description:
      "Robust supply chain management ensuring continuity and traceability",
    tag: "LOGISTICS",
  },
  {
    title: "Proven Performance",
    description:
      "Consistent product performance proven across demanding service environments",
    tag: "PERFORMANCE",
  },
];

export default function WhyChooseBCBento() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative w-full bg-black py-16 md:py-20 px-4 md:px-6 overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Industries Choose Better Castings
          </h2>
          <p className="text-gray-400 text-base md:text-lg max-w-2xl leading-relaxed mb-8">
            Choosing the right Gasket & Studs Manufacturer is essential for operational safety and equipment reliability. Better Castings offers:
          </p>
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-8">
            Benefits of Working with Better Castings
          </h3>
          <div className="h-px bg-gradient-to-r from-gray-600 via-gray-700 to-transparent w-full mb-12" />
        </motion.div>

        {/* Bento Grid */}
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {benefits.map((benefit, i) => (
            <BentoCard
              key={benefit.title}
              benefit={benefit}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function BentoCard({
  benefit,
  index,
  isInView,
}: {
  benefit: (typeof benefits)[0];
  index: number;
  isInView: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative p-6 md:p-8 rounded-lg border border-gray-800 bg-black hover:border-gray-600 hover:bg-gray-950 transition-all duration-300 overflow-hidden cursor-default"
    >
      {/* Subtle top accent on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Content */}
      <div className="relative space-y-4">
        {/* Tag */}
        <div className="flex items-start justify-start">
          <span className="text-xs font-mono text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-widest">
            {benefit.tag}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-gray-100 transition-colors">
          {benefit.title}
        </h4>

        {/* Description */}
        <p className="text-sm md:text-base text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
          {benefit.description}
        </p>
      </div>

      {/* Left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-700 group-hover:bg-gray-500 transition-colors duration-300" />
    </motion.div>
  );
}
