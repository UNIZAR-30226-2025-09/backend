/**
 * Agrega datos de prueba a la base de datos.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function up(queryInterface, Sequelize) {
  // Agregar datos iniciales aquí
  // Ejemplo:
  // await queryInterface.bulkInsert('People', [
  //   { name: 'John Doe', isBetaMember: false }
  // ], {});
}

/**
 * Elimina los datos de prueba insertados en la migración `up`.
 * @param {import('sequelize').QueryInterface} queryInterface
 * @param {import('sequelize').Sequelize} Sequelize
 */
export async function down(queryInterface, Sequelize) {
  // Eliminar datos iniciales aquí
  // Ejemplo:
  // await queryInterface.bulkDelete('People', null, {});
}