import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-200 py-16 lg:py-24" id="beranda">
      <div 
        className="absolute inset-0 bg-cover bg-right-bottom bg-no-repeat"
        style={{ backgroundImage: "url('/assets/img/hero-pesantren.jpg')" }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent"></div>

      <button type="button" aria-label="Previous" className="absolute left-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md text-slate-700">
        <i className="fa-solid fa-chevron-left text-xs"></i>
      </button>
      <button type="button" aria-label="Next" className="absolute right-4 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-md text-slate-700">
        <i className="fa-solid fa-chevron-right text-xs"></i>
      </button>

      <div className="container mx-auto relative z-10 px-6 lg:px-16">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full bg-edoo-soft px-4 py-1.5 text-[11px] font-bold tracking-wider text-edoo-dark border border-edoo-light/50">
            PORTAL RESMI IKASDA DARUSSALAM NGESONG
          </span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.18] tracking-tight text-slate-900 sm:text-5xl">
            Sinergi Alumni & Santri Untuk Kemajuan Umat
          </h1>

          <p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
            Wadah silaturahmi, kolaborasi keilmuan, dan akselerasi potensi ribuan alumni serta santri Pondok Pesantren Darussalam Ngesong Jombang di seluruh dunia.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="#daftar-alumni"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-600 px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition-all hover:bg-amber-700"
            >
              Jelajahi Direktori Alumni <i className="fa-solid fa-chevron-right text-[10px]"></i>
            </Link>
            <Link
              href="#profil"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-slate-900 bg-white px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-slate-900 shadow-sm transition-all hover:bg-slate-100"
            >
              Profil Pesantren & IKASDA
            </Link>
          </div>

          <div className="mt-10 inline-flex items-center gap-6 rounded-2xl bg-white p-4 shadow-xl border border-slate-100">
            <div className="flex items-center gap-3">
              <div className="flex text-amber-400 text-xs gap-0.5">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">4.9 / 5.0</div>
                <div className="text-[10px] font-medium text-slate-500">Akreditasi & Kepuasan</div>
              </div>
            </div>

            <div className="h-8 w-px bg-slate-200"></div>

            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-edoo-soft text-edoo-primary">
                <i className="fa-solid fa-users-viewfinder text-sm"></i>
              </div>
              <div>
                <div className="text-sm font-extrabold text-slate-900">5.400+ Alumni Terdata</div>
                <div className="text-[10px] font-medium text-slate-500">Tersebar di 18 Korda</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}