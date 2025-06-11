"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "fadeIn" | "slideInUp" | "zoomIn" | "rotateIn"
  delay?: number
}

export function AnimatedSection({ children, className = "", animation = "fadeInUp", delay = 0 }: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-1000 ease-out"

    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClass} opacity-0 translate-y-12 scale-95`
        case "fadeInLeft":
          return `${baseClass} opacity-0 -translate-x-12 scale-95`
        case "fadeInRight":
          return `${baseClass} opacity-0 translate-x-12 scale-95`
        case "fadeIn":
          return `${baseClass} opacity-0 scale-95`
        case "slideInUp":
          return `${baseClass} opacity-0 translate-y-20`
        case "zoomIn":
          return `${baseClass} opacity-0 scale-50`
        case "rotateIn":
          return `${baseClass} opacity-0 rotate-180 scale-50`
        default:
          return `${baseClass} opacity-0 translate-y-12 scale-95`
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`}>
      {children}
    </div>
  )
}
