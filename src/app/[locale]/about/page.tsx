'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, MapPin, Code, Award, Users, Zap, Github, Linkedin, Mail, BookOpen, Coffee, Heart } from 'lucide-react'

export default function AboutPage() {
  const { t, locale } = useTranslation()

  const timeline = [
    {
      year: '2024',
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovation Lab',
      description: 'Leading development teams in creating cutting-edge web and mobile applications. Specializing in AI integration and performance optimization.',
      location: 'Remote',
      current: true
    },
    {
      year: '2022',
      title: 'Full Stack Developer',
      company: 'Digital Solutions Inc.',
      description: 'Developed scalable web applications using modern technologies. Built mobile apps with React Native and implemented AI-powered features.',
      location: 'Warsaw, Poland'
    },
    {
      year: '2020',
      title: 'Frontend Developer',
      company: 'StartupTech',
      description: 'Created responsive web interfaces and improved user experience. Collaborated with design teams to implement pixel-perfect designs.',
      location: 'Krakow, Poland'
    },
    {
      year: '2019',
      title: 'Computer Science Graduate',
      company: 'University of Technology',
      description: 'Graduated with honors, specializing in software engineering and artificial intelligence. Thesis on machine learning applications.',
      location: 'Poland'
    }
  ]

  const skills = [
    {
      category: 'Frontend Development',
      icon: Code,
      items: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Sass', 'HTML5', 'CSS3']
    },
    {
      category: 'Backend Development',
      icon: Zap,
      items: ['Node.js', 'Python', 'Express.js', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis']
    },
    {
      category: 'Mobile Development',
      icon: Users,
      items: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Expo', 'iOS', 'Android', 'Cross-platform']
    },
    {
      category: 'AI & Data Science',
      icon: Award,
      items: ['Python', 'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Pandas', 'NumPy', 'Jupyter']
    }
  ]

  const achievements = [
    {
      title: 'AI Innovation Award',
      description: 'Recognized for developing an innovative AI-powered customer service solution',
      year: '2023'
    },
    {
      title: 'Open Source Contributor',
      description: 'Active contributor to popular open-source projects with 1000+ GitHub stars',
      year: '2022'
    },
    {
      title: 'Tech Conference Speaker',
      description: 'Spoke at React Warsaw about modern web development practices',
      year: '2022'
    },
    {
      title: 'Certified Solutions Architect',
      description: 'AWS Certified Solutions Architect with expertise in cloud infrastructure',
      year: '2021'
    }
  ]

  const personalStats = [
    { icon: Coffee, metric: '1000+', label: 'Cups of Coffee' },
    { icon: Code, metric: '50K+', label: 'Lines of Code' },
    { icon: Users, metric: '25+', label: 'Happy Clients' },
    { icon: BookOpen, metric: '100+', label: 'Books Read' }
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <section className="space-y-6">
        <h1 className="text-4xl font-bold tracking-tight">{t('about.title')}</h1>
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('about.intro')} I&apos;m passionate about creating innovative solutions that solve real-world problems
              and deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in software development, I&apos;ve had the privilege of working with
              startups and established companies to build scalable applications that serve thousands of users.
              My journey started with a curiosity about how things work, and it evolved into a passion for
              creating digital solutions that make a difference.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open source projects,
              or sharing knowledge with the developer community. I believe in continuous learning and staying
              updated with the latest trends in technology.
            </p>
          </div>
          <div className="space-y-6">
            <div className="p-6 border rounded-lg space-y-4">
              <h3 className="font-semibold">Quick Facts</h3>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Based in Poland</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span>5+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="h-4 w-4 text-red-500" />
                  <span>Passionate about AI & Web3</span>
                </div>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a href="https://github.com/danielwilczak" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="https://linkedin.com/in/danielwilczak" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a href="mailto:contact@danielwilczak.com">
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
                <div className={`w-4 h-4 rounded-full ${
                  item.current ? 'bg-primary' : 'bg-muted'
                } border-4 border-background shadow-lg`} />
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

      {/* Achievements */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold">Achievements & Recognition</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <div key={index} className="p-6 border rounded-lg space-y-3">
              <div className="flex items-start justify-between">
                <h3 className="font-semibold">{achievement.title}</h3>
                <span className="text-xs text-muted-foreground">{achievement.year}</span>
              </div>
              <p className="text-muted-foreground text-sm">{achievement.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl">
        <div className="text-center space-y-6">
          <h2 className="text-3xl font-bold">Let&apos;s Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            I&apos;m always interested in hearing about new projects and opportunities.
            Whether you need a website, mobile app, or AI solution, I&apos;d love to help bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={`/${locale}/contact`}>
                Start a Conversation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href={`/${locale}/projects`}>
                View My Work
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 