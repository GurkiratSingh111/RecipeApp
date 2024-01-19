import Button from "./Button"
import Header from "./Header"

function AddRecipe({recipe, setRecipe}){
    function nameInputHandler(event){
        setRecipe(recipe => ({...recipe,"name": event.target.value}));
    }
    function ingredientInputHandler(event){
        setRecipe(recipe => ({...recipe,"ingredients": event.target.value}));
    }
    function directionInputHandler(event){
        setRecipe(recipe => ({...recipe,"directions": event.target.value}));
    }

    return  <div className="my-8 pb-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 ">
    <Header mainHeading={true}>Add New Recipe</Header>
    <div className="flex flex-col w-4/5 items-center">
      <Header>Recipe Name</Header>
      <div className='w-full h-10 text-white'>
        <input type="text" className='w-full rounded-3xl h-full color-blue pl-5 bg-yellow-950' onChange={nameInputHandler}/>
      </div>
      <Header>Ingredients</Header>
      <div className='w-full text-white'>
        <textarea type="text"  className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-8 pt-2 resize-y bg-yellow-950' onChange={ingredientInputHandler}/>
      </div>
      <Header>Directions</Header>
      <div className='w-full text-white'>
        <textarea type="text"  className='w-full rounded-3xl min-h-30 max-h-50 color-blue pl-8 pt-2 resize-y bg-yellow-950' onChange={directionInputHandler}/>
      </div>
      <div className="flex flex-row justify-center items-center flex-1">
        <Button>Reset</Button>
        <Button>Save</Button>
      </div>
    </div>
  </div>
}

export default AddRecipe