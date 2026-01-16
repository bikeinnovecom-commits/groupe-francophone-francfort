#!/bin/bash

# Couleurs pour les messages
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

PROJECT_DIR="/Users/apple/Desktop/website groupe francophone de 
frankfurt"

echo -e "${BLUE}🚀 Configuration du projet...${NC}"

# 1. Créer .gitignore
echo -e "${BLUE}📝 Création de .gitignore...${NC}"
cat > "$PROJECT_DIR/.gitignore" << 'EOF'
# Dependencies
node_modules/
frontend/node_modules/
build-template/node_modules/

# Build outputs
dist/
frontend/dist/
build/
.next/
out/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# OS files
.DS_Store
Thumbs.db

# Editor directories
.vscode/
.idea/
*.swp
*.swo
*~

# Testing
coverage/

# Vercel
.vercel
EOF

# 2. Créer vercel.json
echo -e "${BLUE}📝 Création de vercel.json...${NC}"
cat > "$PROJECT_DIR/vercel.json" << 'EOF'
{
  "version": 2,
  "buildCommand": "cd frontend && npm install && npm run build",
  "outputDirectory": "frontend/dist",
  "devCommand": "cd frontend && npm run dev",
  "installCommand": "cd frontend && npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
EOF

# 3. Mettre à jour frontend/package.json
echo -e "${BLUE}📝 Mise à jour de frontend/package.json...${NC}"
cat > "$PROJECT_DIR/frontend/package.json" << 'EOF'
{
  "name": "frontend",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@tanstack/react-query": "^5.90.16",
    "@tanstack/react-router": "^1.147.3",
    "@vitejs/plugin-react": "^5.1.2",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.562.0",
    "tailwind-merge": "^3.4.0",
    "vite": "^7.3.1",
    "@radix-ui/react-slot": "^1.2.4"
  },
  "devDependencies": {
    "@types/react": "^18.3.1",
    "@types/react-dom": "^18.3.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.32"
  }
}
EOF

# 4. Créer postcss.config.js
echo -e "${BLUE}📝 Création de frontend/postcss.config.js...${NC}"
cat > "$PROJECT_DIR/frontend/postcss.config.js" << 'EOF'
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
EOF

# 5. Mettre à jour vite.config.js
echo -e "${BLUE}📝 Mise à jour de frontend/vite.config.js...${NC}"
cat > "$PROJECT_DIR/frontend/vite.config.js" << 'EOF'
import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "src") } },
});
EOF

# 6. Corriger AboutPage.tsx
echo -e "${BLUE}📝 Correction de AboutPage.tsx...${NC}"
sed -i '' 's/import Button from "@\/components\/ui\/button";/import 
{ Button } from '\''@\/components\/ui\/button'\'';/' 
"$PROJECT_DIR/frontend/src/pages/AboutPage.tsx"

# 7. Corriger App.tsx - chemins d'images
echo -e "${BLUE}📝 Correction des chemins d'images dans 
App.tsx...${NC}"
sed -i '' 's|/assets/generated//Users/apple/Downloads/Adventist 
Logo.png|/assets/adventist-logo.png|g' 
"$PROJECT_DIR/frontend/src/App.tsx"

# 8. Ajouter l'import Button dans App.tsx (après la ligne 4)
echo -e "${BLUE}📝 Ajout de l'import Button dans App.tsx...${NC}"
sed -i '' '4a\
import { Button } from '\''@/components/ui/button'\'';
' "$PROJECT_DIR/frontend/src/App.tsx"

# 9. Créer les dossiers pour les images
echo -e "${BLUE}📁 Création des dossiers pour les images...${NC}"
mkdir -p "$PROJECT_DIR/frontend/public/assets/generated"

# 10. Copier le logo si disponible
if [ -f "/Users/apple/Downloads/Adventist Logo.png" ]; then
    echo -e "${BLUE}🖼️  Copie du logo...${NC}"
    cp "/Users/apple/Downloads/Adventist Logo.png" 
"$PROJECT_DIR/frontend/public/assets/adventist-logo.png"
else
    echo -e "${BLUE}⚠️  Logo non trouvé dans 
/Users/apple/Downloads/. Copiez-le manuellement.${NC}"
fi

# 11. Installer les dépendances
echo -e "${BLUE}📦 Installation des dépendances...${NC}"
cd "$PROJECT_DIR/frontend"
npm install

echo -e "${GREEN}✅ Configuration terminée !${NC}"
echo -e "${GREEN}Pour lancer le site, exécutez : cd frontend && npm 
run dev${NC}"
chmod +x setup.sh
./setup.sh

bash setup.sh

