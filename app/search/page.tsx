// app/search/page.tsx
'use client';

import { useSearchParams } from "next/navigation";
import { useLanguage } from "@/app/providers";
import Link from "next/link";
import { Search, ArrowLeft } from "lucide-react";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const { lang } = useLanguage();

  return (
    <div className="container mx-auto min-h-[60vh] px-6 py-16 lg:px-16">
      <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-amber-600 mb-6 hover:underline">
        <ArrowLeft className="h-4 w-4" />
        {lang === "ID" ? "Kembali ke Beranda" : "Back to Home"}
      </Link>

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