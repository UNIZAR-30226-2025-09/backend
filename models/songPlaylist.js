'use strict';
module.exports = (sequelize, DataTypes) => {
    const SongPlaylist = sequelize.define('SongPlaylist', {
        song_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true }
    }, { tableName: "SongPlaylist", timestamps: false });

    return SongPlaylist;
};
