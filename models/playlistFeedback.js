'use strict';
module.exports = (sequelize, DataTypes) => {
    const PlaylistFeedback = sequelize.define('PlaylistFeedback', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true },
        valoracion: DataTypes.FLOAT
    }, { tableName: "PlaylistFeedback", timestamps: false });

    return PlaylistFeedback;
};
