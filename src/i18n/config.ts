export const defaultLocale = 'en'
export const locales = ['en', 'pl'] as const
export type ValidLocale = (typeof locales)[number]
 
export function isValidLocale(locale: string): locale is ValidLocale {
  return locales.includes(locale as ValidLocale)
} 