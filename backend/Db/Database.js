const Sequelize = require("sequelize");

const sequelize = new Sequelize('node-complete','root','MySQL1234567',{
    dialect:'mysql',
    host:'localhost'
});

module.exports = sequelize;