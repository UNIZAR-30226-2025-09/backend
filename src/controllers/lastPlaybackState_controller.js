import db from "#src/models/index";
import { Op, Sequelize } from "sequelize";
import lastPlaybackState from "#models/lastPlaybackState";
import  user from "#models/user";
import song from "#models/song";
import playlist from "#models/playlist";

export async function getLastPlaybackState (req, res) {
    try {
        const state = await db.lastPlaybackState.findOne({
            where: { userId: req.params.userId },
            include: [
                {
                    model: db.song,
                    as: "song",
                },
                {
                    model: db.playlist,
                    as: 'playlist',
                    include: [
                        {
                            model: db.song,
                            through: { attributes: [] },
                            include: [
                                {
                                    model: db.artist,
                                    through: { attributes: [] },
                                    attributes: ['id', 'name', 'photo']
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        if (!state) {
            return res.status(404).json({ message: 'No playback state found for this user.' });
        }

        res.json(state);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error retrieving playback state.' });
    }
}


// Crear o actualizar el último estado de reproducción
export async function updateLastPlaybackState (req, res) {
    const { positionMinutes, positionSeconds, songId, playlistId } = req.body;
    try {
        let state = await db.lastPlaybackState.findOne({ where: { userId: req.params.userId } });

        if (state) {
            // Si el estado ya existe, actualizamos la información
            state.positionMinutes = positionMinutes;
            state.positionSeconds = positionSeconds;
            state.songId = songId;
            state.playlistId = playlistId;
            await state.save();
            return res.json(state);
        } else {
            // Si no existe, creamos uno nuevo
            const newState = await db.lastPlaybackState.create({
                userId: req.params.userId,
                positionMinutes: positionMinutes,
                positionSeconds: positionSeconds,
                songId: songId,
                playlistId: playlistId,
            });
            return res.status(201).json(newState);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error updating playback state.' });
    }
}

// Eliminar el estado de reproducción de un usuario
export async function deleteLastPlaybackState (req, res) {
    try {
        const state = await db.lastPlaybackState.findOne({ where: { userId: req.params.userId } });
        if (!state) {
            return res.status(404).json({ message: 'No playback state found for this user.' });
        }
        await state.destroy();
        res.status(204).send();
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error deleting playback state.' });
    }
}

