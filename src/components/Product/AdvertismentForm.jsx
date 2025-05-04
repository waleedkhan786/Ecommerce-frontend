import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import DropdownButton from "../DropDown/DropdownButton.jsx";
import axios from "axios";
const AdvertismentForm = ({ show, onHide }) => {
  const handleSubmit = async(e)=>{
 e.preventDefault();
 const form = new FormData(e.target);
 const data = await axios.post("/product/add-product",form)
}
  
  return (
    <>
    <Modal show={show} onHide={onHide} scrollable={true}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            autoFocus/>            
      
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" name="description" rows={3} />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Price</Form.Label>
          <Form.Control type="number" name="price"/>    
              </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="category" placeholder="choose Men or Women"/>    
              </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Image</Form.Label>
          <Form.Control type="file" name="image"/>    
              </Form.Group>
              <Modal.Footer>
      
      <Button type="submit" variant="primary" >
     Add
     </Button>
    </Modal.Footer>
      </Form>
    </Modal.Body>
    
  </Modal></>
  );
};

export default AdvertismentForm;