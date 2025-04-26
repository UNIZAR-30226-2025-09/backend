import express from 'express';
import * as collaboratorsController from '../controllers/collaboratorsController.js';

const router = express.Router();

// Ruta para invitar a un colaborador
router.post('/invite', collaboratorsController.inviteCollaborator);

// Ruta para eliminar a un colaborador
router.delete('/remove', collaboratorsController.removeCollaborator);

router.get('/playlists-for-user/:userId', collaboratorsController.getCollaborativePlaylists);


// Ruta para obtener los colaboradores de una playlist
router.get('/:playlistId/collaborators', collaboratorsController.getCollaborators);



export default router;