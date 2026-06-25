"use client";

import { Tabs } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export function GasketProducts() {
  const tabs = [
    {
      title: "Metallic & Semi-Metallic",
      value: "metallic",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 md:p-12 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Metallic & Semi-Metallic Gaskets
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Our gasket manufacturing division produces a wide range of metallic
              and semi-metallic sealing products, including:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Ring Type Joint (RTJ) Gaskets</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">R (Oval) Ring Gasket</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">R (Gasket Only)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">R (Octagonal) Ring Gasket</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">RX Ring Gasket</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">BX Ring Gasket</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Spiral Wound Gaskets</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">CG (Gasket with Outer Ring Only)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">GI (Gasket with Inner Ring Only)</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">CGI (Gasket with Inner and Outer Ring)</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-slate-400 text-sm">
              Each gasket is manufactured according to international standards to
              ensure excellent sealing performance in critical industrial systems.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Spiral Wound Gaskets",
      value: "spiral",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 md:p-12 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Spiral Wound Gaskets
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Spiral wound gaskets offer superior sealing performance and are engineered for challenging applications:
            </p>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-100 font-semibold">CG Gaskets</p>
                      <p className="text-slate-400 text-sm">Gasket with Outer Ring Only</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-100 font-semibold">GI Gaskets</p>
                      <p className="text-slate-400 text-sm">Gasket with Inner Ring Only</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-100 font-semibold">CGI Gaskets</p>
                      <p className="text-slate-400 text-sm">Gasket with Inner and Outer Ring</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-slate-100 font-semibold">Graphite Filled</p>
                      <p className="text-slate-400 text-sm">Enhanced temperature resistance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <p className="text-slate-300">
                Spiral wound gaskets provide excellent resilience, better recovery after
                compression, and superior performance across a wide range of temperatures
                and pressures, making them ideal for critical sealing applications.
              </p>
            </div>

            <p className="mt-6 text-slate-400 text-sm">
              Manufactured according to international standards for demanding industrial systems.
            </p>
          </div>
        </div>
      ),
    },
    {
      title: "Specialty Gaskets",
      value: "specialty",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 md:p-12 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Specialty Gaskets
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              We manufacture specialized gasket solutions for unique industrial applications:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-100 font-semibold">IX Gaskets</p>
                    <p className="text-slate-400 text-sm">Innovative design for extreme conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-100 font-semibold">Bonnet Gaskets</p>
                    <p className="text-slate-400 text-sm">Specialized valve bonnet sealing</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-100 font-semibold">Custom Gaskets</p>
                    <p className="text-slate-400 text-sm">Tailored solutions for specific requirements</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-slate-100 font-semibold">High-Performance Materials</p>
                    <p className="text-slate-400 text-sm">PTFE, elastomers, and composites</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-700">
              <h4 className="font-semibold text-slate-100 mb-4">Custom Solutions</h4>
              <p className="text-slate-300 leading-relaxed">
                Our engineering team works closely with clients to design and manufacture
                custom gasket solutions that meet specific application requirements, including
                unique geometries, material combinations, and performance specifications.
              </p>
            </div>

            <p className="mt-6 text-slate-400 text-sm">
              All specialty gaskets are manufactured to international standards with rigorous quality control.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Our Products
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Comprehensive range of industrial sealing solutions designed for demanding applications
          </p>
        </div>

        {/* Tabs Container */}
        <div className="relative w-full">
          <Tabs
            tabs={tabs}
            containerClassName="justify-start border-b border-slate-200 mb-6"
            tabClassName="text-base md:text-lg font-semibold text-slate-700 hover:text-slate-900 transition-colors"
            activeTabClassName="bg-[#00AADF]/10 border border-[#00AADF]"
            contentClassName="min-h-[350px] md:min-h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}
