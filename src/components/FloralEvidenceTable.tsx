import React, { useState } from 'react';
import { Flower2, ShieldAlert, CheckCircle2, AlertTriangle, Ban, HelpCircle, Filter } from 'lucide-react';
import { FloralEvidence, MaterialStatus } from '../types';

interface FloralEvidenceTableProps {
  evidenceList: FloralEvidence[];
  suspiciousMaterials: string[];
}

export const FloralEvidenceTable: React.FC<FloralEvidenceTableProps> = ({
  evidenceList,
  suspiciousMaterials,
}) => {
  const [filter, setFilter] = useState<'all' | 'authentic' | 'suspect'>('all');

  const filteredItems = evidenceList.filter((item) => {
    if (filter === 'authentic') return item.status === 'authentic';
    if (filter === 'suspect') return item.status === 'suspect' || item.status === 'synthetic';
    return true;
  });

  const getStatusBadge = (status: MaterialStatus) => {
    switch (status) {
      case 'authentic':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#142316] text-[#86EFAC] border border-[#166534]">
            <CheckCircle2 className="w-3 h-3 text-[#22C55E]" /> Authentic Heritage
          </span>
        );
      case 'acceptable':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#271F0F] text-[#FDE047] border border-[#854D0E]">
            Commercial Florist
          </span>
        );
      case 'suspect':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#2C150F] text-[#F97316] border border-[#C2410C]">
            <AlertTriangle className="w-3 h-3 text-[#F97316]" /> Suspect / Wilting
          </span>
        );
      case 'synthetic':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#280F0E] text-[#FCA5A5] border border-[#991B1B]">
            <Ban className="w-3 h-3 text-[#EF4444]" /> Banned Synthetic
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="rounded-2xl bg-[#180F0D] border border-[#3E2519] p-5 sm:p-6 shadow-xl space-y-4">
      {/* Header & Filter Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#2D1A14] border border-[#D4AF37]/40 flex items-center justify-center text-[#F3C048]">
            <Flower2 className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#FDF8EE] font-display">
              Detected Floral Evidence Registry
            </h3>
            <p className="text-[11px] text-[#A89487]">
              Microscopic identification of botanical elements and unauthorized filler materials
            </p>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex items-center gap-1.5 self-start sm:self-auto bg-[#1F1310] p-1 rounded-xl border border-[#341F17]">
          <button
            onClick={() => setFilter('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
              filter === 'all'
                ? 'bg-[#D4AF37] text-[#160B08]'
                : 'text-[#A89487] hover:text-[#EFE7DE]'
            }`}
          >
            All Evidence ({evidenceList.length})
          </button>
          <button
            onClick={() => setFilter('authentic')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
              filter === 'authentic'
                ? 'bg-[#15803D] text-white'
                : 'text-[#A89487] hover:text-[#EFE7DE]'
            }`}
          >
            Authentic Wild
          </button>
          <button
            onClick={() => setFilter('suspect')}
            className={`px-2.5 py-1 rounded-lg text-xs font-semibold transition-colors ${
              filter === 'suspect'
                ? 'bg-[#991B1B] text-white'
                : 'text-[#A89487] hover:text-[#EFE7DE]'
            }`}
          >
            Suspect / Synthetic
          </button>
        </div>
      </div>

      {/* Suspicious Contaminants Banner if any */}
      {suspiciousMaterials.length > 0 && (
        <div className="p-3.5 rounded-xl bg-[#29100D] border border-[#991B1B] flex items-start gap-3 text-xs">
          <ShieldAlert className="w-4 h-4 text-[#EF4444] mt-0.5 flex-shrink-0" />
          <div>
            <span className="font-bold text-[#FCA5A5] block">
              Contraband & Non-Botanical Artefacts Detected:
            </span>
            <p className="text-[#FBCFE8] mt-0.5">
              {suspiciousMaterials.join(' • ')}
            </p>
          </div>
        </div>
      )}

      {/* Table Container */}
      <div className="overflow-x-auto rounded-xl border border-[#341F17] bg-[#140C0A]">
        <table className="w-full text-left text-xs border-collapse">
          <thead>
            <tr className="bg-[#20130F] border-b border-[#3E2519] text-[#A89487] uppercase text-[10px] tracking-wider font-mono">
              <th className="py-3 px-4">Flower / Material</th>
              <th className="py-3 px-4">Botanical / English Name</th>
              <th className="py-3 px-4">Visual Type & Origin</th>
              <th className="py-3 px-4">Forensic Assessment</th>
              <th className="py-3 px-4 text-right">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#261611]">
            {filteredItems.map((item) => (
              <tr key={item.id} className="hover:bg-[#1D110D] transition-colors">
                {/* Malayalam Name with Color Swatch */}
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-2.5">
                    <span
                      className="w-3.5 h-3.5 rounded-full border border-white/30 flex-shrink-0 shadow-sm"
                      style={{ backgroundColor: item.colorHex }}
                    />
                    <div>
                      <span className="font-bold text-[#FDF8EE] text-xs block font-malayalam">
                        {item.malayalamName}
                      </span>
                      {item.estimatedQuantityGrams && (
                        <span className="text-[10px] text-[#78665B] font-mono">
                          ~{item.estimatedQuantityGrams}g estimated
                        </span>
                      )}
                    </div>
                  </div>
                </td>

                {/* English Name */}
                <td className="py-3.5 px-4 font-medium text-[#E2D4CB]">
                  {item.englishName}
                </td>

                {/* Visual Type */}
                <td className="py-3.5 px-4">
                  <span className="text-[#D4AF37] font-semibold block">
                    {item.visualType}
                  </span>
                  <span className="text-[10px] text-[#86756C] font-mono">
                    {item.confidence}% vision confidence
                  </span>
                </td>

                {/* Verdict Note */}
                <td className="py-3.5 px-4 text-[#D8CCC4] max-w-xs leading-relaxed">
                  {item.verdictNote}
                </td>

                {/* Status Badge */}
                <td className="py-3.5 px-4 text-right whitespace-nowrap">
                  {getStatusBadge(item.status)}
                </td>
              </tr>
            ))}
            {filteredItems.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-[#78665B]">
                  No floral evidence matches the selected filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
