#!/bin/bash

echo "Deteniendo contenedores y eliminando volúmenes..."
sudo docker compose down -v

echo "Eliminando recursos Docker no utilizados (imágenes, contenedores, redes)..."
sudo docker system prune -af

echo "Eliminando volúmenes no utilizados..."
sudo docker volume prune -f

echo "Reconstruyendo imágenes sin usar caché..."
sudo docker compose build --no-cache

echo "Iniciando contenedores en modo detached..."
sudo docker compose up -d
