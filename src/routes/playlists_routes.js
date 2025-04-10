import express from "express";
import * as playlistController from "#controllers/playlists_controller";
import {getOrCreateLikedPlaylist} from "#controllers/playlists_controller";
const router = express.Router();

/**
 * @swagger
 * tags:
 *   - name: Playlists
 *     description: Operaciones relacionadas con las playlists.
 */

/**
 * @swagger
 * /api/playlists:
 *   get:
 *     tags:
 *       - Playlists
 *     description: Obtiene todas las playlists de la base de datos.
 *     responses:
 *       200:
 *         description: Lista de playlists.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: El ID de la playlist.
 *                   name:
 *                     type: string
 *                     description: El nombre de la playlist.
 *                   type:
 *                     type: string
 *                     description: El tipo de playlist.
 *                   typeP:
 *                     type: string
 *                     description: El identificador único del tipo de playlist.
 *                   front_page:
 *                     type: string
 *                     description: La URL de la portada de la playlist.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/", playlistController.getAllPlaylist);

/**
 * @swagger
 * /api/playlists/songliked:
 *   post:
 *     tags:
 *       - Playlists
 *     description: Obtiene o crea la playlist de "Me Gusta" para un usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *                 description: El ID del usuario.
 *     responses:
 *       200:
 *         description: Playlist de "Me Gusta" encontrada o creada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 playlist:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       description: El ID de la playlist.
 *                     name:
 *                       type: string
 *                       description: El nombre de la playlist.
 *                     type:
 *                       type: string
 *                       description: El tipo de playlist.
 *                     typeP:
 *                       type: string
 *                       description: El identificador único del tipo de playlist.
 *                     front_page:
 *                       type: string
 *                       description: La URL de la portada de la playlist.
 *       400:
 *         description: El ID de usuario no es válido.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/songliked', playlistController.getOrCreateLikedPlaylist);

/**
 * @swagger
 * /api/playlists/{id}/like:
 *   post:
 *     tags:
 *       - Playlists
 *     description: Agrega o elimina el like de una playlist.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *                 description: El ID del usuario que da like.
 *     responses:
 *       200:
 *         description: Like agregado o eliminado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 liked:
 *                   type: boolean
 *                   description: Indica si el like fue agregado o eliminado.
 *       400:
 *         description: Datos inválidos o la playlist no existe.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/:id/like", playlistController.likePlaylist);

/**
 * @swagger
 * /api/playlists/{id}/like:
 *   delete:
 *     tags:
 *       - Playlists
 *     description: Elimina el like de una playlist.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user_id:
 *                 type: integer
 *                 description: El ID del usuario que elimina el like.
 *     responses:
 *       200:
 *         description: Like eliminado correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *       400:
 *         description: Datos inválidos o no existe un like para eliminar.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete("/:id/like", playlistController.unlikePlaylist);

/**
 * @swagger
 * /api/playlists/vibra:
 *   get:
 *     tags:
 *       - Playlists
 *     description: Obtiene todas las playlists de tipo "Vibra".
 *     responses:
 *       200:
 *         description: Lista de playlists de tipo "Vibra".
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: El ID de la playlist.
 *                   name:
 *                     type: string
 *                     description: El nombre de la playlist.
 *                   front_page:
 *                     type: string
 *                     description: La URL de la portada de la playlist.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/vibra", playlistController.getVibraPlaylists);

/**
 * @swagger
 * /api/playlists/{id}:
 *   get:
 *     tags:
 *       - Playlists
 *     description: Obtiene los detalles de una playlist por ID, incluyendo las canciones y artistas.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: userId
 *         required: false
 *         description: El ID del usuario para verificar si ha dado like a la playlist.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Detalles de la playlist.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: El ID de la playlist.
 *                 name:
 *                   type: string
 *                   description: El nombre de la playlist.
 *                 front_page:
 *                   type: string
 *                   description: La URL de la portada de la playlist.
 *                 songs:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: El ID de la canción.
 *                       name:
 *                         type: string
 *                         description: El nombre de la canción.
 *                       liked:
 *                         type: boolean
 *                         description: Si el usuario ha dado like a la canción.
 *                 likes:
 *                   type: integer
 *                   description: Número de likes en la playlist.
 *       400:
 *         description: ID inválido de la playlist o usuario.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/:id", playlistController.getPlaylistById);

/**
 * @swagger
 * /api/playlists/{id}/like:
 *   get:
 *     tags:
 *       - Playlists
 *     description: Verifica si un usuario ha dado like a una playlist.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist.
 *         schema:
 *           type: integer
 *       - in: query
 *         name: user_id
 *         required: true
 *         description: El ID del usuario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Resultado indicando si el usuario ha dado like a la playlist.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 isLiked:
 *                   type: boolean
 *                   description: Indica si el usuario ha dado like a la playlist.
 *       400:
 *         description: Parámetros inválidos.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/:id/like", playlistController.checkIfLiked);

/**
 * @swagger
 * /api/playlists:
 *   post:
 *     tags:
 *       - Playlists
 *     description: Crea una nueva playlist para un usuario.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nombre de la playlist.
 *               type:
 *                 type: string
 *                 description: El tipo de la playlist.
 *               description:
 *                 type: string
 *                 description: Descripción de la playlist.
 *               front_page:
 *                 type: string
 *                 description: URL de la portada de la playlist.
 *               user_id:
 *                 type: integer
 *                 description: El ID del usuario que crea la playlist.
 *     responses:
 *       201:
 *         description: Playlist creada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: El ID de la playlist creada.
 *                 name:
 *                   type: string
 *                   description: El nombre de la playlist.
 *                 type:
 *                   type: string
 *                   description: El tipo de la playlist.
 *                 description:
 *                   type: string
 *                   description: Descripción de la playlist.
 *                 front_page:
 *                   type: string
 *                   description: URL de la portada de la playlist.
 *       400:
 *         description: Datos inválidos o incompletos.
 *       500:
 *         description: Error interno del servidor.
 */
router.post("/", playlistController.createPlaylist);

/**
 * @swagger
 * /api/playlists/{id}:
 *   put:
 *     tags:
 *       - Playlists
 *     description: Actualiza una playlist existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist a actualizar.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: El nuevo nombre de la playlist.
 *               description:
 *                 type: string
 *                 description: La nueva descripción de la playlist.
 *               type:
 *                 type: string
 *                 description: El nuevo tipo de la playlist.
 *               front_page:
 *                 type: string
 *                 description: URL de la nueva portada de la playlist.
 *     responses:
 *       200:
 *         description: Playlist actualizada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: El ID de la playlist.
 *                 name:
 *                   type: string
 *                   description: El nombre de la playlist.
 *                 description:
 *                   type: string
 *                   description: La descripción de la playlist.
 *                 type:
 *                   type: string
 *                   description: El tipo de la playlist.
 *                 front_page:
 *                   type: string
 *                   description: URL de la portada de la playlist.
 *       404:
 *         description: Playlist no encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
router.put("/:id", playlistController.updatePlaylist);

/**
 * @swagger
 * /api/playlists/{id}:
 *   delete:
 *     tags:
 *       - Playlists
 *     description: Elimina una playlist por su ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist a eliminar.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Playlist eliminada exitosamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *       404:
 *         description: Playlist no encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
router.delete("/:id", playlistController.deletePlaylist);

/**
 * @swagger
 * /api/playlists/liked/{userId}:
 *   get:
 *     tags:
 *       - Playlists
 *     description: Obtiene las playlists que un usuario ha dado like.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: El ID del usuario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de playlists que el usuario ha dado like.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: El ID de la playlist.
 *                   name:
 *                     type: string
 *                     description: El nombre de la playlist.
 *                   type:
 *                     type: string
 *                     description: El tipo de la playlist.
 *                   front_page:
 *                     type: string
 *                     description: URL de la portada de la playlist.
 *       400:
 *         description: El userId es obligatorio.
 *       404:
 *         description: Usuario no encontrado o no tiene playlists que le gusten.
 *       500:
 *         description: Error interno del servidor.
 */
router.get("/liked/:userId", playlistController.getPlaylistLike);

/**
 * @swagger
 * /api/playlists/liked-song/{userId}:
 *   get:
 *     tags:
 *       - Playlists
 *     description: Obtiene la playlist de "Me Gusta" de un usuario.
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: El ID del usuario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Playlist de "Me Gusta" del usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: El ID de la playlist.
 *                 name:
 *                   type: string
 *                   description: El nombre de la playlist.
 *                 type:
 *                   type: string
 *                   description: El tipo de la playlist.
 *                 front_page:
 *                   type: string
 *                   description: URL de la portada de la playlist.
 *       404:
 *         description: Playlist de "Me Gusta" no encontrada.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/liked-song/:userId', playlistController.getLikedSongPlaylist);

/**
 * @swagger
 * /api/playlists/users/{userId}/playlists:
 *   get:
 *     tags:
 *       - Playlists
 *     description: Obtiene todas las playlists de un usuario, excluyendo la playlist "Me Gusta".
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         description: El ID del usuario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de playlists del usuario.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: El ID de la playlist.
 *                   name:
 *                     type: string
 *                     description: El nombre de la playlist.
 *                   type:
 *                     type: string
 *                     description: El tipo de la playlist.
 *                   front_page:
 *                     type: string
 *                     description: URL de la portada de la playlist.
 *       400:
 *         description: El ID de usuario es inválido.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/users/:userId/playlists', playlistController.getUserPlaylists);

/**
 * @swagger
 * /api/playlists/{id}/addSong:
 *   post:
 *     tags:
 *       - Playlists
 *     description: Añade una canción a una playlist.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist a la que se añadirá la canción.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               songId:
 *                 type: integer
 *                 description: El ID de la canción a añadir a la playlist.
 *     responses:
 *       200:
 *         description: Canción añadida correctamente a la playlist.
 *       400:
 *         description: Datos inválidos o la canción ya está en la playlist.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/:id/addSong', playlistController.addSongToPlaylist);

/**
 * @swagger
 * /api/playlists/{id}/deleteSong:
 *   post:
 *     tags:
 *       - Playlists
 *     description: Elimina una canción de una playlist.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist de la cual se eliminará la canción.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               songId:
 *                 type: integer
 *                 description: El ID de la canción a eliminar de la playlist.
 *     responses:
 *       200:
 *         description: Canción eliminada correctamente de la playlist.
 *       400:
 *         description: Datos inválidos o la canción no está en la playlist.
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/:id/deleteSong', playlistController.deleteSongToPlaylist);

// No testeada
/**
 * @swagger
 * /api/playlists/{id}/{operation}/handleSong:
 *   post:
 *     summary: Añade o elimina una canción de una playlist
 *     tags:
 *       - Playlists
 *     description: Gestiona la adición o eliminación de una canción en una playlist.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: El ID de la playlist a modificar.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: operation
 *         required: true
 *         description: Operación a realizar (debe ser 'add' o 'remove').
 *         schema:
 *           type: string
 *           enum: [add, remove]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               songId:
 *                 type: integer
 *                 description: El ID de la canción para añadir o eliminar de la playlist.
 *     responses:
 *       200:
 *         description: Operación realizada correctamente. Incluye detalles sobre la acción ejecutada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   description: Mensaje de éxito.
 *                 operation:
 *                   type: string
 *                   enum: [add, remove]
 *                   description: Operación que se realizó.
 *                 newEntry:
 *                   type: object
 *                   description: Detalles del nuevo registro (solo para operación 'add').
 *       400:
 *         description: Parámetros inválidos, la operación no es válida, o la canción ya existe en la playlist.
 *       404:
 *         description: La canción no se encontró en la playlist (para la operación 'remove').
 *       500:
 *         description: Error interno del servidor.
 */
router.post('/:id/:operation/handleSong', playlistController.handleSongToPlaylist);

// No testeada
/**
 * @swagger
 * /api/playlists/{songId}/songPlaylists:
 *   get:
 *     summary: Obtiene playlists que contienen una canción específica
 *     tags:
 *       - Playlists
 *     description: Obtiene todas las playlists que contienen una canción específica.
 *     parameters:
 *       - in: path
 *         name: songId
 *         required: true
 *         description: El ID de la canción para buscar en las playlists.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de playlists recuperada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 count:
 *                   type: integer
 *                   description: Número de playlists encontradas.
 *                 playlists:
 *                   type: array
 *                   items:
 *                     type: object
 *                     description: Detalles de las playlists.
 *       400:
 *         description: ID de canción inválido.
 *       404:
 *         description: La canción no existe o no se encontraron playlists con esta canción.
 *       500:
 *         description: Error interno del servidor.
 */
router.get('/:songId/songPlaylists', playlistController.getPlaylistsBySongId);

// No testeada
/**
 * @swagger
 * /api/playlists/{playlistId}/isOwner/{userId}:
 *   get:
 *     summary: Verifica la propiedad de una playlist por un usuario
 *     tags:
 *       - Playlists
 *     description: Verifica si un usuario es el propietario de una playlist específica.
 *     parameters:
 *       - in: path
 *         name: playlistId
 *         required: true
 *         description: El ID de la playlist a verificar.
 *         schema:
 *           type: integer
 *       - in: path
 *         name: userId
 *         required: true
 *         description: El ID del usuario a verificar como propietario.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Verificación realizada correctamente.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 playlistId:
 *                   type: integer
 *                   description: ID de la playlist.
 *                 userId:
 *                   type: integer
 *                   description: ID del usuario.
 *                 isOwner:
 *                   type: boolean
 *                   description: Indica si el usuario es propietario de la playlist.
 *                 playlist:
 *                   type: object
 *                   description: Datos de la playlist.
 *       400:
 *         description: IDs de playlist o usuario inválidos.
 *       404:
 *         description: La playlist especificada no existe.
 *       500:
 *         description: Error interno del servidor.
 */
 router.get('/:playlistId/isOwner/:userId', playlistController.checkPlaylistOwnership);

export default router;