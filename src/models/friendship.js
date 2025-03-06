'use strict';
module.exports = (sequelize, DataTypes) => {
    const friendship = sequelize.define('friendship', {
        user1_id: { type: DataTypes.INTEGER, primaryKey: true },
        user2_id: { type: DataTypes.INTEGER, primaryKey: true },
        state_friend_request: DataTypes.STRING
    }, { tableName: "friendship", timestamps: false });

    return friendship;
};
