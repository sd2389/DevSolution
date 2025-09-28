const fs = require('fs');
const path = require('path');

// Define all routes
const routes = [
  { url: '/', priority: 1.0, changefreq: 'daily' },
  { url: '/solutions', priority: 0.9, changefreq: 'weekly' },
  { url: '/jewelvision', priority: 0.9, changefreq: 'weekly' },
  { url: '/bundle', priority: 0.8, changefreq: 'weekly' },
  { url: '/pricing', priority: 0.8, changefreq: 'monthly' },
  { url: '/work', priority: 0.7, changefreq: 'monthly' },
  { url: '/how-it-works', priority: 0.7, changefreq: 'monthly' },
  { url: '/tech', priority: 0.6, changefreq: 'monthly' },
  { url: '/about', priority: 0.6, changefreq: 'monthly' },
  { url: '/contact', priority: 0.7, changefreq: 'monthly' },
  { url: '/blog', priority: 0.8, changefreq: 'weekly' },
];

// Generate sitemap XML
function generateSitemap() {
  const baseUrl = 'https://devsolutions.com';
  const currentDate = new Date().toISOString();
  
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  routes.forEach(route => {
    sitemap += `
  <url>
    <loc>${baseUrl}${route.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
  });

  sitemap += `
</urlset>`;

  return sitemap;
}

// Write sitemap to public directory
const sitemap = generateSitemap();
const publicDir = path.join(__dirname, '..', 'public');
const sitemapPath = path.join(publicDir, 'sitemap.xml');

fs.writeFileSync(sitemapPath, sitemap);
console.log('✅ Sitemap generated successfully at:', sitemapPath);
