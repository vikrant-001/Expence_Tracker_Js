const Sequelize = require("sequelize");
const sequelize = require("../Db/Database");

const Orders = sequelize.define('orders',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    orderId:{
        type:Sequelize.STRING,
    },
    paymentId:{
        type:Sequelize.STRING,
    },
    status:{
        type:Sequelize.STRING,
    }
});
module.exports = Orders;