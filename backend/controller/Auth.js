const SignUp = require("../model/Signup");

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

exports.Login = async (req,res,next) => {
    const check = await SignUp.findAll();
    if(check === null){
        res.json("Enter vaild email");
    }

    res.status(200).json(
        {
            success:true,
            data:check,
            message:"Logged IN Successfully"
        }
    )
    next();

};