import { MdCookie } from "react-icons/md";
function Navbar(){

    return (
    <div className='py-3 text-black px-10 text-2xl flex border-black border-b-2 justify-between'>
        <span className="flex">
            <span>RecipeStore</span> 
            <span className="pt-1 pl-1"><MdCookie/></span>
        </span>
        <button className="text-lg bg-black text-white rounded-2xl p-2">Saved Recipes</button>
        

        

    </div>);

}
export default Navbar;