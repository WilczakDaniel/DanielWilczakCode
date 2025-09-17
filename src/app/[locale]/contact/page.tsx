'use client'

import { useTranslation } from '@/i18n/useTranslation'

export default function ContactPage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('contact.title')}</h1>
      <div className="prose dark:prose-invert">
        <p className="text-lg mb-6">
          {t('contact.intro')}
        </p>
        
        <div className="grid gap-6 md:grid-cols-2">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{t('contact.emailTitle')}</h2>
            <p className="mb-2">{t('contact.emailDesc')}</p>
            <a 
              href="mailto:contact@danielwilczak.com" 
              className="text-primary hover:underline"
            >
              contact@danielwilczak.com
            </a>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">{t('contact.socialTitle')}</h2>
            <div className="space-y-2">
              <a 
                href="https://github.com/danielwilczak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary hover:underline"
              >
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/danielwilczak" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-primary hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 