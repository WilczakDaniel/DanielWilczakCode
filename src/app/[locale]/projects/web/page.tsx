'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import { ProjectImage } from '@/components/ui/project-image'
import Link from 'next/link'
import { ExternalLink, Code2, Database, Palette, Zap, Users, Shield } from 'lucide-react'

export default function WebProjectsPage() {
  const { t, locale } = useTranslation()

  const webProjects = [
    {
      title: t('web.projects.periodicTable.title'),
      description: t('web.projects.periodicTable.description'),
      longDescription: t('web.projects.periodicTable.longDescription'),
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      features: ['Interactive Table', 'Chemical Properties', 'Element Details', 'Responsive Design', 'Multilingual Support', 'Clean UI'],
      live: 'https://periodic-table-zeta-henna.vercel.app/pl',
      status: t('web.projects.periodicTable.status'),
      category: t('web.projects.periodicTable.category'),
      image: '/PeriodicTableOfElements.png'
    },
    {
      title: t('web.projects.wolfPursuit.title'),
      description: t('web.projects.wolfPursuit.description'),
      longDescription: t('web.projects.wolfPursuit.longDescription'),
      tech: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'React Hook Form', 'Zod'],
      features: ['Calendar & Events', 'Focus Sessions', 'Task Management', 'Habit Tracking', 'Note Taking', 'Sleep & Finance Tracking'],
      live: 'https://wolfpursuit.com',
      status: t('web.projects.wolfPursuit.status'),
      category: t('web.projects.wolfPursuit.category'),
      image: '/WolfPursuit.png'
    }
  ]

  const skills = [
    { name: 'Frontend Development', icon: Palette, items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend Development', icon: Database, items: ['C#', 'ASP.NET', '.NET Framework', 'Entity Framework', 'REST API'] },
    { name: 'Database & Cloud', icon: Zap, items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Azure', 'Docker'] },
    { name: 'Best Practices', icon: Users, items: ['Git', 'Agile Scrum', 'CI/CD', 'SOLID', 'DDD', 'Code Review'] }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">

      {/* Header */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{t('web.title')}</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
          {t('web.modernDesc')} Here are some of my recent web development projects
          showcasing modern technologies and best practices.
        </p>
      </div>

      {/* Skills Overview */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Skills & Technologies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div key={skill.name} className="p-3 sm:p-4 border rounded-lg space-y-2 sm:space-y-3">
                <div className="flex items-center gap-2 sm:gap-3">
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                  <h3 className="font-medium text-sm sm:text-base">{skill.name}</h3>
                </div>
                <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-current" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      </section>

      {/* Projects Grid */}
      <section className="space-y-6 sm:space-y-8">
        <h2 className="text-xl sm:text-2xl font-semibold">Recent Projects</h2>
        <div className="space-y-6 sm:space-y-8">
          {webProjects.map((project, index) => (
            <div key={project.title} className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } lg:flex`}>
              {/* Project Image */}
              <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-muted flex items-center justify-center overflow-hidden relative">
                <ProjectImage
                  image={project.image}
                  title={project.title}
                  fallbackIcon={Code2}
                  className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground"
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded-md font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                <p className="text-sm sm:text-base text-muted-foreground">{project.longDescription}</p>

                <div className="space-y-2 sm:space-y-3">
                  <h4 className="font-medium text-sm">Key Features:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs sm:text-sm">
                        <Shield className="h-3 w-3 text-green-500 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Technologies:</h4>
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
                </div>

                <div className="pt-4">
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

      {/* CTA */}
      <section className="text-center space-y-4 py-8">
        <h2 className="text-2xl font-semibold">Interested in My Work?</h2>
        <p className="text-muted-foreground">
          Let&apos;s discuss your next web development project.
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild>
            <Link href={`/${locale}/contact`}>
              Get In Touch
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={`/${locale}/projects`}>
              View All Projects
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
} 