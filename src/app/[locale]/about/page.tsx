'use client'
import { useTranslation } from '@/i18n/useTranslation'

export default function AboutPage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('about.title')}</h1>
      <div className="prose dark:prose-invert">
        <p className="text-lg mb-4">
          {t('about.intro')}
        </p>
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('about.skillsTitle')}</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>{t('about.skill1')}</li>
          <li>{t('about.skill2')}</li>
          <li>{t('about.skill3')}</li>
          <li>{t('about.skill4')}</li>
        </ul>
        <h2 className="text-2xl font-semibold mt-8 mb-4">{t('about.experienceTitle')}</h2>
        <p className="mb-4">
          {t('about.experience')}
        </p>
      </div>
    </div>
  )
} 