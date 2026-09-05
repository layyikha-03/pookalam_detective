export type MaterialStatus = 'authentic' | 'acceptable' | 'suspect' | 'synthetic';

export interface FloralEvidence {
  id: string;
  malayalamName: string;
  englishName: string;
  visualType: string;
  confidence: number;
  verdictNote: string;
  colorHex: string;
  status: MaterialStatus;
  estimatedQuantityGrams?: number;
}

export interface SpectralColor {
  name: string;
  hex: string;
  percentage: number;
}

export interface FloristExtortionEstimate {
  totalRupees: number;
  markupPercentage: number;
  breakdownNote: string;
  syndicateLevel: 'Fair Local' | 'Severe Festive Surge' | 'Chalai Market Extortion' | 'Panchayat Highway Robbery';
}

export interface ForensicAnalysis {
  id: string;
  caseNumber: string;
  timestamp: string;
  ammavanScore: number; // 0 - 100
  ammavanVerdict: string; // 3-5 words ALL CAPS
  ammavanDramaReview: string; // 2-sentence hilarious dramatic quote
  ammavanPersona: {
    name: string;
    village: string;
    reactionEmoji: string;
  };
  floristExtortionEstimate: FloristExtortionEstimate;
  symmetryScore: number;
  radialRingsDetected: number;
  thumbaWhiteRingDetected: boolean;
  suspiciousMaterialsFound: string[];
  authenticityTier: 'Vaidika Gold (Legendary)' | 'Kudumba Sneham (Traditional)' | 'Instagram Compromise (Mild Scandal)' | 'Coimbatore Plastic Disaster (Outrageous)';
  floralEvidence: FloralEvidence[];
  spectralBreakdown: SpectralColor[];
  imageUrl: string;
  isMock?: boolean;
  investigatorNotes?: string;
}

export interface SamplePookalamPreset {
  id: string;
  title: string;
  tagline: string;
  previewUrl: string;
  badge: string;
  expectedTier: string;
  data: ForensicAnalysis;
}
