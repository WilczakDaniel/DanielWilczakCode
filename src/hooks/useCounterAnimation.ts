'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

export function useCounterAnimation(end: number, duration: number = 1500) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  const startAnimation = useCallback(() => {
    if (hasAnimated) return

    setHasAnimated(true)
    let startTime: number | null = null
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = timestamp - startTime
      const percentage = Math.min(progress / duration, 1)

      // Smoother easing function (ease-out-cubic)
      const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3)
      const currentCount = Math.round(easeOutCubic(percentage) * end)

      setCount(currentCount)

      if (percentage < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [end, duration, hasAnimated])

  useEffect(() => {
    if (!elementRef.current) return

    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          startAnimation()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -50px 0px' }
    )

    observerRef.current.observe(elementRef.current)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [startAnimation, hasAnimated])

  return { count, elementRef }
}
