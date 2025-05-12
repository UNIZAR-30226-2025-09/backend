import db from "#src/models/index";
import bcrypt from "bcryptjs"; // Importamos bcrypt para el hashing de contraseñas
import jwt from "jsonwebtoken";
import path from 'path';
import { Op, Sequelize } from "sequelize"; // Asegúrate de importar Sequelize
import { fileURLToPath } from 'url';
import { appendFile, open, readFile } from 'fs/promises';
import nodemailer from 'nodemailer'; // Importamos nodemailer para el envío de correos electrónicos
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SECRET_KEY = "aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z";

/**
 * Registro de usuario
 *
 * - Recibe: `nickname`, `password`, `mail`, `style_fav`
 * - Verifica si el correo ya está registrado.
 * - Verifica si el nickname ya está registrado.
 * - Hashea la contraseña antes de almacenarla en la base de datos.
 * - Devuelve un mensaje de éxito con los datos del usuario registrado.
 */
export const registerUser = async (req, res) => {
    const { nickname, password, mail, style_fav} = req.body;
    const is_premium = false;

    try {
        // Verificar si el correo electrónico ya existe en la base de datos
        const mailExists = await db.user.findOne({ where: { mail } });

        if (mailExists) {
            return res.status(400).json({ error: "Correo ya registrado"});
        }

        // Verificar si el nickname ya existe en la base de datos
        const nicknameExists = await db.user.findOne({ where: { nickname } });

        if (nicknameExists) {
            return res.status(409).json({ error: "Nombre de usuario ya registrado"});
        }

        // Hashear la contraseña antes de guardarla
        const salt = await bcrypt.genSalt(10); // Generamos un salt (valor aleatorio para mayor seguridad)
        const hashedPassword = await bcrypt.hash(password, salt); // Hasheamos la contraseña con el salt

        // Crear nuevo usuario con la contraseña encriptada
        const newUser = await db.user.create({
            nickname,
            password: hashedPassword, // Guardamos la contraseña hasheada
            mail,
            style_fav,
            is_premium,
            daily_skips: 5, // Valor por defecto
        });

        res.status(201).json({ message: "Usuario registrado con éxito", user: newUser });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ error: "Error al registrar usuario" });
    }
};

/**
 * Inicio de sesión de usuario
 *
 * - Recibe: `mail`, `password`
 * - Busca el usuario en la base de datos por su correo.
 * - Verifica la contraseña utilizando `bcrypt.compare()`.
 * - Si es correcta, devuelve un mensaje de éxito.
 * - Si es incorrecta, devuelve un error de autenticación.
 */
export const loginUser = async (req, res) => {
    const { mail, password } = req.body;

    const foundUser = await db.user.findOne({ where: { mail } });

    if (!foundUser) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const validPassword = await bcrypt.compare(password, foundUser.password);
    if (!validPassword) {
        return res.status(401).json({ error: "Contraseña incorrecta" });
    }

    // Verificar si el usuario ya está conectado
    if (foundUser.is_connected) {
        return res.status(403).json({
            error: "Esta cuenta ya está siendo utilizada en otro dispositivo"
        });
    }

    try {
        // Marcar al usuario como conectado
        await foundUser.update({ is_connected: true });

        // Generar el token
        const token = jwt.sign(
            { id: foundUser.id, mail: foundUser.mail },
            SECRET_KEY,
            { expiresIn: "7d" }
        );

        // Log para depuración en servidor
        console.log("Token generado:", token);

        // Enviar token en la cabecera
        res.setHeader("Authorization", `Bearer ${token}`);
        res.setHeader("Access-Control-Expose-Headers", "Authorization");

        // Prueba si el backend realmente está ejecutando este código
        return res.status(200).json({
            message: `Login Exitoso`,  // Aquí debe verse el token
            token,  // También lo enviamos con clave "token"
            user: {
                id: foundUser.id,
                nickname: foundUser.nickname,
                password: foundUser.password,
                mail: foundUser.mail,
                style_fav: foundUser.style_fav,
                is_premium: foundUser.is_premium
            }
        });

    } catch (error) {
        console.error("Error en el login:", error);
        return res.status(500).json({ error: "Error en el login" });
    }
};

/**
 * Cierre de sesión de usuario
 *
 * - No hace nada en el backend porque los JWT no se pueden invalidar.
 * - Simplemente devuelve una respuesta de éxito.
 * - El frontend debe eliminar el token localmente para "cerrar sesión".
 */
export const logoutUser = async (req, res) => {
    try {
        // Obtener el ID del usuario del token
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) {
            return res.status(200).json({ message: "Sesión cerrada correctamente" });
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        if (decoded && decoded.id) {
            // Actualizar el estado de conexión
            await db.user.update(
                { is_connected: false },
                { where: { id: decoded.id } }
            );
        }

        return res.status(200).json({ message: "Sesión cerrada correctamente" });
    } catch (error) {
        console.error("Error al cerrar sesión:", error);
        // Aún así devolvemos éxito para el cliente
        return res.status(200).json({ message: "Sesión cerrada correctamente" });
    }
};

/**
 * Obtiene la información del usuario autenticado (sin devolver la contraseña).
 */
export const getUserProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await db.user.findByPk(decoded.id, {
            attributes: ["id", "nickname", "mail", "style_fav", "is_premium", "user_picture", "daily_skips"] // No devolver la contraseña
        });

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        return res.status(200).json(user);
    } catch (error) {
        console.error("Error al obtener el perfil:", error);
        return res.status(500).json({ error: "Error al obtener el perfil" });
    }
};

// Actualiza la información del usuario autenticado.
// Requiere token de autenticación.
// Requiere contraseña actual para validar la identidad del usuario.
// Permite actualizar nickname, mail y password.
// Valida que no existan usuarios con el mismo correo o nickname
export const updateUserProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ error: "Token no proporcionado" });

        let decoded;
        try {
            decoded = jwt.verify(token, SECRET_KEY);
        } catch (error) {
            return res.status(403).json({ error: "Token inválido o expirado" });
        }

        const user = await db.user.findByPk(decoded.id);
        if (!user) return res.status(404).json({ error: "Usuario no encontrado" });

        const { currentPassword, nickname, mail, password } = req.body;

        // Verificar que se proporcionó la contraseña actual
        if (!currentPassword) {
            return res.status(400).json({ error: "Debes proporcionar tu contraseña actual para actualizar tu perfil" });
        }

        // Verificar que la contraseña actual es correcta
        const validPassword = await bcrypt.compare(currentPassword, user.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Contraseña actual incorrecta" });
        }

        if (!nickname && !mail && !password) {
            return res.status(422).json({ error: "Debes proporcionar al menos un campo para actualizar" });
        }

        // Verificar si el correo ya existe
        if (mail && mail !== user.mail) {
            const mailExists = await db.user.findOne({ where: { mail } });
            if (mailExists) {
                return res.status(400).json({ error: "Correo ya registrado" });
            }
        }

        // Verificar si el nickname ya existe
        if (nickname && nickname !== user.nickname) {
            const nicknameExists = await db.user.findOne({ where: { nickname } });
            if (nicknameExists) {
                return res.status(409).json({ error: "Nombre de usuario ya registrado" });
            }
        }

        if (nickname) user.nickname = nickname;
        if (mail) user.mail = mail;
        if (password && password.trim() !== "") {
            user.password = await bcrypt.hash(password, 10);
        }

        await user.save();

        // No enviamos la contraseña en la respuesta por seguridad
        const userResponse = {
            id: user.id,
            nickname: user.nickname,
            mail: user.mail,
            style_fav: user.style_fav,
            is_premium: user.is_premium
        };

        return res.status(200).json({ message: "Perfil actualizado correctamente", user: userResponse });
    } catch (error) {
        console.error("Error al actualizar perfil:", error);
        return res.status(500).json({ error: "Error al actualizar perfil" });
    }
};

/**
 * Actualiza el estado de `is_premium` del usuario autenticado.
 * 
 * - Requiere autenticación con token JWT.
 * - Recibe `is_premium` en el body para actualizar el estado.
 * - Devuelve el nuevo estado del usuario.
 */
export const updatePremiumStatus = async (req, res) => {
    try {
        // Obtener el token de la cabecera
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        const token = authHeader.split(" ")[1];
        if (!token) {
            return res.status(401).json({ error: "Token inválido" });
        }

        // Verificar el token y obtener el ID del usuario
        let decoded;
        try {
            decoded = jwt.verify(token, SECRET_KEY);
        } catch (err) {
            console.error("Error al verificar el token:", err);
            return res.status(401).json({ error: "Token inválido o expirado" });
        }

        // Buscar usuario en la BD
        const user = await db.user.findByPk(decoded.id);
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Extraer el nuevo valor de `is_premium`
        const { is_premium } = req.body;
        if (typeof is_premium !== "boolean") {
            return res.status(400).json({ error: "El valor de 'is_premium' debe ser booleano (true/false)" });
        }

        // Verificar si realmente se necesita actualizar
        if (user.is_premium === is_premium) {
            return res.status(200).json({ 
                message: `El usuario ya está en el estado ${is_premium ? "Premium" : "Gratuito"}`, 
                user: { id: user.id, nickname: user.nickname, mail: user.mail, is_premium: user.is_premium }
            });
        }

        // Actualizar el estado en la BD
        console.log(`Cambiando is_premium de ${user.is_premium} a ${is_premium}`);
        user.is_premium = is_premium;
        await user.save();

        return res.status(200).json({
            message: `Estado actualizado a: ${is_premium ? "Premium" : "Gratuito"}`,
            user: {
                id: user.id,
                nickname: user.nickname,
                mail: user.mail,
                is_premium: user.is_premium
            }
        });

    } catch (error) {
        console.error("Error al actualizar estado de premium:", error);
        return res.status(500).json({ error: "Error interno al actualizar el estado de premium" });
    }
};

/**
 * Verifica si un correo electrónico ya está registrado.
 *
 * @param {Object} req - La solicitud que contiene el correo electrónico.
 * @param {Object} res - La respuesta para devolver si el correo ya está registrado o no.
 */
export const checkEmailExistence = async (req, res) => {
    const { mail } = req.body; // Extraer el correo electrónico del cuerpo de la solicitud

    try {
        // Buscar un usuario con ese correo en la base de datos
        const user = await db.user.findOne({ where: { mail } });

        if (user) {
            // Si el correo existe, devolver una respuesta con 'exists: true'
            return res.json({ exists: true });
        }

        // Si el correo no existe, devolver 'exists: false'
        return res.json({ exists: false });
    } catch (error) {
        console.error("Error al verificar el correo:", error);
        return res.status(500).json({ error: "Error en la base de datos" });
    }
};

/**
 * Obtiene los datos de un usuario a partir de su ID.
 *
 * @param {Object} req - El objeto de la solicitud, que contiene los parámetros de la URL.
 * @param {Object} res - El objeto de la respuesta que se enviará de vuelta al cliente.
 * @returns {Object} - Responde con un objeto JSON que contiene los datos del usuario si se encuentra,
 * o un error si el usuario no existe o si ocurre un error en la consulta.
 *
 * @throws {Error} - Si ocurre un error al intentar obtener los datos del usuario, se devuelve un error 500.
 *
 * Detalles:
 * - Esta ruta está diseñada para buscar un usuario por su ID en la base de datos utilizando Sequelize.
 * - Si el usuario existe, se devuelve un objeto con los campos `id`, `nickname`, `mail`, `style_fav`, e `is_premium`.
 * - Si no se encuentra el usuario, se responde con un error 404.
 */
export const getUserById = async (req, res) => {
    const { userId } = req.params;  // Obtenemos el `userId` del parámetro de la URL

    try {
        const user = await db.user.findByPk(userId);  // Buscar el usuario por su ID en la base de datos

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });  // Si el usuario no existe, devolvemos un 404
        }

        // Si el usuario existe, devolvemos sus datos (sin la contraseña)
        return res.status(200).json({
            id: user.id,
            nickname: user.nickname,
            mail: user.mail,
            style_fav: user.style_fav,
            is_premium: user.is_premium,
            user_picture: user.user_picture,
            dailySkips: user.daily_skips,
        });
    } catch (error) {
        console.error("Error al verificar usuario:", error);
        return res.status(500).json({ error: "Error interno en el servidor" });
    }
};

/**
 * Actualiza la información de perfil de un usuario, incluyendo nickname e imagen de perfil.
 *
 * @async
 * @function updateUser
 * @param {Object} req - Objeto de solicitud Express
 * @param {Object} req.params - Parámetros de la ruta
 * @param {string} req.params.id - ID del usuario a actualizar
 * @param {Object} req.body - Cuerpo de la solicitud
 * @param {string} [req.body.nickname] - Nuevo nickname del usuario (opcional)
 * @param {string} [req.body.profileImage] - Imagen de perfil en base64 (opcional)
 * @param {Object} res - Objeto de respuesta Express
 * @returns {Promise<Object>} Respuesta JSON con el resultado de la operación
 * @throws {404} Si el usuario no existe
 * @throws {409} Si el nickname ya está en uso
 * @throws {500} Error interno del servidor
 */

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { nickname, profileImage } = req.body; // Recibimos nickname y la imagen en base64

        // Buscamos al usuario por su ID
        const user = await db.user.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Verificar si el nickname ya existe (si es diferente al actual)
        if (nickname && nickname !== user.nickname) {
            const nicknameExists = await db.user.findOne({ where: { nickname } });
            if (nicknameExists) {
                return res.status(409).json({ error: "Nombre de usuario ya registrado" });
            }
        }

        // Si la imagen está en base64, la decodificamos y la guardamos como archivo
        if (profileImage) {
            console.log("Hay imagen;")
            // Extraer el tipo de imagen utilizando un grupo de captura
            const matches = profileImage.match(/^data:image\/(png|jpeg|jpg);base64,/);
            if (!matches) {
                throw new Error("Formato de imagen inválido");
            }

            const imageType = matches[1];
            // Eliminar el prefijo de base64
            const base64Data = profileImage.replace(/^data:image\/(png|jpeg|jpg);base64,/, ''); // Quitar el prefijo base64
            const buffer = Buffer.from(base64Data, 'base64'); // Convertimos base64 a buffer

             console.log(buffer);

            // Generamos un nombre único para la imagen
            const imageFileName = `users/profile_${userId}.${imageType}`;  // Puedes cambiar el tipo de archivo si lo necesitas
            const uploadPath = path.join(__dirname, '..', '..', 'public', 'users', `profile_${userId}.${imageType}`);  // Ruta donde se guardará la imagen
            console.log("PATH: ", uploadPath);

            // Guardamos el archivo en el servidor
            try {
                const fileHandle = await open(uploadPath, 'a'); // 'a' es para abrir en modo append
                /*await fileHandle.writeFile(buffer);*/
                await fileHandle.appendFile(buffer);
                //await appendFile(uploadPath, buffer, { flag: 'w' });
                await fileHandle.close();
                console.log(`Imagen guardada en ${uploadPath}`);
            } catch (error) {
                console.error('Error al guardar la imagen:', error);
            }

            // Actualizamos la ruta de la imagen en la base de datos
            await user.update({
                nickname,  // Actualizamos el nombre de usuario
                user_picture: imageFileName  // Guardamos la ruta de la imagen
            });
        } else {
            // Si no hay imagen, solo actualizamos el nickname
            await user.update({ nickname });
        }

        // Devolvemos la respuesta con los nuevos datos del usuario
        return res.status(200).json({
            message: "Perfil actualizado",
            user: { nickname, user_picture: user.user_picture }
        });

    } catch (error) {
        console.error("Error al actualizar el perfil:", error);
        return res.status(500).json({ error: "Error al actualizar el perfil", message: error.message });
    }
};

/**
 * Obtiene el género predominante de las canciones de una playlist
 */
async function getPlaylistGenre(playlistId) {
    // Obtener los IDs de las canciones de la playlist
    const songIds = await db.song_playlist.findAll({
        where: { playlist_id: playlistId },
        attributes: ['song_id']  // Solo necesitamos los IDs de las canciones
    });

    // Obtener los géneros de las canciones correspondientes
    const genres = await db.song.findAll({
        where: {
            id: songIds.map(song => song.song_id),  // Mapear los song_ids a los géneros de las canciones
        },
        attributes: ['genre']  // Solo necesitamos los géneros
    });

    // Contar los géneros
    const genreCount = genres.reduce((acc, song) => {
        acc[song.genre] = (acc[song.genre] || 0) + 1;
        return acc;
    }, {});

    // Determinar el género predominante
    let maxCount = 0;
    let predominantGenre = null;
    for (const genre in genreCount) {
        if (genreCount[genre] > maxCount) {
            maxCount = genreCount[genre];
            predominantGenre = genre;
        }
    }

    return predominantGenre;
}

/**
 * Actualiza el estilo favorito del usuario en base a sus likes de canciones y playlists
 */
async function updateUserFavoriteStyle(userId) {
    // Obtener las canciones que le gustan al usuario
    const likedSongs = await db.song_like.findAll({
        where: { user_id: userId },
        attributes: ['song_id']  // Solo necesitamos los IDs de las canciones
    });

    // Obtener los géneros de las canciones que le gustan al usuario
    const songGenres = await db.song.findAll({
        where: {
            id: likedSongs.map(like => like.song_id)  // Mapear los song_ids a los géneros de las canciones
        },
        attributes: ['genre']
    });

    const likedGenres = songGenres.map(song => song.genre);

    // Obtener las playlists que le gustan al usuario
    const likedPlaylists = await db.playlist_like.findAll({
        where: { user_id: userId },
        attributes: ['playlist_id']
    });

    const playlistGenres = [];
    for (let i = 0; i < likedPlaylists.length; i++) {
        const playlistId = likedPlaylists[i].playlist_id;
        const predominantGenre = await getPlaylistGenre(playlistId);
        playlistGenres.push(predominantGenre);
    }

    // Combinar los géneros de canciones y playlists
    const allGenres = [...likedGenres, ...playlistGenres];

    // Contar las frecuencias de cada género
    const genreCount = allGenres.reduce((acc, genre) => {
        acc[genre] = (acc[genre] || 0) + 1;
        return acc;
    }, {});

    // Determinar los géneros predominantes
    let maxCount = 0;
    const favoriteStyles = [];
    for (const genre in genreCount) {
        if (genreCount[genre] > maxCount) {
            maxCount = genreCount[genre];
            favoriteStyles.length = 0; // Reiniciar la lista si encontramos un nuevo máximo
            favoriteStyles.push(genre);
        } else if (genreCount[genre] === maxCount) {
            favoriteStyles.push(genre); // Agregar géneros empatados
        }
    }

    // Actualizamos el estilo favorito del usuario
    const user = await db.user.findByPk(userId);
    if (user) {
        // Si no hay géneros predominantes, mantener el estilo favorito actual
        if (favoriteStyles.length === 0) {
            favoriteStyles.push(user.style_fav || "ninguno"); // Mantener el estilo actual o usar "ninguno"
        } else {
            user.style_fav = favoriteStyles[0]; // Guardar el primer estilo como referencia
        }

        await user.save();
    }

    // Llamamos a la función para obtener las playlists recomendadas para todos los estilos
    const recommendedPlaylists = [];
    for (const style of favoriteStyles) {
        const playlists = await getRecommendedPlaylists(style);
        recommendedPlaylists.push(...playlists); // Agregar playlists de cada estilo
    }

    return { favoriteStyles, recommendedPlaylists };
}

/**
 * Obtiene las playlists recomendadas donde el estilo favorito del usuario es el género predominante
 * Incluye tanto playlists normales como álbumes
 */
async function getRecommendedPlaylists(favoriteStyle, currentUserId) {
    // Obtener las playlists de tipo 'Vibra'
    const vibraPlaylists = await db.playlist.findAll({
        where: {
            typeP: 'Vibra'
        },
        attributes: ['id', 'name', 'front_page']
    });
    
    // Obtener álbumes (playlists con typeP = 'album')
    const albums = await db.playlist.findAll({
        where: {
            typeP: 'album'
        },
        attributes: ['id', 'name', 'front_page']
    });
    
    // Obtener las playlists públicas, excluyendo las del usuario actual
    const userPublicPlaylists = await db.playlist.findAll({
        where: {
            typeP: null,
            type: 'public',
            user_id: {
                [Op.ne]: currentUserId  // Excluir las del usuario actual
            }
        },
        attributes: ['id', 'name', 'front_page']
    });

    // Combinar todos los conjuntos: playlists Vibra, álbumes y playlists de usuarios
    const playlists = [...vibraPlaylists, ...albums, ...userPublicPlaylists];

    // Filtrar playlists donde el género predominante coincide con el estilo favorito
    const recommendedPlaylists = [];

    for (const playlist of playlists) {
        // Obtener el género predominante de la playlist
        const predominantGenre = await getPlaylistGenre(playlist.id);

        // Solo agregar la playlist si su género predominante coincide con el estilo favorito
        if (predominantGenre === favoriteStyle) {
            recommendedPlaylists.push(playlist);
        }
    }

    // Limitar a 8 playlists y devolver aleatorias si hay más
    if (recommendedPlaylists.length > 8) {
        const randomPlaylists = recommendedPlaylists.sort(() => 0.5 - Math.random()).slice(0, 8);
        return randomPlaylists;
    }

    return recommendedPlaylists;
}

/**
 * Actualizar el estilo favorito del usuario en su perfil
 */
export const updateUserFavoriteStyleInProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ error: "Token no proporcionado" });

        let decoded;
        try {
            decoded = jwt.verify(token, SECRET_KEY);
        } catch (error) {
            return res.status(403).json({ error: "Token inválido o expirado" });
        }

        const { favoriteStyles } = await updateUserFavoriteStyle(decoded.id);
        return res.status(200).json({
            message: "Estilo favorito actualizado",
            style_fav: favoriteStyles,
        });
    } catch (error) {
        console.error("Error al actualizar estilo favorito:", error);
        return res.status(500).json({ error: "Error al actualizar el estilo favorito" });
    }
};

// Nueva ruta para obtener playlists recomendadas
export const getRecommendedPlaylistsForUser = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];
        if (!token) return res.status(401).json({ error: "Token no proporcionado" });

        let decoded;
        try {
            decoded = jwt.verify(token, SECRET_KEY); // Decodifica el token
        } catch (error) {
            return res.status(403).json({ error: "Token inválido o expirado" });
        }

        const userId = parseInt(decoded.id, 10); // Convertimos el ID a número entero

        if (isNaN(userId)) {
            return res.status(400).json({ error: "ID de usuario inválido" });
        }

        // Obtener el estilo favorito del usuario
        const { favoriteStyles } = await updateUserFavoriteStyle(userId);

        // Obtener las playlists recomendadas para todos los estilos favoritos
        const recommendedPlaylists = [];
        for (const style of favoriteStyles) {
            const playlists = await getRecommendedPlaylists(style, userId);
            recommendedPlaylists.push(...playlists); // Agregar playlists de cada estilo
        }

        // Devolver las playlists recomendadas al frontend
        return res.status(200).json({ recommendedPlaylists });
    } catch (error) {
        console.error("Error al obtener las playlists recomendadas:", error);
        return res.status(500).json({ error: "Error al obtener las playlists recomendadas" });
    }
};

/**
 * Maneja la solicitud de recuperación de contraseña
 * Envía un correo con un enlace para restablecer la contraseña
 */
export const forgotPassword = async (req, res) => {
    try {
        const { mail } = req.body;
        
        if (!mail) {
            return res.status(400).json({ error: "Debe proporcionar un correo electrónico" });
        }
        
        // Buscar usuario por email
        const user = await db.user.findOne({ where: { mail } });
        
        if (!user) {
            return res.status(404).json({ error: "No existe una cuenta con este correo electrónico" });
        }
        
        // Generar token único para recuperación (expira en 1 hora)
        const resetToken = jwt.sign(
            { id: user.id, mail: user.mail },
            SECRET_KEY,
            { expiresIn: "1h" }
        );
        
        // Guardar el token en el usuario (opcional, solo si quieres verificar el token)
        user.reset_token = resetToken;
        user.reset_token_expires = new Date(Date.now() + 3600000); // 1 hora
        await user.save();
        
        // URL para restablecer la contraseña (frontend)
        const resetUrl = `http://164.90.160.181//reset-password?token=${resetToken}`;

        // Configurar transportador de nodemailer
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'vibraassistance@gmail.com', // Cambia esto por tu correo real
              pass: 'jsws nqpi cwtg yeds' // Cambia esto por tu contraseña o clave de app
            }
        });

        // Configurar el correo electrónico
        const mailOptions = {
            from: 'vibraassistance@gmail.com', // Cambia esto por tu correo real
            to: mail,
            subject: 'Recuperación de contraseña - Vibra',
            html: `
              <h1>Recuperación de contraseña</h1>
              <p>Haz click en el siguiente enlace para restablecer tu contraseña:</p>
              <a href="${resetUrl}">Restablecer contraseña</a>
              <p>Este enlace expirará en 1 hora.</p>
              <p>Si no solicitaste recuperar tu contraseña, puedes ignorar este correo.</p>
            `
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);
        
        console.log("Email de recuperación enviado a:", mail);
        console.log("URL de recuperación:", resetUrl);
        
        return res.status(200).json({ 
            message: "Se ha enviado un correo con instrucciones para restablecer tu contraseña",
            // En producción NO enviaríamos el token en la respuesta, esto es solo para pruebas
            resetUrl, // Solo para testing, eliminar en producción
            resetToken // Solo para testing, eliminar en producción
        });
        
    } catch (error) {
        console.error("Error en recuperación de contraseña:", error);
        return res.status(500).json({ error: "Error al procesar la solicitud de recuperación" });
    }
};

/**
 * Restablece la contraseña utilizando el token enviado al correo
 */
export const resetPassword = async (req, res) => {
    try {
        const { token, newPassword } = req.body;
        
        if (!token || !newPassword) {
            return res.status(400).json({ error: "Debe proporcionar el token y la nueva contraseña" });
        }
        
        // Verificar el token
        let decoded;
        try {
            decoded = jwt.verify(token, SECRET_KEY);
        } catch (error) {
            return res.status(401).json({ error: "Token inválido o expirado" });
        }
        
        // Buscar usuario por ID del token
        const user = await db.user.findByPk(decoded.id);
        
        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }
        
        // En la función resetPassword, añade esta verificación:
        if (user.reset_token !== token) {
            return res.status(401).json({ error: "Token inválido o ya utilizado" });
        }

        // Verificar que el token no haya expirado
        if (user.reset_token_expires < new Date()) {
            return res.status(401).json({ error: "Token expirado" });
        }
        
        // Hashear la nueva contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        
        // Actualizar la contraseña
        user.password = hashedPassword;
        // Limpiar el token de recuperación (si lo implementaste)
        user.reset_token = null;
        user.reset_token_expires = null;
        
        await user.save();
        
        return res.status(200).json({ message: "Contraseña restablecida con éxito" });
        
    } catch (error) {
        console.error("Error al restablecer contraseña:", error);
        return res.status(500).json({ error: "Error al restablecer la contraseña" });
    }
};

/**
 * Maneja los mensajes enviados desde el formulario de contacto
 * Envía un correo electrónico con la información del mensaje
 */
export const sendContactMessage = async (req, res) => {
    try {
        const { name, email, subject, message } = req.body;
        
        // Validar campos obligatorios
        if (!name || !email || !subject || !message) {
            return res.status(400).json({ error: "Todos los campos son obligatorios" });
        }

        let logoBase64;
        try {
            // Ruta absoluta en tu máquina de desarrollo (no Docker)
            const logoPath = path.join(__dirname, '..', '..', 'public', 'vibra.png');
            logoBase64 = fs.readFileSync(logoPath, { encoding: 'base64' });
        } catch (err) {
            console.error('Error al leer la imagen:', err);
            logoBase64 = ''; // Continuar sin imagen
        }
        
        // Validación básica del formato de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: "El formato del correo electrónico no es válido" });
        }

        // Configurar transportador de nodemailer (igual que en forgotPassword)
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: 'vibraassistance@gmail.com',
              pass: 'jsws nqpi cwtg yeds'
            }
        });

        // Configurar el correo electrónico que se enviará
        const mailOptions = {
            from: 'vibraassistance@gmail.com',
            to: 'vibraassistance@gmail.com', // Correo donde recibirás los mensajes de contacto
            subject: `Contacto Vibra: ${subject}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                ${logoBase64 ? `<img src="cid:vibralogo" alt="Vibra Logo" style="display: block; margin: 0 auto 20px; max-width: 150px;">` : ''}
                <h2 style="color: #4f46e5; text-align: center;">Nuevo mensaje de contacto</h2>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
                  <p><strong>Nombre:</strong> ${name}</p>
                  <p><strong>Email:</strong> ${email}</p>
                  <p><strong>Asunto:</strong> ${subject}</p>
                  <h3 style="border-top: 1px solid #e0e0e0; padding-top: 15px;">Mensaje:</h3>
                  <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
                </div>
                <p style="color: #6b7280; font-size: 0.9em; text-align: center;">Este mensaje fue enviado desde el formulario de contacto en Vibra.</p>
              </div>
            `,

            attachments: logoBase64 ? [{
                filename: 'vibra.png',
                content: logoBase64,
                encoding: 'base64',
                cid: 'vibralogo' // El mismo CID usado en el src de la imagen
            }] : [],

            // Configurar reply-to para que al responder, se envíe al email del remitente
            replyTo: email
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);
        
        // También enviamos un correo de confirmación al usuario
        const confirmationMailOptions = {
            from: 'vibraassistance@gmail.com',
            to: email,
            subject: 'Hemos recibido tu mensaje - Vibra',
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
                ${logoBase64 ? `<img src="cid:vibralogo" alt="Vibra Logo" style="display: block; margin: 0 auto 20px; max-width: 150px;">` : ''}
                <h2 style="color: #4f46e5; text-align: center;">¡Gracias por contactarnos!</h2>
                <p style="line-height: 1.6;">Hola ${name},</p>
                <p style="line-height: 1.6;">Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
                <p style="line-height: 1.6;">Detalles de tu mensaje:</p>
                <div style="background-color: #f9fafb; padding: 15px; border-radius: 5px; margin: 20px 0;">
                  <p><strong>Asunto:</strong> ${subject}</p>
                  <p><strong>Mensaje:</strong> ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}</p>
                </div>
                <p style="line-height: 1.6;">Si tienes alguna consulta adicional, no dudes en contactarnos nuevamente.</p>
                <p style="line-height: 1.6;">Saludos,<br>El equipo de Vibra</p>
                <p style="color: #6b7280; font-size: 0.9em; text-align: center; margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 15px;">Este es un correo automático, por favor no responda a este mensaje.</p>
              </div>
            `,
            attachments: logoBase64 ? [{
                filename: 'vibra.png',
                content: logoBase64,
                encoding: 'base64',
                cid: 'vibralogo' // El mismo CID usado en el src de la imagen
            }] : []

        };
        
        await transporter.sendMail(confirmationMailOptions);
        
        console.log("Mensaje de contacto recibido de:", email);
        
        return res.status(200).json({ 
            message: "¡Gracias por contactarnos! Tu mensaje ha sido enviado correctamente."
        });
        
    } catch (error) {
        console.error("Error al enviar mensaje de contacto:", error);
        return res.status(500).json({ error: "Error al procesar el mensaje de contacto" });
    }
};

/**
 * Resta un skip diario al usuario (si tiene skips disponibles)
 *
 * Ruta: POST /use-daily-skip/:userId
 */
export const useDailySkip = async (req, res) => {
    const { userId } = req.params;

    try {
        // Buscar al usuario
        const user = await db.user.findByPk(userId);

        if (!user) {
            return res.status(404).json({ success: false, error: "Usuario no encontrado" });
        }

        // Verificar si tiene skips disponibles
        if (user.daily_skips <= 0) {
            return res.status(400).json({
                success: false,
                error: "No tienes skips disponibles",
                remainingSkips: 0
            });
        }

        // Restar un skip (sin permitir valores negativos)
        const newSkips = Math.max(user.daily_skips - 1, 0);

        // Actualizar en la base de datos
        await user.update({ daily_skips: newSkips });

        return res.json({
            success: true,
            message: "Skip utilizado correctamente",
            remainingSkips: newSkips
        });

    } catch (error) {
        console.error("Error al usar skip diario:", error);
        return res.status(500).json({
            success: false,
            error: "Error interno al procesar el skip"
        });
    }
};