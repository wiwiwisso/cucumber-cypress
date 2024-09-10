# Utilisez l'image officielle Node.js
FROM node:18

# Installez Xvfb et autres dépendances
RUN apt-get update && apt-get install -y \
    xvfb \
    libgtk2.0-0 \
    libnotify-dev \
    libgconf-2-4 \
    libnss3 \
    libxss1 \
    libasound2 \
    xauth \
    dbus-x11 \
    && rm -rf /var/lib/apt/lists/*

# Créez un répertoire pour votre application
WORKDIR /app

# Copiez les fichiers package.json et package-lock.json
COPY package*.json ./

# Installez toutes les dépendances, y compris Cypress
RUN npm install

# Copiez le reste de votre code dans le conteneur
COPY . .

# Définissez la commande par défaut pour exécuter Cypress avec Xvfb
CMD ["sh", "-c", "xvfb-run -a]
