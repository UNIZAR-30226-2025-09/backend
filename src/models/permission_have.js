export default (sequelize, DataTypes) => {
    const permission_have = sequelize.define('permission_have', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true },
        type_permission: DataTypes.STRING
    }, {
        tableName: "permission_have",
        timestamps: false
    });

    permission_have.associate = (models) => {
        permission_have.belongsTo(models.user, {
            foreignKey: 'user_id',
            as: 'User'
        });
        permission_have.belongsTo(models.playlist, {
            foreignKey: 'playlist_id',
            as: 'Playlist'
        });
    };

    return permission_have;
};