import React from 'react';
import { Trash2, ShieldOff, HardDriveDownload, RefreshCw, Smartphone, CheckCircle } from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface DataControlSectionProps {
  t: PolicyTranslation;
}

export const DataControlSection: React.FC<DataControlSectionProps> = ({ t }) => {
  const { section5, section6 } = t;

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trash2 className="w-5 h-5 text-rose-600" />;
      case 1:
        return <ShieldOff className="w-5 h-5 text-amber-600" />;
      case 2:
        return <HardDriveDownload className="w-5 h-5 text-indigo-600" />;
      default:
        return <CheckCircle className="w-5 h-5 text-emerald-600" />;
    }
  };

  const getStepBg = (index: number) => {
    switch (index) {
      case 0:
        return 'bg-rose-50 border-rose-200/70 text-rose-700';
      case 1:
        return 'bg-amber-50 border-amber-200/70 text-amber-700';
      case 2:
        return 'bg-indigo-50 border-indigo-200/70 text-indigo-700';
      default:
        return 'bg-emerald-50 border-emerald-200/70 text-emerald-700';
    }
  };

  return (
    <div className="space-y-10">
      {/* Section 5: User Data Deletion & Control */}
      <section id="section-5" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-rose-100 text-rose-700 text-xs font-bold">
            5
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {section5.title}
          </h2>
        </div>

        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
          {section5.intro}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {section5.steps.map((step, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${getStepBg(idx)}`}>
                    {getStepIcon(idx)}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 font-mono">
                    Langkah 0{idx + 1}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-sm leading-snug">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {step.actionText && (
                <div className="mt-4 pt-3 border-t border-slate-100">
                  <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 font-mono text-[11px] text-slate-700 break-words">
                    {step.actionText}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Section 6: Changes to this Policy */}
      <section id="section-6" className="scroll-mt-20 space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-slate-200 text-slate-700 text-xs font-bold">
            6
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {section6.title}
          </h2>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-3.5">
          <div className="p-2 rounded-xl bg-slate-100 text-slate-600 shrink-0">
            <RefreshCw className="w-5 h-5" />
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {section6.content}
          </p>
        </div>
      </section>
    </div>
  );
};
