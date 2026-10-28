import AlumniCard from "../cards/AlumniCard";

const ALUMNI_DATA = [
  {
    id: 1,
    name: "Gus Dr. H. Ahmad Syarifuddin, M.Pd.",
    batch: "Angkatan 2010",
    profession: "Pengasuh Pesantren & Dosen UI",
    city: "Jombang, Jawa Timur",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 2,
    name: "Ning Hjh. Siti Fatimah, S.H., M.H.",
    batch: "Angkatan 2012",
    profession: "Advokat & Konsultan Hukum",
    city: "Surabaya, Jawa Timur",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    name: "Muhammad Rizky Maulana, S.Kom.",
    batch: "Angkatan 2015",
    profession: "Senior Software Engineer",
    city: "Jakarta Selatan, DKI Jakarta",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
  },
];

export default function DirectorySection() {
  return (
    <section className="py-20 bg-slate-100" id="daftar-alumni">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-edoo-primary">Database Resmi</span>
            <h2 className="text-3xl font-extrabold text-slate-900">Direktori Alumni & Santri</h2>
          </div>
          <button type="button" className="inline-flex items-center gap-2 rounded-full bg-edoo-primary px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-edoo-dark">
            <i className="fa-solid fa-user-plus"></i> Tambah / Perbarui Data
          </button>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ALUMNI_DATA.map((alumni) => (
            <AlumniCard key={alumni.id} {...alumni} />
          ))}
        </div>
      </div>
    </section>
  );
}