const express=require("express")
const router=express.Router()

router.post("/signUp",userSignUp)
router.post("/Login",userLogin)
router.get("/user/:id",getUser)


module.exports = router