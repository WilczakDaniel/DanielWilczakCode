"use client"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { usePathname, useRouter } from 'next/navigation'
import * as React from "react"
import { ModeToggle } from "../theme/ModeToggle"
import { Button } from "@/components/ui/button"
import { Languages, Menu, X } from "lucide-react"

export function Navbar() {
  const { t, locale: currentLocale } = useTranslation()
  const locale = currentLocale || 'en'
  const router = useRouter()
  const pathname = usePathname()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const switchLocale = (newLocale: string) => {
    if (pathname.startsWith(`/${locale}`)) {
      const newPath = `/${newLocale}` + pathname.slice(locale.length + 1)
      router.push(newPath)
    }
    setIsMobileMenuOpen(false) // Close mobile menu after navigation
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const navigationItems = [
    { href: `/${locale}/`, label: t('navbar.home') },
    { href: `/${locale}/projects/web`, label: t('navbar.webProjects') },
    { href: `/${locale}/projects/mobile`, label: t('navbar.mobileProjects') },
    { href: `/${locale}/about`, label: t('navbar.about') },
    { href: `/${locale}/contact`, label: t('navbar.contact') },
  ]

  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo/Brand - Left Side */}
          <div className="flex items-center">
            <Link href={`/${locale}/`} className="flex items-center">
              <Image
                src="/DWCBlack.svg"
                alt="DWC Logo"
                width={100}
                height={55}
                priority
                className="w-auto h-8 md:h-10 dark:hidden"
              />
              <Image
                src="/DWCWhite.svg"
                alt="DWC Logo"
                width={100}
                height={55}
                priority
                className="w-auto h-8 md:h-10 hidden dark:block"
              />
            </Link>
          </div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        navigationMenuTriggerStyle(),
                        "text-sm lg:text-base font-medium px-3 lg:px-4 py-2 lg:py-3"
                      )}
                    >
                      {item.label}
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => switchLocale(locale === 'en' ? 'pl' : 'en')}
              className="h-9 px-3 font-medium hover:bg-accent/80 transition-colors"
            >
              <Languages className="h-4 w-4 mr-1" />
              <span className="text-sm font-semibold">
                {locale === 'en' ? 'PL' : 'EN'}
              </span>
            </Button>

            {/* Theme Toggle */}
            <ModeToggle />

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden h-9 w-9 p-0"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-background/95 backdrop-blur">
            <nav className="py-4 space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-4 py-3 text-base font-medium hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  onClick={closeMobileMenu}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </div>
  )
}

