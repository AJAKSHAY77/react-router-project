import React from 'react'
import { useParams } from 'react-router-dom'


const Uset = () => {
    const{userid}=useParams()
   
  return (
      <div>User :{userid}</div>
  )
}

export default Uset