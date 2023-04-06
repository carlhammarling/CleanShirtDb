const jwt = require('jsonwebtoken');
require('dotenv').config()

secretKey = process.env.SECRET_KEY

exports.generateToken = (user) => {
    return jwt.sign({ _id: user._id }, secretKey, { expiresIn: '1h' })
}


exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        //Den här ger tillbaka oss ett objekt, och vi tar ut _id ur det.
        req.userId = jwt.verify(token, secretKey)._id

        next()
    } catch {
        return res.status(401).json({ message: 'Please login.'})
    }
}