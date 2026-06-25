import { Check } from 'lucide-react'

export function USPSection() {
  const points = [
    'ISO 9001 + API 6A Certified Manufacturing',
    '25+ Years in Precision Sealing Solutions',
    'Exported to 50+ Countries Worldwide',
    'Full Traceability — Material to Dispatch',
  ]

  return (
    <section className="bg-[#0A0A0F] py-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div>
          {/* Label */}
          <p className="text-[#00AADF] uppercase text-sm font-semibold tracking-[0.2em] mb-4">
            Why Better Castings
          </p>

          {/* Heading */}
          <h2 className="text-white text-4xl font-bold mb-2">
            Zero Outsourcing.
          </h2>
          <h2 className="text-white text-4xl font-light mb-8">
            100% In-House Control.
          </h2>

          {/* USP Points */}
          <div className="flex flex-col gap-4 mb-8">
            {points.map((point) => (
              <div key={point} className="flex items-start gap-3">
                <Check className="w-6 h-6 text-[#00AADF] flex-shrink-0 mt-0.5" strokeWidth={3} />
                <span className="text-white text-base leading-relaxed">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Link */}
          <a
            href="#about"
            className="text-[#00AADF] font-medium hover:underline inline-flex items-center gap-2"
          >
            Learn More About Us →
          </a>
        </div>

        {/* Right: Background Image (place the provided image at /public/cleanroom-bg.jpg) */}
        <div className="relative w-full h-80 lg:h-96 rounded-xl overflow-hidden">
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: "url('/cleanroom-bg.jpg')" }}
            aria-hidden="true"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50" />
        </div>
      </div>
    </section>
  )
}
