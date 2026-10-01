import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Copy, 
  Check, 
  Calendar, 
  User, 
  Cpu, 
  Database, 
  Lock, 
  SlidersHorizontal,
  ExternalLink,
  Sparkles,
  Maximize2,
  X
} from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface HeroHeaderProps {
  t: PolicyTranslation;
  onOpenContact: () => void;
}

export const HeroHeader: React.FC<HeroHeaderProps> = ({ t, onOpenContact }) => {
  const [copiedPkg, setCopiedPkg] = useState(false);
  const [isLogoModalOpen, setIsLogoModalOpen] = useState(false);

  const copyPackageName = () => {
    navigator.clipboard.writeText(t.meta.packageName);
    setCopiedPkg(true);
    setTimeout(() => setCopiedPkg(false), 2000);
  };

  return (
    <section id="overview" className="relative pt-8 pb-10 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 border-b border-slate-200/80">
      {/* Decorative ambient gradient */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compliance Pill Banner */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-sky-200/80 shadow-xs mb-5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-xs font-semibold text-sky-950">
            {t.ui.officialPolicyNotice}
          </span>
          <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-sky-100 text-sky-700">
            Android
          </span>
        </div>

        {/* Main Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
          <div className="space-y-3">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {t.title}
            </h1>
            <p className="text-sm sm:text-base text-slate-600 max-w-3xl leading-relaxed">
              {t.subtitle}
            </p>
          </div>

          {/* Quick App Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 p-4 shadow-sm min-w-[280px] shrink-0">
            <div className="flex items-center gap-3.5 mb-3">
              <button
                type="button"
                onClick={() => setIsLogoModalOpen(true)}
                className="relative w-14 h-14 rounded-2xl overflow-hidden bg-black flex items-center justify-center shadow-lg shadow-orange-500/20 border border-slate-800 shrink-0 group cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500"
                title="Klik untuk memperbesar logo resmi"
              >
                <img
                  src="/src/assets/images/scan_qr_logo_1790896496732.jpg"
                  alt="Scan Qr Pro Official Icon"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </button>
              <div>
                <h2 className="font-bold text-slate-900 leading-tight">
                  {t.meta.appName}
                </h2>
                <span className="text-xs text-slate-500 block">
                  {t.meta.developerName}
                </span>
                <span className="inline-flex items-center gap-1 text-[10px] text-orange-600 bg-orange-50 border border-orange-200/80 px-1.5 py-0.5 rounded font-semibold mt-1">
                  Logo Resmi
                </span>
              </div>
            </div>

            <div className="space-y-2 text-xs border-t border-slate-100 pt-2.5">
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Package ID:</span>
                <button
                  onClick={copyPackageName}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-sky-700 bg-sky-50 hover:bg-sky-100 px-2 py-0.5 rounded border border-sky-200/60 transition-colors cursor-pointer"
                  title="Salin Package Name"
                >
                  <span>{copiedPkg ? 'Tersalin!' : t.meta.packageName}</span>
                  {copiedPkg ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3 text-sky-600" />}
                </button>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500">Status:</span>
                <span className="inline-flex items-center gap-1 font-medium text-emerald-700">
                  <ShieldCheck className="w-3.5 h-3.5" /> Aktif & Terlindungi
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Logo Modal Lightbox */}
        {isLogoModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150">
            <div className="fixed inset-0" onClick={() => setIsLogoModalOpen(false)} />
            <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-6 max-w-sm w-full text-center z-10 shadow-2xl animate-in zoom-in-95 duration-150">
              <button
                onClick={() => setIsLogoModalOpen(false)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-800 text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-64 h-64 mx-auto rounded-2xl overflow-hidden bg-black border border-slate-800 shadow-2xl shadow-orange-500/20 mb-4">
                <img
                  src="/src/assets/images/scan_qr_pro_badge_1790896508634.jpg"
                  alt="Scan Qr Pro Official Emblem"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-contain"
                />
              </div>

              <h3 className="text-white font-bold text-lg mb-1">
                Scan Qr Pro
              </h3>
              <p className="text-slate-400 font-mono text-xs mb-3">
                {t.meta.packageName}
              </p>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-orange-500/10 text-orange-400 border border-orange-500/20">
                Identitas Resmi Aplikasi Mobile
              </div>
            </div>
          </div>
        )}

        {/* Metadata Badges Bar */}
        <div className="flex flex-wrap items-center gap-3 pt-2 pb-6 border-b border-slate-200/70 text-xs text-slate-600">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200">
            <Calendar className="w-3.5 h-3.5 text-sky-600" />
            <span className="text-slate-500">{t.lastUpdatedLabel}:</span>
            <strong className="text-slate-800 font-semibold">{t.lastUpdatedDate}</strong>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200">
            <User className="w-3.5 h-3.5 text-indigo-600" />
            <span className="text-slate-500">Pengembang:</span>
            <strong className="text-slate-800 font-semibold">{t.meta.developerName}</strong>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-white border border-slate-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span className="text-slate-500">Standar:</span>
            <strong className="text-slate-800 font-semibold">Privacy by Design</strong>
          </div>
        </div>

        {/* Core Privacy Pillar Highlights */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs hover:border-sky-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center mb-2.5">
              <Cpu className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 mb-1">
              {t.badges.onDevice}
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Pemindaian kode langsung di prosesor ponsel tanpa mengirim bingkai gambar ke server luar.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center mb-2.5">
              <Lock className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 mb-1">
              {t.badges.noPii}
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Tidak mengumpulkan nama, kontak, email pribadi, nomor telepon, atau koordinat GPS.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs hover:border-indigo-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center mb-2.5">
              <Database className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 mb-1">
              {t.badges.offlineDb}
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Riwayat scan tersimpan secara lokal di database Room SQLite privat dalam memori perangkat Anda.
            </p>
          </div>

          <div className="bg-white rounded-xl p-4 border border-slate-200/80 shadow-xs hover:border-amber-300 transition-colors">
            <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center mb-2.5">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <h3 className="text-xs font-bold text-slate-900 mb-1">
              {t.badges.playStoreCompliant}
            </h3>
            <p className="text-[11px] text-slate-500 leading-relaxed">
              Kontrol data penuh: hapus riwayat instan via Pengaturan dan batalkan izin kamera kapan saja.
            </p>
          </div>
        </div>

        {/* Intro Acceptance Callout */}
        <div className="mt-6 p-4 rounded-xl bg-sky-50/80 border border-sky-200/70 text-xs sm:text-sm text-sky-950 leading-relaxed space-y-2">
          <p>{t.welcomeMessage}</p>
          <p className="font-medium text-sky-900">{t.acceptanceClause}</p>
        </div>
      </div>
    </section>
  );
};
