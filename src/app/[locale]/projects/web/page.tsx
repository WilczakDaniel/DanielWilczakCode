'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import { ProjectImage } from '@/components/ui/project-image'
import { ExternalLink, Code2, Database, Palette, Zap, Users, Shield } from 'lucide-react'
import { useInViewAnimation } from '@/hooks/useInViewAnimation'

export default function WebProjectsPage() {
  const { t } = useTranslation()

  // Viewport animation for skills section
  const { isVisible: skillsVisible, elementRef: skillsRef } = useInViewAnimation(0.1)

  // Viewport animation for projects section
  const { isVisible: projectsVisible, elementRef: projectsRef } = useInViewAnimation(0.1)

  const webProjects = [
    {
      title: t('web.projects.periodicTable.title'),
      description: t('web.projects.periodicTable.description'),
      longDescription: t('web.projects.periodicTable.longDescription'),
      tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
      features: t('web.projects.periodicTable.features') as unknown as string[],
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
      features: t('web.projects.wolfPursuit.features') as unknown as string[],
      live: 'https://wolfpursuit.com',
      status: t('web.projects.wolfPursuit.status'),
      category: t('web.projects.wolfPursuit.category'),
      image: '/WolfPursuit.png'
    }
  ]

  const skills = [
    { name: t('web.skills.frontend'), icon: Palette, items: ['React', 'Next.js', 'Vue.js', 'Angular', 'TypeScript', 'Tailwind CSS'] },
    { name: t('web.skills.backend'), icon: Database, items: ['C#', 'ASP.NET', '.NET Framework', 'Entity Framework', 'REST API'] },
    { name: t('web.skills.database'), icon: Zap, items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Redis', 'Azure', 'Docker'] },
    { name: t('web.skills.practices'), icon: Users, items: ['Git', 'Agile Scrum', 'CI/CD', 'SOLID', 'DDD', 'Code Review'] }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">

      {/* Header */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{t('web.title')}</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
          {t('web.modernDesc')} {t('web.projectsIntro')}
        </p>
      </div>

      {/* Skills Overview */}
      <section className="space-y-4 sm:space-y-6" ref={skillsRef}>
        <h2 className="text-xl sm:text-2xl font-semibold">{t('web.skillsTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            const delayClass = index === 0 ? '' : index === 1 ? 'animate-delay-100' : index === 2 ? 'animate-delay-200' : 'animate-delay-300'
            return (
              <div
                key={String(skill.name)}
                className={`p-3 sm:p-4 border rounded-lg space-y-2 sm:space-y-3 ${skillsVisible ? `animate-slide-in-right ${delayClass}` : 'opacity-0'}`}
              >
                <div className="flex items-center gap-2 sm:gap-3">
                  <IconComponent className="h-4 w-4 sm:h-5 sm:w-5 text-[rgb(254,116,0)] dark:text-[rgb(124,208,248)]" />
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
      <section className="space-y-6 sm:space-y-8" ref={projectsRef}>
        <h2 className="text-xl sm:text-2xl font-semibold">{t('web.recentProjectsTitle')}</h2>
        <div className="space-y-6 sm:space-y-8">
          {webProjects.map((project, index) => {
            const isEven = index % 2 === 0
            const animationClass = isEven ? 'animate-slide-in-left' : 'animate-slide-in-right'
            const delayClass = index > 0 ? 'animate-delay-200' : ''
            return (
            <div key={String(project.title)} className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } lg:flex ${projectsVisible ? `${animationClass} ${delayClass}` : 'opacity-0'}`}>
              {/* Project Image */}
              <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-muted flex items-center justify-center overflow-hidden relative">
                <ProjectImage
                  image={project.image}
                  title={String(project.title)}
                  fallbackIcon={Code2}
                  className="h-12 w-12 sm:h-16 sm:w-16 text-[rgb(254,116,0)] dark:text-[rgb(124,208,248)]"
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
                  <h4 className="font-medium text-sm">{t('web.keyFeatures')}</h4>
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
                  <h4 className="font-medium text-sm">{t('web.technologies')}</h4>
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
                      {t('web.liveDemo')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </section>
    </div>
  )
} 