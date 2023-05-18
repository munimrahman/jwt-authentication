const authServices = require("../services/auth.service");
const generateJwtToken = require("../utils/generateJwtToken");
// const generateToken = require("../utils/generateToken");

exports.signUp = async (req, res, next) => {
  try {
    const user = await authServices.signUpService(req.body);

    const accessToken = generateJwtToken(user, "1h");
    const refreshToken = generateJwtToken(user, "1d");

    res
      .status(200)
      .cookie("jwt-access", accessToken, {
        maxAge: 24154,
        httpOnly: true,
        signed: true,
      })
      .cookie("jwt-refresh", refreshToken, {
        maxAge: 5454654,
        httpOnly: true,
        signed: true,
      })
      .send({
        success: true,
        message: "User Created Successfully",
        data: {
          user,
          accessToken,
          refreshToken,
        },
      });
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
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please provide email and password",
      });
    }

    const user = await authServices.findUserByEmail(email);

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordMatch = user.comparePassword(password, user.password);

    if (!isPasswordMatch) {
      return res.status(400).send({
        success: false,
        message: "Invalid email or password",
      });
    }

    const accessToken = generateJwtToken(user, "1m");
    const refreshToken = generateJwtToken(user, "1d");

    res
      .status(200)
      .cookie("jwt-access", accessToken, {
        maxAge: 24154,
        httpOnly: true,
        signed: true,
      })
      .cookie("jwt-refresh", refreshToken, {
        maxAge: 5454654,
        httpOnly: true,
        signed: true,
      })
      .send({
        success: true,
        message: "Logged In Successfully!",
        data: {
          user,
          accessToken,
          refreshToken,
        },
      });
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
