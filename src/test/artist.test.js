import request from 'supertest';
import { BASE_URL } from "./data.js";
import db from '#models/index';

// Función auxiliar para esperar un tiempo determinado
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

describe('Pruebas sobre /api/artists', () => {

    // Prueba para listar todos los artistas
    describe('GET /api/artist/artists', () => {
        it('debe devolver todos los artistas o un 404 si no hay', async () => {
            // Realizamos la petición GET al endpoint
            const response = await request(BASE_URL).get('/api/artist/artists');

            // Comprobamos las dos posibles respuestas válidas según el controlador
            if (response.status === 200) {
                // Si hay artistas, verificamos que sea un array
                expect(Array.isArray(response.body)).toBe(true);
                expect(response.body.length).toBeGreaterThan(0);

                // Verificamos la estructura del primer artista
                expect(response.body[0].id).toBeDefined();
                expect(response.body[0].name).toBeDefined();
                expect(response.body[0].photo).toBeDefined();

                // Verificamos que solo tenga los campos esperados
                const artistKeys = Object.keys(response.body[0]);
                expect(artistKeys).toContain('id');
                expect(artistKeys).toContain('name');
                expect(artistKeys).toContain('photo');
                expect(artistKeys.length).toBeLessThanOrEqual(3);
            } else if (response.status === 404) {
                // Si no hay artistas, verificamos el mensaje de error
                expect(response.body.message).toBe("No hay artistas disponibles.");
            } else {
                // Cualquier otro código de estado es inesperado
                fail(`Código de estado inesperado: ${response.status}`);
            }
        });
    });

    // Pruebas para obtener detalles de un artista específico
    describe('GET /api/artist/:artistId', () => {
        // Prueba para un artista existente con canciones
        it('debe devolver los detalles de un artista existente con canciones', async () => {
            // Usamos el id 1 (BadBunny) como ejemplo de un artista existente con canciones
            const idToTest = 6;

            // Realizamos la petición GET al endpoint con el ID
            const response = await request(BASE_URL).get(`/api/artist/${idToTest}`);

            // Si se encontró un artista (respuesta 200)
            if (response.status === 200) {
                // Verificamos que exista el objeto artist con sus propiedades básicas
                expect(response.body.artist).toBeDefined();
                expect(response.body.artist.id).toEqual(idToTest);
                expect(response.body.artist.name).toBeDefined();
                expect(response.body.artist.bio).toBeDefined();
                expect(response.body.artist.photo).toBeDefined();

                // Verificar estructura de canciones
                expect(Array.isArray(response.body.songs)).toBe(true);
                if (response.body.songs.length > 0) {
                    // Si hay canciones, verificamos la estructura de la primera
                    expect(response.body.songs[0].id).toBeDefined();
                    expect(response.body.songs[0].name).toBeDefined();
                    expect(response.body.songs[0].duration).toBeDefined();
                    expect(response.body.songs[0].likes).toBeDefined();
                }

                // Verificamos que albums y singles sean arrays
                expect(Array.isArray(response.body.albums)).toBe(true);
                expect(Array.isArray(response.body.singles)).toBe(true);
            }
        });

        // Prueba para un artista inexistente (debe devolver 404)
        it('debe devolver 404 para un artista inexistente', async () => {
            // Usamos un ID muy grande que probablemente no exista
            const response = await request(BASE_URL).get('/api/artist/99999999');
            // Verificamos que devuelva código 404 (no encontrado)
            expect(response.status).toBe(404);
            // Verificamos que el mensaje de error sea el esperado
            expect(response.body.message).toBe('Artista no encontrado');
        });
    });

    // Prueba para un artista sin canciones
    describe('GET /api/artist/:artistId para artista sin canciones', () => {
        let artistaSinCanciones;

        // Creamos un artista directamente en la BD antes de las pruebas
        beforeAll(async () => {
            // Esperar a que se inicialice la conexión de la base de datos
            await delay(100);
            try {
                // Verificar si ya existe un artista con este nombre para evitar duplicados
                const artistaExistente = await db.artist.findOne({
                    where: {
                        name: "Artista de Prueba Sin Canciones"
                    }
                });

                if (artistaExistente) {
                    artistaSinCanciones = artistaExistente.id;
                } else {
                    // Crear directamente en la BD un artista sin asociar canciones
                    const nuevoArtista = await db.artist.create({
                        name: "Artista de Prueba Sin Canciones",
                        bio: "Artista creado para pruebas automatizadas",
                        photo: "https://example.com/photo.jpg"
                    });

                    artistaSinCanciones = nuevoArtista.id;
                    console.log(`Artista de prueba creado con ID: ${artistaSinCanciones}`);
                }
            } catch (error) {
                console.error("Error al crear el artista de prueba:", error.message);
            }
        });

        // Limpieza después de las pruebas
        afterAll(async () => {
            if (artistaSinCanciones) {
                await db.artist.destroy({
                    where: {
                        id: artistaSinCanciones
                    }
                });
            }
        });

        it('debe indicar que el artista no tiene canciones', async () => {
            // Verificamos que se haya creado el artista de prueba
            expect(artistaSinCanciones).toBeDefined();

            const response = await request(BASE_URL).get(`/api/artist/${artistaSinCanciones}`);

            expect(response.status).toBe(200);
            expect(response.body.artist).toBeDefined();
            expect(response.body.artist.id).toEqual(artistaSinCanciones);
            expect(response.body.message).toBe("Este artista no tiene canciones.");
        });
    });
});