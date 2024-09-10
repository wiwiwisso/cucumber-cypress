# Utilisez l'image officielle Node.js
FROM node:18

# Créez un répertoire pour votre application
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez toutes les dépendances, y compris Cypress, en une seule étape
RUN npm install

# Copiez le reste de votre code dans le conteneur
COPY . .

