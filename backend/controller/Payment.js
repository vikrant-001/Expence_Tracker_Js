const Razorpay = require("razorpay");
const Orders = require('../model/Payment');
const User = require('../model/Signup');
const instance = new Razorpay({
    key_id:'rzp_test_gOex1E2WIDOLRm',
    key_secret:'hyeQBpAKpaewuYT9xi3414GV'
});

const option = {
    amount : 4000,
    currency:"INR",
};

exports.createOrder =  (req,res) => {
    const userId = req.params.id
    instance.orders.create(option,async function(err,order){
        console.log('ORDER',order);
        console.log(err);

        const response =  await Orders.create({
            userId : userId,
            orderId: order.id,
            status:"PENDING"
        });
        console.log( "Order created Response",response);
        res.json(order)
    });

}

exports.updateTransation = async (req,res) => {
    const order_id = req.body.order_id; 
    const userID = req.body.userID;
    const response = await Orders.update({paymentId:req.body.payment,
        status:"Sucessful"},{where:{orderId:order_id}});
    console.log('dataofupdate',response);
    const res2 = await User.update({Premium:true},{where:{id:userID}})
    res.json(response);
}

