# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Turbo (uses Next.js dev mode)
- `npm run build` - Build the application for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint to check code quality

## Project Architecture

This is a Next.js 15 application with TypeScript and internationalization support.

### Core Structure
- **App Router**: Uses Next.js 13+ app directory structure with file-based routing
- **Internationalization**: Implements custom i18n with locale-based routing (`[locale]` dynamic segments)
- **Theming**: Uses `next-themes` for dark/light mode switching
- **UI Components**: Built with Radix UI primitives and custom components

### Key Directories
- `src/app/[locale]/` - Internationalized pages (supports 'en' and 'pl' locales)
- `src/components/` - Reusable UI components
  - `src/components/ui/` - Base UI components (buttons, navigation, etc.)
  - `src/components/navigation/` - Navigation-specific components
  - `src/components/theme/` - Theme-related components
- `src/i18n/` - Internationalization system
  - `src/i18n/locales/` - Translation files (en.json, pl.json)
  - `src/i18n/useTranslation.ts` - Custom translation hook
- `src/lib/` - Utility functions and shared logic

### Technology Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI (@radix-ui/react-*)
- **Icons**: Lucide React
- **Fonts**: Geist (from Google Fonts)
- **Notifications**: Sonner

### Internationalization System
The app uses a custom i18n implementation:
- Routes are prefixed with locale (`/en/about`, `/pl/about`)
- Translation keys are accessed via `useTranslation()` hook
- Locale switching is handled in the navbar with URL updates
- Supported locales: 'en' (English), 'pl' (Polish)

### Path Aliases
- `@/*` maps to `./src/*` (configured in tsconfig.json)