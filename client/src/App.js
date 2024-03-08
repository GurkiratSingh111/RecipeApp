import { useState } from "react";
import Navbar from "./components/Navbar";
import AddRecipe from "./components/AddRecipe";
import AllRecipe from "./components/AllRecipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [allRecipe, setAllRecipe] = useState(localStorage.getItem("data") === null || undefined ? [] : JSON.parse(localStorage.getItem("data")));
  return (
    <div className="h-full w-full text-white font-serif">
      <Navbar />
      <div className="flex h-auto">
      <div
        className="flex flex-col items-center px-10"
        style={{
          backgroundImage: `url('bgImage.jpg')`,
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          width: "100%",
          height: "100%",
          padding: "60px",
        }}
      >
      <div style={{width: "100%", paddingTop:"40px"}} className="flex lg: lg:pr-2 sm:justify-center">
         <AddRecipe  toast={toast} allRecipe={allRecipe} setAllRecipe={setAllRecipe}/>
      </div>
      </div>
      </div>
      <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          rtl={false}
          />
    </div>
  );
}

export default App;
