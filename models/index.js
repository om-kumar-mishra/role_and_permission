'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.js')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config, {  
    dialect: 'mysql',
  
    logging: false
  });
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

//define table here
db.superadmin = require("../models/superadmin.js")(sequelize, Sequelize);

db.banner = require("../models/banner.js")(sequelize, Sequelize);
db.we_belive = require("../models/we_belive")(sequelize, Sequelize);
db.ready_to_talk = require("../models/ready_to_talk")(sequelize, Sequelize);
db.contact = require("../models/contact")(sequelize, Sequelize);
db.slug = require("../models/slug")(sequelize, Sequelize);
db.contact_us= require("../models/contact_us")(sequelize, Sequelize);
db.see_what_we_can= require("../models/see_what_we_can")(sequelize, Sequelize);
db.remote_staff= require("../models/remote_staff")(sequelize, Sequelize);
db.ourawesometeam= require("../models/ourawesometeam.js")(sequelize, Sequelize);
db.how_we_make= require("../models/how_we_make")(sequelize, Sequelize);
db.relax_we_have= require("../models/relax_we.js")(sequelize, Sequelize);
db.happy_customers= require("../models/happy_customers")(sequelize, Sequelize);

db.service_banner= require("../models/service_banner")(sequelize, Sequelize);
db.service_main_title_page= require("../models/service_main_title_page.js")(sequelize, Sequelize);
db.service_box= require("../models/service_box")(sequelize, Sequelize);

db.industry_banner= require("../models/industry_banner")(sequelize, Sequelize);
db.industry_box= require("../models/industry_box")(sequelize, Sequelize);
db.industry_main_title_page= require("../models/industry_main_title_page")(sequelize, Sequelize);


db.gallary_banner= require("../models/gallary_banner.js")(sequelize, Sequelize);
db.common_banner= require("../models/common_banner.js")(sequelize, Sequelize);
db.video= require("../models/video")(sequelize, Sequelize);
db.images= require("../models/images")(sequelize, Sequelize);
db.event= require("../models/event")(sequelize, Sequelize);
db.event_images= require("../models/event_images")(sequelize, Sequelize);
db.model_table= require("../models/collection_of_model.js")(sequelize, Sequelize);


//db.event.hasMany(db.event_images,{foreignKey: 'event_id', as:"event"});
db.event_images.belongsTo(db.event,{foreignKey: 'event_id'});

db.contact_banner= require("../models/contact_banner")(sequelize, Sequelize);

db.role= require("../models/role.js")(sequelize, Sequelize);
db.permission= require("../models/permission.js")(sequelize, Sequelize);
db.role_and_permission= require("../models/role_and_permission.js")(sequelize, Sequelize);
db.signup= require("../models/signup.js")(sequelize, Sequelize);
db.collection_of_model= require("../models/collection_of_model.js")(sequelize, Sequelize);

db.role_and_permission.belongsTo(db.role ,{foreignKey: 'roleId',as:"Role"})
db.role_and_permission.belongsTo(db.permission ,{foreignKey: 'permission',as:"Permission"})

//db.role.hasOne(db.signup,{foreignKey: 'type_user' });
db.signup.belongsTo(db.role,{foreignKey: 'type_user',as:"role"});















module.exports = db;

