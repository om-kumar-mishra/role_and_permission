'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class we_belive extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  we_belive.init({
    icon: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'we_belive',
  });
  return we_belive;
};