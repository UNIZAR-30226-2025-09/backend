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