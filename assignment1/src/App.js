import { useState } from "react";
import Navbar from "./components/Navbar";
import AddRecipe from "./components/AddRecipe";
import AllRecipe from "./components/AllRecipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [recipe, setRecipe] = useState({});
  const [allRecipe, setAllRecipe] = useState([]);
  return (
    <div className="h-full w-full text-white">
      <Navbar />
      <div
        className="flex flex-col items-center min-h-screen min-w-screen px-10 opacity-90"
        style={{
          backgroundImage: `url('bgImage.jpg')`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <AddRecipe  toast={toast} allRecipe={allRecipe} setAllRecipe={setAllRecipe} recipe={recipe} setRecipe={setRecipe}/>
        <AllRecipe allRecipe={allRecipe}/>
      </div>
      <ToastContainer/>
    </div>
  );
}

export default App;
