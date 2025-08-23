const recipe = require("../models/recipe")
const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage })

const getRecipes = (req, res) => {
    const recipes = await Recipes.find()
    return res.json(recipes)
}
const getRecipe = (req, res) => {
    const recipes = await Recipes.findById(req.params.id)
    res.json(recipe)
}
const addRecipe = async (req, res) => {
    const { tittle, ingredients, instructions, time } = req.body;

    if (!tittle || !ingredients || !instructions) {
        res.json({ message: "required fields can not be empty habibo" })
    }

    const newRecipe = await Recipes.create({
        tittle, ingredients, ingredients, time
    })

    return res.json(newRecipe)
}
const editRecipe = async (req, res) => {
    const { tittle, ingredients, instructions, time } = req.body
    let recipe = await Recipes.findById(req.params.id)
    try {
        if (recipe) {
            await Recipes.findById(req.params.id, req.body, { new: true })
            res.json({ tittle, ingredients, instructions, time })
        }
    }
    catch(err){
        return res.status(404).json({message:"error"})
    }

}

const deleteRecipe = (req, res) => {
    res.json({ message: "Hello" })
}



module.exports = { getRecipes, getRecipe, addRecipe, editRecipe, deleteRecipe }