const mongoose = require("mongoose") 

const userShema=mongoose.Shema({
    email:{
        type:String,
        required:true,
        unique:true
    }
},timestamps:true)