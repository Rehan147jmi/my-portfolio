import React, { useState } from 'react';
import { Route, Router,Routes } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import About from './components/About';
import Model from './components/Model';


function App() {



  return (
    <>
  
    
      <Header />
      {/* <Home/>
      <About/> */}
        <Routes>
        <Route path="/projects" Component={MyProjects}/>   
        <Route path="/contact" Component={Contact}/>     
        <Route path="/about" Component={About}/>  
        <Route exact path="/" Component={Home}/>       
        </Routes>
    </>
  );
}

export default App;