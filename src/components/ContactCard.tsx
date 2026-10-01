import React, { useState } from 'react';
import { Mail, User, Smartphone, Box, Copy, Check, Send, ShieldCheck } from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface ContactCardProps {
  t: PolicyTranslation;
  onOpenMessageModal: () => void;
}

export const ContactCard: React.FC<ContactCardProps> = ({ t, onOpenMessageModal }) => {
  const { section7, meta } = t;
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(meta.developerEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="section-7" className="scroll-mt-20 space-y-4">
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-100 text-sky-700 text-xs font-bold">
          7
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {section7.title}
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        {section7.intro}
      </p>

      <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white p-6 sm:p-8 shadow-md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Details list */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/20 text-sky-300 border border-sky-400/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Pengembang Resmi Terverifikasi</span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                  <User className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">{section7.devNameLabel}</span>
                  <span className="font-semibold text-white text-sm">{meta.developerName}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">{section7.emailLabel}</span>
                  <span className="font-mono text-white text-xs sm:text-sm select-all">
                    {meta.developerEmail}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">{section7.appNameLabel}</span>
                  <span className="font-semibold text-white">{meta.appName}</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-300">
                  <Box className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-slate-400 text-[11px] block">{section7.packageLabel}</span>
                  <span className="font-mono text-slate-200 text-xs">{meta.packageName}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action buttons */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-5 space-y-3">
            <h3 className="text-sm font-bold text-white mb-2">
              Dukungan Cepat & Pertanyaan
            </h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Tim pengembang kami siap menjawab klarifikasi atau pertanyaan kepatuhan seputar privasi data Anda di Scan Qr Pro.
            </p>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
              <a
                href={`mailto:${meta.developerEmail}?subject=Pertanyaan%20Kebijakan%20Privasi%20Scan%20Qr%20Pro`}
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs transition-colors shadow-sm cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{section7.sendEmailBtn}</span>
              </a>

              <button
                onClick={copyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs border border-white/15 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? section7.emailCopied : section7.copyEmailBtn}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
