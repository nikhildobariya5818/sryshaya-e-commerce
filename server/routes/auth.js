const express = require("express");
const router = express.Router();
const authController = require("../controller/auth");
const { loginCheck, isAuth, isAdmin } = require("../middleware/auth");
// const {authPass, callback} = require("../controller/googleAuth");
const { UpdatePassword, VerifyOTP, ForgetPassword } = require("../controller/Forget_Password");

router.post("/isadmin", authController.isAdmin);
router.post("/signup", authController.postSignup);
router.post("/signin", authController.postSignin);
// router.post("/user", loginCheck, isAuth, isAdmin, authController.allUser);
router.post('/forget-password', ForgetPassword);
router.post('/VerifyOTP', VerifyOTP);
router.post('/UpdatePassword', UpdatePassword);

module.exports = router;
