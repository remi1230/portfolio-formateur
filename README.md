## 📄 Portfolio formateur - README

### ✨ Présentation

Ce projet est un portfolio personnel développé avec **Next.js 14** et **React 18**, afin de présenter mes compétences de formateur web. Il intègre une interface moderne, des animations fluides, un formulaire de contact, un rendu Markdown dynamique, et une coloration syntaxique pour les articles techniques.

### 🔧 Stack technique utilisée

* **Next.js 14.1.3** — Framework React moderne avec App Router
* **React 18.2** — Bibliothèque JavaScript pour les interfaces interactives
* **Tailwind CSS v4** *(non listé mais utilisé)* — Framework utilitaire CSS
* **daisyUI v5** *(composants UI pour Tailwind)*
* **Framer Motion v10.12.16** — Animations fluides et naturelles pour React
* **React Markdown v10.1.0** — Rendu Markdown côté client
* **remark-gfm v4.0.1** — Support GitHub Flavored Markdown
* **PrismJS v1.30.0** + **prism-themes** — Coloration syntaxique des blocs de code
* **React Quill v2.0.0 + Quill v2.0.3** — Éditeur de texte enrichi (WYSIWYG)
* **Lucide React** — Icônes SVG modernes pour React
* **React Icons v5.5.0** — Bibliothèque d’icônes diverses
* **clsx** — Gestion conditionnelle des classes CSS
* **Nodemailer v7** — Envoi d’e-mails côté serveur
* **Node.js 20.11.1 (alpine)** — Environnement Node léger via Docker
* **Docker & Docker Compose** — Conteneurisation de l’application
* **Nginx** — Reverse proxy en production
* **Cloudflare** — Proxy DNS et gestion SSL

### 🗂️ Structure du projet

Le projet suit une architecture modulaire avec l'App Router de Next.js. Voici la structure principale :

```
/app
  /components          # Composants réutilisables (Navbar, Footer, etc.)
  /sections            # Sections principales de la page (About, Projects, etc.)
  /portfolio           # Pages du portfolio accessibles via /portfolio
  /contact             # Page de contact (avec formulaire et envoi via API)
  /api/contact         # Route API pour traitement du formulaire (Nodemailer)
  /layout.js           # Layout global (Navbar + Footer)
  /globals.css         # Styles globaux

/utils                # Fonctions utilitaires (validation de formulaire, helpers)
/public/prism-themes  # Thèmes Prism.js pour la coloration syntaxique
```

### 🚫 Fonctionnalités principales

* ✉️ **Formulaire de contact** avec validation et envoi d'e-mail via Nodemailer
* 🖊️ **Rendu Markdown** avec prise en charge des blocs de code (ReactMarkdown + PrismJS)
* ✨ **Animations** douces avec Framer Motion
* 📅 **Design responsive** avec Tailwind CSS et daisyUI
* 🚪 **Séparation client/serveur** via App Router et routes API Next.js
* 🚀 **Déploiement** via Docker, Nginx et Cloudflare


### 🚌 Démarrage local

```bash
git clone https://github.com/remi1230/portfolio-formateur.git
cd portfolio-formateur
npm install
npm run dev
```

### 🌐 Déploiement

Le projet est conçu pour être déployé dans un conteneur Docker avec Nginx en reverse proxy et Cloudflare pour la gestion DNS et HTTPS.

---

✉️ Pour toute question ou suggestion, n'hésitez pas à me contacter.

---
