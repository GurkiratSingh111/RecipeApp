import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import ShowList from './ShowList';

function RecipeModal({recipe}){

    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return <>
     <li className="text-lg"><button onClick={handleShow}>{recipe.name}</button></li>
    <Modal show={show} onHide={handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Recipe Name: {recipe.name}</Modal.Title>
    </Modal.Header>

    <Modal.Body>
      <div>
        <p>{recipe.lastModified}</p>
        <h4>Ingredients</h4>
        <p><ShowList items={recipe.ingredients}/></p>
      </div>
        <div>
            <h4>Directions</h4>
            <ShowList items={recipe.directions}/>
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