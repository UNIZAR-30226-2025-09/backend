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
        console.log("📩 Solicitud de login recibida para:", mail);

        // Buscar usuario en la base de datos
        const foundUser = await db.user.findOne({ where: { mail } });

        if (!foundUser) {
            console.error("❌ Usuario no encontrado:", mail);
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        console.log("✅ Usuario encontrado:", foundUser.mail);

        // Comparar la contraseña ingresada con la almacenada
        const validPassword = await bcrypt.compare(password, foundUser.password);
        if (!validPassword) {
            console.error("❌ Contraseña incorrecta para:", mail);
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        console.log("🔑 Generando token para:", foundUser.mail);

        // Generar token JWT
        const token = jwt.sign(
            { id: foundUser.id, mail: foundUser.mail },
            SECRET_KEY,
            { expiresIn: "7d" }
        );

        console.log("🟢 Token generado con éxito:", token);

        // ✅ Guardar el token en una cookie HTTP-Only
        res.cookie("authToken", token, {
            httpOnly: true, // 🔒 El frontend NO podrá acceder directamente
            secure: false, // ⚠️ Cambiar a `true` en producción con HTTPS
            sameSite: "Strict", // Protección contra CSRF
            maxAge: 7 * 24 * 60 * 60 * 1000 // 7 días
        });

        console.log("🍪 Cookie de autenticación establecida");

        // ✅ Enviar solo los datos del usuario en la respuesta (SIN token)
        return res.status(200).json({
            message: "Login exitoso",
            user: {
                id: foundUser.id,
                nickname: foundUser.nickname,
                mail: foundUser.mail,
                style_fav: foundUser.style_fav,
                is_premium: foundUser.is_premium
            }
        });

    } catch (error) {
        console.error("🚨 Error en el login:", error);
        return res.status(500).json({ error: "Error en el login" });
    }
};

/**
 * Cierre de sesión de usuario
 *
 * - Borra la cookie de autenticación.
 * - Devuelve un mensaje de éxito.
 * - Se debe enviar el token en la cabecera de la solicitud.
 * 
 */
export const logoutUser = (req, res) => {
    res.clearCookie("authToken", { httpOnly: true, sameSite: "Strict" });
    return res.status(200).json({ message: "Sesión cerrada correctamente" });
};
