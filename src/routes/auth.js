const express = require("express");
const { user } = require("../models"); // Importamos el modelo correctamente desde models/index.js

const router = express.Router();

// **Registro de usuario**
router.post("/register", async (req, res) => {
    const { nickname, password, mail, style_fav } = req.body; // Corrección en los nombres

    try {
        // Verificar si el usuario ya existe
        const userExists = await user.findOne({ where: { mail } });

        console.log("Usuario encontrado:", userExists);

        if (userExists) {
            return res.status(400).json({ error: "Correo ya registrado" });
        }

        // Crear nuevo usuario
        const newUser = await user.create({
            nickname,
            password,
            mail,
            style_fav
        });

        res.status(201).json({ message: "Usuario registrado con éxito", user: newUser });
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({ error: "Error al registrar usuario" });
    }
});

// **Login de usuario**
router.post("/login", async (req, res) => {
    const { mail, password } = req.body; // Corrección en los nombres

    try {
        // Buscar usuario por correo
        const foundUser = await user.findOne({ where: { mail } });

        if (!foundUser) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Comparar contraseñas (esto debe mejorarse con hashing en el futuro)
        const validPassword = password === foundUser.password;
        if (!validPassword) {
            return res.status(401).json({ error: "Contraseña incorrecta" });
        }

        res.status(200).json({ message: "Login exitoso", user: foundUser });
    } catch (error) {
        console.error("Error en el login:", error);
        res.status(500).json({ error: "Error en el login" });
    }
});

module.exports = router;