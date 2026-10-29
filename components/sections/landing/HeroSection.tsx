"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/app/providers";
import { 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Users, 
  ArrowRight 
} from "lucide-react";

  

const slides = [
  {
    id: 1,
    badge: "PORTAL RESMI IKASDA DARUSSALAM NGESONG",
    title: {
      ID: "Wadah Silaturahmi, Kolaborasi, & Akselerasi Potensi Alumni",
      EN: "A Hub for Alumni Networking, Collaboration, and Potential Acceleration",
    },
    description:
      "Wadah silaturahmi, kolaborasi keilmuan, dan akselerasi potensi ribuan alumni serta santri Pondok Pesantren Darussalam Ngesong Jombang di seluruh dunia.",
    bgImage: "/assets/img/hero-pesantren.jpg",
    primaryBtnText: "Jelajahi Direktori Alumni",
    primaryBtnLink: "#daftar-alumni",
    secondaryBtnText: "Profil Pesantren & IKASDA",
    secondaryBtnLink: "#profil",
  },
  {
    id: 2,
    badge: "JARINGAN ALUMNI GLOBAL",
    title: {
      ID: "Terhubung dengan Ribuan Alumni dari Berbagai Profesi & Daerah",
      EN: "Connect with Thousands of Alumni from Various Professions & Regions",
    },
    description:
      "Terhubung dengan ribuan alumni dari berbagai profesi dan daerah untuk menciptakan peluang usaha, karir, dan pengabdian masyarakat.",
    bgImage: "/assets/img/hero-pesantren.jpg",
    primaryBtnText: "Gabung Komunitas",
    primaryBtnLink: "#daftar-alumni",
    secondaryBtnText: "Agenda Kegiatan",
    secondaryBtnLink: "#agenda-berita",
  },
];

export default function HeroSection() {
  const { lang } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-slide setiap 6 detik
  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      className="relative min-h-[620px] w-full overflow-hidden bg-white dark:bg-zinc-950 py-16 lg:py-24"
      id="beranda"
    >
      {/* Background Image Carousel Slider dengan Framer Motion Fade */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slides[currentSlide].id}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0 bg-cover bg-right-bottom bg-no-repeat"
          style={{ backgroundImage: `url('${slides[currentSlide].bgImage}')` }}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/30 dark:from-zinc-950 dark:via-zinc-950/90 dark:to-transparent" />
        </motion.div>
      </AnimatePresence>

      {/* Tombol Navigasi Kiri */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Slide Sebelumnya"
        className="absolute left-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-lg backdrop-blur-sm transition-all hover:bg-amber-600 hover:text-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {/* Tombol Navigasi Kanan */}
      <button
        type="button"
        onClick={handleNext}
        aria-label="Slide Selanjutnya"
        className="absolute right-4 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white/80 text-slate-800 shadow-lg backdrop-blur-sm transition-all hover:bg-amber-600 hover:text-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-zinc-200"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Content Container */}
      <div className="container relative z-10 mx-auto px-6 lg:px-16">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[currentSlide].id}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 },
                },
                exit: { opacity: 0, transition: { duration: 0.2 } },
              }}
            >
              {/* Badge Tag */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="inline-block"
              >
                <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-[11px] font-bold tracking-wider text-amber-900 border border-amber-300/60 dark:bg-amber-950/80 dark:text-amber-400 dark:border-amber-800/50">
                  {slides[currentSlide].badge}
                </span>
              </motion.div>

              {/* Judul Utama */}
              <motion.h1
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="mt-5 text-4xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-5xl dark:text-white"
              >
                {lang === "ID" ? slides[currentSlide].title.ID : slides[currentSlide].title.EN}
              </motion.h1>

              {/* Deskripsi */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6 }}
                className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base dark:text-zinc-300"
              >
                {slides[currentSlide].description}
              </motion.p>

              {/* Tombol Aksi */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href={slides[currentSlide].primaryBtnLink}
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-amber-600/30 transition-all hover:bg-amber-700 hover:shadow-amber-600/50 active:scale-95"
                >
                  {slides[currentSlide].primaryBtnText}
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <Link
                  href={slides[currentSlide].secondaryBtnLink}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-white/90 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm backdrop-blur transition-all hover:bg-slate-900 hover:text-white dark:border-white dark:bg-transparent dark:text-white dark:hover:bg-white dark:hover:text-slate-900 active:scale-95"
                >
                  {slides[currentSlide].secondaryBtnText}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Stat Badges */}
          <div className="mt-10 inline-flex flex-wrap items-center gap-4 rounded-2xl bg-white/90 p-4 shadow-xl border border-slate-100 backdrop-blur dark:bg-zinc-900/90 dark:border-zinc-800">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-500 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">4.9 / 5.0</div>
                <div className="text-[10px] font-medium text-slate-500 dark:text-zinc-400">Akreditasi & Kepuasan</div>
              </div>
            </div>

            <div className="hidden sm:block h-8 w-px bg-slate-200 dark:bg-zinc-700"></div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400">
                <Users className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white">5.400+ Alumni Terdata</div>
                <div className="text-[10px] font-medium text-slate-500 dark:text-zinc-400">Tersebar di 18 Korda</div>
              </div>
            </div>
          </div>

          {/* Indikator Titik (Dots) */}
          <div className="mt-6 flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentSlide
                    ? "w-8 bg-amber-600"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400 dark:bg-zinc-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}