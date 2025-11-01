'use client'

import { LucideIcon } from 'lucide-react'

interface ProjectImageProps {
  image?: string
  title: string
  fallbackIcon: LucideIcon
  className?: string
}

export function ProjectImage({ image, title, fallbackIcon: FallbackIcon, className = '' }: ProjectImageProps) {
  if (!image) {
    return <FallbackIcon className={className} />
  }

  return (
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover"
    />
  )
}
