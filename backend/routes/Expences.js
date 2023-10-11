const express = require("express");
const router = express.Router();
const Expence = require("../controller/Expences");

router.post('/addExpence',Expence.addExpence);
router.get('/findUser/:id',Expence.findUser);

module.exports = router;