'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Mail, MapPin, Calendar } from 'lucide-react'

export default function ContactPage() {
  const { t } = useTranslation()

  const contactMethods = [
    {
      icon: Mail,
      title: t('contact.methods.email'),
      description: t('contact.methods.email.desc'),
      value: 'danielmarekwilczak@gmail.com',
      href: 'mailto:danielmarekwilczak@gmail.com'
    },
  ]

  const currentJob = {
    title: t('contact.currentJob.title'),
    company: t('contact.currentJob.company'),
    period: t('contact.currentJob.period'),
    location: t('contact.currentJob.location')
  }



  return (
    <div className="min-h-[1000] flex items-center justify-center w-full">
      <div className="max-w-5xl w-full mx-auto px-6 space-y-8">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">{t('contact.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
{t('contact.intro')}
          </p>
        </section>

        <section className="flex justify-center">
          <div className="max-w-sm w-full">
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
          </div>
        </section>

        <div className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-8">
            {/* FAQ */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-center">{t('contact.faq.title')}</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">{t('contact.faq.response.question')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.faq.response.answer')}
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">{t('contact.faq.international.question')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.faq.international.answer')}
                  </p>
                </div>
                <div className="p-4 border rounded-lg">
                  <h4 className="font-medium mb-2">{t('contact.faq.info.question')}</h4>
                  <p className="text-sm text-muted-foreground">
                    {t('contact.faq.info.answer')}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 