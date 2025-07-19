# MongoDB : la base de données NoSQL flexible et puissante

**MongoDB** est une base de données orientée documents, open source et conçue pour la performance, la scalabilité et la simplicité de développement. Elle stocke les données au format **JSON/BSON**, ce qui la rend très flexible pour les applications modernes.

---

## Pourquoi utiliser MongoDB ?

* **Modèle flexible** : les documents n’ont pas besoin d’un schéma fixe.
* **Scalabilité horizontale** : parfaite pour les grandes quantités de données.
* **Facile à utiliser avec JavaScript** : les données sont des objets JSON natifs.
* **Performances élevées** : moteur optimisé pour les lectures et écritures rapides.
* **Intégration parfaite avec Node.js et Next.js**.

---

## Structure d’un document MongoDB

Un document est une structure clé-valeur stockée dans une collection :

```json
{
  "_id": "64fae6f2a91f3f4e",
  "nom": "Alice",
  "email": "alice@example.com",
  "inscription": "2023-01-10"
}
```

Les collections contiennent plusieurs documents du même type (comme des lignes d’une table relationnelle).

---

## Installation locale

### 1. Installer MongoDB

* Sur macOS :

```bash
brew tap mongodb/brew
brew install mongodb-community@6.0
```

* Sur Linux : suivre les instructions sur [mongodb.com](https://www.mongodb.com/try/download/community)

### 2. Lancer le serveur MongoDB

```bash
brew services start mongodb/brew/mongodb-community
```

Ou bien :

```bash
mongod
```

---

## Connexion avec Node.js

Utilisez la bibliothèque officielle `mongodb` pour Node.js :

```bash
npm install mongodb
```

### Exemple de connexion

```js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export async function getUsers() {
  await client.connect();
  const db = client.db('ma-base');
  const users = await db.collection('utilisateurs').find().toArray();
  return users;
}
```

---

## Utilisation avec Mongoose

[Mongoose](https://mongoosejs.com) est un ODM (Object Data Modeling) qui ajoute un **schéma stricte** au-dessus de MongoDB.

```bash
npm install mongoose
```

### Exemple de schéma

```js
import mongoose from 'mongoose';

const utilisateurSchema = new mongoose.Schema({
  nom: String,
  email: { type: String, required: true, unique: true },
  inscritLe: { type: Date, default: Date.now },
});

export const Utilisateur = mongoose.model('Utilisateur', utilisateurSchema);
```

---

## Comparaison avec d’autres bases

| Système    | Type        | Schéma flexible | Performant | Facile à utiliser |
| ---------- | ----------- | --------------- | ---------- | ----------------- |
| MongoDB    | NoSQL       | ✅               | ✅✅         | ✅✅✅               |
| MySQL      | Relationnel | ❌               | ✅✅         | ✅✅                |
| PostgreSQL | Relationnel | ⚠️ partiel      | ✅✅✅        | ✅✅✅               |

---

## Cas d’usage typiques

* Applications web modernes (React, Next.js, Vue, etc.)
* Stockage de profils utilisateurs
* Données non structurées (logs, analytics, JSON)
* Plateformes évolutives à fort trafic

---

## Conclusion

MongoDB est un **choix idéal** pour les développeurs qui souhaitent une base de données **souple, évolutive et rapide**.
Son intégration naturelle avec JavaScript, sa simplicité de mise en œuvre et sa robustesse en production en font une référence incontournable dans l’univers du NoSQL.

> Pour des projets modernes et agiles, MongoDB est souvent la meilleure alliée de votre stack fullstack JavaScript.