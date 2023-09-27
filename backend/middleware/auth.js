const jwt = require('jsonwebtoken')
const User = require('../models/userModels')

const isAuthenticated = async (req, res, next) => {
    const {token} = req.cookies
    if(!token) {
        return res.status(401).json({message:"Please Login First"})
    }

    const {_id} = await jwt.verify(token, process.env.JWT_SECRET)

    req.user = await User.findById(_id)
    next()
}

module.exports = isAuthenticated