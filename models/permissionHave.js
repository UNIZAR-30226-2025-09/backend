'use strict';
module.exports = (sequelize, DataTypes) => {
    const PermissionHave = sequelize.define('PermissionHave', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true },
        type_permission: DataTypes.STRING
    }, { tableName: "PermissionHave", timestamps: false });

    return PermissionHave;
};
