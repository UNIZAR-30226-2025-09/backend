'use strict';
module.exports = (sequelize, DataTypes) => {
    const Playlist = sequelize.define('Playlist', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        description: DataTypes.TEXT,
        type: DataTypes.STRING,
        portada: DataTypes.STRING
    }, { tableName: "Playlist", timestamps: false });

    Playlist.associate = function(models) {
        Playlist.belongsTo(models.User, { foreignKey: "user_id" });
        Playlist.belongsToMany(models.Song, { through: "SongPlaylist", foreignKey: "playlist_id" });
        Playlist.belongsToMany(models.User, { through: "PlaylistLike", foreignKey: "playlist_id" });
        Playlist.belongsToMany(models.User, { through: "PlaylistFeedback", foreignKey: "playlist_id" });
        Playlist.belongsToMany(models.User, { through: "PermissionHave", foreignKey: "playlist_id" });
    };

    return Playlist;
};
