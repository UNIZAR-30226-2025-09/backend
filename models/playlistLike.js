'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlaylistLike = sequelize.define('PlaylistLike', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true }
    }, { tableName: "PlaylistLike", timestamps: false });

    return PlaylistLike;
};
