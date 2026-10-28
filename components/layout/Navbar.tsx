"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
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

        {/* Quick Search */}
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
          <Link href="#profil" className="text-slate-700 hover:text-edoo-primary">Profil</Link>
          <Link href="#pengurus" className="text-slate-700 hover:text-edoo-primary">Pengurus</Link>
          <Link href="#agenda-berita" className="text-slate-700 hover:text-edoo-primary">Agenda & Berita</Link>
          <Link href="#daftar-alumni" className="text-slate-700 hover:text-edoo-primary">Daftar Alumni</Link>
        </nav>

        {/* User Auth Action */}
        <div className="flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="text-xs font-bold text-slate-700 hover:text-edoo-primary">
                {session.user?.name}
              </Link>
              <button
                onClick={() => signOut()}
                className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100"
              >
                Keluar
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="flex items-center gap-2 rounded-full bg-orange-400 px-5 py-2.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-orange-600"
            >
              <span>Masuk / Login</span>
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20">
                <i className="fa-solid fa-arrow-right text-[10px]"></i>
              </div>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}