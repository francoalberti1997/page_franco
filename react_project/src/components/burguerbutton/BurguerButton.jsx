import React from 'react'
import "../burguerbutton/burguer.css"

const BurguerButton = (props) => {


  return (
    <div className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`} onClick={props.handleClick}>
    <span></span>
    <span></span>
    <span></span>
  </div>
  )
}

export default BurguerButton
