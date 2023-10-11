const Sequelize = require("sequelize");
const sequelize = require("../Db/Database");

const Expences = sequelize.define('expences',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },

    expence:{
        type:Sequelize.STRING,
        allowNull:false,
    },

    description:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    price:{
        type:Sequelize.STRING,
        allowNull:false,
    },
});

module.exports = Expences;