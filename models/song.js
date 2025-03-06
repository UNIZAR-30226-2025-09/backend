'use strict';
module.exports = (sequelize, DataTypes) => {
    const song = sequelize.define('song', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nombre: { type: DataTypes.STRING, allowNull: false },
        duracion: DataTypes.INTEGER,
        lyrics: DataTypes.TEXT,
        foto_video: DataTypes.STRING,
        url_mp3: { type: DataTypes.STRING, allowNull: false } // Nueva columna en el modelo
    }, { tableName: "song", timestamps: false });

    song.associate = function(models) {
        song.belongsToMany(models.artist, { through: "song_artist", foreignKey: "song_id" });
        song.belongsToMany(models.playlist, { through: "song_playlist", foreignKey: "song_id" });
        song.belongsToMany(models.user, { through: "song_like", foreignKey: "song_id" });
    };

    return song;
};