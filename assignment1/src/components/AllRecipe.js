import Header from "./Header";

function AllRecipe({allRecipe}){
    console.log(allRecipe);
    return <div className="my-8 pb-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 ">
        <Header mainHeading={true}>Find your Saved Recipes Here</Header>
        <div className=" bg-yellow-950 my-8 pb-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 ">
            {allRecipe.map((recipe)=>{
                return (
                <div className="flex flex-col w-4/5 items-left">
                    <li className="text-3xl font-bold ">{recipe.name}</li>
                </div>)
            })
}</div>
</div>
}


export default AllRecipe;