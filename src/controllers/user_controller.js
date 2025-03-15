import db from "#src/models/index";
import bcrypt from "bcryptjs"; // Importamos bcrypt para el hashing de contraseñas
import jwt from "jsonwebtoken";

const SECRET_KEY = "aB1cD2eF3GhIjK4LmN5OpQr6StUvWxY7Z";

/**
 * Registro de usuario
 *
 * - Recibe: `nickname`, `password`, `mail`, `style_fav`
 * - Verifica si el correo ya está registrado.
 * - Hashea la contraseña antes de almacenarla en la base de datos.
 * - Devuelve un mensaje de éxito con los datos del usuario registrado.
 */
export const registerUser = async (req, res) => {
    const { nickname, password, mail} = req.body;
    const style_fav = "ninguno"
    const is_premium = false;

    try {
        // Verificar si el usuario ya existe en la base de datos
        const userExists = await db.user.findOne({ where: { mail } });

        console.log("Usuario encontrado:", userExists);

        if (userExists) {
            return res.status(400).json({ error: "Correo ya registrado" });
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
            attributes: ["id", "nickname", "mail", "style_fav", "is_premium"] // No devolver la contraseña
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

/**
 * Actualiza la información del usuario autenticado.
 */
export const updateUserProfile = async (req, res) => {
    try {
        const token = req.headers.authorization?.split(" ")[1];

        if (!token) {
            return res.status(401).json({ error: "Token no proporcionado" });
        }

        const decoded = jwt.verify(token, SECRET_KEY);
        const user = await db.user.findByPk(decoded.id);

        if (!user) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        const { nickname, mail, password } = req.body;

        if (nickname) user.nickname = nickname;
        if (mail) user.mail = mail;

        // Solo actualizar la contraseña si el usuario la cambió
        if (password && password.trim() !== "") {
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(password, salt);
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
