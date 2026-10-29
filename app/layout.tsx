// app/layout.tsx
import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKASDA - Portal Dinamis Alumni & Santri",
  description: "Portal Resmi Dinamis IKASDA Pondok Pesantren Darussalam Ngesong Jombang",
  icons: {
    icon: "/assets/img/logo-ikasda.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
      </head>
      <body className="flex min-h-screen flex-col bg-slate-50 font-sans text-slate-900">
        <SessionProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}