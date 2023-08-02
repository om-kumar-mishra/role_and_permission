'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('Permissions','module_name',{type: Sequelize.STRING})
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('Permissions', 'module_name')
  }
};
