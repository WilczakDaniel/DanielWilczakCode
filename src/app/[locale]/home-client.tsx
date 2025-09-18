'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { ArrowRight, Code, Smartphone, Brain, Github, Linkedin, Mail, CheckCircle, Users, Zap, Award } from 'lucide-react'

interface HomePageProps {
  locale: string
}

export default function HomePage({ locale }: HomePageProps) {
  const { } = useTranslation()

  const skills = [
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern web applications with React, Next.js, and TypeScript',
      technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile apps for iOS and Android',
      technologies: ['React Native', 'Swift', 'Kotlin', 'Flutter', 'Expo']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by machine learning and AI',
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-learn']
    }
  ]

  const achievements = [
    { icon: Users, metric: '50+', label: 'Projects Completed' },
    { icon: Award, metric: '5+', label: 'Years Experience' },
    { icon: CheckCircle, metric: '99%', label: 'Client Satisfaction' },
    { icon: Zap, metric: '24/7', label: 'Support Available' }
  ]

  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment processing and inventory management.',
      tech: ['Next.js', 'TypeScript', 'Stripe'],
      link: `/${locale}/projects/web`
    },
    {
      title: 'Fitness Tracker App',
      description: 'Cross-platform mobile app for workout tracking and nutrition monitoring.',
      tech: ['React Native', 'Firebase', 'Expo'],
      link: `/${locale}/projects/mobile`
    },
    {
      title: 'AI Chatbot Assistant',
      description: 'Intelligent conversational AI with natural language processing.',
      tech: ['Python', 'TensorFlow', 'FastAPI'],
      link: `/${locale}/projects/ai`
    }
  ]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Daniel Wilczak',
    jobTitle: 'Full Stack Developer',
    description: 'Full Stack Developer passionate about creating innovative solutions that bridge the gap between design and technology.',
    url: `https://danielwilczak.com/${locale}`,
    image: 'https://danielwilczak.com/daniel-wilczak.jpg',
    email: 'contact@danielwilczak.com',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Warsaw',
      addressCountry: 'Poland'
    },
    sameAs: [
      'https://github.com/danielwilczak',
      'https://linkedin.com/in/danielwilczak',
      'https://twitter.com/danielwilczak'
    ],
    knowsAbout: [
      'Web Development',
      'Mobile Development',
      'Artificial Intelligence',
      'Machine Learning',
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Python'
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
                Hi, I&apos;m <span className="text-primary">Daniel Wilczak</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
                Full Stack Developer passionate about creating innovative solutions
                that bridge the gap between design and technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={`/${locale}/projects`} className="flex items-center gap-2">
                  View My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${locale}/contact`} className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Get In Touch
                </Link>
              </Button>
            </div>

            <div className="flex justify-center gap-6 pt-8">
              <a
                href="https://github.com/danielwilczak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/in/danielwilczak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@danielwilczak.com"
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
            <h2 className="text-3xl font-bold">What I Do</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I specialize in building end-to-end solutions across web, mobile, and AI technologies
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
            <h2 className="text-3xl font-bold">Featured Projects</h2>
            <p className="text-xl text-muted-foreground">
              A selection of my recent work across different technologies
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
                    View Project
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild size="lg">
              <Link href={`/${locale}/projects`}>
                View All Projects
              </Link>
            </Button>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl">
          <div className="text-center space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start Your Project?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let&apos;s work together to bring your ideas to life with modern technology and exceptional user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href={`/${locale}/contact`}>
                  Start a Project
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href={`/${locale}/about`}>
                  Learn More About Me
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}