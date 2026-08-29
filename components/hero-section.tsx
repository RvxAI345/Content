'use client'

import { useEffect, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative w-full h-screen overflow-hidden bg-dark">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          className="w-full h-full object-cover"
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/HeroSection-WxWKjocPcv16MIyNKOKXmYOTx3xJdX.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Header Navigation */}
      <header className={`absolute top-0 left-0 right-0 z-40 px-8 md:px-16 py-8 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <nav className="flex items-center justify-between max-w-7xl mx-auto w-full">
          <div className="text-2xl font-bold tracking-widest text-gold">MIVO</div>
          <div className="hidden md:flex gap-12 text-cream text-sm tracking-wider">
            <a href="#about" className="hover:text-gold transition-colors duration-300">
              ABOUT
            </a>
            <a href="#collections" className="hover:text-gold transition-colors duration-300">
              COLLECTIONS
            </a>
            <a href="#stats" className="hover:text-gold transition-colors duration-300">
              PRESTIGE
            </a>
            <a href="#contact" className="hover:text-gold transition-colors duration-300">
              CONTACT
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
        <div className={`text-center space-y-6 transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <p className="text-gold text-xs md:text-sm tracking-[0.3em] uppercase font-light">
            Welcome to Excellence
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-light tracking-tight">
            MIVO
          </h1>
          <p className="text-cream/80 text-sm md:text-base max-w-2xl mx-auto font-light tracking-wider">
            Where luxury meets artistry. Experience unparalleled elegance curated for the discerning.
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-30 transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
        <div className="flex flex-col items-center gap-3">
          <p className="text-gold/60 text-xs tracking-widest uppercase">Scroll</p>
          <ChevronDown className="w-5 h-5 text-gold/60 animate-bounce" />
        </div>
      </div>
    </section>
  )
}
