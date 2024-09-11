

export const checkError=(fn)=>{
    return async(req,res,next)=>{
        fn(req,res,next).catch(err=>next(err))
    }
}