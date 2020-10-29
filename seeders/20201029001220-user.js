'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'user',
      [
        {
          email: 'a@a.com',
          password: 'a',
          nickname: 'aa',
        },
        {
          email: 'b@b.com',
          password: 'b',
          nickname: 'bb',
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user', null, {});
  },
};
