cd chemin/vers/ton/projet
git init
git add .
git commit -m "Initial commit avec les fichiers du backend"
git remote add origin https://github.com/ton-utilisateur/ton-depot.git
git push -u origin master
mkdir frontend
cd frontend
npx create-react-app .
git add frontend/
git commit -m "Ajout des fichiers du frontend"
git push origin master
