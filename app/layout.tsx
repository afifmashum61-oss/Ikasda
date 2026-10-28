// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKASDA - Portal Dinamis Alumni & Santri Pondok Pesantren Darussalam Ngesong Jombang",
  description: "Portal Resmi Dinamis IKASDA (Ikatan Alumni & Santri Pondok Pesantren Darussalam Ngesong Jombang). Direktori alumni, profil pesantren, pengurus masa ke masa, serta agenda & berita.",
  keywords: ["IKASDA", "Darussalam Ngesong Jombang", "Alumni Pesantren Darussalam", "Santri Ngesong", "Portal Alumni"],
  authors: [{ name: "Pengurus Pusat IKASDA" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        {/* FontAwesome CDN */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        {/* Local Stylesheet */}
        <link rel="stylesheet" href="/assets/css/style.css" />
      </head>
      <body>{children}</body>
    </html>
  );
}