'use client'

import { useEffect, useRef, useState } from 'react'

export function AboutSection() {
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

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-32 px-8 md:px-16 bg-dark-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Section Label */}
        <div className={`mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-light">
            Our Heritage
          </p>
        </div>

        {/* Main Heading */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-cream font-light mb-6 leading-tight">
              The Art of Excellence
            </h2>
            <p className="text-cream/70 text-sm md:text-base leading-relaxed mb-4">
              MIVO represents a centuries-old tradition of craftsmanship and innovation. Each piece embodies our commitment to perfection, combining timeless elegance with contemporary vision.
            </p>
          </div>

          <div className={`space-y-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-cream/70 text-sm md:text-base leading-relaxed">
              Our atelier is home to master artisans who dedicate their lives to creating masterpieces. From concept to creation, every detail is meticulously crafted to ensure unparalleled quality.
            </p>
            <p className="text-cream/70 text-sm md:text-base leading-relaxed">
              We believe that luxury is not merely about owning something beautiful—it&apos;s about experiencing the profound connection between artistry, craftsmanship, and timeless elegance.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 md:my-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Values */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            {
              title: 'Heritage',
              description: 'Over 50 years of excellence in luxury craftsmanship',
            },
            {
              title: 'Artistry',
              description: 'Master craftsmen dedicated to perfecting their craft',
            },
            {
              title: 'Excellence',
              description: 'Uncompromising standards in every detail',
            },
          ].map((value, idx) => (
            <div key={idx} className="p-6 border border-gold/20 rounded-lg hover:border-gold/50 transition-colors duration-300">
              <h3 className="font-serif text-xl text-gold mb-3">{value.title}</h3>
              <p className="text-cream/60 text-sm leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
