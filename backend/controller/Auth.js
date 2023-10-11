const SignUp = require("../model/Signup");
const bcrypt = require("bcrypt");
exports.SignUp = async (req,res,next) => {
    console.log(req.body);
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

    if(!email || !password || !name){
        res.json("enter All the data");
    };

    const user = await SignUp.create({
        email:email,
        name:name,
        password:password,
    });

    res.status(200).json(
        {
            success:true,
            data:user,
            message:"Entry created Successsfully"
        }
    )
    next();
}

exports.Login = async (req,res) => {
    const email = req.body.email;
    const password = req.body.password;

    if(!email || !password){
        console.log("enter All the data");
        return;
    };
    const check = await SignUp.findOne({where:{email:email}});
    console.log("done");
    if(check === null){
        console.log("Enter vaild email");
    }

    if(check){
        if(check.password === password){
            res.status(200).json(check);
            return;
        }
    }
    res.status(404).json({message:"unable to login",data:check})
    
};