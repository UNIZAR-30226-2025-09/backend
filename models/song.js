'use strict';
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nombre: { type: DataTypes.STRING, allowNull: false },
        duracion: DataTypes.INTEGER,
        lyrics: DataTypes.TEXT,
        foto_video: DataTypes.STRING
    }, { tableName: "Song", timestamps: false });

    Song.associate = function(models) {
        Song.belongsToMany(models.Artist, { through: "SongArtist", foreignKey: "song_id" });
        Song.belongsToMany(models.Playlist, { through: "SongPlaylist", foreignKey: "song_id" });
        Song.belongsToMany(models.User, { through: "SongLike", foreignKey: "song_id" });
    };

    return Song;
};
