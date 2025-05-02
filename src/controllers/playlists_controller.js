import db from "#src/models/index";
import playlist_like from "#models/playlist_like";
import {Op} from "sequelize";

/**
 * Obtiene todas las playlists.
 * GET /api/playlists
 */
export const getAllPlaylist = async (req, res) => {
    try {

        const playlists = await db.playlist.findAll();
        res.json(playlists);
    } catch (error) {
        console.error("Error al obtener las playlists:", error);
        res.status(500).json({ error: error.message });
    }
};

export const getOrCreateLikedPlaylist = async (req, res) => {
    try {
        const { user_id } = req.body;  // Obtenemos el user_id desde el cuerpo de la solicitud
        if (!user_id || isNaN(user_id)) {
            return res.status(400).json({ error: "El user_id debe ser un número válido" });
        }

        console.log(`Verificando si la playlist de "Me Gusta" existe para el usuario con ID ${user_id}`);

        // Buscar la playlist de "Me Gusta" para este usuario
        let likedPlaylist = await db.playlist.findOne({
            where: {
                user_id,
                type: 'private',
                typeP: 'Vibra_likedSong'  // Identificador único de la playlist de "Me Gusta"
            }
        });

        if (likedPlaylist) {
            console.log(`Playlist de Me Gusta encontrada: ID ${likedPlaylist.id}`);
        } else {
            // Si no existe, la creamos
            likedPlaylist = await db.playlist.create({
                user_id,
                name: 'Me Gusta',
                type: 'private',
                typeP: 'Vibra_likedSong',
                front_page: 'playlist_images/meGusta.png'  // Valor por defecto para la portada
            });
            console.log(`Playlist de Me Gusta creada: ID ${likedPlaylist.id}`);
        }

        // Devolver la playlist creada o encontrada
        return res.json({ playlist: likedPlaylist });
    } catch (error) {
        console.error("Error en getOrCreateLikedPlaylist:", error);
        return res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};

export const likePlaylist = async (req, res) => {
    try {
        const { user_id } = req.body; // Asegurar que el user_id viene en el body
        const playlist_id = req.params.id ? parseInt(req.params.id, 10) : null;
        if (!playlist_id) {
            return res.status(400).json({ error: "ID de la playlist es inválido" });
        }

        console.log("Datos recibidos en la API:");
        console.log("user_id:", user_id);
        console.log("playlist_id:", playlist_id);

        if (!user_id || isNaN(playlist_id)) {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        console.log(`Intentando dar like/unlike: user_id=${user_id}, playlist_id=${playlist_id}`);

        // Buscar si ya existe la relación en `playlist_like`
        const existingLike = await db.playlist_like.findOne({
            where: { user_id: user_id, playlist_id: playlist_id }
        });

        if (existingLike) {
            console.log("Like ya existe, eliminándolo...");
            await db.playlist_like.destroy({
                where: { user_id, playlist_id }
            });

            return res.json({ message: "Like eliminado correctamente", liked: false });
        } else {
            console.log("Intentando insertar:", { user_id, playlist_id });

            const userIdNumber = Number(user_id);
            const playlistIdNumber = Number(playlist_id);

            console.log("Verificando tipos:", { userIdNumber, playlistIdNumber });

            const newLike = db.playlist_like.build({
                user_id: user_id,
                playlist_id: playlist_id,
                playlistId: playlist_id,
            });

            console.log(newLike);

            await newLike.save();

            console.log("Registro creado:", newLike);

            return res.json({ message: "Like agregado correctamente", liked: true, newLike });
        }
    } catch (error) {
        console.error("Error en likePlaylist:", error);
        return res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};

/**
 * Quitar like a una playlist.
 * DELETE /api/playlists/:id/like
 */
export const unlikePlaylist = async (req, res) => {
    try {
        const { user_id } = req.body;
        const playlist_id = Number(req.params.id);

        if (!user_id || isNaN(playlist_id)) {
            return res.status(400).json({ error: "Datos inválidos" });
        }

        const deleted = await db.playlist_like.destroy({
            where: { user_id: user_id, playlist_id: playlist_id }
        });

        if (!deleted) {
            return res.status(400).json({ error: "No has dado like a esta playlist" });
        }

        res.json({ message: "Like eliminado correctamente" });
    } catch (error) {
        console.error("Error al quitar like de la playlist:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**
 * Obtiene todas las playlists con typeP = "Vibra".
 * GET /api/playlists/vibra
 */
export const getVibraPlaylists = async (req, res) => {
    try {
        const vibraPlaylists = await db.playlist.findAll({
            where: { typeP: "Vibra" },
            attributes: ["id", "name", "front_page"] // Solo traer estos campos
        });

        res.json(vibraPlaylists);
    } catch (error) {
        console.error("Error al obtener las playlists de Vibra:", error);
        res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**
 * Obtiene una playlist por ID con sus canciones.
 * GET /api/playlists/:id
 */
export const getPlaylistById = async (req, res) => {
    try {
        const playlistId = Number(req.params.id);
        if (isNaN(playlistId)) {
            return res.status(400).json({ error: "ID inválido. Debe ser un número." });
        }

        const userId = req.query.userId ? Number(req.query.userId) : null;

        const pl = await db.playlist.findByPk(playlistId, {
            include: [
                {
                    model: db.song,
                    through: { attributes: ["date"] }, // Mantiene la fecha de la tabla intermedia
                    include: [
                        {
                            model: db.artist,
                            as: "artists",
                            through: { attributes: [] }, // Evita traer la tabla intermedia `song_artist`
                            attributes: ["id", "name"]
                        },
                        {
                            model: db.playlist,
                            through: { attributes: [] },
                            where: { typeP: "album" },
                            required: false,
                            as: "album"
                        },
                        {
                            model: db.user,
                            as: "likedBy",
                            through: { attributes: [] },
                            attributes: ["id"],
                            where: userId ? { id: userId } : undefined,
                            required: false
                        }
                    ]
                },
                {
                    model: db.user,
                    attributes: ["nickname"],
                }
            ]
        });

        const likes = await db.playlist_like.count({
            where: { playlist_id: playlistId }
        });

        // Convierte la playlist a JSON y actualiza las canciones
        let playlistData = pl.toJSON();

        playlistData.songs = playlistData.songs.map(song => ({
            ...song,
            liked: song.likedBy && song.likedBy.length > 0
        }));

        // Agrega la propiedad likes al objeto resultante
        const result = { ...playlistData, likes };

        console.log("Playlist obtenida:", JSON.stringify(result, null, 2));

        return res.status(200).json(result);
    } catch (error) {
        console.error("Error al obtener la playlist:", error);
        return res.status(500).json({ error: "Error al obtener la playlist", message: error.message });
    }
};

/**
 * Verifica si una playlist específica ha sido marcada como favorita por un usuario.
 *
 * Esta función realiza una solicitud GET al endpoint `/playlists/:id/like` con el ID de usuario
 * como parámetro de consulta para comprobar si existe una relación de "me gusta" entre
 * el usuario y la playlist especificada.
 *
 * @param playlistId El ID de la playlist a verificar
 * @param userId El ID del usuario para el cual se verifica el estado de favorito
 * @return true si la playlist está marcada como favorita por el usuario, false en caso contrario
 *         También devuelve false en caso de error en la solicitud
 *
 * @throws IOException Si ocurre un error durante la comunicación con el servidor
 */
export const checkIfLiked = async (req, res) => {
    const { id } = req.params;  // ID de la playlist
    const { user_id } = req.query;  // ID del usuario desde la query

    try {
        // Consulta en la base de datos si este usuario ha dado like a esta playlist
        const liked = await db.playlist_like.findOne({
            where: { user_id: user_id, playlist_id: id }
        });

        // Devolvemos si está liked o no
        res.json({ isLiked: liked ? true : false });
    } catch (error) {
        res.status(500).json({ error: 'Error al verificar like' });
    }
};


/**
 * Crea una nueva playlist.
 * POST /api/playlists
 */
export const createPlaylist = async (req, res) => {
    try {
        const { name, type, description, front_page, user_id, typeP } = req.body;

        // Crear la playlist con los datos proporcionados
        const newPlaylist = await db.playlist.create({
            name,
            type,
            description,
            front_page,
            user_id,
            typeP,
        });

        // Crear la relación entre el usuario y la playlist (si existe una tabla de permisos o relaciones)
        await db.permission_have.create({
            playlist_id: newPlaylist.id, // ID de la playlist recién creada
            user_id: user_id, // ID del usuario creador
            type_permission: "owner", // Asignar permisos de propietario al usuario
        });

        // Responder con la playlist creada
        res.status(201).json(newPlaylist);
    } catch (error) {
        console.error("Error al crear la playlist:", error);
        res.status(500).json({ error: error.message });
    }
};
/**
 * Actualiza una playlist por ID.
 * PUT /api/playlists/:id
 */
export const updatePlaylist = async (req, res) => {
    try {
        const { name, description, type, front_page } = req.body;
        const playlistId = Number(req.params.id);

        const pl = await db.playlist.findOne({ where: { id: playlistId } });
        if (!pl) return res.status(404).json({ message: "Playlist no encontrada" });

        await pl.update({ name, description, type, front_page });
        res.json(pl);
    } catch (error) {
        console.error("Error al actualizar la playlist:", error);
        res.status(500).json({ error: error.message });
    }
};

/**
 * Elimina una playlist por ID.
 * DELETE /api/playlists/:id
 */
export const deletePlaylist = async (req, res) => {
    try {
        const playlistId = Number(req.params.id);
        const pl = await db.playlist.findOne({ where: { id: playlistId } });

        if (!pl) return res.status(404).json({ message: "Playlist no encontrada" });

        await pl.destroy();
        res.json({ message: "Playlist eliminada con éxito" });
    } catch (error) {
        console.error("Error al eliminar la playlist:", error);
        res.status(500).json({ error: error.message });
    }
};

/**
 * Obtiene las playlists que un usuario ha dado like.
 * @param {Object} req - Objeto de solicitud, debe contener `userId` como parámetro.
 * @param {Object} res - Objeto de respuesta.
 */
export const getPlaylistLike = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ error: "El userId es obligatorio" });
        }

        // Obtener directamente las playlists a través de la relación many-to-many
        const user = await db.user.findByPk(userId, {
            include: [{
                model: db.playlist,
                through: { model: db.playlist_like },
                attributes: ["id", "name", "user_id", "artist_id", "description", "type", "typeP", "front_page"]
            }]
        });

        if (!user) {
            return res.status(404).json({ message: "Usuario no encontrado" });
        }

        if (user.playlists.length === 0) {
            return res.status(404).json({ message: "No hay playlists que hayas dado like" });
        }

        return res.status(200).json(user.playlists);
    } catch (error) {
        console.error("Error al obtener las playlists que el usuario ha dado like:", error.message);
        console.error(error.stack);
        return res.status(500).json({ error: "Error interno en el servidor" });
    }
};

/**
 * Obtiene la playlist de "Me Gusta" de un usuario específico.
 *
 * Esta función busca en la base de datos la playlist de tipo "Vibra_likedSong" asociada
 * al userId proporcionado en los parámetros de la solicitud. Si la playlist es encontrada,
 * se retorna como respuesta con un estado 200. Si no se encuentra la playlist o el `userId`
 * es inválido, se retorna un error con el código de estado correspondiente.
 *
 * @param {Object} req - El objeto de la solicitud HTTP, que contiene los parámetros de la misma.
 * @param {Object} res - El objeto de la respuesta HTTP, usado para enviar la respuesta al cliente.
 *
 * @returns {Object} - Respuesta HTTP con el estado y la información de la playlist o un mensaje de error.
 *
 * @throws {Error} - Si ocurre un error durante la ejecución del proceso, se captura y se retorna un
 *                   error 500 con un mensaje genérico de error interno del servidor.
 */
export const getLikedSongPlaylist = async (req, res) => {
    try {
        const { userId } = req.params;

        if (!userId) {
            return res.status(400).json({ error: "El userId es obligatorio" });
        }

        // Buscar la playlist de tipo "Vibra_likedSong" para el usuario específico
        const likedSongPlaylist = await db.playlist.findOne({
            where: { user_id: userId, typeP: 'Vibra_likedSong' },
            attributes: ["id", "name", "user_id", "artist_id", "description", "type", "typeP", "front_page"]
        });

        if (!likedSongPlaylist) {
            return res.status(404).json({ message: "No se encontró la playlist 'Me Gusta'" });
        }

        return res.status(200).json(likedSongPlaylist);
    } catch (error) {
        console.error("Error al obtener la playlist de Me Gusta:", error.message);
        console.error(error.stack);
        return res.status(500).json({ error: "Error interno en el servidor" });
    }
};

/**
* Retrieves all playlists created by a specific user, excluding the default "Me Gusta" playlist.
*
* @param {Object} req - Express request object containing the user ID in the URL parameters
* @param {Object} req.params - URL parameters object
* @param {string} req.params.userId - The ID of the user whose playlists are being retrieved
* @param {Object} res - Express response object
* @returns {Object} - JSON response containing either:
*                    - Status 200 and an array of playlist objects if successful
*                    - Status 400 and an error message if the user ID is invalid
*                    - Status 500 and an error message if a server error occurs
* @throws {Error} - If there's an issue with the database query
*/
export const getUserPlaylists = async (req, res) => {
    try {
        const userId = Number(req.params.userId);
        if (isNaN(userId)) {
            return res.status(400).json({ error: "ID inválido. Debe ser un número." });
        }

        const playlists = await db.playlist.findAll({
            where: {
                user_id: userId,
                name: {
                    [Op.ne]: "Me Gusta"  // Excluye la playlist con el nombre "Me Gusta"
                }
            }
        });

        console.log("Playlists del usuario", playlists);

        return res.status(200).json(playlists);
    } catch (error) {
        console.error("Error al obtener las playlists del usuario:", error);
        return res.status(500).json({ error: "Error al obtener las playlists", message: error.message });
    }
};

/**
* Adds a song to a specific playlist if it doesn't already exist in that playlist.
*
* @param {Object} req - Express request object
* @param {Object} req.params - URL parameters object
* @param {string} req.params.id - The ID of the playlist to add the song to
* @param {Object} req.body - Request body containing the song ID
* @param {number} req.body.songId - The ID of the song to be added to the playlist
* @param {Object} res - Express response object
* @returns {Object} - JSON response containing either:
*                    - Status 200, success message, and the new entry details if successful
*                    - Status 400 and an error message if the playlist ID is invalid, songId is missing, or the song already exists in the playlist
*                    - Status 500 and an error message if a server error occurs
* @throws {Error} - If there's an issue with the database query
*/
export const addSongToPlaylist = async (req, res) => {
    try {
        const playlistId = Number(req.params.id);
        const { songId } = req.body; // Asegúrate de que el frontend envíe { songId: ... }

        if (isNaN(playlistId) || !songId) {
            return res.status(400).json({ error: "ID de playlist inválido o songId no proporcionado." });
        }

        // Opcional: podrías verificar si la canción ya existe en la playlist para evitar duplicados.
        const exists = await db.song_playlist.findOne({
            where: { playlist_id: playlistId, song_id: songId }
        });
        if (exists) {
            return res.status(400).json({ error: "La canción ya está añadida a la playlist." });
        }

        // Crea el registro en la tabla intermedia, usando la fecha actual
        const newEntry = await db.song_playlist.create({
            playlist_id: playlistId,
            song_id: songId,
            date: new Date()
        });

        return res.status(200).json({ message: "Canción añadida a la playlist.", newEntry });
    } catch (error) {
        console.error("Error al añadir la canción a la playlist:", error);
        return res.status(500).json({ error: "Error al añadir la canción a la playlist", message: error.message });
    }
};

/**
* Removes a song from a specific playlist.
*
* @param {Object} req - Express request object
* @param {Object} req.params - URL parameters object
* @param {string} req.params.id - The ID of the playlist to remove the song from
* @param {Object} req.body - Request body containing the song ID
* @param {number} req.body.songId - The ID of the song to be removed from the playlist
* @param {Object} res - Express response object
* @returns {Object} - JSON response containing either:
*                    - Status 200 and success message if the song was successfully removed
*                    - Status 400 and an error message if the playlist ID is invalid or songId is missing
*                    - Status 404 and an error message if the song was not found in the playlist
*                    - Status 500 and an error message if a server error occurs
* @throws {Error} - If there's an issue with the database operation
*/
export const deleteSongToPlaylist = async (req, res) => {
    try {
        const playlistId = Number(req.params.id);
        const { songId } = req.body;

        if (isNaN(playlistId) || !songId) {
            return res.status(400).json({ error: "ID de playlist inválido o songId no proporcionado." });
        }

        // Intenta eliminar la entrada en la tabla intermedia
        const result = await db.song_playlist.destroy({
            where: { playlist_id: playlistId, song_id: songId }
        });

        if (result === 0) {
            return res.status(404).json({ error: "La canción no se encontró en la playlist." });
        }

        return res.status(200).json({ message: "Canción eliminada de la playlist." });
    } catch (error) {
        console.error("Error al eliminar la canción de la playlist:", error);
        return res.status(500).json({ error: "Error al eliminar la canción de la playlist", message: error.message });
    }
};

/**
 * Handles adding or removing a song from a playlist based on the operation type specified.
 *
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters object
 * @param {string} req.params.id - The ID of the playlist to modify
 * @param {string} req.params.operation - The operation to perform ('add' or 'remove')
 * @param {Object} req.body - Request body containing the song ID
 * @param {number} req.body.songId - The ID of the song to be added to or removed from the playlist
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response containing either:
 *                    - Status 200 and success message with operation details
 *                    - Status 400 and an error message if parameters are invalid
 *                    - Status 404 if the song was not found (for removal)
 *                    - Status 500 and an error message if a server error occurs
 * @throws {Error} - If there's an issue with the database operations
 */
export const handleSongToPlaylist = async (req, res) => {
    try {
        const playlistId = Number(req.params.id);
        const operation = req.params.operation; // 'add' or 'remove'
        const { songId } = req.body;

        if (isNaN(playlistId) || !songId) {
            return res.status(400).json({ error: "ID de playlist inválido o songId no proporcionado." });
        }

        if (operation !== 'add' && operation !== 'remove') {
            return res.status(400).json({ error: "Operación inválida. Debe ser 'add' o 'remove'." });
        }

        if (operation === 'add') {
            // Verificar si la canción ya existe en la playlist para evitar duplicados
            const exists = await db.song_playlist.findOne({
                where: { playlist_id: playlistId, song_id: songId }
            });

            if (exists) {
                return res.status(400).json({ error: "La canción ya está añadida a la playlist." });
            }

            // Crear el registro en la tabla intermedia
            const newEntry = await db.song_playlist.create({
                playlist_id: playlistId,
                song_id: songId,
                date: new Date()
            });

            return res.status(200).json({
                message: "Canción añadida a la playlist.",
                operation: "add",
                newEntry
            });
        } else {
            // Eliminar la entrada en la tabla intermedia
            const result = await db.song_playlist.destroy({
                where: { playlist_id: playlistId, song_id: songId }
            });

            if (result === 0) {
                return res.status(404).json({ error: "La canción no se encontró en la playlist." });
            }

            return res.status(200).json({
                message: "Canción eliminada de la playlist.",
                operation: "remove"
            });
        }
    } catch (error) {
        console.error(`Error al ${req.params.operation === 'add' ? 'añadir' : 'eliminar'} la canción de la playlist:`, error);
        return res.status(500).json({
            error: `Error al ${req.params.operation === 'add' ? 'añadir' : 'eliminar'} la canción de la playlist`,
            message: error.message
        });
    }
};

/**
 * Retrieves all playlists that contain a specific song.
 *
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters object
 * @param {string} req.params.songId - The ID of the song to search for in playlists
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response containing either:
 *                    - Status 200 and a list of playlists containing the song
 *                    - Status 400 and an error message if the song ID is invalid
 *                    - Status 404 if no playlists contain the specified song
 *                    - Status 500 and an error message if a server error occurs
 * @throws {Error} - If there's an issue with the database operations
 */
export const getPlaylistsBySongId = async (req, res) => {
    try {
        const songId = Number(req.params.songId);

        if (isNaN(songId)) {
            return res.status(400).json({ error: "ID de canción inválido." });
        }

        // Verificar si la canción existe
        const song = await db.song.findByPk(songId);
        if (!song) {
            return res.status(404).json({ error: "La canción especificada no existe." });
        }

        // Buscar todas las playlists que contienen esta canción
        const playlistsWithSong = await db.playlist.findAll({
            include: [{
                model: db.song,
                through: { attributes: [] },
                where: { id: songId },
                required: true
            }],
            order: [['name', 'ASC']] // Ordenar playlists por nombre
        });

        if (playlistsWithSong.length === 0) {
            return res.status(404).json({
                message: "No se encontraron playlists que contengan esta canción."
            });
        }

        return res.status(200).json({
            count: playlistsWithSong.length,
            playlists: playlistsWithSong
        });
    } catch (error) {
        console.error("Error al buscar playlists por ID de canción:", error);
        return res.status(500).json({
            error: "Error al buscar playlists por ID de canción",
            message: error.message
        });
    }
};

/**
 * Checks if a user is the owner of a playlist.
 *
 * @param {Object} req - Express request object
 * @param {Object} req.params - URL parameters object
 * @param {string} req.params.playlistId - The ID of the playlist to check
 * @param {string} req.params.userId - The ID of the user to check for ownership
 * @param {Object} res - Express response object
 * @returns {Object} - JSON response containing either:
 *                    - Status 200 and an ownership status (true/false)
 *                    - Status 400 and an error message if IDs are invalid
 *                    - Status 404 if the playlist doesn't exist
 *                    - Status 500 and an error message if a server error occurs
 * @throws {Error} - If there's an issue with the database operations
 */
export const checkPlaylistOwnership = async (req, res) => {
    try {
        const playlistId = Number(req.params.playlistId);
        const userId = Number(req.params.userId);

        if (isNaN(playlistId) || isNaN(userId)) {
            return res.status(400).json({
                error: "ID de playlist o ID de usuario inválido."
            });
        }

        // Verificar si la playlist existe
        const playlist = await db.playlist.findByPk(playlistId);
        if (!playlist) {
            return res.status(404).json({
                error: "La playlist especificada no existe."
            });
        }

        // Verificar si el usuario es el propietario de la playlist
        const isOwner = playlist.user_id === userId;

        return res.status(200).json({
            playlistId,
            userId,
            isOwner,
            playlist: {
                id: playlist.id,
                name: playlist.name,
                user_id: playlist.user_id
                // Puedes incluir más campos si es necesario
            }
        });
    } catch (error) {
        console.error("Error al verificar propiedad de playlist:", error);
        return res.status(500).json({
            error: "Error al verificar propiedad de playlist",
            message: error.message
        });
    }
};


/**
 * Registra la visita de un usuario a una playlist específica.
 * Si ya existe una visita previa del mismo usuario a la misma playlist, actualiza la fecha.
 * POST /api/playlists/:playlistId/visit
 *
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} res - Objeto de respuesta Express
 * @returns {Object} - Respuesta JSON con mensaje de éxito o error
 */
export const recordPlaylistVisit = async (req, res) => {
    try {
        // Obtenemos los datos necesarios
        const userId = req.body.userId; // Ahora lo recibimos del cuerpo de la petición
        const playlistId = Number(req.params.playlistId);

        // Validaciones básicas
        if (!userId) {
            return res.status(400).json({ error: "userId es requerido" });
        }

        if (isNaN(playlistId)) {
            return res.status(400).json({ error: "ID de playlist inválido" });
        }

        // Verificar si la playlist existe
        const playlist = await db.playlist.findByPk(playlistId);
        if (!playlist) {
            return res.status(404).json({ error: "Playlist no encontrada" });
        }

        // Buscar si ya existe una visita del usuario a esta playlist
        const existingVisit = await db.playlist_visit.findOne({
            where: {
                user_id: userId,
                playlist_id: playlistId
            }
        });

        const currentDate = new Date();
        let message = "";
        let statusCode = 200;

        if (existingVisit) {
            // Actualizar la visita existente
            await existingVisit.update({
                visited_at: currentDate
            });
            message = "Visita actualizada correctamente";
            statusCode = 200;
        } else {
            // Crear una nueva visita
            await db.playlist_visit.create({
                user_id: userId,
                playlist_id: playlistId,
                visited_at: currentDate
            });
            message = "Visita registrada correctamente";
            statusCode = 201; // Created
        }

        // Devolver respuesta exitosa
        return res.status(statusCode).json({
            message: message,
            data: {
                user_id: userId,
                playlist_id: playlistId,
                visited_at: currentDate
            }
        });
    } catch (error) {
        console.error('Error al registrar visita a playlist:', error);
        return res.status(500).json({
            error: "Error al registrar la visita",
            details: error.message
        });
    }
}


/**
 * Obtiene las últimas 8 playlists visitadas por un usuario, ordenadas por fecha descendente.
 * Si hay menos de 8 playlists visitadas, se completan con playlists aleatorias.
 *
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} req.params - Parámetros de la ruta
 * @param {string} req.params.userId - ID del usuario
 * @param {Object} res - Objeto de respuesta Express
 * @returns {Object} JSON con las playlists recientes o mensaje de error
 */
export const getRecentlyVisitedPlaylists = async (req, res) => {
    try {
        const userId = parseInt(req.params.userId);
        const limit = 8;

        // Validación básica del userId
        if (isNaN(userId)) {
            return res.status(400).json({
                success: false,
                message: 'ID de usuario no válido'
            });
        }

        // Consulta para obtener las playlists visitadas recientemente
        const recentVisits = await db.playlist_visit.findAll({
            where: { user_id: userId },
            include: [
                {
                    model: db.playlist,
                    required: true, // Solo incluir visitas con playlist existente
                    include: [{
                        model: db.user,
                        attributes: ['id', 'nickname', 'user_picture']
                    }]
                }
            ],
            order: [['visited_at', 'DESC']],
            limit: limit
        });

        // Formatear las playlists visitadas
        const recentPlaylists = recentVisits
            .filter(visit => visit.playlist) // Filtrar playlists nulas
            .map(visit => {
                const playlist = visit.playlist;
                const owner = playlist.user || {}; // Usar playlist.user en lugar de playlist.owner

                return {
                    id: playlist.id,
                    name: playlist.name,
                    description: playlist.description || '',
                    front_page: playlist.front_page || null,
                    type: playlist.type || 'playlist',
                    typeP: playlist.typeP || 'regular',
                    user_id: playlist.user_id || null,
                    artist_id: playlist.artist_id || null,
                    visited_at: visit.visited_at,
                    owner: {
                        id: owner.id || null,
                        nickname: owner.nickname || 'Usuario desconocido',
                        user_picture: owner.user_picture || null
                    }
                };
            });

        // Obtener IDs de playlists ya obtenidas (para no repetir en las aleatorias)
        const existingPlaylistIds = recentPlaylists.map(playlist => playlist.id);

        // Calculamos cuántas playlists aleatorias necesitamos
        const neededRandomPlaylists = limit - recentPlaylists.length;

        // Solo consultar playlists aleatorias si necesitamos más
        if (neededRandomPlaylists > 0) {
            // Opción alternativa si no funciona db.sequelize.literal
            const randomPlaylists = await db.playlist.findAll({
                where: {
                    id: existingPlaylistIds.length > 0 ?
                        { [Op.notIn]: existingPlaylistIds } :
                        {}
                },
                include: [{
                    model: db.user,
                    attributes: ['id', 'nickname', 'user_picture']
                }],
                limit: neededRandomPlaylists
            });

            // Mezclar aleatoriamente el resultado
            randomPlaylists.sort(() => Math.random() - 0.5);

            // Formateamos las playlists aleatorias
            const formattedRandomPlaylists = randomPlaylists.map(playlist => {
                const owner = playlist.user || {};

                return {
                    id: playlist.id,
                    name: playlist.name,
                    description: playlist.description || '',
                    front_page: playlist.front_page || null,
                    type: playlist.type || 'playlist',
                    typeP: playlist.typeP || 'regular',
                    user_id: playlist.user_id || null,
                    artist_id: playlist.artist_id || null,
                    visited_at: null, // No tienen fecha de visita
                    owner: {
                        id: owner.id || null,
                        nickname: owner.nickname || 'Usuario desconocido',
                        user_picture: owner.user_picture || null
                    }
                };
            });

            // Combinamos las playlists recientes con las aleatorias
            return res.status(200).json([...recentPlaylists, ...formattedRandomPlaylists]);
        }

        // Si no necesitamos aleatorias, devolvemos solo las recientes
        return res.status(200).json(recentPlaylists);

    } catch (error) {
        console.error('Error al obtener playlists recientes:', error);
        return res.status(500).json({
            success: false,
            message: 'Error interno al obtener playlists recientes',
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};