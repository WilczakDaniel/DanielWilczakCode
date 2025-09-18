'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import { Github, ExternalLink, Smartphone, Apple, Monitor, Zap, Shield, Star } from 'lucide-react'

export default function MobileProjectsPage() {
  const { t } = useTranslation()

  const mobileProjects = [
    {
      title: 'Fitness Tracker Pro',
      description: 'Cross-platform fitness application with workout tracking, nutrition monitoring, and social features.',
      longDescription: 'A comprehensive fitness application built with React Native. Features include workout planning, exercise tracking, nutrition logging, progress analytics, social challenges, and integration with wearable devices.',
      tech: ['React Native', 'TypeScript', 'Expo', 'Firebase', 'Redux Toolkit', 'React Navigation'],
      features: ['Workout Tracking', 'Nutrition Logging', 'Progress Analytics', 'Social Challenges', 'Wearable Integration', 'Offline Support'],
      github: 'https://github.com/danielwilczak/fitness-tracker-pro',
      live: 'https://apps.apple.com/app/fitness-tracker-pro',
      status: 'Completed',
      category: 'Cross-Platform',
      platform: 'iOS & Android',
      rating: 4.8
    },
    {
      title: 'Weather Forecast iOS',
      description: 'Beautiful native iOS weather app with detailed forecasts, radar maps, and weather alerts.',
      longDescription: 'A native iOS weather application built with SwiftUI. Features beautiful animations, detailed weather forecasts, interactive radar maps, severe weather alerts, and location-based notifications.',
      tech: ['Swift', 'SwiftUI', 'Core Location', 'MapKit', 'Core Data', 'WeatherKit'],
      features: ['Live Weather Data', 'Interactive Maps', 'Weather Alerts', 'Multiple Locations', 'Widget Support', 'Apple Watch App'],
      github: 'https://github.com/danielwilczak/weather-ios',
      live: 'https://apps.apple.com/app/weather-forecast-ios',
      status: 'Completed',
      category: 'Native iOS',
      platform: 'iOS',
      rating: 4.6
    },
    {
      title: 'Task Manager Android',
      description: 'Native Android productivity app with Material Design 3 and advanced task management features.',
      longDescription: 'A native Android task management application built with Jetpack Compose. Features project organization, task prioritization, collaboration tools, and seamless synchronization across devices.',
      tech: ['Kotlin', 'Jetpack Compose', 'Room Database', 'Hilt', 'Coroutines', 'Material 3'],
      features: ['Project Management', 'Task Prioritization', 'Team Collaboration', 'Offline Sync', 'Material Design 3', 'Widgets'],
      github: 'https://github.com/danielwilczak/task-manager-android',
      live: 'https://play.google.com/store/apps/details?id=com.danielwilczak.taskmanager',
      status: 'In Progress',
      category: 'Native Android',
      platform: 'Android',
      rating: 4.5
    },
    {
      title: 'Social Media Hub',
      description: 'Cross-platform social networking app with real-time messaging and content sharing.',
      longDescription: 'A social networking application built with Flutter. Features include user profiles, real-time messaging, photo/video sharing, stories, and advanced privacy controls.',
      tech: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'Cloud Storage', 'Push Notifications'],
      features: ['Real-time Messaging', 'Photo/Video Sharing', 'Stories Feature', 'User Profiles', 'Privacy Controls', 'Push Notifications'],
      github: 'https://github.com/danielwilczak/social-media-hub',
      live: 'https://socialhub.danielwilczak.com',
      status: 'In Progress',
      category: 'Cross-Platform',
      platform: 'iOS & Android',
      rating: 4.4
    }
  ]

  const skills = [
    { name: 'iOS Development', icon: Apple, items: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'CloudKit'] },
    { name: 'Android Development', icon: Monitor, items: ['Kotlin', 'Jetpack Compose', 'Room', 'Hilt', 'Material Design'] },
    { name: 'Cross-Platform', icon: Smartphone, items: ['React Native', 'Flutter', 'Expo', 'Ionic', 'Xamarin'] },
    { name: 'Performance & UX', icon: Zap, items: ['Optimization', 'Animation', 'Accessibility', 'Testing', 'App Store Guidelines'] }
  ]

  const achievements = [
    { metric: '50K+', label: 'Total Downloads' },
    { metric: '4.6★', label: 'Average Rating' },
    { metric: '8', label: 'Apps Published' },
    { metric: '99%', label: 'Crash-Free Rate' }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t('mobile.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          {t('mobile.iosAndroidDesc')} Here are some of my mobile applications
          that focus on user experience and performance across iOS and Android platforms.
        </p>
      </div>

      {/* Achievements */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {achievements.map((achievement) => (
          <div key={achievement.label} className="text-center space-y-2">
            <div className="text-3xl font-bold text-primary">{achievement.metric}</div>
            <div className="text-sm text-muted-foreground">{achievement.label}</div>
          </div>
        ))}
      </section>

      {/* Skills Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Mobile Development Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => {
            const IconComponent = skill.icon
            return (
              <div key={skill.name} className="p-4 border rounded-lg space-y-3">
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
        <h2 className="text-2xl font-semibold">Mobile Applications</h2>
        <div className="space-y-8">
          {mobileProjects.map((project, index) => (
            <div key={project.title} className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } lg:flex`}>
              {/* Project Image */}
              <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 flex items-center justify-center">
                <Smartphone className="h-16 w-16 text-primary" />
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
                  <div className="flex items-center gap-2">
                    <Star className="h-3 w-3 text-yellow-500 fill-current" />
                    <span className="text-xs text-muted-foreground">{project.rating}</span>
                  </div>
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
                  <h4 className="font-medium text-sm">Key Features:</h4>
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

                <div className="flex gap-3 pt-4">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      View Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      {project.platform === 'iOS' ? 'App Store' : project.platform === 'Android' ? 'Play Store' : 'Download'}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Development Process */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Mobile Development Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border rounded-lg space-y-3">
            <div className="text-primary font-semibold">1. Design & Prototype</div>
            <h3 className="font-medium">User-Centric Design</h3>
            <p className="text-sm text-muted-foreground">
              Creating intuitive interfaces with wireframes, prototypes, and user testing to ensure optimal user experience.
            </p>
          </div>
          <div className="p-6 border rounded-lg space-y-3">
            <div className="text-primary font-semibold">2. Development & Testing</div>
            <h3 className="font-medium">Quality Assurance</h3>
            <p className="text-sm text-muted-foreground">
              Implementing features with clean code, comprehensive testing, and performance optimization for both platforms.
            </p>
          </div>
          <div className="p-6 border rounded-lg space-y-3">
            <div className="text-primary font-semibold">3. Launch & Maintain</div>
            <h3 className="font-medium">App Store Success</h3>
            <p className="text-sm text-muted-foreground">
              Managing app store submissions, monitoring analytics, and providing ongoing updates and feature enhancements.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
} 