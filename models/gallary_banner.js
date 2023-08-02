'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class gallary_banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  gallary_banner.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'gallary_banner',
  });
  return gallary_banner;
};