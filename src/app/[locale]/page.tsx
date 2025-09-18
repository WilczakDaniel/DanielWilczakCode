import type { Metadata } from 'next'
import HomePage from './home-client'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Daniel Wilczak - Full Stack Developer | Web, Mobile & AI Solutions',
    description: 'Experienced Full Stack Developer specializing in React, Next.js, mobile apps, and AI solutions. Creating innovative digital experiences that solve real-world problems.',
    keywords: ['Full Stack Developer', 'React', 'Next.js', 'Mobile Development', 'AI Solutions', 'TypeScript', 'Web Development'],
    authors: [{ name: 'Daniel Wilczak' }],
    creator: 'Daniel Wilczak',
    openGraph: {
      title: 'Daniel Wilczak - Full Stack Developer',
      description: 'Creating innovative web, mobile, and AI solutions with modern technologies.',
      url: `https://danielwilczak.com/${locale}`,
      siteName: 'Daniel Wilczak Portfolio',
      images: [
        {
          url: 'https://danielwilczak.com/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'Daniel Wilczak - Full Stack Developer',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Daniel Wilczak - Full Stack Developer',
      description: 'Creating innovative web, mobile, and AI solutions.',
      creator: '@danielwilczak',
      images: ['https://danielwilczak.com/og-image.jpg'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <HomePage locale={locale} />
}
