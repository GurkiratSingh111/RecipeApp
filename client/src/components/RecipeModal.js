import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from 'react';
import ShowList from './ShowList';
import { MdDelete, MdEdit } from "react-icons/md";
import axios from 'axios';

function RecipeModal({recipe, updatedRecipes}){
  const [recipeData, setRecipeData] = useState({});
  useEffect(() => {
    async function fetchRecipeById(){
      const response = await axios.get(`http://localhost:8081/recipe/${recipe.id}`);
      console.log("here it is",response.data);
      setRecipeData(response.data)
    }
    fetchRecipeById();
  }, [recipe,updatedRecipes])
  
  
  const onClickDeleteRecipe = () => {
    async function deleteRequest(){
      try {
        console.log(recipe);
        const response = await axios.delete(`http://localhost:8081/delete/${recipe.id}`);
        console.log(response)
        updatedRecipes();
      } catch (error) {
        console.log(error)
      }
    }
    deleteRequest();
  }
  const onClickEditRecipe = () => {
    
  }


    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
     <li className="flex justify-between overflow-hidden text-white items-center text-lg p-3 m-2 h-12 hover:p-6 bg-black border-grey border-4 rounded-3xl">
      <button onClick={handleShow}>{recipe.name}</button>
      <span >
        <button onClick={onClickDeleteRecipe} className='m-2'><MdDelete /></button>
        <button onClick={onClickEditRecipe} className='m-2'><MdEdit/></button>

      </span>
      </li>

    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Recipe Name: {recipe.name}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <div>
        <p>{recipeData?.result1?.timelastmodified}</p>
        <h4>Ingredients</h4>
        <p>{recipeData?.result2?.map((value)=>{
          return <p>{value["name"]}</p>
        })}</p>
        {/* <p><ShowList items={recipe.ingredients}/></p> */}
      </div>
        <div>
            <h4>Directions</h4>
            <p>{recipeData?.result1?.instructions}</p>
            {/* <ShowList items={recipe.directions}/> */}
        </div>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>    
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Recipe Name: {recipe.name}</Modal.Title>
    </Modal.Header>
  </Modal>   
    </> 

}
export default RecipeModal;