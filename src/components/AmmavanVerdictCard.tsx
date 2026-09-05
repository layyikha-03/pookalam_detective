import React from 'react';
import { Award, AlertOctagon, CheckCircle, IndianRupee, Flame, UserCheck, ShieldAlert, Sparkles } from 'lucide-react';
import { ForensicAnalysis } from '../types';

interface AmmavanVerdictCardProps {
  analysis: ForensicAnalysis;
}

export const AmmavanVerdictCard: React.FC<AmmavanVerdictCardProps> = ({ analysis }) => {
  const { ammavanScore, ammavanVerdict, ammavanDramaReview, ammavanPersona, floristExtortionEstimate, symmetryScore, radialRingsDetected, thumbaWhiteRingDetected, authenticityTier } = analysis;

  // Color theme determination based on requirements:
  // Green for 75%+, Yellow for 45-74%, Red for <45%
  let scoreColorClass = "text-[#22C55E]";
  let scoreBgClass = "bg-[#142316] border-[#166534]";
  let ringStroke = "#22C55E";
  let tierBadgeBg = "bg-[#15803D]/30 text-[#86EFAC] border-[#166534]";

  if (ammavanScore < 45) {
    scoreColorClass = "text-[#EF4444]";
    scoreBgClass = "bg-[#280F0E] border-[#991B1B]";
    ringStroke = "#EF4444";
    tierBadgeBg = "bg-[#991B1B]/30 text-[#FCA5A5] border-[#991B1B]";
  } else if (ammavanScore < 75) {
    scoreColorClass = "text-[#EAB308]";
    scoreBgClass = "bg-[#271F0F] border-[#854D0E]";
    ringStroke = "#EAB308";
    tierBadgeBg = "bg-[#854D0E]/30 text-[#FDE047] border-[#854D0E]";
  }

  const radius = 42;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (ammavanScore / 100) * circumference;

  return (
    <div className="space-y-4">
      {/* Primary Score & Verdict Card */}
      <div className="relative rounded-2xl bg-[#180F0C] border border-[#3E2519] p-5 sm:p-6 shadow-xl overflow-hidden">
        
        {/* Decorative Top Accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#991B1B] via-[#D4AF37] to-[#15803D]" />

        {/* Score & Stamp Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-5 border-b border-[#2C1913]">
          
          {/* Circular Gauge */}
          <div className="flex items-center gap-4">
            <div className="relative w-24 h-24 flex-shrink-0 flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  className="stroke-[#2A1813]"
                  strokeWidth="8"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r={radius}
                  stroke={ringStroke}
                  strokeWidth="8"
                  fill="transparent"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
              <div className="absolute flex flex-col items-center justify-center">
                <span className={`text-2xl font-black font-display tracking-tight ${scoreColorClass}`}>
                  {ammavanScore}%
                </span>
                <span className="text-[9px] uppercase tracking-wider text-[#A89487]">Approval</span>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5 mb-1">
                <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${tierBadgeBg}`}>
                  {authenticityTier}
                </span>
              </div>
              <h3 className="text-sm font-semibold text-[#EFE7DE]">
                Ammavan Traditional Index
              </h3>
              <p className="text-xs text-[#9E8C81]">
                Evaluated against 1970s Tharavadu baseline standards
              </p>
            </div>
          </div>

          {/* Stamped Verdict Banner */}
          <div className="text-center sm:text-right w-full sm:w-auto">
            <div className="inline-block px-4 py-2 rounded-xl border-2 border-[#D4AF37] bg-[#22130E] transform sm:-rotate-1 shadow-lg">
              <span className="text-[10px] block uppercase font-mono tracking-widest text-[#D4AF37] mb-0.5">
                OFFICIAL CPFD VERDICT
              </span>
              <span className="text-base sm:text-lg font-black tracking-wider text-[#FDE047] font-display">
                {ammavanVerdict}
              </span>
            </div>
          </div>
        </div>

        {/* Dramatic Ammavan Review Blockquote */}
        <div className="pt-4">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-[#20120E] border border-[#3E2319] relative">
            <div className="w-10 h-10 rounded-full bg-[#341A13] border border-[#D4AF37]/50 flex items-center justify-center text-xl flex-shrink-0">
              {ammavanPersona?.reactionEmoji || "👴"}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 mb-1 flex-wrap">
                <span className="text-xs font-bold text-[#F3C048]">
                  {ammavanPersona?.name || "Keralite Elder Inspector"}
                </span>
                <span className="text-[11px] text-[#A89487] font-mono">
                  {ammavanPersona?.village || "Thrissur District"}
                </span>
              </div>
              <blockquote className="text-xs sm:text-sm text-[#FDF8EE] italic leading-relaxed">
                "{ammavanDramaReview}"
              </blockquote>
            </div>
          </div>
        </div>

        {/* Symmetry & Thumba Status Chips */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 mt-4 pt-3 border-t border-[#261510] text-center">
          <div className="p-2 rounded-lg bg-[#1D110D] border border-[#341E16]">
            <span className="text-[10px] text-[#A89487] block uppercase">Radial Symmetry</span>
            <span className="text-xs font-bold text-[#FDE047]">{symmetryScore}% Calibrated</span>
          </div>

          <div className="p-2 rounded-lg bg-[#1D110D] border border-[#341E16]">
            <span className="text-[10px] text-[#A89487] block uppercase">Concentric Rings</span>
            <span className="text-xs font-bold text-[#EFE7DE]">{radialRingsDetected} Distinct Zones</span>
          </div>

          <div className="col-span-2 sm:col-span-1 p-2 rounded-lg bg-[#1D110D] border border-[#341E16]">
            <span className="text-[10px] text-[#A89487] block uppercase">Thumba Core Ring</span>
            <span className={`text-xs font-bold ${thumbaWhiteRingDetected ? 'text-[#22C55E]' : 'text-[#EF4444]'}`}>
              {thumbaWhiteRingDetected ? "Verified Sacred White" : "Missing / Impure"}
            </span>
          </div>
        </div>

      </div>

      {/* Florist Extortion Estimator Callout Card */}
      <div className="rounded-2xl bg-gradient-to-br from-[#1C120F] to-[#140C0A] border border-[#3E2519] p-4 sm:p-5 shadow-lg">
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-[#381E15] border border-[#D4AF37]/40 flex items-center justify-center text-[#F3C048]">
              <IndianRupee className="w-4 h-4" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-[#FDF8EE]">
                Florist Extortion Estimator
              </h4>
              <p className="text-[10px] text-[#A89487]">Estimated middleman exploitation rate</p>
            </div>
          </div>

          <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#7F1D1D]/50 text-[#FCA5A5] border border-[#991B1B]">
            {floristExtortionEstimate.syndicateLevel}
          </span>
        </div>

        <div className="p-3 rounded-xl bg-[#231511] border border-[#3A2218] flex items-baseline justify-between gap-4">
          <div>
            <span className="text-xl sm:text-2xl font-black text-[#F3C048] font-display">
              ₹{floristExtortionEstimate.totalRupees.toLocaleString('en-IN')}
            </span>
            <span className="text-xs text-[#A89487] ml-2">approx. market damage</span>
          </div>
          <div className="text-right">
            <span className="text-xs font-bold text-[#EF4444]">
              +{floristExtortionEstimate.markupPercentage}% Markup
            </span>
            <span className="text-[10px] text-[#8C7A70] block">Onam peak surge</span>
          </div>
        </div>

        <p className="text-[11px] text-[#A89487] mt-2.5 leading-relaxed italic">
          💡 {floristExtortionEstimate.breakdownNote}
        </p>
      </div>
    </div>
  );
};
