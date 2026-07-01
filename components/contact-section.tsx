'use client'

import { useEffect, useRef, useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})
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

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setSubmitSuccess(true)
    setFormData({ name: '', email: '', message: '' })
    setIsSubmitting(false)

    // Reset success message after 3 seconds
    setTimeout(() => setSubmitSuccess(false), 3000)
  }

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 md:py-32 px-8 md:px-16 bg-dark-secondary">
      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-gold text-xs tracking-[0.3em] uppercase font-light mb-4">
            Get In Touch
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-cream font-light leading-tight">
            Contact Our Team
          </h2>
          <p className="text-cream/60 text-sm md:text-base mt-6 max-w-xl mx-auto">
            Have questions? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
          </p>
        </div>

        {/* Form */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {submitSuccess && (
            <div className="mb-6 p-4 bg-gold/10 border border-gold/30 rounded-lg flex items-center gap-3 animate-fadeIn">
              <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
              <span className="text-cream text-sm">Thank you! We&apos;ll be in touch soon.</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-cream text-sm mb-2 tracking-wide">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-4 py-3 bg-dark/50 border rounded-lg text-cream placeholder-cream/30 transition-all duration-300 focus:outline-none focus:border-gold ${
                  errors.name ? 'border-red-500' : 'border-gold/20 hover:border-gold/40 focus:border-gold'
                }`}
                placeholder="Your name"
                disabled={isSubmitting}
              />
              {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-cream text-sm mb-2 tracking-wide">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-4 py-3 bg-dark/50 border rounded-lg text-cream placeholder-cream/30 transition-all duration-300 focus:outline-none focus:border-gold ${
                  errors.email ? 'border-red-500' : 'border-gold/20 hover:border-gold/40 focus:border-gold'
                }`}
                placeholder="your@email.com"
                disabled={isSubmitting}
              />
              {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-cream text-sm mb-2 tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className={`w-full px-4 py-3 bg-dark/50 border rounded-lg text-cream placeholder-cream/30 transition-all duration-300 focus:outline-none focus:border-gold resize-none h-32 ${
                  errors.message ? 'border-red-500' : 'border-gold/20 hover:border-gold/40 focus:border-gold'
                }`}
                placeholder="Your message here..."
                disabled={isSubmitting}
              />
              {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 px-6 bg-gold text-dark font-semibold tracking-wider rounded-lg hover:bg-gold-light transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
            >
              {isSubmitting ? (
                <>
                  <span className="animate-spin">⏳</span>
                  Sending...
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { label: 'Phone', value: '+1 (555) 123-4567' },
            { label: 'Email', value: 'hello@mivo.luxury' },
            { label: 'Address', value: 'Paris, France' },
          ].map((info, idx) => (
            <div key={idx}>
              <p className="text-gold/60 text-xs tracking-widest uppercase mb-2">
                {info.label}
              </p>
              <p className="text-cream font-light">{info.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
