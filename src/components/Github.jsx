import { useState } from "react";
import { useEffect } from "react"
import { json } from "react-router-dom";



const Github = () => {
    const[github,setgithub]= useState([])

    useEffect(() => {
        async () => {
              const data = await fetch("https://api.github.com/users/AJAKSHAY77");
        const json = await data.json()
       
        return setgithub(json)

        }
      
   },[])
  return (
      <div>
     followers:{github.name};
     </div>
  )
}

export default Github