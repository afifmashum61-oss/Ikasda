'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Bookmark, 
  Share2, 
  Tag,
  Sparkles
} from "lucide-react";

interface NewsItem {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: "Agenda" | "Berita";
  image: string;
  featured?: boolean;
}

const beritaData: NewsItem[] = [
  {
    id: 1,
    title: "Reuni Akbar Alumni IKASDA 2026: Sinergi Lintas Angkatan untuk Kemandirian Pesantren",
    excerpt: "Ajang silaturahmi terbesar ribuan alumni dari seluruh Koordinator Daerah (Korda) di Indonesia dan mancanegara yang dirangkai dengan Expo UMKM Alumni.",
    date: "15 Agustus 2026",
    readTime: "3 min baca",
    category: "Agenda",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=1000",
    featured: true,
  },
  {
    id: 2,
    title: "Kajian Rutin Selapanan Korda Jombang-Mojokerto Membahas Kitab Mafahim",
    excerpt: "Diskusi ilmiah rutin bulanan sekaligus konsolidasi program kerja sosial dan penguatan jejaring alumni daerah.",
    date: "28 Juli 2026",
    readTime: "2 min baca",
    category: "Berita",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Peresmian Gedung Perpustakaan Digital & Pusat Riset Santri Darussalam",
    excerpt: "Fasilitas modern berbasis akses jurnal digital resmi dibuka untuk meningkatkan literasi dan riset ilmiah santri.",
    date: "10 Juni 2026",
    readTime: "4 min baca",
    category: "Berita",
    image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&q=80&w=800",
  },
];

export default function NewsAgendaSection() {
  const [activeTab, setActiveTab] = useState<"Semua" | "Agenda" | "Berita">("Semua");
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  const toggleBookmark = (id: number) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const filteredNews = activeTab === "Semua" 
    ? beritaData 
    : beritaData.filter((item) => item.category === activeTab);

  const featuredNews = beritaData.find((item) => item.featured) || beritaData[0];
  const regularNews = filteredNews.filter((item) => item.id !== featuredNews.id);

  return (
    <section id="agenda-berita" className="relative w-full bg-slate-50 py-20 lg:py-28 dark:bg-zinc-950">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Header & Filter Navigasi Portal Berita */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3.5 py-1 text-[11px] font-bold text-amber-900 border border-amber-300/60 dark:bg-amber-950/80 dark:text-amber-400 dark:border-amber-800/50 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              Kabar Terbaru
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white tracking-tight mt-2">
              Portal Berita & Agenda IKASDA
            </h2>
          </div>

          {/* Tab Filter Kategori ala Portal Berita Modern */}
          <div className="flex items-center gap-2 border-b border-slate-200 dark:border-zinc-800 pb-2 overflow-x-auto">
            {(["Semua", "Agenda", "Berita"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  activeTab === tab
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/30"
                    : "text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Layout Berita Utama (Featured News Card) */}
        {activeTab === "Semua" && (
          <div className="mb-12">
            <div className="group relative rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-0 transition-all hover:border-amber-500/50">
              
              {/* Gambar Sampul Utama */}
              <div className="lg:col-span-7 relative min-h-[300px] lg:min-h-[400px] overflow-hidden">
                <Image
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-slate-950/60" />
                <span className="absolute top-4 left-4 rounded-full bg-amber-600 px-3.5 py-1 text-xs font-bold text-white shadow-md">
                  Sorotan Utama
                </span>
              </div>

              {/* Konten Teks Berita Utama */}
              <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs font-medium text-slate-500 dark:text-zinc-400 mb-3">
                    <span className="inline-flex items-center gap-1 font-bold text-amber-600 dark:text-amber-500">
                      <Tag className="h-3.5 w-3.5" /> {featuredNews.category}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {featuredNews.date}</span>
                  </div>

                  <h3 className="text-xl lg:text-2xl font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors leading-snug">
                    {featuredNews.title}
                  </h3>

                  <p className="text-xs lg:text-sm text-slate-600 dark:text-zinc-300 mt-4 leading-relaxed line-clamp-3">
                    {featuredNews.excerpt}
                  </p>
                </div>

                {/* Footer Engagement Bar */}
                <div className="pt-6 mt-6 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="h-3.5 w-3.5" /> {featuredNews.readTime}
                  </span>

                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => toggleBookmark(featuredNews.id)}
                      className={`p-2 rounded-xl border transition-all ${
                        bookmarked.includes(featuredNews.id)
                          ? "bg-amber-100 border-amber-300 text-amber-700 dark:bg-amber-950 dark:text-amber-400"
                          : "border-slate-200 text-slate-600 hover:bg-slate-100 dark:border-zinc-800 dark:text-zinc-400"
                      }`}
                    >
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <Link
                      href={`/berita/${featuredNews.id}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-bold text-white hover:bg-amber-600 transition-all dark:bg-white dark:text-slate-900 dark:hover:bg-amber-500 dark:hover:text-white"
                    >
                      Baca Selengkapnya
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* Grid Berita Lainnya */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {(activeTab === "Semua" ? regularNews : filteredNews).map((item) => (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800/90 p-5 shadow-sm transition-all duration-300 hover:border-amber-500/50 hover:shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Thumbnail Gambar */}
                  <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-4">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur px-3 py-1 text-[10px] font-bold text-amber-800 dark:text-amber-400 border border-amber-200/50">
                      {item.category}
                    </span>
                  </div>

                  {/* Metadata */}
                  <div className="flex items-center gap-3 text-[11px] font-medium text-slate-400 mb-2">
                    <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {item.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {item.readTime}</span>
                  </div>

                  {/* Judul & Excerpt */}
                  <h4 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 transition-colors leading-snug line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-2 line-clamp-2 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                {/* Engagement Action Bar */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-slate-400">
                    <button
                      type="button"
                      onClick={() => toggleBookmark(item.id)}
                      className={`p-1.5 rounded-lg transition-colors ${
                        bookmarked.includes(item.id) ? "text-amber-600" : "hover:text-slate-600 dark:hover:text-zinc-200"
                      }`}
                    >
                      <Bookmark className="h-4 w-4" />
                    </button>
                    <button type="button" className="p-1.5 rounded-lg hover:text-slate-600 dark:hover:text-zinc-200">
                      <Share2 className="h-4 w-4" />
                    </button>
                  </div>

                  <Link
                    href={`/berita/${item.id}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 dark:text-amber-500"
                  >
                    Baca
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Footer Link ke Semua Berita */}
        <div className="mt-12 text-center">
          <Link
            href="/berita"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 bg-white px-6 py-3.5 text-xs font-bold text-slate-800 shadow-sm transition-all hover:bg-slate-100 hover:border-slate-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800"
          >
            Lihat Seluruh Arsip Kabar & Agenda
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}