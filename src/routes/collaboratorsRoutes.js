import express from 'express';
import * as collaboratorsController from '../controllers/collaboratorsController.js';

const router = express.Router();

// Ruta para invitar a un colaborador
router.post('/invite', collaboratorsController.inviteCollaborator);

// Ruta para aceptar una invitación
router.post('/accept', collaboratorsController.acceptCollaboration);

// Ruta para rechazar una invitación
router.post('/reject', collaboratorsController.rejectCollaboration);

// Ruta para eliminar a un colaborador
router.delete('/remove', collaboratorsController.removeCollaborator);

// Ruta para obtener las invitaciones pendientes
router.get('/:playlistId/pending-invitations', collaboratorsController.getPendingInvitations);

// Ruta para obtener las playlists colaborativas de un usuario
router.get('/playlists-for-user/:userId', collaboratorsController.getCollaborativePlaylists);

// Ruta para obtener los colaboradores de una playlist
router.get('/:playlistId/collaborators', collaboratorsController.getCollaborators);

export default router;