const express = require("express");
const cors = require("cors");
const recipeDatabase =  require("./models/RecipeModel");
const ingredientsDatabase = require( "./models/IngredientModel");
const  recipeRoutes = require("./routes/recipeRoutes");
const PORT = 8080;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", recipeRoutes)






recipeDatabase().then(()=>{
    ingredientsDatabase().then(()=>{
        app.listen(PORT,'0.0.0.0');
        console.log(`Server running on port ${PORT}`);
    }).catch((err)=>{
        console.log("Error initializing database");
    })
    console.log("Database initialized");
}).catch((err)=>{
    console.log("Error initializing database");
})



