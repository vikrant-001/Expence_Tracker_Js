const Expence = require("../model/Expences");

exports.addExpence = async(req,res,next) => {
    const expence = req.body.expence;
    const description = req.body.description;
    const price = req.body.price;
    const userID = parseInt(req.body.userID);

    if(!expence || !description || !price || !userID){
        res.status(404).json({
            messsage:"enter all the Data",
        });
    }

    try{
        const response = await Expence.create({
            expence:expence,
            description:description,
            price:price,
            userID:userID,
        });

        res.status(200).json({
            success:true,
            data:response,
            messsage:"Expence added Successfully",
        });
    }

    catch(err){
        console.log(err);
        res.status(404).json({
            success:false,
            messsage:err.messsage,
            data:"retry",
        });
    }
}

exports.findUser = async (req,res,next) => {
    let userID = req.params.id;
    // console.log(UsersId);
    try{
        const response = await Expence.findAll({where:{userID:userID}});
        console.log("data",response)
        res.status(200).json({
            success:true,
            data:response,
            messsage:"Data fetched successfully",
        });

    }
    catch(err){
        console.log(err);
        res.status(404).json({
            success:false,
            messsage:"Not able to retrive data"
        });
    }
}