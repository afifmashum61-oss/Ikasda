"use client";

import Link from "next/link";
import { useState } from "react";

// Data Alumni Dummy Realistis
const ALUMNI_DATA = [
  {
    id: 1,
    name: "Gus Dr. H. Ahmad Syarifuddin, M.Pd.",
    batch: "Angkatan 2010",
    profession: "Pengasuh Pesantren & Dosen UI",
    city: "Jombang, Jawa Timur",
    korda: "Korda Jatim",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Ning Hjh. Siti Fatimah, S.H., M.H.",
    batch: "Angkatan 2012",
    profession: "Advokat & Konsultan Hukum",
    city: "Surabaya, Jawa Timur",
    korda: "Korda Surabaya Raya",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Muhammad Rizky Maulana, S.Kom.",
    batch: "Angkatan 2015",
    profession: "Senior Software Engineer",
    city: "Jakarta Selatan, DKI Jakarta",
    korda: "Korda Jabodetabek",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    name: "Dr. Hj. Nur Hidayati, Sp.PD",
    batch: "Angkatan 2008",
    profession: "Dokter Spesialis Penyakit Dalam",
    city: "Malang, Jawa Timur",
    korda: "Korda Jatim",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    name: "H. Abdullah Zaenuddin, S.E.",
    batch: "Angkatan 2005",
    profession: "Direktur Utama PT Berkah Logistik",
    city: "Semarang, Jawa Tengah",
    korda: "Korda Jateng & DIY",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    name: "Ust. Fathur Rahman, S.Ag.",
    batch: "Angkatan 2018",
    profession: "Guru & Pengampu Tahfidz",
    city: "Kediri, Jawa Timur",
    korda: "Korda Jatim",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState("tab-pondok");

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Navbar Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-12">
          {/* Brand Logo */}
          <Link href="#beranda" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-edoo-soft p-1.5 border border-edoo-light">
              <img src="/assets/img/logo-ikasda.png" alt="Logo IKASDA" className="h-full w-full object-contain" />
            </div>
            <div>
              <div className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
                IKASDA <span className="text-edoo-primary">JOMBANG</span>
              </div>
              <div className="text-[10px] font-semibold text-slate-400 mt-1">PP. Darussalam Ngesong</div>
            </div>
          </Link>

          {/* Quick Search Dropdown Group */}
          <div className="hidden items-center rounded-full border border-slate-200 bg-slate-100/70 px-4 py-2 lg:flex">
            <button type="button" className="flex items-center gap-2 border-r border-slate-300 pr-3 text-xs font-bold text-slate-700">
              <i className="fa-solid fa-layer-group text-edoo-primary"></i> Menu <i className="fa-solid fa-chevron-down text-[9px] text-slate-400"></i>
            </button>
            <div className="flex items-center gap-2 pl-3">
              <input
                type="text"
                placeholder="Cari di portal..."
                className="w-40 bg-transparent text-xs outline-none placeholder:text-slate-400"
              />
              <i className="fa-solid fa-magnifying-glass text-xs text-slate-400"></i>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden items-center gap-6 text-xs font-bold md:flex">
            <Link href="#beranda" className="text-edoo-primary">Beranda</Link>
            <Link href="#profil" className="flex items-center gap-1 text-slate-700 hover:text-edoo-primary">
              Profil <i className="fa-solid fa-chevron-down text-[9px] text-slate-400"></i>
            </Link>
            <Link href="#pengurus" className="text-slate-700 hover:text-edoo-primary">Pengurus Masa ke Masa</Link>
            <Link href="#agenda-berita" className="text-slate-700 hover:text-edoo-primary">Agenda & Berita</Link>
            <Link href="#daftar-alumni" className="text-slate-700 hover:text-edoo-primary">Daftar Alumni</Link>
          </nav>

          {/* Right Action Button */}
          <div className="flex items-center gap-3">
            <Link
              href="#daftar-alumni"
              className="flex items-center gap-2 rounded-full bg-edoo-primary px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-edoo-dark"
            >
              <span>Daftar Alumni</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-200 py-16 lg:py-24" id="beranda">
        {/* Background Image Pesantren */}
        <div 
          className="absolute inset-0 bg-cover bg-right-bottom bg-no-repeat"
          style={{ backgroundImage: "url('/assets/img/hero-pesantren.jpg')" }}
        ></div>
        
        {/* Soft Mist White Overlay (Kiri padat, transparan ke kanan) */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

        {/* Panah Navigation Slide */}
        <button type="button" aria-label="Slide Sebelumnya" className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md text-slate-700 hover:bg-slate-50">
          <i className="fa-solid fa-chevron-left text-xs"></i>
        </button>
        <button type="button" aria-label="Slide Selanjutnya" className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md text-slate-700 hover:bg-slate-50">
          <i className="fa-solid fa-chevron-right text-xs"></i>
        </button>

        {/* Hero Content */}
        <div className="container mx-auto relative z-10 px-6 lg:px-16">
          <div className="max-w-2xl">
            {/* Pill Tag */}
            <span className="inline-block rounded-full bg-edoo-soft px-4 py-1.5 text-[11px] font-bold tracking-wider text-edoo-dark border border-edoo-light/50">
              PORTAL RESMI IKASDA DARUSSALAM NGESONG
            </span>

            {/* Heading utama */}
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-5xl">
              Sinergi Alumni & Santri Untuk Kemajuan Umat
            </h1>

            {/* Deskripsi */}
            <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
              Wadah silaturahmi, kolaborasi keilmuan, dan akselerasi potensi ribuan alumni serta santri Pondok Pesantren Darussalam Ngesong Jombang di seluruh dunia.
            </p>

            {/* Tombol Aksi */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#daftar-alumni"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-amber-700"
              >
                Jelajahi Direktori Alumni <i className="fa-solid fa-chevron-right text-[10px]"></i>
              </Link>
              <Link
                href="#profil"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:bg-slate-100"
              >
                Profil Pesantren & IKASDA
              </Link>
            </div>

            {/* Floating Reviews & Stats Badge */}
            <div className="mt-10 inline-flex items-center gap-6 rounded-2xl bg-white p-4 shadow-xl border border-slate-100">
              <div className="flex items-center gap-3">
                <div className="flex text-amber-400 text-xs gap-0.5">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">4.9 / 5.0</div>
                  <div className="text-[10px] font-medium text-slate-500">Akreditasi & Kepuasan</div>
                </div>
              </div>

              <div className="h-8 w-px bg-slate-200"></div>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-edoo-soft text-edoo-primary">
                  <i className="fa-solid fa-users-viewfinder text-sm"></i>
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900">5.400+ Alumni Terdata</div>
                  <div className="text-[10px] font-medium text-slate-500">Tersebar di 18 Korda</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Directory Section (Rapi dengan Data Alumni Realistis) */}
      <section className="py-20 bg-slate-100" id="daftar-alumni">
        <div className="container mx-auto px-6 lg:px-16">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-edoo-primary">Database Resmi</span>
              <h2 className="text-3xl font-extrabold text-slate-900">Direktori Alumni & Santri</h2>
            </div>
            <button type="button" className="inline-flex items-center gap-2 rounded-full bg-edoo-primary px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-edoo-dark">
              <i className="fa-solid fa-user-plus"></i> Tambah / Perbarui Data
            </button>
          </div>

          {/* Cards Grid */}
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {ALUMNI_DATA.map((alumni) => (
              <div key={alumni.id} className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80 transition-all hover:shadow-md hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <img
                    src={alumni.avatar}
                    alt={alumni.name}
                    className="h-14 w-14 rounded-full object-cover border-2 border-edoo-soft"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-snug">{alumni.name}</h4>
                    <span className="inline-block mt-1 text-[11px] font-bold text-edoo-primary bg-edoo-soft px-2.5 py-0.5 rounded-full">
                      {alumni.batch}
                    </span>
                  </div>
                </div>

                <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-briefcase w-4 text-slate-400"></i>
                    <span>{alumni.profession}</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot w-4 text-slate-400"></i>
                    <span>{alumni.city}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-10 border-t border-slate-800 text-center text-xs">
        <div className="container mx-auto px-4">
          <p>&copy; 2026 <strong className="text-white">IKASDA</strong> — Pondok Pesantren Darussalam Ngesong Jombang. Hak Cipta Dilindungi.</p>
        </div>
      </footer>
    </div>
  );
}