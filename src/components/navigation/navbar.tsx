"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu"
import { useTranslation } from '@/i18n/useTranslation'
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { usePathname, useRouter } from 'next/navigation'
import * as React from "react"
import { ModeToggle } from "../theme/ModeToggle"

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
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href={`/${locale}/`} className={cn(navigationMenuTriggerStyle(), "flex items-center gap-2 px-2")}>
            <Image
              src="/logo-small.png"
              alt="DWC Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="hidden sm:inline">{t('navbar.home')}</span>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Projects</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <Link
                  className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                  href={`/${locale}/`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Image
                      src="/logo-icon.png"
                      alt="DWC Logo"
                      width={40}
                      height={40}
                      className="w-10 h-10"
                    />
                    <div>
                      <div className="text-lg font-medium">Daniel Wilczak</div>
                      <p className="text-sm leading-tight text-muted-foreground">
                        Full Stack Developer
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
              <ListItem href={`/${locale}/projects/web`} title="Web Development">
                Modern web applications and websites
              </ListItem>
              <ListItem href={`/${locale}/projects/mobile`} title="Mobile Development">
                iOS and Android applications
              </ListItem>
              <ListItem href={`/${locale}/projects/ai`} title="AI Projects">
                Machine learning and AI solutions
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={`/${locale}/about`} className={navigationMenuTriggerStyle()}>
            {t('navbar.about')}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href={`/${locale}/contact`} className={navigationMenuTriggerStyle()}>
            {t('navbar.contact')}
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <button onClick={() => switchLocale(locale === 'en' ? 'pl' : 'en')} className={navigationMenuTriggerStyle()}>
            {t('navbar.language')}: {locale === 'en' ? 'PL' : 'EN'}
          </button>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <ModeToggle/>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

type ListItemProps = React.ComponentPropsWithoutRef<'a'> & { href: string, title: string }
const ListItem = React.forwardRef<HTMLAnchorElement, ListItemProps>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <Link
        ref={ref}
        className={cn(
          "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
          className
        )}
        href={href}
        {...props}
      >
        <div className="text-sm font-medium leading-none">{title}</div>
        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
          {children}
        </p>
      </Link>
    </li>
  )
})
ListItem.displayName = "ListItem"