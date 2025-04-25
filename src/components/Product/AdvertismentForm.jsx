import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Form from 'react-bootstrap/Form';
import DropdownButton from "../DropDown/DropdownButton.jsx";
const AdvertismentForm = ({ show, onHide }) => {
  return (
    <>
    <Modal show={show} onHide={onHide}>
    <Modal.Header closeButton>
      <Modal.Title>Modal heading</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@example.com"
            autoFocus
          />
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Example textarea</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" >
        Close
      </Button>
      <Button variant="primary" >
     Save Changes
     </Button>
    </Modal.Footer>
  </Modal></>
  );
};

export default AdvertismentForm;
  //  <Form>
  //         <Form.Group className="mb-3">
  //           <Form.Label>Name:</Form.Label>
  //           <Form.Control type="text" autoFocus />
  //         </Form.Group>
  //         <Form.Group className="mb-3">
  //           <Form.Label>Price:</Form.Label>
  //           <Form.Control type="number" />
  //         </Form.Group>
  //         <Form.Group className="mb-3">
  //           <Form.Label>Description:</Form.Label>
  //           <Form.Control as="textarea" rows={2} />
  //         </Form.Group>
  //         <Form.Group className="mb-3">
  //           <Form.Label>Features:</Form.Label>
  //           <Form.Control as="textarea" rows={2} />
  //         </Form.Group>
  //         <Form.Group className="mb-3 w-50">
  //             <Form.Label>Starts on:</Form.Label>
  //             <Form.Control type="date" />
  //           </Form.Group>
  //           <Form.Group className="mb-3 w-50">
  //             <Form.Label>Ends on:</Form.Label>
  //             <Form.Control type="date" />
  //           </Form.Group>
  //           <Form.Group className="mb-3">
  //             <Form.Label>Category:</Form.Label>
  //             <DropdownButton name={"category"}/>    
  //                </Form.Group>
  //           <Form.Group className="mb-3">
  //             <Form.Label>Type:</Form.Label>
  //             <DropdownButton name={"Type"}/>  
  //            </Form.Group>
  //             <Form.Group className="mb-3">
  //           <Form.Label>image:</Form.Label>
  //           <Form.Control type="file" />
  //         </Form.Group>
  //         {/* <div style={{ display: "flex", gap: "30px" }}>
          
  //         </div>
  //         <div
  //           style={{
  //             width: "100%",
  //             display: "flex",
  //             alignItems: "center",
  //             justifyContent: "space-evenly",
  //             gap: "30px",
  //           }}
  //         >
           
  //         </div> */}
         
  //       </Form>