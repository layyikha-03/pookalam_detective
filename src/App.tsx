import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { UploadZone } from './components/UploadZone';
import { ResultsDashboard } from './components/ResultsDashboard';
import { ScanningModal } from './components/ScanningModal';
import { HowItWorksModal } from './components/HowItWorksModal';
import { ForensicAnalysis, SamplePookalamPreset } from './types';
import { SAMPLE_PRESETS, MOCK_ANALYSIS_TRADITIONAL } from './data/mockData';
import { Flower2, ShieldAlert, Sparkles, Heart } from 'lucide-react';

export default function App() {
  const [analysis, setAnalysis] = useState<ForensicAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [scanningPreview, setScanningPreview] = useState<string | null>(null);
  const [isHowItWorksOpen, setIsHowItWorksOpen] = useState<boolean>(false);
  const [isAiReady, setIsAiReady] = useState<boolean>(true);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Check health endpoint on mount
  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => {
        if (data && typeof data.geminiKeyConfigured === 'boolean') {
          setIsAiReady(data.geminiKeyConfigured);
        }
      })
      .catch((err) => {
        console.warn('Health check note:', err);
      });
  }, []);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  // Run analysis via server API with guaranteed fallback
  const handleAnalyze = async (imageBase64: string, customApiKey?: string) => {
    setIsLoading(true);
    setScanningPreview(imageBase64);

    try {
      const response = await fetch('/api/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          imageBase64,
          customApiKey,
          mimeType: imageBase64.includes('data:image/png') ? 'image/png' : 'image/jpeg',
        }),
      });

      const json = await response.json();
      if (json.success && json.data) {
        // Allow the dramatic scanner to finish its visual loop smoothly
        setTimeout(() => {
          setAnalysis(json.data);
          setIsLoading(false);
          setScanningPreview(null);
          if (json.mode === 'fallback_no_key') {
            showToast('Calibrated Offline Inspection complete (Zero-config safety active).');
          } else if (json.mode === 'live_ai') {
            showToast('Multimodal Gemini Vision forensic scan completed successfully!');
          }
        }, 1800);
      } else {
        throw new Error(json.error || 'Failed to inspect image');
      }
    } catch (err: any) {
      console.warn('[Pookalam Detective] Fallback triggered:', err);
      // Fail-safe presentation guarantee
      setTimeout(() => {
        const fallback: ForensicAnalysis = {
          ...MOCK_ANALYSIS_TRADITIONAL,
          id: `case-client-${Date.now()}`,
          imageUrl: imageBase64,
          isMock: true,
          investigatorNotes: 'Inspection generated via CPFD Offline Engine. Ready for Onam celebration scrutiny!',
        };
        setAnalysis(fallback);
        setIsLoading(false);
        setScanningPreview(null);
        showToast('Offline calibrated report compiled successfully.');
      }, 1500);
    }
  };

  // Select sample preset with a brief, exciting scanning sequence
  const handleSelectPreset = (preset: SamplePookalamPreset) => {
    setIsLoading(true);
    setScanningPreview(preset.previewUrl);

    setTimeout(() => {
      setAnalysis(preset.data);
      setIsLoading(false);
      setScanningPreview(null);
      showToast(`Loaded Preset: ${preset.title}`);
    }, 1400);
  };

  const handleReset = () => {
    setAnalysis(null);
    setScanningPreview(null);
  };

  return (
    <div className="min-h-screen bg-pookalam-pattern text-[#FDF8EE] flex flex-col selection:bg-[#F59E0B] selection:text-[#1A0A06]">
      {/* Header */}
      <Header
        onOpenHowItWorks={() => setIsHowItWorksOpen(true)}
        onSelectSample={() => handleSelectPreset(SAMPLE_PRESETS[0])}
        isAiReady={isAiReady}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 z-50 bg-[#251511] text-[#FDE047] border border-[#D4AF37] px-4 py-2.5 rounded-xl shadow-2xl text-xs font-semibold flex items-center gap-2 animate-bounce">
          <Sparkles className="w-4 h-4 text-[#F3C048]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        
        {/* Scanning Overlay Modal */}
        {isLoading && <ScanningModal imagePreview={scanningPreview} />}

        {/* How It Works Modal */}
        <HowItWorksModal
          isOpen={isHowItWorksOpen}
          onClose={() => setIsHowItWorksOpen(false)}
        />

        {!analysis ? (
          /* Input / Upload State */
          <div className="space-y-6">
            
            {/* Hero Lore Banner */}
            <div className="relative rounded-2xl bg-gradient-to-r from-[#200F0B] via-[#160B08] to-[#120906] border border-[#3E2519] p-6 sm:p-8 shadow-2xl overflow-hidden">
              <div className="absolute -right-8 -bottom-8 w-48 h-48 rounded-full bg-[#D4AF37]/5 blur-2xl pointer-events-none" />
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-[#7F1D1D]/40 text-[#FECACA] border border-[#991B1B]/70 mb-3">
                  <ShieldAlert className="w-3.5 h-3.5 text-[#F87171]" />
                  <span>ATHAM 2026 FORENSIC SQUAD</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black font-display tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#FFFBEB] via-[#FDE047] to-[#F3C048]">
                  Did You Pick Real Thumba, or Did You Buy 40kg of Coimbatore Marigold?
                </h2>
                <p className="text-xs sm:text-sm text-[#C4B4A9] mt-2.5 leading-relaxed font-light">
                  Armed with high-precision multimodal vision algorithms and decades of unsparing Kerala elder scrutiny, 
                  Pookalam Detective analyzes your floral geometry, computes spectral petal concentrations, and delivers 
                  the definitive <strong className="text-[#F3C048]">Ammavan Approval Score</strong> before Onasadhya begins.
                </p>
              </div>
            </div>

            {/* Upload Zone & Presets */}
            <UploadZone
              onAnalyze={handleAnalyze}
              onSelectPreset={handleSelectPreset}
              isLoading={isLoading}
            />
          </div>
        ) : (
          /* Results State */
          <ResultsDashboard
            analysis={analysis}
            onReset={handleReset}
          />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-[#341F17] bg-[#100806] py-6 text-center text-xs text-[#86756C]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Flower2 className="w-4 h-4 text-[#D4AF37]" />
            <span>Pookalam Detective: Floral Forensic Inspector</span>
          </div>

          <div className="text-[11px] text-[#6E5D54]">
            Built with ruthless traditional love for Useless Hackathon 2026 • Not officially affiliated with Thrissur Ammavans
          </div>

          <div className="text-[10px] font-mono text-[#A89487]">
            CPFD PROTOCOL // V3.8-VISION
          </div>
        </div>
      </footer>
    </div>
  );
}
