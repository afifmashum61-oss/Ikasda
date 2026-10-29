'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { UserPlus, Sparkles, ChevronLeft, ChevronRight, MapPin, Briefcase, GraduationCap } from "lucide-react";
import Image from "next/image";

// Data Alumni Maksimal 10 Kartu
const ALUMNI_DATA = [
  {
    id: 1,
    name: "Gus Dr. H. Ahmad Syarifuddin, M.Pd.",
    batch: "Angkatan 2010",
    profession: "Pengasuh Pesantren & Dosen UI",
    city: "Jombang, Jawa Timur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Ning Hjh. Siti Fatimah, S.H., M.H.",
    batch: "Angkatan 2012",
    profession: "Advokat & Konsultan Hukum",
    city: "Surabaya, Jawa Timur",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Muhammad Rizky Maulana, S.Kom.",
    batch: "Angkatan 2015",
    profession: "Senior Software Engineer",
    city: "Jakarta Selatan, DKI Jakarta",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Dr. H. Lukman Hakim, M.Ag.",
    batch: "Angkatan 2008",
    profession: "Peneliti & Penulis Buku Agama",
    city: "Yogyakarta, DIY",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "Ahmad Zainuri, S.E., M.M.",
    batch: "Angkatan 2013",
    profession: "Entrepreneur & Owner Halal Food",
    city: "Malang, Jawa Timur",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Aisyah Nabila, S.Ked.",
    batch: "Angkatan 2017",
    profession: "Dokter Umum & Relawan Medis",
    city: "Semarang, Jawa Tengah",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 7,
    name: "M. Nur Hidayat, M.T.",
    batch: "Angkatan 2014",
    profession: "Data Scientist & AI Researcher",
    city: "Bandung, Jawa Barat",
    avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 8,
    name: "Kiai M. Mahrus Ali, S.Th.I.",
    batch: "Angkatan 2009",
    profession: "Ketua Yayasan Pendidikan Islam",
    city: "Kediri, Jawa Timur",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 9,
    name: "Nur Indah Permata, S.Pd.",
    batch: "Angkatan 2016",
    profession: "Guru Penggerak & Edukator",
    city: "Sidoarjo, Jawa Timur",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 10,
    name: "Faisal Amir, S.T.",
    batch: "Angkatan 2018",
    profession: "Project Manager Infrastructure",
    city: "Batam, Kepulauan Riau",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80",
  },
];

// Pengulangan array untuk efek infinite loop yang halus
const INFINITE_ALUMNI = [...ALUMNI_DATA, ...ALUMNI_DATA];

export default function DirectorySection() {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative w-full bg-gradient-to-b from-amber-500/10 via-amber-50/50 to-amber-100/40 py-20 lg:py-28 dark:from-zinc-950 dark:via-zinc-900/60 dark:to-zinc-950 overflow-hidden" id="daftar-alumni">
      
      {/* 1. Transisi Bentuk SVG Curved Divider (Menyambungkan dengan NewsAgendaSection) */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none z-10 pointer-events-none">
        <svg
          className="relative block w-full h-10 sm:h-16 lg:h-20 text-slate-50 dark:text-zinc-950 fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,0 L0,0 Z"></path>
        </svg>
      </div>

      {/* Latar Belakang Cahaya Amber Lembut */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-amber-500/10 blur-[150px] dark:bg-amber-500/5 dark:blur-[180px]" />
      </div>

      {/* Container Header */}
      <div className="container relative z-20 mx-auto px-6 lg:px-16 pt-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-600/10 px-3.5 py-1 text-[11px] font-bold text-amber-900 border border-amber-600/20 dark:bg-amber-950/40 dark:text-amber-400 dark:border-amber-800/30 uppercase">
              <Sparkles className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400" />
              Database Resmi
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-zinc-100 tracking-tight mt-2">
              Direktori Alumni & Santri
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mt-1">
              Terhubung dengan ribuan alumni lintas generasi di seluruh penjuru daerah.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Tombol Arah Auto Scroll */}
            <div className="flex items-center gap-1.5 rounded-2xl bg-white/80 backdrop-blur p-1.5 border border-amber-200/80 dark:bg-zinc-900/80 dark:border-zinc-800/80 shadow-sm">
              <button
                type="button"
                onClick={() => setDirection("right")}
                aria-label="Scroll Kiri"
                className={`p-2 rounded-xl text-xs font-bold transition-all ${
                  direction === "right"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 dark:bg-amber-600 dark:shadow-none"
                    : "text-slate-600 hover:bg-amber-100/50 dark:text-zinc-400 dark:hover:bg-zinc-800/80"
                }`}
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => setDirection("left")}
                aria-label="Scroll Kanan"
                className={`p-2 rounded-xl text-xs font-bold transition-all ${
                  direction === "left"
                    ? "bg-amber-600 text-white shadow-md shadow-amber-600/30 dark:bg-amber-600 dark:shadow-none"
                    : "text-slate-600 hover:bg-amber-100/50 dark:text-zinc-400 dark:hover:bg-zinc-800/80"
                }`}
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            {/* Tombol Tambah Data */}
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-2xl bg-amber-600 px-5 py-3 text-xs font-bold text-white shadow-lg shadow-amber-600/30 transition-all hover:bg-amber-700 active:scale-95 dark:shadow-none"
            >
              <UserPlus className="h-4 w-4" />
              Tambah / Perbarui Data
            </button>
          </div>
        </div>
      </div>

      {/* Auto-Scroll Marquee Container */}
      <div 
        className="relative w-full overflow-hidden z-20"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Shadow Overlay Gradient Kiri & Kanan */}
        <div className="absolute left-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-r from-amber-50/80 to-transparent dark:from-zinc-950 dark:to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-20 bg-gradient-to-l from-amber-50/80 to-transparent dark:from-zinc-950 dark:to-transparent pointer-events-none" />

        <motion.div
          animate={{
            x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
          }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          style={{
            animationPlayState: isPaused ? "paused" : "running",
          }}
          className="flex gap-6 w-max py-4 px-6"
        >
          {INFINITE_ALUMNI.map((alumni, index) => (
            <div
              key={`${alumni.id}-${index}`}
              className="w-[320px] shrink-0 rounded-3xl bg-white/90 dark:bg-zinc-900/70 p-6 border border-amber-200/60 dark:border-zinc-800/60 shadow-md backdrop-blur-sm transition-all duration-300 hover:border-amber-500 hover:shadow-xl hover:-translate-y-1.5 dark:hover:border-amber-500/50 dark:hover:shadow-black/40"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-2xl border-2 border-amber-500/40 dark:border-amber-500/20 shadow-inner">
                  <Image
                    src={alumni.avatar}
                    alt={alumni.name}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-[10px] font-bold text-amber-900 border border-amber-300/60 dark:bg-amber-950/50 dark:text-amber-400 dark:border-amber-800/40">
                    <GraduationCap className="h-3 w-3 text-amber-600 dark:text-amber-400" />
                    {alumni.batch}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 dark:text-zinc-100 mt-1 line-clamp-1">
                    {alumni.name}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 pt-3 border-t border-slate-100 dark:border-zinc-800/60 text-xs text-slate-600 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <Briefcase className="h-3.5 w-3.5 text-amber-600 dark:text-amber-500 shrink-0" />
                  <span className="line-clamp-1">{alumni.profession}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-3.5 w-3.5 text-amber-600 dark:text-amber-500 shrink-0" />
                  <span className="line-clamp-1">{alumni.city}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}