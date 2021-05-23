'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'John Doe',
          email: 'john@email.com',
          uuid: '35cf1b89-56d3-433c-9f43-4198eb3725de',
          role: 'admin',
          createdAt: '2021-05-23 20:27:56',
          updatedAt: '2021-05-23 20:27:56',
        },
        {
          name: 'Jane Doe',
          email: 'jane@email.com',
          uuid: '21ed307f-b72b-494e-b6e1-4d4e8043724e',
          role: 'admin',
          createdAt: '2021-05-23 20:27:56',
          updatedAt: '2021-05-23 20:27:56',
        },
      ],
      {}
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
  },
}
