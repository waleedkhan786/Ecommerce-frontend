import React, { useState } from 'react'
import axios from "axios"
const upform = () => {
    const [image,setImage] = useState("");

    const handleImage = (e) => {
        setImage(e.target.files[0]);
    }

   const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData()
    form.append("image",image);
    axios.post("/profile",form).then(res=>console.log(res))
   }
  return (
    <div><form onSubmit={e=>handleSubmit(e)}>
        <input type="file"  onChange={e=>handleImage(e)}/>
        <button type="submit">Send</button>
        </form></div>
        
  )
}

export default upform;