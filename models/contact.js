'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  contact.init({
    address: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    fax: DataTypes.STRING,
    facebook: DataTypes.STRING,
    instagram: DataTypes.STRING,
    linkedIn: DataTypes.STRING,
    map: DataTypes.STRING,
    summary: DataTypes.TEXT,
    phone2:DataTypes.STRING,
    email2:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'contact',
  });
  return contact;
};