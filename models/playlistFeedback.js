'use strict';
module.exports = (sequelize, DataTypes) => {
    const playlist_feedback = sequelize.define('playlist_feedback', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true },
        valoracion: DataTypes.FLOAT
    }, { tableName: "playlist_feedback", timestamps: false });

    return playlist_feedback;
};
