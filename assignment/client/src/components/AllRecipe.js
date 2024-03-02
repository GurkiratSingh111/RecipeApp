import Header from "./Header";
import RecipeModal from "./RecipeModal";

function AllRecipe({allRecipe}){
   
    return <div className="my-8 pb-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 ">
        <Header mainHeading={true}>Find your Saved Recipes Here</Header>
        <div className=" bg-yellow-950 my-3 py-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 ">
            {allRecipe && allRecipe.map((recipe,index)=>{
                return (
                <div key={index} className="flex flex-col w-4/5 items-left ">
                    
                    <RecipeModal recipe={recipe}/>

                    
                </div>
                )
            })
}</div>
</div>
}


export default AllRecipe;