'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ourAwesomeTeam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ourAwesomeTeam.init({
    Name: DataTypes.STRING,
    image: DataTypes.STRING,
    message: DataTypes.TEXT,
    designation: DataTypes.STRING,
    mail: DataTypes.STRING,
    skype: DataTypes.STRING,
    linkedin: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'ourAwesomeTeam',
  });
  return ourAwesomeTeam;
};