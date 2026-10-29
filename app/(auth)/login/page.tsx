"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError("Email atau password salah. Silakan coba lagi.");
      setLoading(false);
    } else {
      router.push("/dashboard");
      router.refresh();
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100 px-4 font-sans">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-slate-200">
        <div className="text-center">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src="/assets/img/logo-ikasda.png" alt="IKASDA" width={40} height={40} className="h-10 w-auto" />
            <span className="text-xl font-extrabold text-slate-900">
              IKASDA <span className="text-edoo-primary">JOMBANG</span>
            </span>
          </Link>
          <h2 className="mt-4 text-2xl font-bold text-slate-900">Masuk ke Portal</h2>
          <p className="mt-1 text-xs text-slate-500">Silakan masukkan akun alumni Anda</p>
        </div>

        {error && (
          <div className="mt-4 rounded-xl bg-red-50 p-3 text-xs font-semibold text-red-600 border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700">Email Alumni</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="alumni@ikasda.org"
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-xs text-slate-800 outline-none focus:border-edoo-primary focus:ring-1 focus:ring-edoo-primary"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="mt-1.5 w-full rounded-xl border border-slate-300 px-4 py-3 text-xs text-slate-800 outline-none focus:border-edoo-primary focus:ring-1 focus:ring-edoo-primary"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-orange-400 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-orange-600 disabled:opacity-50"
          >
            {loading ? "Memproses..." : "Masuk Sekarang"}
          </button>
        </form>

        {/* <div className="mt-6 text-center text-xs text-slate-500">
          Belum terdaftar?{" "}
          <Link href="/#daftar-alumni" className="font-bold text-edoo-primary hover:underline">
            Daftar Alumni
          </Link>
        </div> */}
      </div>
    </div>
  );
}
