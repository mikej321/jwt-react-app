const jwt = require("jsonwebtoken");
function generateAccessToken(username) {
  return jwt.sign({ username }, process.env.ACCESS_SECRET, {
    expiresIn: "1800s",
  });
}

module.exports = generateAccessToken;
