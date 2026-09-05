import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI, Type } from "@google/genai";
import dotenv from "dotenv";
import {
  MOCK_ANALYSIS_TRADITIONAL,
  MOCK_ANALYSIS_COMMERCIAL,
  MOCK_ANALYSIS_SYNTHETIC
} from "./src/data/mockData.ts";
import { ForensicAnalysis } from "./src/types.ts";

dotenv.config();

const app = express();
const PORT = 3000;

// Support base64 image uploads up to 30mb
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));

// Helper to instantiate Gemini client lazily
function getGeminiClient(customKey?: string): GoogleGenAI | null {
  const key = customKey?.trim() || process.env.GEMINI_API_KEY;
  if (!key) return null;
  return new GoogleGenAI({
    apiKey: key,
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

// Health check endpoint
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    app: "Pookalam Detective",
    geminiKeyConfigured: Boolean(process.env.GEMINI_API_KEY),
    timestamp: new Date().toISOString(),
  });
});

// Demo endpoint for instant zero-config presentation
app.get("/api/demo/:presetId?", (req, res) => {
  const presetId = req.params.presetId || "traditional";
  let analysis: ForensicAnalysis;
  if (presetId.includes("comm")) {
    analysis = { ...MOCK_ANALYSIS_COMMERCIAL, timestamp: new Date().toISOString() };
  } else if (presetId.includes("synth")) {
    analysis = { ...MOCK_ANALYSIS_SYNTHETIC, timestamp: new Date().toISOString() };
  } else {
    analysis = { ...MOCK_ANALYSIS_TRADITIONAL, timestamp: new Date().toISOString() };
  }
  res.json({ success: true, data: analysis, mode: "demo" });
});

// Forensic analysis endpoint
app.post("/api/analyze", async (req, res) => {
  try {
    const { imageBase64, customApiKey, mimeType = "image/jpeg" } = req.body;

    if (!imageBase64) {
      return res.status(400).json({
        success: false,
        error: "Missing imageBase64 data in payload.",
      });
    }

    // Clean base64 string if it contains data URI prefix
    const cleanBase64 = imageBase64.includes(";base64,")
      ? imageBase64.split(";base64,")[1]
      : imageBase64;

    const ai = getGeminiClient(customApiKey);

    // If no API key is available, fallback gracefully to realistic mock data
    if (!ai) {
      console.log("[Pookalam Detective] No API key detected. Returning calibrated fallback mock data.");
      // Dynamically create a varied report
      const fallbackReport: ForensicAnalysis = {
        ...MOCK_ANALYSIS_TRADITIONAL,
        id: `case-${Date.now()}`,
        caseNumber: `KL-CPFD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
        timestamp: new Date().toISOString(),
        imageUrl: imageBase64.startsWith("data:") ? imageBase64 : `data:${mimeType};base64,${cleanBase64}`,
        isMock: true,
        investigatorNotes: "Forensic analysis generated via Calibrated Offline Inspector (No active Gemini API key configured in environment). Ready for live API inspection whenever key is provided!",
      };
      return res.json({ success: true, data: fallbackReport, mode: "fallback_no_key" });
    }

    // Prepare Multimodal Prompt for Gemini 3.8 Flash
    const forensicPrompt = `
You are the Chief Floral Forensic Inspector of the Kerala Pookalam Forensic Department (CPFD).
Analyze this uploaded Onam Pookalam (floral carpet) image with rigorous, hilarious traditional scrutiny.

Evaluate:
1. Floral Evidence: Detect specific flowers and foliage. Identify them by BOTH their traditional Malayalam name and English name (e.g., തുമ്പപ്പൂ / Thumba / Ceylon Slitwort, ചെത്തിപ്പൂ / Chettipoo / Marigold, മുക്കുറ്റി / Mukkutti, ചെമ്പരത്തി / Chembarathi / Hibiscus, അരളി / Arali / Oleander, തുളസി / Tulsi / Basil, റോസാപ്പൂ / Rose petals, വാടാമല്ലി / Vadamalli, പച്ചയില / Green foliage).
   Identify status: 'authentic' (traditional wild/garden harvest), 'acceptable' (standard florist commercial), 'suspect' (wilted/chemical dye/sawdust), or 'synthetic' (plastic/polyester/paper).
2. Spectral Color Breakdown: Estimate percentages of visible colors (must sum approximately to 100%).
3. The "Ammavan Approval Rating" (0 to 100): An uncompromising traditional score.
   - 80-100: Pristine authentic Thumba center, concentric geometry, fresh garden herbs, minimal Coimbatore commercial overload.
   - 50-79: Commercial marigold dominance, slight asymmetry, modern geometric shortcuts.
   - 0-49: Non-traditional colors (electric cyan, neon pink), synthetic materials, sawdust, plastic petals, or corporate logo pookalams.
4. Ammavan Verdict: 3 to 5 words in ALL CAPS (e.g. "AUTHENTIC HERITAGE BEAUTY", "COMMERCIAL COIMBATORE FRAUD", "ABSOLUTE CULTURAL SCANDAL", "ACCEPTABLE BUT GRANDMOTHER SIGHING").
5. Ammavan Drama Review: Exactly 2 dramatic, funny sentences written in the persona of an overly strict Keralite elder judging this pookalam.
6. Florist Extortion Estimator: Estimated market cost in INR (₹) and markup percentage, plus a witty syndicate note about Chalai/Palakkad flower cartels.
7. Symmetry score (0-100), detected radial concentric ring count, and boolean whether a sacred white Thumba core ring exists.
8. Authenticity tier: Choose strictly one: 'Vaidika Gold (Legendary)', 'Kudumba Sneham (Traditional)', 'Instagram Compromise (Mild Scandal)', or 'Coimbatore Plastic Disaster (Outrageous)'.
`;

    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: {
        parts: [
          {
            inlineData: {
              mimeType: mimeType || "image/jpeg",
              data: cleanBase64,
            },
          },
          {
            text: forensicPrompt,
          },
        ],
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            ammavanScore: { type: Type.INTEGER, description: "Score from 0 to 100" },
            ammavanVerdict: { type: Type.STRING, description: "3-5 words in ALL CAPS" },
            ammavanDramaReview: { type: Type.STRING, description: "2 hilarious dramatic sentences as strict elder" },
            ammavanPersona: {
              type: Type.OBJECT,
              properties: {
                name: { type: Type.STRING },
                village: { type: Type.STRING },
                reactionEmoji: { type: Type.STRING },
              },
              required: ["name", "village", "reactionEmoji"],
            },
            floristExtortionEstimate: {
              type: Type.OBJECT,
              properties: {
                totalRupees: { type: Type.INTEGER },
                markupPercentage: { type: Type.INTEGER },
                breakdownNote: { type: Type.STRING },
                syndicateLevel: {
                  type: Type.STRING,
                  enum: [
                    "Fair Local",
                    "Severe Festive Surge",
                    "Chalai Market Extortion",
                    "Panchayat Highway Robbery",
                  ],
                },
              },
              required: ["totalRupees", "markupPercentage", "breakdownNote", "syndicateLevel"],
            },
            symmetryScore: { type: Type.INTEGER },
            radialRingsDetected: { type: Type.INTEGER },
            thumbaWhiteRingDetected: { type: Type.BOOLEAN },
            suspiciousMaterialsFound: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
            },
            authenticityTier: {
              type: Type.STRING,
              enum: [
                "Vaidika Gold (Legendary)",
                "Kudumba Sneham (Traditional)",
                "Instagram Compromise (Mild Scandal)",
                "Coimbatore Plastic Disaster (Outrageous)",
              ],
            },
            floralEvidence: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  id: { type: Type.STRING },
                  malayalamName: { type: Type.STRING },
                  englishName: { type: Type.STRING },
                  visualType: { type: Type.STRING },
                  confidence: { type: Type.INTEGER },
                  verdictNote: { type: Type.STRING },
                  colorHex: { type: Type.STRING },
                  status: {
                    type: Type.STRING,
                    enum: ["authentic", "acceptable", "suspect", "synthetic"],
                  },
                  estimatedQuantityGrams: { type: Type.INTEGER },
                },
                required: [
                  "id",
                  "malayalamName",
                  "englishName",
                  "visualType",
                  "confidence",
                  "verdictNote",
                  "colorHex",
                  "status",
                ],
              },
            },
            spectralBreakdown: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  hex: { type: Type.STRING },
                  percentage: { type: Type.INTEGER },
                },
                required: ["name", "hex", "percentage"],
              },
            },
            investigatorNotes: { type: Type.STRING },
          },
          required: [
            "ammavanScore",
            "ammavanVerdict",
            "ammavanDramaReview",
            "ammavanPersona",
            "floristExtortionEstimate",
            "symmetryScore",
            "radialRingsDetected",
            "thumbaWhiteRingDetected",
            "suspiciousMaterialsFound",
            "authenticityTier",
            "floralEvidence",
            "spectralBreakdown",
          ],
        },
      },
    });

    const parsed = JSON.parse(response.text || "{}");
    const result: ForensicAnalysis = {
      ...parsed,
      id: `case-${Date.now()}`,
      caseNumber: `KL-CPFD-2026-${Math.floor(1000 + Math.random() * 9000)}`,
      timestamp: new Date().toISOString(),
      imageUrl: imageBase64.startsWith("data:") ? imageBase64 : `data:${mimeType};base64,${cleanBase64}`,
      isMock: false,
    };

    return res.json({ success: true, data: result, mode: "live_ai" });
  } catch (error: any) {
    console.error("[Pookalam Detective] AI Analysis error:", error);
    // Graceful fallback so presentation never breaks
    const fallbackReport: ForensicAnalysis = {
      ...MOCK_ANALYSIS_COMMERCIAL,
      id: `case-err-${Date.now()}`,
      caseNumber: `KL-CPFD-FALLBACK-${Math.floor(100 + Math.random() * 900)}`,
      timestamp: new Date().toISOString(),
      imageUrl: req.body?.imageBase64 || MOCK_ANALYSIS_COMMERCIAL.imageUrl,
      isMock: true,
      investigatorNotes: `Live AI inspection fallback triggered (${error.message || "Quota/Service exception"}). Calibrated forensic baseline applied.`,
    };
    return res.json({
      success: true,
      data: fallbackReport,
      mode: "fallback_error",
      warning: error.message || "AI vision service encountered a temporary error, fallback applied.",
    });
  }
});

// Start server with Vite middleware in dev or static in prod
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Pookalam Detective] Forensic Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
