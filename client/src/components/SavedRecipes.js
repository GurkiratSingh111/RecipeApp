import React from 'react'
import { IoFastFoodOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import AllRecipe from './AllRecipe';
const SavedRecipes = () => {
  const navigate = useNavigate();
  return (<div className='w-full flex flex-col' style={{height:"96vh"}}>
    <div className='py-3 text-black px-10 text-2xl flex border-black border-b-2 justify-between'>
    <span className="flex">
        <span>Your Saved Recipes</span> 
        <span className="pt-1 pl-1"><IoFastFoodOutline /></span>
    </span>
    <button className="text-lg bg-black text-white rounded-2xl p-2" onClick={()=> navigate("/")}>Add a New Recipe</button>
</div>
 <AllRecipe/> 
</div>);
  
}

export default SavedRecipes
