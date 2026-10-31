// app/(dashboard)/dashboard/profile/page.tsx
"use client";

import { useState } from "react";

export default function InputAlumniPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "USER" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    const res = await fetch("/api/admin/alumni", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setMessage("✅ Data Alumni Berhasil Ditambahkan!");
      setForm({ name: "", email: "", password: "", role: "USER" });
    } else {
      setMessage(`❌ ${data.error}`);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-xl">
      <h2 className="text-base font-extrabold text-slate-900 border-b pb-3 mb-4">Input Data Alumni Baru</h2>
      {message && <p className="mb-4 text-xs font-bold p-3 rounded-xl bg-slate-100">{message}</p>}

      <form onSubmit={handleSubmit} className="space-y-4 text-xs">
        <div>
          <label className="font-bold text-slate-600 block mb-1">Nama Lengkap</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="font-bold text-slate-600 block mb-1">Email</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="font-bold text-slate-600 block mb-1">Password Default</label>
          <input
            type="password"
            required
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-emerald-500"
          />
        </div>
        <div>
          <label className="font-bold text-slate-600 block mb-1">Role</label>
          <select
            value={form.role}
            onChange={(e) => setForm({ ...form, role: e.target.value })}
            className="w-full border border-slate-200 rounded-xl p-3 focus:outline-none focus:border-emerald-500 bg-white"
          >
            <option value="USER">USER (Alumni)</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white font-bold p-3 rounded-xl hover:bg-emerald-700 transition-colors"
        >
          {loading ? "Menyimpan..." : "Simpan Data Alumni"}
        </button>
      </form>
    </div>
  );
}