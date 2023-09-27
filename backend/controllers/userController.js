const User = require('../models/userModels')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const register = async (req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !password) {
        return res.status(422).json({message: "Please fill all feilds"})
    }
    const isUser = await User.findOne({email})

    if(isUser){
        return res.status(422).json({message: "User already Registered and Invalid Email"})
    }

    try{
        const hashedPwd = await bcrypt.hash(password, 10)
        const user = await User.create({name, email, password: hashedPwd})
        res.status(201).json({message:"User Register Successfully"})

    }catch(err){
        res.status(500).json({message:"Internal Server"})
    }
}


const login = async (req, res) => {
    const {email, password} = req.body
    if(!email || !password){
        return res.status(400).json({message:"Please Enter all feilds"})
    }
    
    const user = await User.findOne({email})
    if(!user){
        return res.status(404).json({message: "Invalid email or Register First"})
    } 
    const passOk = await bcrypt.compare(password, user.password)
    if(!passOk){
        return res.status(401).json({message:"Invalid Credential"})
    }
    try{
        const token = jwt.sign({_id: user._id, email:user.email}, process.env.JWT_SECRET)
        res.status(200).cookie('token', token).json({email: user.email, _id: user._id, name: user.name})
    }catch(err){
        res.status(500).json({message:"Internal Server"})
    }
}

const userDetails = async (req, res) => {
    const {token} = req.cookies

    if(!token) {
        return res.status(401).json({messgae: "Please Login"})
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    const user = await User.findById(decoded._id)
    res.status(200).json({_id: user._id, name: user.name, email: user.email})

}

const logout = async (req, res) => {
    res.status(200).cookie('token', '', {expires: new Date(Date.now())}).json({message: "User Logout"})
}
module.exports = {
    register, 
    login,
    userDetails,
    logout
}