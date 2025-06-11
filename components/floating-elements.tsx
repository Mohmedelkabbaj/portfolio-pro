"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-purple-500/10 rounded-full animate-float-slow"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-purple-600/20 rotate-45 animate-float-medium"></div>
      <div className="absolute bottom-40 left-20 w-12 h-12 bg-purple-400/15 rounded-full animate-float-fast"></div>
      <div className="absolute bottom-20 right-40 w-24 h-24 bg-purple-500/10 rotate-12 animate-float-slow"></div>
      <div className="absolute top-60 left-1/2 w-8 h-8 bg-purple-600/25 rounded-full animate-float-medium"></div>

      {/* 3D Cubes */}
      <div className="absolute top-32 right-10 w-14 h-14 animate-spin-slow">
        <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-purple-700/20 transform rotate-12 rounded-lg shadow-lg"></div>
      </div>
      <div className="absolute bottom-60 left-40 w-10 h-10 animate-spin-reverse">
        <div className="w-full h-full bg-gradient-to-br from-purple-400/15 to-purple-600/15 transform -rotate-12 rounded-lg shadow-lg"></div>
      </div>

      {/* Animated Lines */}
      <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-purple-500/30 to-transparent animate-pulse"></div>
      <div className="absolute bottom-0 right-1/3 w-px h-40 bg-gradient-to-t from-transparent via-purple-500/30 to-transparent animate-pulse delay-1000"></div>
    </div>
  )
}
