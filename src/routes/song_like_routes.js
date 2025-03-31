import express from 'express';
import {
    likeSong,
    unlikeSong,
    getLikedSongs,
    checkIfSongIsLiked,
    handleSongLike
} from '#controllers/song_like_controller';

const router = express.Router();

/**
 * Rutas para la gestión de likes de canciones
 * - POST `/:id/likeUnlike` -> Maneja el like/unlike de una canción (toggle)
 *   - Requiere: ID de la canción en ruta, user_id en el cuerpo
 *   - Agrega/elimina el like y gestiona la playlist de "Me Gusta"
 *
 * - POST `/:id/like` -> Añade un like a una canción
 *   - Similar a likeUnlike, pero con endpoint específico para like
 *   - Útil para clientes que prefieren un endpoint más explícito
 *
 * - DELETE `/:id/like` -> Elimina un like de una canción
 *   - Elimina explícitamente el like sin hacer toggle
 *   - Útil cuando se requiere una acción unidireccional
 *
 * - GET `/:user_id/likedSongs` -> Obtiene todas las canciones que le gustan a un usuario
 *   - Devuelve la lista completa de canciones marcadas como "Me Gusta"
 *   - Ideal para mostrar biblioteca de favoritos del usuario
 *
 * - GET `/:id/like` -> Verifica si una canción está likeada por un usuario
 *   - Requiere pasar userId como parámetro de consulta
 *   - Devuelve un booleano indicando si la canción está en favoritos
 */

router.post("/:id/likeUnlike", handleSongLike);

router.post("/:id/like", likeSong);

/*================================================================================
    NO FUNCIONA
================================================================================*/
router.delete("/:id/like", unlikeSong);

router.get("/:user_id/likedSongs", getLikedSongs);

/*================================================================================
    NO FUNCIONA
================================================================================*/
router.get("/:id/like", checkIfSongIsLiked);

export default router;
