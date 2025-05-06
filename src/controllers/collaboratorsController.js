import db from '#src/models/index';
import jwt from 'jsonwebtoken';
import { Op } from 'sequelize';

/**
 * Invitar a un colaborador a una playlist
 */
export const inviteCollaborator = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: "Token no proporcionado" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');
        if (!decoded) return res.status(401).json({ error: "Token inválido" });

        const ownerId = decoded.id;
        const { playlistId, userId } = req.body;

        if (!playlistId || !userId) {
            return res.status(400).json({ error: "Se requieren playlistId y userId" });
        }

        if (parseInt(userId) === parseInt(ownerId)) {
            return res.status(400).json({ error: "No puedes invitarte a ti mismo como colaborador" });
        }

        const playlist = await db.playlist.findByPk(playlistId);
        if (!playlist) return res.status(404).json({ error: "Playlist no encontrada" });

        if (playlist.user_id !== ownerId) {
            return res.status(403).json({ error: "No tienes permisos para invitar colaboradores a esta playlist" });
        }

        const user = await db.user.findByPk(userId);
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

        const existingPermission = await db.permission_have.findOne({
            where: { playlist_id: playlistId, user_id: userId }
        });

        if (existingPermission) {
            return res.status(400).json({ error: "El usuario ya es colaborador de esta playlist" });
        }

        await db.permission_have.create({ playlist_id: playlistId, user_id: userId });

        return res.status(201).json({ message: "Colaborador invitado con éxito" });
    } catch (error) {
        console.error("Error al invitar colaborador:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**
 * Eliminar a un colaborador de una playlist
 */
export const removeCollaborator = async (req, res) => {
    try {
        const { playlistId, userId } = req.body;
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: "Token no proporcionado" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');
        if (!decoded) return res.status(401).json({ error: "Token inválido" });

        const ownerId = decoded.id;

        const playlist = await db.playlist.findByPk(playlistId);
        if (!playlist) return res.status(404).json({ error: "Playlist no encontrada" });

        if (playlist.user_id !== ownerId) {
            return res.status(403).json({ error: "No tienes permisos para eliminar colaboradores de esta playlist" });
        }

        const deleted = await db.permission_have.destroy({
            where: { playlist_id: playlistId, user_id: userId }
        });

        if (!deleted) {
            return res.status(404).json({ error: "El colaborador no fue encontrado en esta playlist" });
        }

        return res.status(200).json({ message: "Colaborador eliminado con éxito" });
    } catch (error) {
        console.error("Error al eliminar colaborador:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**
 * Obtener todos los colaboradores de una playlist
 */
export const getCollaborators = async (req, res) => {
    try {
        const playlistId = Number(req.params.playlistId);

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
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**
 * Obtener playlists de un colaborador
 */
export const getCollaborativePlaylists = async (req, res) => {
    try {
        const { userId } = req.params;

        const user = await db.user.findByPk(userId);
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

        const collaboratorPermissions = await db.permission_have.findAll({
            where: { user_id: userId }
        });

        if (!collaboratorPermissions || collaboratorPermissions.length === 0) {
            return res.status(200).json([]);
        }

        const playlistIds = collaboratorPermissions.map(perm => perm.playlist_id);

        const playlists = await db.playlist.findAll({
            where: { id: { [Op.in]: playlistIds } }
        });

        return res.status(200).json(playlists);
    } catch (error) {
        console.error("Error al obtener playlists colaborativas:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};