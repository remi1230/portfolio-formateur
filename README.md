# 📘 Portfolio Next.js — Installation & Stack

## 🚀 Installation

### 🧱 Stack technique utilisée

* **Next.js 14** — Framework React pour le web moderne
* **Tailwind CSS v4** — Framework CSS utilitaire
* **daisyUI v5** — Composants UI basés sur Tailwind
* **Framer Motion** — Animations fluides pour React
* **Node.js 20.11.1-alpine** — Environnement léger Node
* **Docker & Docker Compose** — Conteneurisation de l'app
* **Nginx** — Reverse proxy
* **Cloudflare** — Gestion HTTPS et DNS

---

## ⚙️ Prérequis

* Docker et Docker Compose installés
* Un nom de domaine (ex: `my1prod.com`)
* (Optionnel) Certificats SSL configurés via Cloudflare ou Let's Encrypt

---

## 🧪 Lancement en développement

```bash
docker-compose up -d portfolio-dev
```

* L'application tourne sur : `http://localhost:3006`
* Hot Reload fonctionnel via `npm run dev`
* Les fichiers sources sont montés grâce à `volumes:`

---

## 📦 Lancement en production

```bash
docker-compose up -d --build portfolio
```

* L'application est buildée (`npm run build`) et servie via `next start`
* Les fichiers statiques sont exposés à Nginx
* L'application est servie sur : `http://my1prod.com`

---

## 🧾 Structure du projet

```
portfolio/
├── pages/              # Pages Next.js (ex: index.js)
├── public/             # Fichiers statiques accessibles (ex: /assets/images)
├── styles/             # Feuilles de styles (ex: globals.css)
├── tailwind.config.js  # Config Tailwind + daisyUI
├── postcss.config.js   # Config PostCSS
├── next.config.js      # Config Next.js (standalone + prefix optionnel)
├── Dockerfile          # Image pour production
└── ...
```

---

## 🔧 Configuration Tailwind CSS

### globals.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### tailwind.config.js

```js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
```

---

## 🎨 UI et animations

* Les composants daisyUI sont utilisables immédiatement avec les classes (ex: `btn btn-primary`)
* Les animations sont intégrées via Framer Motion (ex: `motion.div`)

---

## 🖼️ Images et performance

* Les images sont stockées dans `public/assets/images`
* Utilisation de `next/image` avec `priority` ou `fetchpriority="high"`

---

## 📦 .gitignore recommandé

```
node_modules
.next
.DS_Store
npm-debug.log
.env
*.local
```