// app/layout.tsx
import { Providers } from "./providers";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-ikasda.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Ikatan Alumni dan Keluarga Santri Darussalam Ngesong" />
        <meta name="keywords" content="Ikatan Alumni, Keluarga Santri, Darussalam Ngesong, IKASDA, Alumni IKASDA" />
        <meta name="author" content="IKASDA" />
        <meta name="theme-color" content="#1E3A8A" />
        <meta property="og:title" content="IKASDA - Ikatan Alumni dan Keluarga Santri Darussalam Ngesong" />
        <meta property="og:description" content="Ikatan Alumni dan Keluarga Santri Darussalam Ngesong" />
        <meta property="og:image" content="/logo-ikasda.png" />
        <meta property="og:url" content="https://ikasda.deltapytech.my.id" />
        <meta property="og:type" content="website" />
      </head>
      <body className="bg-white text-slate-800 antialiased dark:bg-zinc-950 dark:text-zinc-100 transition-colors">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}