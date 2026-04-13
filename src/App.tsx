import React from 'react'
import {Routes,Route} from 'react-router-dom'

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import About from "./components/About";
import Contact from "./components/Contact";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
const App = () => 
  {
    
  return (
    <>
  
    <NavBar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='signup/' element={<SignUp/>}/>
      <Route path='login/' element={<Login/>}/>
      <Route path='about/' element={<About/>}/>
      <Route path='contact/' element={<Contact/>}/>
      <Route path='productdetails/:id' element={<ProductDetails/>}/>
      <Route path='products/' element={<Products/>}/>
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App