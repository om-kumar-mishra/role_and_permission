'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class collection_of_model extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  collection_of_model.init({
    Name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'collection_of_model',
  });
  return collection_of_model;
};