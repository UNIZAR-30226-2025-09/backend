import db from '#src/models/index';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';


/**
 * Invitar a un colaborador a una playlist
 */
/**
 * Invitar a un colaborador a una playlist
 */
export const inviteCollaborator = async (req, res) => {
    try {
        console.log("Recibiendo petición de invitación:", req.body);

        // Extraemos el token de autorización de las cabeceras
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        // Verificamos y decodificamos el token para obtener el ID del usuario autenticado
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');

        // Si no se puede decodificar el token, respondemos con error
        if (!decoded) {
            return res.status(401).json({ error: "Token inválido" });
        }

        // Obtenemos el ID del usuario autenticado (owner)
        const ownerId = decoded.id;
        console.log("Owner ID:", ownerId);

        // Extraemos los datos del cuerpo de la solicitud
        const { playlistId, userId } = req.body;
        console.log("Datos recibidos:", { playlistId, userId });

        // Validar que se proporcionen los IDs necesarios
        if (!playlistId || !userId) {
            return res.status(400).json({ error: "Se requieren playlistId y userId" });
        }

        // Verificar que no se está intentando invitar al propio dueño
        if (parseInt(userId) === parseInt(ownerId)) {
            return res.status(400).json({ error: "No puedes invitarte a ti mismo como colaborador" });
        }

        // Verificamos si la playlist existe
        const playlist = await db.playlist.findByPk(playlistId);
        if (!playlist) {
            return res.status(404).json({ error: "Playlist no encontrada" });
        }
        console.log("Playlist encontrada:", playlist.name);

        // Verificamos si la playlist es del tipo correcto
        if (playlist.typeP !== "playlist") {
            return res.status(403).json({ error: "No puedes invitar colaboradores a esta playlist" });
        }

        // Verificamos si el usuario actual es el propietario
        const isOwner = await db.permission_have.findOne({
            where: { playlist_id: playlistId, user_id: ownerId, type_permission: 'owner' }
        });

        if (!isOwner) {
            console.log("Usuario no es propietario:", ownerId);
            return res.status(403).json({ error: "No tienes permisos para invitar colaboradores a esta playlist" });
        }
        console.log("Usuario es propietario");

        // Verificamos si el usuario a invitar existe
        const user = await db.user.findByPk(userId);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        console.log("Usuario a invitar encontrado:", user.nickname);

        // Verificamos si el usuario ya tiene CUALQUIER tipo de permiso en esta playlist
        // Esto previene duplicados sin importar el rol que tenga (owner, collaborator, etc.)
        const existingPermission = await db.permission_have.findOne({
            where: { playlist_id: playlistId, user_id: userId }
        });

        if (existingPermission) {
            console.log("El usuario ya tiene permisos en esta playlist:", existingPermission.type_permission);
            return res.status(400).json({
                error: `El usuario ya tiene permisos en esta playlist (${existingPermission.type_permission})`
            });
        }

        // Registramos el intento de invitación para fines de auditoría
        console.log(`Invitación enviada: usuario ${ownerId} invita a ${userId} para la playlist ${playlistId}`);
        console.log(`Fecha y hora de la invitación: ${new Date().toISOString()}`);

        // Añadimos al colaborador
        console.log("Añadiendo colaborador...");
        const collaborator = await db.permission_have.create({
            playlist_id: playlistId,
            user_id: userId,
            type_permission: 'collaborator',
            created_at: new Date(),
            updated_at: new Date()
        });
        console.log("Colaborador añadido con éxito");

        // Respondemos con un mensaje de éxito y los detalles del colaborador añadido
        return res.status(201).json({
            message: "Colaborador invitado con éxito",
            collaborator: {
                playlist_id: collaborator.playlist_id,
                user_id: collaborator.user_id,
                type_permission: collaborator.type_permission,
                user: {
                    nickname: user.nickname
                }
            }
        });
    } catch (error) {
        // En caso de error, registramos el error en la consola y respondemos con un error 500
        console.error("Error al invitar colaborador:", error);

        // Verificamos si es un error de validación de token
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ error: "Token inválido o expirado" });
        }

        return res.status(500).json({
            error: "Error interno del servidor",
            details: process.env.NODE_ENV === 'development' ? error.message : undefined
        });
    }
};
/**
 * Eliminar a un colaborador de una playlist
 */
export const removeCollaborator = async (req, res) => {
    try {
        const { playlistId, userId } = req.body;
        const ownerId = req.user.id;

        // Verificar si el usuario actual es el propietario
        const isOwner = await db.permission_have.findOne({
            where: { playlist_id: playlistId, user_id: ownerId, type_permission: 'owner' }
        });

        if (!isOwner) {
            return res.status(403).json({ error: "No tienes permisos para eliminar colaboradores de esta playlist." });
        }

        // Eliminar al colaborador
        const deleted = await db.permission_have.destroy({
            where: { playlist_id: playlistId, user_id: userId, type_permission: 'collaborator' }
        });

        if (!deleted) {
            return res.status(404).json({ error: "El colaborador no fue encontrado en esta playlist." });
        }

        return res.status(200).json({ message: "Colaborador eliminado con éxito." });
    } catch (error) {
        console.error("Error al eliminar colaborador:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
};

/**
 * Obtener todos los colaboradores de una playlist
 */
export const getCollaborators = async (req, res) => {
    try {
        const playlistId = Number(req.params.playlistId);

        // Obtener los colaboradores
        const collaborators = await db.permission_have.findAll({
            where: { playlist_id: playlistId },
            include: [{
                model: db.user,
                as: 'User',
                attributes: ['id', 'nickname', 'user_picture']
            }]
        });

        return res.status(200).json(collaborators);
    } catch (error) {
        console.error("Error al obtener colaboradores:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
};

/**
 * Obtener playlists de un colaborador
 */
export const getCollaborativePlaylists = async (req, res) => {
    try {
        console.log("⭐ Endpoint colaborativo llamado con userId:", req.params.userId);

        const { userId } = req.params;

        // Verificar si el usuario existe
        const user = await db.user.findByPk(userId);
        if (!user) {
            console.log("❌ Usuario no encontrado:", userId);
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        console.log("✅ Usuario encontrado:", user.nickname);

        // Buscar los permisos donde el usuario es colaborador
        const collaboratorPermissions = await db.permission_have.findAll({
            where: {
                user_id: userId,
                type_permission: 'collaborator'
            }
        });

        // Si no hay permisos de colaborador, devolver array vacío
        if (!collaboratorPermissions || collaboratorPermissions.length === 0) {
            return res.status(200).json([]);
        }

        // Extraer los IDs de las playlists
        const playlistIds = collaboratorPermissions.map(perm => perm.playlist_id);

        // Buscar todas las playlists correspondientes - SIN INCLUIR MODELO USER PARA EVITAR EL ERROR
        const playlists = await db.playlist.findAll({
            where: {
                id: {
                    [Op.in]: playlistIds
                }
            }
            // Quitamos el include que causa el error
        });

        return res.status(200).json(playlists);
    } catch (error) {
        console.error("Error al obtener playlists colaborativas:", error);
        return res.status(500).json({ error: "Error interno del servidor", details: error.message });
    }
};