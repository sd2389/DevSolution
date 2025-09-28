'use client'

import { useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { Home, RefreshCw, AlertTriangle, Mail, ArrowLeft } from "lucide-react"

interface ErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  return (
    <>
      <Navbar />
      <main>
        <Section className="min-h-[60vh] flex items-center">
          <div className="max-w-2xl mx-auto text-center">
            {/* Error Illustration */}
            <div className="mb-8">
              <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <AlertTriangle className="h-10 w-10 text-destructive" />
              </div>
              <div className="text-6xl font-bold text-destructive/20 mb-4">500</div>
              <div className="w-24 h-1 bg-destructive mx-auto rounded-full"></div>
            </div>

            {/* Error Message */}
            <Card className="mb-8">
              <CardHeader>
                <CardTitle className="text-3xl mb-2">Something Went Wrong</CardTitle>
                <CardDescription className="text-lg">
                  We're experiencing technical difficulties. Our team has been notified and is working to fix the issue.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    This error has been logged and our development team will investigate. In the meantime, you can:
                  </p>
                  <ul className="text-left text-sm text-muted-foreground space-y-2">
                    <li>• Try refreshing the page</li>
                    <li>• Go back to the previous page</li>
                    <li>• Return to the homepage</li>
                    <li>• Contact us if the problem persists</li>
                  </ul>
                  
                  {process.env.NODE_ENV === 'development' && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <p className="text-sm font-mono text-destructive">
                        Error: {error.message}
                      </p>
                      {error.digest && (
                        <p className="text-xs text-muted-foreground mt-2">
                          Error ID: {error.digest}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={reset} size="lg">
                <RefreshCw className="h-4 w-4 mr-2" />
                Try Again
              </Button>
              <Button asChild variant="outline" size="lg">
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
                  Report Issue
                </Link>
              </Button>
            </div>

            {/* Status Information */}
            <div className="mt-12 p-4 bg-muted/30 rounded-lg">
              <h3 className="text-sm font-semibold mb-2">System Status</h3>
              <p className="text-xs text-muted-foreground">
                If this error persists, please check our status page or contact support with the error details above.
              </p>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
