'use client'
import { useTranslation } from '@/i18n/useTranslation'

export default function WebProjectsPage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('web.title')}</h1>
      <div className="grid gap-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{t('web.modernTitle')}</h2>
          <p className="mb-4">
            {t('web.modernDesc')}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">{t('web.frontendTitle')}</h3>
              <ul className="list-disc pl-4">
                <li>{t('web.frontend1')}</li>
                <li>{t('web.frontend2')}</li>
                <li>{t('web.frontend3')}</li>
                <li>{t('web.frontend4')}</li>
              </ul>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">{t('web.backendTitle')}</h3>
              <ul className="list-disc pl-4">
                <li>{t('web.backend1')}</li>
                <li>{t('web.backend2')}</li>
                <li>{t('web.backend3')}</li>
                <li>{t('web.backend4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 