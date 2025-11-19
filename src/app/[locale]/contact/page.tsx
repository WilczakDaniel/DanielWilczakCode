'use client'

import { useTranslation } from '@/i18n/useTranslation'
import { Mail } from 'lucide-react'

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




  return (
    <div className="min-h-[50vh] sm:min-h-[60vh] flex items-center justify-center w-full">
      <div className="max-w-5xl w-full mx-auto px-4 sm:px-6 space-y-6 sm:space-y-8">
        <section className="text-center space-y-3 sm:space-y-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight">{t('contact.title')}</h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
{t('contact.intro')}
          </p>
        </section>

        <section className="flex justify-center">
          <div className="max-w-sm w-full">
            {contactMethods.map((method) => {
              const IconComponent = method.icon
              return (
                <div key={method.title} className="p-4 sm:p-6 border rounded-lg text-center space-y-3 sm:space-y-4 hover:shadow-lg transition-shadow">
                  <div className="inline-flex p-2 sm:p-3 rounded-full bg-primary/10 text-primary">
                    <IconComponent className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-semibold text-sm sm:text-base">{method.title}</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">{method.description}</p>
                    {method.href === '#' ? (
                      <p className="font-medium">{method.value}</p>
                    ) : (
                      <a
                        href={method.href}
                        className="font-medium text-primary hover:underline block text-sm sm:text-base break-all"
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
      </div>
    </div>
  )
} 