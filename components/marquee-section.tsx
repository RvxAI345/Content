'use client'

import { useEffect, useRef, useState } from 'react'

export function MarqueeSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const marqueeText = 'ELEGANCE • CRAFTSMANSHIP • HERITAGE • EXCELLENCE • '

  return (
    <section ref={sectionRef} className="relative py-12 md:py-16 px-8 md:px-16 bg-dark overflow-hidden">
      <div className="max-w-full mx-auto">
        {/* Marquee Container */}
        <div className="overflow-hidden">
          <div className={`flex animate-marquee transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            {/* Duplicate text for seamless loop */}
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex-shrink-0">
                <p className="font-serif text-3xl md:text-5xl text-gold/40 font-light tracking-wider whitespace-nowrap">
                  {marqueeText}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Accent Line */}
        <div className="mt-8 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      </div>
    </section>
  )
}
