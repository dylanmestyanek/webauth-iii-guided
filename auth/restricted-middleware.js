const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets-config");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    // Check that the token is valid
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        // the token isnt valid
        res.status(401).json({ message: "Invalid Credentials" })
      } else {
        req.decodedJwt = decodedToken;
        next();
      }
    })
  } else {
    res.status(400).json({ message: 'No credentials provided.' });
  }
};
