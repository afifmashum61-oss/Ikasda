'use client';

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Church, Users, CheckCircle2, Award, Target } from "lucide-react";

export default function ProfileSection() {
  const [activeTab, setActiveTab] = useState<'tab-pondok' | 'tab-ikasda'>('tab-pondok');

  return (
    <section className="relative w-full bg-white py-20 lg:py-28 dark:bg-zinc-950" id="profil">
      <div className="container mx-auto px-6 lg:px-16">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-[11px] font-bold tracking-wider text-amber-800 border border-amber-200 dark:bg-amber-950/80 dark:text-amber-400 dark:border-amber-800/50 uppercase">
            Tentang Kami
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl dark:text-white tracking-tight">
            Profil Pesantren & IKASDA
          </h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Mengenal lebih dekat pondasi keilmuan dan wadah silaturahmi alumni Pondok Pesantren Darussalam Ngesong Jombang.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800">
            <button
              type="button"
              onClick={() => setActiveTab('tab-pondok')}
              className={`relative flex items-center gap-2.5 rounded-xl px-6 py-3 text-xs font-bold transition-all duration-300 ${
                activeTab === 'tab-pondok'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              <Church className="h-4 w-4" />
              <span>Profil Pondok Pesantren</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('tab-ikasda')}
              className={`relative flex items-center gap-2.5 rounded-xl px-6 py-3 text-xs font-bold transition-all duration-300 ${
                activeTab === 'tab-ikasda'
                  ? 'bg-amber-600 text-white shadow-md shadow-amber-600/30'
                  : 'text-slate-600 hover:text-slate-900 dark:text-zinc-400 dark:hover:text-white'
              }`}
            >
              <Users className="h-4 w-4" />
              <span>Profil IKASDA</span>
            </button>
          </div>
        </div>

        {/* Tab Contents with Animated Transition */}
        <div className="mt-12">
          <AnimatePresence mode="wait">
            {activeTab === 'tab-pondok' && (
              <motion.div
                key="tab-pondok"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-slate-50/80 p-8 lg:p-12 border border-slate-200/80 dark:bg-zinc-900 dark:border-zinc-800/80 shadow-sm"
              >
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-500">
                    <Award className="h-4 w-4" />
                    Lembaga Pendidikan Islam Takhassus
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
                    Pondok Pesantren Darussalam Ngesong
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    Pondok Pesantren Darussalam Ngesong adalah lembaga pendidikan Islam berdedikasi tinggi yang memadukan kedalaman kajian kitab kuning (*turats*) dengan pembentukan karakter santri modern. Didirikan untuk mencetak generasi yang berakhlak mulia, berilmu luas, dan siap berkontribusi nyata bagi masyarakat.
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Pengajaran Kitab Turats & Tafsir",
                      "Tahfidzul Qur'an & Hadits",
                      "Pembentukan Karakter & Mandiri",
                      "Program Ekstrakurikuler IT & Bahasa"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image Card */}
                <div className="lg:col-span-5 relative group">
                  <div className="relative h-80 lg:h-[360px] w-full overflow-hidden rounded-2xl border border-slate-200/60 shadow-md">
                    <Image
                      src="/assets/img/santri-belajar.jpg"
                      alt="Pondok Pesantren Darussalam Ngesong"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                      Suasana Kegiatan Belajar Mengajar Santri
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'tab-ikasda' && (
              <motion.div
                key="tab-ikasda"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-3xl bg-slate-50/80 p-8 lg:p-12 border border-slate-200/80 dark:bg-zinc-900 dark:border-zinc-800/80 shadow-sm"
              >
                {/* Left Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-600 dark:text-amber-500">
                    <Target className="h-4 w-4" />
                    Organisasi Resmi Alumni
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white">
                    IKASDA (Ikatan Alumni Santri Darussalam)
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                    IKASDA merupakan wadah resmi yang menghimpun dan mempererat jalinan silaturahmi ribuan alumni lintas generasi. Melalui jaringan Koordinator Daerah (Korda) yang tersebar luas, IKASDA berfokus pada kolaborasi ekonomi, pemberdayaan sosial, serta dukungan berkelanjutan bagi almamater pesantren.
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {[
                      "Jaringan 18 Korda Regional & Global",
                      "Program Sinergi Usaha & Karir Alumni",
                      "Kajian Rutin & Silaturahmi Lintas Angkatan",
                      "Beasiswa & Bakti Sosial Masyarakat"
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-xs font-medium text-slate-700 dark:text-zinc-300">
                        <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-500 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right Image Card */}
                <div className="lg:col-span-5 relative group">
                  <div className="relative h-80 lg:h-[360px] w-full overflow-hidden rounded-2xl border border-slate-200/60 shadow-md">
                    <Image
                      src="/assets/img/ikasda.jpg"
                      alt="IKASDA Jombang"
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium">
                      Pertemuan Rutin & Silaturahmi Pengurus IKASDA
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}