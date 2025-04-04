import request from 'supertest';
import { BASE_URL, getUserId } from './data.js';

describe("Pruebas sobre /api/playlists", () => {
    let createdPlaylist = null;
    let likedPlaylistId = null;
    let songId = null;

    it("GET /api/playlists - debería devolver todas las playlists", async () => {
        const res = await request(BASE_URL).get("/api/playlists");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTrue();
    });

    it("GET /api/playlists/vibra - debería devolver las playlists de Vibra", async () => {
        const res = await request(BASE_URL).get("/api/playlists/vibra");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTrue();
    });

    it("POST /api/playlists - debería crear una playlist", async () => {
        const res = await request(BASE_URL)
            .post("/api/playlists")
            .send({
                name: "Playlist Test",
                description: "Descripción",
                type: "public",
                front_page: "playlist_images/default.png",
                user_id: getUserId()
            });

        expect(res.status).toBe(201);
        expect(res.body.id).toBeDefined();
        createdPlaylist = res.body;
    });

    it("GET /api/playlists/:id - debería obtener la playlist creada", async () => {
        const res = await request(BASE_URL).get(`/api/playlists/${createdPlaylist.id}`);
        expect(res.status).toBe(200);
    });

    it("PUT /api/playlists/:id - debería actualizar la playlist", async () => {
        const res = await request(BASE_URL)
            .put(`/api/playlists/${createdPlaylist.id}`)
            .send({
                name: "Actualizada",
                description: "Modificada",
                type: "private"
            });

        expect(res.status).toBe(200);
        expect(res.body.name).toBe("Actualizada");
    });

    it("POST /api/playlists/:id/like - debería dar like a la playlist", async () => {
        const res = await request(BASE_URL)
            .post(`/api/playlists/${createdPlaylist.id}/like`)
            .send({ user_id: getUserId() });

        expect(res.status).toBe(200);
        likedPlaylistId = createdPlaylist.id;
    });

    it("GET /api/playlists/:id/like - debería verificar si fue marcada como favorita", async () => {
        const res = await request(BASE_URL)
            .get(`/api/playlists/${likedPlaylistId}/like?user_id=${getUserId()}`);

        expect(res.status).toBe(200);
        expect(res.body.isLiked).toBeTrue();
    });

    it("GET /api/playlists/liked/:userId - debería devolver playlists que el usuario ha dado like", async () => {
        const res = await request(BASE_URL).get(`/api/playlists/liked/${getUserId()}`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTrue();
    });

    it("GET /api/playlists/users/:userId/playlists - debería devolver playlists creadas por el usuario", async () => {
        const res = await request(BASE_URL).get(`/api/playlists/users/${getUserId()}/playlists`);
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTrue();
    });

    it("POST /api/playlists/songliked - debería crear u obtener playlist de 'Me Gusta'", async () => {
        const res = await request(BASE_URL)
            .post("/api/playlists/songliked")
            .send({ user_id: getUserId() });

        expect(res.status).toBe(200);
        expect(res.body.playlist).toBeDefined();
    });

    it("GET /api/playlists/liked-song/:userId - debería obtener playlist 'Me Gusta'", async () => {
        const res = await request(BASE_URL).get(`/api/playlists/liked-song/${getUserId()}`);
        expect(res.status).toBe(200);
        expect(res.body.typeP).toBe("Vibra_likedSong");
    });

    it("POST /api/playlists/:id/addSong - debería añadir una canción a la playlist", async () => {
        const songsRes = await request(BASE_URL).get("/api/songs");
        expect(songsRes.status).toBe(200);
        songId = songsRes.body[0]?.id;

        if (!songId) fail("No hay canciones en la base de datos.");

        const res = await request(BASE_URL)
            .post(`/api/playlists/${createdPlaylist.id}/addSong`)
            .send({ songId });

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch(/añadida/i);
    });

    it("POST /api/playlists/:id/deleteSong - debería eliminar la canción de la playlist", async () => {
        const res = await request(BASE_URL)
            .post(`/api/playlists/${createdPlaylist.id}/deleteSong`)
            .send({ songId });

        expect(res.status).toBe(200);
        expect(res.body.message).toMatch(/eliminada/i);
    });

    it("DELETE /api/playlists/:id/like - debería quitar el like de la playlist", async () => {
        const res = await request(BASE_URL)
            .delete(`/api/playlists/${likedPlaylistId}/like`)
            .send({ user_id: getUserId() });

        expect(res.status).toBe(200);
    });

    it("DELETE /api/playlists/:id - debería eliminar la playlist", async () => {
        const res = await request(BASE_URL)
            .delete(`/api/playlists/${createdPlaylist.id}`);
        expect(res.status).toBe(200);
    });
});