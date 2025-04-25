import { signup,login, checkUser, logout } from "../src/helper/Apis.js";
import { useContext, createContext, useState, useEffect } from "react";
const AppContext = createContext();

export const AppAuthProvider = ({children})=>{
  
const [loggedIn, setLoggedIn] = useState(false);
const [user, setUser] = useState(null);

 useEffect(()=>{
const checkAuth = async ()=>{
   const res = await checkUser();
   if(res.status == 200){
      setUser(res.data.user);
      setLoggedIn(true);
   }else{
      setUser(null);
      setLoggedIn(null);
   }
}
checkAuth()
 },[])
const Signup = async(name,email,password)=>{
   const data = await signup(name,email,password);
if(data){
   setLoggedIn(true)
   setUser(data);
}
console.log("Hello from Contxet")
return data;
}

const Login = async(email,password)=>{
const data = await login(email,password);
if(data){
   setLoggedIn(true)
   setUser(data);
}
console.log("Hello from Contxet")
return data;
}

const Logout = async()=>{
   const data = await logout();
   if(data){
      setUser(null);
      setLoggedIn(false);
      return data;
   }

}

const value = {
loggedIn,
user,
Signup,
Login,
Logout
}
return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}; 
export const AppAuth = ()=>useContext(AppContext);

