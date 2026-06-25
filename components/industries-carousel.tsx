"use client";

import React from "react";
import { 
  Droplets, 
  Zap, 
  Beaker, 
  Flame, 
  Anchor, 
  Atom, 
  Pickaxe, 
  Leaf, 
  Wind 
} from "lucide-react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function IndustriesCarousel() {
  const industries = [
    {
      quote: "Reliable sealing and fastening solutions for demanding energy operations.",
      name: "Oil & Gas",
      title: "Energy Sector",
      icon: <Droplets className="w-10 h-10" />,
    },
    {
      quote: "High-performance components for power plants and turbines.",
      name: "Power Generation",
      title: "Utilities",
      icon: <Zap className="w-10 h-10" />,
    },
    {
      quote: "Corrosion-resistant gaskets for chemical processing environments.",
      name: "Petrochemical",
      title: "Processing",
      icon: <Beaker className="w-10 h-10" />,
    },
    {
      quote: "Precision sealing for high-pressure refinery pipelines.",
      name: "Refinery",
      title: "Industrial",
      icon: <Flame className="w-10 h-10" />,
    },
    {
      quote: "Durable fasteners for offshore and marine applications.",
      name: "Marine",
      title: "Offshore",
      icon: <Anchor className="w-10 h-10" />,
    },
    {
      quote: "Certified components meeting strict nuclear safety standards.",
      name: "Nuclear",
      title: "Energy",
      icon: <Atom className="w-10 h-10" />,
    },
    {
      quote: "Industrial components designed for harsh mining environments.",
      name: "Mining",
      title: "Extraction",
      icon: <Pickaxe className="w-10 h-10" />,
    },
    {
      quote: "Reliable sealing for fertilizer production plants.",
      name: "Fertilizers",
      title: "Agriculture",
      icon: <Leaf className="w-10 h-10" />,
    },
    {
      quote: "Corrosion-resistant products for desalination systems.",
      name: "Water Desalination",
      title: "Water Treatment",
      icon: <Wind className="w-10 h-10" />,
    },
  ];

  return (
    <div className="relative w-full py-16">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-slate-50 -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AADF]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-full mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Industries We Serve
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            As a reliable Gasket & Studs Manufacturer, Better Castings supplies
            high-quality sealing solutions, stud bolts, nuts, and industrial
            components to a wide range of industries. Our products are designed
            to withstand demanding operating conditions while ensuring safety,
            efficiency, and long-term performance.
          </p>
        </div>

        {/* Infinite Carousel */}
        <InfiniteMovingCards
          items={industries}
          direction="right"
          speed="fast"
          pauseOnHover={true}
        />
      </div>
    </div>
  );
}
