"use client"

import { useState } from "react"
import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  Upload,
  CheckCircle
} from "lucide-react"

const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with DevSolutions. Let's discuss your project and how we can help.",
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    website: "",
    monthlyTraffic: "",
    useCase: "",
    message: "",
  })
  const [file, setFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formDataToSend = new FormData()
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value)
    })
    if (file) {
      formDataToSend.append("file", file)
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formDataToSend,
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({
          name: "",
          email: "",
          company: "",
          website: "",
          monthlyTraffic: "",
          useCase: "",
          message: "",
        })
        setFile(null)
      }
    } catch (error) {
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
    }
  }

  return (
    <>
      <Navbar />
      <main>
        <Section>
          <PageHeader
            title="Let's Build Something Amazing"
            subtitle="Tell us about your project and we'll get back to you within 24 hours"
          />
        </Section>

        <Section>
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              {isSubmitted ? (
                <Card className="p-12 text-center">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6"
                  >
                    Send Another Message
                  </Button>
                </Card>
              ) : (
                <Card>
                  <CardHeader>
                    <CardTitle>Get in Touch</CardTitle>
                    <CardDescription>
                      Fill out the form below and we'll respond promptly
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">Company</Label>
                          <Input
                            id="company"
                            name="company"
                            placeholder="Acme Inc."
                            value={formData.company}
                            onChange={handleInputChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="website">Website</Label>
                          <Input
                            id="website"
                            name="website"
                            type="url"
                            placeholder="https://example.com"
                            value={formData.website}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="monthlyTraffic">Monthly Traffic</Label>
                          <Select
                            value={formData.monthlyTraffic}
                            onValueChange={(value) => handleSelectChange("monthlyTraffic", value)}
                          >
                            <SelectTrigger id="monthlyTraffic">
                              <SelectValue placeholder="Select range" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="0-1k">0 - 1,000</SelectItem>
                              <SelectItem value="1k-10k">1,000 - 10,000</SelectItem>
                              <SelectItem value="10k-100k">10,000 - 100,000</SelectItem>
                              <SelectItem value="100k+">100,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="useCase">Use Case</Label>
                          <Select
                            value={formData.useCase}
                            onValueChange={(value) => handleSelectChange("useCase", value)}
                          >
                            <SelectTrigger id="useCase">
                              <SelectValue placeholder="Select service" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="website">Website Development</SelectItem>
                              <SelectItem value="software">Software Development</SelectItem>
                              <SelectItem value="ai">AI Development</SelectItem>
                              <SelectItem value="jewelvision">JewelVision</SelectItem>
                              <SelectItem value="bundle">Website + AI Bundle</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us about your project..."
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="file">Attach File (optional)</Label>
                        <div className="flex items-center space-x-2">
                          <Input
                            id="file"
                            type="file"
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                            className="flex-1"
                          />
                          {file && (
                            <span className="text-sm text-muted-foreground">
                              {file.name}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          PDF, DOC, DOCX, JPG, PNG up to 10MB
                        </p>
                      </div>

                      <Button 
                        type="submit" 
                        className="w-full" 
                        size="lg"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            Send Message
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Contact Info & Calendar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-sm text-muted-foreground">hello@devsolutions.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Office</p>
                      <p className="text-sm text-muted-foreground">
                        123 Tech Street<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <p className="font-medium">Business Hours</p>
                      <p className="text-sm text-muted-foreground">
                        Mon - Fri: 9:00 AM - 6:00 PM PST<br />
                        24/7 AI Support Available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Calendar Booking */}
              <Card id="demo">
                <CardHeader>
                  <CardTitle>Book a Demo</CardTitle>
                  <CardDescription>
                    Schedule a 30-minute call with our team
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <p className="text-sm text-muted-foreground text-center px-4">
                      Calendar widget placeholder<br />
                      (Calendly/Cal.com integration)
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <a href="/pricing" className="text-sm hover:text-primary block">
                      View Pricing →
                    </a>
                    <a href="/work" className="text-sm hover:text-primary block">
                      See Our Work →
                    </a>
                    <a href="/how-it-works" className="text-sm hover:text-primary block">
                      How It Works →
                    </a>
                    <a href="/blog" className="text-sm hover:text-primary block">
                      Read Our Blog →
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  )
}
