import { MetadataRoute } from 'next'
import fs from 'fs'
import path from 'path'

const baseUrl = 'https://ikasdangesong.com' // Ganti dengan domain asli Anda

// Fungsi rekursif untuk scan folder di dalam app/(public)
function getPublicRoutes(dir: string, baseDir: string = ''): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })
  let routes: string[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)
    const relativePath = path.join(baseDir, entry.name)

    if (entry.isDirectory()) {
      // Abaikan folder privat/internal Next.js (diawali dengan _ atau [ untuk dynamic routes)
      if (entry.name.startsWith('_') || entry.name.startsWith('[')) continue

      // Lakukan rekursi ke subfolder
      routes = routes.concat(getPublicRoutes(fullPath, relativePath))
    } else if (entry.isFile() && (entry.name === 'page.tsx' || entry.name === 'page.jsx' || entry.name === 'page.js')) {
      // Jika menemukan file page.tsx/js/jsx, bentuk URL path-nya
      const routePath = baseDir.replace(/\\/g, '/') // Format path untuk Windows
      routes.push(routePath === '' ? '' : `/${routePath}`)
    }
  }

  return routes
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Path menuju folder app/(public)
  const publicDir = path.join(process.cwd(), 'app', '(public)')

  let staticPaths: string[] = []
  
  if (fs.existsSync(publicDir)) {
    staticPaths = getPublicRoutes(publicDir)
  }

  // Map setiap path yang ditemukan ke format sitemap Next.js
  const staticRoutes: MetadataRoute.Sitemap = staticPaths.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }))

  // 1. (Opsional) Ambil data dinamis dari API/Database jika ada
  /*
  const response = await fetch('https://api.example.com/posts')
  const posts = await response.json()
  const dynamicRoutes = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  */

  return [
    ...staticRoutes,
    // ...dynamicRoutes,
  ]
}