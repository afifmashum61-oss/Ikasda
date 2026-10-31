// middleware.ts
import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
  const token = await getToken({ 
    req, 
    secret: process.env.NEXTAUTH_SECRET 
  });
  
  const { pathname } = req.nextUrl;
  const isAuthPage = pathname.startsWith("/login");

  // 1. Jika user SUDAH login dan mencoba ke /login, lemparkan ke /dashboard
  if (isAuthPage) {
    if (token) {
      return NextResponse.redirect(new URL("/dashboard", req.url));
    }
    return NextResponse.next();
  }

  // 2. Jika user BELUM login dan mencoba ke halaman terproteksi
  if (!token) {
    // Cukup redirect ke /login TANPA menyusun callbackUrl secara manual
    // agar NextAuth tidak melakukan nesting URL yang panjang
    const loginUrl = new URL("/login", req.url);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// Hanya jalankan middleware pada route yang BENAR-BENAR butuh proteksi
export const config = {
  matcher: [
    "/dashboard/:path*",
    "/agenda/:path*",
    "/pengurus/:path*",
    "/profile/:path*",
    "/search/:path*",
    "/login",
  ],
};