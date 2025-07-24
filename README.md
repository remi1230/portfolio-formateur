# 📘 Portfolio Next.js — Installation & Stack

## 🚀 Installation

### 🧱 Stack technique utilisée
* **Next.js 14.1.3** — Framework React moderne avec App Router
* **React 18.2** — Bibliothèque JavaScript pour les interfaces interactives
* **Tailwind CSS v4** *(non listé mais supposé utilisé)* — Framework utilitaire CSS
* **daisyUI v5** *(non visible mais mentionné)* — Composants UI basés sur Tailwind CSS
* **Framer Motion v10.12.16** — Animations fluides et naturelles pour React
* **React Markdown v10.1.0** — Rendu Markdown côté client
* **remark-gfm v4.0.1** — Support GitHub Flavored Markdown (liens, tableaux, etc.)
* **PrismJS v1.30.0** + **prism-themes** — Coloration syntaxique des blocs de code
* **React Quill v2.0.0 + Quill v2.0.3** — Éditeur de texte enrichi (WYSIWYG)
* **Lucide React** — Icônes SVG modernes pour React
* **React Icons v5.5.0** — Bibliothèque d’icônes regroupant FontAwesome, Material Icons, etc.
* **clsx** — Gestion conditionnelle des classes CSS
* **Nodemailer v7** — Envoi d’e-mails côté serveur
* **Node.js 20.11.1 (alpine)** — Environnement léger Node utilisé via Docker
* **Docker & Docker Compose** — Conteneurisation de l’application
* **Nginx** — Reverse proxy pour la production
* **Cloudflare** — Proxy DNS et gestion SSL (HTTPS)


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