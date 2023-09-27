const express = require('express')
const router = express.Router()
const isAuthenticated = require('../middleware/auth')
const Book = require('../models/bookModels')
const bookController = require('../controllers/bookController')

router.get("/", isAuthenticated, bookController.getAllBook)
router.post("/create", isAuthenticated, bookController.create)

module.exports = router