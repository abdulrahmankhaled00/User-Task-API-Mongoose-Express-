import AppError from "../utils/appError.js";


export const validation = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate({...req.body,...req.header,...req.params,...req.query}, { abortEarly: false })
        if (error) {
            let errMsg = []
            error.details.forEach(element => {
                errMsg.push(element.message)
            });
            console.log('//////////////////////////////',errMsg,errMsg.message);
            next(new AppError(errMsg, 401));
        } else {
            next()
        }
    }
}
