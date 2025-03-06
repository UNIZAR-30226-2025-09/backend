'use strict';
module.exports = (sequelize, DataTypes) => {
    const permission_have = sequelize.define('permission_have', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true },
        type_permission: DataTypes.STRING
    }, { tableName: "permission_have", timestamps: false });

    return permission_have;
};
