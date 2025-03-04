const express = require("express");
const router = express.Router();

//Ruta de prueba
router.get("/hello", (req, res) => {
    res.json({ message: "¡Hola desde el backend con Node.js!"});
});

//Ruta de prueba dos
router.get("/bye", (req, res) => {
    res.json({ message: "¡Adios desde el backend con Node.js!"});
});

module.exports = router;