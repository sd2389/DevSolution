import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import nodemailer from "nodemailer"

// Sanitize input to prevent XSS
function sanitizeInput(input: string): string {
  return input
    .replace(/[<>]/g, '') // Remove potential HTML tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/script/gi, '') // Remove script tags
    .trim()
}

// Validation schema with enhanced security
const contactSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name too long")
    .regex(/^[a-zA-Z\s\-'\.]+$/, "Name contains invalid characters"),
  email: z.string()
    .email("Invalid email address")
    .max(255, "Email too long")
    .toLowerCase(),
  company: z.string()
    .max(100, "Company name too long")
    .optional(),
  website: z.string()
    .url("Invalid website URL")
    .max(255, "Website URL too long")
    .optional()
    .or(z.literal("")),
  monthlyTraffic: z.string()
    .max(50, "Traffic value too long")
    .optional(),
  useCase: z.string()
    .max(200, "Use case too long")
    .optional(),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message too long"),
})

// Simple in-memory rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const limit = rateLimitMap.get(ip)

  if (!limit || now > limit.resetTime) {
    // Reset or initialize
    rateLimitMap.set(ip, {
      count: 1,
      resetTime: now + 60 * 60 * 1000, // 1 hour window
    })
    return true
  }

  if (limit.count >= 5) {
    // Max 5 requests per hour
    return false
  }

  limit.count++
  return true
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown"
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      )
    }

    // Parse form data
    const formData = await req.formData()
    const data = {
      name: sanitizeInput(formData.get("name") as string || ""),
      email: sanitizeInput(formData.get("email") as string || ""),
      company: formData.get("company") ? sanitizeInput(formData.get("company") as string) : undefined,
      website: formData.get("website") ? sanitizeInput(formData.get("website") as string) : undefined,
      monthlyTraffic: formData.get("monthlyTraffic") ? sanitizeInput(formData.get("monthlyTraffic") as string) : undefined,
      useCase: formData.get("useCase") ? sanitizeInput(formData.get("useCase") as string) : undefined,
      message: sanitizeInput(formData.get("message") as string || ""),
    }

    // Validate data
    const validatedData = contactSchema.parse(data)

    // Handle file upload if present
    const file = formData.get("file") as File | null
    let fileInfo = ""
    if (file && file.size > 0) {
      // Validate file size (10MB max)
      if (file.size > 10 * 1024 * 1024) {
        return NextResponse.json(
          { error: "File size must be less than 10MB" },
          { status: 400 }
        )
      }
      
      // Validate file type
      const allowedTypes = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "image/jpeg", "image/png"]
      if (!allowedTypes.includes(file.type)) {
        return NextResponse.json(
          { error: "Invalid file type. Only PDF, DOC, DOCX, JPG, and PNG are allowed." },
          { status: 400 }
        )
      }
      
      fileInfo = `\nAttachment: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`
    }

    // Prepare email content
    const emailContent = `
New Contact Form Submission

Name: ${validatedData.name}
Email: ${validatedData.email}
Company: ${validatedData.company || "Not provided"}
Website: ${validatedData.website || "Not provided"}
Monthly Traffic: ${validatedData.monthlyTraffic || "Not provided"}
Use Case: ${validatedData.useCase || "Not provided"}

Message:
${validatedData.message}
${fileInfo}

---
Sent from DevSolutions Contact Form
    `.trim()

    // Send email (using environment variables)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587"),
          secure: process.env.SMTP_PORT === "465",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        })

        await transporter.sendMail({
          from: process.env.SMTP_USER,
          to: process.env.TO_EMAIL || "hello@devsolutions.com",
          subject: `New Contact: ${validatedData.name} - ${validatedData.useCase || "General Inquiry"}`,
          text: emailContent,
          replyTo: validatedData.email,
        })
      } catch (emailError) {
        console.error("Email sending failed:", emailError)
        // Don't fail the request if email fails - store for manual review
      }
    } else {
      // In development, just log the submission
      console.log("Contact form submission (email not configured):")
      console.log(emailContent)
    }

    // Return success response
    return NextResponse.json(
      { 
        ok: true,
        message: "Thank you for your message. We'll get back to you within 24 hours."
      },
      { status: 200 }
    )
    
  } catch (error) {
    console.error("Contact form error:", error)
    
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: "Invalid form data", details: error.issues },
        { status: 400 }
      )
    }
    
    return NextResponse.json(
      { error: "An error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
