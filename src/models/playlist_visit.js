export default (sequelize, DataTypes) => {
    const playlistVisit = sequelize.define('playlist_visit', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
        user_id: { type: DataTypes.INTEGER, allowNull: false },
        playlist_id: { type: DataTypes.INTEGER, allowNull: false },
        visited_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW }
    }, {
        tableName: "playlist_visit",
        timestamps: false
    });

    playlistVisit.associate = function(models) {
        playlistVisit.belongsTo(models.user, { foreignKey: "user_id" });
        playlistVisit.belongsTo(models.playlist, { foreignKey: "playlist_id" });
    };

    return playlistVisit;
};