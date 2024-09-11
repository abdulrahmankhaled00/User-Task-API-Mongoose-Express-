

 class AppError extends Error{
    constructor(message,errorStatus){
        super(message)
        this.errorStatus=errorStatus
    }
}
export default AppError;