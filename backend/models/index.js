require('dotenv').config();

const Sequelize = require("sequelize");
const sequelize = new Sequelize(process.env.DB,  process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
  dialect:  'postgres' 
});


const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.attendance = require("./attendance.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.tempUser = require("./temp_user.model.js")(sequelize, Sequelize);
db.month_info = require("./month_info.model.js")(sequelize, Sequelize);
db.static_proj_info = require("./static_proj_info.model.js")(sequelize, Sequelize);
db.static_rule = require("./static_rule.model.js")(sequelize, Sequelize);
db.user.hasMany(db.attendance,{ onDelete: 'cascade' })
module.exports = db;