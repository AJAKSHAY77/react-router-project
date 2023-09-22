import React from 'react'
import "./index.css"
import Header from './components/Header.jsx'
import Footer from './components/Footer'
import Home from './components/home'
import { Outlet } from 'react-router-dom'



const App = () => {
  return (
    <>
   

      <Header />
      <Outlet/>
      
      <Footer/>
      
    </>
 
  )
}

export default App