import jwt from 'jsonwebtoken';
import db from "#src/models/index";
import { Op } from 'sequelize';

// Controlador para enviar solicitud de amistad
// Este controlador maneja el envío de solicitudes de amistad entre dos usuarios. Recibe los
// IDs de los usuarios involucrados, verifica si ambos existen, y si no hay solicitudes
// previas, crea una nueva solicitud en la base de datos.
// user1 es el sender y user2 es el receiver
export const sendFriendRequest = async (req, res) => {
    try {
        // Extraemos el token de autorización de las cabeceras
        const token = req.headers.authorization?.split(' ')[1];  // Obtenemos el token del header 'Authorization'

        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        // Verificamos y decodificamos el token para obtener el ID del usuario autenticado
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');

        // Si no se puede decodificar el token, respondemos con error
        if (!decoded) {
            return res.status(401).json({ error: "Token inválido" });
        }

        // Obtenemos el ID del usuario autenticado (user1)
        const user1_id = decoded.id;

        // Extraemos el ID del segundo usuario (user2) desde el cuerpo de la solicitud
        const { user2_id } = req.body;

        // Verificamos que el usuario no esté intentando enviarse una solicitud a sí mismo
        if (user1_id === user2_id) {
            return res.status(400).json({ error: "Ya existe una solicitud de amistad entre estos usuarios" });
        }

        // Verificamos si ambos usuarios existen en la base de datos
        const user1 = await db.user.findByPk(user1_id);
        const user2 = await db.user.findByPk(user2_id);

        // Si uno de los usuarios no existe, respondemos con un error 404
        if (!user1 || !user2) {
            return res.status(404).json({ error: "Uno o ambos usuarios no existen" });
        }

        // Verificamos si ya existe una solicitud de amistad entre los dos usuarios
        const existingRequest = await db.friendship.findOne({
            where: {
                // Buscamos en ambas direcciones, para cubrir ambas combinaciones de usuarios (user1 -> user2 y user2 -> user1)
                [Op.or]: [
                    { user1_id, user2_id },
                    { user1_id: user2_id, user2_id: user1_id }
                ]
            }
        });

        // Si ya existe una solicitud, devolvemos un error 400 indicando que ya hay una solicitud pendiente
        if (existingRequest) {
            return res.status(400).json({ error: "Ya existe una solicitud de amistad entre estos usuarios" });
        }

        // Si no existe una solicitud, creamos una nueva en la tabla de amistad
        const newFriendship = await db.friendship.create({
            user1_id,              // ID del primer usuario (sender)
            user2_id,              // ID del segundo usuario (receiver)
            state_friend_request: 'pending'  // El estado inicial de la solicitud será "pendiente"
        });

        // Respondemos con un mensaje de éxito y los detalles de la solicitud de amistad creada
        return res.status(201).json({
            message: "Solicitud de amistad enviada correctamente",
            friendship: newFriendship  // Información de la nueva solicitud
        });
    } catch (error) {
        // En caso de error, registramos el error en la consola y respondemos con un error 500
        console.error("Error al enviar solicitud de amistad:", error);
        return res.status(500).json({ error: "Error al enviar solicitud de amistad", details: error.message });
    }
};

// Controlador para aceptar solicitud de amistad
// Este controlador maneja la aceptación de solicitudes de amistad. Solo el receptor (user2)
// puede aceptar una solicitud. Verifica que la solicitud exista y esté en estado pendiente,
// y la actualiza a estado "accepted".
export const acceptFriendRequest = async (req, res) => {
    try {
        // Extraemos el token de autorización de las cabeceras
        const token = req.headers.authorization?.split(' ')[1];  // Obtenemos el token del header 'Authorization'

        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        // Verificamos y decodificamos el token para obtener el ID del usuario autenticado
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');

        // Si no se puede decodificar el token, respondemos con error
        if (!decoded) {
            return res.status(401).json({ error: "Token inválido" });
        }

        // Obtenemos el ID del usuario autenticado que debe ser el receptor (user2)
        const user2_id = decoded.id;

        // Extraemos el ID del remitente (user1) desde el cuerpo de la solicitud
        const { user1_id } = req.body;

        // Buscamos la solicitud de amistad donde el usuario autenticado es el receptor
        const friendship = await db.friendship.findOne({
            where: {
                user1_id: user1_id,
                user2_id: user2_id,
                state_friend_request: 'pending'  // La solicitud debe estar pendiente
            }
        });

        // Si no existe la solicitud de amistad o no está pendiente
        if (!friendship) {
            return res.status(404).json({
                error: "Solicitud de amistad no encontrada o no tienes permisos para aceptarla"
            });
        }

        // Actualizamos el estado de la solicitud a "accepted"
        await friendship.update({ state_friend_request: 'accepted' });

        // Respondemos con un mensaje de éxito y los detalles de la solicitud actualizada
        return res.status(200).json({
            message: "Solicitud de amistad aceptada correctamente",
            friendship: friendship  // Información de la solicitud actualizada
        });

    } catch (error) {
        // En caso de error, registramos el error en la consola y respondemos con un error 500
        console.error("Error al aceptar solicitud de amistad:", error);
        return res.status(500).json({
            error: "Error al aceptar solicitud de amistad",
            details: error.message
        });
    }
};

// Controlador para rechazar o eliminar solicitud de amistad
// Este controlador maneja el rechazo o eliminación de solicitudes de amistad. Cualquiera de los
// dos usuarios involucrados (sender o receiver) puede eliminar la solicitud. Verifica que la
// solicitud exista y la elimina de la base de datos.
export const rejectFriendRequest = async (req, res) => {
    try {
        // Extraemos el token de autorización de las cabeceras
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        // Verificamos y decodificamos el token para obtener el ID del usuario autenticado
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');

        if (!decoded) {
            return res.status(401).json({ error: "Token inválido" });
        }

        // Obtenemos el ID del usuario autenticado
        const userId = decoded.id;

        // Extraemos el ID del otro usuario involucrado en la solicitud
        const { friendId } = req.body;

        // Buscamos la solicitud de amistad que involucre a ambos usuarios
        const friendship = await db.friendship.findOne({
            where: {
                [Op.or]: [
                    { user1_id: userId, user2_id: friendId },
                    { user1_id: friendId, user2_id: userId }
                ]
            }
        });

        // Si no existe la solicitud de amistad
        if (!friendship) {
            return res.status(404).json({ error: "Solicitud de amistad no encontrada" });
        }

        // Verificamos que la solicitud esté en estado pendiente
        if (friendship.state_friend_request !== 'pending') {
            return res.status(400).json({
                error: "No se puede eliminar una relación de amistad ya establecida"
            });
        }

        // Eliminamos la solicitud de amistad pendiente
        await db.friendship.destroy({
            where: {
                [Op.or]: [
                    { user1_id: userId, user2_id: friendId },
                    { user1_id: friendId, user2_id: userId }
                ]
            }
        });

        // Respondemos con un mensaje de éxito
        return res.status(200).json({
            message: "Solicitud de amistad eliminada correctamente"
        });

    } catch (error) {
        console.error("Error al rechazar solicitud de amistad:", error);
        return res.status(500).json({
            error: "Error al rechazar solicitud de amistad",
            details: error.message
        });
    }
};

// Controlador para buscar usuarios por nickname similar que no sean amigos
// Este controlador permite buscar usuarios cuyo nickname contenga un texto de búsqueda
// y que no sean amigos (state_friend_request !== 'accepted') del usuario autenticado.
export const searchNewFriends = async (req, res) => {
    try {
        // Extraemos el token de autorización de las cabeceras
        const token = req.headers.authorization?.split(' ')[1];

        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        // Verificamos y decodificamos el token para obtener el ID del usuario autenticado
        const decoded = jwt.verify(token, process.env.JWT_SECRET || 'aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z');

        if (!decoded) {
            return res.status(401).json({ error: "Token inválido" });
        }

        // Obtenemos el ID del usuario autenticado
        const userId = decoded.id;

        // Extraemos el texto de búsqueda de los parámetros de consulta
        const { search } = req.query;

        if (!search) {
            return res.status(400).json({ error: "Debes proporcionar un término de búsqueda" });
        }

        // Primero, obtenemos todos los IDs de los usuarios que ya son amigos (estado 'accepted')
        const friendships = await db.friendship.findAll({
            where: {
                [Op.or]: [
                    { user1_id: userId },
                    { user2_id: userId }
                ],
                state_friend_request: 'accepted'
            }
        });

        // Extraemos los IDs de los amigos
        const friendIds = friendships.map(friendship =>
            friendship.user1_id === userId ? friendship.user2_id : friendship.user1_id
        );

        // Añadimos nuestro propio ID para excluirnos de los resultados
        friendIds.push(userId);

        // Buscamos usuarios cuyo nickname coincida parcialmente con el texto de búsqueda
        // y que no estén en la lista de amigos ni sean el propio usuario
        const potentialFriends = await db.user.findAll({
            where: {
                nickname: {
                    [Op.iLike]: `%${search}%` // Búsqueda case-insensitive
                },
                id: {
                    [Op.notIn]: friendIds
                }
            },
            attributes: ['id', 'nickname', 'user_picture'] // Solo devolvemos información básica
        });

        // Respondemos con la lista de usuarios encontrados
        return res.status(200).json({
            users: potentialFriends,
            count: potentialFriends.length
        });

    } catch (error) {
        console.error("Error al buscar usuarios:", error);
        return res.status(500).json({
            error: "Error al buscar usuarios",
            details: error.message
        });
    }
};