export default (sequelize, DataTypes) => {
    const PlaylistLike = sequelize.define('playlist_like', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'users',
                key: 'id'
            }
        },
        playlist_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'playlists',
                key: 'id'
            }
        }
    }, {
        tableName: "playlist_like",
        timestamps: false,
        underscored: true
    });

    return PlaylistLike;
};
