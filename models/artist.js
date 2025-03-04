'use strict';
module.exports = (sequelize, DataTypes) => {
    const Artist = sequelize.define('Artist', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nombre: { type: DataTypes.STRING, allowNull: false },
        bio: DataTypes.TEXT
    }, { tableName: "Artist", timestamps: false });

    Artist.associate = function(models) {
        Artist.belongsToMany(models.Song, { through: "SongArtist", foreignKey: "artist_id" });
    };

    return Artist;
};
