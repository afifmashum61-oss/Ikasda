// middleware.ts
import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/login");

    // Jika pengguna sudah login dan mencoba mengakses halaman /login, redirect ke /dashboard
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return null;
    }

    // Jika pengguna belum login dan mengakses halaman terproteksi
    if (!isAuth) {
      let from = req.nextUrl.pathname;
      if (req.nextUrl.search) {
        from += req.nextUrl.search;
      }

      return NextResponse.redirect(
        new URL(`/login?from=${encodeURIComponent(from)}`, req.url)
      );
    }
  },
  {
    callbacks: {
      authorized({ token }) {
        // Mengembalikan true jika token ada (user sudah terautentikasi)
        return !!token;
      },
    },
  }
);

// Tentukan rute/halaman mana saja yang memerlukan autentikasi
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