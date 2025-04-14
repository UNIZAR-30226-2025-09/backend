export default (sequelize, DataTypes) => {
    const playlist_feedback = sequelize.define('playlist_feedback', {
        user_id: { type: DataTypes.INTEGER, primaryKey: true },
        playlist_id: { type: DataTypes.INTEGER, primaryKey: true },
        rating: DataTypes.FLOAT
    }, { tableName: "playlist_feedback", timestamps: false, underscored: true });
    
    return playlist_feedback;
};