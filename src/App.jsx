
import './App.css'
import Sidebar from './components/sidebar/Sidebar.jsx'
import { Header } from './components/header/Header.jsx'
import Explore from './components/explore/Explore.jsx'
import Wrapper from './components/wrapper/Wrapper.jsx'
import {Website} from './components/website/Website.jsx'
import Login from './components/login/Login.jsx'
import Signup from './components/login/signup/Signup.jsx'
import { Routes, Route } from 'react-router-dom'
import  { Toaster } from 'react-hot-toast';
import { AppAuth } from '../Context/AppContext.jsx'
import { useEffect, useState } from 'react'
import NotFound from './Pages/NotFound/NotFound.jsx'
import UpForm from './components/Form/upform.jsx'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
const App = () => {
  const [path, setPath] = useState("");
const [show,setShow] = useState(false);
  const auth = AppAuth();
  useEffect(()=>{
  setPath( window.location.pathname);
  },[])

  useEffect(()=>{
window.location.pathname == "/" ? auth?.user? window.location.pathname = "/dashboard": window.location.pathname = "/website":"";
  },[path, auth?.user ])
  console.log(auth.user);
  
  return(
    <div className="app">
      <Sidebar setShowProduct={setShow}/>
        
      <div className="content">
      <Header/>
      <Explore/>
    
      <Routes>
    {auth?.loggedIn && auth?.user ?  <> <Route path='/dashboard' element={<Wrapper/>}/>
      </>:<></>}
      <Route path="/website" element={<Website/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/UpForm' element={<UpForm/>}/>
      </Routes>
      </div>
      <Toaster/>
      <Modal show={show} onHide={()=>setShow(false)} scrollable={true}>
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
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
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
          <Button variant="secondary">
            Close
          </Button>
          <Button variant="primary">
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );

  
}

export default App
