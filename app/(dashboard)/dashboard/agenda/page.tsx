// app/(dashboard)/dashboard/agenda/page.tsx
"use client";

import { useState } from "react";

export default function InputAgendaPage() {
  const [form, setForm] = useState({ title: "", date: "", location: "", description: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/admin/agenda", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setMessage("✅ Agenda Berhasil Diterbitkan!");
      setForm({ title: "", date: "", location: "", description: "" });
    } else {
      setMessage("❌ Gagal menyimpan agenda");
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-xl">
      <h2 className="text-base font-extrabold text-slate-900 border-b pb-3 mb-4">Input Agenda Baru</h2>
      {message && <p className="mb-4 text-xs font-bold p-3 rounded-xl bg-slate-100">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="font-bold text-slate-600 block mb-1">Judul Agenda</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="font-bold text-slate-600 block mb-1">Tanggal Pelaksanaan</label>
          <input
            type="text"
            placeholder="Contoh: 15 November 2026"
            required
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="font-bold text-slate-600 block mb-1">Lokasi</label>
          <input
            type="text"
            required
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white font-bold p-3 rounded-xl hover:bg-emerald-700 transition-colors"
        >
          {loading ? "Menyimpan..." : "Terbitkan Agenda"}
        </button>
      </form>
    </div>
  );
}