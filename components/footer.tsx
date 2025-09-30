"use client"

import Link from "next/link"
import { Sparkles, Github, Twitter, Linkedin, Mail, ArrowRight } from "lucide-react"

const footerNavigation = {
  solutions: [
    { name: "Website Development", href: "/solutions#website" },
    { name: "Software Development", href: "/solutions#software" },
    { name: "AI Development", href: "/solutions#ai" },
    { name: "JewelVision", href: "/jewelvision" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Work", href: "/work" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ],
  resources: [
    { name: "How It Works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Bundle Deals", href: "/bundle" },
    { name: "Tech Stack", href: "/tech" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-background border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-12 md:py-16">
          {/* Newsletter Section */}
          <div className="mb-12 text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to scale your business?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Get weekly insights on automation, scaling, and building better businesses. No spam, just value.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                autoComplete="email"
                className="flex-1 px-4 py-2 border border-border rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold/20 focus:border-gold"
                aria-label="Email address for newsletter subscription"
                suppressHydrationWarning
              />
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle subscription logic here
                }}
                className="px-6 py-2 bg-gold text-gold-foreground rounded-lg font-medium hover:bg-gold/90 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Subscribe to newsletter"
                suppressHydrationWarning
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {/* Solutions */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Solutions</h3>
              <ul className="space-y-3">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Company</h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Resources</h3>
              <ul className="space-y-3">
                {footerNavigation.resources.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-3">
                {footerNavigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors group flex items-center gap-2"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-16 border-t border-border/40 pt-8">
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex items-center space-x-2">
                <Sparkles className="h-5 w-5 text-gold" />
                <span className="font-semibold text-lg">DevSolutions</span>
              </div>
              
              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="mailto:hello@devsolutions.com"
                  className="text-muted-foreground hover:text-gold transition-colors"
                  aria-label="Email us"
                  rel="noopener noreferrer"
                >
                  <Mail className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/devsolutions"
                  className="text-muted-foreground hover:text-gold transition-colors"
                  aria-label="Follow us on GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://twitter.com/devsolutions"
                  className="text-muted-foreground hover:text-gold transition-colors"
                  aria-label="Follow us on Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/company/devsolutions"
                  className="text-muted-foreground hover:text-gold transition-colors"
                  aria-label="Connect with us on LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} DevSolutions. All rights reserved. Built with ❤️ for entrepreneurs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
