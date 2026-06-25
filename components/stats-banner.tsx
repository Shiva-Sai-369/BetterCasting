const stats = [
  { number: '25+', label: 'Years Experience' },
  { number: '50+', label: 'Countries Exported' },
  { number: '500+', label: 'Projects Delivered' },
  { number: '200+', label: 'Expert Team' },
]

export function StatsBanner() {
  return (
    <section className="bg-[#0078C8] py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.number}
              className="flex flex-col items-center text-center text-white"
            >
              {/* Number */}
              <div className="text-4xl font-black mb-2">
                {stat.number}
              </div>

              {/* Label */}
              <div className="text-xs uppercase tracking-wide opacity-80">
                {stat.label}
              </div>

              {/* Divider */}
              {idx < stats.length - 1 && (
                <div className="hidden md:block absolute right-0 h-12 w-px bg-white/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
