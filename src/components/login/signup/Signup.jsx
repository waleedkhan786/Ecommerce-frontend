
import "./Signup.css"
import toast from 'react-hot-toast';
import { AppAuth } from '../../../../Context/AppContext.jsx';
const Signup = () => { 
 
 
 const auth = AppAuth();
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
 try{
  const data = await auth?.Signup(name,email,password);
if(data){
   toast.success("User SignedIn Successfully","signup")
  return window.location.pathname = "/website"
}
 }catch(err){
return toast.error(err.message, "signup")
 }
 
  }
  
  return (
    <div>
       
 <div className='signup-page'>
  
 <div className="info">
            <h1 id='signup-head'>Create new Account!</h1>
            <span id='info'>Join the largest online store</span>
            <p id='signup-para'> Create an account and enjoy exclusive deals offers and discounts</p>
        </div>

  <form >
    <h2>Sign Up</h2>
    <label htmlFor='name'>Name</label>
    <input type='text' id='name' placeholder='Enter your Name'/>
    <label htmlFor='email'>Email</label>
    <input type='email' id='email' placeholder='Enter your email' required/>
    <label htmlFor='password'>Password</label>
    <input type='password' id='password' placeholder='Enter your password' required/>
    <button type='submit' onClick={(e)=>handleSubmit(e)}>Sign Up</button>
  </form>
</div>
    </div>
  )
}

export default Signup