import React from 'react';
import { ShieldCheck, Lock, ServerOff, Cpu, Baby, AlertCircle } from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface SecuritySectionProps {
  t: PolicyTranslation;
}

export const SecuritySection: React.FC<SecuritySectionProps> = ({ t }) => {
  const { section3, section4 } = t;

  return (
    <div className="space-y-10">
      {/* Section 3: Data Security */}
      <section id="section-3" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold">
            3
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {section3.title}
          </h2>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-4">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {section3.content}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
            {section3.bulletPoints.map((point, idx) => {
              const [heading, ...descParts] = point.split(':');
              return (
                <div key={idx} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                  <div className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700 shrink-0 mt-0.5">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div className="text-xs">
                    <span className="font-bold text-slate-900 block mb-0.5">{heading}</span>
                    <span className="text-slate-600 leading-relaxed">{descParts.join(':')}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 4: Children's Privacy */}
      <section id="section-4" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-100 text-sky-700 text-xs font-bold">
            4
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {section4.title}
          </h2>
        </div>

        <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-3">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-sky-50 text-sky-600 border border-sky-200/60 shrink-0">
              <Baby className="w-5 h-5" />
            </div>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600">
              <p className="leading-relaxed">
                {section4.content}
              </p>
              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 text-slate-700">
                <span className="font-semibold text-slate-900">Catatan Orang Tua & Wali: </span>
                {section4.guardianNote}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
