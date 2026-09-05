import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Share2, 
  Download, 
  Maximize2, 
  Compass, 
  Check, 
  FileText, 
  ShieldCheck, 
  Printer, 
  Sparkles,
  Layers
} from 'lucide-react';
import { ForensicAnalysis } from '../types';
import { AmmavanVerdictCard } from './AmmavanVerdictCard';
import { SpectralChart } from './SpectralChart';
import { FloralEvidenceTable } from './FloralEvidenceTable';

interface ResultsDashboardProps {
  analysis: ForensicAnalysis;
  onReset: () => void;
}

export const ResultsDashboard: React.FC<ResultsDashboardProps> = ({
  analysis,
  onReset,
}) => {
  const [showOverlay, setShowOverlay] = useState(true);
  const [copied, setCopied] = useState(false);

  const copyDossier = () => {
    const text = `🌸 POOKALAM DETECTIVE: FORENSIC DOSSIER 🌸
Case ID: ${analysis.caseNumber}
Verdict: ${analysis.ammavanVerdict}
Ammavan Approval Rating: ${analysis.ammavanScore}% (${analysis.authenticityTier})
Ammavan Review: "${analysis.ammavanDramaReview}"
Estimated Market Value: ₹${analysis.floristExtortionEstimate.totalRupees} (+${analysis.floristExtortionEstimate.markupPercentage}% mark-up)
Detected Elements: ${analysis.floralEvidence.map(f => `${f.malayalamName} (${f.englishName})`).join(', ')}
Inspected by: Kerala Pookalam Forensic Department (CPFD)`;

    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    });
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      {/* Top Case Navigation Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#180F0D] border border-[#3E2519] shadow-lg">
        <div className="flex items-center gap-3">
          <button
            onClick={onReset}
            className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold bg-[#281813] hover:bg-[#38221B] text-[#F3C048] border border-[#D4AF37]/40 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Scan Another Pookalam</span>
          </button>

          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#FDE047]">
                {analysis.caseNumber}
              </span>
              {analysis.isMock ? (
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#2A1D15] text-[#D4AF37] border border-[#3E291F]">
                  Calibrated Offline Mode
                </span>
              ) : (
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#142316] text-[#86EFAC] border border-[#166534]">
                  Live Gemini Vision Verified
                </span>
              )}
            </div>
            <p className="text-[11px] text-[#8C7A70]">
              Filed: {new Date(analysis.timestamp).toLocaleDateString()} at {new Date(analysis.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            onClick={copyDossier}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#221410] hover:bg-[#301D17] text-[#EFE7DE] border border-[#3E2519] transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-[#22C55E]" /> : <FileText className="w-3.5 h-3.5 text-[#F3C048]" />}
            <span>{copied ? "Dossier Copied!" : "Copy Report"}</span>
          </button>

          <button
            onClick={handlePrint}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-[#221410] hover:bg-[#301D17] text-[#EFE7DE] border border-[#3E2519] transition-colors"
          >
            <Printer className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span>Print Dossier</span>
          </button>
        </div>
      </div>

      {/* Main Dual-Panel View: Left = High-Res Image with Overlay, Right = Ammavan Verdict */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Image Preview with Forensic Grid Toggle */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative rounded-2xl bg-[#140C0A] border border-[#3E2519] p-3 shadow-xl overflow-hidden">
            
            {/* Control Bar over Image */}
            <div className="flex items-center justify-between px-3 py-2 bg-[#1E120E] rounded-xl mb-3 border border-[#341F17]">
              <span className="text-xs font-mono text-[#D4AF37] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5" />
                EXHIBIT_A // OPTICAL EVIDENCE
              </span>

              <button
                onClick={() => setShowOverlay(!showOverlay)}
                className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-[11px] font-semibold transition-colors ${
                  showOverlay
                    ? 'bg-[#D4AF37] text-[#140C0A]'
                    : 'bg-[#291711] text-[#A89487] hover:text-[#EFE7DE]'
                }`}
              >
                <Layers className="w-3 h-3" />
                <span>Forensic Overlay {showOverlay ? "ON" : "OFF"}</span>
              </button>
            </div>

            {/* High-Resolution Image Canvas */}
            <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-black border border-[#2D1B14] shadow-inner flex items-center justify-center">
              <img
                src={analysis.imageUrl}
                alt="Analyzed Pookalam"
                className="w-full h-full object-cover"
              />

              {/* Forensic Inspection Overlay */}
              {showOverlay && (
                <div className="absolute inset-0 pointer-events-none">
                  {/* Concentric Calibration Rings */}
                  <div className="absolute inset-4 rounded-full border border-[#D4AF37]/30" />
                  <div className="absolute inset-16 rounded-full border border-dashed border-[#F3C048]/40" />
                  <div className="absolute inset-28 rounded-full border border-[#991B1B]/40" />
                  <div className="absolute inset-40 rounded-full border border-[#15803D]/50" />

                  {/* Crosshairs & Center Core */}
                  <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#F3C048]/30" />
                  <div className="absolute inset-y-0 left-1/2 w-[1px] bg-[#F3C048]/30" />
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full border border-[#FFFFFF]/80 bg-[#FFFFFF]/20 flex items-center justify-center">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FFFFFF]" />
                  </div>

                  {/* Corner Reticles */}
                  <div className="absolute top-3 left-3 text-[10px] font-mono text-[#D4AF37] bg-black/60 px-1.5 py-0.5 rounded border border-[#D4AF37]/40">
                    RADIAL_RES: 100%
                  </div>
                  <div className="absolute bottom-3 right-3 text-[10px] font-mono text-[#86EFAC] bg-black/60 px-1.5 py-0.5 rounded border border-[#166534]">
                    THUMBA_DETECTOR: ACTIVE
                  </div>
                </div>
              )}
            </div>

            {/* Investigator Notes footer */}
            {analysis.investigatorNotes && (
              <div className="mt-3 p-3 rounded-xl bg-[#1A100D] border border-[#341E16] text-[11px] text-[#A89487] leading-relaxed">
                <strong className="text-[#D4AF37]">CPFD Examiner Notes:</strong> {analysis.investigatorNotes}
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Ammavan Rating & Extortion Metrics */}
        <div className="lg:col-span-6">
          <AmmavanVerdictCard analysis={analysis} />
        </div>

      </div>

      {/* Full-Width Section 1: Spectral Color Breakdown Chart */}
      <SpectralChart spectralBreakdown={analysis.spectralBreakdown} />

      {/* Full-Width Section 2: Detected Floral Evidence Registry Table */}
      <FloralEvidenceTable
        evidenceList={analysis.floralEvidence}
        suspiciousMaterials={analysis.suspiciousMaterialsFound || []}
      />
    </div>
  );
};
