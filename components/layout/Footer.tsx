'use client';

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Globe, 
  ChevronRight, 
  Sparkles,
  Heart
} from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // Route Publik Utama
  const mainRoutes = [
    { name: "Beranda", href: "/" },
    { name: "Profil Pesantren", href: "/profile" },
    { name: "Agenda & Berita", href: "/agenda" },
    { name: "Daftar Alumni", href: "/daftar-alumni" },
  ];

  // Route Layanan Alumni & Fitur Portal
  const serviceRoutes = [
    { name: "Registrasi Alumni", href: "/alumni/register" },
    { name: "Portal Karir & Loker", href: "/karir" },
    { name: "Kemitraan Usaha Alumni", href: "/umkm" },
    { name: "Donasi & Infaq", href: "/donasi" },
  ];

  return (
    <footer className="relative w-full bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-16 pb-8 overflow-hidden">
      
      {/* Background Glow Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-amber-500/5 blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        
        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          
          {/* Kolom 1: Profil Brand & Pesantren (4 Kolom) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-2xl border border-amber-500/30 bg-amber-500/10 p-1">
                <Image
                  src="/logo-ikasda.png"
                  alt="Logo IKASDA"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div>
                <span className="block text-lg font-extrabold tracking-tight text-white">
                  IKASDA <span className="text-amber-500">JOMBANG</span>
                </span>
                <span className="block text-xs font-medium text-slate-400">
                  PP. Darussalam Ngesong
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed pt-1">
              Wadah silaturahmi, sinergi keilmuan, dan kolaborasi alumni Pondok Pesantren Darussalam Ngesong Jombang di seluruh pelosok daerah dan mancanegara.
            </p>

            <div className="pt-1">
              <span className="inline-flex items-center gap-2 rounded-full bg-amber-950/60 px-3.5 py-1.5 text-[11px] font-bold text-amber-400 border border-amber-800/50">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                Terdata 5.400+ Alumni di 18 Korda
              </span>
            </div>
          </div>

          {/* Kolom 2: Navigasi Utama (3 Kolom) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Navigasi Utama
            </h4>
            <ul className="space-y-2.5 text-xs">
              {mainRoutes.map((link, idx) => {
                const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 transition-colors ${
                        isActive
                          ? "text-amber-400 font-semibold"
                          : "text-slate-400 hover:text-amber-400"
                      }`}
                    >
                      <ChevronRight className={`h-3 w-3 ${isActive ? "text-amber-400" : "text-amber-500/70"}`} />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Kolom 3: Layanan Portal (2 Kolom) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Layanan Portal
            </h4>
            <ul className="space-y-2.5 text-xs">
              {serviceRoutes.map((link, idx) => {
                const isActive = pathname.startsWith(link.href);
                return (
                  <li key={idx}>
                    <Link
                      href={link.href}
                      className={`inline-flex items-center gap-1.5 transition-colors ${
                        isActive
                          ? "text-amber-400 font-semibold"
                          : "text-slate-400 hover:text-amber-400"
                      }`}
                    >
                      <ChevronRight className={`h-3 w-3 ${isActive ? "text-amber-400" : "text-amber-500/70"}`} />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Kolom 4: Sekretariat & Kontak (3 Kolom) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
              Sekretariat Pusat
            </h4>
            <ul className="space-y-3 text-xs">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-amber-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed text-slate-400">
                  PP. Darussalam Ngesong, Sengon, Kec. Jombang, Kab. Jombang, Jawa Timur 61418.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-amber-500 shrink-0" />
                <a href="tel:+6281234567890" className="hover:text-amber-400 transition-colors">
                  +62 812-3456-7890 (Humas)
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-amber-500 shrink-0" />
                <a href="mailto:sekretariat@ikasdangesong.com" className="hover:text-amber-400 transition-colors">
                  sekretariat@ikasdangesong.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Globe className="h-4 w-4 text-amber-500 shrink-0" />
                <a href="https://ikasdangesong.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                  ikasdangesong.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar Copyright & Developer Credit */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
          &copy; 1985 - {new Date().getFullYear()} <strong className="text-slate-300">IKASDA Jombang</strong> — PP. Darussalam Ngesong. Hak Cipta Dilindungi.
          </p>

          <div className="flex items-center gap-1 text-[11px] text-slate-500">
            <span>Developed with</span>
            <Heart className="h-3 w-3 text-red-500 fill-current" />
            <span>by</span>
            <a
              href="https://deltapytech.my.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-amber-500 transition-colors font-medium underline-offset-2 hover:underline"
              title="DeltaPy Tech - Software & Web Development Solution"
            >
              DeltaPy Tech
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}