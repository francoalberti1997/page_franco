// src/components/About.js
import React from "react";
import franco from '../About Me/Franco_traje.jpg'
import "../About Me/aboutme.css"

const AboutMe = () => {
  return (
    <div className="about">
        <div className="left">
            <img src={franco} alt="" />
        </div>
        <div className="right">
            <p>Welcome!</p>
            <h1>Soy Franco</h1>
            <h2>Emprendedor</h2>
            <h3>Especialista en negocios digitales</h3>
        </div>
        
    </div>
  );
};

export default AboutMe;