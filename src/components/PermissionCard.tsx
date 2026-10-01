import React, { useState } from 'react';
import { 
  Camera, 
  Image as ImageIcon, 
  Database, 
  Vibrate, 
  CheckCircle, 
  ShieldAlert, 
  Cpu, 
  HardDrive, 
  FolderDown,
  Copy,
  Check
} from 'lucide-react';
import { PermissionDetail } from '../types/privacy';

interface PermissionCardProps {
  item: PermissionDetail;
}

export const PermissionCard: React.FC<PermissionCardProps> = ({ item }) => {
  const [copied, setCopied] = useState(false);

  const getIcon = (type: string) => {
    switch (type) {
      case 'camera':
        return <Camera className="w-5 h-5 text-sky-600" />;
      case 'storage':
        return <ImageIcon className="w-5 h-5 text-emerald-600" />;
      case 'database':
        return <Database className="w-5 h-5 text-indigo-600" />;
      case 'vibrate':
        return <Vibrate className="w-5 h-5 text-amber-600" />;
      default:
        return <Cpu className="w-5 h-5 text-slate-600" />;
    }
  };

  const getThemeBg = (type: string) => {
    switch (type) {
      case 'camera':
        return 'bg-sky-50 text-sky-700 border-sky-200/80';
      case 'storage':
        return 'bg-emerald-50 text-emerald-700 border-emerald-200/80';
      case 'database':
        return 'bg-indigo-50 text-indigo-700 border-indigo-200/80';
      case 'vibrate':
        return 'bg-amber-50 text-amber-700 border-amber-200/80';
      default:
        return 'bg-slate-50 text-slate-700 border-slate-200/80';
    }
  };

  const copyPermission = () => {
    navigator.clipboard.writeText(item.permissionName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div 
      id={item.id} 
      className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:border-slate-300 transition-all space-y-4"
    >
      {/* Title & Tag */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${getThemeBg(item.iconType)}`}>
            {getIcon(item.iconType)}
          </div>
          <div>
            <h3 className="font-bold text-slate-900 text-sm sm:text-base">
              {item.title}
            </h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className="font-mono text-[11px] text-slate-500">
                {item.permissionName}
              </span>
              <button
                onClick={copyPermission}
                className="text-slate-400 hover:text-slate-600 transition-colors p-0.5 cursor-pointer"
                title="Salin nama izin"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
              </button>
            </div>
          </div>
        </div>

        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold self-start sm:self-auto border ${getThemeBg(item.iconType)}`}>
          <CheckCircle className="w-3.5 h-3.5" />
          {item.highlightBadge}
        </span>
      </div>

      {/* Purpose & Processing Blocks */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
        {/* Purpose */}
        <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 space-y-1.5">
          <div className="font-semibold text-slate-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
            {item.purposeTitle}
          </div>
          <div className="text-slate-600 leading-relaxed whitespace-pre-line">
            {item.purposeDesc}
          </div>
        </div>

        {/* Processing Details */}
        <div className="p-3.5 rounded-xl bg-slate-50/80 border border-slate-200/60 space-y-1.5">
          <div className="font-semibold text-slate-800 flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            {item.processingTitle}
          </div>
          <div className="text-slate-600 leading-relaxed">
            {item.processingDesc}
          </div>
        </div>
      </div>
    </div>
  );
};
