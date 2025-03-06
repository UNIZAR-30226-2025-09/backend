const express = require("express");
const { user: user } = require("../../models"); // Importamos el modelo correctamente desde models/index.js

const router = express.Router();

// **Registro de usuario**
router.post("/register", async (req, res) => {
    const { nickname, contrasena, correo, estilo_fav } = req.body;

    try {
        // Verificar si el usuario ya existe
        const userExists = await user.findOne({ where: { correo } });
        
        console.log("Usuario encontrado:", userExists);

        if (userExists) {
            return res.status(400).json({ error: "Correo ya registrado" });
        }

        // Crear nuevo usuario
        const newUser = await user.create({
            nickname,
            contrasena,
            correo,
            estilo_fav
        });


        res.status(201).json({message: "Usuario registrado con éxito", user: newUser});
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        res.status(500).json({error: "Error al registrar usuario"});
    }
});

// **Login de usuario**
router.post("/login", async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        // Buscar usuario por correo
        const foundUser = await user.findOne({ where: { correo } });
        if (!foundUser) {
            return res.status(404).json({ error: "Usuario no encontrado" });
        }

        // Comparar contraseñas
        const validPassword = contrasena === foundUser.contrasena;
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