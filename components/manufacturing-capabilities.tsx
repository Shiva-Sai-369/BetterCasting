"use client";

import { Tabs } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export default function ManufacturingCapabilities() {
  const tabs = [
    {
      title: "Our Industrial Product Range",
      value: "products",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 md:p-12 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Our Industrial Product Range
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Hammer Unions</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Valve Seats</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Slip Dies</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Valve Components</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Needle Valves</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Fittings</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-slate-400 text-sm">
              Our manufacturing process combines advanced machining technology with stringent quality inspection procedures to deliver components that perform consistently in challenging operating conditions.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full py-12 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-200/30 bg-[length:40px_40px] -z-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#00AADF]/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3">
            Industrial Components Manufacturing
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            Beyond sealing products and studs, Better Castings manufactures a variety of critical industrial components.
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
