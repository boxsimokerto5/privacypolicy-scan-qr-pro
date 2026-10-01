import React, { useState, useMemo } from 'react';
import { Search, X, ChevronRight, Hash } from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: PolicyTranslation;
}

interface SearchResult {
  sectionId: string;
  sectionTitle: string;
  matchedText: string;
  anchor: string;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, t }) => {
  const [query, setQuery] = useState('');

  const searchResults = useMemo(() => {
    if (!query.trim() || query.length < 2) return [];

    const q = query.toLowerCase();
    const results: SearchResult[] = [];

    // Search Section 1 items
    t.section1.items.forEach((item) => {
      if (
        item.title.toLowerCase().includes(q) ||
        item.permissionName.toLowerCase().includes(q) ||
        item.purposeDesc.toLowerCase().includes(q) ||
        item.processingDesc.toLowerCase().includes(q)
      ) {
        results.push({
          sectionId: 'section-1',
          sectionTitle: item.title,
          matchedText: `${item.purposeDesc.slice(0, 100)}...`,
          anchor: item.id,
        });
      }
    });

    // Search Section 2 items
    t.section2.services.forEach((service) => {
      if (
        service.name.toLowerCase().includes(q) ||
        service.purpose.toLowerCase().includes(q) ||
        service.role.toLowerCase().includes(q)
      ) {
        results.push({
          sectionId: 'section-2',
          sectionTitle: `Layanan Pihak Ketiga: ${service.name}`,
          matchedText: service.purpose,
          anchor: 'section-2',
        });
      }
    });

    // Search Section 3
    if (
      t.section3.title.toLowerCase().includes(q) ||
      t.section3.content.toLowerCase().includes(q) ||
      t.section3.bulletPoints.some((b) => b.toLowerCase().includes(q))
    ) {
      results.push({
        sectionId: 'section-3',
        sectionTitle: t.section3.title,
        matchedText: t.section3.content.slice(0, 120),
        anchor: 'section-3',
      });
    }

    // Search Section 5 (Deletion)
    t.section5.steps.forEach((step) => {
      if (
        step.title.toLowerCase().includes(q) ||
        step.description.toLowerCase().includes(q)
      ) {
        results.push({
          sectionId: 'section-5',
          sectionTitle: `Penghapusan: ${step.title}`,
          matchedText: step.description,
          anchor: 'section-5',
        });
      }
    });

    // Search FAQ
    t.faqSection.items.forEach((faq) => {
      if (
        faq.question.toLowerCase().includes(q) ||
        faq.answer.toLowerCase().includes(q)
      ) {
        results.push({
          sectionId: 'faq',
          sectionTitle: `FAQ: ${faq.question}`,
          matchedText: faq.answer.slice(0, 120),
          anchor: 'faq',
        });
      }
    });

    return results;
  }, [query, t]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="fixed inset-0"
        onClick={onClose}
      />
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 animate-in zoom-in-95 duration-150">
        {/* Input bar */}
        <div className="flex items-center px-4 border-b border-slate-200">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.ui.searchPlaceholder}
            className="w-full px-3 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none"
            autoFocus
          />
          {query ? (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          ) : (
            <kbd className="text-[10px] font-mono text-slate-400 border border-slate-200 rounded px-1.5 py-0.5">
              ESC
            </kbd>
          )}
        </div>

        {/* Results Container */}
        <div className="max-h-80 overflow-y-auto p-3 divide-y divide-slate-100">
          {query.trim().length < 2 ? (
            <div className="p-6 text-center text-xs text-slate-400">
              Ketik minimal 2 karakter untuk mencari dalam kebijakan privasi...
              <div className="flex flex-wrap justify-center gap-1.5 mt-3">
                {['Kamera', 'ML Kit', 'SQLite', 'Iklan', 'Pangle', 'ironSource', 'Hapus Data'].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setQuery(tag)}
                    className="px-2 py-1 rounded-md bg-slate-100 text-slate-600 hover:bg-slate-200 text-[11px] font-medium transition-colors cursor-pointer"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          ) : searchResults.length === 0 ? (
            <div className="p-6 text-center text-xs text-slate-500">
              {t.ui.noSearchResults}
            </div>
          ) : (
            searchResults.map((res, i) => (
              <a
                key={i}
                href={`#${res.anchor}`}
                onClick={onClose}
                className="p-3 rounded-xl hover:bg-sky-50 transition-colors flex items-start justify-between gap-3 group cursor-pointer block"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-sky-700">
                    <Hash className="w-3.5 h-3.5 text-sky-500" />
                    <span>{res.sectionTitle}</span>
                  </div>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
                    {res.matchedText}
                  </p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-sky-600 shrink-0 mt-1" />
              </a>
            ))
          )}
        </div>

        <div className="bg-slate-50 px-4 py-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
          <span>{searchResults.length} hasil ditemukan</span>
          <button
            onClick={onClose}
            className="text-slate-500 hover:text-slate-800 font-medium cursor-pointer"
          >
            {t.ui.close}
          </button>
        </div>
      </div>
    </div>
  );
};
