import db from "#src/models/index";
import path from "path";
import BASE_URL from "#src/server";
import jwt from "jsonwebtoken";

const SECRET_KEY = "aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z";

/**
 * Controlador para obtener la biblioteca del usuario autenticado.
 * Devuelve las canciones y playlists que el usuario ha marcado con "me gusta"
 * y las playlists que ha creado.
 */
export const getUserLibrary = async (req, res) => {
    try {
        // Extraer el token del header Authorization
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        // Verificar el token usando SECRET_KEY
        const decoded = jwt.verify(token, SECRET_KEY);

        // Buscar el usuario por su id decodificado e incluir las asociaciones
        const user = await db.user.findByPk(decoded.id, {
            include: [
                {
                    model: db.Song,
                    as: "likedSongs",
                    // Puedes especificar atributos si lo deseas
                    // attributes: ["id", "name", "cover", "duration"]
                },
                {
                    model: db.Playlist,
                    as: "likedPlaylists",
                    // attributes: ["id", "name", "cover"]
                },
                {
                    model: db.Playlist,
                    as: "playlistsCreated",
                    // attributes: ["id", "name", "cover"]
                }
            ]
        });

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        return res.status(200).json({
            likedSongs: user.likedSongs,
            likedPlaylists: user.likedPlaylists,
            playlistsCreated: user.playlistsCreated
        });
    } catch (error) {
        console.error("Error en getUserLibrary:", error);
        return res.status(500).json({ error: "Error al obtener la biblioteca", message: error.message });
    }
};
