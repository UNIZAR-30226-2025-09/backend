'use strict';
module.exports = (sequelize, DataTypes) => {
    const playlist = sequelize.define('playlist', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        description: DataTypes.TEXT,
        type: DataTypes.STRING,
        portada: DataTypes.STRING
    }, { tableName: "playlist", timestamps: false });

    //module.exports = Playlist;

    playlist.associate = function(models) {
<<<<<<< HEAD:models/playlist.js
        playlist.belongsTo(models.User, { foreignKey: "user_id" });
        playlist.belongsToMany(models.Song, { through: "song_playlist", foreignKey: "playlist_id" });
        playlist.belongsToMany(models.User, { through: "playlist_like", foreignKey: "playlist_id" });
        playlist.belongsToMany(models.User, { through: "playlist_feedback", foreignKey: "playlist_id" });
        playlist.belongsToMany(models.User, { through: "permission_have", foreignKey: "playlist_id" });
=======
        playlist.belongsTo(models.usuario, { foreignKey: "user_id" });
        playlist.belongsToMany(models.song, { through: "song_playlist", foreignKey: "playlist_id" });
        playlist.belongsToMany(models.usuario, { through: "playlist_like", foreignKey: "playlist_id" });
        playlist.belongsToMany(models.usuario, { through: "playlist_feedback", foreignKey: "playlist_id" });
        playlist.belongsToMany(models.usuario, { through: "permission_have", foreignKey: "playlist_id" });
>>>>>>> 1e62340 (Cambios para cambio de rama):src/models/playlist.js
    };

    return playlist;
};
