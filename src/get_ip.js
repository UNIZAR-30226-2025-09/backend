import os from "os";
import axios from "axios";

/**
 * Obtiene la IP local o pública.
 * @param {"local" | "public"} type - Tipo de IP a obtener.
 * @returns {Promise<string>} - Retorna la IP en formato string.
 */
export async function getIp(type = "local") {
    if (type === "local") {
        return getLocalIp();
    } else if (type === "public") {
        return await getPublicIp();
    } else {
        throw new Error("Tipo inválido. Usa 'local' o 'public'.");
    }
}

// Función para obtener la IP local
function getLocalIp() {
    const interfaces = os.networkInterfaces();
    for (const iface of Object.values(interfaces).flat()) {
        if (iface.family === "IPv4" && !iface.internal) {
            return iface.address; // Retorna la primera IP no interna
        }
    }
    return "localhost"; // Fallback en caso de no encontrar otra IP
}

// Función asíncrona para obtener la IP pública
async function getPublicIp() {
    try {
        const response = await axios.get("https://api64.ipify.org?format=json");
        return response.data.ip;
    } catch (error) {
        return "No se pudo obtener la IP pública";
    }
}