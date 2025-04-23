#!/bin/bash

echo "Deteniendo contenedores y eliminando volúmenes..."
docker compose down -v

echo "Eliminando recursos Docker no utilizados (imágenes, contenedores, redes)..."
docker system prune -af

echo "Eliminando volúmenes no utilizados..."
docker volume prune -f

echo "Reconstruyendo imágenes sin usar caché..."
docker compose build --no-cache

echo "Iniciando contenedores en modo detached..."
docker compose up -d

echo "¡Proceso completado! Los contenedores están ejecutándose en segundo plano."