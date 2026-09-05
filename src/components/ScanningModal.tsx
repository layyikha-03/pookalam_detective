import React, { useEffect, useState } from 'react';
import { ShieldAlert, Flower2, Search, Compass, AlertCircle } from 'lucide-react';

interface ScanningModalProps {
  imagePreview: string | null;
}

const SCAN_STEPS = [
  "Initializing CPFD Multimodal Vision Sensor...",
  "Calibrating Atham radial concentric rings & geometric symmetry...",
  "Cross-referencing petal spectral wavelengths against Coimbatore wholesale shipments...",
  "Testing for forbidden Rangoli colored sawdust & polyester micro-plastics...",
  "Verifying sacred white Thumba core ring authenticity...",
  "Summoning Thrissur Ammavan for unmerciful cross-examination...",
  "Calculating Florist Extortion Index based on local Kerala market rates...",
  "Stamping official Cultural Scandal or Heritage Approval verdict..."
];

export const ScanningModal: React.FC<ScanningModalProps> = ({ imagePreview }) => {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStepIndex((prev) => (prev < SCAN_STEPS.length - 1 ? prev + 1 : prev));
    }, 1100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div 
        id="scanning-modal-container"
        className="relative w-full max-w-lg bg-[#140C0A] border-2 border-[#D4AF37] rounded-2xl shadow-2xl p-6 sm:p-8 text-center overflow-hidden"
      >
        {/* Glowing Kasavu corner accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#F3C048]" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#F3C048]" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#F3C048]" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#F3C048]" />

        {/* Central Visual Inspection Radar */}
        <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#3D251A] bg-[#0A0504] flex items-center justify-center shadow-2xl">
          
          {/* Background image under inspection */}
          {imagePreview ? (
            <img
              src={imagePreview}
              alt="Scanning Pookalam"
              className="w-full h-full object-cover opacity-60 filter contrast-125"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-[#200D09] to-[#0D0503]" />
          )}

          {/* Concentric Forensic Rings overlay */}
          <div className="absolute inset-2 rounded-full border border-[#D4AF37]/30 pointer-events-none" />
          <div className="absolute inset-8 rounded-full border border-dashed border-[#F3C048]/40 animate-spin-slow pointer-events-none" />
          <div className="absolute inset-16 rounded-full border border-[#991B1B]/50 pointer-events-none" />
          <div className="absolute inset-24 rounded-full border border-[#15803D]/60 pointer-events-none" />

          {/* Crosshairs */}
          <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#F3C048]/40 pointer-events-none" />
          <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#F3C048]/40 pointer-events-none" />

          {/* Animated Scanning Laser Line */}
          <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#F3C048] to-transparent shadow-[0_0_15px_#F3C048] animate-scan-line pointer-events-none" />

          {/* Floating Central Badge */}
          <div className="absolute w-12 h-12 rounded-full bg-[#180E0C]/90 border border-[#D4AF37] flex items-center justify-center shadow-lg">
            <Search className="w-6 h-6 text-[#F3C048] animate-pulse" />
          </div>
        </div>

        {/* Status Text & Diagnostics */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-[#2E120D] text-[#FCA5A5] border border-[#991B1B]">
            <ShieldAlert className="w-3.5 h-3.5 text-[#EF4444] animate-bounce" />
            <span>FORENSIC SCAN ACTIVE</span>
          </div>

          <h3 className="text-lg sm:text-xl font-bold font-display text-[#FDE047]">
            Scanning Floral Geometries & Petal Signatures...
          </h3>

          <div className="h-12 flex items-center justify-center px-4">
            <p className="text-xs sm:text-sm text-[#E2D4CB] font-mono transition-all duration-300">
              {SCAN_STEPS[stepIndex]}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-[#20130F] rounded-full h-2 overflow-hidden border border-[#3E2519] p-0.5">
            <div
              className="bg-gradient-to-r from-[#991B1B] via-[#D4AF37] to-[#15803D] h-full rounded-full transition-all duration-500 ease-out"
              style={{ width: `${Math.min(100, ((stepIndex + 1) / SCAN_STEPS.length) * 100)}%` }}
            />
          </div>

          <p className="text-[11px] text-[#8C7A70] italic">
            "Ammavan is currently measuring the distance from center to outer petals using 1978 memory benchmarks."
          </p>
        </div>
      </div>
    </div>
  );
};
