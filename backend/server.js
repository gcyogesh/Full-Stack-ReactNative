import express from 'express'
import colors from  'colors'
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';
import Connection from './config/Connection.js';



dotenv.config()

Connection()

const app = express();

app.use(cookieParser())

//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// for router 
import userRoutes from './routes/UserRoute.js';
app.use('/api/user', userRoutes);



app.get('/', (req,res)=>{
    return res.status(200).send("Hey man how i life");
})





const port = process.env.PORT || 5000



app.listen(port,()=>{
    console.log(`app is running on port ${port} `.bgMagenta.white)
})