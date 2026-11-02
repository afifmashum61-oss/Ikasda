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
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />

      <title>IKASDA - Ikatan Alumni dan Keluarga Santri Darussalam Ngesong</title>
      <meta name="title" content="IKASDA - Ikatan Alumni dan Keluarga Santri Darussalam Ngesong" />
      <meta name="description" content="Portal resmi Ikatan Alumni dan Keluarga Santri Darussalam Ngesong (IKASDA). Wadah silaturahmi, direktori alumni, agenda, serta informasi jaringan alumni Pondok Pesantren Darussalam Ngesong." />
      <meta name="keywords" content="IKASDA, Alumni IKASDA, Darussalam Ngesong, Pondok Pesantren Darussalam Ngesong, Ikatan Alumni Santri, Jaringan Alumni, Santri Ngesong" />
      <meta name="author" content="PT Delta Teknologi Indonesia" />
      <meta name="publisher" content="IKASDA" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href="https://ikasdangesong.com/" />

      <meta name="theme-color" content="#1E3A8A" />
      <meta name="msapplication-TileColor" content="#1E3A8A" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="IKASDA" />

      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      <link rel="shortcut icon" href="https://ikasdangesong.com/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://ikasdangesong.com/logo-ikasda.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://ikasdangesong.com/logo-ikasda.png" />
      <link rel="icon" type="image/png" sizes="48x48" href="https://ikasdangesong.com/logo-ikasda.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="https://ikasdangesong.com/logo-ikasda.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://ikasdangesong.com/logo-ikasda.png" />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:url" content="https://ikasdangesong.com/" />
      <meta property="og:site_name" content="IKASDA" />
      <meta property="og:title" content="IKASDA - Ikatan Alumni dan Keluarga Santri Darussalam Ngesong" />
      <meta property="og:description" content="Wadah resmi jaringan silaturahmi, direktori alumni, agenda, dan informasi alumni Pondok Pesantren Darussalam Ngesong." />
      <meta property="og:image" content="https://ikasdangesong.com/logo-ikasda.png" />
      <meta property="og:image:secure_url" content="https://ikasdangesong.com/logo-ikasda.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Logo Resmi IKASDA" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://ikasdangesong.com/" />
      <meta name="twitter:title" content="IKASDA - Ikatan Alumni dan Keluarga Santri Darussalam Ngesong" />
      <meta name="twitter:description" content="Wadah resmi jaringan silaturahmi, direktori alumni, agenda, dan informasi alumni Pondok Pesantren Darussalam Ngesong." />
      <meta name="twitter:image" content="https://ikasdangesong.com/logo-ikasda.png" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            "name": "IKASDA",
            "alternateName": "Ikatan Alumni dan Keluarga Santri Darussalam Ngesong",
            "url": "https://ikasdangesong.com/",
            "logo": "https://ikasdangesong.com/logo-ikasda.png",
            "sameAs": [
              "https://ikasdangesong.com"
            ],
            "description": "Ikatan Alumni dan Keluarga Santri Darussalam Ngesong (IKASDA) adalah lembaga organisasi resmi alumni Pondok Pesantren Darussalam Ngesong."
          })
        }}
      />
    </head>
      <body className="bg-white text-slate-800 antialiased dark:bg-zinc-950 dark:text-zinc-100 transition-colors">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}