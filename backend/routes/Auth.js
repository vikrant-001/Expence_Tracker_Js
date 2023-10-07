const express = require("express");
const router = express.Router();
const Auth = require("../controller/Auth")

router.get('/login',Auth.Login);
router.post('/signup',Auth.SignUp);

module.exports = router;