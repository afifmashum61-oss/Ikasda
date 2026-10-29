// app/search/page.tsx
'use client';

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/app/providers";
import Link from "next/link";
import { Search, ArrowLeft, Loader2 } from "lucide-react";

// 1. Komponen Internal yang Membaca Query Params
function SearchContent() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { lang } = useLanguage();

  return (
    <div>
      <div className="flex items-center gap-3 border-b border-slate-200 pb-4 dark:border-zinc-800">
        <Search className="h-6 w-6 text-amber-600" />
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white">
          {lang === "ID" ? "Hasil Pencarian untuk:" : "Search Results for:"}{" "}
          <span className="text-amber-600">"{query}"</span>
        </h1>
      </div>

      <div className="mt-8 rounded-2xl bg-slate-50 p-8 text-center border border-slate-200 dark:bg-zinc-900 dark:border-zinc-800">
        {query ? (
          <p className="text-sm text-slate-600 dark:text-zinc-400">
            {lang === "ID" 
              ? `Menampilkan hasil pencarian untuk kata kunci "${query}".` 
              : `Showing search results for "${query}".`}
          </p>
        ) : (
          <p className="text-sm text-slate-500">
            {lang === "ID" ? "Silakan masukkan kata kunci pencarian." : "Please enter a search keyword."}
          </p>
        )}
      </div>
    </div>
  );
}

// 2. Fallback Tampilan Sementara saat Prerendering / Loading
function SearchLoadingFallback() {
  return (
    <div className="flex flex-col items-center justify-center py-20 text-slate-400">
      <Loader2 className="h-8 w-8 animate-spin text-amber-600 mb-2" />
      <p className="text-xs font-semibold">Memuat hasil pencarian...</p>
    </div>
  );
}

// 3. Komponen Main Page yang Dibungkus Suspense
export default function SearchPage() {
  const { lang } = useLanguage();

  return (
    <div className="container mx-auto min-h-[60vh] px-6 py-16 lg:px-16">
      <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4" />
        {lang === "ID" ? "Kembali ke Beranda" : "Back to Home"}
      </Link>

      {/* Pembungkus Suspense untuk Mencegah Error Prerender Build */}
      <Suspense fallback={<SearchLoadingFallback />}>
        <SearchContent />
      </Suspense>
    </div>
  );
}