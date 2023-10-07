const express = require("express");
const cors = require("cors");
const sequelize = require("./Db/Database");
const AuthRoutes = require("./routes/Auth");
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); 

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(AuthRoutes);


sequelize.sync()
.then(() => app.listen(4000))
.catch((err) => console.log(err));

app.use('/', (req,res) => {
    console.log("App running on port Number",3000);
    res.json("hello jii")
})