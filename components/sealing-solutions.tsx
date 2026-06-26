"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function SealingSolutions() {
  return (
    <section className="relative w-full py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg w-full h-96">
              <img
                src="/cleanroom-bg.jpg"
                alt="Better Castings Manufacturing Facility"
                className="w-full h-full object-contain"
              />
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Sealing Solutions & Sealing Products for Critical Industrial Applications
            </h2>

            <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-6">
              As a leading manufacturer of industrial sealing products, we understand that every application requires superior leak prevention and long-term reliability. Therefore, our sealing solutions are engineered to perform under extreme pressure, temperature, and corrosive environments.
            </p>

            <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
              Our focus is not just on how products look—but on how they work, perform, and deliver value over time.
            </p>

            <button className="inline-flex items-center gap-2 bg-[#00AADF] hover:bg-[#0099d6] text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl">
              Learn More
              <ArrowRight size={18} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
