import type { Metadata } from 'next'
import ProjectsClient from './projects-client'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Projects - Daniel Wilczak | Web, Mobile & AI Development Portfolio',
    description: 'Explore my portfolio of web applications, mobile apps, and AI solutions. Featuring modern technologies like React, Next.js, React Native, and machine learning.',
    keywords: ['Portfolio', 'Web Development Projects', 'Mobile Apps', 'AI Solutions', 'React Projects', 'Next.js', 'Machine Learning'],
    openGraph: {
      title: 'Projects - Daniel Wilczak Portfolio',
      description: 'Discover innovative web, mobile, and AI projects built with cutting-edge technologies.',
      url: `https://danielwilczak.com/${locale}/projects`,
      siteName: 'Daniel Wilczak Portfolio',
      images: [
        {
          url: 'https://danielwilczak.com/og-projects.jpg',
          width: 1200,
          height: 630,
          alt: 'Daniel Wilczak Projects Portfolio',
        },
      ],
      locale: locale,
      type: 'website',
    },
  }
}
export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return <ProjectsClient locale={locale} />
}