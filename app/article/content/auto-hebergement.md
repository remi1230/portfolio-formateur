# Auto-hébergement avec Raspberry Pi, Docker, DynDNS et Cloudflare

L'auto-hébergement consiste à héberger soi-même des applications web, sites web ou services numériques sur son propre matériel, souvent à domicile. Cela permet une maîtrise totale des données et des configurations, tout en offrant un apprentissage concret des technologies modernes.

## Pourquoi choisir l'auto-hébergement ?

* **Contrôle complet des données** : Aucune dépendance à des services tiers.
* **Économique** : Coût réduit comparé aux solutions commerciales.
* **Personnalisation totale** : Liberté de configurer précisément selon ses besoins.

## Matériel : Raspberry Pi

Le Raspberry Pi est idéal pour démarrer un auto-hébergement à domicile grâce à :

* Sa consommation énergétique faible.
* Son coût abordable (\~50-100€ selon le modèle).
* Sa communauté active facilitant la résolution des problèmes techniques.

### Exemple de modèles adaptés :

* Raspberry Pi 4 (minimum 2Go RAM conseillé)
* Raspberry Pi 5 pour des performances accrues

## Docker : Au cœur de l'auto-hébergement

Docker est une technologie de virtualisation légère (conteneurisation) permettant d'isoler chaque service dans un environnement séparé. Cela simplifie grandement le déploiement, la gestion des dépendances, et facilite les mises à jour.

### Pourquoi Docker ?

* **Facilité d'installation** : Services pré-packagés disponibles sur Docker Hub.
* **Isolation des services** : Aucun conflit de dépendances entre applications.
* **Facilité de sauvegarde** : Exportation et migration aisées des applications.

### Exemple d'installation minimale de Docker

Sur Raspberry Pi OS :

```bash
sudo apt update
sudo apt install docker.io docker-compose -y
sudo usermod -aG docker $USER
```

Exemple de fichier `docker-compose.yml` :

```yaml
version: "3"
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
    volumes:
      - ./html:/usr/share/nginx/html
```

Lancez vos conteneurs avec :

```bash
docker-compose up -d
```

## Rendre votre serveur accessible : DynDNS

Pour accéder à votre serveur Raspberry Pi depuis l'extérieur, un service DNS dynamique (DynDNS) est recommandé afin de suivre automatiquement les changements d'adresse IP publique.

Services recommandés :

* [No-IP](https://www.noip.com/)
* [DuckDNS](https://www.duckdns.org/)

Installation d'un client DynDNS (exemple DuckDNS) :

```bash
sudo apt install curl cron -y
mkdir duckdns
cd duckdns
echo url="https://www.duckdns.org/update?domains=yourdomain&token=yourtoken" | curl -k -o duck.log -K -
```

Automatiser avec `cron` pour mettre à jour toutes les 5 minutes :

```bash
crontab -e
# ajoutez cette ligne
*/5 * * * * curl -k "https://www.duckdns.org/update?domains=yourdomain&token=yourtoken" >/dev/null 2>&1
```

## Cloudflare : sécurité et performance

Cloudflare agit comme un intermédiaire entre vos utilisateurs et votre serveur, offrant :

* **Protection contre les attaques DDoS**.
* **Mise en cache des contenus statiques**.
* **Certificats SSL gratuits**.

Configurez votre domaine dans Cloudflare :

1. Créez un compte Cloudflare gratuit.
2. Ajoutez votre domaine et modifiez les serveurs DNS chez votre registrar par ceux de Cloudflare.
3. Activez le mode "Proxy" (nuage orange) sur vos entrées DNS pour bénéficier de la sécurité Cloudflare.

### Sécurisez votre connexion avec SSL via Cloudflare

Dans votre docker-compose.yml (exemple avec Nginx) :

```yaml
version: "3"
services:
  web:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./html:/usr/share/nginx/html
      - ./certs:/etc/nginx/certs
```

Utilisez un certificat Cloudflare Origin Certificate et configurez Nginx pour le SSL.

## Conclusion

> L'auto-hébergement sur Raspberry Pi avec Docker, DynDNS et Cloudflare constitue une solution robuste, flexible et sécurisée, adaptée aussi bien aux débutants qu'aux utilisateurs avancés souhaitant reprendre le contrôle total de leurs données.