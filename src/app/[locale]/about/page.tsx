'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import { Calendar, MapPin, Code, Award, Users, Zap, Github, Linkedin, Mail, Heart, AppWindowMac, CheckCircle } from 'lucide-react'

export default function AboutPage() {
  const { t } = useTranslation()

  const timeline = [
    {
      year: '07/2025 - Present',
      title: t('about.timeline.current.title'),
      company: t('about.timeline.current.company'),
      description: t('about.timeline.current.desc'),
      location: t('about.timeline.current.location'),
      current: true
    },
    {
      year: '03/2024 - Present',
      title: t('about.timeline.selfemployed.title'),
      company: t('about.timeline.selfemployed.company'),
      description: t('about.timeline.selfemployed.desc'),
      location: t('about.timeline.selfemployed.location'),
      current: true
    },
    {
      year: '12/2023 - 05/2025',
      title: t('about.timeline.smithing.title'),
      company: t('about.timeline.smithing.company'),
      description: t('about.timeline.smithing.desc'),
      location: t('about.timeline.smithing.location')
    },
    {
      year: '05/2022 - 07/2023',
      title: t('about.timeline.junior.title'),
      company: t('about.timeline.junior.company'),
      description: t('about.timeline.junior.desc'),
      location: t('about.timeline.junior.location')
    },
    {
      year: '2020 - 2024',
      title: t('about.timeline.education.title'),
      company: t('about.timeline.education.company'),
      description: t('about.timeline.education.desc'),
      location: t('about.timeline.education.location')
    }
  ]

  const skills = [
    {
      category: t('about.skills.backend'),
      icon: Zap,
      items: ['.NET Framework', 'C#', 'MVC', 'Entity Framework', 'SQL Server', 'REST API', 'Razor', 'Dapper']
    },
    {
      category: t('about.skills.frontend'),
      icon: Code,
      items: ['React', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap']
    },
    {
      category: t('about.skills.mobile'),
      icon: Users,
      items: ['React Native', 'Expo', 'iOS', 'Android', 'Cross-platform', 'JavaScript', 'Mobile UI/UX']
    },
    {
      category: t('about.skills.tools'),
      icon: Award,
      items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Realm', 'Git', 'Visual Studio', 'Azure', 'Docker']
    }
  ]


  const personalStats = [
    { icon: Award, metric: '3+', label: t('home.achievements.experience') },
    { icon: Users, metric: '15+', label: t('home.achievements.projects') },
    { icon: CheckCircle, metric: '3+', label: t('home.achievements.companies') },
    { icon: AppWindowMac, metric: '8+', label: t('about.stats.projects')}
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">{t('about.title')}</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('about.intro')} {t('about.intro.passion')}
            </p>
            {/* <p className="text-muted-foreground leading-relaxed">
              {t('about.intro.experience')}
            </p> */}
          </div>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg space-y-4">
              <h3 className="font-semibold">{t('about.quickFacts')}</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>{t('about.location')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>{t('about.experience')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>{t('about.passion')}</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://github.com/WilczakDaniel" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://linkedin.com/in/daniel-wilczak" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:danielmarekwilczak@gmail.com">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personal Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {personalStats.map((stat) => {
          const IconComponent = stat.icon
          return (
            <div key={stat.label} className="text-center space-y-3">
              <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary">
                <IconComponent className="h-6 w-6" />
              </div>
              <div className="space-y-1">
                <div className="text-2xl font-bold">{stat.metric}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </div>
          )
        })}
      </section>

      {/* Skills */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">{t('about.skillsTitle')}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skillGroup) => {
            const IconComponent = skillGroup.icon
            return (
              <div key={skillGroup.category} className="p-6 border rounded-lg space-y-4">
                <div className="flex items-center gap-3">
                  <IconComponent className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-sm bg-muted rounded-md font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Timeline */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">{t('about.experienceTitle')}</h2>
        <div className="space-y-8">
          {timeline.map((item, index) => (
            <div key={index} className="flex gap-6">
              <div className="flex flex-col items-center">
                {index !== timeline.length - 1 && (
                  <div className="w-px bg-border flex-1 mt-2" />
                )}
              </div>
              <div className="flex-1 pb-8">
                <div className="p-6 border rounded-lg space-y-3">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-semibold text-lg">{item.title}</h3>
                      <p className="text-primary font-medium">{item.company}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 text-xs rounded-md font-medium ${
                        item.current
                          ? 'bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {item.year}
                      </span>
                    </div>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {item.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
} 