export default (sequelize, DataTypes) => {
    const song = sequelize.define('song', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        duration: DataTypes.INTEGER,
        lyrics: DataTypes.TEXT,
        photo_video: DataTypes.STRING,
        url_mp3: { type: DataTypes.STRING },
        type: DataTypes.STRING,
        genre: { type: DataTypes.STRING }
    }, { tableName: "song", timestamps: false });

    song.associate = function(models) {
        song.belongsToMany(models.artist, { through: "song_artist", foreignKey: "song_id" });
        song.belongsToMany(models.playlist, { through: "song_playlist", foreignKey: "song_id" });
        song.belongsToMany(models.user, { through: "song_like", foreignKey: "song_id", as: "likedBy"});
        
        song.belongsToMany(models.playlist, {
            through: "song_playlist",
            foreignKey: "song_id",
            as: "album"
        });
        
        song.hasMany(models.lastPlaybackState, { foreignKey: 'songId' });

    };

    return song;
};