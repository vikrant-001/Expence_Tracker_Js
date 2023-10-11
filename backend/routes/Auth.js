const express = require("express");
const router = express.Router();
const Auth = require("../controller/Auth")

router.post('/login',Auth.Login);
router.post('/signup',Auth.SignUp);

module.exports = router;