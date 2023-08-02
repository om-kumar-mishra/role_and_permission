'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class see_what_we_can extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  see_what_we_can.init({
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'see_what_we_can',
  });
  return see_what_we_can;
};