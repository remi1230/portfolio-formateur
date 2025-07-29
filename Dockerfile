# Étape 1 : build
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
COPY tailwind.config.js postcss.config.js ./ 
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : image de production
FROM node:18-alpine

WORKDIR /app

# Copier le serveur optimisé standalone
COPY --from=builder /app/.next/standalone .
# Copier les fichiers statiques Next.js
COPY --from=builder /app/.next/static .next/static
# Copier les assets publics
COPY --from=builder /app/public ./public

EXPOSE 3000

CMD ["node", "server.js"]
