import './index.css'
import './styles/main.css'
// import './styles/reset.css'
import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/Home';
import { Contacts } from './pages/Contacts';
import Projects from "./pages/Projects.js";
import Project from './pages/Project';



function App() {

  return (
    <div className="App">

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/project/:id' element={<Project/>}/>
        <Route path='/contacts' element={<Contacts/>}/>
      </Routes>
        <Footer/>

    </div>
  );
}

export default App;
