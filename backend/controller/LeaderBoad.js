const sequelize = require("../Db/Database");
const Expences = require("../model/Expences");
const User = require("../model/Signup");
exports.leaderBoard = async (req,res) => {
    const response = await User.findAll({
        attributes:['id','name',[sequelize.fn('sum',sequelize.col('expences.price')),'total']],
        include:[
            {
                model:Expences,
                as:'expences',
                attributes:[]
            }
        ],
        group:['user.id'],
        order:[['total',"DESC"]],
        raw:true,
    });
    console.log(response);
    res.json(response);
}