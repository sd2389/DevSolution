"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Menu, X, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

const navigation = [
  { name: "Solutions", href: "/solutions" },
  { name: "JewelVision", href: "/jewelvision" },
  { name: "Bundle", href: "/bundle" },
  { name: "Pricing", href: "/pricing" },
  { name: "Work", href: "/work" },
  { name: "Tech", href: "/tech" },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group transition-all duration-300 hover:scale-105">
            <Sparkles className="h-6 w-6 text-gold transition-all duration-300 group-hover:rotate-12 group-hover:scale-110" />
            <span className="font-bold text-xl transition-colors duration-300 group-hover:text-gold">DevSolutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-all duration-300 hover:text-foreground hover:scale-105 relative group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <ThemeToggle />
            <Button asChild className="transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <Link href="/contact">Book Demo</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="transition-all duration-300 hover:scale-110 hover:bg-muted/50">
                  <Menu className="h-5 w-5 transition-transform duration-300" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="mobile-sidebar p-0">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col h-full">
                  {/* Header with close button */}
                  <div className="sidebar-header">
                    <div className="flex items-center justify-end">
                      <span className="sr-only">Close menu</span>
                    </div>
                  </div>
                  
                  {/* Navigation Menu */}
                  <div className="sidebar-nav">
                    <nav className="flex flex-col space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="sidebar-nav-item"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  
                  {/* Footer with CTA */}
                  <div className="sidebar-footer">
                    <Button asChild className="w-full h-12 text-base font-medium">
                      <Link href="/contact" onClick={() => setIsOpen(false)}>Book Demo</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
