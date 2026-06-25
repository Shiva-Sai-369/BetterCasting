export function HeroSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/cleanroom-bg.jpg"
        aria-hidden="true"
      >
        <source src="/bettercastings.mp4" type="video/mp4" />
        {/* Fallback image if video fails */}
      </video>

      {/* Top subtle dark tint so white nav items are legible */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  )
}
