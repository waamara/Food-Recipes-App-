const express=require("express") 
const app=express() 
const dotenv=require("dotenv").config()
const connectDB=require("./config/connectionDb")
const PORT=process.env.PORT || 3000
const cors =require("cors")
app.use(cors())
app.use(expess.static("public"))

app.use("/",require("./routes/user"))
app.use("/recipe",require("./routes/recipe"))
connectDB()
app.use(express.json())
app.listen(PORT,(err)=>{
    console.log(`app is listening on port ${PORT}`)
})