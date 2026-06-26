"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ManufacturingProcess() {
  const data = [
    {
      step: "Step 1",
      title: "Requirement Analysis and Technical Consultation",
      description:
        "We begin by understanding your specific application requirements, performance needs, and technical specifications through detailed consultation with your engineering team.",
    },
    {
      step: "Step 2",
      title: "Material Selection Based on Application Needs",
      description:
        "We carefully select materials and alloys that provide optimal performance for your specific application, considering factors like pressure, temperature, and corrosion resistance.",
    },
    {
      step: "Step 3",
      title: "Precision Machining and Manufacturing",
      description:
        "Using advanced CNC machinery and precision tools, we manufacture components to exact specifications, ensuring consistent quality and tight tolerances throughout production.",
    },
    {
      step: "Step 4",
      title: "Quality Inspection and Dimensional Verification",
      description:
        "Every component undergoes rigorous quality inspection with dimensional verification and surface finish checks to ensure they meet international standards and customer specifications.",
    },
    {
      step: "Step 5",
      title: "Performance Testing and Validation",
      description:
        "Components are subjected to comprehensive performance testing including pressure tests, temperature cycling, and functional validation to ensure reliability under operating conditions.",
    },
    {
      step: "Step 6",
      title: "Packaging and Safe Dispatch",
      description:
        "Components are carefully packaged using protective materials and shipped using reliable logistics partners to ensure they arrive at your facility in perfect condition.",
    },
    {
      step: "Step 7",
      title: "Ongoing Technical Support and Customer Assistance",
      description:
        "Our team provides continuous technical support to ensure optimal performance and assist with any questions or requirements after delivery.",
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-slate-50 to-white py-16 md:py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200/20 bg-[length:40px_40px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Our Manufacturing Process
            </h2>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              To maintain superior quality standards, we follow a structured manufacturing approach that ensures every product meets customer specifications and industry requirements.
            </p>
          </motion.div>

          {/* Right - Timeline */}
          <div className="lg:col-span-8">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-slate-200" />

              {/* Timeline Items */}
              <div className="space-y-8">
                {data.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-10"
                  >
                    {/* Dot */}
                    <div className="absolute left-0 top-0 w-4 h-4 rounded-full bg-[#00AADF] border-4 border-white shadow-md" />

                    {/* Content */}
                    <div>
                      <div className="text-sm text-[#00AADF] font-semibold mb-1">
                        {item.step}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-slate-600 text-sm md:text-base leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-slate-700 text-sm md:text-base max-w-3xl leading-relaxed">
            This structured process helps ensure every product meets customer specifications and industry requirements, delivering components that perform reliably in the most demanding applications.
          </p>
        </div>
      </div>
    </section>
  );
}
