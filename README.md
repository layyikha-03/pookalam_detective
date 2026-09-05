# 🌸 Pookalam Detective: Floral Forensic Inspector

[![Kerala State Approved](https://img.shields.io/badge/Ammavan%20Rating-Certified%20Ruthless-crimson.svg)](#ammavan-lore--scoring-matrix)
[![Hackathon](https://img.shields.io/badge/Hackathon-Useless%20Projects%202026-gold.svg)](#about-the-project)
[![AI Engine](https://img.shields.io/badge/Vision%20AI-Gemini%203.8%20Flash-green.svg)](#vision-ai-architecture)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> *"Subjecting your Onam floral carpets to ruthless traditional scrutiny with AI-powered floral forensics and uncompromising elder drama ratings."*

---

## 🧐 What is Pookalam Detective?

During the 10 days of Onam (from Atham to Thiruvonam), millions of households across Kerala construct **Pookalams** (floral carpets). However, modern shortcuts have infiltrated this sacred art form:
* ⚠️ Buying 40kg sacks of truckload yellow Marigolds from Coimbatore instead of waking up at 4:30 AM.
* 🚨 Sneaking in fluorescent synthetic colored sawdust and craft-store glitter.
* 😱 Complete disappearance of the sacred **Thumba (Ceylon Slitwort)** white central core ring!

**Pookalam Detective** is a full-stack, multimodal forensic inspection web application created for the *Useless Hackathon*. It uses computer vision (powered by **Google Gemini 3.8 Flash Vision**) to scan any uploaded Pookalam photo, isolate individual flower varieties with their authentic Malayalam names, calculate spectral color distribution, and deliver a dramatic **"Ammavan Approval Rating"** penned in the persona of an overly strict Keralite elder.

---

## ✨ Core Features

1. **Floral Evidence Registry**:
   - Detects wild vs. commercial botanical species:
     - **തുമ്പപ്പൂ (Thumba / Ceylon Slitwort)** - The sacred centerpiece.
     - **മുക്കുറ്റി (Mukkutti / Little Tree Plant)** - Traditional Dashapushpam herb.
     - **ചെത്തിപ്പൂ (Chettipoo / Marigold)** - Evaluated for Tamil Nadu wholesale excess.
     - **ചെമ്പരത്തി (Chembarathi / Hibiscus)** - Shredded crimson petal rings.
     - **തുളസി (Tulsi / Holy Basil)** - Sacred emerald concentric dividers.
     - **വാടാമല്ലി (Vadamalli / Globe Amaranth)** - Traditional purple accent points.
2. **Spectral Color Coverage Chart**:
   - Optical breakdown of dominant petal wavelengths across concentric radii (Thumba White, Kasavu Gold, Crimson Red, Leaf Green, etc.).
3. **The Ammavan Approval Rating (0 to 100%)**:
   - Algorithmic evaluation of traditional authenticity vs. lazy modern shortcuts.
4. **Dramatic Ammavan Review & Verdict**:
   - 2-sentence hilarious monologue written in the persona of a Thrissur Tharavadu elder.
   - 3-5 word official verdict stamped in ALL CAPS (e.g., `AUTHENTIC HERITAGE BEAUTY` or `ABSOLUTE CULTURAL SCANDAL`).
5. **Florist Extortion Estimator**:
   - Calculates the fake market cost estimate in Indian Rupees (₹) with middleman surge markups.
6. **Zero-Config Presentation Safety (Demo Mode)**:
   - Includes 3 pre-calibrated iconic presets (*The Tharavadu Heritage Atham*, *The Interstate Wholesale Overdose*, and *The Infopark Rangoli Crime*) that run immediately without uploading files or supplying an API key!

---

## 📜 Ammavan Lore & Scoring Matrix

| Approval Score | Tier Title | Elder Reaction | Consequence |
|---|---|---|---|
| **75% – 100%** | **Vaidika Gold (Legendary)** | Gentle nod, mist in eyes | Extra ladle of Ada Pradhaman payasam guaranteed |
| **45% – 74%** | **Kudumba Sneham / Instagram Compromise** | Heavy sigh, arms folded | *"In 1978 our pookalam covered the entire front yard"* |
| **0% – 44%** | **Coimbatore Plastic Disaster** | Blood pressure reaches 190 | Disowned from the family WhatsApp group for 1 year |

### Statutory Ammavan Penalties & Bounties
- **-50 Pts**: Detected colored sawdust, rangoli powder, or polyester fabric petals.
- **-25 Pts**: Missing the pristine white Thumba ring in the geometric center.
- **-15 Pts**: Severe Coimbatore Marigold overload (>60% surface area).
- **-10 Pts**: Visible concentric radial asymmetry (hand tremors detected).
- **+20 Pts**: Sacred wild Dashapushpam herbs harvested with morning dew.

---

## 🛠️ Tech Stack & Architecture

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Motion animations, Lucide icons.
- **Backend API**: Express.js server with `/api/analyze`, `/api/demo`, and `/api/health`.
- **Vision Engine**: `@google/genai` TypeScript SDK utilizing `gemini-3.8-flash`.
- **Design System**: Kerala Kasavu aesthetic (Kasavu Gold `#D4AF37`, Deep Crimson `#991B1B`, Marigold Yellow `#F59E0B`, Leaf Green `#15803D`).

---

## 🚀 Quick Start (Local Execution)

### Prerequisites
- Node.js 18+
- npm or yarn

### 1. Clone & Install
```bash
git clone https://github.com/example/pookalam-detective.git
cd pookalam-detective
npm install
```

### 2. Configure Environment (Optional)
The application works immediately in **Demo Mode** or with calibrated offline fallbacks without any API key. To enable live Gemini AI vision analysis:
```bash
cp .env.example .env
# Add your Gemini API Key:
# GEMINI_API_KEY="your-gemini-api-key"
```

### 3. Run Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:3000`.

### 4. Build for Production
```bash
npm run build
npm start
```

---

## 📸 API Documentation

### `POST /api/analyze`
Inspects an uploaded Pookalam image.

**Request Body:**
```json
{
  "imageBase64": "data:image/jpeg;base64,...",
  "mimeType": "image/jpeg",
  "customApiKey": "optional-override-key"
}
```

**Response (JSON):**
```json
{
  "success": true,
  "data": {
    "caseNumber": "KL-CPFD-2026-4921",
    "ammavanScore": 94,
    "ammavanVerdict": "AUTHENTIC HERITAGE BEAUTY",
    "ammavanDramaReview": "Praise be to Mahabali, someone finally woke up before 5 AM to gather sacred Thumba instead of sleeping till noon like modern engineering college graduates!",
    "ammavanPersona": {
      "name": "Keshavan Namboothiri",
      "village": "Irinjalakuda, Thrissur",
      "reactionEmoji": "🪔"
    },
    "floristExtortionEstimate": {
      "totalRupees": 450,
      "markupPercentage": 12,
      "breakdownNote": "Gathered from backyard weeds; minimal florist cartel markup.",
      "syndicateLevel": "Fair Local"
    },
    "symmetryScore": 96,
    "radialRingsDetected": 8,
    "thumbaWhiteRingDetected": true,
    "floralEvidence": [ ... ],
    "spectralBreakdown": [ ... ]
  }
}
```

---

## 🏆 Hackathon Disclaimer
*Pookalam Detective* is built as a light-hearted, affectionate tribute to Onam traditions and the time-honored banter of Kerala family gatherings. No real Ammavans were harmed in the training of this neural network.
