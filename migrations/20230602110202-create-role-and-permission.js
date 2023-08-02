'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('role_and_permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      roleId: {
        type: Sequelize.INTEGER
      },
      permission: {
        type: Sequelize.INTEGER
      },

      status: {
        type: Sequelize.INTEGER
      },
      permission_slug: {
        type: Sequelize.STRING
      },
      role_name: {
        type: Sequelize.STRING
      },
      modelId: {
        type: Sequelize.INTEGER
      },
      model_name: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('role_and_permissions');
  }
};