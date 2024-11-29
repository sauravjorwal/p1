// src/App.jsx
// import React from 'react';
import Navber from './Navber';
import TextForm from './TextForm';
import Footer from './Footer';
import SCPAtoCGPAConverter from './SCPAtoCGPAConverter';
import './App.css';
import { motion, useScroll } from "framer-motion";


function App() {
  const { scrollYProgress } = useScroll();

  return (
    <>
    <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Navber />
      <div className="container">
        {/* Display the imported image */}
        
        
        <TextForm />
        
        <div className="converter-wrapper">
          <SCPAtoCGPAConverter />
        </div>
      </div>
      <Footer />   
    </>
  );
}

export default App;
