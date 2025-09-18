'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Code, Smartphone, Brain, ArrowRight, Github, ExternalLink } from 'lucide-react'

interface ProjectsClientProps {
  locale: string
}

export default function ProjectsClient({ locale }: ProjectsClientProps) {
  const { t } = useTranslation()

  const projectCategories = [
    {
      icon: Code,
      title: t('web.title'),
      description: t('web.modernDesc'),
      href: `/${locale}/projects/web`,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50 dark:bg-blue-950/20',
      projects: t('projects.categories.web.examples')
    },
    {
      icon: Smartphone,
      title: t('mobile.title'),
      description: t('mobile.iosAndroidDesc'),
      href: `/${locale}/projects/mobile`,
      color: 'text-green-500',
      bgColor: 'bg-green-50 dark:bg-green-950/20',
      projects: t('projects.categories.mobile.examples')
    },
    {
      icon: Brain,
      title: t('ai.title'),
      description: t('ai.solutionsDesc'),
      href: `/${locale}/projects/ai`,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50 dark:bg-purple-950/20',
      projects: t('projects.categories.ai.examples')
    }
  ]

  const featuredProjects = [
    {
      title: t('projects.featured.portfolio.title'),
      description: t('projects.featured.portfolio.desc'),
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
      github: 'https://github.com/danielwilczak/portfolio',
      live: 'https://danielwilczak.com',
      image: '/projects/portfolio.png'
    },
    {
      title: t('projects.featured.tasks.title'),
      description: t('projects.featured.tasks.desc'),
      tech: ['React', 'Node.js', 'PostgreSQL', 'Socket.io'],
      github: 'https://github.com/danielwilczak/task-manager',
      live: 'https://tasks.danielwilczak.com',
      image: '/projects/task-manager.png'
    },
    {
      title: t('projects.featured.ai.title'),
      description: t('projects.featured.ai.desc'),
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      github: 'https://github.com/danielwilczak/ai-assistant',
      live: 'https://ai.danielwilczak.com',
      image: '/projects/ai-assistant.png'
    }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t('projects.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('projects.subtitle')}
        </p>
      </div>

      {/* Project Categories */}
      <section className="space-y-6">
        <h2 className="text-3xl font-semibold text-center">{t('projects.categories.title')}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {projectCategories.map((category) => {
            const IconComponent = category.icon
            return (
              <div
                key={category.title}
                className={`p-6 rounded-lg border transition-all hover:shadow-lg ${category.bgColor}`}
              >
                <div className="space-y-4">
                  <div className={`inline-flex p-3 rounded-lg ${category.color}`}>
                    <IconComponent className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-muted-foreground">{category.description}</p>

                  <div className="space-y-2">
                    <h4 className="font-medium text-sm">Recent Projects:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      {category.projects.map((project) => (
                        <li key={project} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-current opacity-60" />
                          {project}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button asChild className="w-full">
                    <Link href={category.href} className="flex items-center gap-2">
                      View All Projects
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-semibold">Featured Projects</h2>
          <p className="text-muted-foreground">Highlighted work that showcases my expertise</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {featuredProjects.map((project) => (
            <div key={project.title} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <Code className="h-16 w-16 text-muted-foreground" />
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

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

                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}