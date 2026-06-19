# 🌿 Orbit9Media — Full Stack Kerala News Website

Kerala's independent, bilingual (English + Malayalam) news portal.  
Built with **Node.js + Express** backend and a fully dynamic frontend.

---

## 📁 Project Structure

```
orbit9media/
├── server.js          ← Express backend (API + static server)
├── package.json       ← Dependencies
├── data/
│   └── news.js        ← All bilingual article data (EN + ML)
└── public/
    └── index.html     ← Bilingual frontend (fetches from API)
```

---

## 🚀 How to Run Locally

### Step 1 — Install Node.js
Download from https://nodejs.org (choose LTS version)

### Step 2 — Install dependencies
```bash
cd orbit9media
npm install
```

### Step 3 — Start the server
```bash
npm start
```

### Step 4 — Open in browser
```
http://localhost:3000
```

---

## 🌐 API Endpoints

| Endpoint | Description |
|---|---|
| `GET /api/news?lang=en` | All content in English |
| `GET /api/news?lang=ml` | All content in Malayalam |
| `GET /api/articles/:id` | Single article by ID |
| `GET /api/districts?lang=en` | List of all 14 Kerala districts |
| `GET /api/news/district/:name` | Articles filtered by district |

---

## ✨ Features

- 🔴 **Live countdown** to 17 August 2026 (ticking every second)
- 🌐 **EN ↔ ML language toggle** — entire site switches instantly
- 📍 **14 Kerala district tabs** — filter news by district
- 📰 **Real Kerala news** sourced from Onmanorama (June 2026)
- 🌿 **Kerala-themed background** — palm leaf SVG pattern
- 🎙 **Podcast section** in both languages
- 📧 **Newsletter signup**
- 📱 **Fully responsive** for mobile

---

## 🆓 Free Hosting Options

### Option 1 — Railway (Easiest for Node.js)
1. Go to https://railway.app
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Upload this folder as a GitHub repo first
5. Railway auto-detects Node.js and runs `npm start`
6. Get a free URL like `https://orbit9media.up.railway.app`

### Option 2 — Render
1. Go to https://render.com
2. New → Web Service → Connect GitHub repo
3. Build command: `npm install`
4. Start command: `npm start`
5. Free tier gives you a live URL

### Option 3 — Glitch (Drag & Drop)
1. Go to https://glitch.com
2. New Project → Import from GitHub
3. Or drag-drop files into the editor
4. Instant live URL like `https://orbit9media.glitch.me`

### Option 4 — Cyclic.sh
1. Go to https://cyclic.sh
2. Connect GitHub → Deploy
3. Free Node.js hosting

---

## 📝 How to Add More News Articles

Edit `data/news.js` and add to the `articles` array:

```javascript
{
  id: 13,                               // unique ID
  source: { en: "Onmanorama · Kochi", ml: "ഓൺമനോരമ · കൊച്ചി" },
  category: { en: "Politics", ml: "രാഷ്ട്രീയം" },
  title: {
    en: "Your English headline here",
    ml: "നിങ്ങളുടെ മലയാളം തലക്കെട്ട്"
  },
  meta: { en: "June 20, 2026 · 4 min read", ml: "ജൂൺ 20, 2026 · 4 മിനിറ്റ്" },
  thumb: "ct1",                         // ct1 through ct8 for colours
  type: "latest",                       // "latest", "more", "sidebar", "hero"
  district: "Kochi"
}
```

---

## 🎨 Tech Stack

- **Backend**: Node.js + Express
- **Frontend**: Vanilla HTML/CSS/JavaScript (no framework needed)
- **Fonts**: Playfair Display, Space Mono, Noto Sans Malayalam
- **Data**: Static JSON-style JS file (easily swappable for a real DB)

---

© 2026 Orbit9Media Private Limited
