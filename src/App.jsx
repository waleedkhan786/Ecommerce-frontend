
import './App.css'
import Sidebar from './components/sidebar/Sidebar.jsx'
import { Header } from './components/header/Header.jsx'
import Explore from './components/explore/Explore.jsx'
import Wrapper from './components/wrapper/Wrapper.jsx'
import {Website} from './components/website/Website.jsx'
import Login from './components/login/Login.jsx'
import Signup from './components/login/signup/Signup.jsx'
import { Routes, Route } from 'react-router-dom'
const App = () => {
  return(
    <div className="app">
         <Sidebar/>
        
      <div className="content">
      <Header/>
      <Explore/>
      <Routes>
        <Route path='/dashboard' element={<Wrapper/>}/>
        <Route path="/website" element={<Website/>}/>
        <Route path="/Signup" element={<Signup/>}/>
        <Route path="/Login" element={<Login/>}/>
      </Routes>
      </div>
    </div>
  );

  
}

export default App
