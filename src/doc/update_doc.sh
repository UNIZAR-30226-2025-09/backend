#!/bin/bash

# Generar la documentación con Node.js
echo "Generando documentación con swagger.js..."
node swagger.js

# Verificar si la generación fue exitosa
if [ $? -ne 0 ]; then
    echo "Error al generar la documentación"
    exit 1
fi

# Verificar si se creó el archivo de salida
if [ ! -f "swagger-output.json" ]; then
    echo "No se encontró el archivo swagger-output.json"
    exit 1
fi

# Transferir el archivo al servidor remoto
echo "Transfiriendo documentación al servidor remoto..."
scp swagger-output.json unizar@164.90.160.181:~/swagger/

# Verificar si la transferencia fue exitosa
if [ $? -ne 0 ]; then
    echo "Error al transferir la documentación al servidor remoto"
    exit 1
fi

echo "Documentación generada y transferida exitosamente"