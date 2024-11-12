const express = require("express");
const app = express();
const router = express.Router();
const RazorpayController = require("./../controller/razorpay");

router.get("/create-order", RazorpayController.generateOrder);
router.post("/paymentProcess", RazorpayController.paymentProcess);

module.exports = router;