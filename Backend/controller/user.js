const User = require("../models/user")

const userSignUp=async(res,req)=>{
    const {email,password}=req.body
    if(!email || !password){
        return res.status(400).json({message:"email and password are required"})
    }
    let user=await User.findOne({email})
    if(user){
        return res.status(400).json({error:"Email is already Exist"})
    }
} 

const userLogin=async(res,req)=>{

}   

const getUser=async(res,req)=>{

}

module.exports = {userSignUp,userLogin,getUser}
