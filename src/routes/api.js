const express = require("express");
const router = express.Router();

router.get("/hello", (req, res) => {
    res.json({ message: "¡Hola desde el backend con Node.js!" });
});

router.get("/bye", (req, res) => {
    res.json({ message: "¡Adiós desde el backend con Node.js!" });
});

module.exports = router;