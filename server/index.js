import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { ConnectToDb } from './config/ConnectToDb.js'
import authRoutes from './routes/auth-routes/index.js'





dotenv.config()

ConnectToDb()
const app = express()

const PORT  = process.env.PORT || 5000


app.use(express.json())

app.use(cors({
    origin:'http://localhost:5173',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization']
}))



//middleware

app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({
        success : false,
        message : 'Internal server error'
    })
})

//routes configuration

app.use('/auth', authRoutes)







app.listen(PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`)

})

