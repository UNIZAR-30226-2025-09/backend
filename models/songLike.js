'use strict';
module.exports = (sequelize, DataTypes) => {
    const SongLike = sequelize.define('SongLike', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        song_id: { type: DataTypes.INTEGER, primaryKey: true }
    }, { tableName: "SongLike", timestamps: false });

    return SongLike;
};
