import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/login");

    // Jika pengguna sudah login dan membuka /login, lempar ke /dashboard
    if (isAuthPage) {
      if (isAuth) {
        return NextResponse.redirect(new URL("/dashboard", req.url));
      }
      return null;
    }

    // Jika belum login dan mengakses halaman terproteksi
    if (!isAuth) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  },
  {
    callbacks: {
      authorized({ token }) {
        return !!token;
      },
    },
  }
);

// Matcher yang aman: Kecualikan /api/auth, _next, dan file statis
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/auth (NextAuth endpoints)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico, assets, images
     */
    "/((?!api/auth|_next/static|_next/image|favicon.ico|assets).*)",
  ],
};