import React from 'react';
import { ShieldCheck, CheckCircle2, AlertTriangle, Lock, Trash2, Smartphone, EyeOff } from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface PlayStoreDataSafetyProps {
  t: PolicyTranslation;
}

export const PlayStoreDataSafety: React.FC<PlayStoreDataSafetyProps> = ({ t }) => {
  const { dataSafetySummary } = t;

  return (
    <div id="data-safety" className="my-8 rounded-2xl bg-white border border-slate-200/90 shadow-sm overflow-hidden">
      {/* Header bar */}
      <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white p-5 sm:p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <h2 className="text-base sm:text-lg font-bold tracking-tight">
                {dataSafetySummary.title}
              </h2>
            </div>
            <p className="text-xs text-slate-300">
              {dataSafetySummary.subtitle}
            </p>
          </div>

          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30 shrink-0">
            <CheckCircle2 className="w-3.5 h-3.5" />
            {dataSafetySummary.badge}
          </span>
        </div>
      </div>

      {/* Grid of items */}
      <div className="p-4 sm:p-6 divide-y divide-slate-100">
        {dataSafetySummary.items.map((item, idx) => (
          <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-center justify-between gap-2 md:gap-6">
            <div className="md:w-1/3">
              <span className="text-xs font-bold text-slate-900 block">
                {item.label}
              </span>
              <span
                className={`inline-flex items-center gap-1 text-[11px] font-semibold mt-1 px-2 py-0.5 rounded ${
                  item.isPositive
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60'
                    : 'bg-amber-50 text-amber-800 border border-amber-200/60'
                }`}
              >
                {item.isPositive ? (
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                ) : (
                  <AlertTriangle className="w-3 h-3 text-amber-600" />
                )}
                {item.status}
              </span>
            </div>
            <div className="md:w-2/3 text-xs text-slate-600 leading-relaxed">
              {item.details}
            </div>
          </div>
        ))}
      </div>

      {/* Footer explanation */}
      <div className="bg-slate-50 px-5 py-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-[11px] text-slate-500">
        <div className="flex items-center gap-2">
          <EyeOff className="w-4 h-4 text-sky-600 shrink-0" />
          <span>Pengembang tidak menjual data atau melacak aktivitas pengguna di luar aplikasi.</span>
        </div>
        <div className="font-mono text-slate-400">
          Target SDK: Android 14+ (API 34/35)
        </div>
      </div>
    </div>
  );
};
