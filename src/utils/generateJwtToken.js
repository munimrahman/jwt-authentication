const jwt = require("jsonwebtoken");

module.exports = generateToken = (userInfo, expiresIn) => {
  const payload = {
    email: userInfo.email,
    role: userInfo.role,
  };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn,
  });

  return token;
};
