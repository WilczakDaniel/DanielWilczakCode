import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
import { StructuredData } from "@/components/structured-data";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://dwcode.pl"),
  title: {
    default: "Daniel Wilczak Code - Fullstack .NET Developer",
    template: "%s | Daniel Wilczak Code",
  },
  description: "Passionate Fullstack .NET Developer with 3 years of professional experience. Building scalable web and mobile applications using .NET, React, Next.js, and modern cloud technologies. Specializing in C#, ASP.NET, TypeScript, and React Native.",
  keywords: [
    "Fullstack Developer",
    ".NET Developer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "C#",
    "ASP.NET",
    "React Native",
    "Web Development",
    "Mobile Development",
    "Daniel Wilczak",
    "Software Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Daniel Wilczak", url: "https://dwcode.pl" }],
  creator: "Daniel Wilczak",
  publisher: "Daniel Wilczak",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/DWC.svg", type: "image/svg+xml" },
      { url: "/logo-icon.png", type: "image/png", sizes: "192x192" },
    ],
    shortcut: "/favicon.ico",
    apple: "/logo-small.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dwcode.pl",
    siteName: "Daniel Wilczak Code",
    title: "Daniel Wilczak Code - Fullstack .NET Developer",
    description: "Passionate Fullstack .NET Developer with 3 years of experience building scalable web and mobile applications. Specializing in .NET, React, Next.js, TypeScript, and modern cloud technologies.",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Daniel Wilczak Code - Fullstack .NET Developer",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Wilczak Code - Fullstack .NET Developer",
    description: "Passionate Fullstack .NET Developer with 3 years of experience. Building scalable web and mobile applications with .NET, React, and modern technologies.",
    creator: "@danielwilczak",
    images: {
      url: "/logo.png",
      alt: "Daniel Wilczak Code - Fullstack .NET Developer",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-8 flex-1">
              {children}
            </main>
            <Footer />
          </div>
          </ThemeProvider>
      </body>
    </html>
  );
}
