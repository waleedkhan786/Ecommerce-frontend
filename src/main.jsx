import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import axios from "axios"
import { AppAuthProvider } from '../Context/AppContext.jsx'
axios.defaults.baseURL="http://localhost:8000"
axios.defaults.withCredentials=true
createRoot(document.getElementById('root')).render(
 
  <AppAuthProvider>
     <BrowserRouter>
  <App />
  </BrowserRouter>
  </AppAuthProvider>
)
