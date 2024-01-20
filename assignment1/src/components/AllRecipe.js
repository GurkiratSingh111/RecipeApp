import { useState } from "react";
import Header from "./Header";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function AllRecipe({allRecipe}){
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <div className="my-8 pb-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 ">
        <Header mainHeading={true}>Find your Saved Recipes Here</Header>
        <div className=" bg-yellow-950 my-3 py-5 flex flex-col items-center border-solid border-4 border-yellow-950 rounded-3xl w-4/5 h-full ml-10 mr-10 ">
            {allRecipe.map((recipe)=>{
                return (
                <div className="flex flex-col w-4/5 items-left ">
                    <li className="text-lg"><button onClick={handleShow}>{recipe.name}</button></li>
                    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recipe Name: {recipe.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div>
            <h4>Ingredients</h4>
            <p>{recipe.ingredients}</p>
          </div>
            <div>
                <h4>Directions</h4>
                <p>{recipe.directions}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
                    
                </div>
                )
            })
}</div>
</div>
}


export default AllRecipe;