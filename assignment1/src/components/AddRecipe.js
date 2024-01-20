
import Header from "./Header"

function AddRecipe({recipe, setRecipe, setAllRecipe, toast}){

    function nameInputHandler(event){
        setRecipe(recipe => ({...recipe,"name": event.target.value}));
    }
    function ingredientInputHandler(event){
        setRecipe(recipe => ({...recipe,"ingredients": event.target.value}));
    }
    function directionInputHandler(event){
        setRecipe(recipe => ({...recipe,"directions": event.target.value}));
    }
    function onResetHandler(){
        setRecipe({"name": "", "ingredients": "", "directions": ""});

    }
    function onSaveHandler(){
        if(recipe.name === ''){
            toast.error("Please enter a Recipe name");
            return;
        }
        if(recipe.ingredients === ''){
            toast.error("Please enter ingredients for the Recipe");
            return;
        }
        if(recipe.directions === ''){
            toast.error("Please enter Directions for the Recipe");
            return;
        }
        setAllRecipe((allRecipe) => ([...allRecipe, recipe]));
        toast.success("Recipe Saved Successfully");
        setRecipe({"name": "", "ingredients": "", "directions": ""});
    }

    return  <div className="my-8 pb-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 ">
    <Header mainHeading={true}>Add New Recipe</Header>
    <div className="flex flex-col w-4/5 items-center">
      <Header>Recipe Name</Header>
      <div className='w-full h-10 text-white'>
        <input type="text" className='w-full rounded-3xl h-full color-blue pl-5 bg-yellow-950' onChange={nameInputHandler} value={recipe.name} arial-label={"Add Recipe Name Here"}/>
      </div>
      <Header>Ingredients</Header>
      <div className='w-full text-white'>
        <textarea rows="5" // Adjust the number of rows as needed
        cols="30" type="text"  className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-8 pt-2 resize-y bg-yellow-950' onChange={ingredientInputHandler} value={recipe.ingredients}/>
      </div>
      <Header>Directions</Header>
      <div className='w-full text-white'>
        <textarea rows="5" // Adjust the number of rows as needed
        cols="30" type="text" className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-8 pt-2 resize-y bg-yellow-950' onChange={directionInputHandler} value={recipe.directions}/>
      </div>
      <div className="flex flex-row justify-center items-center flex-1">
      <button onClick={onResetHandler}
    className="bg-yellow-950 h-10 
    w-20 border-solid border-4 
    border-yellow-950 rounded-3xl m-3
     hover:bg-yellow-800
      hover:border-yellow-800"
      >Reset</button>
       <button onClick={onSaveHandler}
    className="bg-yellow-950 h-10 
    w-20 border-solid border-4 
    border-yellow-950 rounded-3xl m-3
     hover:bg-yellow-800
      hover:border-yellow-800"
      >Save</button>
      </div>
    </div>
  </div>
}

export default AddRecipe