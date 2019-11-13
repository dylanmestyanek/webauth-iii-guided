module.exports = role => (req, res, next) => {
    if ( role === req.decodedJwt.role) {
        next();
    } else {
        res.status(403).json({ message: "You do not have access." })
    }
}
