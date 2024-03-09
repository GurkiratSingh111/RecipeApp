import { useState } from "react";
import Navbar from "./components/Navbar";
import AddRecipe from "./components/AddRecipe";
import AllRecipe from "./components/AllRecipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";



function App() {
  //const [recipeData,setRecipeData] = useState({});
  const location = useLocation();
  const data = location.state;
  // useEffect(() => {
  //  if(data !== undefined){
  //   fetchRecipeById();
  //  }
  //  async function fetchRecipeById(){
  //   const response = await axios.get(`http://localhost:8081/recipe/${data?.id}`);
  //   console.log("here lolal",response.data);
  //   setRecipeData(response.data)
  //  }
  // }, [data])
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
         <AddRecipe  recipeData={data} toast={toast}/>
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
