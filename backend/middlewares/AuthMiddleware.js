import JWT from 'jsonwebtoken'
import Users from '../models/UserModel.js';


export const isAuth  = async( req, res, next)=>{
    const {token} = req.cookies;
    // validation 
    if(!token){
        return res.status(401).send({
            success:false,
            msg:"unauthorized user"
        })
    }
    const decodeData = JWT.verify(token, process.env.JWT_SECRET)
    req.user = await Users.findById(decodeData._id);
    next();

}