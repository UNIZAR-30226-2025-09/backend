
import jwt from 'jsonwebtoken';
import db from "#src/models/index";
import { Op, Sequelize } from "sequelize";

/**
 * Invitar a un colaborador a una playlist mediante un mensaje de chat
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

        // Verificar si ya existe un mensaje de invitación pendiente
        const existingInvitation = await db.chat.findOne({
            where: {
                user1_id: ownerId,
                user2_id: userId,
                "shared_content.type": "collaboration_request",
                "shared_content.playlist_id": playlistId,
            },
        });

        if (existingInvitation) {
            return res.status(400).json({ error: "Ya existe una invitación pendiente para esta playlist" });
        }

        // Enviar invitación como mensaje de chat
        await db.chat.create({
            user1_id: ownerId,
            user2_id: userId,
            txt_message: `Te invito a colaborar en la playlist "${playlist.name}".`,
            sent_at: new Date(),
            read: false,
            shared_content: {
                type: "collaboration_request",
                playlist_id: playlistId,
                playlist_name: playlist.name,
            },
        });

        return res.status(201).json({ message: "Invitación enviada con éxito" });

    } catch (error) {
        console.error("Error al invitar colaborador:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**

 * Obtener invitaciones pendientes para una playlist específica
 */


// Then update your getPendingInvitations function with the correct include statement:
// Tus asociaciones ya están correctamente definidas:
//
// Chat.associate = (models) => {
//     Chat.belongsTo(models.user, {
//       foreignKey: 'user1_id',
//       as: 'sender',
//       targetKey: 'id',
//       constraints: false
//     });
//
//     Chat.belongsTo(models.user, {
//       foreignKey: 'user2_id',
//       as: 'receiver',
//       targetKey: 'id',
//       constraints: false
//     });
// };
//
// Solo asegúrate de que también tienes las asociaciones recíprocas en el modelo User:

// Then update your getPendingInvitations function with the correct include statement:
export const getPendingInvitations = async (req, res) => {
    try {
        console.log("🔍 Iniciando getPendingInvitations");

        const token = req.headers.authorization?.split(' ')[1];
        console.log("Token presente:", !!token);

        if (!token) return res.status(401).json({ error: "Token no proporcionado" });

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');
            console.log("✅ Token decodificado correctamente, ID de usuario:", decoded.id);

            if (!decoded) return res.status(401).json({ error: "Token inválido" });

            const ownerId = decoded.id;
            const playlistId = Number(req.params.playlistId);
            console.log("Buscando invitaciones para playlist:", playlistId, "del propietario:", ownerId);

            if (!playlistId) {
                return res.status(400).json({ error: "Se requiere playlistId" });
            }

            // Verificar propiedad de la playlist
            console.log("Verificando propiedad de la playlist");
            const playlist = await db.playlist.findByPk(playlistId);
            console.log("Playlist encontrada:", !!playlist, playlist ? `propietario: ${playlist.user_id}` : "no encontrada");

            if (!playlist) return res.status(404).json({ error: "Playlist no encontrada" });

            if (playlist.user_id !== ownerId) {
                console.log("⛔ Permiso denegado: el usuario no es propietario de la playlist");
                return res.status(403).json({ error: "No tienes permisos para ver invitaciones de esta playlist" });
            }

            // Buscar invitaciones pendientes
            console.log("Consulta para buscar invitaciones:", {
                user1_id: ownerId,
                "shared_content.type": "collaboration_request",
                "shared_content.playlist_id": playlistId
            });

            // Verificar si la tabla chat tiene la estructura esperada
            console.log("Estructura de tabla chat:", Object.keys(db.chat.rawAttributes).join(", "));

            const pendingInvitations = await db.chat.findAll({
                where: {
                    user1_id: ownerId,
                    // Usar la sintaxis correcta para consultar campos JSONB en PostgreSQL
                    [Sequelize.Op.and]: [
                        Sequelize.literal(`shared_content->>'type' = 'collaboration_request'`),
                        Sequelize.literal(`(shared_content->>'playlist_id')::integer = ${playlistId}`)
                    ]
                },
                attributes: [
                    'id',
                    'user1_id',
                    'user2_id',
                    'txt_message',
                    'sent_at',
                    'shared_content'
                ],
                include: [
                    {
                        model: db.user,
                        as: 'receiver', // Cambiado a 'receiver' para coincidir con la asociación definida
                        attributes: ['id', 'nickname', 'user_picture'],
                    },
                ],
            });

            console.log("Invitaciones pendientes encontradas:", pendingInvitations.length);
            if (pendingInvitations.length > 0) {
                console.log("Primera invitación:",
                    `ID: ${pendingInvitations[0].id}, ` +
                    `shared_content: ${JSON.stringify(pendingInvitations[0].shared_content)}`);
            }

            // Transformar datos para el frontend con manejo seguro de propiedades
            console.log("Transformando datos de invitaciones");
            const formattedInvitations = pendingInvitations.map(invitation => {
                try {
                    return {
                        id: invitation.id,
                        userId: invitation.user2_id,
                        nickname: invitation.receiver?.nickname || 'Usuario desconocido',
                        userPicture: invitation.receiver?.user_picture || null,
                        message: invitation.txt_message || '',
                        sentAt: invitation.sent_at || new Date(),
                        playlistId: invitation.shared_content?.playlist_id || playlistId,
                        playlistName: invitation.shared_content?.playlist_name || 'Playlist sin nombre'
                    };
                } catch (mapError) {
                    console.error("Error al transformar invitación:", mapError, "invitación:", invitation);
                    // Devolver objeto con valores predeterminados
                    return {
                        id: invitation.id || 0,
                        userId: invitation.user2_id || 0,
                        nickname: 'Error al cargar usuario',
                        userPicture: null,
                        message: '',
                        sentAt: new Date(),
                        playlistId: playlistId,
                        playlistName: 'Error al cargar nombre'
                    };
                }
            });

            console.log("✅ Invitaciones formateadas:", formattedInvitations.length);
            return res.status(200).json({ pendingInvitations: formattedInvitations });

        } catch (jwtError) {
            console.error("❌ Error en verificación de JWT:", jwtError);
            return res.status(401).json({ error: "Token inválido" });
        }
    } catch (error) {
        console.error("❌ Error al obtener invitaciones pendientes:", error);
        console.error("Tipo de error:", error.name);
        console.error("Mensaje:", error.message);
        console.error("Stack:", error.stack);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};
/**
 * Aceptar una invitación a colaborar en una playlist
 */
export const acceptCollaboration = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: "Token no proporcionado" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');
        if (!decoded) return res.status(401).json({ error: "Token inválido" });

        const recipientId = decoded.id;
        const { playlistId } = req.body;

        if (!playlistId) {
            return res.status(400).json({ error: "Se requiere playlistId" });
        }

        // Verificar que existe la invitación en el chat
        const invitation = await db.chat.findOne({
            where: {
                user2_id: recipientId,
                "shared_content.type": "collaboration_request",
                "shared_content.playlist_id": playlistId,
            },
        });

        if (!invitation) {
            return res.status(404).json({ error: "La invitación no fue encontrada o ya fue procesada" });
        }

        // Añadir al colaborador
        await db.permission_have.create({ playlist_id: playlistId, user_id: recipientId });

        // Eliminar el mensaje de invitación
        await invitation.destroy();

        return res.status(200).json({ message: "Invitación aceptada con éxito" });
    } catch (error) {
        console.error("Error al aceptar colaboración:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**
 * Rechazar una invitación a colaborar en una playlist
 */
export const rejectCollaboration = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) return res.status(401).json({ error: "Token no proporcionado" });

        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');
        if (!decoded) return res.status(401).json({ error: "Token inválido" });

        const recipientId = decoded.id;
        const { playlistId } = req.body;

        if (!playlistId) {
            return res.status(400).json({ error: "Se requiere playlistId" });
        }

        // Verificar que existe la invitación en el chat
        const invitation = await db.chat.findOne({
            where: {
                user2_id: recipientId,
                "shared_content.type": "collaboration_request",
                "shared_content.playlist_id": playlistId,
            },
        });

        if (!invitation) {
            return res.status(404).json({ error: "La invitación no fue encontrada o ya fue procesada" });
        }

        // Eliminar el mensaje de invitación
        await invitation.destroy();

        return res.status(200).json({ message: "Invitación rechazada con éxito" });
    } catch (error) {
        console.error("Error al rechazar colaboración:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};

/**

 * Eliminar a un colaborador de una playlist
 */
export const removeCollaborator = async (req, res) => {
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


        const playlist = await db.playlist.findByPk(playlistId);
        if (!playlist) return res.status(404).json({ error: "Playlist no encontrada" });

        if (playlist.user_id !== ownerId) {
            return res.status(403).json({ error: "No tienes permisos para eliminar colaboradores de esta playlist" });
        }

        const deleted = await db.permission_have.destroy({

            where: { playlist_id: playlistId, user_id: userId },

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


        if (!playlistId) {
            return res.status(400).json({ error: "Se requiere playlistId" });
        }

        const collaborators = await db.permission_have.findAll({
            where: { playlist_id: playlistId },
            include: [
                {
                    model: db.user,
                    as: 'User',
                    attributes: ['id', 'nickname', 'user_picture'],
                },
            ],
        });

        return res.status(200).json({ collaborators });
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
            where: { user_id: userId },

        });

        if (!collaboratorPermissions || collaboratorPermissions.length === 0) {
            return res.status(200).json([]);
        }


        const playlistIds = collaboratorPermissions.map((perm) => perm.playlist_id);

        // Modificación: excluir playlists donde el usuario es propietario
        const playlists = await db.playlist.findAll({
            where: {
                id: { [Op.in]: playlistIds },
                user_id: { [Op.ne]: userId } // Esta línea es la clave: excluir playlists propias
            },
        });

        return res.status(200).json(playlists);
    } catch (error) {
        console.error("Error al obtener playlists colaborativas:", error);
        return res.status(500).json({ error: "Error interno del servidor" });
    }
};