'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Code, Smartphone, Brain, Github, Linkedin, Mail, CheckCircle, TabletSmartphone, AppWindowMac, Award, Dock } from 'lucide-react'

interface HomePageProps {
  locale: string
}

export default function HomePage({ locale }: HomePageProps) {
  const { t } = useTranslation()

  const skills = [
    {
      icon: Code,
      title: t('home.skills.backend.title'),
      description: t('home.skills.backend.desc'),
      technologies: [t('home.skills.backend.tech1'), t('home.skills.backend.tech2'), t('home.skills.backend.tech3'), t('home.skills.backend.tech4'), t('home.skills.backend.tech5')]
    },
    {
      icon: Smartphone,
      title: t('home.skills.frontend.title'),
      description: t('home.skills.frontend.desc'),
      technologies: [t('home.skills.frontend.tech1'), t('home.skills.frontend.tech2'), t('home.skills.frontend.tech3'), t('home.skills.frontend.tech4'), t('home.skills.frontend.tech5')]
    },
    {
      icon: Brain,
      title: t('home.skills.mobile.title'),
      description: t('home.skills.mobile.desc'),
      technologies: [t('home.skills.mobile.tech1'), t('home.skills.mobile.tech2'), t('home.skills.mobile.tech3'), t('home.skills.mobile.tech4'), t('home.skills.mobile.tech5')]
    }
  ]

  const achievements = [
    { icon: Award, metric: '3+', label: t('home.achievements.experience') },
    { icon: CheckCircle, metric: '3+', label: t('home.achievements.companies') },
    { icon: AppWindowMac, metric: '15+', label: t('about.stats.projects')}
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Wilczak',
    jobTitle: 'Full Stack Developer',
    description: 'Fullstack .NET Developer with experience in web and mobile application development, specializing in .NET Framework, React, and Vue.js.',
    url: `https://danielwilczak.com/${locale}`,
    image: 'https://danielwilczak.com/daniel-wilczak.jpg',
    email: 'dwilczakcode@gmail.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cracow',
      addressCountry: 'Poland'
    },
    sameAs: [
      'https://github.com/WilczakDaniel',
      'https://linkedin.com/in/daniel-wilczak'
    ],
    knowsAbout: [
      'Web Development',
      'Mobile Development',
      '.NET Framework',
      'C# Programming',
      'React',
      'Vue.js',
      'Angular',
      'TypeScript',
      'SQL Server',
      'Entity Framework'
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="space-y-20">
        {/* Hero Section */}
        <section className="relative py-12 sm:py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
          <div className="relative max-w-6xl mx-auto text-center space-y-1 sm:space-y-1">
            <div className="flex justify-center mb-3 sm:mb-4">
              <Image
                src="/DWCBlack.svg"
                alt="DWC Logo"
                width={600}
                height={332}
                priority
                className="w-auto h-48 sm:h-64 md:h-80 dark:hidden"
              />
              <Image
                src="/DWCWhite.svg"
                alt="DWC Logo"
                width={600}
                height={332}
                priority
                className="w-auto h-48 sm:h-64 md:h-80 hidden dark:block"
              />
            </div>
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                {t('home.hero.greeting')} <span className="text-primary">{t('home.hero.name')}</span>
              </h1>
              <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {t('home.hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href={`/${locale}/projects/web`} className="flex items-center justify-center gap-2">
                  {t('home.hero.cta.web')}
                  <Dock className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href={`/${locale}/projects/mobile`} className="flex items-center justify-center gap-2">
                  {t('home.hero.cta.mobile')}
                  <TabletSmartphone className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <Link href={`/${locale}/contact`} className="flex items-center justify-center gap-2">
                  <Mail className="h-4 w-4" />
                  {t('home.hero.cta.contact')}
                </Link>
              </Button>
            </div>

            <div className="flex justify-center gap-4 sm:gap-6 pt-6 sm:pt-8">
              <a
                href="https://github.com/WilczakDaniel"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/daniel-wilczak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:dwilczakcode@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon
              return (
                <div key={String(achievement.label)} className="text-center space-y-2 sm:space-y-3">
                  <div className="inline-flex p-2 sm:p-3 rounded-full bg-primary/10 text-primary">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-2xl sm:text-3xl font-bold">{achievement.metric}</div>
                    <div className="text-xs sm:text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold">{t('home.skills.title')}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.skills.subtitle')}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {skills.map((skill) => {
              const IconComponent = skill.icon
              return (
                <div key={String(skill.title)} className="p-4 sm:p-6 border rounded-lg hover:shadow-lg transition-shadow space-y-3 sm:space-y-4">
                  <div className="inline-flex p-2 sm:p-3 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold">{skill.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={String(tech)}
                        className="px-2 py-1 text-xs bg-muted rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </div>
    </>
  )
}