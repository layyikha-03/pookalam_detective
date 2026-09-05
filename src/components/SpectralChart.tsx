import React, { useState } from 'react';
import { Palette, PieChart } from 'lucide-react';
import { SpectralColor } from '../types';

interface SpectralChartProps {
  spectralBreakdown: SpectralColor[];
}

export const SpectralChart: React.FC<SpectralChartProps> = ({ spectralBreakdown }) => {
  const [hoveredColor, setHoveredColor] = useState<SpectralColor | null>(null);

  // Normalize percentages to guarantee neat 100% distribution visually
  const totalPercent = spectralBreakdown.reduce((acc, c) => acc + c.percentage, 0) || 100;

  return (
    <div className="rounded-2xl bg-[#180F0D] border border-[#3E2519] p-5 sm:p-6 shadow-xl">
      {/* Header */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#2D1A14] border border-[#D4AF37]/40 flex items-center justify-center text-[#F3C048]">
            <Palette className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm sm:text-base font-bold text-[#FDF8EE] font-display">
              Spectral Color Coverage Analysis
            </h3>
            <p className="text-[11px] text-[#A89487]">
              Optical breakdown of dominant petal wavelengths across the floral carpet
            </p>
          </div>
        </div>

        {hoveredColor && (
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-lg bg-[#251511] border border-[#D4AF37]/50 text-xs">
            <span
              className="w-3 h-3 rounded-full border border-white/40"
              style={{ backgroundColor: hoveredColor.hex }}
            />
            <span className="font-semibold text-[#F3C048]">{hoveredColor.name}</span>
            <span className="text-[#A89487]">({hoveredColor.percentage}%)</span>
          </div>
        )}
      </div>

      {/* Segmented Cumulative Color Strip */}
      <div className="relative mb-6">
        <div className="w-full h-6 rounded-xl overflow-hidden flex border border-[#44281C] shadow-inner bg-black">
          {spectralBreakdown.map((color, index) => {
            const widthPct = (color.percentage / totalPercent) * 100;
            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredColor(color)}
                onMouseLeave={() => setHoveredColor(null)}
                className="h-full relative group transition-all hover:opacity-90 cursor-pointer"
                style={{
                  width: `${widthPct}%`,
                  backgroundColor: color.hex,
                }}
                title={`${color.name}: ${color.percentage}%`}
              />
            );
          })}
        </div>
        <div className="flex justify-between text-[10px] text-[#7A675D] font-mono mt-1 px-1">
          <span>0% Floral Core</span>
          <span>50% Intermediate Ring</span>
          <span>100% Outer Perimeter</span>
        </div>
      </div>

      {/* Individual Color Spectrum Progress Bars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {spectralBreakdown.map((color, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setHoveredColor(color)}
            onMouseLeave={() => setHoveredColor(null)}
            className="p-3 rounded-xl bg-[#20130F] border border-[#341F17] hover:border-[#D4AF37]/40 transition-colors"
          >
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <span
                  className="w-3.5 h-3.5 rounded-full shadow-sm border border-white/30 flex-shrink-0"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="text-xs font-semibold text-[#EFE7DE]">{color.name}</span>
              </div>
              <span className="text-xs font-bold text-[#F3C048] font-mono">
                {color.percentage}%
              </span>
            </div>

            {/* Individual bar */}
            <div className="w-full bg-[#130B09] rounded-full h-1.5 overflow-hidden border border-[#2D1B14]">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${color.percentage}%`,
                  backgroundColor: color.hex,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
