'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ShieldCheck, ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

const pengurusList = [
  {
    id: 1,
    periode: "2024 - Sekarang",
    ketua: "KH. Ahmad Nawawi",
    jabatan: "Ketua Umum IKASDA Pusat",
    pencapaian: "Digitalisasi Database Alumni, Integrasi Portal Sistem, & Pengembangan Beasiswa Santri",
    foto: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
    isAktif: true,
  },
  {
    id: 2,
    periode: "2019 - 2024",
    ketua: "Ust. H. M. Zainuddin, M.Pd.",
    jabatan: "Ketua Umum IKASDA Pusat",
    pencapaian: "Pembentukan 18 Koordinator Daerah (Korda) Regional & Sinergi Usaha Ekonomi Alumni",
    foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    isAktif: false,
  },
  {
    id: 3,
    periode: "2014 - 2019",
    ketua: "Drs. H. Ali Maksum",
    jabatan: "Ketua Umum IKASDA Pusat",
    pencapaian: "Konsolidasi Perdana Lintas Angkatan Alumni & Perumusan AD/ART Organisasi",
    foto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
    isAktif: false,
  },
];

export default function ManagementSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play carousel berganti kartu setiap 5 detik
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % pengurusList.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + pengurusList.length) % pengurusList.length);
  };

  const activeItem = pengurusList[currentIndex];

  return (
    <section id="pengurus" className="relative w-full bg-white py-20 lg:py-28 dark:bg-zinc-950 overflow-hidden">
      
      {/* Background Glow Soft */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[120px] dark:bg-amber-600/15" />
      </div>

      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        
        {/* Header Section */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
          <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-[11px] font-bold tracking-wider text-amber-800 border border-amber-200 dark:bg-amber-950/80 dark:text-amber-400 dark:border-amber-800/50 uppercase">
            Struktur Organisasi
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white tracking-tight">
            Pengurus Masa ke Masa
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
            Napak tilas kepemimpinan IKASDA Pusat dari periode awal hingga masa kini.
          </p>
        </div>

        {/* Auto Carousel Frame Area */}
        <div className="relative max-w-3xl mx-auto flex items-center">
          
          {/* Tombol Navigasi Kiri */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Pengurus Sebelumnya"
            className="absolute -left-4 sm:-left-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-xl backdrop-blur transition-all hover:bg-amber-600 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          {/* Area Render Kartu dengan Animasi Slide */}
          <div className="w-full min-h-[380px] sm:min-h-[340px] relative flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                initial={{ opacity: 0, x: -60, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 60, scale: 0.95 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="w-full rounded-3xl bg-slate-50/90 p-6 sm:p-8 border border-slate-200/90 dark:bg-zinc-900/95 dark:border-zinc-800 shadow-2xl backdrop-blur-md grid grid-cols-1 md:grid-cols-12 gap-6 items-center"
              >
                {/* Kolom Informasi Teks */}
                <div className="md:col-span-7 flex flex-col justify-between h-full">
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1 text-xs font-bold ${
                          activeItem.isAktif
                            ? "bg-amber-600 text-white shadow-lg shadow-amber-600/30"
                            : "bg-slate-200 text-slate-700 dark:bg-zinc-800 dark:text-zinc-300"
                        }`}
                      >
                        <Calendar className="h-3.5 w-3.5" />
                        {activeItem.periode}
                      </span>
                      {activeItem.isAktif && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                          <ShieldCheck className="h-3.5 w-3.5" /> Aktif
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                      {activeItem.ketua}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-amber-600 dark:text-amber-500 mt-1">
                      {activeItem.jabatan}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-slate-200/80 dark:border-zinc-800/80 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                    <span className="font-bold text-slate-900 dark:text-white flex items-center gap-1 mb-1">
                      <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                      Fokus & Legacy Program:
                    </span>
                    {activeItem.pencapaian}
                  </div>
                </div>

                {/* Kolom Foto Pop-Out Menyembul Keluar Frame */}
                <div className="md:col-span-5 relative h-full flex items-end justify-center min-h-[220px]">
                  {/* Bingkai Latar Belakang Foto */}
                  <div className="absolute bottom-0 h-40 w-full rounded-2xl bg-gradient-to-t from-amber-500/20 to-amber-100/40 dark:from-amber-950/40 dark:to-zinc-800/50 border border-amber-500/20" />

                  {/* Foto Orang dengan Efek Pop-Out (Menyembul ke Atas) */}
                  <motion.div
                    initial={{ y: 20, scale: 0.9, opacity: 0 }}
                    animate={{ y: -15, scale: 1.1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="relative z-10 h-56 w-40 shrink-0 overflow-visible"
                  >
                    <Image
                      src={activeItem.foto}
                      alt={activeItem.ketua}
                      fill
                      unoptimized
                      className="object-cover object-top drop-shadow-[0_15px_20px_rgba(0,0,0,0.25)] rounded-b-2xl"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tombol Navigasi Kanan */}
          <button
            type="button"
            onClick={handleNext}
            aria-label="Pengurus Selanjutnya"
            className="absolute -right-4 sm:-right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-xl backdrop-blur transition-all hover:bg-amber-600 hover:text-white dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-200"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        {/* Indikator Titik (Dots) */}
        <div className="mt-8 flex justify-center items-center gap-2">
          {pengurusList.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-8 bg-amber-600"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-zinc-700"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}