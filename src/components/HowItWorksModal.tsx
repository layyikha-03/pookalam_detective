import React from 'react';
import { X, ShieldAlert, Award, AlertTriangle, Scale, Sparkles, CheckCircle2, Ban } from 'lucide-react';

interface HowItWorksModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HowItWorksModal: React.FC<HowItWorksModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div 
        id="how-it-works-modal-content"
        className="relative w-full max-w-2xl bg-[#160E0B] border border-[#D4AF37]/50 rounded-2xl shadow-2xl p-6 sm:p-8 text-[#EFE7DE] my-8 max-h-[90vh] overflow-y-auto"
      >
        {/* Kasavu Gold Decorative Top Bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-2xl bg-gradient-to-r from-[#991B1B] via-[#D4AF37] to-[#15803D]" />

        {/* Close Button */}
        <button
          id="close-how-it-works-btn"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-[#251713] hover:bg-[#38221C] text-[#C5B5AA] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-[#7F1D1D]/70 border border-[#D4AF37]/60 flex items-center justify-center text-[#F3C048]">
            <Scale className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl font-bold font-display text-[#FDE047]">
              CPFD Forensic Protocol & Ammavan Lore
            </h2>
            <p className="text-xs text-[#A89487]">
              Standard Operating Procedure of the Central Pookalam Forensic Department
            </p>
          </div>
        </div>

        {/* Lore Intro */}
        <div className="p-4 rounded-xl bg-[#231511] border border-[#3E2519] mb-6 text-sm leading-relaxed text-[#D8CCC4]">
          <p>
            For centuries, Kerala grandfathers (<em>Ammavans</em>) have stood on verandas with folded arms, 
            shaking their heads at modern floral shortcut attempts. 
            <strong className="text-[#F3C048]"> Pookalam Detective</strong> leverages Multimodal Vision AI 
            to formalize this ancient judgment into an objective, merciless forensic science.
          </p>
        </div>

        {/* Penalties & Deductions */}
        <h3 className="text-sm font-semibold tracking-wider uppercase text-[#D4AF37] mb-3 flex items-center gap-2">
          <AlertTriangle className="w-4 h-4 text-[#EF4444]" />
          Statutory Ammavan Penalties
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
          <div className="p-3 rounded-lg bg-[#1E110E] border border-[#991B1B]/40 flex items-start gap-2.5">
            <Ban className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#FCA5A5]">-50 Pts: Plastic & Colored Sawdust</p>
              <p className="text-[11px] text-[#B09E94]">
                Instant cultural scandal. Threatens grandfather’s cardiac health and ancestral honor.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#1E110E] border border-[#991B1B]/40 flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-[#F59E0B] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#FCD34D]">-25 Pts: Missing Thumba Center Ring</p>
              <p className="text-[11px] text-[#B09E94]">
                Atham carpets without sacred Ceylon Slitwort white rings are viewed as pure laziness.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#1E110E] border border-[#3E2519] flex items-start gap-2.5">
            <Scale className="w-4 h-4 text-[#EAB308] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#FEF08A]">-15 Pts: Coimbatore Marigold Overdose</p>
              <p className="text-[11px] text-[#B09E94]">
                Over-reliance on Tamil Nadu wholesale truck imports indicates zero compound scavenging.
              </p>
            </div>
          </div>

          <div className="p-3 rounded-lg bg-[#1E110E] border border-[#3E2519] flex items-start gap-2.5">
            <CheckCircle2 className="w-4 h-4 text-[#22C55E] mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-xs font-bold text-[#86EFAC]">+20 Pts: Sacred Dashapushpam Harvest</p>
              <p className="text-[11px] text-[#B09E94]">
                Spotted real Mukkutti or Tulsi gathered with morning dew? Ammavan will reluctantly smile.
              </p>
            </div>
          </div>
        </div>

        {/* Scoring Tiers */}
        <h3 className="text-sm font-semibold tracking-wider uppercase text-[#D4AF37] mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-[#D4AF37]" />
          Official Approval Tiers
        </h3>

        <div className="space-y-2 mb-6">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#142316] border border-[#166534]">
            <span className="text-xs font-bold text-[#86EFAC]">75% - 100%: Vaidika Gold (Legendary)</span>
            <span className="text-[11px] text-[#BBF7D0]">Ammavan gently nods; payasam guaranteed</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#271F0F] border border-[#854D0E]">
            <span className="text-xs font-bold text-[#FDE047]">45% - 74%: Kudumba Sneham / Instagram Compromise</span>
            <span className="text-[11px] text-[#FEF08A]">"Good effort, but in 1984 ours was bigger"</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#280F0E] border border-[#991B1B]">
            <span className="text-xs font-bold text-[#FCA5A5]">0% - 44%: Coimbatore Plastic Disaster</span>
            <span className="text-[11px] text-[#FECACA]">Disowned from family WhatsApp group</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl font-semibold text-xs bg-gradient-to-r from-[#D4AF37] to-[#B48B1E] text-[#160B08] hover:opacity-90 transition-opacity shadow-md"
          >
            Understood, Proceed to Inspection
          </button>
        </div>
      </div>
    </div>
  );
};
