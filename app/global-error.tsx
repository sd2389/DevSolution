'use client'

import { useEffect } from 'react'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/section"
import { Home, RefreshCw, AlertTriangle, Mail } from "lucide-react"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global application error:', error)
  }, [error])

  return (
    <html>
      <body>
        <main>
          <Section className="min-h-screen flex items-center">
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
                  <CardTitle className="text-3xl mb-2">Critical Error</CardTitle>
                  <CardDescription className="text-lg">
                    A critical error occurred that prevented the application from loading properly. 
                    Our team has been notified and is working to resolve this issue.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      This is a serious error that affects the entire application. Please try the following:
                    </p>
                    <ul className="text-left text-sm text-muted-foreground space-y-2">
                      <li>• Refresh the page completely</li>
                      <li>• Clear your browser cache</li>
                      <li>• Try a different browser</li>
                      <li>• Contact support immediately</li>
                    </ul>
                    
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
                <Button asChild variant="outline" size="lg">
                  <Link href="/contact">
                    <Mail className="h-4 w-4 mr-2" />
                    Contact Support
                  </Link>
                </Button>
              </div>

              {/* Emergency Contact */}
              <div className="mt-12 p-6 bg-destructive/5 border border-destructive/20 rounded-lg">
                <h3 className="text-lg font-semibold text-destructive mb-2">Emergency Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  If this error persists, please contact our support team immediately with the error details above.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Button asChild variant="destructive" size="sm">
                    <Link href="/contact?priority=urgent">Urgent Support</Link>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <Link href="mailto:support@devsolutions.com">Email Support</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Section>
        </main>
      </body>
    </html>
  )
}
