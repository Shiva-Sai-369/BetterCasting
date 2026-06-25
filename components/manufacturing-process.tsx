"use client";

import React from "react";
import { Timeline } from "@/components/ui/timeline";
import {
  Clipboard,
  Package,
  Zap,
  CheckCircle,
  Beaker,
  Box,
  Headset,
} from "lucide-react";

export default function ManufacturingProcess() {
  const data = [
    {
      title: "Step 1",
      content: (
        <div className="space-y-2">
          <h4 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-3">
            <Clipboard className="h-5 w-5 text-[#00AADF] flex-shrink-0" />
            Requirement Analysis and Technical Consultation
          </h4>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We begin by understanding your specific application requirements, performance needs, and technical specifications through detailed consultation with your engineering team.
          </p>
        </div>
      ),
    },
    {
      title: "Step 2",
      content: (
        <div className="space-y-2">
          <h4 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-3">
            <Package className="h-5 w-5 text-[#00AADF] flex-shrink-0" />
            Material Selection Based on Application Needs
          </h4>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            We carefully select materials and alloys that provide optimal performance for your specific application, considering factors like pressure, temperature, and corrosion resistance.
          </p>
        </div>
      ),
    },
    {
      title: "Step 3",
      content: (
        <div className="space-y-2">
          <h4 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-3">
            <Zap className="h-5 w-5 text-[#00AADF] flex-shrink-0" />
            Precision Machining and Manufacturing
          </h4>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Using advanced CNC machinery and precision tools, we manufacture components to exact specifications, ensuring consistent quality and tight tolerances throughout production.
          </p>
        </div>
      ),
    },
    {
      title: "Step 4",
      content: (
        <div className="space-y-2">
          <h4 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-[#00AADF] flex-shrink-0" />
            Quality Inspection and Dimensional Verification
          </h4>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Every component undergoes rigorous quality inspection with dimensional verification and surface finish checks to ensure they meet international standards and customer specifications.
          </p>
        </div>
      ),
    },
    {
      title: "Step 5",
      content: (
        <div className="space-y-2">
          <h4 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-3">
            <Beaker className="h-5 w-5 text-[#00AADF] flex-shrink-0" />
            Performance Testing and Validation
          </h4>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Components are subjected to comprehensive performance testing including pressure tests, temperature cycling, and functional validation to ensure reliability under operating conditions.
          </p>
        </div>
      ),
    },
    {
      title: "Step 6",
      content: (
        <div className="space-y-2">
          <h4 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-3">
            <Box className="h-5 w-5 text-[#00AADF] flex-shrink-0" />
            Packaging and Safe Dispatch
          </h4>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Components are carefully packaged using protective materials and shipped using reliable logistics partners to ensure they arrive at your facility in perfect condition.
          </p>
        </div>
      ),
    },
    {
      title: "Step 7",
      content: (
        <div className="space-y-2">
          <h4 className="text-lg md:text-xl font-bold text-slate-900 flex items-center gap-3">
            <Headset className="h-5 w-5 text-[#00AADF] flex-shrink-0" />
            Ongoing Technical Support and Customer Assistance
          </h4>
          <p className="text-slate-600 text-sm md:text-base leading-relaxed">
            Our team provides continuous technical support to ensure optimal performance and assist with any questions or requirements after delivery.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-white via-slate-50 to-white py-8 md:py-12">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200/20 bg-[length:40px_40px] -z-10" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-[#00AADF]/5 rounded-full blur-3xl -z-10" />

      <div className="relative">
        <Timeline data={data} />
        
        {/* Closing statement */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 py-6 md:py-8 border-t border-slate-200">
          <p className="text-slate-700 text-sm md:text-base max-w-3xl leading-relaxed">
            This structured process helps ensure every product meets customer specifications and industry requirements, delivering components that perform reliably in the most demanding applications.
          </p>
        </div>
      </div>
    </section>
  );
}
