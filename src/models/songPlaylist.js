'use strict';
module.exports = (sequelize, DataTypes) => {
    const song_playlist = sequelize.define('song_playlist', {
        song_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true },
        date: { type: DataTypes.DATE },
    }, { tableName: "song_playlist", timestamps: false });

    return song_playlist;
};
