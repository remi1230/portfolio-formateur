# Webpack : le bundler JavaScript modulaire indispensable

Webpack est un **module bundler** open-source pour JavaScript. Il permet de transformer, compiler et empaqueter tous les fichiers d’une application web (JS, CSS, images, etc.) en un ou plusieurs fichiers optimisés pour la production.

---

## Pourquoi utiliser Webpack ?

* **Regroupe tous les fichiers** (JS, CSS, assets) dans un bundle
* **Optimise la performance** : minification, lazy loading, cache
* **Prend en charge les modules modernes (ESM)**
* **Compatible avec React, Vue, TypeScript, etc.**
* **Permet la transformation avec des loaders** (ex. Babel, Sass)

---

## Fonctionnement

Webpack parcourt votre projet à partir d’un fichier d’entrée (entry point) et suit toutes les dépendances pour les inclure dans le bundle final.

```js
// webpack.config.js
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
```

---

## Principaux composants

### Entry

Point d'entrée principal du projet (ex : `src/index.js`).

### Output

Destination du bundle final (ex : `dist/bundle.js`).

### Loaders

Permettent de transformer les fichiers avant de les inclure (JSX, SCSS, TypeScript...).

### Plugins

Ajoutent des fonctionnalités avancées : minification, nettoyage, analyse...

```js
const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins: [
  new HtmlWebpackPlugin({ template: './src/index.html' })
]
```

---

## Mode d’utilisation

### Installation

```bash
npm install --save-dev webpack webpack-cli
```

### Script package.json

```json
"scripts": {
  "build": "webpack"
}
```

---

## Exemple simple de structure de projet

```bash
my-app/
├── src/
│   ├── index.js
│   └── style.css
├── dist/
│   └── index.html
├── webpack.config.js
└── package.json
```

---

## Avantages

| Fonctionnalité     | Détail                                   |
| ------------------ | ---------------------------------------- |
| Modularité         | Organise le code en modules              |
| Performances       | Optimisation, cache, lazy loading        |
| Écosystème riche   | Nombreux plugins et loaders disponibles  |
| Intégration facile | Compatible avec Babel, React, Sass, etc. |

---

## Conclusion

Webpack est un outil puissant et personnalisable pour le développement web moderne.
Il permet de construire des applications **maintenables, rapides et modulaires**, tout en gardant un contrôle fin sur le processus de build.

> Si vous utilisez React, Vue ou tout autre framework JavaScript moderne, **maîtriser Webpack est un atout clé**.