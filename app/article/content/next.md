# Next.js : le framework React ultime pour le web moderne

**Next.js** est un framework basé sur **React**, conçu pour créer des sites web et applications modernes, performants et bien optimisés pour le SEO. Il fournit une structure complète qui facilite le développement côté client **et** côté serveur.

---

## Pourquoi utiliser Next.js ?

* **Rendu hybride** : support du rendu statique (SSG) et du rendu côté serveur (SSR)
* **Performances** : génération de pages ultra-rapide, préchargement intelligent
* **SEO-friendly** : améliore le référencement grâce au rendu serveur
* **Routing automatique** : chaque fichier dans `app` ou `pages` devient une route
* **Support TypeScript, CSS Modules, API routes intégrées**

---

## Les fondations du framework

### Structure des dossiers (App Router)

```bash
/app
  ├── layout.jsx
  ├── page.jsx
  └── about/
      └── page.jsx
```

Chaque dossier dans `app/` représente une route, avec `page.jsx` comme point d’entrée.

### Un composant de page simple

```jsx
export default function HomePage() {
  return <h1>Bienvenue sur mon site Next.js !</h1>;
}
```

---

## Routing et navigation

Next.js offre un **système de routage automatique** basé sur les fichiers.

```jsx
import Link from 'next/link';

<Link href="/about">À propos</Link>
```

Et pour naviguer via JavaScript :

```jsx
'use client';
import { useRouter } from 'next/navigation';

const router = useRouter();
router.push('/contact');
```

---

## Rendu des pages

### 1. Rendu statique (SSG)

```js
export async function generateStaticParams() {
  return [{ slug: 'article-1' }, { slug: 'article-2' }];
}
```

### 2. Rendu serveur (SSR)

```js
export async function generateMetadata({ params }) {
  const data = await fetchData(params.id);
  return { title: data.title };
}
```

---

## Gestion des métadonnées SEO

```js
export const metadata = {
  title: 'Accueil',
  description: 'Bienvenue sur mon site propulsé par Next.js',
};
```

---

## Les API Routes (pages/api)

Dans l’ancien système (pages router), on peut créer une API directement :

```js
// pages/api/hello.js
export default function handler(req, res) {
  res.status(200).json({ message: 'Hello world!' });
}
```

---

## Déploiement

Next.js peut être déployé facilement sur **Vercel**, la plateforme officielle.

```bash
npm run build
npm run start
```

Mais aussi sur Netlify, Docker, ou OVH via l’adaptation du serveur Node.js.

---

## Comparaison avec React seul

| Fonctionnalité      | React         | Next.js       |
| ------------------- | ------------- | ------------- |
| Routing             | ❌ manuel      | ✅ automatique |
| SEO                 | ❌ limité      | ✅ natif       |
| Rendu serveur (SSR) | ❌ non prévu   | ✅ inclus      |
| API intégrée        | ❌ externe     | ✅ API Routes  |
| Structure complète  | ❌ non imposée | ✅ oui         |

---

## Conclusion

Next.js est un **framework puissant et complet** pour créer des sites web modernes avec React.
Il allie **performance, simplicité de développement, SEO, accessibilité**, et **flexibilité**, ce qui en fait l’un des outils les plus adoptés aujourd’hui.

> Si tu sais déjà utiliser React, apprendre Next.js est une suite logique et très enrichissante.