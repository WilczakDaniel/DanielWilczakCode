'use client'
import { useParams } from 'next/navigation'
import { ValidLocale } from './config'
import en from './locales/en.json'
import pl from './locales/pl.json'

const translations: Record<ValidLocale, Record<string, string>> = {
  en,
  pl,
}

export function useTranslation() {
  const params = useParams()
  const locale = (params?.locale as ValidLocale) || 'en'
  const t = (key: string) => translations[locale][key] || key
  return { t, locale }
} 