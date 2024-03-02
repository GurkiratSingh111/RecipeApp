import { useState } from "react";
import Navbar from "./components/Navbar";
import AddRecipe from "./components/AddRecipe";
import AllRecipe from "./components/AllRecipe";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [allRecipe, setAllRecipe] = useState(localStorage.getItem("data") === null || undefined ? [] : JSON.parse(localStorage.getItem("data")));
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
        <AddRecipe  toast={toast} allRecipe={allRecipe} setAllRecipe={setAllRecipe}/>
        <AllRecipe allRecipe={allRecipe}/>
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
