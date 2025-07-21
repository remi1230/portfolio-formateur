# Comprendre l'API REST : principes, fonctionnement et exemples

## Qu'est-ce qu'une API ?

Une API (Application Programming Interface) est une interface qui permet à deux systèmes de communiquer entre eux. Elle définit un ensemble de règles que les applications peuvent suivre pour s'échanger des données ou des fonctionnalités.

Dans le développement web, une API permet souvent à un client (comme un site web ou une application mobile) d'accéder aux données d'un serveur.

---

## REST : une architecture pour les API

REST (Representational State Transfer) est un style d'architecture qui impose des conventions pour concevoir des API simples, évolutives et performantes. Une API REST repose sur les principes suivants :

### 1. **Utilisation du protocole HTTP**

Les requêtes se font via HTTP, en utilisant ses verbes standards :

| Verbe HTTP | Action                  | Exemple               |
| ---------- | ----------------------- | --------------------- |
| GET        | Lire une ressource      | `GET /articles`       |
| POST       | Créer une ressource     | `POST /articles`      |
| PUT        | Modifier une ressource  | `PUT /articles/42`    |
| DELETE     | Supprimer une ressource | `DELETE /articles/42` |

### 2. **URL lisibles et hiérarchiques**

Les ressources sont identifiées par des URLs claires :

```bash
GET /utilisateurs
GET /utilisateurs/123
```

### 3. **Stateless (sans état)**

Chaque requête contient toutes les informations nécessaires. Le serveur ne garde pas en mémoire l'état de la session entre deux appels.

### 4. **Représentations des ressources**

Les données sont souvent échangées en JSON :

```json
{
  "id": 123,
  "nom": "Alice",
  "email": "alice@example.com"
}
```

---

## Exemple simple : API REST pour un blog

Imaginons une API REST pour gérer les articles d'un blog.

* `GET /articles` → liste tous les articles
* `GET /articles/7` → affiche l'article avec l'ID 7
* `POST /articles` → crée un nouvel article
* `PUT /articles/7` → modifie l'article avec l'ID 7
* `DELETE /articles/7` → supprime l'article avec l'ID 7

Un appel `GET /articles/7` peut renvoyer :

```json
{
  "id": 7,
  "titre": "Comprendre REST",
  "contenu": "REST est un style d'architecture..."
}
```

---

## Pourquoi REST est-il si utilisé ?

* **Simplicité** : Repose sur HTTP, facile à comprendre et à utiliser
* **Standardisé** : Utilise des conventions reconnues
* **Flexible** : Fonctionne avec tout type de client (web, mobile, etc.)
* **Scalable** : Idéal pour les systèmes distribués

---

## Limites de REST

* Trop rigide pour certaines structures complexes de données
* Ne gère pas bien les appels multiples ou imbriqués (surcharge de requêtes)
* Pas toujours adapté au temps réel

Dans ces cas-là, on se tourne parfois vers **GraphQL** ou **WebSocket**.

---

## En résumé

Une API REST est une manière simple et robuste de structurer les échanges de données entre un client et un serveur. Elle repose sur des conventions HTTP claires, et permet de concevoir des systèmes maintenables et interopérables.

> En tant que développeur web, savoir concevoir ou consommer une API REST est une compétence essentielle dans presque tous les projets modernes.