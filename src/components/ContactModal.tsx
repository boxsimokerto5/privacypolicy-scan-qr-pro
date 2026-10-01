import React, { useState } from 'react';
import { X, Send, Mail, Check, AlertCircle } from 'lucide-react';
import { PolicyTranslation } from '../types/privacy';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  t: PolicyTranslation;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, t }) => {
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [topic, setTopic] = useState('Pertanyaan Privasi & Izin Kamera');
  const [message, setMessage] = useState('');
  const [sentSuccess, setSentSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${t.meta.developerEmail}?subject=${encodeURIComponent(
      `[Scan Qr Pro Privacy Inquiry] ${topic}`
    )}&body=${encodeURIComponent(
      `Nama: ${senderName}\nEmail Pengirim: ${senderEmail}\nTopik: ${topic}\n\nPesan:\n${message}\n\nAplikasi: Scan Qr Pro (${t.meta.packageName})`
    )}`;

    window.open(mailtoUrl, '_blank');
    setSentSuccess(true);
    setTimeout(() => {
      setSentSuccess(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="fixed inset-0" onClick={onClose} />
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden z-10 p-6 animate-in zoom-in-95 duration-150">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
              <Mail className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">
                Hubungi Pengembang Scan Qr Pro
              </h3>
              <p className="text-xs text-slate-500">
                {t.meta.developerEmail}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {sentSuccess ? (
          <div className="py-10 text-center space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-base">
              Aplikasi Email Anda Terbuka
            </h4>
            <p className="text-xs text-slate-600 max-w-sm mx-auto">
              Draft pesan Anda telah disiapkan. Silakan kirimkan email melalui aplikasi surel Anda ke <strong>{t.meta.developerEmail}</strong>.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 space-y-3.5 text-xs">
            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Nama Lengkap / Panggilan
              </label>
              <input
                type="text"
                required
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="Misal: Budi Santoso"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Alamat Email Anda
              </label>
              <input
                type="email"
                required
                value={senderEmail}
                onChange={(e) => setSenderEmail(e.target.value)}
                placeholder="nama@email.com"
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Subjek Pertanyaan
              </label>
              <select
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-2 focus:ring-sky-500"
              >
                <option value="Pertanyaan Privasi & Izin Kamera">Pertanyaan Privasi & Izin Kamera</option>
                <option value="Permintaan Penghapusan Data">Permintaan Penghapusan Data</option>
                <option value="Laporan Kepatuhan Google Play">Laporan Kepatuhan Google Play</option>
                <option value="Pertanyaan Lain seputar Aplikasi">Pertanyaan Lain seputar Aplikasi</option>
              </select>
            </div>

            <div>
              <label className="block font-medium text-slate-700 mb-1">
                Pesan atau Pertanyaan
              </label>
              <textarea
                required
                rows={3}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan pertanyaan Anda mengenai kebijakan privasi atau aplikasi..."
                className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 rounded-lg text-slate-600 hover:bg-slate-100 font-medium transition-colors cursor-pointer"
              >
                Batal
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-sky-600 hover:bg-sky-700 text-white font-semibold shadow-xs transition-colors cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Buka di Aplikasi Email</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
