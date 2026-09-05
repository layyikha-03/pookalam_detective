import React, { useState, useRef } from 'react';
import { 
  UploadCloud, 
  Image as ImageIcon, 
  Sparkles, 
  Key, 
  ChevronDown, 
  ChevronUp, 
  Check, 
  RefreshCw,
  Eye
} from 'lucide-react';
import { SAMPLE_PRESETS } from '../data/mockData';
import { SamplePookalamPreset } from '../types';

interface UploadZoneProps {
  onAnalyze: (imageDataUrl: string, customApiKey?: string) => void;
  onSelectPreset: (preset: SamplePookalamPreset) => void;
  isLoading: boolean;
}

export const UploadZone: React.FC<UploadZoneProps> = ({
  onAnalyze,
  onSelectPreset,
  isLoading,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string>('');
  const [isDragging, setIsDragging] = useState(false);
  const [showApiConfig, setShowApiConfig] = useState(false);
  const [customApiKey, setCustomApiKey] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload a valid image file (JPG, PNG, or WEBP).');
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (e) => {
      if (e.target?.result) {
        setSelectedImage(e.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  };

  const triggerAnalyze = () => {
    if (!selectedImage) return;
    onAnalyze(selectedImage, customApiKey || undefined);
  };

  const clearSelection = () => {
    setSelectedImage(null);
    setFileName('');
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  return (
    <div className="w-full space-y-6">
      {/* Interactive Main Box */}
      <div className="relative rounded-2xl bg-[#160E0C] border border-[#3E2519] p-5 sm:p-7 shadow-xl overflow-hidden">
        
        {/* Subtle decorative Kasavu border pattern */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#991B1B] via-[#D4AF37] to-[#15803D]" />

        {/* Heading inside box */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-5">
          <div>
            <h2 className="text-lg sm:text-xl font-bold font-display text-[#FDF8EE] flex items-center gap-2">
              <UploadCloud className="w-5 h-5 text-[#F3C048]" />
              Floral Evidence Depository
            </h2>
            <p className="text-xs sm:text-sm text-[#A89487]">
              Submit your Atham/Onam floral carpet for multimodal forensic breakdown
            </p>
          </div>

          {/* Quick Demo Mode Banner Button */}
          <button
            id="demo-mode-quick-btn"
            type="button"
            onClick={() => onSelectPreset(SAMPLE_PRESETS[0])}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-[#991B1B] to-[#7F1D1D] hover:from-[#B91C1C] hover:to-[#991B1B] text-white border border-[#F3C048]/50 shadow-md transition-all self-start sm:self-auto active:scale-95"
          >
            <Sparkles className="w-4 h-4 text-[#FDE047] animate-pulse" />
            <span>Try Sample Pookalam (Demo Mode)</span>
          </button>
        </div>

        {/* Drag and Drop Zone */}
        {!selectedImage ? (
          <div
            id="drop-zone-pookalam"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={() => fileInputRef.current?.click()}
            className={`cursor-pointer border-2 border-dashed rounded-xl p-8 sm:p-12 text-center transition-all ${
              isDragging 
                ? 'border-[#F3C048] bg-[#2E1C15]/80 scale-[0.99]' 
                : 'border-[#4A2D1F] hover:border-[#D4AF37]/70 bg-[#1A110E]/60 hover:bg-[#201411]'
            }`}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp"
              onChange={handleFileChange}
              className="hidden"
            />
            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[#281814] border border-[#D4AF37]/30 flex items-center justify-center text-[#F3C048] shadow-inner group-hover:scale-105 transition-transform">
              <ImageIcon className="w-8 h-8 text-[#F3C048]" />
            </div>

            <p className="text-base font-semibold text-[#EFE7DE] mb-1">
              Drag & Drop your Pookalam photo here
            </p>
            <p className="text-xs text-[#9E8C81] mb-4">
              Supports high-resolution JPG, PNG, WEBP (Atham designs, office contests, family courtyards)
            </p>

            <button
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold bg-[#2B1812] hover:bg-[#3D231B] text-[#F3C048] border border-[#D4AF37]/40 transition-colors"
            >
              Browse Files from Computer
            </button>
          </div>
        ) : (
          /* Image Selected Preview Card */
          <div className="rounded-xl bg-[#1E1310] border border-[#4A2D1F] p-4 sm:p-5 flex flex-col sm:flex-row items-center gap-5">
            <div className="relative w-full sm:w-48 h-48 rounded-lg overflow-hidden border-2 border-[#D4AF37]/50 shadow-md bg-black flex-shrink-0">
              <img
                src={selectedImage}
                alt="Selected Pookalam"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/70 text-[10px] text-[#F3C048] font-mono border border-[#D4AF37]/40">
                EVIDENCE_READY
              </div>
            </div>

            <div className="flex-1 w-full space-y-3">
              <div>
                <span className="text-[11px] font-semibold text-[#15803D] bg-[#142316] px-2 py-0.5 rounded border border-[#166534]">
                  Image Attached
                </span>
                <h3 className="text-sm font-semibold text-[#FDF8EE] mt-1 truncate">
                  {fileName || "Captured Pookalam Sample"}
                </h3>
                <p className="text-xs text-[#A89487]">
                  Multimodal vision scanner ready to extract petal varieties, spectral coverage, and strict Ammavan drama.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-2">
                <button
                  id="run-forensic-inspection-btn"
                  onClick={triggerAnalyze}
                  disabled={isLoading}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-[#D4AF37] via-[#F3C048] to-[#EAB308] text-[#160B08] hover:opacity-95 transition-all shadow-lg shadow-[#D4AF37]/20 disabled:opacity-50 active:scale-95"
                >
                  {isLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Scanning Petal Signatures...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-[#881337]" />
                      <span>Run Forensic Inspection</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={clearSelection}
                  disabled={isLoading}
                  className="px-4 py-2.5 rounded-xl text-xs font-semibold bg-[#251713] hover:bg-[#341F1A] text-[#C5B5AA] hover:text-white border border-[#3E2519] transition-colors"
                >
                  Change Image
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Optional Custom API Key Field (Collapsible) */}
        <div className="mt-5 pt-4 border-t border-[#2D1B14]">
          <button
            type="button"
            onClick={() => setShowApiConfig(!showApiConfig)}
            className="flex items-center justify-between w-full text-xs font-medium text-[#B2A094] hover:text-[#EFE7DE] transition-colors"
          >
            <span className="flex items-center gap-1.5">
              <Key className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>Advanced: Custom Gemini API Key (Optional)</span>
              <span className="text-[10px] text-[#78665B]">(Platform auto-provides default key)</span>
            </span>
            {showApiConfig ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>

          {showApiConfig && (
            <div className="mt-3 p-3 rounded-xl bg-[#1C120F] border border-[#382117] space-y-2">
              <label className="block text-[11px] text-[#A89487]">
                Provide your personal Gemini API Key if you wish to override container credentials:
              </label>
              <input
                type="password"
                value={customApiKey}
                onChange={(e) => setCustomApiKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-3 py-2 rounded-lg text-xs bg-[#110A08] border border-[#44271B] text-[#FDF8EE] placeholder-[#5C463C] focus:outline-none focus:border-[#D4AF37]"
              />
            </div>
          )}
        </div>
      </div>

      {/* Quick Sample Presets Showcase */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#F3C048]" />
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D4AF37]">
              Instant Demo Presets (Zero Upload Required)
            </h3>
          </div>
          <span className="text-[11px] text-[#8C7A70]">Click any preset to inspect immediately</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {SAMPLE_PRESETS.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset)}
              className="group text-left p-3 rounded-xl bg-[#180F0D] hover:bg-[#221512] border border-[#341F17] hover:border-[#D4AF37]/60 transition-all shadow-md flex items-start gap-3 relative overflow-hidden"
            >
              <div className="w-14 h-14 rounded-lg overflow-hidden border border-[#D4AF37]/40 flex-shrink-0 bg-black">
                <img
                  src={preset.previewUrl}
                  alt={preset.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <span className="text-xs font-bold text-[#EFE7DE] truncate group-hover:text-[#F3C048] transition-colors">
                    {preset.title}
                  </span>
                </div>
                <p className="text-[11px] text-[#A89487] line-clamp-2 leading-relaxed">
                  {preset.tagline}
                </p>
                <div className="mt-2 flex items-center justify-between text-[10px]">
                  <span className="text-[#D4AF37] font-semibold">{preset.badge}</span>
                  <span className="text-[#6E5C52] group-hover:text-[#F3C048] flex items-center gap-0.5">
                    <Eye className="w-3 h-3" /> Inspect
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
