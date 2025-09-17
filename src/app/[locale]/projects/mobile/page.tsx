'use client'
import { useTranslation } from '@/i18n/useTranslation'

export default function MobileProjectsPage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('mobile.title')}</h1>
      <div className="grid gap-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{t('mobile.iosAndroidTitle')}</h2>
          <p className="mb-4">
            {t('mobile.iosAndroidDesc')}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">{t('mobile.iosTitle')}</h3>
              <ul className="list-disc pl-4">
                <li>{t('mobile.ios1')}</li>
                <li>{t('mobile.ios2')}</li>
                <li>{t('mobile.ios3')}</li>
                <li>{t('mobile.ios4')}</li>
              </ul>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">{t('mobile.androidTitle')}</h3>
              <ul className="list-disc pl-4">
                <li>{t('mobile.android1')}</li>
                <li>{t('mobile.android2')}</li>
                <li>{t('mobile.android3')}</li>
                <li>{t('mobile.android4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 