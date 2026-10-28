import type { Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import "./globals.css";

export const metadata: Metadata = {
  title: "IKASDA - Portal Dinamis Alumni & Santri",
  description: "Portal Resmi Dinamis IKASDA Pondok Pesantren Darussalam Ngesong Jombang",
  icons: {
    icon: "/assets/img/logo-ikasda.png",
  }
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
        <link rel="icon" href="/assets/img/logo-ikasda.png" type="image/x-icon" />
      </head>
      <body>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}