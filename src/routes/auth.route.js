const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth.controller");
// const verifyToken = require("../middleware/verifyToken");

router.post("/sign-up", authController.signUp);
router.get("/sign-up/confirmation/:token", authController.confirmEmail);

router.post("/log-in", authController.logIn);

router.get("/me", authController.getUserInfo);

module.exports = router;
