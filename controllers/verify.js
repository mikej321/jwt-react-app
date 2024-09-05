// This is the middleware function that will be access on all
// routes that need authentication

const jwt = require("jsonwebtoken");

function validateToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];

  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_SECRET, (err, authData) => {
    if (err) res.sendStatus(403);
    req.token = authData;
    next();
  });
}

module.exports = validateToken;
