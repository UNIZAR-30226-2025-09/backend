// models/lastPlaybackState.js
export default (sequelize, DataTypes) => {
    const lastPlaybackState = sequelize.define('lastPlaybackState', {
        positionMinutes: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        positionSeconds: {
            type: DataTypes.INTEGER,
            defaultValue: 0,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        songId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        playlistId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            allowNull: true,
        },
    },{
        tableName: 'lastPlaybackState',
        underscored: true,
    });

    lastPlaybackState.associate = (models) => {
        lastPlaybackState.belongsTo(models.user, { foreignKey: 'userId', unique: true });
        lastPlaybackState.belongsTo(models.song, { foreignKey: 'songId' });
        lastPlaybackState.belongsTo(models.playlist, { foreignKey: 'playlistId' });
    };

    return lastPlaybackState;
};
