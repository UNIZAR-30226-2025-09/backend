# Usa la imagen oficial de Node.js (versión 18)
FROM node:18

# Establece el directorio de trabajo en el contenedor
WORKDIR /usr/src/app

# Copia los archivos package.json y package-lock.json (si existe)
COPY ../package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto del código del proyecto al contenedor
COPY . .

# Expone el puerto del servidor (5000)
EXPOSE 5000

# Comando que ejecutará el servidor
CMD ["node", "src/server.js"]