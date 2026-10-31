// app/(dashboard)/dashboard/agenda/page.tsx
export default function AgendaPage() {
  const agendas = [
    { id: 1, title: "Reuni Akbar IKASDA 2026", date: "15 November 2026", location: "Surabaya", status: "Mendatang" },
    { id: 2, title: "Kajian Rutin Alumni", date: "05 Desember 2026", location: "Online (Zoom)", status: "Mendatang" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-lg font-extrabold text-slate-900">Agenda Alumni</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {agendas.map((agenda) => (
          <div key={agenda.id} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
            <span className="text-[10px] font-bold uppercase bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-full">
              {agenda.status}
            </span>
            <h3 className="text-base font-extrabold text-slate-900 mt-3">{agenda.title}</h3>
            <p className="text-xs text-slate-500 mt-1">📅 {agenda.date} | 📍 {agenda.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
}