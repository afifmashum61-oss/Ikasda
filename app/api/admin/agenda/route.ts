// app/api/admin/agenda/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const dummyAgendas = [
    { id: "1", title: "Reuni Akbar IKASDA 2026", date: "15 November 2026", location: "Surabaya", status: "Mendatang" },
    { id: "2", title: "Kajian Rutin Alumni", date: "05 Desember 2026", location: "Online (Zoom)", status: "Mendatang" },
  ];

  return NextResponse.json({ success: true, data: dummyAgendas });
}