// app/api/admin/agenda/route.tx
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const Agendas = await prisma.agenda.findMany({
        orderBy: { date: "asc" },
    });
    
  return NextResponse.json({ success: true, data: Agendas });
}

export async function POST(req: NextRequest) {
  try {
    const { title, date, location, description } = await req.json();
    const newAgenda = await prisma.agenda.create({
      data: { title, date, location, description },
    });
    return NextResponse.json({ success: true, data: newAgenda });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menyimpan agenda" }, { status: 500 });
  }
}