'use client'

import { useState } from 'react'
import { useTranslation } from '@/i18n/useTranslation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import Link from 'next/link'
import { Mail, Phone, MapPin, Clock, Github, Linkedin, Send, MessageCircle, CheckCircle } from 'lucide-react'

export default function ContactPage() {
  const { t, locale } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: ''
      })
    }, 3000)
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      description: 'Send me an email anytime',
      value: 'contact@danielwilczak.com',
      href: 'mailto:contact@danielwilczak.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      description: 'Call me during business hours',
      value: '+48 123 456 789',
      href: 'tel:+48123456789'
    },
    {
      icon: MapPin,
      title: 'Location',
      description: 'Based in Poland',
      value: 'Warsaw, Poland',
      href: '#'
    },
    {
      icon: Clock,
      title: 'Response Time',
      description: 'I typically respond within',
      value: '24 hours',
      href: '#'
    }
  ]

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com/danielwilczak',
      username: '@danielwilczak'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com/in/danielwilczak',
      username: 'Daniel Wilczak'
    },
    {
      icon: MessageCircle,
      name: 'Discord',
      href: '#',
      username: 'danielwilczak#1234'
    }
  ]

  const projectTypes = [
    'Web Development',
    'Mobile App Development',
    'AI/ML Solution',
    'Full Stack Project',
    'Consulting',
    'Other'
  ]

  return (
    <div className="max-w-6xl mx-auto space-y-16">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">{t('contact.title')}</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          {t('contact.intro')} Let&apos;s discuss your project and bring your ideas to life.
        </p>
      </section>

      {/* Contact Methods */}
      <section className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contactMethods.map((method) => {
          const IconComponent = method.icon
          return (
            <div key={method.title} className="p-6 border rounded-lg text-center space-y-4 hover:shadow-lg transition-shadow">
              <div className="inline-flex p-3 rounded-full bg-primary/10 text-primary">
                <IconComponent className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold">{method.title}</h3>
                <p className="text-sm text-muted-foreground">{method.description}</p>
                {method.href === '#' ? (
                  <p className="font-medium">{method.value}</p>
                ) : (
                  <a
                    href={method.href}
                    className="font-medium text-primary hover:underline block"
                  >
                    {method.value}
                  </a>
                )}
              </div>
            </div>
          )
        })}
      </section>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Send a Message</h2>
            <p className="text-muted-foreground">
              Fill out the form below and I&apos;ll get back to you as soon as possible.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 border border-green-200 bg-green-50 dark:bg-green-950/20 rounded-lg text-center space-y-4">
              <CheckCircle className="h-12 w-12 text-green-500 mx-auto" />
              <h3 className="text-lg font-semibold text-green-800 dark:text-green-400">
                Message Sent Successfully!
              </h3>
              <p className="text-green-700 dark:text-green-300">
                Thank you for reaching out. I&apos;ll get back to you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject *</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="projectType">Project Type</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, timeline, budget, and any specific requirements..."
                  className="min-h-[120px]"
                  required
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full"
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </section>

        {/* Additional Information */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Let&apos;s Connect</h2>
            <p className="text-muted-foreground">
              I&apos;m always excited to hear about new projects and opportunities.
              Here are some additional ways to get in touch.
            </p>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Social Media</h3>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 border rounded-lg hover:bg-muted/50 transition-colors"
                  >
                    <IconComponent className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">{social.name}</div>
                      <div className="text-sm text-muted-foreground">{social.username}</div>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>

          {/* FAQ */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Frequently Asked</h3>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">What&apos;s your typical response time?</h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to all inquiries within 24 hours during business days.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">Do you work with international clients?</h4>
                <p className="text-sm text-muted-foreground">
                  Absolutely! I work with clients worldwide and am comfortable with different time zones.
                </p>
              </div>
              <div className="p-4 border rounded-lg">
                <h4 className="font-medium mb-2">What information should I include?</h4>
                <p className="text-sm text-muted-foreground">
                  Please include your project goals, timeline, budget range, and any specific requirements.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg">
            <h3 className="font-semibold mb-2">Ready to start your project?</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Check out my work to see if we&apos;re a good fit for your project.
            </p>
            <Button variant="outline" asChild>
              <Link href={`/${locale}/projects`}>
                View My Projects
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
} 