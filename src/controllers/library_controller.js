import db from "#src/models/index";
import path from "path";
import BASE_URL from "#src/server";

export const getUserLibrary = async (req, res) => {
    try {
        // Supone que el middleware de autenticación asigna req.user con la información del usuario
        const userId = req.user.id;

        // Buscar el usuario e incluir sus canciones y playlists relacionadas
        const user = await db.User.findByPk(userId, {
            include: [
                {
                    model: db.Song,
                    as: "likedSongs",
                    // Si necesitas, especifica atributos: attributes: ["id", "name", "cover", "duration", ...]
                },
                {
                    model: db.Playlist,
                    as: "likedPlaylists",
                    // attributes: ["id", "name", "cover", ...]
                },
                {
                    model: db.Playlist,
                    as: "playlistsCreated",
                    // attributes: ["id", "name", "cover", ...]
                }
            ]
        });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        return res.json({
            likedSongs: user.likedSongs,
            likedPlaylists: user.likedPlaylists,
            playlistsCreated: user.playlistsCreated,
        });
    } catch (error) {
        console.error("Error en getUserLibrary:", error);
        return res.status(500).json({
            message: "Error al obtener la biblioteca",
            error: error.message,
        });
    }
};
