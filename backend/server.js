import express from 'express'
import authrouter from './routes/routes.js'


const app = express()


app.use(express.json())
app.use('/api/auth',authrouter)



const port = process.env.PORT || 3001



app.listen(port,() => {
    console.log(`server satrted sucessfully ${port}`)
}
)