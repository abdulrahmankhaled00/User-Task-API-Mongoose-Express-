

export const globalErorr=(err,req,res,next)=>{
    err.errorStatus=err.errorStatus||500

    res.status(err.errorStatus).json({error:err.message,at:err.stack})
}