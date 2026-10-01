import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Printer, 
  Search, 
  ChevronDown, 
  Mail, 
  FileText,
  Check,
  Smartphone
} from 'lucide-react';
import { LanguageCode } from '../types/privacy';
import { SUPPORTED_LANGUAGES } from '../data/translations';

interface NavbarProps {
  currentLang: LanguageCode;
  onSelectLang: (lang: LanguageCode) => void;
  onOpenSearch: () => void;
  onOpenContact: () => void;
  fontSize: 'normal' | 'large';
  onToggleFontSize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  onOpenSearch,
  onOpenContact,
  fontSize,
  onToggleFontSize,
}) => {
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const activeLangObj = SUPPORTED_LANGUAGES.find((l) => l.code === currentLang) || SUPPORTED_LANGUAGES[0];

  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand & App Info */}
          <div className="flex items-center gap-3">
            <a 
              href="#overview" 
              className="group flex items-center gap-2.5 focus:outline-none focus:ring-2 focus:ring-sky-500 rounded-lg p-1"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-black flex items-center justify-center shadow-md shadow-orange-500/10 border border-slate-800 group-hover:scale-105 transition-transform shrink-0">
                <img
                  src="/src/assets/images/scan_qr_logo_1790896496732.jpg"
                  alt="Scan Qr Pro Logo"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-slate-900 tracking-tight text-base sm:text-lg">
                    Scan Qr Pro
                  </span>
                  <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded text-[11px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200/70">
                    <ShieldCheck className="w-3 h-3 text-emerald-600" />
                    Verified
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-mono hidden sm:inline">
                  com.scanqrpro.gecckocreator
                </span>
              </div>
            </a>
          </div>

          {/* Quick Actions & Language Selector */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg text-slate-600 bg-slate-100 hover:bg-slate-200/80 transition-colors text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
              title="Cari dalam kebijakan (Search)"
            >
              <Search className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden md:inline">Cari Pasal / Istilah</span>
              <kbd className="hidden md:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-500 bg-white rounded border border-slate-300">
                /
              </kbd>
            </button>

            {/* Font Size Adjuster */}
            <button
              onClick={onToggleFontSize}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors text-xs font-semibold focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
              title="Ubah ukuran teks (A- / A+)"
            >
              <span className="font-mono text-xs">{fontSize === 'normal' ? 'A+' : 'A-'}</span>
            </button>

            {/* Print Action */}
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors text-xs font-medium focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
              title="Cetak atau Ekspor PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>PDF / Cetak</span>
            </button>

            {/* Contact Shortcut */}
            <button
              onClick={onOpenContact}
              className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sky-700 bg-sky-50 hover:bg-sky-100 transition-colors text-xs font-medium border border-sky-200 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-sky-600" />
              <span>Hubungi Pengembang</span>
            </button>

            {/* Multi-Language Dropdown */}
            <div className="relative">
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:border-slate-400 shadow-xs hover:bg-slate-50 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-500 cursor-pointer"
                aria-haspopup="true"
                aria-expanded={langDropdownOpen}
              >
                <span className="text-base leading-none">{activeLangObj.flag}</span>
                <span className="font-medium hidden sm:inline">{activeLangObj.nativeLabel}</span>
                <span className="font-medium sm:hidden">{activeLangObj.code.toUpperCase()}</span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
              </button>

              {langDropdownOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setLangDropdownOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="px-3 py-2 border-b border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      Pilih Bahasa (Select Language)
                    </div>
                    {SUPPORTED_LANGUAGES.map((lang) => {
                      const isSelected = lang.code === currentLang;
                      return (
                        <button
                          key={lang.code}
                          onClick={() => {
                            onSelectLang(lang.code);
                            setLangDropdownOpen(false);
                          }}
                          className={`w-full text-left px-3 py-2 text-xs flex items-center justify-between transition-colors cursor-pointer ${
                            isSelected
                              ? 'bg-sky-50 text-sky-900 font-semibold'
                              : 'text-slate-700 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className="text-base">{lang.flag}</span>
                            <div>
                              <div className="leading-tight">{lang.nativeLabel}</div>
                              <div className="text-[10px] text-slate-400 font-normal">{lang.label}</div>
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-sky-600" />}
                        </button>
                      );
                    })}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
