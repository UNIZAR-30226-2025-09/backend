export default (sequelize, DataTypes) => {
    const SongLike = sequelize.define('SongLike', {
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true  // Puedes agregar primaryKey si lo deseas
        },
        song_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true  // Puedes agregar primaryKey si lo deseas
        }
    }, {
        tableName: 'song_like',   // Especifica el nombre de la tabla
        timestamps: false         // No usaremos los campos `createdAt` y `updatedAt` en este modelo
    });

    return SongLike;
};
