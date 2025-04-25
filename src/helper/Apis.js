import axios from "axios";
export const signup = async( name,email,password)=> {
    try {
        const response = await axios.post("/signup",{name,email,password},{withCredentials:true});
        
        return response;
        
      } catch (error) {
        console.log(error)
       console.log(error.response.data.message)
      }
}

export const login = async(email,password)=>{
  try {

    const response = await axios.post(
      "/login",
      { email,password },
      { withCredentials: true }
    );
return response;
   
  } catch (error) {
    console.log(error);
    console.log(error.response.data.message)
  }
}

export const checkUser = async()=>{
  const res = await axios.get("/check-user")
  return res;
}

export const logout = async()=>{
  const res = await axios.delete("/logout",
   
  )
  return res;
}