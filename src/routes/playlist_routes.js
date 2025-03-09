const express = require('express');
const router = express.Router();
const userController = require('../controllers/playlist_controller');

// Definir rutas y asociarlas con controladores
router.get('/', userController.getAllPlaylist);
router.get('/:id', userController.getPlaylistById);
router.post('/', userController.createPlaylist);
router.put('/:id', userController.updatePlaylist);
router.delete('/:id', userController.deletePlaylist);

module.exports = router;
