// const path = require('path')
// const dotenv = require('dotenv')

// dotenv.config({ path: path.join(__dirname, '') })      
//console.log("om kumar ==", path.join(__dirname ))   
require('dotenv').config()

module.exports = {
    "development": {
      "username":"root",
      "password":"",
      "database":"role_permission",
      "host":"localhost",
      "dialect":"mysql",  
        logging: false     
      
    },
    "test": {
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE_NAME,
      "host": process.env.HOSTNAME,
      "dialect":"mysql",
      logging: false
    },
    "production": {
      "username": process.env.USERNAME,
      "password": process.env.PASSWORD,
      "database": process.env.DATABASE_NAME,
      "host": process.env.HOSTNAME,
      "dialect":"mysql",
      logging: false
    }
}