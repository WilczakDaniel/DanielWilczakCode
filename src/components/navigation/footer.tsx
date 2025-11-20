'use client'

import { useTranslation } from '@/i18n/useTranslation'
import Link from 'next/link'
import Image from 'next/image'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export function Footer() {
  const { t, locale } = useTranslation()

  const navigation = {
    main: [
      { name: t('navbar.home'), href: `/${locale}/` },
      { name: t('navbar.about'), href: `/${locale}/about` },
      { name: t('navbar.contact'), href: `/${locale}/contact` }
    ],
    projects: [
      { name: t('footer.projects.web'), href: `/${locale}/projects/web` },
      { name: t('footer.projects.mobile'), href: `/${locale}/projects/mobile` },
    ],
    social: [
      {
        name: 'GitHub',
        href: 'https://github.com/WilczakDaniel',
        icon: Github
      },
      {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/daniel-wilczak/',
        icon: Linkedin
      },
      {
        name: 'Email',
        href: 'mailto:dwilczakcode@gmail.com',
        icon: Mail
      }
    ]
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/DWCBlack.svg"
                alt="DWC Logo"
                width={80}
                height={44}
                className="w-auto h-7 sm:h-8 dark:hidden"
              />
              <Image
                src="/DWCWhite.svg"
                alt="DWC Logo"
                width={80}
                height={44}
                className="w-auto h-7 sm:h-8 hidden dark:block"
              />
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {navigation.social.map((item) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors p-1"
                  >
                    <span className="sr-only">{item.name}</span>
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={String(item.name)}>
                  <Link
                    href={item.href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">{t('footer.projects')}</h3>
            <ul className="space-y-2">
              {navigation.projects.map((item) => (
                <li key={String(item.name)}>
                  <Link
                    href={item.href}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-semibold text-sm sm:text-base">{t('footer.contact')}</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {t('footer.contact.ready')}
              </p>
              <a
                href="mailto:dwilczakcode@gmail.com"
                className="text-sm text-primary hover:underline break-all"
              >
                {t('footer.contact.email')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span>© {currentYear} {t('footer.copyright')}</span>
            </div>
            <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
              <span>{t('footer.madeWith')}</span>
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-red-500 fill-current" />
              <span>{t('footer.madeWithTech')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}