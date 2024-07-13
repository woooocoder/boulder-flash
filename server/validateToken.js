const jwt = require('jsonwebtoken')
module.exports = function (req, res, next) {
    const token = req.header('x-auth-token')
    if (!token) {
        return res.status(401).json({ err: 'No token, authorization denied'})
    }

    try {
        jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
            if (error) {
                return res.status(401).json({ err: 'Invalid token'})
            } else {
                req.user = decoded.user
                next()
            }
        })
    } catch (err) {
        console.error('Something went wrong with auth middleware.')
        res.status(500).json({ err: 'Server Error'})
    }
}