"use client";

import { HoverEffect } from "@/components/ui/card-hover-effect";

export default function IndustrialStuds() {
  const studProducts = [
    {
      title: "Studs Set",
      description:
        "Complete stud sets combining high-strength studs with precision-engineered fastening components for reliable assembly.",
      link: "#",
    },
    {
      title: "Nuts Only",
      description:
        "Premium-grade nuts manufactured to exact specifications for compatibility with our stud products.",
      link: "#",
    },
    {
      title: "B7 All Thread Studs",
      description:
        "Versatile all-thread studs in B7 grade for high-pressure and high-temperature applications.",
      link: "#",
    },
    {
      title: "B7 Tap End Studs",
      description:
        "B7 studs with threaded tap end design for secure fastening in critical industrial connections.",
      link: "#",
    },
    {
      title: "B7 Combo Studs",
      description:
        "Combination studs featuring both all-thread and tap-end capabilities in B7 grade material.",
      link: "#",
    },
    {
      title: "L7 All Thread Studs",
      description:
        "Extended-length L7 studs with all-thread design for specialized fastening requirements.",
      link: "#",
    },
    {
      title: "L7 Tap End Studs",
      description:
        "L7 grade tap end studs engineered for precision engagement and maximum holding power.",
      link: "#",
    },
    {
      title: "L7 Combo Studs",
      description:
        "Hybrid L7 studs combining all-thread and tap-end features for versatile applications.",
      link: "#",
    },
    {
      title: "2H Nuts",
      description:
        "Specialized 2H grade nuts designed for compatibility with heavy-duty stud applications.",
      link: "#",
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 bg-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-white/5 bg-[length:40px_40px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-10 md:mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Industrial Studs and Fastening Solutions
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mb-6">
            As an experienced Gasket & Studs Manufacturer, Better Castings also produces high-strength stud bolts and fastening products designed for demanding industrial environments.
          </p>
          
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
            Stud Sets and Fasteners
          </h3>
          <p className="text-base md:text-lg text-gray-300 max-w-3xl">
            Our fastening product range includes premium-grade steel studs and fasteners that undergo rigorous testing to ensure strength, reliability, and dimensional accuracy:
          </p>
        </div>

        {/* Hover Effect Cards */}
        <HoverEffect items={studProducts} />

        {/* Quality Statement */}
        <div className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-slate-700">
          <p className="text-gray-300 text-base md:text-lg max-w-3xl">
            These products are manufactured using premium-grade steel and undergo rigorous testing to ensure strength, reliability, and dimensional accuracy for the most demanding industrial applications.
          </p>
        </div>
      </div>
    </section>
  );
}
