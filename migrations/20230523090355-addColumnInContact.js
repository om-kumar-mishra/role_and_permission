'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn(
      'contacts',
      'email2',
      {
        type: Sequelize.STRING
      }
    )
  },

  

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('contacts', 'email2')
  }
};
