# Tailwind CSS : styliser efficacement avec des classes utilitaires

Tailwind CSS est un **framework CSS moderne** qui permet de construire rapidement des interfaces élégantes en utilisant des **classes utilitaires** directement dans le HTML ou le JSX.

---

## Pourquoi choisir Tailwind CSS ?

* **Rapidité de développement** : Pas besoin d’écrire des fichiers CSS séparés, tout se fait directement dans les composants.
* **Hautement personnalisable** : Configurez facilement le thème, les couleurs, et les espacements dans un fichier central.
* **Cohérence visuelle** : Des styles prédéfinis assurent une interface harmonieuse et cohérente.
* **Mobile-first natif** : Gestion des points de rupture responsive intégrée de manière intuitive.

---

## Concepts clés

### Classes utilitaires

Avec Tailwind, les styles sont appliqués directement à l’aide de classes utilitaires simples et explicites :

```html
<div class="p-4 bg-gray-100 rounded shadow">
  Une carte simple avec Tailwind.
</div>
```

Chaque classe correspond précisément à une règle CSS spécifique :

* `p-4` : padding interne de 1rem
* `bg-gray-100` : arrière-plan gris clair
* `rounded` : coins arrondis
* `shadow` : ombre portée

### Responsive Design

Tailwind permet facilement de créer des designs responsive grâce à des préfixes spécifiques :

```html
<div class="text-sm md:text-base lg:text-lg">
  Texte responsive selon la taille d’écran.
</div>
```

* `text-sm` : texte petit sur mobile
* `md:text-base` : taille moyenne sur tablettes (≥ 768px)
* `lg:text-lg` : taille grande sur grands écrans (≥ 1024px)

### Thème et personnalisation

Le fichier `tailwind.config.js` centralise la personnalisation des couleurs, typographies, espacements et autres :

```js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: '#0f766e',
      },
    },
  },
  plugins: [],
};
```

Cela permet de définir et de maintenir facilement l'identité visuelle de ton projet.

---

## Installation rapide de Tailwind

Voici comment intégrer Tailwind rapidement dans un projet Next.js par exemple :

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Puis dans ton fichier CSS global (`globals.css`) :

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Et assure-toi que le fichier est bien importé dans ton projet.

---

## Astuce bonus : typographie améliorée avec @tailwindcss/typography

Le plugin Typography améliore l’affichage du contenu riche (Markdown, articles, posts).

```bash
npm install -D @tailwindcss/typography
```

Ajoute-le dans la configuration :

```js
plugins: [require('@tailwindcss/typography')],
```

Et utilise la classe `prose` :

```jsx
<article className="prose dark:prose-invert">
  <ReactMarkdown>{markdownContent}</ReactMarkdown>
</article>
```

---

## Conclusion

Tailwind CSS transforme radicalement la manière de créer des interfaces. En écrivant le style directement dans le HTML ou JSX, il permet de gagner du temps, de rester cohérent, et de prototyper rapidement des designs adaptés et professionnels.

> Une fois adopté, difficile de revenir en arrière.