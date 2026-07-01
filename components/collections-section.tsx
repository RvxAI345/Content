'use client'

import { useEffect, useRef, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function CollectionsSection() {
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

  const collections = [
    {
      title: 'Timeless Elegance',
      description: 'Classic designs that transcend seasons',
      color: 'from-gold/20 to-dark-secondary',
    },
    {
      title: 'Contemporary Luxury',
      description: 'Modern aesthetics meets artisanal craft',
      color: 'from-dark-secondary to-gold/10',
    },
    {
      title: 'Heritage Icons',
      description: 'Signature pieces from our archive',
      color: 'from-gold/20 to-dark-secondary',
    },
  ]

  return (
    <section id="collections" ref={sectionRef} className="relative py-20 md:py-32 px-8 md:px-16 bg-dark">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-light mb-4">
            Curated Collections
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight">
            Discover Exquisite Collections
          </h2>
        </div>

        {/* Collections Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {collections.map((collection, idx) => (
            <div
              key={idx}
              className={`group relative h-80 rounded-lg overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500 cursor-pointer hover:shadow-lg hover:shadow-gold/20 ${idx === 1 ? 'md:translate-y-8' : ''}`}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${collection.color}`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
                <div>
                  <p className="text-gold/60 text-xs tracking-widest uppercase mb-2">
                    Collection
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl text-cream font-light">
                    {collection.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  <p className="text-cream/70 text-sm leading-relaxed">
                    {collection.description}
                  </p>
                  <div className="flex items-center gap-2 text-gold text-sm group-hover:gap-4 transition-all duration-300">
                    <span>Explore</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
