#!/bin/bash

echo "Deteniendo contenedores..."
docker compose down

echo "Reconstruyendo imágenes..."
docker compose build

echo "Iniciando contenedores en modo detached..."
docker compose up

echo "¡Soft reset completado! Los contenedores están ejecutándose en segundo plano."
