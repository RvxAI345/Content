'use client'

import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorBlobRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = e.clientX + 'px'
        cursorRef.current.style.top = e.clientY + 'px'
      }

      if (cursorBlobRef.current) {
        cursorBlobRef.current.style.left = e.clientX - 15 + 'px'
        cursorBlobRef.current.style.top = e.clientY - 15 + 'px'
      }
    }

    const handleMouseEnterInteractive = (e: Event) => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('scale-150', 'opacity-60')
      }
    }

    const handleMouseLeaveInteractive = (e: Event) => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('scale-150', 'opacity-60')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const interactiveElements = document.querySelectorAll('a, button, [role="button"]')
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterInteractive)
      el.addEventListener('mouseleave', handleMouseLeaveInteractive)
    })

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterInteractive)
        el.removeEventListener('mouseleave', handleMouseLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-50 w-1 h-1 bg-gold rounded-full transition-all duration-200 ease-out"
      />
      <div
        ref={cursorBlobRef}
        className="pointer-events-none fixed z-40 w-8 h-8 rounded-full border border-gold/50 transition-all duration-300 ease-out"
      />
    </>
  )
}
