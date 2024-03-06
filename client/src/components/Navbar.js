import { MdCookie } from "react-icons/md";
function Navbar(){

    return (
    <div className='py-3 text-black px-10 text-2xl flex border-black border-b-2'>
        <span>RecipeStore</span> 
        <span className="pt-1 pl-1"><MdCookie/></span>

    </div>);

}
export default Navbar;