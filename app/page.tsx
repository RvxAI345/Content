import { CustomCursor } from '@/components/custom-cursor'
import { HeroSection } from '@/components/hero-section'
import { AboutSection } from '@/components/about-section'
import { CollectionsSection } from '@/components/collections-section'
import { StatsSection } from '@/components/stats-section'
import { MarqueeSection } from '@/components/marquee-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="overflow-hidden">
      <CustomCursor />
      <HeroSection />
      <AboutSection />
      <CollectionsSection />
      <StatsSection />
      <MarqueeSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
