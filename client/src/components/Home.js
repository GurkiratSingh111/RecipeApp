import React from 'react'
import { useState } from "react";
import Navbar from "./Navbar";
import AddRecipe from "./AddRecipe"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
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
            height: "100vh"
          }}
        >
        <div style={{width: "100%", height: "100vh"}} className="flex lg: lg:pr-2 sm:justify-center">
           <AddRecipe  toast={toast} allRecipe={allRecipe} setAllRecipe={setAllRecipe}/>
           {/* <AllRecipe allRecipe={allRecipe}/> */}
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

export default Home
