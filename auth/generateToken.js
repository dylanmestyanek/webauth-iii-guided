const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets-config");

module.exports = (user) => {
    const payload = {
        username: user.username,
        role: 'student'
    };

    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}