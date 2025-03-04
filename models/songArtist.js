'use strict';
module.exports = (sequelize, DataTypes) => {
    const song_artist = sequelize.define('song_artist', {
        song_id: { type: DataTypes.INTEGER, primaryKey: true },
        artist_id: { type: DataTypes.INTEGER, primaryKey: true }
    }, { tableName: "song_artist", timestamps: false });

    return song_artist;
};
