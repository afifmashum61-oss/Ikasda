import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);

  const userName = session?.user?.name || "Alumni";

  return (
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
  );
}