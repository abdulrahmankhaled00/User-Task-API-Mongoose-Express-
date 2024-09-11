
import jwt from 'jsonwebtoken';
import AppError from '../utils/appError.js';



const auth =(req,res,next)=>{
    
    jwt.verify(req.header('token'),process.env.SECRET_KEY,(err,decoded)=>{
        if(err)return next(new AppError(err,401) )
        req.body.userId=decoded.userId 
    console.log(req.body.userId);  
        next()
    })


}

export{
    auth
}