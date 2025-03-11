import express from "express";
import db from "#src/models/index"; // Importa el modelo de canciones

const router = express.Router();

/**
 * Obtiene todas las canciones disponibles en la base de datos.
 * GET /api/songs/
 */
router.get("/", async (req, res) => {
    try {
        const songs = await db.song.findAll();
        res.json(songs);
    } catch (error) {
        console.error("Error al obtener las canciones:", error);
        res.status(500).json({ message: "Error al obtener las canciones", error: error.message });
    }
});

export default router;