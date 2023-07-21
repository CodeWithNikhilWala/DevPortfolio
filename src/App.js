import './App.css';
import Home from './Components/Home.jsx';
import React from './Components/Home.jsx';
import Email from './Components/Email';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './Components/Contact';
import About from './Components/About';
import Project from './Components/Project';
import Resume from './Components/Resume';
function App() {
  return (
   <>
    <Router>
      <Routes> 
        <Route path="/" element={<Home />} /> 
        <Route path="/Email" element={<Email />} /> 
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact />} /> 
        <Route path="/Project" element={<Project/>} /> 
        <Route path="/Resume" element={<Resume/>} /> 
      </Routes>
    </Router>
  
   
   </>
  );
}

export default App;
