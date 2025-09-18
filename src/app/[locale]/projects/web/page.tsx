'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Github, ExternalLink, Code2, Database, Palette, Zap, Users, Shield } from 'lucide-react'

export default function WebProjectsPage() {
  const { t, locale } = useTranslation()

  const webProjects = [
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment processing, inventory management, and admin dashboard.',
      longDescription: 'A comprehensive e-commerce platform built with modern web technologies. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, order management, and admin dashboard for inventory control.',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      features: ['Payment Processing', 'Inventory Management', 'User Dashboard', 'Admin Panel', 'Responsive Design', 'SEO Optimized'],
      github: 'https://github.com/danielwilczak/ecommerce-platform',
      live: 'https://shop.danielwilczak.com',
      status: 'Completed',
      category: 'Full Stack'
    },
    {
      title: 'Task Management Dashboard',
      description: 'Collaborative project management tool with real-time updates and team collaboration features.',
      longDescription: 'A comprehensive task management solution designed for teams. Includes project creation, task assignment, progress tracking, real-time notifications, and collaborative features like comments and file sharing.',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'Material-UI'],
      features: ['Real-time Collaboration', 'Project Management', 'Task Assignment', 'Progress Tracking', 'Team Chat', 'File Sharing'],
      github: 'https://github.com/danielwilczak/task-dashboard',
      live: 'https://tasks.danielwilczak.com',
      status: 'In Progress',
      category: 'Full Stack'
    },
    {
      title: 'Personal Finance Tracker',
      description: 'Financial management application with expense tracking, budget planning, and analytics.',
      longDescription: 'A personal finance management tool that helps users track expenses, set budgets, and analyze spending patterns. Features include expense categorization, monthly reports, and financial goal tracking.',
      tech: ['Vue.js', 'Nuxt.js', 'Supabase', 'Chart.js', 'Pinia', 'Vuetify'],
      features: ['Expense Tracking', 'Budget Planning', 'Financial Analytics', 'Goal Setting', 'Data Visualization', 'Secure Authentication'],
      github: 'https://github.com/danielwilczak/finance-tracker',
      live: 'https://finance.danielwilczak.com',
      status: 'Completed',
      category: 'Frontend'
    },
    {
      title: 'Real Estate Listing Platform',
      description: 'Property listing website with advanced search, virtual tours, and agent management system.',
      longDescription: 'A modern real estate platform connecting buyers, sellers, and agents. Features property listings with high-quality images, virtual tour integration, advanced search filters, and agent profile management.',
      tech: ['Next.js', 'TypeScript', 'Sanity CMS', 'Mapbox', 'Cloudinary', 'Framer Motion'],
      features: ['Property Listings', 'Virtual Tours', 'Map Integration', 'Advanced Search', 'Agent Profiles', 'Contact Management'],
      github: 'https://github.com/danielwilczak/real-estate-platform',
      live: 'https://realestate.danielwilczak.com',
      status: 'Completed',
      category: 'Full Stack'
    }
  ]

  const skills = [
    { name: 'Frontend Development', icon: Palette, items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend Development', icon: Database, items: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL'] },
    { name: 'Performance Optimization', icon: Zap, items: ['Code Splitting', 'Lazy Loading', 'SEO', 'PWA', 'Core Web Vitals'] },
    { name: 'Collaboration', icon: Users, items: ['Git', 'Agile', 'Code Review', 'Documentation', 'Team Leadership'] }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-12">

      {/* Header */}
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t('web.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl">
          {t('web.modernDesc')} Here are some of my recent web development projects
          showcasing modern technologies and best practices.
        </p>
      </div>

      {/* Skills Overview */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Skills & Technologies</h2>
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
        <h2 className="text-2xl font-semibold">Recent Projects</h2>
        <div className="space-y-8">
          {webProjects.map((project, index) => (
            <div key={project.title} className={`border rounded-lg overflow-hidden hover:shadow-lg transition-all ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } lg:flex`}>
              {/* Project Image */}
              <div className="lg:w-1/2 aspect-video lg:aspect-auto bg-muted flex items-center justify-center">
                <Code2 className="h-16 w-16 text-muted-foreground" />
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
                  <span className="text-xs text-muted-foreground">{project.category}</span>
                </div>

                <h3 className="text-xl font-semibold">{project.title}</h3>
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