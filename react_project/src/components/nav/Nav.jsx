import React, { useState } from 'react'
import image from "../nav/minecraft.png"
import image_stars from "../nav/engineer.jpg"
import "../nav/Nav.css"
import BurguerButton from '../burguerbutton/BurguerButton'
import Bg from '../Bg/Bg'
import Marquesina from '../marquesina/Marquesina'
import audio from "../nav/audio_goku.mp3"

const Nav = () => {
    const [clicked, setClicked] = useState(false);
    
    const handleClick = (event) =>{
        // console.log(event.target.parentNode.className)
        if(event.target.parentNode.className != "links "){
            setClicked(!clicked)
        }
    }
    
    return (
    <nav>
        
        <div className='nav-logo'>
        <h2>
            <span>Franco Alberti</span>
            {/* <audio controls src={audio}>AUDIO</audio> */}
        </h2>
        <div className='logo'>
            <img src={image} alt="" />
        </div>

        
        </div>

            <Marquesina/>

        <div className={`links ${clicked ? 'links-active' : ''}`}>
        <a href="#skills" onClick={handleClick}>Skills</a>
        <a href="#proyectos" onClick={handleClick}>Proyectos</a>
        <a href="#h" onClick={handleClick}>Trabaja Conmigo</a>
        <a href="#h" onClick={handleClick}>Sobre Mí</a>
        </div>
        
        <div className='burguer'>
            <BurguerButton clicked = {clicked} handleClick = {handleClick}/>
        </div>
        <Bg clicked = {clicked} />

    </nav>
  )
}

export default Nav
