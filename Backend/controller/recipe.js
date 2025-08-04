const Recipes = require("../models/recipe")

const getRecipes=(req,res)=>{
    const recipes=await Recipes.find()
    return res.json(recipes)
}
const getRecipe=(req,res)=>{
    res.json({message:"Hello"})
}
const addRecipe=async(req,res)=>{
    const{tittle,ingredients,instructions,time}=req.body; 
    
    if(!tittle || !ingredients || !instructions ) {
        res.json({message:"required fields can not be empty habibo"})
    }

    const newRecipe = await Recipes.create({
        tittle,ingredients,ingredients,time
    })

    return res.json(newRecipe)
}
const editRecipe=(req,res)=>{
    res.json({message:"Hello"})
}
const deleteRecipe=(req,res)=>{
    res.json({message:"Hello"})
}



module.exports={getRecipes,getRecipe,addRecipe,editRecipe,deleteRecipe}