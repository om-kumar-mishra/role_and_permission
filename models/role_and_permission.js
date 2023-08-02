'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class role_and_permission extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  role_and_permission.init({
    roleId: DataTypes.INTEGER,
    permission: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    permission_slug: DataTypes.STRING,
    role_name: DataTypes.STRING,
    modelId: DataTypes.INTEGER,
    model_name: DataTypes.STRING,




  }, {
    sequelize,
    modelName: 'role_and_permission',
  });
  return role_and_permission;
};