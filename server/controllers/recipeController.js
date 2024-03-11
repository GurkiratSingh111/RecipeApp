const { addRec, deleteRec, updateRec, allRec, allIngred, recipe} = require("../models/db");
const addRecipe = (req,res) =>{
    const {name, instructions, ingredients} = req.body;
    addRec(name, instructions, ingredients).then(()=>{
        res.send("Recipe added");
    }).catch((err)=>{
        res.send("Error adding recipe");
    })
}
const deleteRecipe = (req,res) =>{
    const id = req.params.id;
    deleteRec(id).then(()=>{
        res.send("Recipe deleted");
    }).catch((err)=>{
        res.send("Error deleting recipe");
    })
}

const updateRecipe = (req,res) =>{
    const id = req.params.id;
    const {name, ingredients, instructions} = req.body;
    updateRec(id, name, ingredients, instructions).then(()=>{
        res.send("Recipe updated");
    }).catch((err)=>{
        res.send("Error updating recipe");
    })
}
 
const allRecipes = (req,res) => {
    allRec().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("Error fetching recipes");
    })
}
const allIngredients = (req,res) => {
    allIngred().then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("Error fetching ingredients");
    })
}

const recipeById = (req,res) => {
    const id = req.params.id;
    recipe(id).then((data)=>{
        res.send(data);
    }).catch((err)=>{
        res.send("Error fetching recipe");
    })
}
module.exports = { addRecipe, deleteRecipe, updateRecipe, allRecipes, allIngredients, recipeById };