export default (sequelize, DataTypes) => {
    const UserPlaylist = sequelize.define(
        "user_playlist",
        {
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "users",
                    key: "id"
                },
                onDelete: "CASCADE"
            },
            song_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
                references: {
                    model: "song",
                    key: "id"
                },
                onDelete: "CASCADE"
            },
            position: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 0
            },
            added_at: {
                type: DataTypes.DATE,
                defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
                allowNull: false
            }
        },
        {
            tableName: "user_playlist",
            timestamps: false
        }
    );

    // Definir asociaciones
    UserPlaylist.associate = (models) => {
        UserPlaylist.belongsTo(models.user, { foreignKey: "user_id" });
        UserPlaylist.belongsTo(models.song, { foreignKey: "song_id" });
    };

    return UserPlaylist;
};
