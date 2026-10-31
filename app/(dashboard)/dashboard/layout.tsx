// app/(dashboard)/dashboard/layout.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Sidebar from "@/components/admin/AdminSidebar";
import DashboardNavbar from "@/components/admin/DashboardNavbar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  // Proteksi: Wajib login & Wajib Role ADMIN
  if (!session) {
    redirect("/login");
  }

  if (session.user?.role !== "ADMIN") {
    redirect("/"); // Lempar balik ke Landing Page jika bukan Admin
  }

  return (
    <div className="min-h-screen bg-slate-100 font-sans flex flex-col">
      <DashboardNavbar userName={session.user?.name || "Admin"} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-8 max-w-6xl">
          {children}
        </main>
      </div>
    </div>
  );
}