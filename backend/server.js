import express from 'express'
import colors from  'colors'
import morgan from 'morgan';
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const app = express();
//middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

app.get('/', (req,res)=>{
    return res.status(200).send("Hey man how i life");
})





const port = process.env.PORT || 5000



app.listen(port,()=>{
    console.log(`app is running on port ${port} `.bgMagenta.white)
})