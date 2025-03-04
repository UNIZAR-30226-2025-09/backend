'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nickname: { type: DataTypes.STRING, allowNull: false, unique: true },
        contrasena: { type: DataTypes.STRING, allowNull: false },
        correo: { type: DataTypes.STRING, allowNull: false, unique: true },
        estilo_fav: DataTypes.STRING,
        is_premium: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, { tableName: "User", timestamps: false });

    User.associate = function(models) {
        User.hasMany(models.Playlist, { foreignKey: "user_id" });
        User.belongsToMany(models.Song, { through: "SongLike", foreignKey: "user_id" });
        User.belongsToMany(models.Playlist, { through: "PlaylistLike", foreignKey: "user_id" });
        User.belongsToMany(models.Playlist, { through: "PlaylistFeedback", foreignKey: "user_id" });
        User.belongsToMany(models.Playlist, { through: "PermissionHave", foreignKey: "user_id" });
        User.belongsToMany(models.User, { through: "Friendship", as: "Friends", foreignKey: "user1_id" });
        User.belongsToMany(models.User, { through: "Chat", as: "ChatUser", foreignKey: "user1_id" });
    };

    return User;
};
