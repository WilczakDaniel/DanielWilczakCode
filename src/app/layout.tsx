import { Navbar } from "@/components/navigation/navbar";
import { Footer } from "@/components/navigation/footer";
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
  title: "Daniel Wilczak Code - Full Stack Developer",
  description: "Full Stack Developer specializing in web, mobile, and AI solutions. Creating innovative applications with modern technologies.",
  icons: {
    icon: "/logo-icon.png",
    shortcut: "/logo-icon.png",
    apple: "/logo-small.png",
  },
  openGraph: {
    title: "Daniel Wilczak Code - Full Stack Developer",
    description: "Full Stack Developer specializing in web, mobile, and AI solutions. Creating innovative applications with modern technologies.",
    url: "https://dwcode.pl",
    siteName: "Daniel Wilczak Code",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Daniel Wilczak Code",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Wilczak - Full Stack Developer",
    description: "Full Stack Developer specializing in web, mobile, and AI solutions. Creating innovative applications with modern technologies.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
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
