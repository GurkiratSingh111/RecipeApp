import { useEffect, useState } from "react";
import Header from "./Header"
import axios from "axios";

function AddRecipe({ allRecipe, setAllRecipe, toast}){
  const [name,setName] = useState("");
  const [ingredients,setIngredients] = useState("");
  const [instructions,setInstructions] = useState("");
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(allRecipe));
  }, [allRecipe]);
  

  function currentDateAndTime(){
    var currentdate = new Date();
    var datetime = "Last Modified: " + currentdate.getDay() + "-" + currentdate.getMonth() + "-" + currentdate.getFullYear() + "  " + currentdate.getHours() + ":" + currentdate.getMinutes() + ":" + currentdate.getSeconds();
    return datetime;
    }

    function nameInputHandler(event){
      setName(event.target.value)
       
    }
    function ingredientInputHandler(event){
      setIngredients(event.target.value)
     
    }
    function instructionInputHandler(event){
      setInstructions(event.target.value);
      
    }
    function onResetHandler(){
        setName("");
        setInstructions("")
        setIngredients("")
    }
    async function onSaveHandler (){
        if(name === ''){
            toast.error("Please enter a Recipe name");
            return;
        }
        if(ingredients === ''){
            toast.error("Please enter ingredients for the Recipe");
            return;
        }
        if(instructions === ''){
            toast.error("Please enter Directions for the Recipe");
            return;
        }
        const response = await axios.post('http://localhost:8081/add', {name, ingredients, instructions});
        console.log(response);

        // const listOfIngredients = ingredients.split("\n").filter( function(e) { return e.trim().length > 0; } );
        // const listOfDirections = directions.split("\n").filter( function(e) { return e.trim().length > 0; } );
        
        
        setAllRecipe((allRecipe) => ([...allRecipe,{ name, ingredients, instructions}]));
        localStorage.setItem("data", JSON.stringify(allRecipe));
        toast.success("Recipe Saved Successfully");
        setName("");
        setInstructions("")
        setIngredients("")
    }

    return  <div className="pb-2 pl-4 flex flex-col items-center rounded-3xl w-4/5" style={{width:"80%"}}>
    <Header mainHeading={true}>Add New Recipe</Header>
    <div className="flex flex-col w-4/5 items-center">
      <Header>Recipe Name</Header>
      <div className='w-full h-10 text-black'>
        <input type="text" className='w-full rounded-3xl h-full color-blue pl-5 border-solid border-black border-2' onChange={nameInputHandler} value={name} arial-label={"Add Recipe Name Here"}/>
      </div>
      <Header>Ingredients</Header>
      <div className='w-full text-black'>
        <textarea rows="5" // Adjust the number of rows as needed
        cols="30" type="text"  className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-8 pt-2 resize-y border-solid border-black border-2' onChange={ingredientInputHandler} value={ingredients}/>
      </div>
      <Header>Directions</Header>
      <div className='w-full text-black'>
        <textarea rows="5" // Adjust the number of rows as needed
        cols="30" type="text" className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-8 pt-2 resize-y border-solid border-black border-2' onChange={instructionInputHandler} value={instructions}/>
      </div>
      <div className="flex flex-row justify-center items-center flex-1">
      <button onClick={onResetHandler}
    className="bg-black h-10 
    w-20 border-solid border-4 
    border-black rounded-3xl m-3
    text-white"
      >Reset</button>
       <button onClick={onSaveHandler}
    className="bg-black h-10 
    w-20 border-solid border-4 
    text-white border-black rounded-3xl m-3
     hover:bg-red-100-800"
      >Save</button>
      </div>
    </div>
  </div>
}

export default AddRecipe