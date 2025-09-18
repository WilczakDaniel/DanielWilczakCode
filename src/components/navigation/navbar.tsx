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
import { usePathname, useRouter } from 'next/navigation'
import * as React from "react"
import { ModeToggle } from "../theme/ModeToggle"
import { Button } from "@/components/ui/button"
import { Languages } from "lucide-react"

export function Navbar() {
  const { t, locale: currentLocale } = useTranslation()
  const locale = currentLocale || 'en'
  const router = useRouter()
  const pathname = usePathname()

  const switchLocale = (newLocale: string) => {
    if (pathname.startsWith(`/${locale}`)) {
      const newPath = `/${newLocale}` + pathname.slice(locale.length + 1)
      router.push(newPath)
    }
  }

  return (
    <div className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full flex justify-center">
        <div className="flex items-center gap-8">
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link href={`/${locale}/`} className={cn(navigationMenuTriggerStyle(), "text-lg font-medium px-8 py-5")}>
                  {t('navbar.home')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/${locale}/projects/web`} className={cn(navigationMenuTriggerStyle(), "text-lg font-medium px-8 py-5")}>
                  Web Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/${locale}/projects/mobile`} className={cn(navigationMenuTriggerStyle(), "text-lg font-medium px-8 py-5")}>
                  Mobile Projects
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/${locale}/about`} className={cn(navigationMenuTriggerStyle(), "text-lg font-medium px-8 py-5")}>
                  {t('navbar.about')}
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href={`/${locale}/contact`} className={cn(navigationMenuTriggerStyle(), "text-lg font-medium px-8 py-5")}>
                  {t('navbar.contact')}
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3">
            {/* Language Switcher */}
            <Button
              variant="ghost"
              size="default"
              onClick={() => switchLocale(locale === 'en' ? 'pl' : 'en')}
              className="h-12 px-5 font-medium hover:bg-accent/80 transition-colors"
            >
              <Languages className="h-5 w-5 mr-2" />
              <span className="text-base font-semibold">
                {locale === 'en' ? 'PL' : 'EN'}
              </span>
            </Button>

            {/* Theme Toggle */}
            <ModeToggle />
          </div>
        </div>
      </div>
    </div>
  )
}

