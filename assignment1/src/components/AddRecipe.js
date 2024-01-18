import Button from "./Button"
import Header from "./Header"
import Input from "./Input"

function AddRecipe(){
    return  <div className="my-8 pb-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 ">
    <Header mainHeading={true}>Add New Recipe</Header>
    <div className="flex flex-col w-4/5 items-center">
      <Header>Recipe Name</Header>
      <Input />
      <Header>Ingredients</Header>
      <Input textarea={true} />
      <Header>Directions</Header>
      <Input textarea={true} />
      <div className="flex flex-row justify-center items-center flex-1">
        <Button>Reset</Button>
        <Button>Save</Button>
      </div>
    </div>
  </div>
}

export default AddRecipe