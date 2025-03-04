'use strict';
module.exports = (sequelize, DataTypes) => {
    const Friendship = sequelize.define('Friendship', {
        user1_id: { type: DataTypes.INTEGER, primaryKey: true },
        user2_id: { type: DataTypes.INTEGER, primaryKey: true },
        state_friend_request: DataTypes.STRING
    }, { tableName: "Friendship", timestamps: false });

    return Friendship;
};
