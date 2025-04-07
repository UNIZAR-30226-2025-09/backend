import db from "#src/models/index";
import bcrypt from "bcryptjs"; // Importamos bcrypt para el hashing de contraseñas
import jwt from "jsonwebtoken";
import path from 'path';
import { fileURLToPath } from 'url';
import { appendFile, open } from 'fs/promises';

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
    const { nickname, password, mail} = req.body;
    const style_fav = "ninguno"
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
            is_premium
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

    try {
        const foundUser = await db.user.findOne({ where: { mail } });

        if (!foundUser) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const validPassword = await bcrypt.compare(password, foundUser.password);
        if (!validPassword) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

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
        console.error("❌ Error en el login:", error);
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
export const logoutUser = (req, res) => {
    return res.status(200).json({ message: "Sesión cerrada correctamente" });
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
            attributes: ["id", "nickname", "mail", "style_fav", "is_premium", "user_picture"] // No devolver la contraseña
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
// Permite actualizar nickname, mail y password.
// Valida que no existan usuarios con el mismo correo o nickname.
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

        const { nickname, mail, password } = req.body;
        if (!nickname && !mail && !password) return res.status(400).json({ error: "Debes proporcionar al menos un campo para actualizar" });

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
        return res.status(200).json({ message: "Perfil actualizado correctamente", user });
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
        console.error("❌ Error al actualizar estado de premium:", error);
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
        });
    } catch (error) {
        console.error("Error al verificar usuario:", error);
        return res.status(500).json({ error: "Error interno en el servidor" });
    }
};

export const updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const { nickname, profileImage } = req.body; // Recibimos nickname y la imagen en base64

        //console.log("Valores de respuesta: ", nickname, profileImage);
        // Buscamos al usuario por su ID
        const user = await db.user.findByPk(userId);

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
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