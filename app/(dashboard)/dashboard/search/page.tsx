// app/(dashboard)/dashboard/search/page.tsx
"use client";

import { useState } from "react";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;

    setLoading(true);
    try {
      const res = await fetch(`/api/admin/search?q=${encodeURIComponent(query)}`);
      const json = await res.json();
      if (json.success) setResults(json.data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 max-w-3xl">
      <h2 className="text-lg font-extrabold text-slate-900">Pencarian Alumni</h2>
      
      <form onSubmit={handleSearch} className="flex gap-2">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Cari nama atau email alumni..."
          className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-xs focus:outline-none focus:border-emerald-500 bg-white"
        />
        <button
          type="submit"
          className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-xs font-bold hover:bg-emerald-700 transition-colors"
        >
          {loading ? "Mencari..." : "Cari"}
        </button>
      </form>

      {results.length > 0 && (
        <div className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm space-y-3">
          {results.map((user) => (
            <div key={user.id} className="p-3 hover:bg-slate-50 rounded-xl flex justify-between items-center text-xs">
              <div>
                <p className="font-bold text-slate-800">{user.name}</p>
                <p className="text-slate-500">{user.email}</p>
              </div>
              <span className="text-[10px] font-bold bg-slate-100 text-slate-600 px-2 py-1 rounded-full">
                {user.role}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}