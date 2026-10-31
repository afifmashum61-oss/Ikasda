// app/api/admin/pengurus/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const dummyPengurus = [
    { id: "1", name: "Ust. Ahmad Fauzi", position: "Ketua Korda Surabaya", phone: "08123456789" },
    { id: "2", name: "Rahmat Hidayat", position: "Sekretaris Umum", phone: "08987654321" },
  ];

  return NextResponse.json({ success: true, data: dummyPengurus });
}