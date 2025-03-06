'use strict';
module.exports = (sequelize, DataTypes) => {
    const usuario = sequelize.define('usuario', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        nickname: { type: DataTypes.STRING, allowNull: false, unique: true },
        password: { type: DataTypes.STRING, allowNull: false },
        mail: { type: DataTypes.STRING, allowNull: false, unique: true },
        style_fav: DataTypes.STRING,
        is_premium: { type: DataTypes.BOOLEAN, defaultValue: false }
    }, { tableName: "usuario", timestamps: false });


    usuario.associate = function(models) {
        usuario.hasMany(models.playlist, { foreignKey: "user_id" });
        usuario.belongsToMany(models.song, { through: "song_like", foreignKey: "user_id" });
        usuario.belongsToMany(models.playlist, { through: "playlist_like", foreignKey: "user_id" });
        usuario.belongsToMany(models.playlist, { through: "playlist_feedback", foreignKey: "user_id" });
        usuario.belongsToMany(models.playlist, { through: "permission_have", foreignKey: "user_id" });
        usuario.belongsToMany(models.usuario, { through: "friendship", as: "Friends", foreignKey: "user1_id" });
        usuario.belongsToMany(models.usuario, { through: "chat", as: "ChatUser", foreignKey: "user1_id" });
    };

    return usuario;
};
