const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/add", (req,res)=>{
    res.send("Hello");
})

app.delete("/delete/:id", (req,res)=>{

})

app.post("/update/:id", (req,res)=>{
})

app.get("/allRecipes",(req,res)=>{

})
app.get("/recipe/:id",(req,res)=>{

})
app.listen("3000", (req,res)=>{
    console.log("Server is running on port 3000");
})