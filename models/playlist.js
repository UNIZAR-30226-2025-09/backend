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

    playlist.associate = function(models) {
        playlist.belongsTo(models.user, { foreignKey: "user_id" });
        playlist.belongsToMany(models.song, { through: "song_playlist", foreignKey: "playlist_id" });
        playlist.belongsToMany(models.user, { through: "playlist_like", foreignKey: "playlist_id" });
        playlist.belongsToMany(models.user, { through: "playlist_feedback", foreignKey: "playlist_id" });
        playlist.belongsToMany(models.user, { through: "permission_have", foreignKey: "playlist_id" });
    };

    return playlist;
};
