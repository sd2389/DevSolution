'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { Home, ArrowLeft, Search, Mail } from "lucide-react"

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main>
        <Section className="min-h-[60vh] flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            {/* 404 Illustration */}
            <div className="mb-8">
              <div className="text-8xl font-bold text-primary/20 mb-4">404</div>
              <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl mb-2">Page Not Found</CardTitle>
                <CardDescription className="text-lg">
                  Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or doesn't exist.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Don't worry, this happens to the best of us. Here are some things you can try:
                  </p>
                  <ul className="text-left text-sm text-muted-foreground space-y-2">
                    <li>• Check the URL for typos</li>
                    <li>• Use the navigation menu to find what you need</li>
                    <li>• Go back to the previous page</li>
                    <li>• Contact us if you think this is an error</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Link>
              </Button>
              <Button variant="outline" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contact">
                  <Mail className="h-4 w-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
            </div>

            {/* Quick Links */}
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-4">Popular Pages</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                <Button asChild variant="ghost" size="sm">
                  <Link href="/solutions">Solutions</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/jewelvision">JewelVision</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/pricing">Pricing</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/about">About</Link>
                </Button>
                <Button asChild variant="ghost" size="sm">
                  <Link href="/work">Our Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
