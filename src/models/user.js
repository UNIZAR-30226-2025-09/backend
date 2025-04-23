export default (sequelize, DataTypes) => {
    const user = sequelize.define('user', {  // Nombre de la entidad en singular
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nickname: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        mail: { type: DataTypes.STRING, allowNull: false, unique: true },
        style_fav: DataTypes.STRING,
        is_premium: { type: DataTypes.BOOLEAN, defaultValue: false },
        user_picture: { type: DataTypes.STRING, allowNull: true },
        reset_token: { type: DataTypes.STRING, allowNull: true },
        reset_token_expires: { type: DataTypes.DATE, allowNull: true },
        daily_skips: { type: DataTypes.INTEGER, defaultValue: 5, allowNull: false}
    }, {
        tableName: "users",
        timestamps: false
    });

    user.associate = function(models) {
        user.hasMany(models.playlist, { foreignKey: "user_id" });
        user.belongsToMany(models.song, { through: "song_like", foreignKey: "user_id" });
        user.belongsToMany(models.playlist, { through: "playlist_like", foreignKey: "user_id" });
        user.belongsToMany(models.playlist, { through: "playlist_feedback", foreignKey: "user_id" });
        user.belongsToMany(models.playlist, { through: "permission_have", foreignKey: "user_id" });
        // Usuario como solicitante (user1)
        user.belongsToMany(models.user, {
            through: "friendship",
            as: "FriendRequests",
            foreignKey: "user1_id",
            otherKey: "user2_id"
        });

        // Usuario como receptor (user2)
        user.belongsToMany(models.user, {
            through: "friendship",
            as: "FriendInvitations",
            foreignKey: "user2_id",
            otherKey: "user1_id"
        });

        user.hasMany(models.chat, { 
            foreignKey: "user1_id",
            as: "SentMessages",
            constraints: false
        });
        
        user.hasMany(models.chat, { 
            foreignKey: "user2_id",
            as: "ReceivedMessages",
            constraints: false
        });
                
        user.hasOne(models.lastPlaybackState, { foreignKey: 'userId', as: 'lastPlayback' });
        user.hasMany(models.playlist_visit, { foreignKey: "user_id" });
    };

    return user;
};