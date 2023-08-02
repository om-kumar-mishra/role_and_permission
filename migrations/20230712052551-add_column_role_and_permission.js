'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addColumn('role_and_permissions','permission_slug',{type: Sequelize.STRING})
    queryInterface.addColumn('role_and_permissions','role_name',{type: Sequelize.STRING})
    queryInterface.addColumn('role_and_permissions','modelId',{type: Sequelize.INTEGER})
    queryInterface.addColumn('role_and_permissions','model_name',{type: Sequelize.STRING})

  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeColumn('role_and_permissions', 'permission_slug')
    queryInterface.removeColumn('role_and_permissions', 'role_name')
    queryInterface.removeColumn('role_and_permissions', 'modelId')
    queryInterface.removeColumn('role_and_permissions', 'model_name')

  }
};
