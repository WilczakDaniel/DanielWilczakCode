'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import { ProjectImage } from '@/components/ui/project-image'
import { ExternalLink, Smartphone, Monitor, Zap, Shield } from 'lucide-react'

export default function MobileProjectsPage() {
  const { t } = useTranslation()

  const mobileProjects = [
    {
      title: t('mobile.projects.pomoBeat.title'),
      description: t('mobile.projects.pomoBeat.description'),
      longDescription: t('mobile.projects.pomoBeat.longDescription'),
      tech: ['React Native', 'Expo', 'TypeScript', 'AsyncStorage', 'React Navigation', 'Notifications'],
      features: t('mobile.projects.pomoBeat.features') as unknown as string[],
      live: 'https://www.pomobeat.com',
      status: t('mobile.projects.pomoBeat.status'),
      category: t('mobile.projects.pomoBeat.category'),
      platform: 'iOS & Android',
      rating: 0,
      image: '/PomoBeat.png'
    }
  ]

  const skills = [
    { name: t('mobile.skills.reactNative'), icon: Smartphone, items: ['React Native', 'Expo', 'TypeScript', 'JavaScript', 'React Navigation'] },
    { name: t('mobile.skills.stateManagement'), icon: Shield, items: ['Redux', 'Context API', 'AsyncStorage', 'Realm', 'SQLite'] },
    { name: t('mobile.skills.backendIntegration'), icon: Zap, items: ['.NET Framework', 'REST API', 'Real-time Sync', 'Firebase', 'MongoDB'] },
    { name: t('mobile.skills.devTools'), icon: Monitor, items: ['Expo CLI', 'Xcode', 'Android Studio', 'EAS Build'] }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">

      {/* Header */}
      <div className="space-y-3 sm:space-y-4">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{t('mobile.title')}</h1>
        <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl">
          {t('mobile.iosAndroidDesc')} {t('mobile.projectsIntro')}
        </p>
      </div>

      {/* Skills Overview */}
      <section className="space-y-4 sm:space-y-6">
        <h2 className="text-xl sm:text-2xl font-semibold">{t('mobile.skillsTitle')}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div key={String(skill.name)} className="p-3 sm:p-4 border rounded-lg space-y-2 sm:space-y-3">
                <div className="flex items-center gap-3">
                  <IconComponent className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">{skill.name}</h3>
                </div>
                <ul className="text-sm text-muted-foreground space-y-1">
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
      <section className="space-y-8">
        <h2 className="text-2xl font-semibold">{t('mobile.applicationsTitle')}</h2>
        <div className="space-y-8">
          {mobileProjects.map((project, index) => (
            <div key={String(project.title)} className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } lg:flex`}>
              {/* Project Image */}
              <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 flex items-center justify-center overflow-hidden relative">
                <ProjectImage
                  image={project.image}
                  title={String(project.title)}
                  fallbackIcon={Smartphone}
                  className="h-16 w-16 text-primary"
                />
              </div>

              {/* Project Details */}
              <div className="lg:w-1/2 p-6 lg:p-8 space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-1 text-xs rounded-md font-medium ${
                    project.status === 'Completed'
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/20 dark:text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                  {/* <div className="flex items-center gap-2">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-muted-foreground">{project.rating}</span>
                  </div> */}
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="px-2 py-1 bg-muted rounded text-xs">{project.category}</span>
                    <span>•</span>
                    <span>{project.platform}</span>
                  </div>
                </div>

                <p className="text-muted-foreground">{project.longDescription}</p>

                <div className="space-y-3">
                  <h4 className="font-medium text-sm">{t('mobile.keyFeatures')}</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-sm">
                        <Shield className="h-3 w-3 text-green-500" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-sm">{t('mobile.technologies')}</h4>
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
                      {project.platform === 'iOS' ? 'App Store' : project.platform === 'Android' ? 'Play Store' : t('mobile.download')}
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