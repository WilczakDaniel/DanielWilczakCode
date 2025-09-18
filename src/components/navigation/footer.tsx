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
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/logo-icon.png"
                alt="DWC Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="font-bold text-lg">Daniel Wilczak</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              {t('footer.description')}
            </p>
            <div className="flex space-x-4">
              {navigation.social.map((item) => {
                const IconComponent = item.icon
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <IconComponent className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.navigation')}</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Projects */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.projects')}</h3>
            <ul className="space-y-2">
              {navigation.projects.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold">{t('footer.contact')}</h3>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                {t('footer.contact.ready')}
              </p>
              <a
                href="mailto:dwilczakcode@gmail.com"
                className="text-sm text-primary hover:underline"
              >
                {t('footer.contact.email')}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© {currentYear} {t('footer.copyright')}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>{t('footer.madeWith')}</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>{t('footer.madeWithTech')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}