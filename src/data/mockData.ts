import { ForensicAnalysis, SamplePookalamPreset } from '../types';

// High-quality SVG and reliable image representations for sample Pookalams
export const SAMPLE_POOKALAM_IMAGES = {
  traditional: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=1000&q=80",
  commercial: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80",
  synthetic: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?auto=format&fit=crop&w=1000&q=80",
};

export const MOCK_ANALYSIS_TRADITIONAL: ForensicAnalysis = {
  id: "case-kl-8841-trad",
  caseNumber: "KL-CPFD-2026-0901",
  timestamp: new Date().toISOString(),
  ammavanScore: 94,
  ammavanVerdict: "AUTHENTIC HERITAGE BEAUTY",
  ammavanDramaReview: "Praise be to Mahabali, someone finally woke up before 5 AM to gather sacred Thumba instead of sleeping till noon like modern engineering college graduates! The pristine white central concentric ring is so pure it brought an involuntary tear to my right eye.",
  ammavanPersona: {
    name: "Keshavan Namboothiri",
    village: "Irinjalakuda, Thrissur",
    reactionEmoji: "🪔"
  },
  floristExtortionEstimate: {
    totalRupees: 450,
    markupPercentage: 12,
    breakdownNote: "90% gathered from parambu (backyard) weeds; minimal Coimbatore cartel dependency.",
    syndicateLevel: "Fair Local"
  },
  symmetryScore: 96,
  radialRingsDetected: 8,
  thumbaWhiteRingDetected: true,
  suspiciousMaterialsFound: [],
  authenticityTier: "Vaidika Gold (Legendary)",
  floralEvidence: [
    {
      id: "fl-1",
      malayalamName: "തുമ്പപ്പൂ (Thumba)",
      englishName: "Ceylon Slitwort (Leucas aspera)",
      visualType: "Sacred Wild Flower",
      confidence: 99,
      verdictNote: "Flawless white concentric core ring. Zero pesticide residue detected.",
      colorHex: "#FFFFFF",
      status: "authentic",
      estimatedQuantityGrams: 120
    },
    {
      id: "fl-2",
      malayalamName: "മുക്കുറ്റി (Mukkutti)",
      englishName: "Little Tree Plant (Biophytum sensitivum)",
      visualType: "Sacred Dashapushpam Herb",
      confidence: 96,
      verdictNote: "Authentic wild harvest from compound boundary. High cultural purity.",
      colorHex: "#FACC15",
      status: "authentic",
      estimatedQuantityGrams: 85
    },
    {
      id: "fl-3",
      malayalamName: "ചെമ്പരത്തി (Chembarathi)",
      englishName: "Red Hibiscus Petals",
      visualType: "Garden Harvest",
      confidence: 94,
      verdictNote: "Hand-shredded crimson petals outlining second radial corridor.",
      colorHex: "#DC2626",
      status: "authentic",
      estimatedQuantityGrams: 240
    },
    {
      id: "fl-4",
      malayalamName: "തുളസിയില (Tulsi Leaves)",
      englishName: "Holy Basil Leaves",
      visualType: "Sacred Aromatic Foliage",
      confidence: 97,
      verdictNote: "Deep emerald ring separation. Aromatic aura verified by visual texture.",
      colorHex: "#15803D",
      status: "authentic",
      estimatedQuantityGrams: 150
    },
    {
      id: "fl-5",
      malayalamName: "മുല്ലപ്പൂ (Mullappoo)",
      englishName: "Wild Jasmine Buds",
      visualType: "Fresh Garden Bud",
      confidence: 92,
      verdictNote: "Outer ring accent studs. Crisp morning dew moisture level.",
      colorHex: "#F8FAFC",
      status: "authentic",
      estimatedQuantityGrams: 110
    }
  ],
  spectralBreakdown: [
    { name: "Thumba White", hex: "#FFFFFF", percentage: 32 },
    { name: "Kasavu Gold", hex: "#F3C048", percentage: 24 },
    { name: "Crimson Red", hex: "#DC2626", percentage: 22 },
    { name: "Leaf Green", hex: "#15803D", percentage: 14 },
    { name: "Deep Coral", hex: "#E11D48", percentage: 8 }
  ],
  imageUrl: SAMPLE_POOKALAM_IMAGES.traditional,
  isMock: true,
  investigatorNotes: "Forensic laboratory tests confirm 0% chemical dyes. High Thumba concentration grants immediate exemption from elder reprimand."
};

export const MOCK_ANALYSIS_COMMERCIAL: ForensicAnalysis = {
  id: "case-kl-6721-comm",
  caseNumber: "KL-CPFD-2026-0419",
  timestamp: new Date().toISOString(),
  ammavanScore: 56,
  ammavanVerdict: "COMMERCIAL COIMBATORE FRAUD",
  ammavanDramaReview: "Who permitted this 40-kilogram mountain of truck-imported Marigolds to masquerade as an Onam pookalam? Not a single leaf of Mukkutti or Thumba to be seen anywhere—this is purely a Coimbatore wholesale market export invoice laid out on marble tile!",
  ammavanPersona: {
    name: "Radhakrishnan Pillai",
    village: "Karunagappally, Kollam",
    reactionEmoji: "🧐"
  },
  floristExtortionEstimate: {
    totalRupees: 3850,
    markupPercentage: 340,
    breakdownNote: "Gouged ruthlessly by middleman near Palakkad border; 4x mark-up on yellow chettipoo.",
    syndicateLevel: "Chalai Market Extortion"
  },
  symmetryScore: 78,
  radialRingsDetected: 5,
  thumbaWhiteRingDetected: false,
  suspiciousMaterialsFound: ["Heavy chemical preservative dust", "Preservative-soaked orange marigold petals"],
  authenticityTier: "Instagram Compromise (Mild Scandal)",
  floralEvidence: [
    {
      id: "fl-c1",
      malayalamName: "ചെട്ടിപ്പൂ മഞ്ഞ (Yellow Chettipoo)",
      englishName: "Commercial African Marigold",
      visualType: "Bulk Tamil Nadu Truck Import",
      confidence: 99,
      verdictNote: "Massive dominance over entire perimeter. Purchased in 10kg gunny sack.",
      colorHex: "#EAB308",
      status: "acceptable",
      estimatedQuantityGrams: 2800
    },
    {
      id: "fl-c2",
      malayalamName: "ചെട്ടിപ്പൂ ഓറഞ്ച് (Orange Chettipoo)",
      englishName: "Commercial Orange Marigold",
      visualType: "Bulk Commercial Wholesale",
      confidence: 98,
      verdictNote: "Heavy chemical orange hue; zero natural wild fragrance.",
      colorHex: "#F97316",
      status: "acceptable",
      estimatedQuantityGrams: 2100
    },
    {
      id: "fl-c3",
      malayalamName: "പനിനീർ റോസ് (Rose Petals)",
      englishName: "Commercial Dutch Rose Shreds",
      visualType: "Cold-Storage Florist Petals",
      confidence: 91,
      verdictNote: "Wilted edges suggesting 3 days in florist display freezer.",
      colorHex: "#BE123C",
      status: "acceptable",
      estimatedQuantityGrams: 650
    },
    {
      id: "fl-c4",
      malayalamName: "വാടാമല്ലി (Vadamalli)",
      englishName: "Globe Amaranth (Gomphrena globosa)",
      visualType: "Wholesale Purple Studs",
      confidence: 88,
      verdictNote: "Used hastily to fill gaps where symmetry failed.",
      colorHex: "#A21CAF",
      status: "acceptable",
      estimatedQuantityGrams: 420
    }
  ],
  spectralBreakdown: [
    { name: "Marigold Yellow", hex: "#EAB308", percentage: 46 },
    { name: "Wholesale Orange", hex: "#F97316", percentage: 33 },
    { name: "Cold-Storage Rose", hex: "#BE123C", percentage: 14 },
    { name: "Purple Vadamalli", hex: "#A21CAF", percentage: 7 }
  ],
  imageUrl: SAMPLE_POOKALAM_IMAGES.commercial,
  isMock: true,
  investigatorNotes: "Severe lack of wild indigenous flora. Budget heavily squandered on interstate florist cartels."
};

export const MOCK_ANALYSIS_SYNTHETIC: ForensicAnalysis = {
  id: "case-kl-1092-synth",
  caseNumber: "KL-CPFD-2026-0033",
  timestamp: new Date().toISOString(),
  ammavanScore: 19,
  ammavanVerdict: "ABSOLUTE CULTURAL SCANDAL",
  ammavanDramaReview: "May my ancestors look away! What in the name of God's Own Country is this fluorescent rangoli-sawdust abomination with plastic glitter? My blood pressure spiked to 190 just looking at this artificial corporate cafeteria mockery!",
  ammavanPersona: {
    name: "Gopala Menon",
    village: "Chittur, Palakkad",
    reactionEmoji: "🤦‍♂️"
  },
  floristExtortionEstimate: {
    totalRupees: 7200,
    markupPercentage: 650,
    breakdownNote: "Purchased from craft store and Amazon Prime; zero benefit passed to local farmers.",
    syndicateLevel: "Panchayat Highway Robbery"
  },
  symmetryScore: 38,
  radialRingsDetected: 3,
  thumbaWhiteRingDetected: false,
  suspiciousMaterialsFound: [
    "Industrial synthetic colored sawdust",
    "Polyester fabric flower border petals",
    "Micro-plastic glitter contaminants",
    "Pre-cut laser stencil stencil marks"
  ],
  authenticityTier: "Coimbatore Plastic Disaster (Outrageous)",
  floralEvidence: [
    {
      id: "fl-s1",
      malayalamName: "നിരോധിത പ്ലാസ്റ്റിക് ഇതളുകൾ",
      englishName: "Suspect Polyester Petals",
      visualType: "Synthetic Fabric Craft Debris",
      confidence: 97,
      verdictNote: "Does not decay. Highly offensive to grandfather's spiritual peace.",
      colorHex: "#EC4899",
      status: "synthetic",
      estimatedQuantityGrams: 800
    },
    {
      id: "fl-s2",
      malayalamName: "നിറം ചേർത്ത മരപ്പൊടി (Sawdust)",
      englishName: "Chemical-Dye Colored Sawdust",
      visualType: "Industrial Rangoli Filler",
      confidence: 95,
      verdictNote: "Bleeds toxic dye upon morning mist contact. Cultural misdemeanor.",
      colorHex: "#06B6D4",
      status: "suspect",
      estimatedQuantityGrams: 1600
    },
    {
      id: "fl-s3",
      malayalamName: "വാടിയ ബാക്കി റോസ് (Stale Rose)",
      englishName: "Floor-Sweep Florist Waste",
      visualType: "Discarded Bruised Petals",
      confidence: 84,
      verdictNote: "Asymmetric scattering done 5 minutes before the competition judges arrived.",
      colorHex: "#991B1B",
      status: "suspect",
      estimatedQuantityGrams: 300
    }
  ],
  spectralBreakdown: [
    { name: "Synthetic Cyan Dye", hex: "#06B6D4", percentage: 38 },
    { name: "Neon Polyester Pink", hex: "#EC4899", percentage: 34 },
    { name: "Bruised Rose Waste", hex: "#991B1B", percentage: 18 },
    { name: "Unidentified Floor Dust", hex: "#71717A", percentage: 10 }
  ],
  imageUrl: SAMPLE_POOKALAM_IMAGES.synthetic,
  isMock: true,
  investigatorNotes: "Urgent summons issued. Recommend forfeiture of Onasadhya payasam privileges for 3 consecutive years."
};

export const SAMPLE_PRESETS: SamplePookalamPreset[] = [
  {
    id: "preset-traditional",
    title: "The Tharavadu Heritage Atham",
    tagline: "Sacred Thumba white center with morning dew Mukkutti",
    previewUrl: SAMPLE_POOKALAM_IMAGES.traditional,
    badge: "Traditional Gold",
    expectedTier: "Vaidika Gold (94%)",
    data: MOCK_ANALYSIS_TRADITIONAL
  },
  {
    id: "preset-commercial",
    title: "The Interstate Wholesale Overdose",
    tagline: "40kg Tamil Nadu Marigold truckload without Thumba",
    previewUrl: SAMPLE_POOKALAM_IMAGES.commercial,
    badge: "Commercial Surge",
    expectedTier: "Instagram Compromise (56%)",
    data: MOCK_ANALYSIS_COMMERCIAL
  },
  {
    id: "preset-synthetic",
    title: "The Infopark Rangoli Crime",
    tagline: "Colored sawdust and polyester petals from Amazon",
    previewUrl: SAMPLE_POOKALAM_IMAGES.synthetic,
    badge: "Criminal Offense",
    expectedTier: "Plastic Disaster (19%)",
    data: MOCK_ANALYSIS_SYNTHETIC
  }
];
