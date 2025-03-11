#!/bin/sh

# Ejecutar migraciones y seeders de Sequelize
npx sequelize-cli db:migrate --config database/config/config.js
npx sequelize-cli db:seed:all --config database/config/config.js

# Iniciar el servidor
exec npm start