'use client';

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useLanguage } from "@/app/providers";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Layers, 
  ChevronDown, 
  Sun, 
  Moon, 
  Globe, 
  Menu,
  X,
  BookOpen,
  Building2,
  CalendarDays,
  Briefcase,
  HeartHandshake,
  HelpCircle,
  Sparkles,
  Grid
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLanguage();

  const [mounted, setMounted] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isLayananOpen, setIsLayananOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const categoryRef = useRef<HTMLDivElement>(null);
  const layananRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (categoryRef.current && !categoryRef.current.contains(event.target as Node)) {
        setIsCategoryOpen(false);
      }
      if (layananRef.current && !layananRef.current.contains(event.target as Node)) {
        setIsLayananOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsMobileMenuOpen(false);
      setIsCategoryOpen(false);
      setIsLayananOpen(false);
    }
  };

  const navLinks = [
    { name: lang === "ID" ? "Beranda" : "Home", href: "/" },
    { name: lang === "ID" ? "Profil" : "Profile", href: "/profile" },
    { name: lang === "ID" ? "Pengurus" : "Management", href: "/pengurus" },
    { name: lang === "ID" ? "Agenda & Berita" : "News & Events", href: "/agenda" },
    { name: lang === "ID" ? "Daftar Alumni" : "Directory", href: "/daftar-alumni" },
  ];

  const featureGridItems = [
    {
      title: lang === "ID" ? "Perpustakaan Digital" : "Digital Library",
      desc: lang === "ID" ? "Akses jurnal & arsip kitab turats santri" : "Access journals & Islamic digital archives",
      icon: BookOpen,
      href: "/perpustakaan",
      badge: "Baru",
    },
    {
      title: lang === "ID" ? "Jaringan Korda" : "Regional Network",
      desc: lang === "ID" ? "Direktori & peta 18 Korda alumni" : "Directory of 18 regional chapters",
      icon: Building2,
      href: "/korda",
    },
    {
      title: lang === "ID" ? "Bursa Karir & UMKM" : "Career & Business",
      desc: lang === "ID" ? "Lowongan kerja & etalase produk alumni" : "Job portal & alumni product showcase",
      icon: Briefcase,
      href: "/bisnis",
      badge: "Populer",
    },
    {
      title: lang === "ID" ? "Program Beasiswa" : "Scholarship Aid",
      desc: lang === "ID" ? "Bantuan pendidikan & dana abadi santri" : "Student aid & endowment funds",
      icon: HeartHandshake,
      href: "/beasiswa",
    },
    {
      title: lang === "ID" ? "Kalender Agenda" : "Events Calendar",
      desc: lang === "ID" ? "Jadwal reuni & pengajian selapanan" : "Schedule of gatherings & lectures",
      icon: CalendarDays,
      href: "/kalender",
    },
    {
      title: lang === "ID" ? "Pusat Bantuan" : "Help Center",
      desc: lang === "ID" ? "Panduan sistem & kontak sekretariat" : "System guides & PR contact",
      icon: HelpCircle,
      href: "/faq",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/95 transition-colors">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 lg:px-8">
        
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 p-1.5 border border-amber-200 dark:bg-amber-950/60 dark:border-amber-800/50">
            <Image 
              src="/assets/img/logo-ikasda.png" 
              alt="Logo IKASDA" 
              width={36} 
              height={36} 
              className="h-full w-full object-contain" 
            />
          </div>
          <div className="hidden sm:block">
            <div className="text-lg font-extrabold tracking-tight text-slate-900 leading-none dark:text-white">
              IKASDA <span className="text-amber-600 dark:text-amber-500">JOMBANG</span>
            </div>
            <div className="text-[10px] font-semibold text-slate-400 dark:text-zinc-400 mt-1">
              PP. Darussalam Ngesong
            </div>
          </div>
        </Link>

        {/* Quick Search Bar */}
        <div className="relative hidden lg:flex items-center" ref={categoryRef}>
          <form 
            onSubmit={handleSearch}
            className="flex items-center rounded-full border border-slate-200 bg-slate-100/70 px-3.5 py-1.5 dark:border-zinc-800 dark:bg-zinc-800/70 transition-all focus-within:border-amber-500"
          >
            <button 
              type="button" 
              onClick={() => {
                setIsCategoryOpen(!isCategoryOpen);
                setIsLayananOpen(false);
              }}
              className="flex items-center gap-1.5 border-r border-slate-300 pr-2.5 text-xs font-bold text-slate-700 hover:text-amber-600 dark:border-zinc-700 dark:text-zinc-200 dark:hover:text-amber-500 transition-colors"
            >
              <Layers className="h-3.5 w-3.5 text-amber-600 dark:text-amber-500" />
              <span>Menu</span>
              <ChevronDown className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${isCategoryOpen ? "rotate-180" : ""}`} />
            </button>

            <div className="flex items-center gap-2 pl-2.5">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={lang === "ID" ? "Cari di portal..." : "Search..."}
                className="w-28 xl:w-36 bg-transparent text-xs text-slate-800 dark:text-zinc-100 outline-none placeholder:text-slate-400 dark:placeholder:text-zinc-500"
              />
              <button type="submit" aria-label="Cari" className="text-slate-400 hover:text-amber-600 transition-colors">
                <Search className="h-3.5 w-3.5" />
              </button>
            </div>
          </form>

          {/* Search Category Dropdown */}
          <AnimatePresence>
            {isCategoryOpen && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                className="absolute top-full left-0 mt-2 w-64 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 z-50"
              >
                <div className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 dark:text-zinc-500 px-3 py-1 mb-1">
                  {lang === "ID" ? "Kategori Pencarian" : "Search Categories"}
                </div>
                <div className="space-y-1">
                  {["Alumni", "Berita & Pengumuman", "Korda Regional", "Agenda Kegiatan"].map((cat, i) => (
                    <button
                      key={i}
                      onClick={() => { setSearchQuery(cat); setIsCategoryOpen(false); }}
                      className="flex w-full items-center justify-between rounded-xl px-3 py-2 text-xs font-semibold text-slate-700 hover:bg-amber-50 hover:text-amber-600 dark:text-zinc-300 dark:hover:bg-amber-950/40 transition-colors"
                    >
                      <span>{cat}</span>
                      <Sparkles className="h-3 w-3 text-amber-500 opacity-60" />
                    </button>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Main Navigation Links */}
        <nav className="hidden items-center gap-5 xl:gap-6 text-xs font-bold lg:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative py-2 transition-colors duration-200 ${
                  isActive 
                    ? "text-amber-600 dark:text-amber-500" 
                    : "text-slate-700 hover:text-amber-600 dark:text-zinc-300 dark:hover:text-amber-500"
                }`}
              >
                {link.name}
                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full rounded-full bg-amber-600 dark:bg-amber-500 transition-all duration-300 ease-in-out ${
                    isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
                  }`}
                />
              </Link>
            );
          })}

          {/* ACCORDION MEGA MENU DROPDOWN (Rapi & Tidak Bertumpuk) */}
          <div className="relative" ref={layananRef}>
            <button
              type="button"
              onClick={() => {
                setIsLayananOpen(!isLayananOpen);
                setIsCategoryOpen(false);
              }}
              className={`flex items-center gap-1.5 py-2 transition-colors duration-200 ${
                isLayananOpen
                  ? "text-amber-600 dark:text-amber-500"
                  : "text-slate-700 hover:text-amber-600 dark:text-zinc-300 dark:hover:text-amber-500"
              }`}
            >
              <Grid className="h-3.5 w-3.5 text-amber-600 dark:text-amber-500" />
              <span>{lang === "ID" ? "Layanan Portal" : "Services"}</span>
              <ChevronDown className={`h-3 w-3 transition-transform duration-300 ${isLayananOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Mega Menu Popup Container */}
            <AnimatePresence>
              {isLayananOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.98 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute right-0 xl:-right-20 top-full mt-3 w-[480px] sm:w-[520px] rounded-3xl border border-slate-200/80 bg-white/95 p-5 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900/95 backdrop-blur-xl z-50"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-3 dark:border-zinc-800">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-500 flex items-center gap-1.5">
                      <Sparkles className="h-3.5 w-3.5" />
                      {lang === "ID" ? "Fitur & Fasilitas Portal" : "Portal Features & Services"}
                    </span>
                    <span className="text-[10px] text-slate-400 dark:text-zinc-500">
                      IKASDA Hub
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-2.5">
                    {featureGridItems.map((item, idx) => {
                      const Icon = item.icon;
                      return (
                        <Link
                          key={idx}
                          href={item.href}
                          onClick={() => setIsLayananOpen(false)}
                          className="group relative flex items-start gap-3 rounded-2xl border border-slate-100 bg-slate-50/50 p-3 transition-all duration-200 hover:border-amber-500/50 hover:bg-amber-50/50 dark:border-zinc-800/80 dark:bg-zinc-800/40 dark:hover:border-amber-500/40 dark:hover:bg-amber-950/30"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-400 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                            <Icon className="h-4 w-4" />
                          </div>
                          <div>
                            <div className="flex items-center gap-1.5">
                              <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-100 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                                {item.title}
                              </h4>
                              {item.badge && (
                                <span className="rounded-full bg-amber-500/20 px-1.5 py-0.2 text-[8px] font-extrabold text-amber-700 dark:text-amber-400">
                                  {item.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-0.5 text-[10px] leading-snug text-slate-500 dark:text-zinc-400 line-clamp-2">
                              {item.desc}
                            </p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* Controls: Theme + Language Controls */}
        <div className="flex items-center gap-2.5">
          
          {/* Light / Dark Mode Toggle */}
          {mounted && (
            <button
              type="button"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle Theme"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 transition-all hover:border-amber-500 hover:text-amber-600 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:border-amber-500 dark:hover:text-amber-400"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-600" />
              )}
            </button>
          )}

          {/* Language Switcher */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setIsLangOpen(!isLangOpen)}
              className="flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-2.5 py-2 text-xs font-bold text-slate-700 transition-all hover:border-amber-500 dark:border-zinc-800 dark:bg-zinc-800 dark:text-zinc-300"
            >
              <Globe className="h-3.5 w-3.5 text-amber-600 dark:text-amber-500" />
              <span>{lang}</span>
              <ChevronDown className="h-3 w-3 text-slate-400" />
            </button>

            {isLangOpen && (
              <div className="absolute right-0 mt-2 w-28 rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl dark:border-zinc-800 dark:bg-zinc-900 z-50">
                <button
                  onClick={() => { setLang("ID"); setIsLangOpen(false); }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    lang === "ID" ? "bg-amber-50 text-amber-800 dark:bg-amber-950/80 dark:text-amber-400" : "text-slate-600 hover:bg-slate-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  }`}
                >
                  <span>Bahasa</span>
                  <span className="text-[10px] font-extrabold uppercase">ID</span>
                </button>
                <button
                  onClick={() => { setLang("EN"); setIsLangOpen(false); }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                    lang === "EN" ? "bg-amber-50 text-amber-800 dark:bg-amber-950/80 dark:text-amber-400" : "text-slate-600 hover:bg-slate-100 dark:text-zinc-400 dark:hover:bg-zinc-800"
                  }`}
                >
                  <span>English</span>
                  <span className="text-[10px] font-extrabold uppercase">EN</span>
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 text-slate-700 lg:hidden dark:border-zinc-800 dark:text-zinc-200"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Area */}
      {isMobileMenuOpen && (
        <div className="border-b border-slate-200 bg-white p-4 lg:hidden dark:border-zinc-800 dark:bg-zinc-900">
          <form onSubmit={handleSearch} className="mb-4 flex items-center rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-800">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={lang === "ID" ? "Cari di portal..." : "Search portal..."}
              className="w-full bg-transparent text-xs text-slate-800 dark:text-zinc-100 outline-none"
            />
            <button type="submit" className="text-slate-400">
              <Search className="h-4 w-4" />
            </button>
          </form>

          <nav className="flex flex-col gap-2 text-xs font-bold">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2.5 text-slate-700 hover:bg-amber-50 hover:text-amber-600 dark:text-zinc-200 dark:hover:bg-amber-950/40"
              >
                {link.name}
              </Link>
            ))}

            <div className="mt-2 border-t border-slate-100 pt-2 dark:border-zinc-800">
              <div className="px-3 py-1 text-[10px] font-extrabold uppercase text-amber-600">
                {lang === "ID" ? "Layanan Portal" : "Services"}
              </div>
              <div className="grid grid-cols-1 gap-1 mt-1">
                {featureGridItems.map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-slate-600 hover:bg-amber-50 hover:text-amber-600 dark:text-zinc-300 dark:hover:bg-amber-950/40"
                  >
                    <item.icon className="h-4 w-4 text-amber-600 shrink-0" />
                    <span>{item.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}