import { Suspense } from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

async function DashboardContent() {
  // Mengambil session server-side menggunakan NextAuth v4 (authOptions)
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const userName = session.user?.name || "Alumni";

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <header className="bg-white border-b border-slate-200 py-4 px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/assets/img/logo-ikasda.png" 
            alt="IKASDA" 
            width={32} 
            height={32} 
            className="h-8 w-auto" 
            priority
          />
          <h1 className="font-extrabold text-slate-900 text-base">Dashboard Alumni</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-xs font-semibold text-slate-700">
            Halo, <strong className="text-edoo-primary">{userName}</strong>
          </span>
          <Link
            href="/api/auth/signout"
            className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
          >
            Keluar
          </Link>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-edoo-deep to-edoo-primary rounded-2xl p-6 text-white shadow-md">
            <span className="text-[10px] font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full">
              KTA Digital Resmi
            </span>
            <h3 className="mt-4 text-xl font-extrabold">{userName}</h3>
            <p className="text-xs text-edoo-soft mt-1">ID Alumni: IKASDA-2026-0042</p>
            <div className="mt-6 border-t border-white/20 pt-4 flex justify-between items-center text-xs">
              <span>Status: <strong className="text-edoo-light">Terverifikasi</strong></span>
              <button className="bg-white text-edoo-dark px-3 py-1.5 rounded-lg font-bold text-[11px] hover:bg-slate-100 transition-colors">
                Cetak KTA
              </button>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase">Informasi Korda</h4>
            <p className="text-lg font-extrabold text-slate-900 mt-2">Korda Surabaya Raya</p>
            <p className="text-xs text-slate-500 mt-1">Ketua: Ust. Ahmad Fauzi</p>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <h4 className="text-xs font-bold text-slate-400 uppercase">Agenda Terdekat</h4>
            <p className="text-lg font-extrabold text-slate-900 mt-2">Reuni Akbar 2026</p>
            <p className="text-xs text-edoo-primary font-bold mt-1">15 November 2026</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function DashboardPage() {
  return (
    <Suspense 
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-slate-100">
          <p className="text-xs font-bold text-slate-500 animate-pulse">Memuat data dashboard...</p>
        </div>
      }
    >
      <DashboardContent />
    </Suspense>
  );
}