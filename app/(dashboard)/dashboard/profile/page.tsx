// app/(dashboard)/dashboard/profile/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);
  const user = session?.user?.email
    ? await prisma.user.findUnique({ where: { email: session.user.email } })
    : null;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-2xl">
      <h2 className="text-lg font-extrabold text-slate-900 border-b pb-4 mb-4">Profil Alumni</h2>
      <div className="space-y-4 text-xs">
        <div>
          <label className="text-slate-400 font-bold uppercase">Nama Lengkap</label>
          <p className="text-sm font-semibold text-slate-800 mt-1">{user?.name || "-"}</p>
        </div>
        <div>
          <label className="text-slate-400 font-bold uppercase">Email</label>
          <p className="text-sm font-semibold text-slate-800 mt-1">{user?.email || "-"}</p>
        </div>
        <div>
          <label className="text-slate-400 font-bold uppercase">Role Akses</label>
          <p className="text-sm font-semibold text-emerald-600 mt-1">{user?.role || "USER"}</p>
        </div>
      </div>
    </div>
  );
}