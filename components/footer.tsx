'use client'

import { useEffect, useRef, useState } from 'react'

export function Footer() {
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
    <footer ref={sectionRef} className="relative py-16 md:py-20 px-8 md:px-16 bg-dark border-t border-gold/20">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className={`grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold tracking-widest text-gold mb-4">MIVO</h3>
            <p className="text-cream/60 text-sm leading-relaxed">
              Luxury redefined through timeless craftsmanship and contemporary vision.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-semibold tracking-wider mb-4 text-sm">
              EXPLORE
            </h4>
            <ul className="space-y-2">
              {['Collections', 'About Us', 'Heritage', 'Contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-cream font-semibold tracking-wider mb-4 text-sm">
              LEGAL
            </h4>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Sitemap'].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-cream font-semibold tracking-wider mb-4 text-sm">
              FOLLOW
            </h4>
            <ul className="space-y-2">
              {['Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map((platform) => (
                <li key={platform}>
                  <a
                    href="#"
                    className="text-cream/60 hover:text-gold transition-colors duration-300 text-sm"
                  >
                    {platform}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent mb-8" />

        {/* Bottom Footer */}
        <div className={`flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-cream/50 text-xs tracking-wider">
            © 2024 MIVO. All rights reserved. Crafted with elegance.
          </p>
          <p className="text-cream/50 text-xs tracking-wider">
            Paris, France
          </p>
        </div>
      </div>
    </footer>
  )
}
