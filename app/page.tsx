import { AnnouncementBar } from '@/components/announcement-bar'
import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesSection } from '@/components/features-section'
import { USPSection } from '@/components/usp-section'
import { IndustriesSection } from '@/components/industries-section'
import { ManufacturingStats } from '@/components/manufacturing-stats'
import { GasketProducts } from '@/components/gasket-products'
import ManufacturingCapabilities from '@/components/manufacturing-capabilities'
import IndustrialStuds from '@/components/industrial-studs'
import WhyChooseBCBento from '@/components/why-choose-bc-bento'
import ManufacturingProcess from '@/components/manufacturing-process'
import { StatsBanner } from '@/components/stats-banner'
import { FAQSection } from '@/components/faq-section'
import Certifications from '@/components/certifications'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <AnnouncementBar />
      <div className="relative">
        <div className="absolute top-0 left-0 right-0 z-50">
          <Navbar />
        </div>
        <HeroSection />
      </div>
      <FeaturesSection />
      <USPSection />
      <ManufacturingStats />
      <StatsBanner />
      <GasketProducts />
      <IndustrialStuds />
      <ManufacturingCapabilities />
      <Certifications />
      <IndustriesSection />
      <WhyChooseBCBento />
      <ManufacturingProcess />
      <FAQSection />
      <Footer />
    </>
  )
}
