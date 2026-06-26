"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-black">
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] -z-10" />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="inline-block text-xs font-semibold uppercase tracking-wider text-[#00AADF] mb-4">
                WHO WE ARE
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Gasket & Studs Manufacturer
            </h2>

            <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed mb-8">
              <p>
                Better Castings is a trusted <span className="font-semibold text-white">Gasket & Studs Manufacturer</span> delivering high-performance sealing and fastening solutions for industries worldwide. We specialize in manufacturing premium-quality gaskets, stud bolts, nuts, and industrial components that meet the demanding requirements of oil & gas, petrochemical, power generation, marine, and heavy engineering sectors.
              </p>
              
              <p>
                With <span className="font-semibold text-white">25+ years</span> of manufacturing expertise, advanced production facilities, and strict quality control standards, Better Castings provides reliable products designed for durability, safety, and operational efficiency. Whether you need standard components or customized industrial sealing solutions, our team ensures precision, consistency, and dependable performance.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">ISO 9001 + API 6A Certified Manufacturing</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">25+ Years in Precision Sealing Solutions</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Exported to 50+ Countries Worldwide</span>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">Full Traceability — Material to Dispatch</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Cleanroom Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl w-full h-screen">
              <img
                src="/image.png"
                alt="Better Castings Manufacturing Facility"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
