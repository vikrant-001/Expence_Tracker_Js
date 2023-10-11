const Sequelize = require("sequelize");
const sequelize = require("../Db/Database");

const SignUp = sequelize.define('user',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
    },

    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
   
});

module.exports = SignUp;