import { userModel } from "../../database/models/user.model.js"



const checkEmailExist=async(email)=>{
    let user =await userModel.findOne({email})
    return user
}

export{
    checkEmailExist
}