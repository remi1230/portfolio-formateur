# Docker : Conteneuriser pour mieux développer, tester et déployer

Docker est un outil open-source qui permet d'emballer une application et toutes ses dépendances dans un **conteneur**. Ce conteneur peut être exécuté de manière cohérente sur n'importe quelle machine, ce qui facilite le développement, les tests et la mise en production.

---

## Pourquoi utiliser Docker ?

* **Cohérence entre environnements** : le code fonctionne de la même manière en local, en test, en staging et en production.
* **Légèreté** : les conteneurs sont plus légers que les machines virtuelles.
* **Isolation** : chaque conteneur exécute son propre environnement, sans conflit avec d'autres applications.
* **Déploiement simplifié** : il suffit d'un `docker run` pour exécuter une application.
* **Facilité d'automatisation** : intégration continue, tests automatisés, etc.

---

## Concepts clés

### Image

Une **image Docker** est un modèle figé contenant tout ce qu'il faut pour exécuter une application (code, dépendances, OS minimal).

```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```

### Conteneur

Un **conteneur** est une instance exécutée d'une image. Il est isolé et peut être démarré, arrêté, supprimé.

```bash
docker build -t mon-app .
docker run -p 3000:3000 mon-app
```

### Dockerfile

Un fichier `Dockerfile` décrit comment construire une image.

---

## Utilisation typique

1. Création d'un `Dockerfile` pour votre app.
2. Construction de l'image avec `docker build`.
3. Exécution avec `docker run`.
4. (Optionnel) Orchestration avec `docker-compose`.

```yaml
# docker-compose.yml
version: '3'
services:
  web:
    build: .
    ports:
      - "3000:3000"
```

---

## Cas d'usage

* Environnement de développement isolé (Node.js, Python, MySQL, etc.)
* Déploiement d’application web sur serveur
* Tests automatisés (CI/CD)
* Applications microservices

---

## Avantages

| Avantage                  | Détail                                    |
| ------------------------- | ----------------------------------------- |
| Portabilité               | Fonctionne partout où Docker est installé |
| Rapidité de déploiement   | Lancement en quelques secondes            |
| Reproductibilité          | Même comportement à chaque exécution      |
| Intégration DevOps facile | Compatible CI/CD, GitHub Actions, etc.    |

---

## Conclusion

Docker est devenu un **standard incontournable** pour les développeurs modernes. Il permet de créer des applications **fiables, reproductibles et portables**, en facilitant le travail en équipe et le déploiement.

👉 Que vous soyez développeur, ops ou formateur, Docker est un outil à maîtriser pour gagner en efficacité.