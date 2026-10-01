import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroHeader } from './components/HeroHeader';
import { PlayStoreDataSafety } from './components/PlayStoreDataSafety';
import { TableOfContents } from './components/TableOfContents';
import { PermissionCard } from './components/PermissionCard';
import { ThirdPartySection } from './components/ThirdPartySection';
import { SecuritySection } from './components/SecuritySection';
import { DataControlSection } from './components/DataControlSection';
import { ContactCard } from './components/ContactCard';
import { FAQSection } from './components/FAQSection';
import { SearchModal } from './components/SearchModal';
import { ContactModal } from './components/ContactModal';
import { Footer } from './components/Footer';
import { TRANSLATIONS } from './data/translations';
import { LanguageCode } from './types/privacy';
import { ShieldCheck, Lock, ExternalLink, Printer } from 'lucide-react';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('id');
  const [fontSize, setFontSize] = useState<'normal' | 'large'>('normal');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('overview');
  const [scrollProgress, setScrollProgress] = useState(0);

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS['id'];

  // Keyboard shortcut '/' for search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '/' && !isSearchOpen && document.activeElement?.tagName !== 'INPUT' && document.activeElement?.tagName !== 'TEXTAREA') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen]);

  // Track scroll reading progress and active section
  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${(totalScroll / windowHeight) * 100}`;
      setScrollProgress(Number(scroll));

      // Active section calculation
      const sections = [
        'overview',
        'data-safety',
        'section-1',
        'section-2',
        'section-3',
        'section-4',
        'section-5',
        'section-6',
        'section-7',
        'faq',
      ];

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-slate-50 text-slate-900 ${fontSize === 'large' ? 'text-base' : 'text-sm'}`}>
      {/* Scroll reading progress indicator */}
      <div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 via-indigo-500 to-emerald-500 z-50 origin-left transition-all"
        style={{ width: `${Math.min(100, Math.max(0, scrollProgress))}%` }}
      />

      {/* Navigation Header */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
        fontSize={fontSize}
        onToggleFontSize={() => setFontSize(fontSize === 'normal' ? 'large' : 'normal')}
      />

      {/* Hero Header Banner */}
      <HeroHeader t={t} onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Layout */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Table of Contents Sticky Sidebar on Desktop */}
          <aside className="hidden lg:block lg:col-span-3 sticky top-20">
            <TableOfContents t={t} activeSection={activeSection} />
          </aside>

          {/* Main Document Content */}
          <div className="lg:col-span-9 space-y-12">
            {/* Play Store Data Safety Box */}
            <PlayStoreDataSafety t={t} />

            {/* Section 1: Informasi yang Kami Kumpulkan dan Penggunaannya */}
            <section id="section-1" className="scroll-mt-20 space-y-5">
              <div className="flex items-center gap-2">
                <span className="flex items-center justify-center w-7 h-7 rounded-lg bg-sky-100 text-sky-700 text-xs font-bold">
                  1
                </span>
                <h2 className="text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                  {t.section1.title}
                </h2>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs space-y-2">
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {t.section1.intro}
                </p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {t.section1.noPiiNotice}
                </p>
              </div>

              {/* Sub-items (a. Kamera, b. Galeri, c. SQLite, d. Getaran) */}
              <div className="space-y-4">
                {t.section1.items.map((item) => (
                  <PermissionCard key={item.id} item={item} />
                ))}
              </div>
            </section>

            {/* Section 2: Layanan Pihak Ketiga & Jaringan Iklan */}
            <ThirdPartySection t={t} />

            {/* Section 3 & 4: Keamanan Data & Privasi Anak-Anak */}
            <SecuritySection t={t} />

            {/* Section 5 & 6: Penghapusan Data & Perubahan Kebijakan */}
            <DataControlSection t={t} />

            {/* Section 7: Hubungi Kami */}
            <ContactCard
              t={t}
              onOpenMessageModal={() => setIsContactOpen(true)}
            />

            {/* FAQ Section */}
            <FAQSection t={t} />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer
        t={t}
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
      />

      {/* Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        t={t}
      />

      {/* Contact Inquiry Modal */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        t={t}
      />
    </div>
  );
}
