'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'happy_customers',
      'image',
      {
        type: Sequelize.STRING
      }
    )
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('happy_customers', 'image')
  }
};
