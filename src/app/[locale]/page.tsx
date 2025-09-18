import type { Metadata } from 'next'
import HomePage from './home-client'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  return {
    title: 'Daniel Wilczak - Fullstack .NET Developer | Web & Mobile Applications',
    description: 'Experienced Fullstack .NET Developer specializing in .NET Framework, React, Vue.js, and React Native. Creating scalable web and mobile applications with modern technologies.',
    keywords: ['.NET Developer', 'React', 'Vue.js', 'Mobile Development', 'React Native', 'TypeScript', 'Web Development', 'C#', 'SQL Server'],
    authors: [{ name: 'Daniel Wilczak' }],
    creator: 'Daniel Wilczak',
    openGraph: {
      title: 'Daniel Wilczak - Fullstack .NET Developer',
      description: 'Creating scalable web and mobile applications with .NET, React, and Vue.js.',
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
      title: 'Daniel Wilczak - Fullstack .NET Developer',
      description: 'Creating scalable web and mobile applications with .NET and modern frameworks.',
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
