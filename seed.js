// seed.js
const { Pool } = require('pg');

// Configura la conexión usando variables de entorno
const pool = new Pool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    user: process.env.DB_USER || 'my_user',
    password: process.env.DB_PASSWORD || 'my_password',
    database: process.env.DB_NAME || 'my_database',
    ssl: process.env.SSLMODE === 'require' ? { rejectUnauthorized: false } : false,
});

async function seed() {
    try {
        const client = await pool.connect();
        console.log("Conectado a la base de datos.");

        // Eliminar tablas si existen para tener un seed limpio (usar con precaución)
        await client.query(`DROP TABLE IF EXISTS playlist_song;`);
        await client.query(`DROP TABLE IF EXISTS song_artist;`);
        await client.query(`DROP TABLE IF EXISTS playlist_feedback;`);
        await client.query(`DROP TABLE IF EXISTS song_feedback;`);
        await client.query(`DROP TABLE IF EXISTS playlist;`);
        await client.query(`DROP TABLE IF EXISTS song;`);
        await client.query(`DROP TABLE IF EXISTS artist;`);

        // Crear tabla ARTIST
        await client.query(`
      CREATE TABLE artist (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        bio TEXT,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

        // Crear tabla SONG
        await client.query(`
      CREATE TABLE song (
        id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        duration INT,
        release_date DATE,
        lyrics TEXT
      );
    `);

        // Tabla intermedia para relacionar SONG y ARTIST (muchos a muchos)
        await client.query(`
      CREATE TABLE song_artist (
        song_id INT REFERENCES song(id),
        artist_id INT REFERENCES artist(id),
        PRIMARY KEY (song_id, artist_id)
      );
    `);

        // Crear tabla PLAYLIST
        //Se modelan tanto listas de reproducción (playlist) como álbumes (album)
        await client.query(`
      CREATE TABLE playlist (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        description TEXT,
        creation_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        owner_id INT, -- Se interpretará según el campo 'type'
        type VARCHAR(50) -- "playlist" para oyentes, "album" para artistas
      );
    `);

        // Tabla intermedia para relacionar PLAYLIST y SONG
        await client.query(`
      CREATE TABLE playlist_song (
        playlist_id INT REFERENCES playlist(id),
        song_id INT REFERENCES song(id),
        position INT,
        added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (playlist_id, song_id)
      );
    `);

        // Opcional: Crear tablas de feedback para canciones y playlists
        await client.query(`
      CREATE TABLE song_feedback (
        song_id INT REFERENCES song(id),
        user_id INT, -- Asumimos que se relaciona con la entidad USER, la cual se gestiona aparte
        like BOOLEAN,
        rating INT,
        PRIMARY KEY (song_id, user_id)
      );
    `);

        await client.query(`
      CREATE TABLE playlist_feedback (
        playlist_id INT REFERENCES playlist(id),
        user_id INT, -- Similar a song_feedback
        like BOOLEAN,
        rating INT,
        PRIMARY KEY (playlist_id, user_id)
      );
    `);

        // Insertar datos de ejemplo en ARTIST
        const artistResult = await client.query(`
      INSERT INTO artist (name, bio) VALUES
      ('Artist One', 'Biografía de Artist One.'),
      ('Artist Two', 'Biografía de Artist Two.'),
      ('Artist Three', 'Biografía de Artist Three.')
      RETURNING id;
    `);
        console.log("Artistas insertados:", artistResult.rows);

        // Insertar datos de ejemplo en SONG
        const songResult = await client.query(`
      INSERT INTO song (title, duration, release_date, lyrics) VALUES
      ('Song A', 210, '2023-01-15', 'Letra de la canción A.'),
      ('Song B', 180, '2023-02-20', 'Letra de la canción B.'),
      ('Song C', 240, '2023-03-10', 'Letra de la canción C.')
      RETURNING id;
    `);
        console.log("Canciones insertadas:", songResult.rows);

        // Insertar relaciones en SONG_ARTIST
        // Asignamos Artist One a Song A, Artist Two a Song B, y Song C con Artist One y Artist Three
        await client.query(`
      INSERT INTO song_artist (song_id, artist_id) VALUES
      (1, 1),
      (2, 2),
      (3, 1),
      (3, 3);
    `);
        console.log("Relaciones en SONG_ARTIST insertadas.");

        // Insertar datos en PLAYLIST
        // Se crean una playlist de oyente y un álbum de un artista
        const playlistResult = await client.query(`
      INSERT INTO playlist (name, description, owner_id, type) VALUES
      ('My Favorites', 'Playlist creada por un oyente.', 1, 'playlist'),
      ('Artist One Album', 'Álbum publicado por Artist One.', 1, 'album')
      RETURNING id;
    `);
        console.log("Playlists insertadas:", playlistResult.rows);

        // Insertar relaciones en PLAYLIST_SONG
        await client.query(`
      INSERT INTO playlist_song (playlist_id, song_id, position) VALUES
      (1, 1, 1),
      (1, 3, 2),
      (2, 3, 1);
    `);
        console.log("Relaciones en PLAYLIST_SONG insertadas.");

        client.release();
        console.log("Seed completado exitosamente.");
        process.exit(0);
    } catch (err) {
        console.error("Error durante el seed:", err);
        process.exit(1);
    }
}

seed();
