# Usa la imagen oficial de Node.js (versión 22 LTS)
FROM node:22.14.0-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias definidas en package.json
RUN npm install --production

# Copia el resto del código del proyecto al contenedor
COPY . .

# (Opcional) Si la aplicación usa un puerto específico, puedes exponerlo, por ejemplo:
# EXPOSE 3000

# Comando que se ejecuta al iniciar el contenedor:
# Aquí se ejecuta el script seed.js para poblar la base de datos.
CMD ["sh", "-c", "npx sequelize-cli db:migrate && npx sequelize-cli db:seed:all && npm start"]
#