import express from 'express'
import authrouter from './routes/routes.js'
import mongoose from 'mongoose'

const DB_PASSWORD = ""
const DB_USERNAME = '';
const password = encodeURIComponent(DB_PASSWORD);

// String literal
const MONGO_URI = "mongodb+srv://${DB_USERNAME}:${password}@viraj.fvheojc.mongodb.net/";

// IIFE
(async () => {
    try {
        await mongoose.connect(MONGO_URI)
        console.log("DB Connected Successfully")
    } catch (err) {
        console.log("DB Connection Error", err)
    }
})();





const app = express()


app.use(express.json())

app.use('/api/auth',authrouter)



const port = process.env.PORT || 3001



app.listen(port,() => {
    console.log(`server satrted sucessfully ${port}`)
}
)