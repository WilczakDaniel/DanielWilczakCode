'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Brain, Github, Linkedin, Mail, CheckCircle, Users, TabletSmartphone, AppWindowMac, Award, Dock } from 'lucide-react'

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
    { icon: Users, metric: '15+', label: t('home.achievements.projects') },
    { icon: CheckCircle, metric: '3+', label: t('home.achievements.companies') },
    { icon: AppWindowMac, metric: '8+', label: t('about.stats.projects')}
  ]

  const featuredProjects = [
    {
      title: t('home.projects.web.title'),
      description: t('home.projects.web.desc'),
      tech: ['.NET', 'React', 'SQL Server'],
      link: `/${locale}/projects/web`
    },
    {
      title: t('home.projects.mobile.title'),
      description: t('home.projects.mobile.desc'),
      tech: ['React Native', 'Vue.js', 'WebSockets'],
      link: `/${locale}/projects/mobile`
    },
    {
      title: t('home.projects.management.title'),
      description: t('home.projects.management.desc'),
      tech: ['.NET', 'Angular', 'Entity Framework'],
      link: `/${locale}/projects/web`
    }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Wilczak',
    jobTitle: 'Full Stack Developer',
    description: 'Fullstack .NET Developer with experience in web and mobile application development, specializing in .NET Framework, React, and Vue.js.',
    url: `https://danielwilczak.com/${locale}`,
    image: 'https://danielwilczak.com/daniel-wilczak.jpg',
    email: 'danielmarekwilczak@gmail.com',
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
        <section className="relative py-20 lg:py-32">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-3xl" />
          <div className="relative max-w-6xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                {t('home.hero.greeting')} <span className="text-primary">{t('home.hero.name')}</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                {t('home.hero.subtitle')}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={`/${locale}/projects/web`} className="flex items-center gap-2">
                  {t('home.hero.cta.web')}
                  <Dock className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" asChild>
                <Link href={`/${locale}/projects/mobile`} className="flex items-center gap-2">
                  {t('home.hero.cta.mobile')}
                  <TabletSmartphone className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${locale}/contact`} className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  {t('home.hero.cta.contact')}
                </Link>
              </Button>
            </div>

            <div className="flex justify-center gap-6 pt-8">
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
                href="mailto:danielmarekwilczak@gmail.com"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement) => {
              const IconComponent = achievement.icon
              return (
                <div key={achievement.label} className="text-center space-y-3">
                  <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl font-bold">{achievement.metric}</div>
                    <div className="text-sm text-muted-foreground">{achievement.label}</div>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{t('home.skills.title')}</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t('home.skills.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill) => {
              const IconComponent = skill.icon
              return (
                <div key={skill.title} className="p-6 border rounded-lg hover:shadow-lg transition-shadow space-y-4">
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary">
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
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

        {/* Featured Projects */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-bold">{t('home.projects.title')}</h2>
            <p className="text-xl text-muted-foreground">
              {t('home.projects.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.title} className="p-6 border rounded-lg hover:shadow-lg transition-shadow space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <Code className="h-12 w-12 text-muted-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-muted rounded-md font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <Button variant="outline" size="sm" asChild className="w-full">
                  <Link href={project.link}>
                    {t('home.projects.viewProject')}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}