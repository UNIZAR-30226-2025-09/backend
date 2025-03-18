import { Sequelize } from "sequelize";

/**
 * Migración para la creación de tablas en la base de datos.
 * Se ejecuta con `npx sequelize-cli db:migrate`.
 */
export default {
  up: async (queryInterface, Sequelize) => {
    // Tabla USERS
    await queryInterface.createTable("users", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      nickname: { type: Sequelize.STRING, allowNull: false, unique: true },
      password: { type: Sequelize.STRING, allowNull: false },
      mail: { type: Sequelize.STRING, allowNull: false, unique: true },
      style_fav: { type: Sequelize.STRING },
      is_premium: { type: Sequelize.BOOLEAN, defaultValue: false },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), allowNull: false }
    });

    // Tabla ARTIST
    await queryInterface.createTable("artist", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
      bio: { type: Sequelize.TEXT },
      photo: { type: Sequelize.STRING },
      created_at: { type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), allowNull: false }
    });

    // Tabla SONG
    await queryInterface.createTable("song", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
      duration: { type: Sequelize.INTEGER },
      lyrics: { type: Sequelize.TEXT },
      photo_video: { type: Sequelize.STRING },
      url_mp3: { type: Sequelize.STRING, allowNull: false }
    });

    // Tabla PLAYLIST
    await queryInterface.createTable("playlist", {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
      name: { type: Sequelize.STRING, allowNull: false },
      user_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" }, onDelete: "CASCADE", allowNull: true },
      artist_id: { type: Sequelize.INTEGER, references: { model: "artist", key: "id" }, onDelete: "CASCADE", allowNull: true },
      description: { type: Sequelize.TEXT },
      creation_date: { type: Sequelize.DATE, defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), allowNull: false },
      type: { type: Sequelize.STRING },
      typeP: { type: Sequelize.STRING },
      front_page: { type: Sequelize.STRING }
    });

    // Tabla intermedia SONG-ARTIST (M:N)
    await queryInterface.createTable("song_artist", {
      song_id: { type: Sequelize.INTEGER, references: { model: "song", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      artist_id: { type: Sequelize.INTEGER, references: { model: "artist", key: "id" }, onDelete: "CASCADE", primaryKey: true }
    });

    // Tabla intermedia SONG-PLAYLIST (M:N)
    await queryInterface.createTable("song_playlist", {
      song_id: { type: Sequelize.INTEGER, references: { model: "song", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      playlist_id: { type: Sequelize.INTEGER, references: { model: "playlist", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      date: { type: Sequelize.DATE }
    });

    // Tabla intermedia SONG-LIKE (M:N con USER)
    await queryInterface.createTable("song_like", {
      user_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      song_id: { type: Sequelize.INTEGER, references: { model: "song", key: "id" }, onDelete: "CASCADE", primaryKey: true }
    });

    // Tabla intermedia PLAYLIST-LIKE (M:N con USER)
    await queryInterface.createTable("playlist_like", {
      user_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      playlist_id: { type: Sequelize.INTEGER, references: { model: "playlist", key: "id" }, onDelete: "CASCADE", primaryKey: true }
    });

    // Tabla intermedia PLAYLIST-FEEDBACK (M:N con USER)
    await queryInterface.createTable("playlist_feedback", {
      user_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      playlist_id: { type: Sequelize.INTEGER, references: { model: "playlist", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      rating: { type: Sequelize.FLOAT }
    });

    // Tabla FRIENDSHIP (M:N entre USER y USER)
    await queryInterface.createTable("friendship", {
      user1_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      user2_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      state_friend_request: { type: Sequelize.STRING }
    });

    // Tabla PERMISSION-HAVE (M:N entre USER con PLAYLIST)
    await queryInterface.createTable("permission_have", {
      user_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      playlist_id: { type: Sequelize.INTEGER, references: { model: "playlist", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      type_permission: { type: Sequelize.STRING }
    });

    // Tabla CHAT (M:N entre USER y USER)
    await queryInterface.createTable("chat", {
      user1_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      user2_id: { type: Sequelize.INTEGER, references: { model: "users", key: "id" }, onDelete: "CASCADE", primaryKey: true },
      txt_message: { type: Sequelize.STRING }
    });

    // Crear la tabla para almacenar la lista de reproduccion de cada usuario (M:N entre USER y SONG)
    await queryInterface.createTable("user_replist", {
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: "users", key: "id" },
        onDelete: "CASCADE",
        primaryKey: true
      },
      song_id: {
        type: Sequelize.INTEGER,
        references: { model: "song", key: "id" },
        onDelete: "CASCADE",
        primaryKey: true
      },
      position: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
      },
      added_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("user_replist");

    await queryInterface.dropTable("chat");
    await queryInterface.dropTable("permission_have");
    await queryInterface.dropTable("friendship");
    await queryInterface.dropTable("playlist_feedback");
    await queryInterface.dropTable("playlist_like");
    await queryInterface.dropTable("song_like");
    await queryInterface.dropTable("song_playlist");
    await queryInterface.dropTable("song_artist");
    await queryInterface.dropTable("playlist");
    await queryInterface.dropTable("song");
    await queryInterface.dropTable("artist");
    await queryInterface.dropTable("users");

  }
};