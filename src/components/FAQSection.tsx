import React, { useState } from 'react';
import { HelpCircle, ChevronDown } from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface FAQSectionProps {
  t: PolicyTranslation;
}

export const FAQSection: React.FC<FAQSectionProps> = ({ t }) => {
  const { faqSection } = t;
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggleItem = (idx: number) => {
    if (openIndices.includes(idx)) {
      setOpenIndices(openIndices.filter((i) => i !== idx));
    } else {
      setOpenIndices([...openIndices, idx]);
    }
  };

  return (
    <section id="faq" className="scroll-mt-20 space-y-4">
      <div className="flex items-center gap-2">
        <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-100 text-sky-700 text-xs font-bold">
          <HelpCircle className="w-4 h-4" />
        </span>
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
            {faqSection.title}
          </h2>
          <p className="text-xs text-slate-500">
            {faqSection.subtitle}
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {faqSection.items.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-xl bg-white border border-slate-200/90 shadow-xs overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleItem(idx)}
                className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-xs sm:text-sm text-slate-900 hover:text-sky-600 transition-colors cursor-pointer"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-sky-600' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                  <div className="pt-3">{item.answer}</div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};
