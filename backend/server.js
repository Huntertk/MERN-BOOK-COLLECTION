const express = require('express')
require('dotenv').config()
const userRouter = require('./routes/userRoutes')
const booksRouter = require('./routes/booksRoutes')
const mongoose  = require('mongoose')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const app = express()
const PORT = process.env.PORT


//Database Connect

const dbConn = async () => {
    try{
        await mongoose.connect(process.env.MONGO_DB_URI)
        console.log("Database Connected Successfully to the Application");
        app.listen(PORT, () => {
            console.log(`Server is Started on Port : ${PORT}`);
        })

    }catch(err) {
        console.log(err);
    }
}

//Middlewares

app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))


//Api Endpoints

app.use("/api/users", userRouter)
app.use("/api/books", booksRouter)


//Db Initilization
dbConn()
