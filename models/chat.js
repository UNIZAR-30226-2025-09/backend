'use strict';
module.exports = (sequelize, DataTypes) => {
    const Chat = sequelize.define('Chat', {
        user1_id: { type: DataTypes.INTEGER, primaryKey: true },
        user2_id: { type: DataTypes.INTEGER, primaryKey: true },
        txt_message: DataTypes.STRING
    }, { tableName: "Chat", timestamps: false });

    return Chat;
};
