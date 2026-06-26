"use client";

import { Tabs } from "@/components/ui/tabs";
import { CheckCircle } from "lucide-react";

export default function IndustrialStuds() {
  const tabs = [
    {
      title: "Stud Sets and Fasteners",
      value: "studs",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-8 md:p-12 text-white bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Stud Sets and Fasteners
            </h3>
            <p className="text-slate-300 mb-8 leading-relaxed">
              Our fastening product range includes:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Studs Set</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">Nuts Only</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">B7 All Thread Studs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">B7 Tap End Studs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">B7 Combo Studs</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">L7 All Thread Studs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">L7 Tap End Studs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">L7 Combo Studs</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#00AADF] flex-shrink-0 mt-0.5" />
                  <span className="text-slate-200">2H Nuts</span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-slate-400 text-sm">
              These products are manufactured using premium-grade steel and undergo rigorous testing to ensure strength, reliability, and dimensional accuracy.
            </p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="relative w-full py-12 bg-gradient-to-b from-white to-slate-50">
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-200/30 bg-[length:40px_40px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Industrial Studs and Fastening Solutions
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            As an experienced Gasket & Studs Manufacturer, Better Castings also produces high-strength stud bolts and fastening products designed for demanding industrial environments.
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
