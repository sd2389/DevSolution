# DevSolutions Marketing Site

A production-ready marketing site for DevSolutions, featuring AI-powered solutions for jewelry businesses and SMBs. Built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## 🚀 Features

- **Modern Stack**: Next.js 14 App Router, TypeScript, Tailwind CSS
- **Dark Theme**: Default dark theme with toggle functionality
- **MDX Blog**: Full blog support with MDX for rich content
- **Contact Form**: Validated contact form with file upload and email integration
- **SEO Optimized**: Complete SEO setup with meta tags, sitemap, robots.txt, and JSON-LD
- **Responsive Design**: Mobile-first approach with 3 breakpoints
- **Performance**: Optimized for Core Web Vitals and fast load times
- **Accessibility**: WCAG compliant with semantic HTML and keyboard navigation

## 📦 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Blog**: MDX with gray-matter and next-mdx-remote
- **Forms**: React Hook Form + Zod validation
- **Email**: Nodemailer for contact form
- **Analytics**: Vercel Analytics
- **Deployment**: Vercel

## 🛠 Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/devsolutions.git
cd devsolutions
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp env.template.txt .env.local
```

Edit `.env.local` with your values:
```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
TO_EMAIL=hello@devsolutions.com

# Optional
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=
NEXT_PUBLIC_SITE_URL=https://devsolutions.com
```

4. **Run development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Check TypeScript types
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 📁 Project Structure

```
devsolutions/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   │   └── contact/       # Contact form endpoint
│   ├── blog/              # Blog pages
│   │   └── [slug]/        # Dynamic blog posts
│   ├── about/             # About page
│   ├── bundle/            # Bundle page
│   ├── contact/           # Contact page
│   ├── how-it-works/      # How it works page
│   ├── jewelvision/       # JewelVision product page
│   ├── pricing/           # Pricing page
│   ├── solutions/         # Solutions page
│   ├── tech/              # Tech stack page
│   ├── work/              # Portfolio/case studies
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   ├── navbar.tsx         # Navigation bar
│   ├── footer.tsx         # Footer
│   ├── hero.tsx           # Hero section
│   ├── section.tsx        # Section wrapper
│   └── ...                # Other components
├── content/               # Content directory
│   └── blog/              # Blog posts in MDX
├── lib/                   # Utility functions
│   ├── mdx.ts             # MDX utilities
│   └── utils.ts           # General utilities
├── public/                # Static assets
│   ├── robots.txt         # SEO robots file
│   └── sitemap.xml        # SEO sitemap
└── package.json           # Dependencies and scripts
```

## 🎨 Customization

### Adding New Pages

1. Create a new directory in `app/`
2. Add a `page.tsx` file
3. Import and use the layout components:

```tsx
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Section } from "@/components/section"
import { PageHeader } from "@/components/page-header"

export default function NewPage() {
  return (
    <>
      <Navbar />
      <main>
        <Section>
          <PageHeader title="Page Title" subtitle="Description" />
          {/* Your content */}
        </Section>
      </main>
      <Footer />
    </>
  )
}
```

### Adding Blog Posts

1. Create a new `.mdx` file in `content/blog/`
2. Add frontmatter:

```mdx
---
title: "Your Post Title"
date: "2024-01-20"
excerpt: "Brief description"
category: "Category Name"
author: "Author Name"
---

Your content here...
```

### Adding New Components

1. Create component in `components/`
2. Use shadcn/ui components where applicable:

```bash
npx shadcn@latest add [component-name]
```

## 🚀 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

```bash
vercel
```

### Manual Build

```bash
npm run build
npm run start
```

### Docker Deployment

Create a `Dockerfile`:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t devsolutions .
docker run -p 3000:3000 devsolutions
```

## 📊 Performance

- Lighthouse Score: 95+ across all metrics
- First Contentful Paint: < 1s
- Time to Interactive: < 2s
- Cumulative Layout Shift: < 0.1

## 🔒 Security

- Input validation with Zod
- Rate limiting on API routes
- Secure headers with Next.js
- Environment variables for sensitive data
- File upload validation and size limits

## 📐 Code Quality

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Modular architecture
- Single responsibility functions

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential.

## 📞 Support

For questions or support, contact:
- Email: hello@devsolutions.com
- Website: https://devsolutions.com
- Documentation: https://docs.devsolutions.com

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com)
- [Vercel](https://vercel.com)

---

Built with ❤️ by DevSolutions