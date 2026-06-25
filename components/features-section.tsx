import { Cog, Wrench, Building2 } from 'lucide-react'

const features = [
  {
    icon: Cog,
    title: 'Ring Type Joint Gaskets',
    description: 'High-pressure sealing solutions for oil and gas applications, manufactured to API 6A and ASME B16.20 standards.',
  },
  {
    icon: Wrench,
    title: 'Stud Bolt Assemblies',
    description: 'ASTM A193 B7 and L7 grade stud bolts with 2H heavy hex nuts, precision machined and heat treated for critical joints.',
  },
  {
    icon: Building2,
    title: 'In-House Manufacturing',
    description: 'Forging, casting, and machining — all under one roof. Zero outsourcing. 85,000 sq ft facility in Vijayawada, India.',
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-center text-4xl font-bold text-gray-900 mb-16">
          Your Manufacturing Partner in Sealing Solutions
        </h2>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center text-center group hover:border-t-2 hover:border-[#0078C8] pt-0 hover:pt-0 transition-all duration-200"
              >
                {/* Icon */}
                <div className="mb-6 p-4 rounded-lg">
                  <Icon className="w-12 h-12 text-[#0078C8]" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
