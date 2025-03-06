'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nickname: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        mail: { type: DataTypes.STRING, allowNull: false, unique: true },
        style_fav: DataTypes.STRING,
        is_premium: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, { tableName: "user", timestamps: false });

    user.associate = function(models) {
        user.hasMany(models.playlist, { foreignKey: "user_id" });
        user.belongsToMany(models.song, { through: "song_like", foreignKey: "user_id" });
        user.belongsToMany(models.playlist, { through: "playlist_like", foreignKey: "user_id" });
        user.belongsToMany(models.playlist, { through: "playlist_feedback", foreignKey: "user_id" });
        user.belongsToMany(models.playlist, { through: "permission_have", foreignKey: "user_id" });
        user.belongsToMany(models.user, { through: "friendship", as: "Friends", foreignKey: "user1_id" });
        user.belongsToMany(models.user, { through: "chat", as: "ChatUser", foreignKey: "user1_id" });
    };

    return user;
};
