'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Permissions', [
      {
        name: "View home",
        sort_name: "view_home",
        module_name: "Home",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "View banner",
        sort_name: "view_banner",
        module_name: "Home",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "add banner",
        sort_name: "add_banner",
        module_name: "Home",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Delete banner",
        sort_name: "delete_banner",
        module_name: "Home",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Edit banner",
        sort_name: "edit_banner",
        module_name: "Home",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "View see what we can",
        sort_name: "view_see_what_we_can",
        module_name: "Home",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Add see what we can",
        sort_name: "add_see_what_we_can",
        module_name: "Home",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Delete see what we can",
        sort_name: "delete_see_what_we_can",
        module_name: "Home",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Edit see what we can",
        sort_name: "edit_see_what_we_can",
        module_name: "Home",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },



      //management

      {
        name: "View Role and permission ",
        sort_name: "view_role_and_permission",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },




      //ROLE
      {
        name: "View role",
        sort_name: "view_role",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Add role",
        sort_name: "add_role",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Delete role",
        sort_name: "delete_role",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Edit role",
        sort_name: "edit_role",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Assign permission",
        sort_name: "assign_permission",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },


      //user management
      {
        name: "View user",
        sort_name: "view_user",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Add user",
        sort_name: "add_user",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Delete user",
        sort_name: "delete_user",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Edit user",
        sort_name: "edit_user",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "Assign role",
        sort_name: "assign_role",
        module_name: "Role and permission",
        status: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },




      ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
