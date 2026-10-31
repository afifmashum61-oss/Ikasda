// app/(dashboard)/layout.tsx
import Image from "next/image";
import Link from "next/link";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
          <h1 className="font-extrabold text-slate-900 text-base">
            Dashboard Alumni
          </h1>
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
        {children}
      </main>
    </div>
  );
}