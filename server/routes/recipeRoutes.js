const express = require("express");
const router = express.Router();
const { addRecipe, deleteRecipe, updateRecipe, allRecipes, allIngredients, recipeById } = require("../controllers/recipeController");

router.route("/add").post(addRecipe);
router.route("/delete/:id").delete(deleteRecipe);
router.route("/update/:id").post(updateRecipe);
router.route("/allRecipes").get(allRecipes);
router.route("/allIngredients").get(allIngredients);
router.route("/recipe/:id").get(recipeById);

module.exports = router;