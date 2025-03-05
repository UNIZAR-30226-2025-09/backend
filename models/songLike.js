'use strict';
module.exports = (sequelize, DataTypes) => {
    const song_like = sequelize.define('song_like', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        song_id: { type: DataTypes.INTEGER, primaryKey: true }
    }, { tableName: "song_like", timestamps: false });

    return song_like;
};
