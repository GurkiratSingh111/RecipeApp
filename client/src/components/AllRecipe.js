import { useState, useEffect } from "react";
import Header from "./Header";
import RecipeModal from "./RecipeModal";
import axios from 'axios';

function AllRecipe(){
    const [allRecipe, setAllRecipe] = useState([]);
    console.log(allRecipe)
    
    const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8081/allRecipes');
          console.log(response.data)
          setAllRecipe(response.data);
        } catch (error) {
         console.log(error)
        }
      };
    useEffect(() => {
        fetchData();
      }, []);

      async function updatedRecipes(){
        await fetchData();
      }
   
    return <div className="text-black flex items-center w-full h-full" style={{
        backgroundImage: `url('bgImage.jpg')`,
        backgroundPosition: "left",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        {/* <Header mainHeading={true}>Find your Saved Recipes Here</Header> */}
        <div className="my-3 py-3 flex flex-col items-center w-4/5 h-full ml-40 pl-9 mr-10" >
            {allRecipe.length == 0 && <h1 className="text-4xl text-black flex justify-center items-center flex-1">No Recipes Found!!🥺</h1>}
            {allRecipe.length !== 0 && allRecipe.map((recipe,index)=>{
                console.log(recipe)
                return (
                <div key={index} className="flex flex-col w-3/5 items-left">
                    <RecipeModal recipe={recipe} updatedRecipes={updatedRecipes}/>
                </div>
                )
            })
}</div>
</div>
}
export default AllRecipe;