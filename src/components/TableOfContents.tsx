import React, { useEffect, useState } from 'react';
import { 
  FileText, 
  ShieldCheck, 
  KeyRound, 
  Share2, 
  Lock, 
  Baby, 
  Trash2, 
  RefreshCw, 
  Mail, 
  HelpCircle,
  ChevronRight
} from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface TableOfContentsProps {
  t: PolicyTranslation;
  activeSection: string;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ t, activeSection }) => {
  const items = [
    { id: 'overview', label: t.navigation.overview, icon: FileText },
    { id: 'data-safety', label: t.navigation.dataSafety, icon: ShieldCheck },
    { id: 'section-1', label: t.navigation.permissions, icon: KeyRound },
    { id: 'section-2', label: t.navigation.thirdParty, icon: Share2 },
    { id: 'section-3', label: t.navigation.security, icon: Lock },
    { id: 'section-4', label: t.navigation.children, icon: Baby },
    { id: 'section-5', label: t.navigation.deletion, icon: Trash2 },
    { id: 'section-6', label: t.navigation.changes, icon: RefreshCw },
    { id: 'section-7', label: t.navigation.contact, icon: Mail },
    { id: 'faq', label: t.navigation.faq, icon: HelpCircle },
  ];

  return (
    <nav className="sticky top-20 bg-white rounded-2xl border border-slate-200/80 p-4 shadow-xs">
      <div className="flex items-center gap-2 pb-3 mb-2 border-b border-slate-100">
        <div className="w-2 h-2 rounded-full bg-sky-600" />
        <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
          Daftar Isi Kebijakan
        </span>
      </div>

      <ul className="space-y-1 text-xs">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`group flex items-center justify-between px-2.5 py-1.5 rounded-lg transition-all ${
                  isActive
                    ? 'bg-sky-50 text-sky-900 font-semibold border-l-2 border-sky-600 pl-2'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <div className="flex items-center gap-2 truncate">
                  <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-sky-600' : 'text-slate-400 group-hover:text-slate-600'}`} />
                  <span className="truncate">{item.label}</span>
                </div>
                <ChevronRight className={`w-3 h-3 transition-transform ${isActive ? 'text-sky-600 translate-x-0.5' : 'text-slate-300 opacity-0 group-hover:opacity-100'}`} />
              </a>
            </li>
          );
        })}
      </ul>

      {/* Quick metadata in sidebar */}
      <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500">
        <div className="flex items-center justify-between">
          <span>Versi:</span>
          <span className="font-semibold text-slate-700">1.0.0-PRO</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Target:</span>
          <span className="font-mono text-[10px] text-slate-600">Android 14+</span>
        </div>
      </div>
    </nav>
  );
};
