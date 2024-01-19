import { useState } from "react";
import Navbar from "./components/Navbar";
import AddRecipe from "./components/AddRecipe";
import AllRecipe from "./components/AllRecipe";

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
        <AddRecipe  recipe={recipe} setRecipe={setRecipe}/>
        <AllRecipe/>
      </div>
    </div>
  );
}

export default App;
