'use strict';
module.exports = (sequelize, DataTypes) => {
    const SongArtist = sequelize.define('SongArtist', {
        song_id: { type: DataTypes.INTEGER, primaryKey: true },
        artist_id: { type: DataTypes.INTEGER, primaryKey: true }
    }, { tableName: "SongArtist", timestamps: false });

    return SongArtist;
};
