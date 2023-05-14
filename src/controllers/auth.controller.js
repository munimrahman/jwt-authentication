// const userServices = require("../services/user.services");
// const generateToken = require("../utils/generateToken");

exports.signUp = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Can not create user",
      error: error.stack,
    });
  }
};

/**
 * 1. Check if Email and password are given
 * 2. Load user with email
 * 3. if not user send res
 * 4. compare password
 * 5. if password not correct send res
 * 6. check if user is active
 * 7. if not active send res
 * 8. generate token
 * 9. send user and token
 */

exports.logIn = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(401).send({
      success: false,
      message: "Can not log in",
      error: error.message,
    });
  }
};

exports.getUserInfo = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Can not get user info",
      error: error.message,
    });
  }
};

exports.confirmEmail = async (req, res, next) => {
  try {
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Can not confirmed your email",
      error: error.message,
    });
  }
};
