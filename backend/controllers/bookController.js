const Book = require('../models/bookModels')

const create = async (req, res) => {
    const {title,category,author} = req.body

    if(!title || !category, !author){
        return res.status(422).json({message: "Please fill all feilds"})
    }
    try{
        await Book.create({title,category,author, user: req.user})
        res.status(201).json({message: "New book added to the list"})
    }catch(err) {
        res.status(500).json({message: "Internal Server"})
    }
}

const getAllBook = async (req, res) => {
    try{
        const books = await Book.find({user: req.user})
        res.status(200).json({books})
    }catch(err){
        res.status(200).json({message:"Oops! Something went wrong"})
    }
}

module.exports = {
    create,
    getAllBook
}