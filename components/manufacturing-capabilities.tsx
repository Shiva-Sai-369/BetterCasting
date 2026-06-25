"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import {
  Hammer,
  Square,
  Layers,
  Cog,
  Pipette,
  Wrench,
} from "lucide-react";

export default function ManufacturingCapabilities() {
  return (
    <section className="relative w-full py-12 md:py-16 bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AADF]/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-8 md:mb-10">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
            Industrial Components Manufacturing
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mb-4">
            Beyond sealing products and studs, Better Castings manufactures a variety of critical industrial components.
          </p>
          
          <h3 className="text-2xl font-semibold text-white mb-4">
            Our Industrial Product Range
          </h3>

          <p className="text-gray-300 max-w-3xl">
            Our manufacturing process combines advanced machining technology with stringent quality inspection procedures to deliver components that perform consistently in challenging operating conditions.
          </p>
        </div>

        {/* Bento Grid */}
        <BentoGrid className="max-w-6xl mx-auto">
          {items.map((item, i) => (
            <BentoGridItem
              key={i}
              title={item.title}
              description={item.description}
              header={item.header}
              icon={item.icon}
              className={i === 3 || i === 6 ? "md:col-span-2" : ""}
            />
          ))}
        </BentoGrid>
      </div>
    </section>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-lg bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
    <div className="w-12 h-12 rounded-lg bg-[#00AADF]/10 flex items-center justify-center">
      <div className="w-8 h-8 bg-gradient-to-br from-[#00AADF]/20 to-transparent rounded" />
    </div>
  </div>
);

const items = [
  {
    title: "Hammer Unions",
    description:
      "Quick-connect couplings designed for high-pressure applications and demanding industrial operations.",
    header: <Skeleton />,
    icon: <Hammer className="h-5 w-5 text-[#00AADF]" />,
  },
  {
    title: "Valve Seats",
    description:
      "Precision-engineered sealing surfaces for optimal valve performance and durability.",
    header: <Skeleton />,
    icon: <Square className="h-5 w-5 text-[#00AADF]" />,
  },
  {
    title: "Slip Dies",
    description:
      "Specialized components for wellhead applications and pipeline connections.",
    header: <Skeleton />,
    icon: <Layers className="h-5 w-5 text-[#00AADF]" />,
  },
  {
    title: "Valve Components",
    description:
      "Complete range of valve internals and external components manufactured to exacting standards for reliable operation.",
    header: <Skeleton />,
    icon: <Cog className="h-5 w-5 text-[#00AADF]" />,
  },
  {
    title: "Needle Valves",
    description:
      "Precision flow control components for applications requiring accurate metering and shutoff.",
    header: <Skeleton />,
    icon: <Pipette className="h-5 w-5 text-[#00AADF]" />,
  },
  {
    title: "Fittings",
    description:
      "Comprehensive range of connection components for fluid and gas systems.",
    header: <Skeleton />,
    icon: <Wrench className="h-5 w-5 text-[#00AADF]" />,
  },
];
