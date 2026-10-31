// components/admin/Sidebar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/app/providers";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: "📊" },
  { name: "Profile Alumni", href: "/dashboard/profile", icon: "👤" },
  { name: "Agenda", href: "/dashboard/agenda", icon: "📅" },
  { name: "Data Pengurus", href: "/dashboard/pengurus", icon: "👥" },
  { name: "Pencarian", href: "/dashboard/search", icon: "🔍" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  return (
    <aside className="w-64 bg-white border-r border-slate-200 min-h-screen flex flex-col justify-between p-4">
      <div>
        <div className="px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-wider">
          Menu ({lang})
        </div>
        <nav className="mt-2 space-y-1">
          {menuItems.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs font-bold transition-all ${
                  isActive
                    ? "bg-emerald-50 text-emerald-600 shadow-sm"
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="border-t border-slate-100 pt-4 px-3 text-[11px] text-slate-400">
        © 2026 IKASDA Platform
      </div>
    </aside>
  );
}