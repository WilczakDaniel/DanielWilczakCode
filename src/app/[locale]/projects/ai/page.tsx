'use client'
import { useTranslation } from '@/i18n/useTranslation'

export default function AIProjectsPage() {
  const { t } = useTranslation()
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">{t('ai.title')}</h1>
      <div className="grid gap-8">
        <div className="p-6 border rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{t('ai.solutionsTitle')}</h2>
          <p className="mb-4">
            {t('ai.solutionsDesc')}
          </p>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">{t('ai.mlTitle')}</h3>
              <ul className="list-disc pl-4">
                <li>{t('ai.ml1')}</li>
                <li>{t('ai.ml2')}</li>
                <li>{t('ai.ml3')}</li>
                <li>{t('ai.ml4')}</li>
              </ul>
            </div>
            <div className="p-4 border rounded">
              <h3 className="font-semibold mb-2">{t('ai.appTitle')}</h3>
              <ul className="list-disc pl-4">
                <li>{t('ai.app1')}</li>
                <li>{t('ai.app2')}</li>
                <li>{t('ai.app3')}</li>
                <li>{t('ai.app4')}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 