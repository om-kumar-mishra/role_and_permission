'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ourAwesomeTeams', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.TEXT
      },
      designation: {
        type: Sequelize.STRING
      },
      mail: {
        type: Sequelize.STRING
      },
      skype: {
        type: Sequelize.STRING
      },
      linkedin: {
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
    await queryInterface.dropTable('ourAwesomeTeams');
  }
};