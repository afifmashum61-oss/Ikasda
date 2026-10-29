import Link from "next/link";
import Image from "next/image";

interface AlumniProps {
  name: string;
  batch: string;
  profession: string;
  city: string;
  avatar: string;
}

export default function AlumniCard({ name, batch, profession, city, avatar }: AlumniProps) {
  return (
    <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200/80 transition-all hover:shadow-md hover:-translate-y-1">
      <div className="flex items-center gap-4">
        {/* Ganti <Image /> menjadi <img> biasa */}
        <img
          src={avatar}
          alt={name}
          className="h-14 w-14 rounded-full object-cover border-2 border-edoo-soft"
        />
        <div>
          <h4 className="font-bold text-slate-900 text-sm leading-snug">{name}</h4>
          <span className="inline-block mt-1 text-[11px] font-bold text-edoo-primary bg-edoo-soft px-2.5 py-0.5 rounded-full">
            {batch}
          </span>
        </div>
      </div>

      <div className="mt-4 space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-600">
        <p className="flex items-center gap-2">
          <i className="fa-solid fa-briefcase w-4 text-slate-400"></i>
          <span>{profession}</span>
        </p>
        <p className="flex items-center gap-2">
          <i className="fa-solid fa-location-dot w-4 text-slate-400"></i>
          <span>{city}</span>
        </p>
      </div>
    </div>
  );
}
