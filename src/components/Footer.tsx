import React from 'react';
import logoUrl from '../assets/images/scan_qr_logo_1790896496732.jpg';
import { ArrowUp, ShieldCheck, Mail, Printer, Globe } from 'lucide-react';
import { PolicyTranslation, LanguageCode } from '../types/privacy';
import { SUPPORTED_LANGUAGES } from '../data/translations';

interface FooterProps {
  t: PolicyTranslation;
  currentLang: LanguageCode;
  onSelectLang: (lang: LanguageCode) => void;
}

export const Footer: React.FC<FooterProps> = ({ t, currentLang, onSelectLang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-400 text-xs border-t border-slate-800 pt-12 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-slate-800">
          <div className="space-y-2">
            <div className="flex items-center gap-2.5 text-white font-bold text-base">
              <div className="w-8 h-8 rounded-lg overflow-hidden bg-black flex items-center justify-center border border-slate-700 shrink-0">
                <img
                  src={logoUrl || '/logo.jpg'}
                  alt="Scan Qr Pro Logo"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== window.location.origin + '/logo.jpg') {
                      target.src = '/logo.jpg';
                    }
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <span>Scan Qr Pro</span>
              <span className="text-[11px] font-normal text-slate-400">
                — {t.meta.developerName}
              </span>
            </div>
            <p className="text-slate-400 text-xs max-w-md">
              Aplikasi pemindai dan generator kode QR cepat & aman dengan pemrosesan on-device tanpa mengumpulkan data pribadi.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>{t.ui.printText}</span>
            </button>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors cursor-pointer"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>{t.ui.backToTop}</span>
            </button>
          </div>
        </div>

        {/* Language selector in footer */}
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[11px] text-slate-400 flex items-center gap-1 mr-1">
            <Globe className="w-3.5 h-3.5" /> {t.ui.toggleLanguage}:
          </span>
          {SUPPORTED_LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelectLang(lang.code)}
              className={`px-2.5 py-1 rounded-md text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                lang.code === currentLang
                  ? 'bg-sky-600 text-white font-bold'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.label}</span>
            </button>
          ))}
        </div>

        {/* Legal & App Details */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[11px] text-slate-400 pt-2">
          <div className="space-y-1">
            <p>© 2026 {t.meta.developerName}. Hak Cipta Dilindungi Undang-Undang.</p>
            <p className="font-mono text-slate-400">
              Package: {t.meta.packageName} • Email: {t.meta.developerEmail}
            </p>
          </div>

          <div className="inline-flex items-center gap-2 text-emerald-400 bg-emerald-950/40 border border-emerald-800/40 px-3 py-1 rounded-full">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Kepatuhan Google Play Terpenuhi</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
