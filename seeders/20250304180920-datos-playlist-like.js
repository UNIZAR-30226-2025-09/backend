/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('playlist_like', [
        { user_id: 1, playlist_id: 1 },
        { user_id: 2, playlist_id: 1 },
        { user_id: 3, playlist_id: 2 },
        { user_id: 4, playlist_id: 3 },
        { user_id: 2, playlist_id: 3 },
        { user_id: 5, playlist_id: 2 },
    ], {});
}

/**
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('playlist_like', null, {});
}
