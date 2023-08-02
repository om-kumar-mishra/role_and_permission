'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class relax_we extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  relax_we.init({
    success_champions: DataTypes.STRING,
    salesforce_certification: DataTypes.STRING,
    happy_customers: DataTypes.STRING,
    project_delivered: DataTypes.STRING,
    go_to_market_solution: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'relax_we',
  });
  return relax_we;
};