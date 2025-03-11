export default (sequelize, DataTypes) => {
    const Artist = sequelize.define(
        "artist",
        {
            id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false },
            name: { type: DataTypes.STRING, allowNull: false },
            bio: DataTypes.TEXT
        },
        { tableName: "artist", timestamps: false }
    );

    Artist.associate = (models) => {
        Artist.belongsToMany(models.song, { through: "song_artist", foreignKey: "artist_id" });
    };

    return Artist;
};