'use strict';
module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nickname: { type: DataTypes.STRING, allowNull: false, unique: true },
        contrasena: { type: DataTypes.STRING, allowNull: false },
        correo: { type: DataTypes.STRING, allowNull: false, unique: true },
        estilo_fav: DataTypes.STRING,
        is_premium: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, { tableName: "user", timestamps: false });

    user.associate = function(models) {
        user.hasMany(models.Playlist, { foreignKey: "user_id" });
        user.belongsToMany(models.Song, { through: "song_like", foreignKey: "user_id" });
        user.belongsToMany(models.Playlist, { through: "playlist_like", foreignKey: "user_id" });
        user.belongsToMany(models.Playlist, { through: "playlist_feedback", foreignKey: "user_id" });
        user.belongsToMany(models.Playlist, { through: "permission_have", foreignKey: "user_id" });
        user.belongsToMany(models.User, { through: "friendship", as: "Friends", foreignKey: "user1_id" });
        user.belongsToMany(models.User, { through: "chat", as: "ChatUser", foreignKey: "user1_id" });
    };

    return user;
};
