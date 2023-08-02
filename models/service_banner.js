'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class service_banner extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  service_banner.init({
    image: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'service_banner',
  });
  return service_banner;
};