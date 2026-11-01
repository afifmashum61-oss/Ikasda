import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://ikasdangesong.com' // Ganti dengan domain asli Anda

  // 1. Ambil data dinamis dari API / Database jika ada (opsional)
  // Contoh: Fetch posts dari CMS/Database
  /*
  const response = await fetch('https://api.example.com/posts')
  const posts = await response.json()

  const postUrls = posts.map((post: { slug: string; updatedAt: string }) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'weekly',
    priority: 0.7,
  }))
  */

  // 2. Daftar halaman statis situs Anda
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ]

  // Gabungkan halaman statis dan dinamis
  return [
    ...staticRoutes,
    // ...postUrls, // Hapus komentar jika menggunakan data dinamis
  ]
}