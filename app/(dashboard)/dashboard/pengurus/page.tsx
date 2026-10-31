// app/(dashboard)/dashboard/pengurus/page.tsx

export default function PengurusPage() {
  const listPengurus = [
    { id: 1, name: "Ust. Ahmad Fauzi", role: "Ketua Korda Surabaya", phone: "08123456789" },
    { id: 2, name: "Rahmat Hidayat", role: "Sekretaris Umum", phone: "08987654321" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-extrabold text-slate-900">Data Pengurus IKASDA</h2>
      <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-bold uppercase">
            <tr>
              <th className="p-4">Nama</th>
              <th className="p-4">Jabatan</th>
              <th className="p-4">Kontak</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {listPengurus.map((p) => (
              <tr key={p.id}>
                <td className="p-4 font-bold text-slate-800">{p.name}</td>
                <td className="p-4 text-slate-600">{p.role}</td>
                <td className="p-4 text-emerald-600 font-semibold">{p.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}