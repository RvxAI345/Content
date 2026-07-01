'use client'

import { useEffect, useRef, useState } from 'react'

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.5 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let currentCount = 0
    const increment = target / (duration / 50)
    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(currentCount))
      }
    }, 50)

    return () => clearInterval(timer)
  }, [isVisible, target, duration])

  return <div ref={ref}>{count}</div>
}

export function StatsSection() {
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

  const stats = [
    { value: 50, label: 'Years of Heritage' },
    { value: 1000, label: 'Pieces Crafted' },
    { value: 15, label: 'Global Collections' },
    { value: 98, label: 'Client Satisfaction %' },
  ]

  return (
    <section id="stats" ref={sectionRef} className="relative py-20 md:py-32 px-8 md:px-16 bg-dark-secondary">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <div className={`mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-light mb-4">
            Our Legacy
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight">
            By The Numbers
          </h2>
        </div>

        {/* Stats Grid */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="text-center p-6 md:p-8 border-b-2 border-gold/20 hover:border-gold/50 transition-colors duration-300"
            >
              <div className="font-serif text-4xl md:text-5xl text-gold font-light mb-3">
                <CountUp target={stat.value} />
                {stat.value === 98 && <span>%</span>}
                {stat.value === 50 && <span>+</span>}
                {stat.value === 1000 && <span>+</span>}
                {stat.value === 15 && <span>+</span>}
              </div>
              <p className="text-cream/60 text-sm tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-16 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

        {/* Quote */}
        <div className={`text-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="font-serif text-2xl md:text-3xl text-cream/80 font-light italic max-w-3xl mx-auto leading-relaxed">
            {'"'}Luxury is not about quantity, but the quality of every moment and every creation.{'"'}
          </p>
          <p className="text-gold/60 text-xs tracking-widest uppercase mt-6">— MIVO</p>
        </div>
      </div>
    </section>
  )
}
