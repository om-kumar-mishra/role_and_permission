'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('relax_wes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      success_champions: {
        type: Sequelize.STRING
      },
      salesforce_certification: {
        type: Sequelize.STRING
      },
      happy_customers: {
        type: Sequelize.STRING
      },
      project_delivered: {
        type: Sequelize.STRING
      },
      go_to_market_solution: {
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
    await queryInterface.dropTable('relax_wes');
  }
};