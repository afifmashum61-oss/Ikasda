// app/api/admin/alumni/route.ts
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password, role } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newAlumni = await prisma.user.create({
      data: { name, email, password: hashedPassword, role: role || "USER" },
    });

    return NextResponse.json({ success: true, data: newAlumni });
  } catch (error) {
    return NextResponse.json({ error: "Gagal menambahkan alumni/email sudah ada" }, { status: 500 });
  }
}