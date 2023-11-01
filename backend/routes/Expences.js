const express = require("express");
const router = express.Router();
const Expence = require("../controller/Expences");
const Payments = require("../controller/Payment");
const LeaderBoad = require("../controller/LeaderBoad");

router.post('/addExpence',Expence.addExpence);
router.get('/findUser/:id',Expence.findUser);
router.get('/orderId/:id',Payments.createOrder);
router.put('/updateTransation',Payments.updateTransation);
router.get('/leaderBoard',LeaderBoad.leaderBoard)


module.exports = router;