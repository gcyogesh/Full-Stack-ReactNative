import mongoose from "mongoose";
// import dotenv from 'dotenv'

// dotenv.config();

// const DB = process.env.DB
const Connection = ()=>{
    mongoose.connect(process.env.DB).then(()=>{
        console.log(`Database Connected succsefully ${mongoose.connection.host}`)
    }).catch((err)=>{
        console.log(err,"Error connection Db")
    })
}


export default Connection;