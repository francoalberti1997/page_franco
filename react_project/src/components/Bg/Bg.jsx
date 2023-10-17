import React from 'react'
import "../Bg/bg.css"

const Bg = (props) => {


    //si la variable es true, se pulsó en el menu,
    //props = true; 
    //si la variable es false, no darle a las letra s´ps
    return (
    <div className={`bg ${props.clicked ? 'bg-active' : ''}`}>
    </div>
  )
}

export default Bg
