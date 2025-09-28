import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
// Performance optimizations are handled inline in the script tag below

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: {
    default: "DevSolutions - AI for Jewelry and SMBs",
    template: "%s | DevSolutions",
  },
  description: "Launch AI-powered solutions for jewelry businesses and SMBs in days, not months. Website development, software development, AI development, and JewelVision.",
  keywords: ["AI development", "jewelry software", "website development", "JewelVision", "SMB solutions"],
  authors: [{ name: "DevSolutions" }],
  creator: "DevSolutions",
  metadataBase: new URL("https://devsolutions.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://devsolutions.com",
    siteName: "DevSolutions",
    title: "DevSolutions - AI for Jewelry and SMBs",
    description: "Launch AI-powered solutions for jewelry businesses and SMBs in days, not months.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevSolutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DevSolutions - AI for Jewelry and SMBs",
    description: "Launch AI-powered solutions for jewelry businesses and SMBs in days, not months.",
    creator: "@devsolutions",
    images: ["/og-image.png"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (localStorage.theme === 'light' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: light)').matches)) {
                  document.documentElement.classList.remove('dark')
                } else {
                  document.documentElement.classList.add('dark')
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.className} min-h-screen bg-background font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
               <script
                 dangerouslySetInnerHTML={{
                   __html: `
                     // Preload critical routes and resources for faster navigation
                     if (typeof window !== 'undefined') {
                       // Preload critical routes
                       const criticalRoutes = ['/solutions', '/jewelvision', '/bundle', '/pricing', '/contact'];
                       criticalRoutes.forEach(route => {
                         const link = document.createElement('link');
                         link.rel = 'prefetch';
                         link.href = route;
                         document.head.appendChild(link);
                       });
                       
                       // Preload critical resources
                       const criticalResources = [
                         { href: '/fonts/inter.woff2', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' }
                       ];
                       criticalResources.forEach(resource => {
                         const link = document.createElement('link');
                         link.rel = 'preload';
                         link.href = resource.href;
                         link.as = resource.as;
                         if (resource.type) link.type = resource.type;
                         if (resource.crossorigin) link.crossOrigin = resource.crossorigin;
                         document.head.appendChild(link);
                       });
                     }
                   `,
                 }}
               />
      </body>
    </html>
  )
}