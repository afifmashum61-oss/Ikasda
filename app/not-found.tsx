'use client';

import Link from "next/link";
import { useLanguage } from "@/app/providers";
import { ArrowLeft, Home, Compass, Search } from "lucide-react";

export default function NotFound() {
  const { lang } = useLanguage();

  return (
    <div className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-white py-20 dark:bg-zinc-950">
      {/* Background Soft Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[140px] dark:bg-amber-600/15" />
      </div>

      <div className="container relative z-10 mx-auto px-6 text-center lg:px-16">
        {/* Teks Angka 404 Besar */}
        <div className="relative inline-block">
          <h1 className="text-8xl font-black tracking-tight text-slate-200 sm:text-9xl dark:text-zinc-900 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="rounded-full bg-amber-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-800 border border-amber-300/60 dark:bg-amber-950/80 dark:text-amber-400 dark:border-amber-800/50">
              {lang === "ID" ? "Halaman Tidak Ditemukan" : "Page Not Found"}
            </span>
          </div>
        </div>

        {/* Judul & Deskripsi */}
        <h2 className="mt-6 text-2xl font-extrabold text-slate-900 sm:text-3xl dark:text-white">
          {lang === "ID" 
            ? "Maaf, Halaman yang Anda Cari Tidak Ada" 
            : "Oops! The Page You Are Looking For Does Not Exist"}
        </h2>

        <p className="mx-auto mt-3 max-w-md text-xs leading-relaxed text-slate-500 sm:text-sm dark:text-zinc-400">
          {lang === "ID"
            ? "Tautan yang Anda ikuti mungkin rusak, atau halaman tersebut telah dipindahkan. Silakan kembali ke beranda atau jelajahi portal kami."
            : "The link you followed may be broken, or the page may have been moved. Please return to home or search our portal."}
        </p>

        {/* Tombol Aksi Navigasi */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-amber-600/30 transition-all hover:bg-amber-700 active:scale-95"
          >
            <Home className="h-4 w-4" />
            <span>{lang === "ID" ? "Kembali ke Beranda" : "Back to Home"}</span>
          </Link>

          <Link
            href="/search"
            className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-6 py-3.5 text-xs font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-100 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 active:scale-95"
          >
            <Search className="h-4 w-4 text-amber-600" />
            <span>{lang === "ID" ? "Pencarian Portal" : "Search Portal"}</span>
          </Link>
        </div>

        {/* Link Cepat Rekomendasi */}
        <div className="mt-14 border-t border-slate-100 pt-8 dark:border-zinc-800/80">
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-3">
            {lang === "ID" ? "Tautan Cepat Popular:" : "Popular Quick Links:"}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
            <Link href="/#profil" className="text-slate-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
              Profil IKASDA
            </Link>
            <span className="text-slate-300 dark:text-zinc-700">•</span>
            <Link href="/#agenda-berita" className="text-slate-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
              Agenda & Berita
            </Link>
            <span className="text-slate-300 dark:text-zinc-700">•</span>
            <Link href="/#daftar-alumni" className="text-slate-600 hover:text-amber-600 dark:text-zinc-400 dark:hover:text-amber-400">
              Direktori Alumni
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}