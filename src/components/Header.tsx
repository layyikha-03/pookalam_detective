import React from 'react';
import { ShieldAlert, Sparkles, HelpCircle, Flower2, Award } from 'lucide-react';

interface HeaderProps {
  onOpenHowItWorks: () => void;
  onSelectSample: () => void;
  isAiReady?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenHowItWorks,
  onSelectSample,
  isAiReady = true,
}) => {
  return (
    <header className="relative border-b border-[#3E2519] bg-[#140C0A]/90 backdrop-blur-md sticky top-0 z-30">
      {/* Kasavu Gold Top Accent Line */}
      <div className="h-1 w-full bg-gradient-to-r from-[#991B1B] via-[#D4AF37] to-[#15803D]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          
          {/* Brand Identity */}
          <div className="flex items-center gap-3.5">
            <div className="relative flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#7F1D1D] to-[#2D0B0B] border border-[#D4AF37]/50 flex items-center justify-center shadow-lg shadow-[#000000]/40">
              <Flower2 className="w-7 h-7 text-[#F3C048] animate-spin-slow" />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#15803D] border-2 border-[#140C0A] flex items-center justify-center">
                <ShieldAlert className="w-2.5 h-2.5 text-white" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h1 className="text-xl sm:text-2xl font-bold tracking-wide font-display text-transparent bg-clip-text bg-gradient-to-r from-[#FDE047] via-[#F3C048] to-[#EAB308]">
                  POOKALAM DETECTIVE
                </h1>
                <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-[#7F1D1D]/60 text-[#FECACA] border border-[#991B1B]">
                  CPFD FORENSIC LAB
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#D1C2BA] font-light">
                Subjecting your Onam floral carpets to ruthless traditional scrutiny
              </p>
            </div>
          </div>

          {/* Quick Actions & Status */}
          <div className="flex items-center gap-2.5 flex-wrap self-start md:self-auto">
            <button
              id="try-demo-btn-header"
              onClick={onSelectSample}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-[#2A1813] hover:bg-[#3D231B] text-[#F3C048] border border-[#D4AF37]/40 transition-colors shadow-sm"
              title="Instant test with pre-analyzed classic Pookalams"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#FACC15]" />
              <span>Try Sample Pookalam (Demo)</span>
            </button>

            <button
              id="how-it-works-btn"
              onClick={onOpenHowItWorks}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#1F1310] hover:bg-[#2C1B17] text-[#E7DDD7] border border-[#3E2519] transition-colors"
            >
              <HelpCircle className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>How It Works</span>
            </button>

            <div className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-medium bg-[#141E15] text-[#86EFAC] border border-[#166534]">
              <span className="w-2 h-2 rounded-full bg-[#22C55E] animate-pulse" />
              <span>{isAiReady ? "Gemini Vision Armed" : "Calibrated Fallback Ready"}</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};
