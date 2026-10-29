'use client';

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const { data: session } = useSession();
  const pathname = usePathname();

  // Daftar menu navigasi berbasis route
  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Profil", href: "/profile" },
    { name: "Pengurus", href: "/pengurus" },
    { name: "Agenda & Berita", href: "/agenda" },
    { name: "Daftar Alumni", href: "/alumni" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-12">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-edoo-soft p-1.5 border border-edoo-light">
            <Image 
              src="/assets/img/logo-ikasda.png" 
              alt="Logo IKASDA" 
              width={32} 
              height={32} 
              className="h-full w-full object-contain" 
            />
          </div>
          <div>
            <div className="text-lg font-extrabold tracking-tight text-slate-900 leading-none">
              IKASDA <span className="text-edoo-primary">JOMBANG</span>
            </div>
            <div className="text-[10px] font-semibold text-slate-400 mt-1">PP. Darussalam Ngesong</div>
          </div>
        </Link>

        {/* Quick Search Dropdown */}
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

        {/* Dynamic Navigation Links dengan Animasi Route Aktif */}
        <nav className="hidden items-center gap-6 text-xs font-bold md:flex">
          {navLinks.map((link) => {
            // Mengecek apakah route saat ini cocok dengan href menu
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 transition-colors duration-200 ${
                  isActive ? "text-orange-500" : "text-slate-700 hover:text-orange-700"
                }`}
              >
                {link.name}
                
                {/* Animasi Garis Bawah (Underline Bar) */}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-edoo-primary transition-all duration-300 ease-in-out ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* User Auth Action (Uncomment jika ingin digunakan) */}
        {/* 
        <div className="flex items-center gap-3">
          {session ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="text-xs font-bold text-slate-700 hover:text-edoo-primary">
                {session.user?.name}
              </Link>
              <button
                onClick={() => signOut({ callbackUrl: "/login" })}
                className="rounded-full border border-slate-300 px-4 py-2 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-all"
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
        */}
      </div>
    </header>
  );
}