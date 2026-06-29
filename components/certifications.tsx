"use client";

import { LocationCard } from "@/components/ui/location-card";

const certifications = [
  {
    city: "ISO 9001:2015",
    address: "Quality Management System - International Organization for Standardization",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60",
  },
  {
    city: "API 6A",
    address: "Specification for Wellhead and Christmas Tree Equipment - American Petroleum Institute",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60",
  },
  {
    city: "ASME B16.5",
    address: "Pipe Flanges and Flanged Fittings - American Society of Mechanical Engineers",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60",
  },
  {
    city: "PED 2014/68/EU",
    address: "Pressure Equipment Directive - European Union Compliance",
    imageUrl: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=900&auto=format&fit=crop&q=60",
  },
];

export default function Certifications() {
  return (
    <section className="w-full bg-[#004DA0] py-16 md:py-20 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-white/70 mb-2">
            QUALITY & COMPLIANCE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Certifications
          </h2>
          <p className="text-lg text-white/90 max-w-3xl leading-relaxed">
            At Better Castings, quality, reliability, and compliance are at the core of everything we manufacture. Our certifications demonstrate our commitment to maintaining international quality standards, ensuring that every gasket, stud, nut, and industrial component meets stringent industry requirements.
          </p>
        </div>

        {/* Certifications Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{ perspective: "1000px" }}
        >
          {certifications.map((cert) => (
            <LocationCard
              key={cert.city}
              city={cert.city}
              address={cert.address}
              imageUrl={cert.imageUrl}
              directionsUrl=""
              className="h-72"
            />
          ))}
        </div>

        {/* Footer text */}
        <div className="mt-12 pt-12 border-t border-white/20">
          <p className="text-white/90 text-base leading-relaxed max-w-3xl">
            These internationally recognized certifications reflect our dedication to excellence and continuous improvement. We regularly audit and update our processes to maintain compliance with evolving standards and customer requirements.
          </p>
        </div>
      </div>
    </section>
  );
}
