'use client';

import { useState } from "react";
import Image from "next/image";

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState<'tab-pondok' | 'tab-ikasda'>('tab-pondok');

  return (
    <section className="relative min-h-[600px] w-full overflow-hidden bg-slate-200 py-16 lg:py-24" id="profil">
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold text-edoo-primary uppercase tracking-wider">Tentang Kami</span>
        <h2 className="mt-2 text-3xl font-extrabold text-slate-900 sm:text-4xl">Profil Pesantren & IKASDA</h2>
      </div>

      <div className="mt-8 flex justify-center gap-2 border-b border-slate-200 pb-4">
        <button
          type="button"
          onClick={() => setActiveTab('tab-pondok')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
            activeTab === 'tab-pondok'
              ? 'bg-edoo-primary text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <i className="fa-solid fa-mosque"></i> Profil Pondok Pesantren
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('tab-ikasda')}
          className={`flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold transition-all ${
            activeTab === 'tab-ikasda'
              ? 'bg-edoo-primary text-white shadow-md'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
          }`}
        >
          <i className="fa-solid fa-users"></i> Profil IKASDA
        </button>
      </div>

      <div className="mt-8">
        {activeTab === 'tab-pondok' && (
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900">Pondok Pesantren Darussalam Ngesong</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Pondok Pesantren Darussalam Ngesong adalah lembaga pendidikan Islam yang berfokus pada pengembangan ilmu agama dan karakter santri. Didirikan dengan tujuan mencetak generasi yang berakhlak mulia, berilmu, dan siap menghadapi tantangan zaman.
              </p>
            </div>
            <div className="flex-1">
              <Image src="/assets/img/santri-belajar.jpg" alt="Pondok Pesantren Darussalam Ngesong" width={400} height={300} className="rounded-xl object-cover" />
            </div>
          </div>
        )}

        {activeTab === 'tab-ikasda' && (
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900">IKASDA (Ikatan Alumni Santri Darussalam)</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                IKASDA adalah organisasi resmi yang menghubungkan alumni Pondok Pesantren Darussalam Ngesong. Organisasi ini bertujuan untuk memperkuat jaringan alumni, mendukung pengembangan karier, dan berkontribusi pada kemajuan pesantren serta masyarakat luas.
              </p>
            </div>
            <div className="flex-1">
              <Image src="/assets/img/ikasda.jpg" alt="IKASDA" width={400} height={300} className="rounded-xl object-cover" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}