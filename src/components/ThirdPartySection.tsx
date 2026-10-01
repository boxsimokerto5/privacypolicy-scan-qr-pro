import React from 'react';
import { ExternalLink, ShieldCheck, Layers, Radio, AlertCircle } from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface ThirdPartySectionProps {
  t: PolicyTranslation;
}

export const ThirdPartySection: React.FC<ThirdPartySectionProps> = ({ t }) => {
  const { section2 } = t;

  return (
    <section id="section-2" className="scroll-mt-20 space-y-4">
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-indigo-100 text-indigo-700 text-xs font-bold">
          2
        </span>
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
          {section2.title}
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
        {section2.intro}
      </p>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {section2.services.map((service, idx) => (
          <div
            key={idx}
            className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-indigo-300 hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2">
                <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-indigo-50 text-indigo-700 border border-indigo-200/60">
                  {service.badge}
                </span>
                <span className="text-[11px] font-mono text-slate-400">#{idx + 1}</span>
              </div>

              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base leading-snug">
                  {service.name}
                </h3>
                <p className="text-xs text-indigo-600 font-medium mt-0.5">
                  {service.role}
                </p>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                {service.purpose}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100">
              <a
                href={service.policyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 hover:text-sky-800 transition-colors group cursor-pointer"
              >
                <span>Lihat Kebijakan Privasi</span>
                <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Notice on Advertising ID (AD_ID) and fraud prevention */}
      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/70 text-amber-950 text-xs sm:text-sm flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-1">
          <span className="font-bold text-amber-900 block">
            Catatan Teknis Pengenal Iklan (Google AD_ID)
          </span>
          <p className="text-amber-900/90 leading-relaxed">
            {section2.dataCollectedNotice}
          </p>
        </div>
      </div>
    </section>
  );
};
