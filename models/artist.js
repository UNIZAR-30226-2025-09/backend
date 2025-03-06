'use strict';
module.exports = (sequelize, DataTypes) => {
    const artist = sequelize.define('artist', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        bio: DataTypes.TEXT
    }, { tableName: "artist", timestamps: false });

    artist.associate = function(models) {
        artist.belongsToMany(models.song, { through: "song_artist", foreignKey: "artist_id" });
    };

    return artist;
};
