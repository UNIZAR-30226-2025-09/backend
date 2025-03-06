'use strict';
module.exports = (sequelize, DataTypes) => {
    const playlist_like = sequelize.define('playlist_like', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true }
    }, { tableName: "playlist_like", timestamps: false });

    return playlist_like;
};
