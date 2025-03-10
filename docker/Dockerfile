# Usa la imagen oficial de Node.js (versión 18)
FROM node:22.14.0-alpine
# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (si existe)
COPY ../package*.json ./

# Instala las dependencias
RUN npm install
#
# Copia el resto del código del proyecto al contenedor
COPY . .

# Expone el puerto del servidor (5001)
EXPOSE 5001

# Comando que ejecutará el servidor
CMD ["sh", "-c", "npx sequelize-cli db:migrate:undo:all && npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && npm start"]