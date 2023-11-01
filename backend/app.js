const express = require("express");
const cors = require("cors");
const sequelize = require("./Db/Database");
const AuthRoutes = require("./routes/Auth");
const ExpenceRoutes = require("./routes/Expences");
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(AuthRoutes);
app.use(ExpenceRoutes);

const User = require("./model/Signup");
const Expences = require("./model/Expences");
const Order = require("./model/Payment");

User.hasMany(Order)
Order.belongsTo(User);

User.hasMany(Expences,{
    foreignKey:"userID",
    as :"expences"
});
Expences.belongsTo(User,{
    foreignKey:"userID",
    as:"user"
});

sequelize.sync()
.then(() => app.listen(4000))
.catch((err) => console.log(err));

app.use('/', (req,res) => {
    console.log("App running on port Number",4000);
    res.json("hello jii")
})