'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    // return Promise.all([
    //   queryInterface.changeColumn('Banners', 'details', {
    //     type: Sequelize.LONGTEXT,
    //     allowNull: false
    //   }),
    // ]);


    return Promise.all([
      queryInterface.changeColumn('Banners', 'details', {
          type: Sequelize.TEXT,
          allowNull: true,
      }, )
  ])
  },
  

  async down (queryInterface, Sequelize) {
   // return Promise.all([queryInterface.changeColumn('Banners', 'details')]);
    return Promise.all([
      queryInterface.changeColumn('Banners', 'details', {
          type: Sequelize.TEXT,
          allowNull: true,
      }, )
  ])
  }
};
