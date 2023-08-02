'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'signups',
      'type_user',
      {
        type: Sequelize.STRING
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('signups', 'type_user')
  }
};
