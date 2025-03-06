'use strict';
module.exports = (sequelize, DataTypes) => {
    const chat = sequelize.define('chat', {
        user1_id: { type: DataTypes.INTEGER, primaryKey: true },
        user2_id: { type: DataTypes.INTEGER, primaryKey: true },
        txt_message: DataTypes.STRING
    }, { tableName: "chat", timestamps: false });

    return chat;
};
