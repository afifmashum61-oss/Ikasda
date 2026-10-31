// app/(dashboard)/layout.tsx
export const dynamic = 'force-dynamic';

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/admin/sidebar";
import DashboardNavbar from "@/components/admin/DashboardNavbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  const userName = session?.user?.name || "Alumni";

  return (
    <div className="min-h-screen bg-slate-100 font-sans flex flex-col">
      <DashboardNavbar userName={userName} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  );
}